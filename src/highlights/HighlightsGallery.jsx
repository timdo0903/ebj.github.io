function HighlightsGallery() {
  const isJp = window.SITE_LANG === 'jp';
  const data = window.HIGHLIGHTS_DATA;
  const { studio, editorial } = data;

  const Section = ({ num, title, jp, lede, tag, subtag, items }) => (
    <div className="hl-section">
      <div className="section-label">
        <span className="num">S {num}</span>
        <span className="title">{title}</span>
        <span className="spacer" />
        <span className="jp">{jp}</span>
      </div>

      <div className="hl-section-head">
        <div className="hl-section-head-top">
          <span className="hl-eyebrow">
            <span className="dot"></span>
            {tag}
          </span>
          <span className="hl-count">
            <span className="n">{String(items.length).padStart(2, '0')}</span>
            <span className="l">{isJp ? '点' : 'pieces'}</span>
          </span>
        </div>
        <window.FadeUp>
          <h2 className="hl-section-title">{lede}</h2>
        </window.FadeUp>
        {subtag ? <div className="hl-section-subtag">{subtag}</div> : null}
      </div>

      <div className="highlights-grid">
        {items.map((t, i) => (
          <window.FadeUp className={`hl-card ${t.w}`} key={t.id} delay={Math.min(i * 40, 320)}>
            <div className="img">
              <img
                src={t.img}
                alt={t.pieceText}
                loading={num === '01' && i < 3 ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={num === '01' && i < 3 ? 'high' : 'auto'}
              />
              <div className="corner">{isJp ? (t.tag === 'Styled' ? 'スタイリング' : '真贋確認済み') : t.tag}</div>
              <div className="num">{t.num}</div>
            </div>
            <div className="info">
              <div>
                <div className="maison">{t.maison}</div>
                <div className="piece">{t.piece}</div>
              </div>
            </div>
          </window.FadeUp>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Section
        num="01"
        title={isJp ? '社内撮影' : 'In-house photography'}
        jp="Tokyo atelier"
        lede={isJp ? <>社内撮影で、<em>正確に美しく。</em></> : <>In-house photography, <em>professionally executed.</em></>}
        tag={isJp ? '社内撮影' : 'In-house photography'}
        subtag=""
        items={studio}
      />

      <div className="hl-divider" aria-hidden="true" />

      <Section
        num="02"
        title={isJp ? 'スタイリング' : 'Styled'}
        jp="Portrait work"
        lede={isJp ? <>身につけた時の、<em>佇まいまで。</em></> : <>Styled sittings, <em>pieces in context.</em></>}
        tag={isJp ? 'スタイリング撮影' : 'Styled portraits'}
        subtag={isJp ? '東京を中心に撮影した、季節のストーリー' : 'Seasonal stories, shot in and around Tokyo'}
        items={editorial}
      />
    </>
  );
}

Object.assign(window, { HighlightsGallery });
