"use strict";

function AboutTeam() {
  const isJp = window.SITE_LANG === 'jp';
  const offices = isJp ? [{
    city: 'Europe',
    role: 'ブランドパートナーシップとマーケット開発',
    note: 'パートナーシップ、仕入れ先との関係構築、地域ごとのビジネス開発を担う独立拠点です。',
    quiet: true
  }, {
    city: 'Tokyo',
    role: '真贋確認、ケア、撮影、オペレーション',
    note: 'アイテムを受け取り、確認し、整え、撮影し、次の持ち主へ送り出す中心となるアトリエです。',
    quiet: false
  }, {
    city: 'United States',
    role: 'クライアントサービスとコレクター対応',
    note: '米州のコレクターや卸先を支える、クライアント-facingの独立拠点です。',
    quiet: true
  }] : [{
    city: 'Europe',
    role: 'Brand partnerships and market development',
    note: 'An independent office focused on partnerships, sourcing relationships, and regional business development.',
    quiet: true
  }, {
    city: 'Tokyo',
    role: 'Authentication, restoration, and studio operations',
    note: "The atelier where pieces are received, restored, photographed, and prepared with the team's daily hands-on standard.",
    quiet: false
  }, {
    city: 'United States',
    role: 'Client service and collector relations',
    note: 'A standalone client-facing office supporting collectors, wholesale partners, and time-zone coverage across the Americas.',
    quiet: true
  }];
  return React.createElement("section", {
    className: "team-atelier",
    id: "team"
  }, React.createElement("div", {
    className: "section-label"
  }, React.createElement("span", {
    className: "num"
  }, "\xA7 04"), React.createElement("span", {
    className: "title"
  }, isJp ? 'アトリエ' : 'The Atelier'), React.createElement("span", {
    className: "spacer"
  }), React.createElement("span", {
    className: "jp"
  }, "\u30A2\u30C8\u30EA\u30A8")), React.createElement("div", {
    className: "atelier-hero"
  }, React.createElement(window.FadeUp, null, React.createElement("div", {
    className: "atelier-eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), React.createElement("span", null, isJp ? '五十の手、ひとつの基準' : 'Fifty hands, one standard'))), React.createElement(window.FadeUp, {
    delay: 60
  }, React.createElement("h2", {
    className: "atelier-headline"
  }, isJp ? React.createElement(React.Fragment, null, "\u5C0F\u3055\u306A\u30C1\u30FC\u30E0\u306E\u3001", React.createElement("br", null), React.createElement("em", null, "\u4E01\u5BE7\u306A\u624B\u4ED5\u4E8B"), "\u3002") : React.createElement(React.Fragment, null, "A small team", React.createElement("br", null), React.createElement("em", null, "of careful hands"), "."))), React.createElement("div", {
    className: "atelier-number-row"
  }, React.createElement(window.FadeUp, {
    delay: 120,
    className: "atelier-number"
  }, React.createElement("div", {
    className: "n"
  }, "20"), React.createElement("div", {
    className: "n-caption"
  }, React.createElement("span", {
    className: "plus"
  }, "+"), React.createElement("div", null, React.createElement("div", {
    className: "k"
  }, isJp ? '社内スペシャリスト' : 'Specialists on staff'), React.createElement("div", {
    className: "v"
  }, isJp ? '真贋確認、ケア、撮影、コンシェルジュ。' : 'Authenticators, restorers, photographers, concierges.')))), React.createElement(window.FadeUp, {
    delay: 200,
    className: "atelier-quote"
  }, React.createElement("div", {
    className: "kanji"
  }, "\u616E"), React.createElement("p", null, isJp ? '「一点が次の持ち主へ届くまでに、少なくとも三組の手を通ります。丁寧な仕事には、そのくらいの確認が必要だと考えています。」' : '"Every piece passes through at least three pairs of hands before it reaches its next guardian. We believe that is the minimum that careful work requires."'), React.createElement("div", {
    className: "cite"
  }, isJp ? 'チームが大切にしていること' : 'The team, on careful practice')))), React.createElement("div", {
    className: "atelier-map"
  }, React.createElement("div", {
    className: "atelier-map-head"
  }, React.createElement("span", {
    className: "k"
  }, "\xA7 IV.a"), React.createElement("span", {
    className: "t"
  }, isJp ? '拠点' : 'Our offices'), React.createElement("span", {
    className: "spacer"
  }), React.createElement("span", {
    className: "jp"
  }, "\u62E0\u70B9")), React.createElement("div", {
    className: "atelier-map-rows"
  }, offices.map((office, index) => React.createElement(window.FadeUp, {
    delay: 80 + index * 60,
    className: "atelier-row",
    key: office.city
  }, React.createElement("div", {
    className: "atelier-row-label"
  }, React.createElement("span", {
    className: "badge badge-quiet"
  }, "Office"), React.createElement("span", {
    className: "jp"
  }, "\u30AA\u30D5\u30A3\u30B9")), React.createElement("div", {
    className: "atelier-row-place"
  }, React.createElement("div", {
    className: "city"
  }, office.city), React.createElement("div", {
    className: "role"
  }, office.role)), React.createElement("div", {
    className: "atelier-row-note"
  }, office.note), React.createElement("div", {
    className: "atelier-row-mark"
  }, React.createElement("span", {
    className: `dot${office.quiet ? ' quiet' : ''}`
  }))))), React.createElement("div", {
    className: "atelier-map-foot"
  }, React.createElement("span", null, isJp ? '三つの独立した拠点を、同じケアの基準でつないでいます。' : 'Three standalone offices, aligned by the same standard of care.'), React.createElement("span", {
    className: "mono"
  }, "EUROPE \xA0/\xA0 TOKYO \xA0/\xA0 UNITED STATES"))));
}
Object.assign(window, {
  AboutTeam
});