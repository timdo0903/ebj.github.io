function AboutHero() {
  const isJp = window.SITE_LANG === 'jp';

  return (
    <header className="page-hero">
      <div className="meta">
        <div><span style={{ color: 'var(--accent)' }}>•</span>&nbsp;&nbsp;{isJp ? '2012年創業 / 東京' : 'Est. 2012 · Tokyo'}</div>
        <div className="jp">{isJp ? 'アトリエについて' : '物語 · About the atelier'}</div>
        <div>N°002 · {isJp ? '会社概要' : 'About'}</div>
      </div>

      <window.FadeUp>
        <h1>
          {isJp ? (
            <>
              <span className="reveal-line"><span>東京から、</span></span>
              <span className="reveal-line"><span>ラグジュアリーの</span></span>
              <span className="reveal-line"><span><em>次の物語へ。</em><span className="kanji">継</span></span></span>
            </>
          ) : (
            <>
              <span className="reveal-line"><span>A Tokyo atelier</span></span>
              <span className="reveal-line"><span>for luxury's</span></span>
              <span className="reveal-line"><span><em>second life.</em><span className="kanji">再</span></span></span>
            </>
          )}
        </h1>
      </window.FadeUp>

      <window.FadeUp delay={200}>
        <p className="lede">
          {isJp
            ? 'Eco Brand Japanは、東京の小さな一室から始まりました。一点のHermès Kelly、ルーペ、そして「良いものは手入れをすれば、もう一度誰かの大切なものになれる」という信念から。今も私たちは小さな多言語チームとして、同じ手つきでその仕事を続けています。'
            : 'Eco Brand Japan began in a small room in Tokyo with one Hermès Kelly, a loupe, and a conviction that luxury could be kept, cared for, and passed on, instead of quietly discarded. Twelve years later, we remain a small, multilingual team doing that same work, at a larger scale and with the same hands.'}
        </p>
      </window.FadeUp>
    </header>
  );
}
Object.assign(window, { AboutHero });
