function AboutHero() {
  return (
    <header className="page-hero">
      <div className="meta">
        <div><span style={{ color: 'var(--accent)' }}>●</span>&nbsp;&nbsp;Est. 2012 · Tokyo</div>
        <div className="jp">物語 · About the atelier</div>
        <div>N°002 · About</div>
      </div>

      <window.FadeUp>
        <h1>
          <span className="reveal-line"><span>A Tokyo atelier</span></span>
          <span className="reveal-line"><span>for luxury's</span></span>
          <span className="reveal-line"><span><em>second life.</em><span className="kanji">再</span></span></span>
        </h1>
      </window.FadeUp>

      <window.FadeUp delay={200}>
        <p className="lede">
          Eco Brand Japan began in a small room in Tokyo with one Hermès Kelly, a loupe, and a conviction that luxury could be kept, cared for, and passed on, instead of quietly discarded. Twelve years later, we remain a small, multilingual team doing that same work, at a larger scale and with the same hands.
        </p>
      </window.FadeUp>
    </header>
  );
}
Object.assign(window, { AboutHero });
