"use strict";

function ContactMain() {
  const socials = [{
    k: 'Instagram',
    handle: '@brandcoparis',
    note: 'Editorial photography, atelier notes, new acquisitions. Updated most weeks.',
    href: 'https://www.instagram.com/brandcoparis/'
  }, {
    k: 'Facebook',
    handle: 'Brandco Paris',
    note: 'Our global brand page. Announcements, features, new releases.',
    href: 'https://www.facebook.com/brandcoparis'
  }, {
    k: 'LinkedIn',
    handle: 'Eco Brand Japan',
    note: 'For partnership enquiries, press, and hiring updates. Quiet but active.',
    href: 'https://www.linkedin.com/company/eco-brand-japan/'
  }, {
    k: 'Rakuten',
    handle: 'brandcoparis',
    note: 'Selected pieces available for purchase in the Japanese market via our Rakuten storefront.',
    href: 'https://www.rakuten.co.jp/brandcoparis/'
  }, {
    k: 'Mercari',
    handle: 'Brandco Paris',
    note: 'Accessories and small leather goods at accessible price points.',
    href: 'https://jp.mercari.com/shops/profile/Fv7W5YWA78UVv8mjcHr4RM'
  }, {
    k: 'Global site',
    handle: 'brandcoparis.com',
    note: 'Our parent company and global brand. Full catalogue, press kit, worldwide enquiries.',
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
  }, "Contact"), React.createElement("span", {
    className: "spacer"
  }), React.createElement("span", {
    className: "jp"
  }, "\u9023\u7D61\u5148")), React.createElement("div", {
    className: "contact-grid"
  }, React.createElement("div", {
    className: "left"
  }, React.createElement(window.FadeUp, null, React.createElement("h2", null, "One inbox, ", React.createElement("em", null, "one team.")), React.createElement("p", null, "Write to us directly. Enquiries, consignment, partnerships, press, careers, all reach the same concierge desk and are routed internally. We don't use autoresponders and we don't route to ticketing systems. Messages are usually answered within a working day in Tokyo.")), React.createElement("div", {
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
  }), "General enquiries"), React.createElement("span", {
    className: "arrow"
  }, "\u2197")), React.createElement("div", {
    className: "email"
  }, "admin", React.createElement("span", {
    className: "at"
  }, "@ecobrandjp.com")), React.createElement("div", {
    className: "note"
  }, "For all enquiries. A concierge will route you internally if needed.")))), React.createElement("div", {
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
  }), "Elsewhere \xB7 Brandco Paris"), React.createElement("div", {
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
  }, "\u2197")))))), React.createElement("aside", {
    className: "contact-side"
  }, React.createElement("div", {
    className: "contact-card"
  }, React.createElement("h4", null, "Brandco Paris"), React.createElement("div", {
    className: "addr",
    style: {
      marginBottom: 10
    }
  }, "Our own brand, used across marketplaces and social media worldwide."), React.createElement("a", {
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
  }, "brandcoparis.com \u2197")), React.createElement("div", {
    className: "contact-card"
  }, React.createElement("h4", null, "Eco Brand Japan"), React.createElement("div", {
    className: "addr"
  }, "Japan branch of Brandco Paris.", React.createElement("span", {
    className: "jp"
  }, "\u30A8\u30B3\u30D6\u30E9\u30F3\u30C9\u30B8\u30E3\u30D1\u30F3")), React.createElement("div", {
    style: {
      fontFamily: 'var(--sans)',
      fontSize: 13,
      color: 'var(--ink-quiet)',
      lineHeight: 1.6,
      textWrap: 'pretty'
    }
  }, "We are not open to visitors at this time. All enquiries, please write to ", React.createElement("a", {
    style: {
      color: 'var(--fg)',
      borderBottom: '1px solid var(--ink-faint)'
    },
    href: "mailto:admin@ecobrandjp.com"
  }, "admin@ecobrandjp.com"), ".")), React.createElement("div", {
    className: "contact-card"
  }, React.createElement("h4", null, "Languages spoken"), React.createElement("div", {
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