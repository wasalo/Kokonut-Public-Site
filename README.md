# Kokonut Network — Public Documentation Site

This repository is the source for the **Kokonut Network public documentation site** — a Mintlify MDX site covering the full Kokonut ecosystem: the Kokonut DAO, the Kokonut Framework, the Adelphi farm, the Agentic Marketplace, and everything in between.

> Kokonut Network is a blockchain-based cooperative that connects Web3 communities to syntropic farms, providing grassroots farmers with access to capital and governance tools while giving DAO members a stake in real-world regenerative agriculture.

**The docs are live at:** [kokonut.network](https://kokonut.network)

---

## What this repository contains

```text
Kokonut-Public-Site/
│
├── ecosystem-wiki/               # The main wiki — organized into four sections
│   ├── kokonut-101/             # Executive summary, problem, solution, vision, manifesto
│   ├── kokonut-farms/           # MRV methodology + all farm pages
│   │   └── adelphi/             # Adelphi farm — summary, crops, SDGs, background story
│   └── the-kokonut-dao/         # DAO architecture, Moloch DAO, Guilds, governance, proposals
│
├── kokonut-framework/            # The Kokonut Framework documentation
│   ├── framework-components/    # Common Data Schema, Pillars of Value, 8 Forms, 5 Principles
│   ├── development-phases/      # Phase I–IV documentation
│   └── framework-add-ons/       # EBF + CRISP ecological impact frameworks
│
├── api-reference/                # OpenAPI spec — Kokonut Farm Registry API
│   └── kokonut-farm-registry.yaml
│
├── snippets/                     # Reusable MDX snippets
├── images/                       # All site images
├── docs.json                     # Mintlify navigation and site configuration
└── README.md                     # This file
```

**Key standalone pages:**

- `build-with-kokonut.mdx` — Developer guide: repos, contracts, Farm Registry API, agent building
- `kokonut-x-ai-agents.mdx` — AI Agents page: ERC-8004, OpenServ, MRV automation, x402 payments
- `glossary.mdx` — 42-term glossary covering Web3, ReFi/Agri, and Kokonut-specific terms

---

## Related repositories

| Repository | Branch | What it contains |
| --- | --- | --- |
| [wasalo/Kokonut-Public-Site](https://github.com/wasalo/Kokonut-Public-Site) | `main` | This repo — the docs site |
| [wasalo/Kokonut-Agentic-Marketplace](https://github.com/wasalo/Kokonut-Agentic-Marketplace) | `develop` | Onchain AI agent labor market — 12 smart contracts, Next.js frontend, OpenServ integration |
| [wasalo/Kokonut-Intelligence](https://github.com/wasalo/Kokonut-Intelligence) | `main` | A repository for the Kokonut Intelligence Layer development |

---

## Local development

This site is built on [Mintlify](https://mintlify.com). To run it locally:

**Prerequisites:** Node.js 18\+

```bash
# Install the Mintlify CLI globally
npm install -g mintlify
 
# Clone this repository
git clone https://github.com/wasalo/Kokonut-Public-Site.git
cd Kokonut-Public-Site
 
# Start the local dev server
mintlify dev
```

The site will be available at `http://localhost:3000`. Changes to any `.mdx` file hot-reload in the browser.

**Useful commands:**

```bash
mintlify dev          # Start local server (port 3000)
mintlify check        # Validate navigation and links in docs.json
```

### MDX parse rules — read before editing

Mintlify uses the Acorn MDX parser. A few patterns break silently or loudly:

| ❌ Breaks | ✅ Use instead |
| --- | --- |
| Fenced code blocks inside `<Tab>` or `<Tabs>` | Move code outside the Tab, or use `~~~` tilde fences |
| `{placeholder}` curly braces in content | Use `[placeholder]` square brackets |
| Nested triple backticks | Use `~~~` tilde fences for inner examples |
| `>=<=` Unicode operators in MDX expressions | Use ASCII `>=<=` |

---

## Contributing

All three Kokonut repositories accept contributions via pull request. Contributions to this docs site earn **Guild Points** in the Communications Guild and are eligible for Loot token awards via DAO proposal.

### Before you open a PR

1. **Check open issues** for existing work on your intended change.
2. **Open an issue first** for anything beyond a typo fix — the Communications Guild reviews inbound issues and can align on scope before you write.
3. **Run `mintlify dev`** locally and confirm your changes render without errors before submitting.
4. **Schema backward-compatibility:** If your change touches the Common Data Schema page or the MRV payload documentation, note in your PR description how existing farm integrations (currently Adelphi) are affected. Breaking schema changes require a migration plan.

### Contribution paths

**Docs improvements** — fix errors, improve clarity, add missing cross-links, update outdated figures:

```bash
# Fork → branch → edit MDX → mintlify dev to preview → PR
git checkout -b fix/my-improvement
# ... edit ...
git commit -m "fix: clarify biochar carbon sequestration figure on MRV page"
git push origin fix/my-improvement
# Open PR to main
```

**New pages** — propose new documentation pages via a GitHub issue first. New pages require a `docs.json` navigation entry and must follow the established page structure (intro paragraph, CardGroup at bottom, SDG tags on relevant sections for farm pages).

**Bounties** — open bounties for documentation tasks are listed. Completion earns both the bounty payment and Guild Points.

**DAO proposals** — larger contributions (new documentation sections, API reference updates, site architecture changes) require a [Framework Upgrade Proposal (KFP)](https://kokonut.network/ecosystem-wiki/the-kokonut-dao/proposal-templates) through the DAO.

### Page structure conventions

All pages in the improved docs follow these conventions:

- **Intro paragraph** before any section heading — no page opens cold on a heading
- **Stats strip** for pages that have headline numbers (farm pages, DAO pages)
- **`<Frame>` wrapper \+ alt text \+ `<sup>` caption** on all images
- **SDG tags** (inline badge divs) on relevant sections in Adelphi farm pages
- **`<Steps>`** for sequential processes; **`<AccordionGroup>`** for expandable reference content
- **`<Note>` / `<Tip>` / `<Warning>`** for callouts — never plain blockquotes for structured alerts
- **CardGroup cols=**{2} at the bottom of every page for navigation

---

## Deployed contracts (Gnosis Chain — live)

| Contract | Address | Purpose |
| --- | --- | --- |
| \$vKKN Voting Token | [`0xc6b075ac3234a7ac729114b27370b552fa284690`](https://gnosisscan.io/token/0xc6b075ac3234a7ac729114b27370b552fa284690) | Soulbound governance token |
| Loot Token | [`0x2508a11aee11ad545bae87cd42131c04613b2099`](https://gnosisscan.io/token/0x2508a11aee11ad545bae87cd42131c04613b2099) | Non-voting economic rights token |
| Vault & Token Manager | [`0x8977c56e979f0d8b76afb5ad85549acd2e96422d`](https://gnosisscan.io/address/0x8977c56e979f0d8b76afb5ad85549acd2e96422d) | Token issuance and smart wallet |
| Main Treasury (SAFE) | [`0xeb55b75328a8dffd45bbf34b7e7efc431a179085`](https://gnosisscan.io/address/0xeb55b75328a8dffd45bbf34b7e7efc431a179085) | Rage-quit-enabled stablecoin treasury |

Chain ID: `100` · RPC: `https://rpc.gnosischain.com` · Explorer: `https://gnosisscan.io`

---

## Key links

| Resource | URL |
| --- | --- |
| **Live docs** | [kokonut.network/docs](https://kokonut.network/docs) |
| **Adelphi Data Hub** | [hub.kokonut.network/projects/41](https://hub.kokonut.network/projects/41) |
| **Kokonut DAO (DAOHaus)** | [link.kokonut.network/dao](https://link.kokonut.network/dao) |
| **Adelphi 3D Orthomap** | [link.kokonut.network/AdelphiOrtho3D](https://link.kokonut.network/AdelphiOrtho3D) |
| **Adelphi Species GeoNode** | [link.kokonut.network/AdelphiSpeciesGeoNode](https://link.kokonut.network/AdelphiSpeciesGeoNode) |
| **Treasury** | [link.kokonut.network/treasury](https://link.kokonut.network/treasury) |
| **Discord** | [link.kokonut.network/discord](https://link.kokonut.network/discord) |
| **Book a call** | [link.kokonut.network/meeting](https://link.kokonut.network/meeting) |
| **Twitter / X** | [@KokonutNetwork](https://x.com/KokonutNetwork) |

---

## License

This documentation is licensed under [MIT](LICENSE). The Kokonut Framework methodology is open-source at [wasalo/kokonut-framework](https://github.com/wasalo/kokonut-public-site).

Contributions to this repository are made under the same MIT license. By submitting a PR, you agree that your contribution can be distributed under the MIT license.