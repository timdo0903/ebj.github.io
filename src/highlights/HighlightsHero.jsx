function HighlightsHero() {
  const isJp = window.SITE_LANG === 'jp';

  return (
    <header className="page-hero" style={{ paddingBottom: 48 }}>
      <div className="meta">
        <div><span style={{ color: 'var(--accent)' }}>•</span>&nbsp;&nbsp;{isJp ? '日々更新' : 'Refreshed daily'}</div>
        <div className="jp">厳選</div>
        <div>N°004 · {isJp ? 'ハイライト' : 'Highlights'}</div>
      </div>

      <window.FadeUp>
        <h1>
          {isJp ? (
            <>
              <span className="reveal-line"><span>一点ずつ、</span></span>
              <span className="reveal-line"><span><em>物語を受け継ぐ。</em><span className="kanji">品</span></span></span>
            </>
          ) : (
            <>
              <span className="reveal-line"><span>Stories preserved,</span></span>
              <span className="reveal-line"><span><em>piece by piece.</em><span className="kanji">品</span></span></span>
            </>
          )}
        </h1>
      </window.FadeUp>

      <window.FadeUp delay={180}>
        <p className="lede">
          {isJp
            ? '最近アトリエに届き、整えられ、次の持ち主へ向かう一点たち。社内撮影とスタイリングで、状態だけでなく、その品が持つ空気まで丁寧に記録しています。'
            : 'A living gallery of pieces recently introduced, or reintroduced, to collectors and connoisseurs worldwide. Each one documented, authenticated, and hand-prepared in our Tokyo atelier through in-house photography and styled portrait work.'}
        </p>
      </window.FadeUp>
    </header>
  );
}
Object.assign(window, { HighlightsHero });
