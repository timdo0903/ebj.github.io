"use strict";

function HighlightsHero() {
  const isJp = window.SITE_LANG === 'jp';
  return React.createElement("header", {
    className: "page-hero",
    style: {
      paddingBottom: 48
    }
  }, React.createElement("div", {
    className: "meta"
  }, React.createElement("div", null, React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "\u2022"), "\xA0\xA0", isJp ? '日々更新' : 'Refreshed daily'), React.createElement("div", {
    className: "jp"
  }, "\u53B3\u9078"), React.createElement("div", null, "N\xB0004 \xB7 ", isJp ? 'ハイライト' : 'Highlights')), React.createElement(window.FadeUp, null, React.createElement("h1", null, isJp ? React.createElement(React.Fragment, null, React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, "\u4E00\u70B9\u305A\u3064\u3001")), React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, React.createElement("em", null, "\u7269\u8A9E\u3092\u53D7\u3051\u7D99\u3050\u3002"), React.createElement("span", {
    className: "kanji"
  }, "\u54C1")))) : React.createElement(React.Fragment, null, React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, "Stories preserved,")), React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, React.createElement("em", null, "piece by piece."), React.createElement("span", {
    className: "kanji"
  }, "\u54C1")))))), React.createElement(window.FadeUp, {
    delay: 180
  }, React.createElement("p", {
    className: "lede"
  }, isJp ? '最近アトリエに届き、整えられ、次の持ち主へ向かう一点たち。社内撮影とスタイリングで、状態だけでなく、その品が持つ空気まで丁寧に記録しています。' : 'A living gallery of pieces recently introduced, or reintroduced, to collectors and connoisseurs worldwide. Each one documented, authenticated, and hand-prepared in our Tokyo atelier through in-house photography and styled portrait work.')));
}
Object.assign(window, {
  HighlightsHero
});