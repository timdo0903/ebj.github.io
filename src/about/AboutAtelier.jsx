function AboutAtelier() {
  const isJp = window.SITE_LANG === 'jp';

  return (
    <div style={{ position: 'relative' }}>
      <div className="media-break about-sakura-break">
        <img src="/catalog/highlights-web/about-sakura-portrait.webp" alt={isJp ? '桜の下で撮影したエディトリアルポートレート' : 'Editorial sakura portrait, Tokyo, Eco Brand Japan'} width="2000" height="875" loading="lazy" decoding="async" />
        <div className="cap">
          <span className="cap-kicker">Tokyo atelier</span>
          <span className="cap-copy">{isJp ? 'Studio photography, Spring 2026' : 'Studio photography, Spring 2026'}</span>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { AboutAtelier });
