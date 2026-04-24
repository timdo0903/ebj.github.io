"use strict";

function Principles() {
  const isJp = window.SITE_LANG === 'jp';
  const items = isJp ? [{
    num: 'I',
    title: React.createElement(React.Fragment, null, "\u78BA\u304B\u306A", React.createElement("em", null, "\u771F\u8D0B\u78BA\u8A8D")),
    body: '専門スタッフによる確認、独自のチェックポイント、透明性のある情報開示によって、すべての一点を信頼できる状態でお届けします。',
    checks: ['多角的な真贋確認', '状態の記録', '由来の追跡']
  }, {
    num: 'II',
    title: React.createElement(React.Fragment, null, "\u6301\u7D9A\u53EF\u80FD\u306A", React.createElement("em", null, "\u53D7\u3051\u7D99\u304E")),
    body: 'やさしいケアとクリーニング、負荷を抑えた梱包、循環を意識した運営によって、ラグジュアリーが長く価値を持ち続ける流れをつくります。',
    checks: ['手作業での軽いケア', '環境配慮の梱包', '循環型の仕入れ']
  }, {
    num: 'III',
    title: React.createElement(React.Fragment, null, "\u8AA0\u5B9F\u306A", React.createElement("em", null, "\u95A2\u4FC2\u6027")),
    body: 'お預かりする方々との関係を、明確さと誠実さ、そして丁寧な対応で育てていきます。長く続く関係こそ、私たちの基準です。',
    checks: ['多言語対応', '迅速なやり取り', '長期的な関係性']
  }] : [{
    num: 'I',
    title: React.createElement(React.Fragment, null, "Authenticity", React.createElement("br", null), React.createElement("em", null, "assured")),
    body: 'Expert authenticators, proprietary checkpoints and transparent reporting ensure each item and description is worthy of your trust, without exception.',
    checks: ['Multi-point authentication', 'Condition reporting', 'Provenance tracking']
  }, {
    num: 'II',
    title: React.createElement(React.Fragment, null, "Sustainable", React.createElement("br", null), React.createElement("em", null, "stewardship")),
    body: 'From gentle care and cleaning to sustainable packaging, we promote circularity, so luxury continues to create positive impact, generation after generation.',
    checks: ['Light refresh by hand', 'Low-impact packaging', 'Closed-loop sourcing']
  }, {
    num: 'III',
    title: React.createElement(React.Fragment, null, "Respectful", React.createElement("br", null), React.createElement("em", null, "relationships")),
    body: 'We build long-term partnerships rooted in clarity, integrity and care for the people who entrust us with their collections, a relationship that lasts.',
    checks: ['Multilingual concierge', 'Swift payment cycles', 'Lifelong partners']
  }];
  return React.createElement("section", {
    className: "principles",
    id: "principles"
  }, React.createElement("div", {
    className: "section-label"
  }, React.createElement("span", {
    className: "num"
  }, "S 02"), React.createElement("span", {
    className: "title"
  }, isJp ? '私たちの約束' : 'Our Promise'), React.createElement("span", {
    className: "spacer"
  })), React.createElement("div", {
    className: "principles-grid"
  }, items.map((p, i) => React.createElement(window.FadeUp, {
    className: "principle",
    key: p.num,
    delay: i * 120
  }, React.createElement("div", {
    className: "num"
  }, "Principle ", p.num), React.createElement("h3", null, p.title), React.createElement("p", null, p.body), React.createElement("div", {
    className: "checks"
  }, p.checks.map(c => React.createElement("div", {
    className: "check",
    key: c
  }, c)))))));
}
Object.assign(window, {
  Principles
});