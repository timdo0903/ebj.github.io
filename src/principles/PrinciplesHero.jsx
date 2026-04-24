function PrinciplesHero() {
  return (
    <header className="page-hero">
      <div className="meta">
        <div><span style={{ color: 'var(--accent)' }}>●</span>&nbsp;&nbsp;Three commitments</div>
        <div className="jp">三つの約束</div>
        <div>N°003 · Principles</div>
      </div>

      <window.FadeUp>
        <h1>
          <span className="reveal-line"><span>Three principles,</span></span>
          <span className="reveal-line"><span>held to <em>without</em></span></span>
          <span className="reveal-line"><span><em>exception.</em><span className="kanji">誓</span></span></span>
        </h1>
      </window.FadeUp>

      <window.FadeUp delay={200}>
        <p className="lede">
          Everything we do is traceable to one of three commitments: that what we sell is real, that how we work is kind to the planet, and that the people we work with are treated as partners for life. These are not marketing language. They are operating rules.
        </p>
      </window.FadeUp>

      <div style={{
        marginTop: 56, paddingTop: 28, borderTop: '1px solid var(--rule)',
        display: 'flex', gap: 12, flexWrap: 'wrap',
      }}>
        <a className="filter-chip active" href="#authenticity">I · Authenticity</a>
        <a className="filter-chip" href="#sustainability">II · Sustainability</a>
        <a className="filter-chip" href="#relationships">III · Relationships</a>
      </div>
    </header>
  );
}
Object.assign(window, { PrinciplesHero });
