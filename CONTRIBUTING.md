# Contributing to the Kokonut Public Knowledge Base

Thank you for helping improve Kokonut's public documentation.

This repository is more than a website. It is the public knowledge layer for a regenerative-agriculture ecosystem that includes real farms, governance, MRV, technical infrastructure, research, and open collaboration. Contributions should therefore optimize for clarity, evidence, traceability, and long-term usefulness.

## Contribution principles

Before changing content, keep these principles in mind:

1. **Evidence over claims.** Important statements should be supported by source context whenever possible.
2. **Actuals and forecasts are different.** Estimates, projections, scenarios, targets, and modeled outcomes must be labeled clearly.
3. **Local context matters.** Do not assume a process, crop model, regulation, or ecological intervention transfers unchanged between locations.
4. **Documentation should match deployed reality.** Distinguish live, implemented, pilot, developing, proposed, and deprecated systems.
5. **Public information should be inspectable.** Link readers to source data, governance records, farm evidence, contracts, or methodology where appropriate.
6. **Accessibility matters.** Explain specialist terminology when it is necessary to understand a decision or process.
7. **Prefer open and portable approaches.** Avoid unnecessary vendor lock-in and favor open standards where practical.
8. **Help the reader take the next useful action.** Good documentation should connect concepts to evidence, related pages, contribution paths, or implementation steps.

## Ways to contribute

### Community and knowledge

Examples:

- Documentation improvements
- Research
- Translation
- Communications
- Ecosystem mapping
- Case studies
- Glossary improvements
- Cross-linking and information architecture

### Farm and regeneration

Examples:

- Agronomy
- Syntropic-agriculture documentation
- Crop and biodiversity records
- Farm operations
- MRV methodology
- Field-data structures
- Ecological measurement
- Replication guidance

### Technical

Examples:

- Kokonut Intelligence
- AI-agent workflows
- Smart-contract documentation
- Data schemas
- APIs
- Analytics
- Developer documentation
- Integrations
- Reusable snippets

## Before opening a pull request

For a typo, broken link, formatting fix, or other small documentation correction, a pull request is usually enough.

For substantial changes:

1. Check existing issues and pull requests for related work.
2. Open an issue first when the change affects architecture, methodology, governance, MRV, schemas, APIs, or major navigation.
3. Make the smallest coherent change that solves the problem.
4. Run the documentation locally.
5. Run Mintlify validation before submitting.
6. Explain the evidence and assumptions behind material factual changes.
7. Call out compatibility implications when changing shared schemas, APIs, MRV structures, or reusable conventions.

## Local development

### Prerequisites

- Node.js 18+
- Git
- Mintlify CLI

### Run the docs

```bash
npm install -g mintlify

git clone https://github.com/wasalo/Kokonut-Public-Site.git
cd Kokonut-Public-Site

mintlify dev
```

Then open:

```text
http://localhost:3000
```

Before submitting:

```bash
mintlify check
```

## Mintlify and MDX rules

Mintlify uses an MDX parser, so syntax that looks harmless in Markdown can still break a page.

| Risky pattern | Safer pattern |
| --- | --- |
| Custom Table wrappers | Use standard Markdown tables |
| Fenced code blocks nested inside Tabs or Tab | Move the block outside the tab, or use a compatible alternate fence |
| Nested triple-backtick examples | Use an alternate fence for the inner example |
| Raw placeholder braces in prose | Use square-bracket placeholders |
| Unescaped \$vKKN where MDX parsing is sensitive | Escape the dollar sign when needed |
| Unsourced carbon, yield, revenue, or impact claims | Add source context, label as forecast, or remove |
| Forecasts written as guarantees | Use forecast, estimate, projection, scenario, or assumption |
| Images without alt text | Add descriptive alt text and useful captions |

## Page structure conventions

Most substantial pages should aim for this flow:

1. Short frontmatter description.
2. One clear page promise.
3. Primary CTA or next action near the top when appropriate.
4. Evidence or proof before long explanation.
5. Quick overview table or card group.
6. Mechanism section explaining how the system works.
7. Risks, limits, assumptions, or verification where the page discusses money, impact, carbon, yield, governance, or tokens.
8. Bottom navigation that routes readers to related pages.

Not every page needs every element. Prefer clarity over mechanical templates.

## Farm-page requirements

Farm pages should:

- distinguish current observations from forecasts;
- identify the farm and local context clearly;
- link to Kokonut Hub or other evidence when available;
- reference MRV methodology for impact claims;
- use SDG references only where they are materially relevant;
- avoid treating a forecast as achieved production or revenue;
- explain material measurement limitations.

## Governance-page requirements

Governance pages should:

- distinguish capital governance from contribution pathways when relevant;
- identify trust protections and execution constraints;
- explain proposal, approval, and execution stages clearly;
- distinguish live governance infrastructure from developing or proposed tooling;
- avoid implying that a single governance mechanism represents every coordination process in the ecosystem.

## Evidence and claims

### Prefer

- Direct farm records
- Public governance records
- Deployed contract addresses
- Kokonut Hub records
- Methodology documentation
- Cited research
- Clearly labeled calculations
- Explicit assumptions
- Public attestations and verifiable references

### Avoid

- Unsupported superlatives
- Guaranteed harvest or financial language
- Carbon claims without methodology or context
- Presenting targets as achieved outcomes
- Treating modeled values as measurements
- Copying third-party claims without attribution

When evidence is incomplete, say so.

## Documentation status vocabulary

Use these terms consistently:

| Status | Meaning |
| --- | --- |
| **Live** | Operating in production or active real-world use |
| **Implemented** | Built and available, but not necessarily broadly deployed |
| **Pilot** | Being tested in a limited real-world or controlled setting |
| **In Development** | Actively being built |
| **Proposed** | Documented concept that has not yet been implemented |
| **Deprecated** | Retained for historical context but no longer recommended |

Do not upgrade the maturity of a system through wording alone.

## Review paths

| Contribution | Typical review path |
| --- | --- |
| Small docs fix | Pull-request review |
| New docs page | Issue first for material additions, then PR |
| Farm-data or MRV update | Impact-oriented and technical review |
| Site architecture or navigation | Documentation/communications review; broader governance if material |
| Bounty deliverable | Relevant Guild or bounty process |
| Major Framework update | Framework Upgrade Proposal |
| Governance-process change | Governance review and applicable proposal process |
| API or shared-schema change | Technical review with backward-compatibility analysis |

The exact reviewer may change over time. Use the current governance documentation as the source of truth for active processes.

## Compatibility requirements

Changes to shared infrastructure need more scrutiny than ordinary prose edits.

When modifying a data schema, API surface, MRV payload, reusable snippet, navigation convention, or integration contract, include:

- what changed;
- why it changed;
- affected pages or systems;
- whether the change is backward compatible;
- migration guidance if it is not;
- evidence that relevant examples still work.

## AI- and agent-assisted contributions

AI tools are welcome as part of the contribution workflow, but generated content is not exempt from review.

Contributors remain responsible for:

- factual accuracy;
- source quality;
- verifying links and contract addresses;
- distinguishing actuals from forecasts;
- preserving local and governance context;
- checking that generated MDX renders correctly;
- disclosing materially AI-generated research or analysis when that context affects trust or provenance.

Machine-generated consensus, fabricated citations, invented metrics, and unreviewed public claims are not acceptable.

## Pull-request guidance

A useful PR description should explain:

- **Problem:** What was unclear, broken, missing, or outdated?
- **Change:** What did you modify?
- **Evidence:** What sources or repository context support the change?
- **Risk:** Could the change affect navigation, interpretation, schemas, integrations, or governance?
- **Validation:** What did you test?

Keep unrelated changes in separate pull requests when practical.

## Governance routes for material changes

Use the current governance documentation when a contribution requires coordination beyond a normal pull request:

- [Proposal Templates](ecosystem-wiki/the-kokonut-dao/proposal-templates.mdx)
- [Governance Framework](ecosystem-wiki/the-kokonut-dao/governance-framework.mdx)
- [DAO Layers](ecosystem-wiki/the-kokonut-dao/dao-layers.mdx)
- [Kokonut Guilds](ecosystem-wiki/the-kokonut-dao/kokonut-guilds-dao.mdx)

## License

This repository is licensed under [CC BY-SA 4.0](LICENSE).

By submitting a contribution, you agree that your contribution can be distributed under the same license.
