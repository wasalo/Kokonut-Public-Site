/**
 * Shared footer for the four custom-mode Kokonut entry pages.
 * Mintlify custom mode omits the standard docs footer, so this component
 * intentionally lives at the MDX page level, *after* each page's <main>.
 * Social destinations mirror docs.json; update both if they change.
 */
export const KokonutSiteFooter = () => (
  <footer className="kok-site-footer" aria-label="Kokonut Onchain Network footer">
    <div className="kok-site-footer-accent" aria-hidden="true"></div>
    <div className="kok-site-footer-wrap">
      <div className="kok-site-footer-content">
        <div className="kok-site-footer-about">
          <a className="kok-site-footer-logo" href="/home/landing" aria-label="Kokonut Network home">
            <img src="/logo/kkn_logo_white.svg" alt="Kokonut Network" width="183" height="61" />
          </a>
          <p className="kok-site-footer-tagline">A distributed network powered by biodiversity, trees &amp; people.</p>
          <span className="kok-site-footer-motto"><span className="kok-site-footer-dot" aria-hidden="true"></span> Rooted in the Caribbean. Growing in the open.</span>
        </div>

        <nav className="kok-site-footer-nav" aria-label="Explore Kokonut">
          <h2>Explore</h2>
          <a href="/home/landing">Home</a>
          <a href="/ecosystem-wiki/kokonut-101/executive-summary">Ecosystem Wiki</a>
          <a href="/kokonut-framework/Introduction">Kokonut Framework</a>
          <a href="/build-with-kokonut">Builders</a>
        </nav>

        <nav className="kok-site-footer-nav" aria-label="Get involved with Kokonut">
          <h2>Get involved</h2>
          <a href="https://hub.kokonut.network/projects/41" target="_blank" rel="noopener noreferrer">Explore Adelphi ↗</a>
          <a href="/ecosystem-wiki/open-collaboration-invitation">Contribute</a>
          <a href="https://link.kokonut.network/discord" target="_blank" rel="noopener noreferrer">Join the community ↗</a>
          <a href="https://link.kokonut.network/meeting" target="_blank" rel="noopener noreferrer">Let's connect ↗</a>
        </nav>

        <div className="kok-site-footer-connect">
          <h2>Stay connected</h2>
          <p>Follow the work, meet our community, and build the next chapter of regeneration.</p>
          <div className="kok-site-footer-socials" aria-label="Kokonut social media">
            <a className="kok-site-footer-social" href="https://x.com/KokonutNetwork" target="_blank" rel="noopener noreferrer" aria-label="Kokonut Network on X" title="X">
              <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.585-6.636 7.585H.476l8.6-9.831L0 1.153h7.594l5.243 6.932 6.064-6.932Zm-1.29 19.493h2.039L6.482 3.24H4.295Z"/></svg>
            </a>
            <a className="kok-site-footer-social" href="https://github.com/wasalo/Kokonut-Public-Site" target="_blank" rel="noopener noreferrer" aria-label="Kokonut Network on GitHub" title="GitHub">
              <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 .297a12 12 0 0 0-3.793 23.384c.6.111.82-.261.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.386-1.333-1.755-1.333-1.755-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.238 1.839 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.303-5.467-1.333-5.467-5.931 0-1.311.469-2.381 1.236-3.222-.124-.303-.536-1.524.117-3.176 0 0 1.009-.323 3.301 1.23a11.52 11.52 0 0 1 6.009 0c2.291-1.553 3.298-1.23 3.298-1.23.655 1.652.243 2.873.12 3.176.77.841 1.235 1.911 1.235 3.222 0 4.609-2.807 5.624-5.479 5.921.43.373.823 1.102.823 2.222v3.293c0 .319.216.694.826.576A12.002 12.002 0 0 0 12 .297Z"/></svg>
            </a>
            <a className="kok-site-footer-social" href="https://www.linkedin.com/company/kokonutnetwork" target="_blank" rel="noopener noreferrer" aria-label="Kokonut Network on LinkedIn" title="LinkedIn">
              <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.266 2.37 4.266 5.455v6.286ZM5.337 7.433c-1.144 0-2.066-.927-2.066-2.07 0-1.141.922-2.068 2.066-2.068 1.14 0 2.068.927 2.068 2.069 0 1.142-.928 2.069-2.068 2.069Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .775 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .775 23.2 0 22.222 0h.003Z"/></svg>
            </a>
            <a className="kok-site-footer-social" href="https://link.kokonut.network/discord" target="_blank" rel="noopener noreferrer" aria-label="Kokonut Network Discord community" title="Discord">
              <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.058 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.027c.462-.63.874-1.295 1.226-1.994a.075.075 0 0 0-.041-.104 13.1 13.1 0 0 1-1.872-.893.077.077 0 0 1-.008-.128c.125-.094.25-.192.37-.291a.075.075 0 0 1 .077-.01c3.928 1.793 8.182 1.793 12.062 0a.075.075 0 0 1 .078.009c.12.099.244.198.37.292a.077.077 0 0 1-.007.128 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.04.105c.36.698.771 1.363 1.225 1.993a.077.077 0 0 0 .084.028 19.8 19.8 0 0 0 6.002-3.03.077.077 0 0 0 .032-.056c.5-5.177-.838-9.673-3.549-13.661a.062.062 0 0 0-.031-.028ZM8.02 15.332c-1.182 0-2.156-1.085-2.156-2.42 0-1.334.955-2.419 2.156-2.419 1.21 0 2.177 1.094 2.157 2.42 0 1.335-.956 2.419-2.157 2.419Zm7.975 0c-1.183 0-2.156-1.085-2.156-2.42 0-1.334.955-2.419 2.156-2.419 1.21 0 2.176 1.094 2.157 2.42 0 1.335-.947 2.419-2.157 2.419Z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="kok-site-footer-bottom">
        <span>© {new Date().getFullYear()} Kokonut Onchain Network</span>
        <div className="kok-site-footer-meta">
          <span>Built in the open. Grown together.</span>
          <a href="https://github.com/wasalo/Kokonut-Public-Site/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">Documentation: CC BY-SA 4.0 ↗</a>
        </div>
      </div>
    </div>
  </footer>
);
