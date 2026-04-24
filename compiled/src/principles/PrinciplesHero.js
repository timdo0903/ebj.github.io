"use strict";

function PrinciplesHero() {
  return React.createElement("header", {
    className: "page-hero"
  }, React.createElement("div", {
    className: "meta"
  }, React.createElement("div", null, React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "\u25CF"), "\xA0\xA0Three commitments"), React.createElement("div", {
    className: "jp"
  }, "\u4E09\u3064\u306E\u7D04\u675F"), React.createElement("div", null, "N\xB0003 \xB7 Principles")), React.createElement(window.FadeUp, null, React.createElement("h1", null, React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, "Three principles,")), React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, "held to ", React.createElement("em", null, "without"))), React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, React.createElement("em", null, "exception."), React.createElement("span", {
    className: "kanji"
  }, "\u8A93"))))), React.createElement(window.FadeUp, {
    delay: 200
  }, React.createElement("p", {
    className: "lede"
  }, "Everything we do is traceable to one of three commitments: that what we sell is real, that how we work is kind to the planet, and that the people we work with are treated as partners for life. These are not marketing language. They are operating rules.")), React.createElement("div", {
    style: {
      marginTop: 56,
      paddingTop: 28,
      borderTop: '1px solid var(--rule)',
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, React.createElement("a", {
    className: "filter-chip active",
    href: "#authenticity"
  }, "I \xB7 Authenticity"), React.createElement("a", {
    className: "filter-chip",
    href: "#sustainability"
  }, "II \xB7 Sustainability"), React.createElement("a", {
    className: "filter-chip",
    href: "#relationships"
  }, "III \xB7 Relationships")));
}
Object.assign(window, {
  PrinciplesHero
});