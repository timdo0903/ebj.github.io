"use strict";

function ContactMain() {
  const isJp = window.SITE_LANG === 'jp';
  const socials = [{
    k: 'Instagram',
    handle: '@brandcoparis',
    note: isJp ? '撮影、アトリエの記録、新着アイテムなど。' : 'Editorial photography, atelier notes, new acquisitions. Updated most weeks.',
    href: 'https://www.instagram.com/brandcoparis/'
  }, {
    k: 'Facebook',
    handle: 'Brandco Paris',
    note: isJp ? 'グローバルブランドページ。お知らせや新着情報を掲載しています。' : 'Our global brand page. Announcements, features, new releases.',
    href: 'https://www.facebook.com/brandcoparis'
  }, {
    k: 'LinkedIn',
    handle: 'Eco Brand Japan',
    note: isJp ? 'パートナーシップ、プレス、採用情報はこちら。' : 'For partnership enquiries, press, and hiring updates. Quiet but active.',
    href: 'https://www.linkedin.com/company/eco-brand-japan/'
  }, {
    k: 'Rakuten',
    handle: 'brandcoparis',
    note: isJp ? '日本国内向けに、一部アイテムを楽天で販売しています。' : 'Selected pieces available for purchase in the Japanese market via our Rakuten storefront.',
    href: 'https://www.rakuten.co.jp/brandcoparis/'
  }, {
    k: 'Mercari',
    handle: 'Brandco Paris',
    note: isJp ? 'アクセサリーや革小物を中心に掲載しています。' : 'Accessories and small leather goods at accessible price points.',
    href: 'https://jp.mercari.com/shops/profile/Fv7W5YWA78UVv8mjcHr4RM'
  }, {
    k: 'Global site',
    handle: 'brandcoparis.com',
    note: isJp ? '親会社およびグローバルブランドサイト。' : 'Our parent company and global brand. Full catalogue, press kit, worldwide enquiries.',
    href: 'https://www.brandcoparis.com/'
  }];
  return React.createElement("section", {
    className: "contact-main"
  }, React.createElement("div", {
    className: "section-label"
  }, React.createElement("span", {
    className: "num"
  }, "\xA7 01"), React.createElement("span", {
    className: "title"
  }, isJp ? 'お問い合わせ' : 'Contact'), React.createElement("span", {
    className: "spacer"
  }), React.createElement("span", {
    className: "jp"
  }, "\u9023\u7D61\u5148")), React.createElement("div", {
    className: "contact-grid"
  }, React.createElement("div", {
    className: "left"
  }, React.createElement(window.FadeUp, null, React.createElement("h2", null, isJp ? React.createElement(React.Fragment, null, "\u3072\u3068\u3064\u306E\u7A93\u53E3\u304B\u3089\u3001", React.createElement("em", null, "\u62C5\u5F53\u8005\u3078\u3002")) : React.createElement(React.Fragment, null, "One inbox, ", React.createElement("em", null, "one team."))), React.createElement("p", null, isJp ? '委託、パートナーシップ、プレス、採用など、すべてのご連絡は同じコンシェルジュデスクで受け取り、社内の適切な担当へつなぎます。自動返信だけで終わらせず、東京の営業日に確認しています。' : "Write to us directly. Enquiries, consignment, partnerships, press, careers, all reach the same concierge desk and are routed internally. We don't use autoresponders and we don't route to ticketing systems. Messages are usually answered within a working day in Tokyo.")), React.createElement("div", {
    className: "contact-primary"
  }, React.createElement(window.FadeUp, {
    delay: 120
  }, React.createElement("a", {
    className: "contact-primary-card",
    href: "mailto:admin@ecobrandjp.com"
  }, React.createElement("div", {
    className: "eyebrow-row"
  }, React.createElement("span", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), isJp ? '総合窓口' : 'General enquiries'), React.createElement("span", {
    className: "arrow"
  }, "\u2192")), React.createElement("div", {
    className: "email"
  }, "admin", React.createElement("span", {
    className: "at"
  }, "@ecobrandjp.com")), React.createElement("div", {
    className: "note"
  }, isJp ? 'すべてのお問い合わせはこちらへ。必要に応じて社内で担当へつなぎます。' : 'For all enquiries. A concierge will route you internally if needed.')))), React.createElement("div", {
    style: {
      marginTop: 72
    }
  }, React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 20
    }
  }, React.createElement("span", {
    className: "dot"
  }), isJp ? '外部リンク · Brandco Paris' : 'Elsewhere · Brandco Paris'), React.createElement("div", {
    className: "contact-channels"
  }, socials.map((s, i) => React.createElement("a", {
    className: "contact-channel",
    key: i,
    href: s.href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, React.createElement("div", {
    className: "k"
  }, "\xA7 ", String(i + 1).padStart(2, '0'), " \xB7 ", s.k), React.createElement("div", {
    className: "v"
  }, React.createElement("span", null, s.handle), React.createElement("small", null, s.note)), React.createElement("div", {
    className: "arrow"
  }, "\u2192")))))), React.createElement("aside", {
    className: "contact-side"
  }, React.createElement("div", {
    className: "contact-card"
  }, React.createElement("h4", null, "Brandco Paris"), React.createElement("div", {
    className: "addr",
    style: {
      marginBottom: 10
    }
  }, isJp ? '世界各地のマーケットプレイスやSNSで使用している私たちのブランドです。' : 'Our own brand, used across marketplaces and social media worldwide.'), React.createElement("a", {
    href: "https://www.brandcoparis.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--fg)',
      borderBottom: '1px solid var(--ink-faint)',
      paddingBottom: 2
    }
  }, "brandcoparis.com \u2192")), React.createElement("div", {
    className: "contact-card"
  }, React.createElement("h4", null, "Eco Brand Japan"), React.createElement("div", {
    className: "addr"
  }, isJp ? 'Brandco Parisの日本拠点。' : 'Japan branch of Brandco Paris.', React.createElement("span", {
    className: "jp"
  }, "\u30A8\u30B3\u30D6\u30E9\u30F3\u30C9\u30B8\u30E3\u30D1\u30F3")), React.createElement("div", {
    style: {
      fontFamily: 'var(--sans)',
      fontSize: 13,
      color: 'var(--ink-quiet)',
      lineHeight: 1.6,
      textWrap: 'pretty'
    }
  }, isJp ? '現在、一般のお客様のご来訪は受け付けておりません。お問い合わせは ' : 'We are not open to visitors at this time. All enquiries, please write to ', React.createElement("a", {
    style: {
      color: 'var(--fg)',
      borderBottom: '1px solid var(--ink-faint)'
    },
    href: "mailto:admin@ecobrandjp.com"
  }, "admin@ecobrandjp.com"), isJp ? ' までお願いいたします。' : '.')), React.createElement("div", {
    className: "contact-card"
  }, React.createElement("h4", null, isJp ? '対応言語' : 'Languages spoken'), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '10px 16px',
      fontFamily: 'var(--serif)',
      fontSize: 17,
      color: 'var(--fg)',
      lineHeight: 1.4
    }
  }, React.createElement("div", null, "English"), React.createElement("div", {
    style: {
      fontFamily: 'var(--jp)'
    }
  }, "\u65E5\u672C\u8A9E"), React.createElement("div", {
    style: {
      fontFamily: 'var(--jp)'
    }
  }, "\u4E2D\u6587"), React.createElement("div", null, React.createElement("em", null, "Espa\xF1ol")), React.createElement("div", null, React.createElement("em", null, "Fran\xE7ais")), React.createElement("div", null, "Tagalog"))))));
}
Object.assign(window, {
  ContactMain
});