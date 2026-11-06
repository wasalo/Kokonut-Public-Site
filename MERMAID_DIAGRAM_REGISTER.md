# Native Mermaid Diagrams — Kokonut Site Register

**Baseline:** November 6, 2026 · PR: native Mermaid refresh (draft)  
**Source:** current `wasalo/Kokonut-Public-Site` documentation and `KOKONUT_MESSAGING_GUIDE.md`  
**Scope:** ordinary fenced Mermaid diagrams in Markdown / MDX. **Not** the custom React Architecture Atlas, economic flywheel, agent explorer, or other interactive JSX components.

## Audit results

- **42 documentation files** containing ordinary Mermaid code blocks.
- **118 Mermaid diagrams** following the refresh, including a newly added Syntropic Agent current-status companion diagram.
- The **original 10-node / 12-relationship Syntropic Agent Mermaid** remains as a labelled historical baseline to preserve the relationship with the original interactive Atlas.
- Every native Mermaid graph now uses the Kokonut palette: green `#009F4D`, yellow `#FFCD00` (and accessible pale variants), charcoal `#171717`, white `#FFFFFF`; fonts align with Inter where the renderer permits.
- Semantic corrections concentrate on **role and asset rights**, **launch status**, **funds actually received versus forecast**, **human review**, and **provenance versus verified outcomes**.
- No diagram should be read as independent proof that a planned smart contract, service, funding release, crop result, or scientific claim has shipped.

### What changed semantically

1. **Farm-first architecture:** operators decide site work; the DAO governs its capital and members, not every farm's daily operations. Safes and authorized signers execute within documented scopes.
2. **Syntropic Agent:** Virtuals and PONS have public project listings; this is separate from available ACP jobs, unlocked creator fees, funded Revenue Containers, MetaLeX issuer activity, and NEAR cross-chain execution. AI prepares proposals but does not approve them or spend funds.
3. **Kokonut Intelligence and MRV:** observations, reviewed records, public reporting, external scientific claims and optional onchain attestations are different layers.
4. **Finance:** gross forecasts, collected revenue, restricted balances, tax/payable obligations, contractual distributions and actual cash disbursements are distinct financial states. No public-goods or partner revenue split is invented while the executed allocation agreement is unresolved.
5. **Farm evidence:** mapped area and poultry counts are historically documented reference values, not guaranteed live telemetry. Source and time context must accompany changing figures.

## Complete documentation inventory

### Root / project architecture

| Documentation file | Mermaid blocks | Treatment |
| --- | ---: | --- |
| `README.md` | 2 | Revised overview: independent human authority; Agent/Protocol/project maturity |
| `home/ecosystem-overview.mdx` | 1 | Revised governance-to-operations ownership and evidence path |
| `ecosystem-wiki/kokonut-101/executive-summary-detailed.mdx` | 2 | Revised ecosystem and operator-led regeneration cycle |
| `ecosystem-wiki/kokonut-101/problem.mdx` | 1 | Branded visual refresh; existing documented logic preserved |
| `ecosystem-wiki/kokonut-101/solution.mdx` | 2 | Branded visual refresh; existing documented logic preserved |
| `ecosystem-wiki/kokonut-101/kokonut-vision.mdx` | 1 | Branded visual refresh; existing documented logic preserved |

### Governance and contributions

| Documentation file | Mermaid blocks | Treatment |
| --- | ---: | --- |
| `ecosystem-wiki/the-kokonut-dao/dao-layers.mdx` | 2 | Clarified scoped Safe execution versus local operator decisions |
| `ecosystem-wiki/the-kokonut-dao/governance-framework.mdx` | 3 | Branded visual refresh; existing documented logic preserved |
| `ecosystem-wiki/the-kokonut-dao/kokonut-guilds-dao.mdx` | 3 | Branded visual refresh; existing documented logic preserved |
| `ecosystem-wiki/the-kokonut-dao/kokonut-moloch-dao.mdx` | 2 | Branded visual refresh; existing documented logic preserved |

### Farms, MRV and SDGs

| Documentation file | Mermaid blocks | Treatment |
| --- | ---: | --- |
| `ecosystem-wiki/kokonut-farms/measurement-reporting-and-verification.mdx` | 3 | Qualified optional EAS as provenance, not scientific certification |
| `ecosystem-wiki/kokonut-farms/adelphi/summary.mdx` | 1 | Labelled hen-count reference as documented snapshot |
| `ecosystem-wiki/kokonut-farms/adelphi/crops-biodiversity-and-infrastructure.mdx` | 2 | Labelled poultry reference as documented component |
| `ecosystem-wiki/kokonut-farms/adelphi/sustainable-development-goals.mdx` | 3 | Distinguished optional evidence anchor from SDG conclusion |
| `ecosystem-wiki/kokonut-farms/adelphi/problem-and-solution.mdx` | 2 | Branded visual refresh; existing documented logic preserved |
| `ecosystem-wiki/kokonut-farms/adelphi/background-story.mdx` | 1 | Branded visual refresh; existing documented logic preserved |
| `ecosystem-wiki/kokonut-farms/adelphi/crops-and-harvest-forecast.mdx` | 1 | Branded visual refresh; existing documented logic preserved |

### Framework and phases

| Documentation file | Mermaid blocks | Treatment |
| --- | ---: | --- |
| `kokonut-framework/introduction-detailed.mdx` | 1 | Branded visual refresh; existing documented logic preserved |
| `kokonut-framework/why-syntropic-farming.mdx` | 3 | Branded visual refresh; existing documented logic preserved |
| `kokonut-framework/impact-calculator.mdx` | 1 | Branded visual refresh; existing documented logic preserved |
| `kokonut-framework/development-phases/phase-i.mdx` | 1 | Branded visual refresh; existing documented logic preserved |
| `kokonut-framework/development-phases/phase-ii.mdx` | 3 | Branded visual refresh; existing documented logic preserved |
| `kokonut-framework/development-phases/phase-iii.mdx` | 3 | Branded visual refresh; existing documented logic preserved |
| `kokonut-framework/development-phases/phase-iv.mdx` | 3 | Branded visual refresh; existing documented logic preserved |
| `kokonut-framework/framework-components/common-data-schema.mdx` | 2 | Qualified optional EAS record anchoring |
| `kokonut-framework/framework-components/pillars-of-value.mdx` | 1 | Branded visual refresh; existing documented logic preserved |
| `kokonut-framework/framework-add-ons/ecological-impact-frameworks.mdx` | 2 | Removed the attestation-to-impact-claim inference |
| `kokonut-framework/framework-components/framework-features/8-forms-of-capital.mdx` | 3 | Branded visual refresh; existing documented logic preserved |
| `kokonut-framework/framework-components/framework-features/5-principles-of-regeneration.mdx` | 3 | Branded visual refresh; existing documented logic preserved |
| `kokonut-framework/framework-components/framework-features/methodology-positive-impact.mdx` | 3 | Removed attestation as a path proving impact |
| `kokonut-framework/framework-features/Sustainable-Development-Goals.mdx` | 3 | Removed attestation as a path proving SDG outcomes |

### Intelligence, agents and protocol

| Documentation file | Mermaid blocks | Treatment |
| --- | ---: | --- |
| `kokonut-intelligence.mdx` | 5 | Branded visual refresh; existing documented logic preserved |
| `kokonut-x-ai-agents.mdx` | 5 | Branded visual refresh; existing documented logic preserved |
| `build-with-kokonut-detailed.mdx` | 3 | Branded visual refresh; existing documented logic preserved |
| `kokonut-protocol.mdx` | 1 | Revised graph: Virtuals/PONS public listings; NEAR and regulated finance gated |
| `syntropic-agent-detailed.mdx` | 2 | Added 2026 status overlay; original 10-node / 12-link source preserved |

### Regenerative finance

| Documentation file | Mermaid blocks | Treatment |
| --- | ---: | --- |
| `playbooks/regenerative-finance/how-it-works.mdx` | 15 | Branded visual refresh; existing documented logic preserved |
| `playbooks/regenerative-finance/summary.mdx` | 3 | Branded visual refresh; existing documented logic preserved |
| `playbooks/regenerative-finance/regenerative-and-technical-alignment.mdx` | 7 | Branded visual refresh; existing documented logic preserved |
| `playbooks/regenerative-finance/business-model-and-legal.mdx` | 6 | Corrected forecast-versus-collected receipts; authorization before distributions |
| `playbooks/regenerative-finance/introduction.mdx` | 3 | Branded visual refresh; existing documented logic preserved |
| `playbooks/regenerative-finance/case-studies.mdx` | 4 | Branded visual refresh; existing documented logic preserved |

## Authoring standard for future Mermaid diagrams

- Preserve **people and legal authority** as separate nodes from agent drafts, review states and chain execution.
- Use **solid lines** for the documented relationship the page is explaining, and **dashed lines** with explicit labels for planned/conditional paths. A solid edge is still a diagramming convention, not independent deployment proof.
- Name source facts and their maturity: **observed, forecast, reviewed, proposed, actually settled, or public project listing**. If the diagram is historical, label its time period or version beside it.
- Never draw an **EAS hash/attestation → certified ecological impact** relationship. The independent review, sampling and attribution method must actually support such a conclusion.
- Never draw **token valuation/unreleased allocation → farm cash → participant returns** as an automatic sequence. Trace receipts, contractual obligations, budgets, human approvals and reconciliations.
- For a large diagram, prefer a readable **TD** direction, short labels and limited subgraphs. Mintlify supplies zoom and pan; manual preview must still check mobile rendering.
- Use Mermaid's documented `base` theme with Kokonut palette variables at the beginning of each code block. Mintlify's Mermaid component supports the in-diagram `%%{init: ...}%%` directive; Mermaid upstream recommends frontmatter for newer renderers. We deliberately use the directive for compatibility with the current Mintlify syntax and mark migration as an optional future task.
- Keep Mermaid **source-editable**. Do not convert these diagrams to static images or replace the custom interactive site visualizations.
- Run `node scripts/check-mermaid.mjs` after editing a diagram and update this register when a diagram is added, moved, or removed.

### Styled semantic example (illustration; not counted as a production diagram)

```text
%%{init: {"theme":"base","themeVariables":{"primaryColor":"#e8f5ec","primaryTextColor":"#171717","primaryBorderColor":"#009F4D","secondaryColor":"#fff3c4","tertiaryColor":"#ffffff","lineColor":"#277445","fontFamily":"Inter, Arial, sans-serif"}}}%%
flowchart LR
  DATA["Governed farm records"] --> DRAFT["Human-supervised agent draft"]
  DRAFT --> REVIEW["Authorized human review"]
  REVIEW -.->|"if approved"| EXECUTION["Appropriate scoped action"]
  classDef authority fill:#fff3c4,stroke:#b98100,color:#171717,stroke-width:2px;
  class REVIEW authority;
```

## QA / review gates

**Source-level checks:** diagram and file inventory; themed config syntax; editable Mermaid fenced blocks; unique paths; Markdown and MDX intact; unchanged custom JSX diagrams; controlled semantic diff; no fabricated rights or financial guarantees.

**Still required before merge:** render diagrams on the Mintlify preview, especially graph-heavy `playbooks/regenerative-finance/how-it-works`, `kokonut-intelligence`, `syntropic-agent-detailed`, `kokonut-protocol`, DAO, and farm pages. Confirm zoom/pan, labels, contrast and overflow at desktop and 390px/320px mobile. A source check does not establish that every diagram renders across browsers.

**Ownership:** documentation contributors maintain the Mermaid source; farm operators validate local evidence labels; Kokonut Intelligence maintainers validate data/record flows; Protocol and DAO maintainers validate signing and authority diagrams; qualified domain/legal reviewers confirm sensitive claims.

## Primary references

- [Kokonut Intelligence official repository](https://github.com/wasalo/Kokonut-Intelligence)
- [Syntropic Agent official repository](https://github.com/wasalo/Kokonut-Syntropic-Agent)
- [Kokonut Protocol official repository](https://github.com/wasalo/Kokonut-Protocol)
- [Kokonut Agentic Marketplace official repository](https://github.com/wasalo/Kokonut-Agentic-Marketplace) — verify the active implementation branch
- [Kokonut Foundation official repository](https://github.com/wasalo/Kokonut-Foundation)
- [Mermaid theming documentation](https://mermaid.js.org/config/theming.html)
- [Mintlify Mermaid component](https://mintlify.com/docs/components/mermaid-diagrams)

---

**Current snapshot:** 42 files · 118 native diagrams · custom React visuals unaffected.
