function Footer() {
  const isJp = window.SITE_LANG === 'jp';

  return (
    <footer className="foot" id="contact">
      <div className="foot-top">
        <div className="foot-brand">
          <div
            className="mark"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.1 }}
          >
            <span>Eco Brand Japan</span>
            <span
              style={{
                fontFamily: 'var(--jp)',
                fontSize: '11px',
                color: 'var(--ink-quiet)',
                letterSpacing: '.14em',
                marginTop: '6px',
                fontWeight: 400,
              }}
            >
              エコブランドジャパン
            </span>
          </div>
          <p>{isJp ? '東京から、丁寧に選び、次へつなぐサーキュラー・ラグジュアリーを。' : 'Circular luxury, curated with intention. From Tokyo, to the world\'s most considered collectors.'}</p>
        </div>

        <div>
          <h5>{isJp ? 'ページ' : 'Explore'}</h5>
          <ul>
            <li><a href="about.html">{isJp ? '会社概要' : 'About'}</a></li>
            <li><a href="principles.html">{isJp ? '私たちの約束' : 'Principles'}</a></li>
            <li><a href="highlights.html">{isJp ? 'ハイライト' : 'Highlights'}</a></li>
            <li><a href="careers.html">{isJp ? '採用情報' : 'Careers'}</a></li>
            <li><a href="contact.html">{isJp ? 'お問い合わせ' : 'Contact'}</a></li>
          </ul>
        </div>

        <div>
          <h5>{isJp ? '外部リンク' : 'Channels'}</h5>
          <ul>
            <li><a href="https://www.instagram.com/brandcoparis/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.facebook.com/brandcoparis" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.linkedin.com/company/eco-brand-japan/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.rakuten.co.jp/brandcoparis/" target="_blank" rel="noopener noreferrer">Rakuten</a></li>
            <li><a href="https://jp.mercari.com/shops/profile/Fv7W5YWA78UVv8mjcHr4RM" target="_blank" rel="noopener noreferrer">Mercari</a></li>
            <li><a href="https://www.brandcoparis.com/" target="_blank" rel="noopener noreferrer">Brandco Paris</a></li>
          </ul>
        </div>
      </div>

      <div className="foot-bot">
        <div>Copyright 2026 Eco Brand Japan - Tokyo</div>
        <div>{isJp ? '丁寧に受け継ぐラグジュアリー' : 'Circular luxury, curated with intention'}</div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
