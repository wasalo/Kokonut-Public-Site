/**
 * RWA × ReFi: port of the reference HTML from Kokonut-Intelligence
 * commit a3187b174297e93806b062717274dbc5b0dd291f.
 * Preserves all original 29 challenge titles, descriptions, mechanisms and tags.
 * React state replaces the source's document.getElementById/event-listener code.
 * Mintlify provides useState to MDX JSX snippets without cross-snippet imports.
 */
    const groups = [
      { id: "all", label: "All 29" },
      { id: "place", label: "Place & rights" },
      { id: "enterprise", label: "Enterprise & finance" },
      { id: "evidence", label: "Evidence & fieldwork" },
      { id: "capital", label: "Capital & regulation" },
      { id: "governance", label: "People & governance" },
      { id: "ecosystem", label: "Technology & adoption" }
    ];

    const challenges = [
      {
        n: 1, group: "place", title: "Rename the frame: real-asset projects",
        challenge: "“Real World Assets” implies everything else is unreal; even DeFi is increasingly connected to the physical economy.",
        mechanism: "KI’s core record is a farm or location with stewardship, people, operations, finance and evidence. Position the platform around real-asset project intelligence; treat tokens as one possible representation.",
        tags: ["Location + farm registry", "Project intelligence", "CIDS"]
      },
      {
        n: 2, group: "place", title: "Make land and legal learning part of delivery",
        challenge: "Projects often lack practical education and guidance on law and real estate.",
        mechanism: "Use extension modules, peer groups, training records and assessment workflows to deliver land-tenure, permitting and real-estate learning alongside farm implementation. Partner-authored material can be tied to the people, location and actions it applies to.",
        tags: ["Extension learning", "Peer groups", "Training records"]
      },
      {
        n: 3, group: "place", title: "Turn tenure into a governed stewardship commitment",
        challenge: "Climate and nature projects need land, permits and use agreements; unclear rights put projects and stakeholders at risk.",
        mechanism: "KI’s Land Stewardship Trust records community/cooperative/customary/lease stewardship models, anti-speculation terms, commons-transition paths, reinvestment commitments, community control and veto rights. Link these to a mapped location, farm registry, evidence, outcomes and recurring adaptive reviews.",
        tags: ["Land Stewardship Trust", "PostGIS", "Farm registry", "Adaptive review"]
      },
      {
        n: 4, group: "enterprise", title: "Make the regenerative business investable",
        challenge: "Many projects lack the business model and operating plan needed for investment and long-term growth.",
        mechanism: "KI assembles location-level business plans from market analysis, farm NOI, reference-class forecasts, budgets and variance, value-stream bottlenecks, SWOT and strategy. The nine-block Business Model Canvas, revenue streams, pricing, cost structure and break-even analysis turn operating data into a financeable plan.",
        tags: ["Business Plan", "Business Model Canvas", "Budget + variance", "Reference-class forecast"]
      },
      {
        n: 5, group: "evidence", title: "Connect every claim to method and evidence",
        challenge: "Projects may not understand methodologies or the scientific rigor required for high-quality impact and ecological assets.",
        mechanism: "Field protocols and versioned metrics connect observations to methodologies, measurement protocols, registries and verifier references. Evidence maturity distinguishes narrative from externally verified results; public carbon claims require Level 6 evidence, a methodology reference and an external verifier.",
        tags: ["Field data collection", "Versioned metrics", "Evidence maturity 0–6", "Credit methodology"]
      },
      {
        n: 6, group: "capital", title: "Keep land, project finance and credit units distinct",
        challenge: "Land-backed stablecoins can expose land and ecosystems to redemption runs and creditor claims.",
        mechanism: "KI separates land-stewardship commitments, farm financial accounts and ecological credit classes/batches. Credit balances preserve tradable, escrowed and retired quantities. Its MiCA asset classifier flags a fungible credit basket as high risk and platform-issued EMTs as prohibited, routing those designs to a control gate.",
        tags: ["Land Stewardship Trust", "Credit batch ledger", "MiCA perimeter", "Custody controls"]
      },
      {
        n: 7, group: "ecosystem", title: "Choose on-chain use case by use case",
        challenge: "Projects need to decide when to put an asset on-chain, keep it off-chain or remove it from a chain.",
        mechanism: "PostgreSQL/PostGIS is KI’s canonical operational record. Private evidence stays off-chain; hash/CID references and resolver-gated EAS attestations can publish a reviewed proof on Celo, with indexing support for Base and Optimism. The project record remains useful without a token.",
        tags: ["PostgreSQL + PostGIS", "Private evidence", "EAS attestations", "Celo / Base / Optimism"]
      },
      {
        n: 8, group: "place", title: "Keep land title whole; govern stewardship and units",
        challenge: "Fractionalizing title itself, instead of entity-level shares, can lock or “brick” a property.",
        mechanism: "KI models the land relationship through community stewardship, cooperative use, leases, customary commons and transition terms; it models issued ecological claims as credit batches with account balances. Title and stewardship remain distinct records, with anti-speculation and community decision terms visible to reviewers.",
        tags: ["Stewardship models", "Community control", "Credit batches", "Anti-speculation terms"]
      },
      {
        n: 9, group: "capital", title: "Make jurisdiction differences visible per location",
        challenge: "Cross-jurisdiction activity makes legal, tax and operational requirements complex.",
        mechanism: "Regional PESTEL/readiness analysis, location-specific CRISP weights, currency/provider financial accounts and scoped stakeholder/consent records let teams compare each site on its own terms. Use the location business plan and risk register as the jurisdiction-specific review packet.",
        tags: ["PESTEL", "Regional readiness", "CRISP overrides", "Scoped records"]
      },
      {
        n: 10, group: "capital", title: "Put a regulatory gate before an offering",
        challenge: "Securities and financial regulation apply when projects operate in the real world.",
        mechanism: "KI’s MiCA inventory classifies instruments as outside scope, low, issuance review, CASP scope, high risk or prohibited. The assert-perimeter guard blocks restricted EU offer paths until human-approved controls are met; disclosure packs record rights, risks, supply, governance, complaints and environmental claims.",
        tags: ["MiCA classify / assert-perimeter", "Disclosure pack", "Human approval", "Control checklist"]
      },
      {
        n: 11, group: "ecosystem", title: "Reduce single-chain and privileged-key exposure",
        challenge: "Chain maximalism, winner-take-all infrastructure, wallet loss and smart-contract bugs create technical risk.",
        mechanism: "Keep business records in PostgreSQL, make Web3 an optional adapter, constrain attestation through an allowlisted resolver, scope Gateway permissions and put contract upgrades behind timelocks. Multiple supported chain interfaces and deployment profiles reduce dependence on one network or one platform operator.",
        tags: ["Replaceable adapters", "Resolver allowlist", "Role-scoped Gateway", "Upgrade timelock"]
      },
      {
        n: 12, group: "evidence", title: "Show operating evidence before crypto branding",
        challenge: "Public perceptions of blockchain, crypto and Web3 can undermine project credibility.",
        mechanism: "Generate public-safe reports from farm operations, financial resilience, governance and ecological metrics. Put plain-language summaries, evidence maturity, source lineage and verifiable attestations in front of audiences before introducing token mechanics.",
        tags: ["Public-safe reports", "Evidence lineage", "CIDS / JSON-LD", "EAS"]
      },
      {
        n: 13, group: "governance", title: "Represent commons and private rights in one model",
        challenge: "Commons and private ownership both have a place and need to coexist.",
        mechanism: "Land stewardship records support community stewardship, cooperative use, commons trust, leases and customary commons. Governance mechanisms store decision method and community veto rights; party privacy and scoped permissions distinguish private, limited and public information.",
        tags: ["Land Stewardship Trust", "Governance mechanism", "Community veto", "Privacy scope"]
      },
      {
        n: 14, group: "enterprise", title: "Reconcile money across payment rails",
        challenge: "Projects need usable fiat-to-crypto-to-fiat on- and off-ramps.",
        mechanism: "Farm financial accounts record provider, currency, balances and transaction references; digital-finance workflows track deposits, disbursements and mobile-money repayments. Credit marketplace and token records can be reconciled against the same location’s sales, expenses and finance history.",
        tags: ["Provider-linked accounts", "Multi-currency", "Mobile-money records", "Transaction ledger"]
      },
      {
        n: 15, group: "enterprise", title: "Build a stronger case for banking access",
        challenge: "Crypto involvement can put an organization at risk of being de-banked.",
        mechanism: "Give banks and cooperatives a clear operating profile: farm revenues, costs, account history, verified yields, insurance, existing debt and CRISP risk. Digital Finance uses these signals for loan-eligibility assessment and tracks lending, repayment and insurance activity.",
        tags: ["Digital Finance", "CRISP", "Revenue + yield history", "Loan eligibility"]
      },
      {
        n: 16, group: "enterprise", title: "Model volatility and liquidity before committing",
        challenge: "Price swings and thin markets make asset values and cash flow uncertain.",
        mechanism: "Use reference-class dampening, risk-adjusted NOI, price trends, capital scenarios and CRISP financial scoring to test assumptions. Savings, lending, weather-index insurance, produce markets and revenue-stream planning provide tools to diversify timing and sources of cash flow.",
        tags: ["Risk-adjusted NOI", "Price trends", "Scenario planning", "Savings / credit / insurance"]
      },
      {
        n: 17, group: "governance", title: "Protect identity while proving accountability",
        challenge: "Crypto privacy must be balanced with KYC/AML, personal safety and organizational security.",
        mechanism: "Farmer Identity records KYC providers, document hashes, reviewer decisions, credentials and scoped roles. Append-only consent records bind data use to purpose, recipient and location, support withdrawal, and keep identifying evidence out of public projections; MiCA controls identify AML and Travel Rule handoffs.",
        tags: ["Farmer Identity", "KYC review", "Consent resolver", "Purpose-bound access"]
      },
      {
        n: 18, group: "governance", title: "Put checks and balance around DAO power",
        challenge: "DAOs offer new governance tools but can reproduce participation, power and execution problems.",
        mechanism: "Read Baal proposals, votes and membership alongside KI’s governance circles, roles, tension queues, proposal reviews and decision lineage. Anti-capture policies support capped or quadratic voting, delegation limits, Sybil-resistance methods, worker/operator rework rights and community veto options.",
        tags: ["Baal governance", "Governance circles", "Anti-capture policies", "Independent review"]
      },
      {
        n: 19, group: "capital", title: "Give social and natural capital standing in decisions",
        challenge: "Financial capital can overpower social capital and natural capital.",
        mechanism: "Eight-forms-of-capital accounting and capital-alignment assessments track reinvestment commitments, extractive risk and community control. Wellbeing, commons, regenerative outcomes and evidence-backed interests for ecosystems and future generations sit beside financial forecasts and provider utility.",
        tags: ["Eight forms of capital", "Capital alignment", "Commons reinvestment", "Nature / future-generation interests"]
      },
      {
        n: 20, group: "enterprise", title: "Give accountants a traceable project ledger",
        challenge: "Tax treatment and accounting can be difficult across assets, currencies and jurisdictions.",
        mechanism: "Connect multi-currency accounts, transactions, payment states, sales, expenses, budgets, capital flows and revenue models to a location. Governed reports and structured exports give local accounting professionals a consistent, evidence-backed record to work from.",
        tags: ["Financial accounts", "Payment status", "Budget variance", "Structured exports"]
      },
      {
        n: 21, group: "evidence", title: "Make physical operations visible to digital teams",
        challenge: "On-the-ground oversight is unfamiliar and difficult for web3 teams; real-world work involves people and nature.",
        mechanism: "Farm Operations records activities, harvests, sales, expenses, labor, inventory and maintenance. Field Collector supports offline capture and reviewed sync; sensor and landscape workflows add soil, tree, water, habitat and pollinator observations to the same location record.",
        tags: ["Farm Operations", "Offline Field Collector", "Sensors", "Landscape + biodiversity"]
      },
      {
        n: 22, group: "governance", title: "Constrain misuse and preserve custody history",
        challenge: "Bad actors and theft can undermine trust in any sector, including crypto.",
        mechanism: "Identity and scoped roles pair with authorized issuer lists, batch/account custody, escrowed credit compartments, idempotent retirement reservations and independent human confirmation. Resolver controls, contract roles, timelocked upgrades and audit history make sensitive changes attributable and reviewable.",
        tags: ["KYC + role controls", "Credit custody", "Issuer allowlist", "Audit + timelock"]
      },
      {
        n: 23, group: "governance", title: "Give grievances a path to remedy",
        challenge: "Projects need a credible way to resolve disputes between parties.",
        mechanism: "KI’s grievance workflow carries a case from confidential intake through conflict-checked investigation, evidence review, owner and due dates, remedy proposal, appeal, affected-party confirmation and independent closure review.",
        tags: ["Grievance cases", "Conflict check", "Remedies + appeals", "Independent closure"]
      },
      {
        n: 24, group: "ecosystem", title: "Create one shared evidence and decision trail",
        challenge: "Using Discord, Telegram, Snapshot and other disconnected tools creates overload and lost context.",
        mechanism: "Data Stream gives each location a searchable chronology of posts, comments, files and monitoring updates. Attach reports and evidence to the project; pair the stream with report snapshots, work items and governance decision history for continuity.",
        tags: ["Data Stream", "Full-text search", "Report snapshots", "Decision lineage"]
      },
      {
        n: 25, group: "ecosystem", title: "Bring outside perspectives into the room",
        challenge: "ReFi risks becoming an echo chamber that rarely reaches beyond Web3.",
        mechanism: "Real-time Delphi panels can include experts, policymakers, citizens and affected groups, with weighted consensus, diversity assessment, calibrated forecasts and minority reports. Regional PESTEL, market analysis and competitive landscapes add evidence from outside the crypto sector.",
        tags: ["Real-time Delphi", "Minority reports", "Regional PESTEL", "Market analysis"]
      },
      {
        n: 26, group: "ecosystem", title: "Keep the infrastructure open and replaceable",
        challenge: "Excessive platform investment can recreate middlemen and gatekeepers.",
        mechanism: "Kokonut is open-source and PostgreSQL-first, with optional analytics, chain and edge adapters. Federation protocols record permissionless forking, local adaptation, mutual aid and shared infrastructure so communities can reuse the method without depending on one vendor.",
        tags: ["Open source", "PostgreSQL-first", "Optional adapters", "Federation protocols"]
      },
      {
        n: 27, group: "governance", title: "Make trust verifiable without forcing public doxxing",
        challenge: "Anonymity can weaken trust; people need safe identity, escrow and recourse when assets are lost or stolen.",
        mechanism: "Human-reviewed identity links establish accountable parties while privacy levels and pseudonymous Delphi tokens protect participation. Versioned IRIs, evidence hashes, revocable EAS attestations, credit custody/escrow states and grievance histories preserve provenance and support a reviewable recovery path.",
        tags: ["Identity resolution", "Pseudonymous Delphi", "IRI + evidence hashes", "Custody + remedies"]
      },
      {
        n: 28, group: "ecosystem", title: "Translate jargon into shared working language",
        challenge: "Web3 slang and technical jargon slow adoption.",
        mechanism: "Use familiar field forms, nine-block business canvases, named metric definitions, plain-language reports and standard CIDS/JSON-LD exports. Different audiences see the same project facts in a vocabulary suited to their work.",
        tags: ["Field forms", "Business Canvas", "Plain reports", "CIDS / JSON-LD"]
      },
      {
        n: 29, group: "ecosystem", title: "Give traditional institutions a useful entry point",
        challenge: "Established institutions hold power and capacity, but web3 projects often do not know how to bring them in.",
        mechanism: "KI’s stakeholder model includes public institutions, organizations and cooperatives. Partner lifecycle, business plans, farm registry evidence, standard exports and reviewable methodology references give banks, universities, agencies and verifiers a familiar diligence packet.",
        tags: ["Stakeholder ecosystem", "Partner lifecycle", "Farm registry", "Reports + exports"]
      }
    ];


const loopSteps = [
  {title:"Ground the asset",body:"Map a location, stewardship model, affected parties, consent and land-use commitments.",methods:"Land Stewardship Trust · PostGIS"},
  {title:"Run a viable project",body:"Connect market, revenue, cost, budget, field activity, finance and risk into a working plan.",methods:"Business Plan · CRISP · Digital Finance"},
  {title:"Measure what changes",body:"Collect field observations, bind them to methods, and review evidence before making claims.",methods:"Field Collector · Metrics · MRV"},
  {title:"Govern and prove",body:"Record community decisions, safeguards, grievances and outcomes; publish approved summaries and optional proofs.",methods:"Governance · Reports · EAS"}
];
const systemCards = [
  {id:"place",count:"04",title:"Place & rights",sub:"Tenure · stewardship · learning"},
  {id:"enterprise",count:"05",title:"Enterprise & finance",sub:"Business model · liquidity"},
  {id:"evidence",count:"03",title:"Evidence & fieldwork",sub:"Methods · measurement · reporting"},
  {id:"capital",count:"04",title:"Capital & regulation",sub:"Token design · jurisdiction"},
  {id:"governance",count:"06",title:"People & governance",sub:"Consent · DAO · remedies"},
  {id:"ecosystem",count:"07",title:"Technology & adoption",sub:"Proof · tools · institutions"}
];

export const KokonutRwaRefiExperience = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [selectedNumber, setSelectedNumber] = useState(1);
  const cleanQuery = query.trim().toLowerCase();
  const visibleItems = challenges.filter((item) =>
    (activeFilter === "all" || item.group === activeFilter) &&
    (!cleanQuery || [item.title,item.challenge,item.mechanism,item.tags.join(" ")].join(" ").toLowerCase().includes(cleanQuery))
  );
  const selectedItem = visibleItems.find((item) => item.n === selectedNumber) || visibleItems[0] || null;
  const selectedIndex = selectedItem ? visibleItems.findIndex((item) => item.n === selectedItem.n) : -1;
  const selectedGroup = selectedItem ? groups.find((group) => group.id === selectedItem.group) : null;
  const jumpToCategory = (id) => {
    setActiveFilter(id);
    setQuery("");
    setSelectedNumber(challenges.find((item) => item.group === id)?.n || 1);
    document.getElementById("rwa-challenge-map")?.scrollIntoView({behavior:"smooth",block:"start"});
  };
  const selectAdjacent = (direction) => {
    const next = visibleItems[selectedIndex + direction];
    if (next) setSelectedNumber(next.n);
  };
  return (
    <main className="kok-rwa">
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow"><span className="kok-rwa-pulse" aria-hidden="true"></span>KOKONUT INTELLIGENCE / RWA × REFI</div>
            <h1>Real assets need a <em>real operating system.</em></h1>
            <p className="hero-copy">Kokonut Intelligence connects the <strong>land, people, capital, field operations, evidence and governance</strong> behind a regenerative project. Start with one governed location record. Add onchain proofs only where they improve coordination and trust.</p>
            <div className="hero-actions">
              <a className="button" href="#rwa-challenge-map">Explore the 29 challenges ↓</a>
              <a className="button secondary" href="#rwa-model">See how KI connects them</a>
            </div>
            <div className="hero-meta"><span>Location first</span><span>Field to finance</span><span>Proof when useful</span></div>
          </div>
          <div className="record-visual" aria-label="Six systems connected to one governed farm and location record">
            <div className="record-top"><span>One governed project record</span><span className="live">● Integrated model</span></div>
            <div className="record-center">
              <div className="record-icon" aria-hidden="true">⌂</div>
              <strong>Farm / Location</strong><span>Land · people · operations · evidence</span>
            </div>
            <div className="record-links">
              {systemCards.map((group,idx) => <button className="record-link" key={group.id} type="button" onClick={() => jumpToCategory(group.id)}><span className="mini-icon" aria-hidden="true">{["⌖","↗","◉","◎","♧","⌘"][idx]}</span><span>{["Land & stewardship","Business & finance","Field data & MRV","Capital & rules","People & governance","Technology & partners"][idx]}</span></button>)}
            </div>
            <div className="record-foot"><span><strong>PostgreSQL + PostGIS</strong> · operational record</span><span>Optional EAS proofs · human-reviewed</span></div>
          </div>
        </div>
      </section>
      <div className="summary-strip"><div className="wrap summary-inner"><p>29 challenges → 6 integrated systems → 1 project record</p><span>Every challenge below opens onto a specific Kokonut workflow.</span></div></div>
      <section className="section light" id="rwa-model">
        <div className="wrap">
          <div className="section-heading"><div><p className="section-kicker">HOW KI CONNECTS THE WORK</p><h2>From land rights to <em>credible outcomes.</em></h2></div><p>One operating loop links physical work, project economics, community authority and public evidence.</p></div>
          <div className="loop-grid">{loopSteps.map((step) => <article className="loop-card" key={step.title}><h3>{step.title}</h3><p>{step.body}</p><span>{step.methods}</span></article>)}</div>
        </div>
      </section>
      <section className="systems" aria-label="Browse by Kokonut system">
        <div className="wrap"><div className="system-grid">{systemCards.map((group) => <button className="system-button" key={group.id} type="button" onClick={() => jumpToCategory(group.id)}><span className="system-count">{group.count} challenges</span><strong>{group.title}</strong><span>{group.sub}</span></button>)}</div></div>
      </section>
      <section className="section challenge-section" id="rwa-challenge-map">
        <div className="wrap">
          <div className="section-heading"><div><p className="section-kicker">THE CHALLENGE MAP</p><h2>29 challenges. <em>Concrete KI mechanisms.</em></h2></div><p>Filter by system or search a concern. Select a challenge to see the Kokonut workflows and controls that address it.</p></div>
          <div className="controls">
            <label className="search-wrap"><span className="sr-only">Search challenges and KI capabilities</span><input className="search" type="search" value={query} placeholder="Search: land title, DAO, privacy, methodology…" onChange={(e) => setQuery(e.target.value)} /></label>
            <div className="control-actions"><button className="tool-button" type="button" onClick={() => window.print()}>Print / save PDF</button></div>
          </div>
          <div className="filter-list" role="group" aria-label="Filter challenge map by system">
            {groups.map((g) => {const count = g.id === "all" ? challenges.length : challenges.filter((x) => x.group === g.id).length;return <button key={g.id} className="filter-button" type="button" aria-pressed={activeFilter === g.id} onClick={() => {setActiveFilter(g.id);setSelectedNumber(challenges.find((x) => g.id === "all" || x.group === g.id)?.n || 1);}}>{g.label}<span className="count">{count}</span></button>;})}
          </div>
          <div className="result-bar"><span aria-live="polite"><strong>{visibleItems.length}</strong> of <strong>{challenges.length}</strong> challenges shown</span><span>Select a challenge to read its full KI workflow</span></div>
          <div className="explorer-grid">
            <nav className="challenge-list" aria-label="Challenges">
              {visibleItems.map((item) => <button type="button" className="challenge-item" key={item.n} aria-current={selectedItem?.n === item.n ? "true" : undefined} onClick={() => setSelectedNumber(item.n)}><span className="challenge-number">{String(item.n).padStart(2,"0")}</span><span><span className="challenge-title">{item.title}</span><span className="challenge-one-line">{item.challenge}</span></span></button>)}
            </nav>
            {selectedItem && <article className="challenge-panel" aria-live="polite">
              <div className="panel-top"><span className="panel-system">{selectedGroup?.label || "Kokonut Intelligence"}</span><span className="panel-number">CHALLENGE {String(selectedItem.n).padStart(2,"0")}</span></div>
              <h3 className="panel-title">{selectedItem.title}</h3>
              <section className="panel-block challenge-source"><p className="detail-label">The challenge</p><p className="detail-copy">{selectedItem.challenge}</p></section>
              <section className="panel-block ki-response"><p className="detail-label">How Kokonut Intelligence addresses it</p><p className="detail-copy">{selectedItem.mechanism}</p></section>
              <div className="capability-tags">{selectedItem.tags.map((tag) => <span className="capability-tag" key={tag}>{tag}</span>)}</div>
              <div className="panel-nav"><button type="button" className="tool-button" disabled={selectedIndex <= 0} onClick={() => selectAdjacent(-1)}>← Previous</button><span className="panel-number">{selectedIndex+1} of {visibleItems.length}</span><button type="button" className="tool-button" disabled={selectedIndex >= visibleItems.length-1} onClick={() => selectAdjacent(1)}>Next →</button></div>
            </article>}
          </div>
          {!selectedItem && <div className="empty-state visible">No challenges match that search. Try a broader term or choose “All 29”.</div>}
          <div className="print-challenges">{challenges.map((item) => <article className="print-challenge" key={item.n}><h3>{String(item.n).padStart(2,"0")} · {item.title}</h3><p><strong>Challenge:</strong> {item.challenge}</p><p><strong>KI:</strong> {item.mechanism}</p></article>)}</div>
        </div>
      </section>
      <section className="closing"><div className="wrap closing-grid"><div><p className="section-kicker">THE PRACTICAL STARTING POINT</p><h2>Start with one location. <em>Connect the whole project.</em></h2><p>Use Kokonut Adelphi as the working example: link its stewardship commitments, farm operations, business model, CRISP risks, field evidence, stakeholder decisions and capital flows. The same record can then serve operators, community, funders, verifiers and institutions—with the right evidence visible to each.</p></div><div className="closing-actions"><a className="button" href="https://docs.basin.global/dossier/other-projects/rwa-x-refi-report" target="_blank" rel="noopener noreferrer">Read the RWA × ReFi report ↗</a><a className="button secondary" href="https://github.com/wasalo/Kokonut-Intelligence/blob/a3187b174297e93806b062717274dbc5b0dd291f/docs/rwa-refi-kokonut-intelligence.html" target="_blank" rel="noopener noreferrer">View original HTML ↗</a><a className="button secondary" href="/kokonut-intelligence">Kokonut Intelligence overview ↗</a></div></div></section>
      <aside className="source-credit wrap"><p>This interactive challenge map is ported from the Kokonut Intelligence RWA × ReFi HTML at pinned commit a3187b1. The 29 challenge descriptions and their proposed KI responses are reproduced as authored; entries are a project architecture perspective, not a guarantee of legal, regulatory, scientific or production readiness.</p></aside>
    </main>
  );
};
