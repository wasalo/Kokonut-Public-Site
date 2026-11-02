/**
 * Visual-first Syntropic Agent landing, grounded in the full original
 * public Syntropic Agent PRD at /syntropic-agent-detailed.
 *
 * No simulated live metrics, deployed-token claims, or automatic approvals.
 * The architecture atlas is a standalone, interactive system visualization.
 * The complete native Mermaid source remains in the detailed technical reference.
 */
const agentCapabilities = [
 {num:"01",icon:"✳",label:"Farm intelligence",desc:"Organize crops, soil, water, nurseries, harvests and operator follow-ups into useful plans.",tag:"FIELD OPERATIONS"},
 {num:"02",icon:"◎",label:"Evidence preparation",desc:"Spot missing observations, assemble review-ready MRV packages and retain provenance.",tag:"MRV & REVIEW"},
 {num:"03",icon:"▥",label:"Capital coordination",desc:"Draft budgets, compare planned and actual costs, and prepare proposals for the proper approvers.",tag:"FINANCIAL CLARITY"},
 {num:"04",icon:"⟡",label:"Cross-chain coordination",desc:"Prepare scoped, chain-neutral requests through a planned Protocol and NEAR Hub approval path.",tag:"PROPOSED INTEGRATION"},
 {num:"05",icon:"↗",label:"Agent services",desc:"Package bounded research and evidence-preparation services for partners and other agents.",tag:"PLANNED COMMERCE"},
 {num:"06",icon:"↻",label:"Shared learning",desc:"Help teams compare approved results and adapt practices to the next local context.",tag:"REPLICATION SUPPORT"}
];
const chainRoles=[
 {network:"Base",label:"Agent identity + services",details:"Virtuals-based commerce and capital formation are planned; the Base economy is distinct from NEAR.",status:"PROPOSED",glyph:"B"},
 {network:"NEAR",label:"Cross-chain policy hub",details:"Planned Chain Signatures-based signing orchestration under explicit authorization and reconciliation.",status:"PROPOSED",glyph:"N"},
 {network:"Gnosis",label:"Existing DAO + Safe",details:"DAO and Safe infrastructure exists independently of the agent; owner approvals remain required.",status:"EXISTING INFRASTRUCTURE",glyph:"G"},
 {network:"Celo",label:"Evidence provenance",details:"Existing EAS provenance workflows support selected public records; attestations are not scientific proof.",status:"EXISTING INFRASTRUCTURE",glyph:"C"}
];
const milestones=[
 {name:"Strategic design",status:"Specification prepared",level:"specified"},
 {name:"Hermes + Intelligence integrations",status:"Planned / integration-dependent",level:"planned"},
 {name:"NEAR Hub + cross-chain demonstration",status:"Planned",level:"planned"},
 {name:"Agent commerce + service validation",status:"Planned",level:"planned"},
 {name:"Reviewed farm operating proof",status:"Planned",level:"planned"}
];
export const KokonutSyntropicHero = () => (
 <div className="kok-home ksa-page">
   <section className="ksa-hero" aria-labelledby="ksa-title">
    <div className="kok-wrap ksa-hero-grid">
      <div className="ksa-hero-copy">
        <p className="ksa-eyebrow"><span className="ksa-pulse" aria-hidden="true"></span> KOKONUT SYNTROPIC AGENT / AI × REAL-WORLD REGENERATION</p>
        <h1 id="ksa-title">One agent. <em>Many systems.</em> Real-world regeneration.</h1>
        <p className="ksa-lead">Meet Kokonut's proposed human-supervised AI teammate. It connects farm activity, governed intelligence, community coordination and multichain infrastructure—turning field records into better plans for people to review and act on.</p>
        <p className="ksa-hero-note">The agent prepares and coordinates. Farmers, domain reviewers, organizations and DAO signers make the decisions.</p>
        <div className="ksa-actions">
          <a className="kok-btn kok-btn-primary" href="#ksa-mermaid-map">Explore the architecture <span aria-hidden="true">↗</span></a>
          <a className="kok-btn kok-btn-outline" href="/syntropic-agent-detailed">Read full architecture <span aria-hidden="true">↗</span></a>
        </div>
        <div className="ksa-hero-status"><span className="ksa-status-dot" aria-hidden="true"></span> PRODUCT DIRECTION / ROADMAP — NOT A CLAIM OF DEPLOYMENT</div>
      </div>
      <div className="ksa-orbit-card" role="img" aria-label="Illustrative orchestration loop with Syntropic Agent in the center, connecting farm records, governed intelligence, human review and planned multichain execution.">
        <div className="ksa-orbit-card-top"><span>THE COORDINATION LAYER</span><span>CONCEPT / 01</span></div>
        <div className="ksa-orbit-scene">
          <div className="ksa-ring ksa-ring-one" aria-hidden="true"></div><div className="ksa-ring ksa-ring-two" aria-hidden="true"></div>
          <div className="ksa-orbit-node ksa-orbit-farm"><small>01 / FROM THE FIELD</small><strong>Farms + people</strong></div>
          <div className="ksa-orbit-node ksa-orbit-data"><small>02 / SOURCE OF TRUTH</small><strong>Intelligence</strong></div>
          <div className="ksa-orbit-node ksa-orbit-review"><small>03 / AUTHORIZATION</small><strong>Human review</strong></div>
          <div className="ksa-orbit-node ksa-orbit-chains"><small>04 / PLANNED ROUTE</small><strong>Protocol + chains</strong></div>
          <div className="ksa-orbit-core">
            <div className="ksa-core-avatar-wrap">
              <img src="/images/syntropic-agent-avatar.png" alt="Kokonut Syntropic Agent avatar" className="ksa-core-avatar" width="108" height="108" />
            </div>
            <span>AGENT / HERMES</span><small>Draft · Analyze · Coordinate</small>
          </div>
        </div>
        <div className="ksa-orbit-foot"><span><i aria-hidden="true"></i> REVIEWABLE BY DESIGN</span><span>NO UNRESTRICTED EXECUTION</span></div>
      </div>
    </div>
    <nav className="kok-wrap ksa-jump" aria-label="On this page">
      <a href="#ksa-mermaid-map">Architecture</a><a href="#ksa-workflow">From field to action</a><a href="#ksa-capabilities">Capabilities</a><a href="#ksa-chains">Chains</a><a href="#ksa-safety">Authority</a><a href="#ksa-maturity">Roadmap</a>
    </nav>
   </section>
 </div>
);
export const KokonutSyntropicExperience = () => (
 <div className="kok-home ksa-page ksa-story">
  <section className="ksa-philosophy" id="ksa-workflow" aria-labelledby="ksa-workflow-title">
   <div className="kok-wrap">
    <div className="ksa-section-head"><div><p className="ksa-kicker">02 / FROM FIELD TO DECISION</p><h2 id="ksa-workflow-title">Data becomes useful <em>when people can act on it.</em></h2></div><p>Syntropic farming connects ecological succession with daily decisions. The agent is designed to reduce the work of connecting records, identifying gaps and preparing the next step—without displacing operators.</p></div>
    <div className="ksa-steps">
      <div><span>01 / RECORD</span><strong>Farm activity</strong><p>Operator observations, crops, budgets, work orders and other approved sources.</p></div>
      <div><span>02 / GOVERN</span><strong>Intelligence</strong><p>Structured canonical data, permissions, review status and provenance.</p></div>
      <div><span>03 / PREPARE</span><strong>Syntropic Agent</strong><p>Draft briefs, highlight evidence gaps, assemble plans and simulate requests.</p></div>
      <div><span>04 / APPROVE</span><strong>People + governance</strong><p>Independent agronomic, operational, legal or treasury authorization as required.</p></div>
      <div><span>05 / LEARN</span><strong>Verified outcomes</strong><p>Reconcile completed actions and return reviewed observations to the next farm cycle.</p></div>
    </div>
    <div className="ksa-operator-note"><span className="ksa-note-symbol" aria-hidden="true">↻</span><p><strong>The regenerative loop:</strong> observe → prepare → review → act → learn. An agent recommendation is a draft, not an approved work order, financial transaction or ecological finding.</p></div>
   </div>
  </section>
  <section className="ksa-capabilities" id="ksa-capabilities" aria-labelledby="ksa-capabilities-title">
   <div className="kok-wrap">
    <div className="ksa-section-head"><div><p className="ksa-kicker ksa-kicker-with-avatar"><img src="/images/syntropic-agent-avatar.png" alt="" aria-hidden="true" width="42" height="42" loading="lazy" />03 / WHAT IT CAN BE BUILT TO DO</p><h2 id="ksa-capabilities-title">Six useful capabilities. <em>One accountable teammate.</em></h2></div><p>These are intended product surfaces, not a list of verified features in production. Availability depends on implementation, tested permissions and release maturity.</p></div>
    <div className="ksa-capability-grid">{agentCapabilities.map(c=><article className="ksa-capability" key={c.num}><span className="ksa-cap-number">{c.num} / {c.tag}</span><span className="ksa-cap-icon" aria-hidden="true">{c.icon}</span><h3>{c.label}</h3><p>{c.desc}</p></article>)}</div>
   </div>
  </section>
  <section className="ksa-farms" aria-labelledby="ksa-farms-title">
   <div className="kok-wrap">
    <div className="ksa-section-head"><div><p className="ksa-kicker">04 / GROUNDED IN THE DOMINICAN REPUBLIC</p><h2 id="ksa-farms-title">Not born in a data center. <em>Rooted in farm work.</em></h2></div><p>The mission begins with an existing reference farm and a second planned development workstream. Lessons should be carried forward only with appropriate local validation.</p></div>
    <div className="ksa-farms-grid">
      <article className="ksa-farm ksa-farm-adelphi"><span className="ksa-farm-meta">KOKONUT ADELPHI <b>DOCUMENTED FARM</b></span><div className="ksa-farm-visual" aria-hidden="true"><span>✳</span><span>☘</span><span>✳</span></div><h3>The existing reference.</h3><p>Adelphi already has real operators, cultivation, infrastructure and public farm records. The agent is proposed to improve coordination around this existing work—not to claim it created it.</p><a href="/ecosystem-wiki/kokonut-farms/adelphi/summary">Explore Adelphi ↗</a><a href="https://hub.kokonut.network/projects/41">Inspect public records ↗</a></article>
      <article className="ksa-farm ksa-farm-terra"><span className="ksa-farm-meta">KOKONUT TERRA VIVA <b>PLANNED WORKSTREAM</b></span><div className="ksa-farm-visual" aria-hidden="true"><span>□</span><span>▤</span><span>□</span></div><h3>Test what can travel.</h3><p>Terra Viva is a development and replication candidate. Proposed construction, cultivation and revenue are not completed outcomes; local ecology and community context still determine the plan.</p><a href="/syntropic-agent-detailed">Review the workstreams ↗</a></article>
    </div>
   </div>
  </section>
  <section className="ksa-chains" id="ksa-chains" aria-labelledby="ksa-chains-title">
   <div className="kok-wrap">
    <div className="ksa-section-head"><div><p className="ksa-kicker">05 / MULTICHAIN, NOT MULTIPLIED AUTHORITY</p><h2 id="ksa-chains-title">One orchestration identity. <em>Different chain responsibilities.</em></h2></div><p>A chain-specific service or token does not automatically convey governance rights, treasury assets, land rights or farm revenue. Network maturity varies.</p></div>
    <div className="ksa-chain-grid">{chainRoles.map(c=><article className="ksa-chain" key={c.network}><div className="ksa-chain-top"><span className="ksa-chain-icon" aria-hidden="true">{c.glyph}</span><span className={c.status==="PROPOSED"?"ksa-chain-status is-planned":"ksa-chain-status"}>{c.status}</span></div><h3>{c.network}</h3><strong>{c.label}</strong><p>{c.details}</p></article>)}</div>
    <div className="ksa-chain-warning"><b>Planned token economics ≠ operating revenue.</b><span>Separate Base/Virtuals and NEAR/Nearly arrangements have different rights and assumptions. Tax and reward details belong in the <a href="/syntropic-agent-detailed">technical reference</a>, with legal, accounting and contract verification before any launch.</span></div>
   </div>
  </section>
  <section className="ksa-safety" id="ksa-safety" aria-labelledby="ksa-safety-title">
   <div className="kok-wrap ksa-safety-grid">
    <div><p className="ksa-kicker">06 / HUMAN OVERSIGHT</p><h2 id="ksa-safety-title">Intelligence can propose. <em>Authority stays with people.</em></h2><p>Farm operators, legal entities, scientific reviewers and DAO signers maintain their distinct rights. The agent cannot treat a prompt, approval-required flag or blockchain signature as permission to self-execute a protected action.</p><a className="kok-btn kok-btn-primary" href="/kokonut-x-ai-agents">Read the agent safety architecture ↗</a></div>
    <div className="ksa-permissions">
      <div className="ksa-permission-head">AUTHORITY BOUNDARY <span>HUMAN REVIEW REQUIRED</span></div>
      <div className="ksa-permission-yes"><span aria-hidden="true">✓</span><div><strong>Prepare</strong><small>Draft analysis, budgets, reports, proposals and unsigned transactions</small></div></div>
      <div className="ksa-permission-yes"><span aria-hidden="true">✓</span><div><strong>Recommend</strong><small>Surface gaps, compare scenarios and route work for appropriate review</small></div></div>
      <div className="ksa-permission-no"><span aria-hidden="true">×</span><div><strong>Self-certify</strong><small>Verify ecological impact or publish trusted evidence without review</small></div></div>
      <div className="ksa-permission-no"><span aria-hidden="true">×</span><div><strong>Self-execute</strong><small>Transfer funds, change governance or sign protected transactions independently</small></div></div>
      <div className="ksa-permission-foot">A proposed plan is not a transaction. An attestation is not scientific proof.</div>
    </div>
   </div>
  </section>
  <section className="ksa-maturity" id="ksa-maturity" aria-labelledby="ksa-maturity-title">
   <div className="kok-wrap">
    <div className="ksa-section-head"><div><p className="ksa-kicker">07 / MILESTONES &amp; PROOF</p><h2 id="ksa-maturity-title">Plans are visible. <em>Proof must be earned.</em></h2></div><p>We distinguish specifications, integration targets, released services, and evidence-backed real-world outcomes. No fabricated live counters or unverified revenue totals are displayed.</p></div>
    <div className="ksa-roadmap">{milestones.map((m,i)=><div className="ksa-roadmap-row" key={m.name}><span className="ksa-roadmap-index">{String(i+1).padStart(2,"0")}</span><strong>{m.name}</strong><span className={m.level==="specified"?"ksa-roadmap-status is-specified":"ksa-roadmap-status"}>{m.status}</span></div>)}</div>
    <div className="ksa-proof-cta"><div><span>PUBLIC EVIDENCE IS THE STARTING POINT</span><strong>Explore Adelphi's existing records—not simulated agent metrics.</strong></div><a className="kok-btn kok-btn-primary" href="https://hub.kokonut.network/projects/41">View Adelphi Data Hub ↗</a></div>
   </div>
  </section>
  <section className="ksa-deep" aria-labelledby="ksa-deep-title">
    <div className="kok-wrap ksa-deep-grid"><div><p className="ksa-kicker">08 / KEEP THE SUBSTANCE</p><h2 id="ksa-deep-title">The introduction is visual. <em>The specification stays complete.</em></h2><p>Nothing from the original documentation has been discarded. Explore the original Mermaid diagram, agent capabilities, detailed economic assumptions, chain responsibilities, evidence constraints, maturity tables, repository references and FAQs.</p></div>
    <div className="ksa-deep-links">
      <a href="/syntropic-agent-detailed"><span>THE FULL ORIGINAL REFERENCE</span><strong>Architecture, economics, roadmap &amp; FAQs <b>↗</b></strong></a>
      <a href="/kokonut-intelligence"><span>GOVERNED DATA</span><strong>Kokonut Intelligence <b>↗</b></strong></a>
      <a href="/kokonut-protocol"><span>CROSS-CHAIN POLICY</span><strong>Kokonut Protocol <b>↗</b></strong></a>
      <a href="/build-with-kokonut"><span>CONTRIBUTE</span><strong>Build with Kokonut <b>↗</b></strong></a>
    </div></div>
  </section>
  <section className="ksa-cta" aria-labelledby="ksa-cta-title"><div className="kok-wrap ksa-cta-grid"><div><div className="ksa-avatar-chip"><img src="/images/syntropic-agent-avatar.png" alt="" aria-hidden="true" width="52" height="52" loading="lazy" /><span>Kokonut Syntropic Agent</span></div><p className="ksa-kicker">THE NEXT FARM CYCLE STARTS WITH PEOPLE</p><h2 id="ksa-cta-title">Better farm decisions. <em>Accountable work.</em></h2><p>Bring your expertise in agronomy, data, AI, governance or regenerative finance to help make these tools practical and trustworthy.</p></div><div className="ksa-cta-actions"><a className="kok-btn kok-btn-primary" href="/ecosystem-wiki/open-collaboration-invitation">Explore collaboration ↗</a><a className="kok-btn kok-btn-outline" href="https://link.kokonut.network/discord">Join the community ↗</a></div></div></section>
 </div>
);
