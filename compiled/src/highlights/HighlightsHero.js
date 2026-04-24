"use strict";

function HighlightsHero() {
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
  }, "\u25CF"), "\xA0\xA0Refreshed daily"), React.createElement("div", {
    className: "jp"
  }, "\u53B3\u9078"), React.createElement("div", null, "N\xB0004 \xB7 Highlights")), React.createElement(window.FadeUp, null, React.createElement("h1", null, React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, "Stories preserved,")), React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, React.createElement("em", null, "piece by piece."), React.createElement("span", {
    className: "kanji"
  }, "\u54C1"))))), React.createElement(window.FadeUp, {
    delay: 180
  }, React.createElement("p", {
    className: "lede"
  }, "A living gallery of pieces recently introduced, or reintroduced, to collectors and connoisseurs worldwide. Each one documented, authenticated, and hand-prepared in our Tokyo atelier through in-house photography and styled portrait work.")));
}
Object.assign(window, {
  HighlightsHero
});