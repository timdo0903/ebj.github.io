"use strict";

function ContactHero() {
  const isJp = window.SITE_LANG === 'jp';
  return React.createElement("header", {
    className: "page-hero",
    style: {
      paddingBottom: 40
    }
  }, React.createElement("div", {
    className: "meta"
  }, React.createElement("div", null, React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "\u2022"), "\xA0\xA0", isJp ? '通常24時間以内に返信' : 'Usually replies within 24h'), React.createElement("div", {
    className: "jp"
  }, "\u3054\u9023\u7D61"), React.createElement("div", null, "N\xB0005 \xB7 ", isJp ? 'お問い合わせ' : 'Contact')), React.createElement(window.FadeUp, null, React.createElement("h1", null, isJp ? React.createElement(React.Fragment, null, React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, "\u3054\u76F8\u8AC7\u306F\u3001")), React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, React.createElement("em", null, "\u3044\u3064\u3082\u306E\u7A93\u53E3\u3078\u3002"), React.createElement("span", {
    className: "kanji"
  }, "\u7E01")))) : React.createElement(React.Fragment, null, React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, "Say hello,")), React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, "in any of ", React.createElement("em", null, "six"))), React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, React.createElement("em", null, "languages."), React.createElement("span", {
    className: "kanji"
  }, "\u7E01")))))), React.createElement(window.FadeUp, {
    delay: 180
  }, React.createElement("p", {
    className: "lede"
  }, isJp ? '東京のコンシェルジュチームが平日にメッセージを確認しています。コレクター、パートナー、プレス、採用に関するご連絡まで、同じ窓口から適切な担当へつなぎます。' : "Our concierge team reads messages every weekday in Tokyo, with support from Paris. Whether you're a collector, a partner maison, a distributor, or press, the same people will write you back.")));
}
Object.assign(window, {
  ContactHero
});