function HighlightsGallery() {
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
            <span className="l">pieces</span>
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
              <img src={t.img} alt={t.pieceText} loading="lazy" />
              <div className="corner">{t.tag}</div>
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
        title="In-house photography"
        jp="Tokyo atelier"
        lede={<>In-house photography, <em>professional.</em></>}
        tag="In-house photography"
        subtag=""
        items={studio}
      />

      <div className="hl-divider" aria-hidden="true" />

      <Section
        num="02"
        title="Styled"
        jp="Portrait work"
        lede={<>Styled sittings, <em>pieces in context.</em></>}
        tag="Styled portraits"
        subtag="Seasonal stories, shot in and around Tokyo"
        items={editorial}
      />
    </>
  );
}

Object.assign(window, { HighlightsGallery });
