function ContactMain() {
  const socials = [
    {
      k: 'Instagram',
      handle: '@brandcoparis',
      note: 'Editorial photography, atelier notes, new acquisitions. Updated most weeks.',
      href: 'https://www.instagram.com/brandcoparis/',
    },
    {
      k: 'Facebook',
      handle: 'Brandco Paris',
      note: 'Our global brand page. Announcements, features, new releases.',
      href: 'https://www.facebook.com/brandcoparis',
    },
    {
      k: 'LinkedIn',
      handle: 'Eco Brand Japan',
      note: 'For partnership enquiries, press, and hiring updates. Quiet but active.',
      href: 'https://www.linkedin.com/company/eco-brand-japan/',
    },
    {
      k: 'Rakuten',
      handle: 'brandcoparis',
      note: 'Selected pieces available for purchase in the Japanese market via our Rakuten storefront.',
      href: 'https://www.rakuten.co.jp/brandcoparis/',
    },
    {
      k: 'Mercari',
      handle: 'Brandco Paris',
      note: 'Accessories and small leather goods at accessible price points.',
      href: 'https://jp.mercari.com/shops/profile/Fv7W5YWA78UVv8mjcHr4RM',
    },
    {
      k: 'Global site',
      handle: 'brandcoparis.com',
      note: 'Our parent company and global brand. Full catalogue, press kit, worldwide enquiries.',
      href: 'https://www.brandcoparis.com/',
    },
  ];

  return (
    <section className="contact-main">
      <div className="section-label">
        <span className="num">§ 01</span>
        <span className="title">Contact</span>
        <span className="spacer" />
        <span className="jp">連絡先</span>
      </div>

      <div className="contact-grid">
        <div className="left">
          <window.FadeUp>
            <h2>One inbox, <em>one team.</em></h2>
            <p>
              Write to us directly. Enquiries, consignment, partnerships, press, careers, all reach the same concierge desk and are routed internally. We don't use autoresponders and we don't route to ticketing systems. Messages are usually answered within a working day in Tokyo.
            </p>
          </window.FadeUp>

          <div className="contact-primary">
            <window.FadeUp delay={120}>
              <a className="contact-primary-card" href="mailto:admin@ecobrandjp.com">
                <div className="eyebrow-row">
                  <span className="eyebrow"><span className="dot"></span>General enquiries</span>
                  <span className="arrow">↗</span>
                </div>
                <div className="email">
                  admin<span className="at">@ecobrandjp.com</span>
                </div>
                <div className="note">
                  For all enquiries. A concierge will route you internally if needed.
                </div>
              </a>
            </window.FadeUp>
          </div>

          <div style={{ marginTop: 72 }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              <span className="dot"></span>Elsewhere · Brandco Paris
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
                  <div className="arrow">↗</div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <aside className="contact-side">
          <div className="contact-card">
            <h4>Brandco Paris</h4>
            <div className="addr" style={{ marginBottom: 10 }}>
              Our own brand, used across marketplaces and social media worldwide.
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
              brandcoparis.com ↗
            </a>
          </div>

          <div className="contact-card">
            <h4>Eco Brand Japan</h4>
            <div className="addr">
              Japan branch of Brandco Paris.
              <span className="jp">エコブランドジャパン</span>
            </div>
            <div style={{
              fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink-quiet)',
              lineHeight: 1.6, textWrap: 'pretty',
            }}>
              We are not open to visitors at this time. All enquiries, please write to <a style={{ color: 'var(--fg)', borderBottom: '1px solid var(--ink-faint)' }} href="mailto:admin@ecobrandjp.com">admin@ecobrandjp.com</a>.
            </div>
          </div>

          <div className="contact-card">
            <h4>Languages spoken</h4>
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
