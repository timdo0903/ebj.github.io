function Gallery() {
  const isJp = window.SITE_LANG === 'jp';
  const tiles = [
    { cls: 'a tall', src: '/catalog/highlights-web/kimono-03.webp', maison: 'Editorial', piece: 'Tokyo, Autumn walk', tag: 'Editorial', num: 'N-017' },
    { cls: 'b xtall', src: '/catalog/highlights-web/lady-dior.webp', maison: 'Dior', piece: 'Lady Dior', tag: 'Authenticated', num: 'N-024' },
    { cls: 'c tall', src: '/catalog/highlights-web/hermes-birkin.webp', maison: 'Hermès', piece: 'Birkin 35', tag: 'Authenticated', num: 'N-031' },
    { cls: 'd wide', src: '/catalog/highlights-web/iconics-01.webp', maison: 'Chanel', piece: 'Premiere watches', tag: 'Archive', num: 'N-127' },
    { cls: 'e tall', src: '/catalog/highlights-web/pink-chanel.webp', maison: 'Chanel', piece: 'Double Flap', tag: 'Authenticated', num: 'N-056' },
  ];

  return (
    <section className="gallery" id="highlights">
      <div className="gallery-header">
        <div className="section-label">
          <span className="num">S 03</span>
          <span className="title">{isJp ? 'ハイライト' : 'Highlights'}</span>
          <span className="spacer" />
        </div>
        <window.FadeUp>
          <h2 className="gallery-title">
            {isJp ? <>一点ずつ、<br />物語を<em>受け継ぐ。</em></> : <>Stories preserved<br />in every <em>detail.</em></>}
          </h2>
        </window.FadeUp>
        <div className="gallery-sub">
          <p>
            {isJp
              ? '東京のアトリエで記録し、真贋を確認し、丁寧に整えた一点を、最近のハイライトから抜粋してご紹介しています。'
              : 'A glimpse of pieces we recently reintroduced to collectors and connoisseurs worldwide, each one documented, authenticated, and hand-prepared in our Tokyo atelier.'}
          </p>
          <div className="gallery-count">{isJp ? '毎日更新 / 412点中 5点を掲載' : 'Refreshed daily / showing 5 of 412'}</div>
        </div>
      </div>

      <div className="gallery-grid">
        {tiles.slice(0, 3).map((t, i) => (
          <window.FadeUp className={`tile ${t.cls}`} key={i} delay={i * 120}>
            <img src={t.src} alt={t.piece} />
            <div className="tile-corner">{t.tag}</div>
            <div className="tile-meta">
              <div className="l">
                {t.piece}
                <small>{t.maison}</small>
              </div>
              <div className="r">{t.num}</div>
            </div>
          </window.FadeUp>
        ))}

        <window.FadeUp className="gallery-caption-col" delay={400}>
          <div style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: '84px', lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--accent)', fontStyle: 'italic' }}>
            {isJp ? <>一点ごとに、<br />次の物語へ。</> : <>Each piece,<br />a life<br />continued.</>}
          </div>
          <p>{isJp ? '東京のアトリエで、記録し、確認し、手で整えています。' : 'Documented, authenticated, and prepared by hand in our Tokyo atelier.'}</p>
        </window.FadeUp>

        {tiles.slice(3).map((t, i) => (
          <window.FadeUp className={`tile ${t.cls}`} key={i + 10} delay={i * 120}>
            <img src={t.src} alt={t.piece} />
            <div className="tile-corner">{t.tag}</div>
            <div className="tile-meta">
              <div className="l">
                {t.piece}
                <small>{t.maison}</small>
              </div>
              <div className="r">{t.num}</div>
            </div>
          </window.FadeUp>
        ))}
      </div>

      <div className="gallery-footer">
        <div className="note">{isJp ? 'カタログは毎日更新しています。' : 'Our catalogue refreshes daily. Partners receive the full index by request.'}</div>
      </div>
    </section>
  );
}

Object.assign(window, { Gallery });
