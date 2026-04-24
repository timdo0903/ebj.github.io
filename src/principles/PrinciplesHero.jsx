function PrinciplesHero() {
  const isJp = window.SITE_LANG === 'jp';

  return (
    <header className="page-hero">
      <div className="meta">
        <div><span style={{ color: 'var(--accent)' }}>•</span>&nbsp;&nbsp;{isJp ? '三つの約束' : 'Three commitments'}</div>
        <div className="jp">{isJp ? '私たちの基準' : '三つの約束'}</div>
        <div>N°003 · {isJp ? '約束' : 'Principles'}</div>
      </div>

      <window.FadeUp>
        <h1>
          {isJp ? (
            <>
              <span className="reveal-line"><span>例外なく、</span></span>
              <span className="reveal-line"><span>守り続ける</span></span>
              <span className="reveal-line"><span><em>三つの約束。</em><span className="kanji">誠</span></span></span>
            </>
          ) : (
            <>
              <span className="reveal-line"><span>Three principles,</span></span>
              <span className="reveal-line"><span>held to <em>without</em></span></span>
              <span className="reveal-line"><span><em>exception.</em><span className="kanji">誠</span></span></span>
            </>
          )}
        </h1>
      </window.FadeUp>

      <window.FadeUp delay={200}>
        <p className="lede">
          {isJp
            ? '私たちの仕事は、三つの約束に立ち返ります。本物であること。ものを長く生かすこと。お客様やパートナーと誠実な関係を続けること。これは飾りの言葉ではなく、日々の判断基準です。'
            : 'Everything we do is traceable to one of three commitments: that what we sell is real, that how we work is kind to the planet, and that the people we work with are treated as partners for life. These are not marketing language. They are operating rules.'}
        </p>
      </window.FadeUp>

      <div style={{
        marginTop: 56, paddingTop: 28, borderTop: '1px solid var(--rule)',
        display: 'flex', gap: 12, flexWrap: 'wrap',
      }}>
        <a className="filter-chip active" href="#authenticity">I · {isJp ? '真贋' : 'Authenticity'}</a>
        <a className="filter-chip" href="#sustainability">II · {isJp ? '循環' : 'Sustainability'}</a>
        <a className="filter-chip" href="#relationships">III · {isJp ? '関係性' : 'Relationships'}</a>
      </div>
    </header>
  );
}
Object.assign(window, { PrinciplesHero });
