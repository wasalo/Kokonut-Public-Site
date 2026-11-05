/**
 * Kokonut homepage narrative v2 — grounded in Kokonut Blurb (November 2026).
 * Explains What / Why / How before technical infrastructure.
 * Source records and independently reviewed claims remain distinct.
 */
const kokChallenges = [
  {id:"capital",num:"01",title:"Capital is hard to access",text:"Agricultural projects can struggle to finance the equipment, inputs and time productive systems need."},
  {id:"infrastructure",num:"02",title:"Infrastructure is fragmented",text:"Water, equipment, logistics, services and coordination are often managed in disconnected systems."},
  {id:"evidence",num:"03",title:"Impact needs credible evidence",text:"Environmental and community outcomes require observations, methods and review—not just a compelling claim."},
  {id:"knowledge",num:"04",title:"Knowledge is scattered",text:"Lessons from one farm are difficult to reuse when data, practices and decisions aren't organized."},
  {id:"participation",num:"05",title:"People need a real voice",text:"Farm operators, contributors and communities need clear roles in decisions that affect their work."},
  {id:"value",num:"06",title:"Value should stay productive",text:"Too much economic value can leave the places where it is created instead of strengthening local capacity."}
];

const kokCycle = [
  {id:"grow",num:"01",name:"Grow",short:"Start with the land",title:"Real farms, locally operated.",text:"Operators work with soil, water, crops, trees, infrastructure and their community. Kokonut Adelphi is the first documented reference farm.",link:"/ecosystem-wiki/kokonut-farms/adelphi/summary",action:"Explore Adelphi"},
  {id:"measure",num:"02",name:"Measure",short:"Record what happens",title:"Make activity observable.",text:"Farm observations, operating expenses, production events and ecological measurements are recorded with context and provenance.",link:"/kokonut-intelligence",action:"Explore Kokonut Intelligence"},
  {id:"verify",num:"03",name:"Verify",short:"Review the evidence",title:"Evidence before impact claims.",text:"Authorized reviewers inspect sources, methods and limitations. A dashboard, attestation or AI summary alone does not certify an ecological outcome.",link:"/ecosystem-wiki/kokonut-farms/measurement-reporting-and-verification",action:"Understand MRV"},
  {id:"govern",num:"04",name:"Govern",short:"Keep authority clear",title:"The right people decide.",text:"Local operators, contributors, organizations and DAO participants exercise different responsibilities. Proposals and funding do not automatically confer farm authority.",link:"/ecosystem-wiki/the-kokonut-dao/dao-layers",action:"Explore governance"},
  {id:"learn",num:"05",name:"Learn",short:"Share what works",title:"Turn experience into reusable knowledge.",text:"The Kokonut Framework, Intelligence and open documentation help teams compare reviewed outcomes, improve plans and adapt methods to new sites.",link:"/kokonut-framework/Introduction",action:"Explore the Framework"},
  {id:"regenerate",num:"06",name:"Regenerate",short:"Build lasting capacity",title:"Make the next cycle stronger.",text:"Where real sales, authorized capital and available surplus permit, approved reinvestment can support productive infrastructure, community capability and further regeneration.",link:"/playbooks/regenerative-finance/summary",action:"Explore regenerative finance"}
];

const kokCapitals = ["Natural","Financial","Social","Human","Material","Intellectual","Cultural","Health"];

export const KokonutHomeExperience = () => {
  const [selectedCycle,setSelectedCycle] = useState("grow");
  const selectedStep = kokCycle.find(x=>x.id===selectedCycle) || kokCycle[0];
  return (
  <main className="kok-home">
    <section className="kok-hero" aria-labelledby="kok-hero-title">
      <div className="kok-wrap kok-hero-layout">
        <div className="kok-hero-text">
          <div className="kok-eyebrow"><span className="kok-pulse" aria-hidden="true"/> OPEN COORDINATION FOR REGENERATIVE AGRICULTURE</div>
          <h1 id="kok-hero-title">Grow the future.<br/><em>Regenerate</em> the present.</h1>
          <p className="kok-lead"><strong>Kokonut is an open network helping communities build regenerative farms.</strong> We connect local farmers, people, capital, shared knowledge, governance and technology so productive landscapes can become stronger over time.</p>
          <p className="kok-hero-support">Starting at Adelphi in the Dominican Republic, we're building reusable infrastructure that helps each new farm learn from the last.</p>
          <div className="kok-actions"><a className="kok-btn kok-btn-primary" href="#kok-how">See how Kokonut works <span aria-hidden="true">↗</span></a><a className="kok-btn kok-btn-outline" href="https://hub.kokonut.network/projects/41">See real farm evidence <span aria-hidden="true">↗</span></a></div>
          <nav className="kok-hero-jumps" aria-label="Explore this introduction"><a href="#kok-why">Why we exist</a><a href="#kok-how">How it works</a><a href="#kok-proof">Adelphi proof</a><a href="#kok-participate">Get involved</a></nav>
          <div className="kok-hero-meta"><span>Real farms</span><span>Open governance</span><span>Public evidence</span></div>
        </div>
        <div className="kok-visual" role="img" aria-label="A regenerative loop linking people, governance, farms, field evidence, and intelligence.">
          <div className="kok-visual-heading"><span>THE REGENERATION LOOP</span><span>01 / 05</span></div>
          <div className="kok-ring kok-ring-one"/><div className="kok-ring kok-ring-two"/>
          <div className="kok-core"><img className="kok-hero-brand-icon" src="/logo/kkn_icon.svg" alt="" aria-hidden="true" width="138" height="138" /></div>
          <div className="kok-node kok-node-people"><small>01</small><strong>People</strong><span>Participation</span></div>
          <div className="kok-node kok-node-gov"><small>02</small><strong>Governance</strong><span>Coordination</span></div>
          <div className="kok-node kok-node-farm"><small>03</small><strong>Farms</strong><span>Regeneration</span></div>
          <div className="kok-node kok-node-evidence"><small>04</small><strong>Evidence</strong><span>Verification</span></div>
          <div className="kok-node kok-node-intel"><small>05</small><strong>Intelligence</strong><span>Learning</span></div>
          <div className="kok-visual-footer"><span className="kok-pulse" aria-hidden="true"/> Designed to improve with every cycle</div>
        </div>
      </div>
    </section>
    <div className="kok-ticker"><div className="kok-wrap"><span>LOCAL STEWARDSHIP</span><span>SHARED KNOWLEDGE</span><span>GOVERNED CAPITAL</span><span>REVIEWABLE EVIDENCE</span></div></div>
    <section className="kok-section kok-why" id="kok-why" aria-labelledby="kok-why-title">
      <div className="kok-wrap">
        <div className="kok-heading kok-why-heading"><div><div className="kok-kicker">01 / WHY KOKONUT EXISTS</div><h2 id="kok-why-title">Regeneration needs <em>more than good intentions.</em></h2></div><p>Real agricultural projects often encounter the same challenges. Kokonut exists to help communities address them together, with local authority and reusable tools.</p></div>
        <div className="kok-why-grid">
          {kokChallenges.map(c=><article className="kok-why-card" key={c.id}>
            <span className="kok-why-index">{c.num} / THE CHALLENGE</span><h3>{c.title}</h3><p>{c.text}</p>
          </article>)}
        </div>
        <div className="kok-why-outro"><strong>Our response: start with a real farm.</strong><span>Build the coordination, methods and evidence around productive agricultural work—not a token looking for a use case.</span><a href="/ecosystem-wiki/kokonut-101/problem">Explore the problem ↗</a></div>
      </div>
    </section>
    <section className="kok-section kok-cycle" id="kok-how" aria-labelledby="kok-how-title">
      <div className="kok-wrap">
        <div className="kok-heading"><div><div className="kok-kicker">02 / HOW KOKONUT WORKS</div><h2 id="kok-how-title">Grow. Measure. Verify.<br/><em>Govern. Learn. Regenerate.</em></h2></div><p>Our proposed coordination cycle connects real farm work with structured evidence, appropriate decisions and learning that strengthens the next cycle.</p></div>
        <div className="kok-cycle-shell">
          <div className="kok-cycle-top"><span>THE REGENERATION CYCLE</span><span>SELECT A STEP TO EXPLORE</span></div>
          <div className="kok-cycle-stages" role="group" aria-label="Explore the Kokonut regeneration cycle">
            {kokCycle.map(st=><button key={st.id} type="button" className={"kok-cycle-step"+(selectedCycle===st.id?" is-active":"")} aria-pressed={selectedCycle===st.id} onClick={()=>setSelectedCycle(st.id)}>
              <span className="kok-cycle-number">{st.num}</span><strong>{st.name}</strong><small>{st.short}</small>
            </button>)}
          </div>
          <div className="kok-cycle-explainer" aria-live="polite">
            <div className="kok-cycle-explainer-icon" aria-hidden="true"><img src="/logo/kkn_icon.svg" width="90" height="90" alt=""/></div>
            <div><span className="kok-cycle-explainer-label">STEP {selectedStep.num} / {selectedStep.name.toUpperCase()}</span>
              <h3>{selectedStep.title}</h3><p>{selectedStep.text}</p>
              <a href={selectedStep.link}>{selectedStep.action} ↗</a>
            </div>
          </div>
          <div className="kok-cycle-returns"><span>↻ THE NEXT CYCLE</span><strong>Reviewed outcomes can lead to better plans, more useful tools and stronger local capacity.</strong></div>
        </div>
        <div className="kok-capital-flow" aria-label="The regenerative economic model in plain language">
          <span>Authorized resources</span><b aria-hidden="true">→</b><span>Productive farm work</span><b aria-hidden="true">→</b><span>Actual products &amp; outcomes</span><b aria-hidden="true">→</b><span>Learning &amp; eligible reinvestment</span>
        </div>
        <p className="kok-cycle-note">A conceptual operating model, not a rigid transaction sequence or a promise of investment returns. Forecast harvests and token prices are not spendable cash; evidence and sensitive claims require qualified review.</p>
      </div>
    </section>
    <section className="kok-section kok-proof" id="kok-proof" aria-labelledby="kok-proof-title"><div className="kok-wrap"><div className="kok-heading"><div><div className="kok-kicker">03 / ON THE GROUND</div><h2 id="kok-proof-title">Rooted in reality.<br/><em>Built to be verified.</em></h2></div><p>Adelphi is Kokonut's first live reference implementation in the Dominican Republic. These figures are documented reference values, not live telemetry.</p></div><div className="kok-proof-grid"><div className="kok-stat"><strong>15,725 <small>m²</small></strong><span>Total mapped farm area</span></div><div className="kok-stat"><strong>13,838 <small>m²</small></strong><span>Documented agricultural area</span></div><div className="kok-stat"><strong>110</strong><span>Documented free-range hens</span></div><div className="kok-stat"><strong>#69</strong><span>Public Nouns funding proposal</span></div></div><div className="kok-proof-actions"><a className="kok-btn kok-btn-primary" href="https://hub.kokonut.network/projects/41">Explore Adelphi public data ↗</a><a className="kok-textlink" href="/ecosystem-wiki/kokonut-farms/adelphi/summary">Read the farm story ↗</a></div><p className="kok-disclaimer">Farm measurements and operating records can change. Consult the linked Data Hub and MRV documentation for current evidence; forecasts are not actual results.</p></div></section>
    <section className="kok-section kok-pillars" aria-labelledby="kok-pillars-title"><div className="kok-wrap"><div className="kok-heading"><div><div className="kok-kicker">04 / SHARED INFRASTRUCTURE</div><h2 id="kok-pillars-title">Think network.<br/><em>Not one giant farm.</em></h2></div><p>Different farms need local choices. Shared methods, knowledge, evidence and software can help each project move forward without one institution controlling everything.</p></div><div className="kok-card-grid">
    <a href="/ecosystem-wiki/kokonut-101/executive-summary" className="kok-card"><span className="kok-card-id">01 / THE STORY</span><span className="kok-card-icon">◎</span><h3>Understand Kokonut</h3><p>Mission, problems, solutions, and the wider ecosystem.</p><span className="kok-card-next">Explore the Wiki ↗</span></a>
    <a href="/ecosystem-wiki/the-kokonut-dao/dao-layers" className="kok-card"><span className="kok-card-id">02 / GOVERNANCE</span><span className="kok-card-icon">◇</span><h3>Coordinate together</h3><p>Capital governance, contributor Guilds, and local responsibility.</p><span className="kok-card-next">Explore the DAO ↗</span></a>
    <a href="/kokonut-framework/Introduction" className="kok-card"><span className="kok-card-id">03 / METHODOLOGY</span><span className="kok-card-icon">✳</span><h3>Repeat what works</h3><p>The framework for farm development and regenerative impact.</p><span className="kok-card-next">Explore the Framework ↗</span></a>
    <a href="/ecosystem-wiki/kokonut-farms/measurement-reporting-and-verification" className="kok-card"><span className="kok-card-id">04 / EVIDENCE</span><span className="kok-card-icon">◉</span><h3>Make impact inspectable</h3><p>Measurement, reporting, verification, and public farm records.</p><span className="kok-card-next">Explore MRV ↗</span></a>
    <a href="/kokonut-intelligence" className="kok-card"><span className="kok-card-id">05 / INTELLIGENCE</span><span className="kok-card-icon">⌘</span><h3>Turn data into learning</h3><p>Open analytics, synthesis, research, and decision support.</p><span className="kok-card-next">Explore Intelligence ↗</span></a>
    <a href="/build-with-kokonut" className="kok-card"><span className="kok-card-id">06 / BUILDERS</span><span className="kok-card-icon">↗</span><h3>Build in the open</h3><p>Software, agents, technical standards, and contribution paths.</p><span className="kok-card-next">Build with Kokonut ↗</span></a>
    </div></div></section>
    <section className="kok-section kok-value" aria-labelledby="kok-value-title">
      <div className="kok-wrap">
        <div className="kok-heading"><div><div className="kok-kicker">05 / WHAT VALUE MEANS</div><h2 id="kok-value-title">Measure more <em>than money.</em></h2></div><p>Food and financial activity matter—but so do healthy ecosystems, skilled people, relationships, culture and community well-being.</p></div>
        <div className="kok-value-panel">
          <div><span className="kok-value-eyebrow">KOKONUT FRAMEWORK</span><h3>Eight Forms of Capital</h3><p>Eight complementary ways to consider changes created by a regenerative system. These are categories for evaluation—not claims that every outcome has already been measured or verified.</p><a href="/kokonut-framework/Introduction">Explore the Framework ↗</a></div>
          <div className="kok-capitals-grid">{kokCapitals.map((name,i)=><div key={name}><span>{String(i+1).padStart(2,"0")}</span><strong>{name}</strong></div>)}</div>
        </div>
      </div>
    </section>
    <section className="kok-section kok-map-spotlight" aria-labelledby="kok-map-title">
      <div className="kok-wrap kok-map-spotlight-shell">
        <div className="kok-map-spotlight-copy">
          <p className="kok-map-overline"><span className="kok-pulse" aria-hidden="true"></span> 06 / EXPLORE THE INFRASTRUCTURE · KOKONUT INTELLIGENCE</p>
          <h2 id="kok-map-title">Go deeper. <em>Explore the challenges behind regeneration.</em></h2>
          <p>Land rights, regenerative economics, evidence, capital, governance and technology don't live in separate worlds. Explore 29 RWA × ReFi challenges—and the Kokonut Intelligence mechanisms proposed to address them.</p>
          <div className="kok-map-feature-stats"><span><strong>29</strong> real-asset challenges</span><span><strong>6</strong> connected systems</span><span><strong>1</strong> project-centered view</span></div>
          <a className="kok-btn kok-btn-primary" href="/rwa-refi-challenge-map">Explore the interactive challenge map <span aria-hidden="true">↗</span></a>
        </div>
        <div className="kok-map-spotlight-visual" aria-label="Preview of six categories in the RWA and ReFi challenge map">
          <div className="kok-map-preview-head"><span>RWA × REFI / SYSTEM EXPLORER</span><span>29 CHALLENGES</span></div>
          <div className="kok-map-preview-core"><span>ONE GOVERNED PROJECT RECORD</span><strong>Farm / Location</strong><small>Land · People · Finance · Evidence</small></div>
          <div className="kok-map-preview-grid">
            <div><b>04</b><span>Place &amp; rights</span></div><div><b>05</b><span>Enterprise &amp; finance</span></div>
            <div><b>03</b><span>Evidence &amp; fieldwork</span></div><div><b>04</b><span>Capital &amp; regulation</span></div>
            <div><b>06</b><span>People &amp; governance</span></div><div><b>07</b><span>Technology &amp; adoption</span></div>
          </div>
          <p className="kok-map-preview-foot">DISCOVER CHALLENGES · INSPECT PROPOSED KI RESPONSES</p>
        </div>
      </div>
    </section>
    <section className="kok-section kok-deep" aria-labelledby="kok-deep-title"><div className="kok-wrap kok-deep-layout"><div><div className="kok-kicker">07 / GO DEEPER</div><h2 id="kok-deep-title">A compelling introduction.<br/><em>None of the context lost.</em></h2><p>This is the front door—not a replacement for the research, methodology, governance records, and technical documentation that make Kokonut useful.</p></div><div className="kok-deep-links"><a href="/home/ecosystem-overview">Read the complete ecosystem overview <span>↗</span></a><a href="/playbooks/regenerative-finance/summary">Regenerative Finance Playbook <span>↗</span></a><a href="/kokonut-x-ai-agents">AI agents and automation architecture <span>↗</span></a><a href="/ecosystem-wiki/open-collaboration-invitation">Open collaboration invitation <span>↗</span></a></div></div></section>
    <section className="kok-join" id="kok-participate"><div className="kok-wrap"><div className="kok-join-layout"><div><div className="kok-kicker">08 / GROW WITH US</div><h2>Regeneration takes<br/><em>all of us.</em></h2><p>Whether you grow food, build software, fund public goods, study impact, or coordinate communities—there is a place to contribute.</p></div><div className="kok-join-actions"><a className="kok-btn kok-btn-primary" href="https://link.kokonut.network/discord">Join our community ↗</a><a className="kok-btn kok-btn-outline" href="https://link.kokonut.network/meeting">Talk with the team ↗</a></div></div>
      <div className="kok-audience-paths">
        <a href="/ecosystem-wiki/kokonut-farms/adelphi/summary"><strong>Farmers &amp; operators</strong><span>See the farm model ↗</span></a>
        <a href="/build-with-kokonut"><strong>Builders</strong><span>Explore open repositories ↗</span></a>
        <a href="/ecosystem-wiki/kokonut-farms/measurement-reporting-and-verification"><strong>Researchers</strong><span>Learn about evidence ↗</span></a>
        <a href="/playbooks/regenerative-finance/summary"><strong>Funding partners</strong><span>Explore the finance approach ↗</span></a>
        <a href="/ecosystem-wiki/open-collaboration-invitation"><strong>Community contributors</strong><span>Discover contribution paths ↗</span></a>
      </div></div></section>
  </main>
);
};
