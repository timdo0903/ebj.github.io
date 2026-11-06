// Facebook, LinkedIn and Rakuten glyphs come from Simple Icons (CC0); Mercari's "m" is
// taken from its logo SVG. BUYMA, Rakuma and Brandco Paris are single-colour masks in
// /images/channels/ so every icon follows the footer's text and hover colours.
const FOOTER_CHANNELS = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/brandcoparis',
    path: 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/eco-brand-japan/',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    name: 'Rakuten',
    href: 'https://www.rakuten.co.jp/brandcoparis/',
    path: 'M23.277 21.3L3.939 24 .722 21.3h22.555zM7.6 19.276H3.939V0h6.052a6.653 6.653 0 0 1 6.65 6.646c0 2.234-1.108 4.204-2.799 5.418l5.418 7.211h-4.585l-4.486-5.979H7.6v5.98zm0-9.64h2.392a2.992 2.992 0 0 0 2.989-2.989 2.994 2.994 0 0 0-2.989-2.986H7.6v5.975z',
  },
  {
    name: 'Mercari',
    href: 'https://jp.mercari.com/shops/profile/Fv7W5YWA78UVv8mjcHr4RM',
    viewBox: '-2 12 102.6 80',
    path: 'M69.8,24.1c-9,0-14.7,3.2-20.6,10.2c-5.6-6.6-12.2-10.1-21-10.1C11.5,24.1,0,36.6,0,53.3v36.2 h15.1V51.8c0-8,4.8-14,13.1-14s13.6,6,13.6,14v37.7h14.8V51.8c0-8,5-14,13.2-14s13.8,6,13.8,14v37.7h15.1V53.3 C98.6,36.6,86.5,24.1,69.8,24.1z',
  },
  { name: 'BUYMA', href: 'https://www.buyma.com/buyer/13261341.html', mask: 'buyma' },
  { name: 'Rakuma', href: 'https://fril.jp/shop/0701602fe1221f6bb38bcc11adeb1671', mask: 'rakuma' },
  { name: 'Brandco Paris', href: 'https://www.brandcoparis.com/', mask: 'brandco' },
];

const FOOTER_SOCIAL = ['Facebook', 'LinkedIn'].map((n) => FOOTER_CHANNELS.find((c) => c.name === n));
const FOOTER_STORES = ['Rakuten', 'Mercari', 'Brandco Paris', 'BUYMA', 'Rakuma'].map((n) => FOOTER_CHANNELS.find((c) => c.name === n));

function FooterChannelIcons({ channels }) {
  return (
    <ul className="foot-channels">
      {channels.map((c) => (
        <li key={c.name}>
          <a href={c.href} target="_blank" rel="noopener noreferrer" aria-label={c.name} title={c.name}>
            {c.path ? (
              <svg viewBox={c.viewBox || '0 0 24 24'} aria-hidden="true" focusable="false"><path d={c.path} /></svg>
            ) : (
              <span className={`foot-channel-logo foot-channel-logo--${c.mask}`} aria-hidden="true" />
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}

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
            <li><a href={isJp ? '/ja/about/' : '/about/'}>{isJp ? '会社概要' : 'About'}</a></li>
            <li><a href={isJp ? '/ja/principles/' : '/principles/'}>{isJp ? '約束' : 'Principles'}</a></li>
            <li><a href={isJp ? '/ja/highlights/' : '/highlights/'}>{isJp ? 'ハイライト' : 'Highlights'}</a></li>
            <li><a href={isJp ? '/ja/careers/' : '/careers/'}>{isJp ? '採用情報' : 'Careers'}</a></li>
            <li><a href={isJp ? '/ja/contact/' : '/contact/'}>{isJp ? 'お問い合わせ' : 'Contact'}</a></li>
          </ul>
        </div>

        <div className="foot-channel-groups">
          <div>
            <h5>{isJp ? 'ソーシャル' : 'Social'}</h5>
            <FooterChannelIcons channels={FOOTER_SOCIAL} />
          </div>
          <div>
            <h5>{isJp ? 'オンラインストア' : 'Stores'}</h5>
            <FooterChannelIcons channels={FOOTER_STORES} />
          </div>
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
