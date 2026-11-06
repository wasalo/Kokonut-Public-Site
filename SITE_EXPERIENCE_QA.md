# Kokonut Public Site — Experience & Release QA

**Scope:** PR C — site-wide visual/experience polish after the Narrative Foundation and Ecosystem Alignment PRs.  
**Basis:** `KOKONUT_MESSAGING_GUIDE.md`, current Mintlify `docs.json` and the existing custom React/MDX components.  
**Status:** Source changes implemented; **browser/Mintlify preview not yet validated**. This checklist does not certify production behavior.

## Editorial and navigation contract

- Kokonut is **open coordination infrastructure for regenerative agriculture**. Real farms and their local operators come first; DAO, MRV, Intelligence, finance and agents are supporting layers.
- The main site CTA is **Get involved**; it leads to Kokonut's [collaboration page](/ecosystem-wiki/open-collaboration-invitation). The shared footer still provides a direct meeting link for people who specifically want to connect.
- The shared footer should link **How Kokonut works**, Kokonut 101, Framework, Syntropic Agent, Builders and Traction. Its source/evidence path should lead to the Adelphi Hub and not imply certification.
- Every custom-page primary CTA must match its actual destination. For example, the Builders page links to its **six-project repository directory**, not a misleading single-repository GitHub URL.
- The Traction collection is a **historical source archive**, not a live metrics dashboard or an unqualified independent endorsement; the source library provides the distinctions.

## Interaction and accessibility contract

- Standard Mintlify navigation already includes a **Skip to main content** affordance. Avoid duplicating it at the React-snippet layer.
- A keyboard-visible focus ring is required for anchors, buttons, inputs and explicitly focusable custom regions. Use **Kokonut green** on light surfaces and **yellow** on dark hero/feature panels.
- Important CTA/jump links and filter/selector buttons should provide at least a **44px target height** without sacrificing their accessible names or selection states.
- Stateful explorers should expose selections with `aria-pressed` or another appropriate control state; changing the attribute must not remove selected-item styling.
- Live text changes should be announced appropriately, but avoid constantly announcing unrelated sections.
- In the RWA map, selected challenge items expose `aria-pressed`, their details have a stable target ID, empty results expose `role="status"`, and automatic category scroll obeys `prefers-reduced-motion`.
- Decorative avatar and diagram imagery should not introduce redundant descriptions. Informative images must have meaningful alternative text.
- Users requesting reduced motion must not be forced through animations or smooth-scroll transitions.
- Do not introduce new token prices, unreviewed ecological claims or financial-rights representations during a visual polish.

## Preview matrix — manually run before merge

| Viewport / mode | Key checks | Status |
|---|---|---|
| Desktop 1440px, keyboard | Navbar CTA, tab routes, source links, focus ring, no layout shift | Pending |
| Tablet ~768px | Header, multi-column cards, Hero and Architecture Atlas, footer wrapping | Pending |
| Mobile 390px | No horizontal overflow; readable CTAs, card labels, selectable steps, source context | Pending |
| Narrow mobile 320px | No clipped primary buttons, source cards or scroll regions; minimum tap targets | Pending |
| Keyboard only | Reach and activate each regeneration step, RWA filter, selected challenge, Atlas node and linked resources | Pending |
| Reduced motion | No distracting motion; RWA category navigation scrolls without smooth animation | Pending |
| Dark and light Mintlify modes | Documentation chrome, custom-page color contrast, logo readability, focus visibility | Pending |
| Print/PDF | RWA map print control still produces the intended printable view | Pending |

### Page-specific regression scenarios

| Page | Confirm |
|---|---|
| **Home** | The What/Why/How sequence, Adelphi evidence, eight capital forms, Challenge Map link and participation paths still appear in order |
| **Kokonut 101** | Hero, Why jump, detailed reference and source distinctions still render |
| **Framework** | All four development phases, methodology cards, forms of capital, and full-reference link remain |
| **Syntropic Agent** | Both **Virtuals** and **PONS** project links remain; 11-node/13-edge Atlas and farm/rights disclaimers unchanged |
| **Builders** | Six official repository cards, Marketplace `develop` link and primary CTA routing to the cards all work |
| **Traction** | Video/podcast embeds remain lazy, links retain original source destinations, historical qualifier appears before the archive |
| **RWA × ReFi** | 29 challenges, six filter groups, active visual selection, empty-state status, scroll, printing and source link preserved |
| **Shared footer** | New How/Traction paths, project evidence, participation and social links all resolve |

## Verification boundary

**Source-level QA can validate:** route references, JSON parsing, markup balance, CSS bracket balance, control attributes, known code paths and absence of unintended changes.

**Source-level QA cannot validate:** Mintlify build success, runtime React mounting, actual focus/contrast in a browser, breakpoints on physical devices, live remote assets, third-party embeds, or deployment state.

Do not mark the browser checks above as complete without inspecting an actual preview.

## Release review record

- PR: to be filled after creation.
- Reviewer: to be assigned.
- Preview URL: to be supplied by the GitHub/Mintlify workflow, if available.
- Decision: pending visual and accessibility review.
- After merge: recheck public pages and official external launch/source links for unexpected regressions.
