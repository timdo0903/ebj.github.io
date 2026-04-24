"use strict";

function PrincipleAuthenticity() {
  const isJp = window.SITE_LANG === 'jp';
  const checklist = isJp ? [['01', '多角的な真贋確認', '金具、縫製、革、刻印、製造コード、メゾンごとの確認項目を見ます。', '必須'], ['02', '鑑定書', 'ご希望に応じて、別途費用にて正式な鑑定書を発行します。', 'ご希望制'], ['03', '履歴の管理', '入荷からリリースまでの管理情報を社内で記録します。', '記録'], ['04', '曖昧なものは扱わない', '一点でも疑いが残る場合は、販売へ進めません。', '絶対'], ['05', '外部レビュー', 'ランダムな社内記録を外部専門家が定期的に確認します。', '定期']] : [['01', 'Multi-point authentication', 'Hardware, stitching, leather, stamping, date codes, and maison-specific checks.', 'Required'], ['02', 'Authentication certificate', 'A formal certificate of authenticity is available on request, issued for an additional fee.', 'On request'], ['03', 'Provenance tracking', 'Chain of custody from intake to release, kept on file for ten years.', 'On record'], ['04', 'No-doubt rule', 'If a single checkpoint returns a doubt, the piece is returned at our expense.', 'Absolute'], ['05', 'Independent review', 'Quarterly audit of random dossiers by an outside specialist.', 'Quarterly']];
  return React.createElement("section", {
    className: "principle-deep",
    id: "authenticity"
  }, React.createElement("div", {
    className: "section-label"
  }, React.createElement("span", {
    className: "num"
  }, "\xA7 I"), React.createElement("span", {
    className: "title"
  }, isJp ? '確かな真贋確認' : 'Authenticity · Assured'), React.createElement("span", {
    className: "spacer"
  }), React.createElement("span", {
    className: "jp"
  }, "\u672C\u7269")), React.createElement("div", {
    className: "head"
  }, React.createElement(window.FadeUp, null, React.createElement("div", {
    className: "kanji"
  }, "\u771F"), React.createElement("div", {
    className: "label"
  }, isJp ? 'SHIN · 本当であること、確かであること' : 'SHIN · true, real, authentic')), React.createElement(window.FadeUp, {
    delay: 120
  }, React.createElement("h2", null, isJp ? React.createElement(React.Fragment, null, "\u6271\u3046\u3082\u306E\u306F", React.createElement("em", null, "\u672C\u7269"), "\u3060\u3051\u3002") : React.createElement(React.Fragment, null, "What we sell is ", React.createElement("em", null, "real"), ", and we can prove it.")), React.createElement("p", {
    className: "intro"
  }, isJp ? 'すべてのアイテムは、カタログ番号を持つ前に複数の確認を通過します。ひとつでも疑いが残る場合、私たちは販売へ進めません。曖昧さを、別の言葉で飾ることはしません。' : 'Every piece passes a multi-point authentication protocol before it receives a catalogue number. If any single checkpoint returns a doubt, the piece is returned to the sender. We do not sell ambiguity, and we do not re-describe it as "unverified".'))), React.createElement("div", {
    className: "body"
  }, React.createElement(window.FadeUp, null, React.createElement("p", null, isJp ? '担当するスタッフは、革製品に関する経験を重ねてきた専門チームです。金具の刻印、ステッチ数、革の質感、コバ、内側のコード、メゾンごとの特徴を確認します。' : "Our lead authenticators have between five and twenty years in leather goods between them. They examine hardware stamping, stitch count, leather grain, edge painting, interior date codes and maison-specific tells that we don't publish, because the moment we did, they would be reverse-engineered by the market."), React.createElement("p", null, isJp ? '各アイテムには、社内用の状態記録を残します。自然光での写真、採寸、状態の説明、担当者の記録を管理し、必要に応じてパートナー確認にも使用します。正式な鑑定書は、ご希望に応じて別途費用で発行します。' : 'Every piece is accompanied by a detailed internal condition dossier, dated and signed by the authenticator responsible, with daylight photographs, measurements and an honest account of condition. These records are kept for internal tracking and partner assurance. A formal authentication certificate is available to collectors and partners on request, issued for an additional fee.'), React.createElement("p", null, isJp ? '真贋確認を通過しないものは、すぐにご連絡し、販売対象にはしません。これは私たちの最もシンプルで、最も重要なルールです。' : 'When a piece fails authentication, we tell the consignor immediately and return it at our expense. We keep no ambiguous inventory. This is the simplest and most important rule we operate by.')), React.createElement(window.FadeUp, {
    delay: 120
  }, React.createElement("div", {
    className: "checklist"
  }, checklist.map(([n, title, small, tag]) => React.createElement("div", {
    className: "item",
    key: n
  }, React.createElement("div", {
    className: "n"
  }, n), React.createElement("div", {
    className: "t"
  }, title, React.createElement("small", null, small)), React.createElement("div", {
    className: "tag"
  }, tag)))))));
}
Object.assign(window, {
  PrincipleAuthenticity
});