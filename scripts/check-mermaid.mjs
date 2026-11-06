#!/usr/bin/env node
/**
 * Native Mermaid audit for the Kokonut documentation repository.
 *
 * Usage: node scripts/check-mermaid.mjs
 * Zero npm dependencies; scans .md and .mdx only, not React/JSX visualizations.
 *
 * Checks code-fence integrity, branded Mermaid configuration, graph declarations,
 * and agreement with MERMAID_DIAGRAM_REGISTER.md. It is not a substitute for
 * a Mermaid renderer / Mintlify browser preview.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const registerPath = path.join(root, 'MERMAID_DIAGRAM_REGISTER.md');
const ignore = new Set(['.git', 'node_modules', '.mintlify', 'dist', 'build', 'coverage']);
const errors = [];
const counts = new Map();
const requiredTheme = {
  primaryColor: '#e8f5ec',
  primaryTextColor: '#171717',
  primaryBorderColor: '#009F4D',
  secondaryColor: '#fff3c4',
  tertiaryColor: '#ffffff',
  lineColor: '#277445'
};

function listMarkdown(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && !ignore.has(entry.name)) {
      files.push(...listMarkdown(path.join(dir, entry.name)));
    } else if (entry.isFile() && /\.(md|mdx)$/.test(entry.name)) {
      files.push(path.join(dir, entry.name));
    }
  }
  return files;
}

const registry = fs.readFileSync(registerPath, 'utf8');
const expected = new Map();
for (const match of registry.matchAll(/^\|\s*`([^`]+)`\s*\|\s*(\d+)\s*\|/gm)) {
  const p = match[1];
  if (expected.has(p)) errors.push('Duplicate register entry: ' + p);
  expected.set(p, Number(match[2]));
}
if (expected.size === 0) errors.push('No inventory entries found in MERMAID_DIAGRAM_REGISTER.md');

for (const absolutePath of listMarkdown(root)) {
  const p = path.relative(root, absolutePath).replaceAll(path.sep, '/');
  const raw = fs.readFileSync(absolutePath, 'utf8');
  const startPattern = /^[ \t]*(`{3,}|~{3,})[ \t]*mermaid\b[^\n]*$/gm;
  const starts = [...raw.matchAll(startPattern)];
  const fenced = [...raw.matchAll(/^[ \t]*(`{3,}|~{3,})[ \t]*mermaid\b[^\n]*\n([\s\S]*?)^[ \t]*\1[ \t]*$/gm)];

  if (starts.length !== fenced.length) {
    errors.push(p + ': found ' + starts.length + ' Mermaid starts but ' + fenced.length + ' complete fenced blocks');
  }
  if (fenced.length === 0) continue;
  counts.set(p, fenced.length);

  for (const [i, match] of fenced.entries()) {
    const body = match[2].trim();
    const first = body.split('\n')[0].trim();
    const loc = p + ' diagram #' + (i + 1);
    const cfgLine = first.match(/^%%\{init:\s*(\{.*\})\s*\}%%$/);

    if (!cfgLine) {
      errors.push(loc + ': missing Mermaid init configuration');
    } else {
      try {
        const config = JSON.parse(cfgLine[1]);
        if (config.theme !== 'base') errors.push(loc + ': expected base theme');
        for (const [key, value] of Object.entries(requiredTheme)) {
          if (config.themeVariables?.[key] !== value) {
            errors.push(loc + ': unexpected themeVariables.' + key);
          }
        }
      } catch (error) {
        errors.push(loc + ': invalid Mermaid init JSON (' + error.message + ')');
      }
    }
    if (!/(?:^|\n)\s*(flowchart|graph)\s+(LR|RL|TB|TD|BT)\b/.test(body)) {
      errors.push(loc + ': missing supported flowchart direction declaration');
    }
  }
}

for (const [p, count] of expected) {
  if (!counts.has(p)) errors.push(p + ': registered, but no Mermaid diagram was found');
  else if (counts.get(p) !== count) {
    errors.push(p + ': register has ' + count + ', source has ' + counts.get(p));
  }
}
for (const [p, count] of counts) {
  if (!expected.has(p)) errors.push(p + ': unregistered file containing ' + count + ' Mermaid block(s)');
}

const diagrams = [...counts.values()].reduce((sum, n) => sum + n, 0);
const files = counts.size;
console.log('Kokonut native Mermaid: ' + files + ' files / ' + diagrams + ' diagrams');
console.log('Register: ' + expected.size + ' files / ' + [...expected.values()].reduce((sum, n) => sum + n, 0) + ' diagrams');

if (errors.length) {
  console.error('\nFAILED (' + errors.length + ' findings):');
  for (const error of errors) console.error('  - ' + error);
  process.exitCode = 1;
} else {
  console.log('PASS — fences, palette configuration, flowchart headers, and inventory are consistent.');
  console.log('Mintlify rendering, visual contrast, and runtime integration still require preview QA.');
}
