// Compatibility entry point for cached English homepage HTML. Current homepages use Hero.jsx.
function HomeHero() {
  return (
    <header className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-intro">
          <h1 className="hero-headline">
            <span className="reveal-line"><span>Luxury,</span></span>
            <span className="reveal-line"><span><em>preserved</em></span></span>
            <span className="reveal-line"><span>for its next</span></span>
            <span className="reveal-line"><span>guardian.</span></span>
          </h1>
          <p className="hero-lede">
            From Tokyo, we source rare maison handbags, authenticate, lightly revive and prepare each piece
            for the chapter ahead. Circularity, by hand.
          </p>
          <div className="hero-cta-row">
            <a className="btn-primary" href="#principles">
              <span>Explore our promise</span>
              <span className="arrow" aria-hidden="true"></span>
            </a>
            <a className="btn-ghost" href="#highlights">View current highlights</a>
          </div>
        </div>
        <div className="hero-side">
          <figure className="hero-image-wrap loaded">
            <img
              src="/catalog/highlights-web/portrait-leopard-wallet.webp"
              alt="Editorial sakura portrait, Tokyo"
              width="1200"
              height="1800"
              decoding="async"
              fetchPriority="high"
              style={{ objectPosition: 'center 25%' }}
            />
            <figcaption className="hero-image-caption">Tokyo / Editorial N-07</figcaption>
          </figure>
        </div>
      </div>
      <div className="hero-foot">
        <div className="hero-meta">
          <div className="left">Est. 2012 / Tokyo</div>
          <div className="center">Circular luxury, curated with intention</div>
          <div className="right">N-001 / The Homepage</div>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="n">12<span>+</span></div>
            <div className="l">Years curating</div>
          </div>
          <div className="hero-stat">
            <div className="n">65k</div>
            <div className="l">Pieces circulated</div>
          </div>
          <div className="hero-stat">
            <div className="n">6</div>
            <div className="l">Languages spoken</div>
          </div>
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { Hero: HomeHero });
