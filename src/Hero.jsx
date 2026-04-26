function Hero() {
  const imgRef = React.useRef(null);
  const isJp = window.SITE_LANG === 'jp';

  React.useEffect(() => {
    const id = requestAnimationFrame(() => {
      if (imgRef.current) imgRef.current.classList.add('loaded');
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const copy = isJp
    ? {
        left: '2012年創業 / 東京',
        center: '丁寧に選び、次へつなぐサーキュラー・ラグジュアリー',
        right: 'N-001 / ホーム',
        lines: ['受け継がれる', 'ラグジュアリーを、', '次の持ち主へ。'],
        lede:
          '東京を拠点に、希少なメゾンバッグやアクセサリーを選び、真贋を確認し、必要な手入れを施して、次の章へと送り出します。手仕事から始まる、静かな循環です。',
        primary: '私たちの約束へ',
        secondary: 'ハイライトを見る',
        years: 'キュレーション年数',
        pieces: '循環したアイテム',
        languages: '対応言語',
        alt: '東京で撮影したラグジュアリーバッグのポートレート',
        caption: 'Tokyo / Editorial N-07',
      }
    : {
        left: 'Est. 2012 / Tokyo',
        center: 'Circular luxury, curated with intention',
        right: 'N-001 / The Homepage',
        lines: ['Luxury,', 'preserved', 'for its next', 'guardian.'],
        lede:
          'From Tokyo, we source rare maison handbags, authenticate, lightly revive and prepare each piece for the chapter ahead. Circularity, by hand.',
        primary: 'Explore our promise',
        secondary: 'View current highlights',
        years: 'Years curating',
        pieces: 'Pieces circulated',
        languages: 'Languages spoken',
        alt: 'Editorial sakura portrait, Tokyo',
        caption: 'Tokyo / Editorial N-07',
      };

  return (
    <header className="hero" id="top">
      <div className="hero-meta">
        <div className="left">
          <span style={{ color: 'var(--accent)' }}>•</span>&nbsp;&nbsp;{copy.left}
        </div>
        <div className="center">{copy.center}</div>
        <div className="right">{copy.right}</div>
      </div>

      <div className="hero-grid">
        <div>
          <h1 className="hero-headline">
            {copy.lines.map((line, index) => (
              <span key={index} className="reveal-line">
                <span>{index === 1 ? <em>{line}</em> : line}</span>
              </span>
            ))}
          </h1>
        </div>

        <div className="hero-side">
          <div ref={imgRef} className="hero-image-wrap">
            <img
              src="/catalog/highlights-web/portrait-leopard-wallet.webp"
              alt={copy.alt}
              style={{ objectPosition: 'center 25%' }}
            />
            <div className="hero-image-caption">{copy.caption}</div>
          </div>
          <p className="hero-lede">{copy.lede}</p>
        </div>
      </div>

      <div className="hero-cta-row">
        <a className="btn-primary" href="#principles">
          <span>{copy.primary}</span>
          <span className="arrow" aria-hidden></span>
        </a>
        <a className="btn-ghost" href="#highlights">{copy.secondary}</a>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="n">12<span style={{ color: 'var(--accent)' }}>+</span></div>
            <div className="l">{copy.years}</div>
          </div>
          <div className="hero-stat">
            <div className="n">65k</div>
            <div className="l">{copy.pieces}</div>
          </div>
          <div className="hero-stat">
            <div className="n">6</div>
            <div className="l">{copy.languages}</div>
          </div>
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { Hero });
