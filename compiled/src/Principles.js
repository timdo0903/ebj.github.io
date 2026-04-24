"use strict";

function Principles() {
  const isJp = window.SITE_LANG === 'jp';
  const items = isJp ? [{
    num: 'I',
    title: React.createElement(React.Fragment, null, "\u78BA\u304B\u306A", React.createElement("br", null), React.createElement("em", null, "\u771F\u8D0B\u78BA\u8A8D")),
    body: '専門スタッフの確認、独自のチェックポイント、状態の丁寧な記録。信頼できる一点としてお届けできるものだけを扱います。',
    checks: ['多角的な真贋確認', '状態の記録', '履歴の管理']
  }, {
    num: 'II',
    title: React.createElement(React.Fragment, null, "\u5FAA\u74B0\u3092\u652F\u3048\u308B", React.createElement("br", null), React.createElement("em", null, "\u624B\u4ED5\u4E8B")),
    body: '過度な加工ではなく、必要なケアを静かに。素材を尊重し、長く使い続けられる状態へ整えます。',
    checks: ['手作業でのケア', '低負荷な梱包', '循環を意識した仕入れ']
  }, {
    num: 'III',
    title: React.createElement(React.Fragment, null, "\u9577\u304F\u7D9A\u304F", React.createElement("br", null), React.createElement("em", null, "\u95A2\u4FC2\u6027")),
    body: 'お客様やパートナーとの関係を、明確さ、誠実さ、丁寧なコミュニケーションで育てます。',
    checks: ['多言語対応', '明確なやり取り', '長期的な関係']
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