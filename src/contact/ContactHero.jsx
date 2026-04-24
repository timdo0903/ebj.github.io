function ContactHero() {
  return (
    <header className="page-hero" style={{ paddingBottom: 40 }}>
      <div className="meta">
        <div><span style={{ color: 'var(--accent)' }}>●</span>&nbsp;&nbsp;Usually replies within 24h</div>
        <div className="jp">ご連絡</div>
        <div>N°005 · Contact</div>
      </div>

      <window.FadeUp>
        <h1>
          <span className="reveal-line"><span>Say hello,</span></span>
          <span className="reveal-line"><span>in any of <em>six</em></span></span>
          <span className="reveal-line"><span><em>languages.</em><span className="kanji">縁</span></span></span>
        </h1>
      </window.FadeUp>

      <window.FadeUp delay={180}>
        <p className="lede">
          Our concierge team reads messages every weekday in Tokyo, with support from Paris. Whether you're a collector, a partner maison, a distributor, or press, the same people will write you back.
        </p>
      </window.FadeUp>
    </header>
  );
}
Object.assign(window, { ContactHero });
