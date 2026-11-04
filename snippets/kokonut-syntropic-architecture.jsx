/**
 * SYNTROPIC AGENT — ARCHITECTURE ATLAS
 *
 * An accessible, interactive visual interpretation of the canonical Mermaid
 * flowchart in syntropic-agent-detailed.mdx (original 10 nodes / 12 links).
 *
 * The source diagram is preserved unchanged in the technical reference.
 * Original relationships are preserved, with one newly proposed Robinhood adapter. Reversible
 * relations are shown as one connection with a bidirectional indicator.
 * Operational maturity must not be inferred from the diagram's visual state.
 */

const atlasNodes = [
  {id:"PEOPLE", label:"People & local authority", short:"Farm operators, Core Team & community", stage:"FIELD", x:30,y:130,
   status:"Existing people, proposed agent interface",summary:"Farm operators and designated reviewers remain responsible for real-world actions and protected approvals. The agent only prepares information for their review.",
   source:"Farm operators, Core Team & community"},
  {id:"FARMS", label:"Adelphi + Terra Viva", short:"Field records & local context", stage:"FIELD", x:30,y:436,
   status:"Adelphi active · Terra Viva planned",summary:"Existing Adelphi farm work and approved field evidence are the reference context. Terra Viva is a prospective replication workstream, not a completed second deployment.",
   source:"Adelphi + Terra Viva (planned)"},
  {id:"AGENT", label:"Syntropic Agent", short:"Hermes · human-supervised coordination", stage:"CORE", x:356,y:86,
   status:"Proposed orchestration",summary:"A human-supervised agent intended to read scoped records, draft plans, surface evidence gaps and prepare proposals. It cannot grant itself financial, scientific or governance authority.",
   source:"SYNTROPIC AGENT / Hermes"},
  {id:"KI", label:"Kokonut Intelligence", short:"Governed records & review", stage:"CORE", x:356,y:315,
   status:"Existing data foundation · scoped agent interface planned",summary:"Owns canonical farm, finance, MRV and review records. The agent's proposed integration uses permission-scoped reads and drafts, not a parallel source of truth.",
   source:"Kokonut Intelligence / governed records"},
  {id:"PROTOCOL", label:"Kokonut Protocol", short:"Policy & authorized execution", stage:"CORE", x:356,y:515,
   status:"Planned control plane",summary:"The proposed policy boundary for interpreting approved execution requests and coordinating downstream actions. Agent-generated proposals do not bypass independent authorization.",
   source:"Kokonut Protocol / policy & execution"},
  {id:"NEAR", label:"NEAR Hub", short:"Chain Signatures orchestration", stage:"ORCHESTRATION", x:716,y:282,
   status:"Planned, not deployed",summary:"Intended to coordinate explicitly approved requests using NEAR Chain Signatures. Signing, broadcasting, finality, verification and reconciliation are separate steps.",
   source:"NEAR Hub / Chain Signatures"},
  {id:"BASE", label:"Base", short:"Virtuals agent commerce", stage:"DESTINATION", x:974,y:98,
   status:"Proposed agent economy",summary:"A proposed agent services and capital-formation surface in Virtuals. Its economics and token rights are distinct from NEAR and do not convey farmland ownership.",
   source:"Base / Virtuals commerce"},
  {id:"GNOSIS", label:"Gnosis", short:"DAO & Safe infrastructure", stage:"DESTINATION", x:974,y:207,
   status:"Existing DAO/Safe · adapter planned",summary:"Kokonut's existing governance and Safe infrastructure retains its own owner thresholds and approval rules. An agent cannot use it to self-authorize treasury actions.",
   source:"Gnosis / existing DAO & Safe"},
  {id:"CELO", label:"Celo", short:"EAS evidence provenance", stage:"DESTINATION", x:974,y:316,
   status:"Existing provenance · adapter planned",summary:"Selected evidence and attestations may be anchored for provenance, but a chain receipt never independently proves ecological impact or certifies a claim.",
   source:"Celo / EAS provenance"},
  {id:"ROBINHOOD", label:"Robinhood Chain", short:"PONS live · KRAF and MetaLeX proposed", stage:"DESTINATION", x:974,y:425,
   status:"PONS launchpad page live · advanced finance planned",summary:"Kokonut Syntropic Agent has a public PONS launchpad page on Robinhood Chain. Creator-fee income, treasury settlement, project-specific Revenue Containers and MetaLeX-enabled financing are separate engineering and legal workstreams—not automatically live with the listing.",
   source:"Operator-confirmed PONS project listing; Robinhood PRD v2.1 for proposed finance"},
  {id:"FUTURE", label:"Other approved chains", short:"Scoped integrations only", stage:"DESTINATION", x:974,y:534,
   status:"Future / approval-dependent",summary:"Additional networks are considered only with justified utility, defined permissions, secure adapters and appropriate approvals. New integrations do not imply new tokens.",
   source:"Additional approved chains"}
];

const atlasEdges = [
 {from:"PEOPLE",to:"AGENT",label:"Direction and review",d:"M218 180 C285 180 287 165 356 165"},
 {from:"FARMS",to:"KI",label:"Field evidence",d:"M218 477 C287 477 288 379 356 379"},
 {from:"AGENT",to:"KI",label:"Scoped reads and drafts",both:true,d:"M464 237 L464 312"},
 {from:"AGENT",to:"PROTOCOL",label:"Proposals, not self-approval",d:"M573 162 C650 162 654 572 573 572"},
 {from:"PEOPLE",to:"PROTOCOL",label:"Independent authorization",d:"M218 205 C289 205 267 574 356 574"},
 {from:"KI",to:"PROTOCOL",label:"Governed exchange",both:true,d:"M464 425 L464 511"},
 {from:"PROTOCOL",to:"NEAR",label:"Approved requests",d:"M573 582 C684 580 654 350 716 350"},
 {from:"NEAR",to:"BASE",label:"Network action",d:"M922 325 C955 325 943 136 974 136"},
 {from:"NEAR",to:"GNOSIS",label:"Network action",d:"M922 337 C953 337 946 247 974 247"},
 {from:"NEAR",to:"CELO",label:"Network action",d:"M922 347 C951 347 953 359 974 359"},
 {from:"NEAR",to:"ROBINHOOD",label:"Future authorized finance adapter",d:"M922 351 C952 351 951 467 974 467"},
 {from:"NEAR",to:"FUTURE",label:"Approved integrations",d:"M922 358 C958 358 949 577 974 577"},
 {from:"KI",to:"FARMS",label:"Reviewable feedback",d:"M356 406 C294 406 280 500 218 500"}
];

const atlasStages = [
 {key:"FIELD",number:"01",title:"Farm & community",note:"Authority begins locally."},
 {key:"CORE",number:"02",title:"Governed coordination",note:"Agent assistance ≠ approval."},
 {key:"ORCHESTRATION",number:"03",title:"Proposed chain route",note:"Policy before signing."},
 {key:"DESTINATION",number:"04",title:"Destination networks",note:"Native rights stay separate."}
];

export const KokonutSyntropicArchitecture = () => {
  const [selectedId,setSelectedId] = useState("AGENT");
  const selected = atlasNodes.find(n=>n.id===selectedId) || atlasNodes[2];
  const relations = atlasEdges.filter(e=>e.from===selected.id || e.to===selected.id);
  const labelOf = id => atlasNodes.find(n=>n.id===id)?.label || id;
  const displayNodes = stage => atlasNodes.filter(n=>n.stage===stage);

  return (
    <section className="kok-home ksa-page ksa-atlas" id="ksa-mermaid-map" aria-labelledby="ksa-atlas-heading">
      <div className="kok-wrap">
        <div className="ksa-atlas-heading">
          <div className="ksa-atlas-heading-copy">
            <p className="ksa-kicker">01 / SYNTROPIC AGENT — SYSTEM ARCHITECTURE</p>
            <h2 id="ksa-atlas-heading">One living ecosystem. <em>Clear lines of responsibility.</em></h2>
            <p>This explorable system preserves the original Mermaid relationships and adds Robinhood as a proposed future destination. Select a node to understand where evidence, human approval, and chain-specific execution meet—without confusing planned integrations with deployed infrastructure.</p>
          </div>
          <div className="ksa-atlas-counter" aria-label="Architecture scale">
            <strong>11<span> nodes</span></strong>
            <small>13 proposed relationships</small>
            <span className="ksa-atlas-counter-dot">SELECT A SYSTEM TO EXPLORE</span>
          </div>
        </div>

        <div className="ksa-atlas-frame">
          <div className="ksa-atlas-topbar">
            <div><span className="ksa-atlas-live-dot"></span><span>ARCHITECTURE ATLAS</span><strong>SYNTROPIC / SYSTEM VIEW</strong></div>
            <span className="ksa-atlas-topbar-status">PRODUCT DESIGN · NOT A LIVE DEPLOYMENT</span>
          </div>
          <div className="ksa-atlas-desktop-tip">Explore the connections by selecting any system. Yellow paths highlight the relationships involving your selection.</div>

          <div className="ksa-atlas-viewport" tabIndex={0} role="region" aria-label="Scrollable architecture diagram. Select a node to inspect its relationships.">
            <div className="ksa-atlas-canvas">
              <div className="ksa-atlas-column ksa-atlas-col-field"><span>01 / FARM &amp; COMMUNITY</span><small>Local sources and independent authority</small></div>
              <div className="ksa-atlas-column ksa-atlas-col-core"><span>02 / GOVERNED COORDINATION</span><small>Data, agent drafts, policy</small></div>
              <div className="ksa-atlas-column ksa-atlas-col-hub"><span>03 / HUB</span><small>Planned authorization route</small></div>
              <div className="ksa-atlas-column ksa-atlas-col-chains"><span>04 / NETWORKS</span><small>Separate onchain responsibilities</small></div>

              <svg className="ksa-atlas-wires" viewBox="0 0 1180 665" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                <defs>
                  <marker id="ksa-atlas-arrow" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto-start-reverse">
                    <path d="M0 0 L6 3.5 L0 7 Z" fill="context-stroke"/>
                  </marker>
                </defs>
                {atlasEdges.map((edge,index) => (
                  <path
                    key={index}
                    className={"ksa-atlas-wire" + ((edge.from===selectedId||edge.to===selectedId)?" is-related":"")}
                    d={edge.d}
                    markerEnd="url(#ksa-atlas-arrow)"
                    markerStart={edge.both?"url(#ksa-atlas-arrow)":undefined}
                  />
                ))}
              </svg>

              {atlasNodes.map(node=>(
                <button
                  type="button"
                  key={node.id}
                  className={"ksa-atlas-node ksa-atlas-"+node.stage.toLowerCase()+(node.id==="AGENT"?" ksa-atlas-agent":"")+(selectedId===node.id?" is-selected":"")}
                  style={{left:node.x+"px",top:node.y+"px"}}
                  aria-pressed={selectedId===node.id}
                  onClick={()=>setSelectedId(node.id)}
                  aria-label={"Explore "+node.label+": "+node.status}
                >
                  {node.id==="AGENT"
                    ? <img src="/images/syntropic-agent-avatar.png" alt="" width="53" height="53" className="ksa-atlas-avatar"/>
                    : <span className="ksa-atlas-glyph" aria-hidden="true">{({PEOPLE:"◎",FARMS:"✳",KI:"▤",PROTOCOL:"◇",NEAR:"⟡",BASE:"B",GNOSIS:"G",CELO:"C",ROBINHOOD:"R",FUTURE:"+"})[node.id]}</span>}
                  <span className="ksa-atlas-node-copy">
                    <strong>{node.label}</strong>
                    <small>{node.short}</small>
                  </span>
                </button>
              ))}
              <div className="ksa-atlas-flow-annotation" aria-hidden="true">AUTHORITY IS NEVER AUTOMATIC ↗</div>
            </div>
          </div>

          <div className="ksa-atlas-mobile">
            {atlasStages.map(stage=>(
              <div className="ksa-atlas-mobile-stage" key={stage.key}>
                <div className="ksa-atlas-stage-label"><span>{stage.number} / {stage.title}</span><small>{stage.note}</small></div>
                <div className="ksa-atlas-mobile-nodes">{displayNodes(stage.key).map(node=>(
                  <button type="button" key={node.id}
                    className={"ksa-atlas-mobile-node"+(selectedId===node.id?" is-selected":"")}
                    aria-pressed={selectedId===node.id} onClick={()=>setSelectedId(node.id)}>
                    {node.id==="AGENT"?<img src="/images/syntropic-agent-avatar.png" alt="" width="36" height="36"/>:<span aria-hidden="true">◈</span>}
                    <strong>{node.label}</strong><small>Explore ↗</small>
                  </button>
                ))}</div>
              </div>
            ))}
          </div>

          <div className="ksa-atlas-inspector" aria-live="polite">
            <div className="ksa-atlas-inspector-main">
              <p className="ksa-atlas-inspector-kicker">{selected.stage==="DESTINATION"?"DESTINATION NETWORK":selected.stage==="FIELD"?"FARM & COMMUNITY":selected.stage==="ORCHESTRATION"?"PLANNED CROSS-CHAIN HUB":"GOVERNED COORDINATION"} / SELECTED SYSTEM</p>
              <h3>{selected.label}</h3>
              <p>{selected.summary}</p>
              <div className="ksa-atlas-status"><span aria-hidden="true"></span>{selected.status}</div>
            </div>
            <div className="ksa-atlas-connections">
              <h4>Connected flows <span>{relations.length} relationships</span></h4>
              <div className="ksa-atlas-connection-list">
                {relations.map((e,i)=>(
                  <div key={i} className="ksa-atlas-connection">
                    <span>{e.from===selected.id?"OUT":e.to===selected.id?"IN":"↔"}{e.both?" ↔":""}</span>
                    <strong>{e.from===selected.id?labelOf(e.to):labelOf(e.from)}</strong>
                    <small>{e.label}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="ksa-atlas-bottomline">
            <span><i></i> EXPANDED VIEW: 11 NODES / 13 LINKS · ORIGINAL MERMAID PRESERVED</span>
            <a href="/syntropic-agent-detailed">Explore original Mermaid + architecture reference ↗</a>
          </div>
        </div>
        <div className="ksa-atlas-guardrails">
          <div><span>01 / REAL-WORLD CONTROL</span><strong>Farm work stays operator-led.</strong><p>Local people remain accountable for real-world land, agronomy and operating decisions.</p></div>
          <div><span>02 / EVIDENCE CONTROL</span><strong>Records are not proof by default.</strong><p>Reviewers qualify claims; provenance and publication remain separate from scientific validity.</p></div>
          <div><span>03 / EXECUTION CONTROL</span><strong>Approval comes before signing.</strong><p>DAO owners, legal entities and scoped policies authorize protected operations independently.</p></div>
        </div>
      </div>
    </section>
  );
};
