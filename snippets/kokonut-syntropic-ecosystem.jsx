/**
 * Syntropic Agent: unified public narrative, derived from the latest
 * Base/Virtuals (2026-10-21), NEAR (2026-10-21) and Robinhood/MetaLeX
 * (2026-11-03) PRDs. Public descriptions are product directions,
 * not claims of launched tokens or currently withdrawable farm capital.
 *
 * This snippet is self-contained: no MDX children, no <main>, no raw Mermaid.
 */
const syntropicRails = [
  {
    id:"base",count:"01",name:"Base",network:"VIRTUALS · ECONOMYOS · ACP",
    status:"Token and 60 Days + ACF launch planned",
    headline:"Turn intelligence into useful services.",
    description:"The proposed Base presence connects one Kokonut Syntropic Agent identity with customers and other agents through Virtuals. Its first paid services would help farms assess readiness and understand evidence gaps.",
    verbs:["Farm Readiness Snapshot","Regenerative MRV Evidence Gap Report","ACP job delivery and review"],
    journey:"Customer request → Authorized data → Human-reviewed output → Accepted job → Reconciled payment",
    outcome:"Real service demand and recurring commercial value—not an assumed token valuation.",
    warning:"Virtuals token issuance, 60 Days and ACF terms require launch authorization. Locked proceeds and market capitalization are not operating cash.",
    link:"https://whitepaper.virtuals.io/"
  },
  {
    id:"near",count:"02",name:"NEAR",network:"KOKONUT PROTOCOL · CHAIN SIGNATURES",
    status:"Universal orchestration and Nearly economy proposed",
    headline:"Coordinate across chains. Keep authority local.",
    description:"The proposed NEAR Hub would coordinate explicitly approved actions across supported networks. Syntropic Agent drafts requests; Kokonut Protocol applies policy; humans authorize protected actions; destination networks settle them.",
    verbs:["Chain-specific execution proposals","Authorized signatures and relayers","Settlement, verification and reconciliation"],
    journey:"Agent proposal → Scoped policy check → Human approval → Chain-specific signing → Confirmed settlement",
    outcome:"Interoperability for the agent—not a bridge that makes distinct tokens fungible.",
    warning:"Nearly’s separate proposed NEAR token/tax economics do not carry Base or Robinhood rights. Signatures alone do not execute or finalize transactions.",
    link:"/kokonut-protocol"
  },
  {
    id:"robinhood",count:"03",name:"Robinhood Chain",network:"PONS · REVENUE CONTAINERS · METALEX",
    status:"Financial expansion proposed; integration gates pending",
    headline:"Bring accountable capital closer to productive farms.",
    description:"The Robinhood strategy would explore PONS creator-fee income, project-specific Revenue Containers and, later, properly authorized agricultural financing. MetaLeX offers a candidate issuer-and-agreement layer, subject to supported-chain and legal verification.",
    verbs:["Actual PONS creator-fee receipts","Controlled project accounting and budgets","Future legally structured RWA financing"],
    journey:"Claimed funds → Reconciled treasury → Approved Container → Documented farm work → Reviewed outcomes",
    outcome:"Finance based on real receipts, enforceable rights and operating evidence—not tokenized claims invented by code.",
    warning:"PONS eligibility, security and fee terms need verification. MetaLeX Robinhood support was newly announced in the Nov 2026 PRD; exact deployments and instruments remain unverified.",
    link:"/syntropic-agent-ecosystem"
  }
];

const regenerativeLoop = [
  {id:"observe",n:"01",verb:"Observe",title:"Real farm evidence",text:"Operators record planting, water, soil, harvests, budgets and site needs. Kokonut Intelligence maintains the authorized sources and review status."},
  {id:"prepare",n:"02",verb:"Prepare",title:"AI-supported decisions",text:"Syntropic Agent uses scoped records to draft briefs, work plans, cost scenarios and evidence-gap reports. These are recommendations, not final approvals."},
  {id:"serve",n:"03",verb:"Serve",title:"Useful agent services",text:"Approved ACP services can help external clients with farm readiness and MRV evidence preparation. Only genuinely completed and settled jobs create service receipts."},
  {id:"reconcile",n:"04",verb:"Reconcile",title:"Track available value",text:"Paid service revenue, actual creator fees, grants and authorized financing are recorded separately. Locked proceeds, speculative valuations and forecast harvests are excluded from spendable cash."},
  {id:"authorize",n:"05",verb:"Authorize",title:"Human-controlled investment",text:"An eligible project budget, verified rights, financing terms and independent signers determine whether money can be directed into a farm Revenue Container."},
  {id:"learn",n:"06",verb:"Learn",title:"Productive work, reviewed outcomes",text:"Operators complete agreed work, collect receipts and compare actual output with the baseline. Reviewed results inform the next operating cycle and better services."}
];

const containerIdeas=[
  {id:"fast",glyph:"↗",category:"SHORT CYCLE",title:"Food crop production",detail:"Seasonal inputs and working-capital planning for products such as lettuce.",foot:"Finance must match planting, sales and payment timing."},
  {id:"medium",glyph:"◎",category:"MEDIUM CYCLE",title:"Passion fruit & seasonal crops",detail:"Evidence-backed production budgets, offtake and receivables research.",foot:"Buyer contracts and actual harvests matter."},
  {id:"long",glyph:"♧",category:"LONG CYCLE",title:"Perennial agriculture",detail:"Patient capital planning for trees and long-duration productive assets.",foot:"Early projected yields are not available cash."},
  {id:"assets",glyph:"▦",category:"INFRASTRUCTURE",title:"Water, energy & equipment",detail:"Approved asset budgets, invoices, ownership records and completed-work evidence.",foot:"Leasehold improvements are not land title."}
];

export const KokonutSyntropicEcosystem = () => {
  const [activeRail,setActiveRail] = useState("base");
  const [activeLoop,setActiveLoop] = useState("observe");
  const rail = syntropicRails.find(r=>r.id===activeRail) || syntropicRails[0];
  const step = regenerativeLoop.find(r=>r.id===activeLoop) || regenerativeLoop[0];
  return (
    <div className="kok-home ksa-page ksa-multichain-story">
      <section className="ksa-multi" id="ksa-ecosystems" aria-labelledby="ksa-multi-title">
        <div className="kok-wrap">
          <div className="ksa-multi-head">
            <div>
              <p className="ksa-kicker">02 / THREE ECOSYSTEMS · ONE MISSION</p>
              <h2 id="ksa-multi-title">Not three agents. <em>One coordination intelligence.</em></h2>
            </div>
            <p>Explore the different roles each network could play. The agent has one mission, but products, financial rights, wallets and launch requirements remain chain-specific.</p>
          </div>
          <div className="ksa-multi-shell">
            <div className="ksa-multi-selector" role="group" aria-label="Explore an ecosystem">
              {syntropicRails.map(r=>(
                <button key={r.id} type="button"
                  className={"ksa-multi-choice"+(activeRail===r.id?" is-active":"")}
                  onClick={()=>setActiveRail(r.id)} aria-pressed={activeRail===r.id}>
                  <span>{r.count} / {r.network.split(" · ")[0]}</span><strong>{r.name}</strong>
                  <small>{r.status}</small>
                </button>
              ))}
            </div>
            <div className="ksa-multi-detail" aria-live="polite">
              <div className="ksa-multi-detail-top"><span>SELECTED ECOSYSTEM / {rail.network}</span><span className="ksa-multi-status">DESIGN &amp; VALIDATION</span></div>
              <div className="ksa-multi-detail-body">
                <div className="ksa-multi-detail-copy">
                  <h3>{rail.headline}</h3>
                  <p>{rail.description}</p>
                  <div className="ksa-multi-journey"><span>INTENDED FLOW</span><strong>{rail.journey}</strong></div>
                </div>
                <div className="ksa-multi-detail-list">
                  <span>WHAT THIS ECOSYSTEM CONTRIBUTES</span>
                  {rail.verbs.map((v,i)=><div key={v}><b>{String(i+1).padStart(2,"0")}</b><strong>{v}</strong></div>)}
                </div>
              </div>
              <div className="ksa-multi-detail-bottom">
                <p><strong>Value proposition:</strong> {rail.outcome}</p>
                <p><strong>Release boundary:</strong> {rail.warning}</p>
                <a href={rail.link}>Explore the technical context ↗</a>
              </div>
            </div>
          </div>
          <p className="ksa-multi-disclosure"><strong>One agent does not mean one token.</strong> Base/Virtuals, NEAR/Nearly and a possible Robinhood/PONS token are separate proposed financial instruments; none automatically grants shares, farm ownership, Gnosis DAO membership, cross-chain redemption, or rights to another token economy.</p>
        </div>
      </section>

      <section className="ksa-flywheel" id="ksa-economy" aria-labelledby="ksa-flywheel-title">
        <div className="kok-wrap">
          <div className="ksa-multi-head">
            <div>
              <p className="ksa-kicker">03 / REGENERATIVE ECONOMIC FLYWHEEL</p>
              <h2 id="ksa-flywheel-title">From useful work <em>to productive regeneration.</em></h2>
            </div>
            <p>Follow the proposed cycle. Real value comes from customer work, authorized investments and operating results—not token-price movement or a projected harvest alone.</p>
          </div>
          <div className="ksa-flywheel-shell">
            <div className="ksa-flywheel-titleline"><span>OPERATING MODEL / HUMAN-SUPERVISED</span><span>SELECT ANY STAGE</span></div>
            <div className="ksa-flywheel-stages" role="group" aria-label="Explore the regenerative economic flywheel">
              {regenerativeLoop.map(s=>(
                <button key={s.id} type="button" className={"ksa-flywheel-stage"+(activeLoop===s.id?" is-active":"")}
                  onClick={()=>setActiveLoop(s.id)} aria-pressed={activeLoop===s.id}>
                  <span>{s.n}</span><strong>{s.verb}</strong><small>↗</small>
                </button>
              ))}
            </div>
            <div className="ksa-flywheel-inspector" aria-live="polite">
              <div className="ksa-flywheel-orb" aria-hidden="true">
                <img src="/images/syntropic-agent-avatar.png" alt="" width="68" height="68" loading="lazy"/>
              </div>
              <div><span className="ksa-flywheel-inspector-kicker">STEP {step.n} / {step.verb.toUpperCase()}</span>
                <h3>{step.title}</h3><p>{step.text}</p></div>
            </div>
            <div className="ksa-flywheel-conclusion"><span>RETURN TO THE NEXT FARM CYCLE ↻</span><strong>Better evidence → Better decisions → More accountable work.</strong></div>
          </div>
        </div>
      </section>

      <section className="ksa-container-section" id="ksa-containers" aria-labelledby="ksa-container-title">
        <div className="kok-wrap">
          <div className="ksa-multi-head">
            <div>
              <p className="ksa-kicker">04 / REGENERATIVE ASSET FINANCE</p>
              <h2 id="ksa-container-title">Revenue Containers. <em>Real assets, explicit rights.</em></h2>
            </div>
            <p>Proposed Revenue Containers would organize project-specific receipts, budgets, obligations, reserves and evidence. They begin as controlled accounting structures—not tradable farm ownership tokens.</p>
          </div>
          <div className="ksa-container-grid">
            {containerIdeas.map(c=><article className="ksa-container-card" key={c.id}>
              <div className="ksa-container-card-top"><span>{c.category}</span><i aria-hidden="true">{c.glyph}</i></div>
              <h3>{c.title}</h3><p>{c.detail}</p>
              <div className="ksa-container-card-note">{c.foot}</div>
            </article>)}
          </div>
          <div className="ksa-container-boundary">
            <div className="ksa-container-boundary-icon" aria-hidden="true">✓</div>
            <div><strong>Received funds. Approved use. Documented work. Reviewed outcomes.</strong><p>Lease rights, investor claims, securities, credit, future cash flows and offchain agreements are separate legal questions. No Container gives agent tokenholders automatic rights to land, farm proceeds or existing DAO assets.</p></div>
            <a href="/syntropic-agent-ecosystem">Read the multichain strategy ↗</a>
          </div>
        </div>
      </section>
    </div>
  );
};
