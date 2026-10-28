/**
 * Kokonut 101 executive summary — visual-first orientation.
 * The unabridged original is preserved at executive-summary-detailed.mdx.
 * Uses existing .kok-home design primitives plus scoped .kok-101 rules.
 */
export const KokonutExecutiveSummaryExperience = () => (
  <main className="kok-home kok-101">
    <section className="k101-hero" aria-labelledby="k101-title">
      <div className="kok-wrap k101-hero-grid">
        <div className="k101-hero-content">
          <p className="k101-eyebrow"><span className="kok-pulse" aria-hidden="true"></span> KOKONUT 101 <span aria-hidden="true">/</span> EXECUTIVE SUMMARY</p>
          <h1 id="k101-title">Regeneration takes <em>more than a farm.</em></h1>
          <p className="k101-lead">Kokonut connects locally operated regenerative farms with community participation, accountable capital, shared methods, and evidence anyone can inspect.</p>
          <p className="k101-sublead">One real-world reference farm. Different systems for different responsibilities. Open infrastructure that gets better as communities learn.</p>
          <div className="k101-buttons">
            <a className="kok-btn kok-btn-primary" href="#k101-proof">See the real-world proof <span aria-hidden="true">↗</span></a>
            <a className="kok-btn kok-btn-outline" href="/ecosystem-wiki/kokonut-101/executive-summary-detailed">Read the full executive summary <span aria-hidden="true">↗</span></a>
          </div>
          <div className="k101-hero-meta"><span>Community-led</span><span>Farm-grounded</span><span>Evidence-first</span></div>
        </div>
        <div className="k101-hero-diagram" aria-label="Kokonut coordinates community, governance, farm operators and evidence to create a continuous learning loop." role="img">
          <div className="k101-diagram-top"><span>THE KOKONUT MODEL</span><span>OVERVIEW / 01</span></div>
          <div className="k101-diagram-track"><div className="k101-diagram-step"><span>01</span><strong>People</strong><small>Community & contribution</small></div><div className="k101-diagram-connector" aria-hidden="true"></div><div className="k101-diagram-step"><span>02</span><strong>Coordinate</strong><small>DAO, Guilds & Framework</small></div><div className="k101-diagram-connector" aria-hidden="true"></div><div className="k101-diagram-step"><span>03</span><strong>Regenerate</strong><small>Local farm operations</small></div><div className="k101-diagram-connector" aria-hidden="true"></div><div className="k101-diagram-step"><span>04</span><strong>Verify & learn</strong><small>MRV, Hub & Intelligence</small></div></div>
          <div className="k101-diagram-foot"><span className="k101-loop-symbol" aria-hidden="true">↶</span> LEARNING FLOWS BACK INTO THE NEXT CYCLE</div>
        </div>
      </div>
      <nav className="kok-wrap k101-jump" aria-label="On this page"><a href="#k101-proof">Adelphi</a><a href="#k101-model">How it works</a><a href="#k101-maturity">What is live</a><a href="#k101-participate">Participate</a><a href="#k101-next">Keep reading</a></nav>
    </section>

    <section className="k101-thesis" aria-labelledby="k101-thesis-title">
      <div className="kok-wrap k101-thesis-grid">
        <div><p className="kok-kicker">01 / THE IDEA</p><h2 id="k101-thesis-title">The challenge is not just growing food. <em>It is connecting everything farms need.</em></h2></div>
        <div><p>Land stewardship, infrastructure, patient capital, local expertise, markets, governance, and trustworthy records are often fragmented. Kokonut is designed to help these systems work together.</p><p><strong>Different responsibilities need different mechanisms.</strong> The Moloch DAO coordinates capital; Guilds organize contribution; local farmers operate the land; the Framework provides shared methods; MRV makes activity inspectable.</p><a className="kok-textlink" href="/ecosystem-wiki/kokonut-101/problem">Understand the problem in depth ↗</a></div>
      </div>
    </section>

    <section className="k101-proof" id="k101-proof" aria-labelledby="k101-proof-title">
      <div className="kok-wrap">
        <div className="k101-heading"><div><p className="kok-kicker">02 / PROOF BEFORE PROMISES</p><h2 id="k101-proof-title">Start with Adelphi. <em>Start with what is real.</em></h2></div><p>Adelphi is Kokonut's first live, women-led regenerative reference farm in Gonzalo, Monte Plata, Dominican Republic. Its operations provide a real place to test the model.</p></div>
        <div className="k101-stat-grid">
          <div className="k101-stat"><span>DOCUMENTED MAPPED AREA</span><strong>15,725 <small>m²</small></strong><p>Reference farm footprint</p></div>
          <div className="k101-stat"><span>AGRICULTURAL AREA</span><strong>13,838 <small>m²</small></strong><p>Documented cultivation area</p></div>
          <div className="k101-stat"><span>JOBS SUPPORTED</span><strong>7</strong><p>Documented implementation reference</p></div>
          <div className="k101-stat"><span>POULTRY COMPONENT</span><strong>110</strong><p>Documented free-range hens</p></div>
        </div>
        <div className="k101-evidence">
          <div><span className="k101-evidence-mark" aria-hidden="true">✓</span><strong>Evidence is not a forecast.</strong><p>These are documented reference values—not a real-time dashboard or a guarantee of future production. Field records and progress should be checked in the public Hub.</p></div>
          <div className="k101-evidence-actions"><a className="kok-btn kok-btn-primary" href="https://hub.kokonut.network/projects/41">Inspect the public Data Hub ↗</a><a href="/ecosystem-wiki/kokonut-farms/adelphi/summary">Explore the Adelphi farm profile ↗</a><a href="/ecosystem-wiki/kokonut-farms/measurement-reporting-and-verification">Review the MRV methodology ↗</a><a href="https://publicnouns.wtf/vote/69">Public Nouns Proposal #69 ↗</a></div>
        </div>
      </div>
    </section>

    <section className="k101-system" id="k101-model" aria-labelledby="k101-model-title">
      <div className="kok-wrap">
        <div className="k101-heading"><div><p className="kok-kicker">03 / SYSTEM DESIGN</p><h2 id="k101-model-title">One ecosystem. <em>Different accountabilities.</em></h2></div><p>Kokonut is not one DAO deciding everything. Each layer has its own responsibility, with shared knowledge and public evidence connecting the system.</p></div>
        <div className="k101-system-grid">
          <a className="k101-system-card" href="/ecosystem-wiki/the-kokonut-dao/kokonut-moloch-dao"><span className="k101-card-number">01 / CAPITAL</span><div className="k101-card-mark" aria-hidden="true">◇</div><h3>Moloch DAO</h3><p>Treasury governance, membership, proposals, voting, execution and rage-quit protections.</p><span className="k101-card-action">Learn about capital governance ↗</span></a>
          <a className="k101-system-card" href="/ecosystem-wiki/the-kokonut-dao/kokonut-guilds-dao"><span className="k101-card-number">02 / CONTRIBUTION</span><div className="k101-card-mark" aria-hidden="true">◎</div><h3>Kokonut Guilds</h3><p>Useful work, contributor pathways, domain coordination, and reputation beyond capital.</p><span className="k101-card-action">Explore Guilds ↗</span></a>
          <a className="k101-system-card" href="/kokonut-framework/Introduction"><span className="k101-card-number">03 / METHODS</span><div className="k101-card-mark" aria-hidden="true">✳</div><h3>Shared Framework</h3><p>Farm development phases, common data structures, regenerative principles and impact logic.</p><span className="k101-card-action">Explore the Framework ↗</span></a>
          <a className="k101-system-card" href="/ecosystem-wiki/kokonut-farms/adelphi/summary"><span className="k101-card-number">04 / OPERATIONS</span><div className="k101-card-mark" aria-hidden="true">⌁</div><h3>Local farm operators</h3><p>Real-world agricultural execution, stewardship, people, crops, infrastructure and maintenance.</p><span className="k101-card-action">Meet the reference farm ↗</span></a>
          <a className="k101-system-card" href="/ecosystem-wiki/kokonut-farms/measurement-reporting-and-verification"><span className="k101-card-number">05 / EVIDENCE</span><div className="k101-card-mark" aria-hidden="true">◉</div><h3>MRV + Kokonut Hub</h3><p>Field records, verification methods, public project data and transparent reporting.</p><span className="k101-card-action">Inspect the evidence layer ↗</span></a>
          <a className="k101-system-card" href="/kokonut-intelligence"><span className="k101-card-number">06 / LEARNING</span><div className="k101-card-mark" aria-hidden="true">⌘</div><h3>Kokonut Intelligence</h3><p>Analytics, research, data integration and decision support; advanced agent automation is still developing.</p><span className="k101-card-action">Explore Intelligence ↗</span></a>
        </div>
        <div className="k101-principle"><strong>Interoperability, not uniformity.</strong> A new farm can use shared methods and evidence standards while adapting to local ecology, culture, markets and regulation. <a href="/ecosystem-wiki/kokonut-101/solution">Explore the complete solution ↗</a></div>
      </div>
    </section>

    <section className="k101-flow" aria-labelledby="k101-flow-title"><div className="kok-wrap"><div className="k101-heading"><div><p className="kok-kicker">04 / THE FEEDBACK LOOP</p><h2 id="k101-flow-title">Every cycle should make <em>the next one better.</em></h2></div><p>Capital alone is not the outcome. The goal is to turn funded work into operations, verifiable evidence, and reusable knowledge.</p></div><ol className="k101-flow-steps"><li><span>01</span><strong>Coordinate</strong><p>Governance approves capital; Guilds and contributors organize useful work.</p></li><li><span>02</span><strong>Operate</strong><p>Local stewards make agricultural decisions and carry out farm work.</p></li><li><span>03</span><strong>Verify</strong><p>MRV, records and public data make activities and outcomes inspectable.</p></li><li><span>04</span><strong>Improve</strong><p>Learning feeds back into governance, the Framework, tools and the next farm cycle.</p></li></ol><p className="k101-flow-note">Economic allocations depend on each farm's approved arrangements. Financial forecasts are not guaranteed returns.</p></div></section>

    <section className="k101-maturity" id="k101-maturity" aria-labelledby="k101-maturity-title"><div className="kok-wrap"><div className="k101-heading"><div><p className="kok-kicker">05 / TRANSPARENCY</p><h2 id="k101-maturity-title">What exists today. <em>What comes next.</em></h2></div><p>Clear maturity labels help separate operating systems from expanding pipelines and future ambitions.</p></div>
      <div className="k101-status-list">
        <div><strong>Adelphi farm, Moloch DAO, Kokonut Hub</strong><span className="k101-status k101-live">Live</span><p>Real farm operations, deployed capital governance and public project records.</p></div>
        <div><strong>Kokonut Framework</strong><span className="k101-status k101-live">Live & evolving</span><p>Published methodology in use and subject to continued refinement.</p></div>
        <div><strong>MRV pipeline, Kokonut Intelligence</strong><span className="k101-status k101-active">Active & expanding</span><p>Evidence collection and analytical infrastructure are operating, with coverage and functionality still evolving.</p></div>
        <div><strong>Advanced AI-agent automation</strong><span className="k101-status k101-build">Developing</span><p>Task-specific agent capabilities are being built; do not confuse roadmap features with live operations.</p></div>
        <div><strong>Multi-farm replication</strong><span className="k101-status k101-next">Next frontier</span><p>Applying the model to additional farms is the next major test of reusability.</p></div>
      </div>
      <p className="k101-status-note">Status descriptions reflect the documented ecosystem overview, not a real-time availability monitor. See the <a href="/ecosystem-wiki/kokonut-101/executive-summary-detailed">detailed component-by-component reference</a> for additional context.</p>
    </div></section>

    <section className="k101-identity" aria-labelledby="k101-identity-title"><div className="kok-wrap k101-identity-grid"><div><p className="kok-kicker">06 / ROOTED IN NATURE</p><h2 id="k101-identity-title">Why <em>coconuts?</em></h2><p>Coconut trees are a long-cycle anchor in diversified syntropic systems—not a plan to replace biodiversity with monoculture. They can support multiple product streams while shorter-cycle crops, poultry, and ecological regeneration sustain the wider system.</p><p>Kokonut's documented governance model also connects \$vKKN to coconut trees through a 1:1 relationship. The full explanation and limitations are kept in the detailed summary.</p><a className="kok-textlink" href="/ecosystem-wiki/kokonut-101/executive-summary-detailed">Read the coconut and governance rationale ↗</a></div><div className="k101-identity-art" aria-hidden="true"><div className="k101-tree-crown"><i></i><i></i><i></i><i></i><i></i></div><div className="k101-tree-fruit"><span></span><span></span><span></span></div><div className="k101-tree-trunk"></div><div className="k101-tree-ground"></div><span className="k101-identity-caption">LONG-CYCLE ROOTS · DIVERSE SYSTEMS</span></div></div></section>

    <section className="k101-audience" id="k101-participate" aria-labelledby="k101-audience-title"><div className="kok-wrap"><div className="k101-heading"><div><p className="kok-kicker">07 / PARTICIPATION</p><h2 id="k101-audience-title">Different people. <em>Many ways to contribute.</em></h2></div><p>You do not need to contribute capital to be part of Kokonut. Start with evidence, expertise, collaboration, or infrastructure.</p></div><div className="k101-audience-grid">
      <a href="/ecosystem-wiki/kokonut-farms/adelphi/summary"><span>FOR FARMERS</span><h3>Grow & steward</h3><p>Explore farm methodology, locally led operations and regenerative practice.</p><b>Explore the farm ↗</b></a>
      <a href="/ecosystem-wiki/open-collaboration-invitation"><span>FOR CONTRIBUTORS</span><h3>Offer your skills</h3><p>Join research, documentation, design, agronomy and community work.</p><b>See contribution paths ↗</b></a>
      <a href="/ecosystem-wiki/the-kokonut-dao/dao-layers"><span>FOR GOVERNANCE PARTICIPANTS</span><h3>Understand the treasury</h3><p>Review rights, responsibilities, proposals and member protections.</p><b>Explore governance ↗</b></a>
      <a href="/build-with-kokonut"><span>FOR BUILDERS</span><h3>Improve the infrastructure</h3><p>Contribute to public data, MRV, intelligence and technical tooling.</p><b>Build with Kokonut ↗</b></a>
    </div></div></section>

    <section className="k101-guardrails" aria-labelledby="k101-guardrails-title"><div className="kok-wrap k101-guardrails-grid"><div><p className="kok-kicker">08 / OUR BOUNDARIES</p><h2 id="k101-guardrails-title">Ambition without <em>hand-waving.</em></h2></div><div><p><strong>Not one DAO for everything.</strong> Governance, contribution, farming and technical systems have distinct responsibilities.</p><p><strong>Not a one-size-fits-all farm template.</strong> Local ecology, culture, markets and regulation still determine implementation.</p><p><strong>Not projections disguised as results.</strong> Measured activity, forecasts and unbuilt features are explicitly distinguished.</p><p><strong>Not a trust-me pitch.</strong> The goal is public, inspectable work, open records and accountable learning.</p></div></div></section>

    <section className="k101-next" id="k101-next" aria-labelledby="k101-next-title"><div className="kok-wrap"><p className="kok-kicker">09 / CONTINUE KOKONUT 101</p><h2 id="k101-next-title">This is the map. <em>Explore the reasoning.</em></h2><div className="k101-next-grid"><a href="/ecosystem-wiki/kokonut-101/problem"><span>01 / PROBLEM</span><strong>Why coordination fails</strong><small>Capital, infrastructure, evidence and participation gaps</small><b>↗</b></a><a href="/ecosystem-wiki/kokonut-101/solution"><span>02 / SOLUTION</span><strong>How the layers connect</strong><small>Separate responsibilities, shared infrastructure</small><b>↗</b></a><a href="/ecosystem-wiki/kokonut-101/kokonut-vision"><span>03 / VISION</span><strong>Where Kokonut is going</strong><small>Regenerative ownership and reusable public knowledge</small><b>↗</b></a><a href="/ecosystem-wiki/kokonut-101/manifesto"><span>04 / MANIFESTO</span><strong>What guides the work</strong><small>Values and commitments for growing the ecosystem</small><b>↗</b></a></div><div className="k101-detailed"><div><strong>Need the complete technical and governance context?</strong><p>The original executive summary is preserved in full, including architecture diagrams, governance specifics, status tables, and rationale.</p></div><a className="kok-btn kok-btn-primary" href="/ecosystem-wiki/kokonut-101/executive-summary-detailed">Open detailed reference ↗</a></div></div></section>

    <section className="k101-cta"><div className="kok-wrap k101-cta-grid"><div><p className="kok-kicker">BUILD THE NEXT CYCLE</p><h2>Regenerate what matters. <em>Together.</em></h2><p>Start by inspecting what exists. Then contribute your knowledge, work, or support to what comes next.</p></div><div className="k101-cta-actions"><a className="kok-btn kok-btn-primary" href="https://link.kokonut.network/discord">Join the community ↗</a><a className="kok-btn kok-btn-outline" href="https://link.kokonut.network/meeting">Talk with the team ↗</a></div></div></section>
  </main>
);
