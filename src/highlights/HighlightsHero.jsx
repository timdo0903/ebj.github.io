function HighlightsHero() {
  return (
    <header className="page-hero" style={{ paddingBottom: 48 }}>
      <div className="meta">
        <div><span style={{ color: 'var(--accent)' }}>●</span>&nbsp;&nbsp;Refreshed daily</div>
        <div className="jp">厳選</div>
        <div>N°004 · Highlights</div>
      </div>

      <window.FadeUp>
        <h1>
          <span className="reveal-line"><span>Stories preserved,</span></span>
          <span className="reveal-line"><span><em>piece by piece.</em><span className="kanji">品</span></span></span>
        </h1>
      </window.FadeUp>

      <window.FadeUp delay={180}>
        <p className="lede">
          A living gallery of pieces recently introduced, or reintroduced, to collectors and connoisseurs worldwide. Each one documented, authenticated, and hand-prepared in our Tokyo atelier through in-house photography and styled portrait work.
        </p>
      </window.FadeUp>
    </header>
  );
}
Object.assign(window, { HighlightsHero });
