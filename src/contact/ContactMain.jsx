function ContactMain() {
  const isJp = window.SITE_LANG === 'jp';
  const contactFormUrl = 'https://b5i9cfx0.forms.app/eco-brand-japan-contact';
  const socials = [
    {
      k: 'Instagram',
      handle: '@brandcoparis',
      note: isJp ? '撮影、アトリエの記録、新着アイテムなど。' : 'Editorial photography, atelier notes, new acquisitions. Updated most weeks.',
      href: 'https://www.instagram.com/brandcoparis/',
    },
    {
      k: 'Facebook',
      handle: 'Brandco Paris',
      note: isJp ? 'グローバルブランドページ。お知らせや新着情報を掲載しています。' : 'Our global brand page. Announcements, features, new releases.',
      href: 'https://www.facebook.com/brandcoparis',
    },
    {
      k: 'LinkedIn',
      handle: 'Eco Brand Japan',
      note: isJp ? 'パートナーシップ、プレス、採用情報はこちら。' : 'For partnership enquiries, press, and hiring updates. Quiet but active.',
      href: 'https://www.linkedin.com/company/eco-brand-japan/',
    },
    {
      k: 'Rakuten',
      handle: 'brandcoparis',
      note: isJp ? '日本国内向けに、一部アイテムを楽天で販売しています。' : 'Selected pieces available for purchase in the Japanese market via our Rakuten storefront.',
      href: 'https://www.rakuten.co.jp/brandcoparis/',
    },
    {
      k: 'Mercari',
      handle: 'Brandco Paris',
      note: isJp ? 'アクセサリーや革小物を中心に掲載しています。' : 'Accessories and small leather goods at accessible price points.',
      href: 'https://jp.mercari.com/shops/profile/Fv7W5YWA78UVv8mjcHr4RM',
    },
    {
      k: 'Global site',
      handle: 'brandcoparis.com',
      note: isJp ? '親会社およびグローバルブランドサイト。' : 'Our parent company and global brand. Full catalogue, press kit, worldwide enquiries.',
      href: 'https://www.brandcoparis.com/',
    },
  ];

  return (
    <section className="contact-main">
      <div className="section-label">
        <span className="num">§ 01</span>
        <span className="title">{isJp ? 'お問い合わせ' : 'Contact'}</span>
        <span className="spacer" />
        <span className="jp">連絡先</span>
      </div>

      <div className="contact-grid">
        <div className="left">
          <window.FadeUp>
            <h2>{isJp ? <>フォームから、<em>担当者へ。</em></> : <>One form, <em>one team.</em></>}</h2>
            <p>
              {isJp
                ? '委託、パートナーシップ、プレス、採用など、すべてのご連絡は下記フォームで受け取り、社内の適切な担当へつなぎます。東京の営業日に確認しています。'
                : 'Send your note through the form below. Enquiries, consignment, partnerships, press, and careers all reach the same concierge desk and are routed internally during Tokyo business days.'}
            </p>
          </window.FadeUp>

          <div className="contact-primary">
            <window.FadeUp delay={120}>
              <div className="contact-form-panel">
                <div className="eyebrow-row">
                  <span className="eyebrow"><span className="dot"></span>{isJp ? '総合窓口' : 'General enquiries'}</span>
                  <span className="form-note">{isJp ? '東京営業日' : 'Tokyo business days'}</span>
                </div>

                <iframe
                  className="contact-form-embed"
                  title={isJp ? 'Eco Brand Japan お問い合わせフォーム' : 'Eco Brand Japan contact form'}
                  src={contactFormUrl}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>

                <div className="contact-form-footer">
                  <p>
                    {isJp
                      ? '内容を確認後、担当者よりご連絡します。'
                      : 'After review, the right team member will reply directly.'}
                  </p>
                  <a className="btn-primary" href={contactFormUrl} target="_blank" rel="noopener noreferrer">
                    <span>{isJp ? 'フォームを開く' : 'Open form'}</span>
                    <span className="arrow"></span>
                  </a>
                </div>
              </div>
            </window.FadeUp>
          </div>

          <div style={{ marginTop: 72 }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              <span className="dot"></span>{isJp ? '外部リンク · Brandco Paris' : 'Elsewhere · Brandco Paris'}
            </div>
            <div className="contact-channels">
              {socials.map((s, i) => (
                <a
                  className="contact-channel"
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="k">§ {String(i + 1).padStart(2, '0')} · {s.k}</div>
                  <div className="v">
                    <span>{s.handle}</span>
                    <small>{s.note}</small>
                  </div>
                  <div className="arrow">→</div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <aside className="contact-side">
          <div className="contact-card">
            <h4>Brandco Paris</h4>
            <div className="addr" style={{ marginBottom: 10 }}>
              {isJp ? '世界各地のマーケットプレイスやSNSで使用している私たちのブランドです。' : 'Our own brand, used across marketplaces and social media worldwide.'}
            </div>
            <a
              href="https://www.brandcoparis.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '.14em',
                textTransform: 'uppercase', color: 'var(--fg)',
                borderBottom: '1px solid var(--ink-faint)', paddingBottom: 2,
              }}
            >
              brandcoparis.com →
            </a>
          </div>

          <div className="contact-card">
            <h4>Eco Brand Japan</h4>
            <div className="addr">
              {isJp ? 'Brandco Parisの日本拠点。' : 'Japan branch of Brandco Paris.'}
              <span className="jp">エコブランドジャパン</span>
            </div>
            <div style={{
              fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink-quiet)',
              lineHeight: 1.6, textWrap: 'pretty',
            }}>
              {isJp
                ? '現在、一般のお客様のご来訪は受け付けておりません。ご相談はフォームからお送りください。内容に応じて担当者が確認します。'
                : 'We are not open to visitors at this time. Please use the contact form and the relevant team member will review your note.'}
            </div>
          </div>

          <div className="contact-card">
            <h4>{isJp ? '対応言語' : 'Languages spoken'}</h4>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px',
              fontFamily: 'var(--serif)', fontSize: 17, color: 'var(--fg)', lineHeight: 1.4,
            }}>
              <div>English</div>
              <div style={{ fontFamily: 'var(--jp)' }}>日本語</div>
              <div style={{ fontFamily: 'var(--jp)' }}>中文</div>
              <div><em>Español</em></div>
              <div><em>Français</em></div>
              <div>Tagalog</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
Object.assign(window, { ContactMain });
