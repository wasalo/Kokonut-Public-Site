/**
 * Builders tab / visual-first developer portal.
 * Full original technical builder contract is maintained at
 * /build-with-kokonut-detailed without removing any TypeScript examples.
 */
export const KokonutBuildersExperience = () => (
  <main className="kok-home kok-builders">
    <section className="kb-hero" aria-labelledby="kb-title">
      <div className="kok-wrap kb-hero-grid">
        <div className="kb-hero-copy">
          <p className="kb-eyebrow"><span className="kok-pulse" aria-hidden="true"></span> KOKONUT BUILDERS / OPEN REGENERATION INFRASTRUCTURE</p>
          <h1 id="kb-title">Build what helps <em>the real world grow.</em></h1>
          <p className="kb-hero-lead">Connect software, data, governance, and AI to real regenerative work. Build with open tools, clear ownership boundaries, and evidence that can be inspected.</p>
          <p className="kb-hero-support">From farm records and MRV to autonomous assistance and onchain coordination, the right contribution starts with the right source of truth.</p>
          <div className="kb-actions">
            <a className="kok-btn kok-btn-primary" href="#kb-surfaces">Find your building path <span aria-hidden="true">↗</span></a>
            <a className="kok-btn kok-btn-outline" href="/build-with-kokonut-detailed">Read the full builder contract <span aria-hidden="true">↗</span></a>
          </div>
          <div className="kb-hero-meta"><span>OPEN SOURCE</span><span>GOVERNED DATA</span><span>REAL FARM CONTEXT</span></div>
        </div>
        <div className="kb-terminal" role="img" aria-label="Illustrative Kokonut developer terminal showing the boundaries between local farms, the shared Framework, Kokonut Intelligence, published evidence, and human decisions. Not an executable command or live system response.">
          <div className="kb-terminal-bar"><span className="kb-terminal-dots" aria-hidden="true"><i></i><i></i><i></i></span><span>architecture / kokonut.network</span><span>REFERENCE MODEL</span></div>
          <div className="kb-terminal-content">
            <p className="kb-terminal-comment">// an interoperable ecosystem, not one universal authority</p>
            <div className="kb-terminal-line"><span>01</span><strong>local_farms</strong><small>operator authority</small><b>FIELD</b></div>
            <div className="kb-terminal-link" aria-hidden="true"></div>
            <div className="kb-terminal-line"><span>02</span><strong>framework</strong><small>shared methods + 13-field baseline</small><b>METHOD</b></div>
            <div className="kb-terminal-link" aria-hidden="true"></div>
            <div className="kb-terminal-line kb-terminal-focus"><span>03</span><strong>intelligence</strong><small>governed data + analytics</small><b>CORE</b></div>
            <div className="kb-terminal-link" aria-hidden="true"></div>
            <div className="kb-terminal-line"><span>04</span><strong>evidence</strong><small>review → publication → provenance</small><b>MRV</b></div>
            <div className="kb-terminal-link" aria-hidden="true"></div>
            <div className="kb-terminal-line"><span>05</span><strong>decisions</strong><small>scoped human / governance review</small><b>HUMAN</b></div>
            <p className="kb-terminal-prompt"><span aria-hidden="true">➜</span> build against contracts <i aria-hidden="true"></i></p>
          </div>
          <div className="kb-terminal-foot"><span className="kok-pulse" aria-hidden="true"></span> source ≠ record ≠ claim ≠ authority</div>
        </div>
      </div>
      <nav className="kok-wrap kb-jump" aria-label="On this page">
        <a href="#kb-surfaces">Where to build</a><a href="#kb-map">System map</a><a href="#kb-contracts">Builder contracts</a><a href="#kb-agents">Agents &amp; governance</a><a href="#kb-contribute">Contribute</a>
      </nav>
    </section>

    <section className="kb-intro" aria-labelledby="kb-why-title">
      <div className="kok-wrap kb-intro-grid">
        <div><p className="kok-kicker">01 / WHY WE BUILD</p><h2 id="kb-why-title">Real-world regeneration needs <em>real digital infrastructure.</em></h2></div>
        <div><p>Regenerative farms produce plans, field observations, expenses, harvests, impact evidence, decisions, and community knowledge. Those records become useful when they can be understood across teams and systems without losing their meaning.</p><p>Kokonut opens up the infrastructure for builders to improve how that work is coordinated, recorded, reviewed, analyzed, and shared.</p><a className="kok-textlink" href="/ecosystem-wiki/kokonut-101/executive-summary">Understand the ecosystem first ↗</a></div>
      </div>
    </section>

    <section className="kb-surfaces" id="kb-surfaces" aria-labelledby="kb-surfaces-title">
      <div className="kok-wrap">
        <div className="kb-heading"><div><p className="kok-kicker">02 / CHOOSE YOUR SURFACE</p><h2 id="kb-surfaces-title">Find the system <em>that owns your work.</em></h2></div><p>Three core open-source entry points, with distinct responsibilities. Check their current README, deployment and branch state before implementing integrations.</p></div>
        <div className="kb-repo-grid">
          <article className="kb-repo kb-repo-main">
            <div className="kb-repo-meta"><span>01 / KNOWLEDGE &amp; METHODS</span><span className="kb-repo-state">PUBLIC REPO</span></div>
            <div className="kb-repo-graphic" aria-hidden="true"><span className="kb-bracket">{'{'}</span><span className="kb-graphic-center">docs.mdx</span><span className="kb-bracket">{'}'}</span></div>
            <h3>Kokonut Public Site</h3>
            <p>Improve Framework documentation, schemas, evidence definitions, navigation, diagrams, and the public developer experience.</p>
            <div className="kb-repo-tags"><span>Mintlify</span><span>MDX</span><span>Framework</span></div>
            <a className="kb-repo-link" href="https://github.com/wasalo/Kokonut-Public-Site">Browse the source repository ↗</a>
          </article>
          <article className="kb-repo">
            <div className="kb-repo-meta"><span>02 / GOVERNED DATA &amp; ANALYTICS</span><span className="kb-repo-state">ACTIVE PLATFORM</span></div>
            <div className="kb-repo-graphic kb-repo-graphic-data" aria-hidden="true"><span>DATA</span><b>→</b><span>REVIEW</span><b>→</b><span>INSIGHT</span></div>
            <h3>Kokonut Intelligence</h3>
            <p>Build data pipelines, governed records, field collection, MRV, analytics, reporting, APIs and bounded agent workflows.</p>
            <div className="kb-repo-tags"><span>PostgreSQL</span><span>Directus</span><span>Python</span></div>
            <a className="kb-repo-link" href="/kokonut-intelligence">Explore the architecture ↗</a>
            <a className="kb-repo-link kb-repo-link-secondary" href="https://github.com/wasalo/Kokonut-Intelligence">Open GitHub repository ↗</a>
          </article>
          <article className="kb-repo">
            <div className="kb-repo-meta"><span>03 / AGENT SERVICES &amp; COMMERCE</span><span className="kb-repo-state kb-repo-state-build">IN DEVELOPMENT</span></div>
            <div className="kb-repo-graphic kb-repo-graphic-agents" aria-hidden="true"><span>AGENT</span><b>⇄</b><span>MARKET</span><b>⇄</b><span>SERVICE</span></div>
            <h3>Agentic Marketplace</h3>
            <p>Explore agent identity, services, job coordination, commerce, escrow, reputation, and integration with governed Intelligence.</p>
            <div className="kb-repo-tags"><span>Agents</span><span>Contracts</span><span>Commerce</span></div>
            <a className="kb-repo-link" href="https://github.com/wasalo/Kokonut-Agentic-Marketplace">Inspect the marketplace repo ↗</a>
          </article>
        </div>
        <p className="kb-source-note">Repository status labels describe documented roles, not verification of a particular release, contract deployment, API path, or production environment. Check the owning repositories before shipping.</p>
      </div>
    </section>

    <section className="kb-architecture" id="kb-map" aria-labelledby="kb-map-title">
      <div className="kok-wrap">
        <div className="kb-heading"><div><p className="kok-kicker">03 / THE BUILDER MAP</p><h2 id="kb-map-title">Connect the layers. <em>Respect the boundaries.</em></h2></div><p>Different systems are canonical for different kinds of work. An integration should not turn a governance decision into farm authority—or a data record into a scientific conclusion.</p></div>
        <div className="kb-architecture-grid">
          <div className="kb-architecture-primary">
            <div className="kb-map-head"><span>RESPONSIBILITY FLOW</span><span>REFERENCE ARCHITECTURE</span></div>
            <div className="kb-map-step"><span>01</span><div><strong>Local farm operators</strong><small>Source activity, decisions and land stewardship</small></div><b>LOCAL</b></div>
            <div className="kb-map-connector" aria-hidden="true">↓</div>
            <div className="kb-map-step"><span>02</span><div><strong>Kokonut Framework</strong><small>Shared methods and compatible 13-field baseline</small></div><b>METHOD</b></div>
            <div className="kb-map-connector" aria-hidden="true">↓</div>
            <div className="kb-map-step kb-map-step-highlight"><span>03</span><div><strong>Kokonut Intelligence</strong><small>Canonical governed records, permissions, analytics and APIs</small></div><b>DATA</b></div>
            <div className="kb-map-connector" aria-hidden="true">↓</div>
            <div className="kb-map-step"><span>04</span><div><strong>Review, MRV &amp; publication</strong><small>Source evidence, bounded claims and published interfaces</small></div><b>EVIDENCE</b></div>
            <div className="kb-map-connector" aria-hidden="true">↓</div>
            <div className="kb-map-step"><span>05</span><div><strong>Human and governance decisions</strong><small>Appropriate reviewers, local operators and DAO scope</small></div><b>AUTHORITY</b></div>
            <div className="kb-map-foot">Agents may assist these workflows; they do not inherit approval, certification or treasury execution rights.</div>
          </div>
          <div className="kb-architecture-aside">
            <div className="kb-aside-heading">BUILDING ACROSS CHAINS</div>
            <a href="/ecosystem-wiki/the-kokonut-dao/dao-layers"><span>GNOSIS</span><strong>Capital governance</strong><small>Moloch DAO and related treasury decisions</small><b>↗</b></a>
            <a href="/kokonut-intelligence"><span>CELO</span><strong>Evidence provenance</strong><small>EAS attestations for selected claims and records</small><b>↗</b></a>
            <a href="/kokonut-protocol"><span>NEAR / PROPOSED</span><strong>Interoperability policy</strong><small>Approved design direction—not deployed capability by assumption</small><b>↗</b></a>
            <a href="/kokonut-x-ai-agents"><span>AGENT LAYER</span><strong>Bounded assistance</strong><small>Draft, validate, analyze and route for human review</small><b>↗</b></a>
          </div>
        </div>
      </div>
    </section>

    <section className="kb-contracts" id="kb-contracts" aria-labelledby="kb-contracts-title">
      <div className="kok-wrap"><div className="kb-heading"><div><p className="kok-kicker">04 / BUILD AGAINST CONTRACTS</p><h2 id="kb-contracts-title">Make data reusable. <em>Keep its meaning intact.</em></h2></div><p>The most important rules protect compatibility and the difference between information, evidence, forecasts, and authority.</p></div>
        <div className="kb-contract-grid">
          <a href="/kokonut-framework/framework-components/common-data-schema" className="kb-contract kb-contract-feature"><div><span>01 / FARM BASELINE</span><b>↗</b></div><strong className="kb-contract-big">13<small> fields</small></strong><h3>A stable starting point.</h3><p>Shared project context for intake and interoperability—not a complete operational database, funding approval, or proof of impact.</p><em>Explore the Common Data Schema</em></a>
          <a href="/ecosystem-wiki/kokonut-farms/measurement-reporting-and-verification" className="kb-contract"><div><span>02 / MRV</span><b>↗</b></div><strong className="kb-contract-symbol" aria-hidden="true">◎</strong><h3>Evidence before interpretation.</h3><p>Keep source observations, measured facts, optional attestations, published states, and impact claims distinguishable.</p><em>Read the evidence contract</em></a>
          <a href="/kokonut-intelligence" className="kb-contract"><div><span>03 / RECORD LIFECYCLE</span><b>↗</b></div><strong className="kb-contract-symbol" aria-hidden="true">⇢</strong><h3>Governed by design.</h3><p>Draft, submitted, verified and published are different record states. A workflow status is not scientific certification.</p><em>Explore Intelligence</em></a>
          <a href="/build-with-kokonut-detailed" className="kb-contract"><div><span>04 / COMPATIBILITY</span><b>↗</b></div><strong className="kb-contract-symbol" aria-hidden="true">⌘</strong><h3>Changes need context.</h3><p>Protect schema fields, API semantics, privacy, permissions, migrations, and downstream consumers.</p><em>Read the complete rules</em></a>
        </div>
        <div className="kb-lifecycle" aria-label="Governed record stages"><div className="kb-lifecycle-header"><strong>A RECORD HAS A LIFECYCLE</strong><span>NOT A SHORTCUT TO TRUTH</span></div><div className="kb-lifecycle-stages"><span>draft</span><b>→</b><span>submitted</span><b>→</b><span>verified</span><b>→</b><span>published</span></div><p>Publication, provenance, scientific validity, privacy and permissions are separate dimensions. Records can also require rejection or rework; forecasts and actuals must remain distinct.</p></div>
      </div>
    </section>

    <section className="kb-agents" id="kb-agents" aria-labelledby="kb-agents-title">
      <div className="kok-wrap kb-agents-grid">
        <div><p className="kok-kicker">05 / INTELLIGENCE &amp; AUTOMATION</p><h2 id="kb-agents-title">Make agents useful. <em>Keep humans accountable.</em></h2><p>AI can help prepare farm reports, detect evidence gaps, analyze operational data, draft proposals, and organize contributions. But it must not quietly award itself verification, publishing, financial, or farm-operating authority.</p><div className="kb-agent-actions"><a className="kok-btn kok-btn-primary" href="/kokonut-x-ai-agents">Explore AI agent architecture ↗</a><a className="kb-text-link" href="/syntropic-agent">Meet the proposed Syntropic Agent ↗</a></div></div>
        <div className="kb-agent-permissions"><div className="kb-permissions-head"><span>AGENT AUTHORITY MODEL</span><span>REVIEW REQUIRED</span></div><div className="kb-permission yes"><span>✓</span><div><strong>Prepare</strong><small>Draft records, reports, analyses and proposals</small></div><b>ALLOWED IN SCOPE</b></div><div className="kb-permission yes"><span>✓</span><div><strong>Recommend</strong><small>Identify gaps, compare forecasts and route review work</small></div><b>ALLOWED IN SCOPE</b></div><div className="kb-permission no"><span>×</span><div><strong>Self-certify</strong><small>Turn model output into verified ecological or financial truth</small></div><b>NOT AUTOMATIC</b></div><div className="kb-permission no"><span>×</span><div><strong>Self-execute</strong><small>Publish trusted claims or transfer treasury funds on its own</small></div><b>NOT AUTOMATIC</b></div><p>Permissions must be scoped to the owning system. Human review, farm authority and Safe owner approvals remain separate controls.</p></div>
      </div>
    </section>

    <section className="kb-pathways" aria-labelledby="kb-pathways-title"><div className="kok-wrap"><div className="kb-heading"><div><p className="kok-kicker">06 / EXPLORE THE STACK</p><h2 id="kb-pathways-title">Follow the technology <em>behind the work.</em></h2></div><p>Discover the specialized implementations below this Builder landing page. Each page separates current capabilities from proposed architecture.</p></div>
      <div className="kb-pathway-grid">
        <a href="/kokonut-intelligence"><span>01 / DATA &amp; ANALYTICS</span><strong>Kokonut Intelligence</strong><p>Governed data, APIs, evidence, reports and decision support.</p><b>Explore platform ↗</b></a>
        <a href="/kokonut-protocol"><span>02 / INTEROPERABILITY</span><strong>Kokonut Protocol</strong><p>NEAR-based cross-chain policy and execution design—not assumed production deployment.</p><b>Explore proposed design ↗</b></a>
        <a href="/kokonut-x-ai-agents"><span>03 / AUTOMATION</span><strong>Kokonut × AI Agents</strong><p>Bounded AI workflows, review rules and marketplace integration boundaries.</p><b>Explore agent systems ↗</b></a>
        <a href="/syntropic-agent"><span>04 / FIELD ORCHESTRATION</span><strong>Syntropic Agent</strong><p>The proposed multichain agent interface connecting regenerative work and infrastructure.</p><b>Meet the agent ↗</b></a>
        <a href="/playbooks/regenerative-finance/summary"><span>05 / APPLIED REFI</span><strong>Regenerative Finance Playbook</strong><p>Connect farm economics, open coordination, evidence and practical implementation.</p><b>Explore the playbook ↗</b></a>
        <a href="/kokonut-framework/Introduction"><span>06 / SHARED METHODOLOGY</span><strong>Kokonut Framework</strong><p>Farm data, developmental phases, ecological methods and evidence interpretation.</p><b>Learn the Framework ↗</b></a>
      </div>
    </div></section>

    <section className="kb-contribute" id="kb-contribute" aria-labelledby="kb-contribute-title">
      <div className="kok-wrap">
        <div className="kb-heading"><div><p className="kok-kicker">07 / GET INVOLVED</p><h2 id="kb-contribute-title">Start with something <em>useful and reviewable.</em></h2></div><p>Good first contributions create clarity, correctness, or better evidence—not extra complexity for its own sake.</p></div>
        <div className="kb-contribute-grid">
          <div><span>01</span><h3>Choose an owning repo</h3><p>Docs, governed data, agent marketplace, DAO interfaces or MRV—the right team owns the right change.</p></div>
          <div><span>02</span><h3>Check the canonical contract</h3><p>Read current schemas, API definitions, deployment manifests, permissions, and evidence states.</p></div>
          <div><span>03</span><h3>Make a bounded improvement</h3><p>Fix a document, strengthen validation, clarify data provenance, or improve a reviewer workflow.</p></div>
          <div><span>04</span><h3>Submit evidence with the change</h3><p>Include relevant tests, before/after examples, migration notes, or rendered previews for review.</p></div>
        </div>
        <div className="kb-first-work"><strong>Good first places to help</strong><p>Documentation quality · schema validation · evidence QA · forecast reconciliation · public dashboards · agent review tooling · governance readers</p><a href="/ecosystem-wiki/open-collaboration-invitation">Explore collaboration opportunities ↗</a></div>
      </div>
    </section>

    <section className="kb-details" aria-labelledby="kb-details-title"><div className="kok-wrap kb-details-grid"><div><p className="kok-kicker">08 / FULL TECHNICAL REFERENCE</p><h2 id="kb-details-title">A compelling entry point. <em>Nothing important left behind.</em></h2><p>The complete original builder guide remains available, including TypeScript interfaces, repository responsibility maps, MRV payloads, attestation details, compatibility rules, authority models, privacy, and quality checklists.</p></div><div className="kb-details-side"><a href="/build-with-kokonut-detailed"><span>THE COMPLETE ORIGINAL GUIDE</span><strong>Read the detailed builder contract <b>↗</b></strong><small>Source contracts · lifecycle · governance · privacy · contribution workflow</small></a><a href="/kokonut-framework/framework-components/common-data-schema"><span>COMPATIBILITY BASELINE</span><strong>Common Data Schema <b>↗</b></strong><small>The current 13-field contract and semantics</small></a><a href="/ecosystem-wiki/kokonut-farms/measurement-reporting-and-verification"><span>EVIDENCE BASELINE</span><strong>MRV Methodology <b>↗</b></strong><small>Source records, review, publication and interpretation</small></a></div></div></section>

    <section className="kb-cta" aria-labelledby="kb-cta-title"><div className="kok-wrap kb-cta-grid"><div><p className="kok-kicker">BUILD WITH KOKONUT</p><h2 id="kb-cta-title">Open code. Real context. <em>Shared progress.</em></h2><p>Start with the documentation, inspect the source, and contribute a clearly scoped improvement to the infrastructure behind regenerative work.</p></div><div className="kb-cta-actions"><a className="kok-btn kok-btn-primary" href="https://github.com/wasalo/Kokonut-Public-Site">Explore GitHub ↗</a><a className="kok-btn kok-btn-outline" href="https://link.kokonut.network/discord">Meet the community ↗</a></div></div></section>
  </main>
);
