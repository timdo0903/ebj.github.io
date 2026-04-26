function AboutAtelier() {
  const isJp = window.SITE_LANG === 'jp';

  return (
    <div style={{ position: 'relative' }}>
      <div className="media-break">
        <img src="/catalog/highlights-web/portrait-chanel-sakura.webp" alt={isJp ? '東京アトリエのエディトリアル撮影' : 'Editorial photography, Tokyo atelier, Eco Brand Japan'} width="1200" height="1800" loading="lazy" decoding="async" style={{ objectPosition: "center 28%" }} />
        <div className="cap">
          <span className="cap-kicker">Tokyo atelier</span>
          <span className="cap-copy">{isJp ? 'Studio photography, Spring 2026' : 'Studio photography, Spring 2026'}</span>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { AboutAtelier });
