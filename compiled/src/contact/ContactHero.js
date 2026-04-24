"use strict";

function ContactHero() {
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
  }, "\u25CF"), "\xA0\xA0Usually replies within 24h"), React.createElement("div", {
    className: "jp"
  }, "\u3054\u9023\u7D61"), React.createElement("div", null, "N\xB0005 \xB7 Contact")), React.createElement(window.FadeUp, null, React.createElement("h1", null, React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, "Say hello,")), React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, "in any of ", React.createElement("em", null, "six"))), React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, React.createElement("em", null, "languages."), React.createElement("span", {
    className: "kanji"
  }, "\u7E01"))))), React.createElement(window.FadeUp, {
    delay: 180
  }, React.createElement("p", {
    className: "lede"
  }, "Our concierge team reads messages every weekday in Tokyo, with support from Paris. Whether you're a collector, a partner maison, a distributor, or press, the same people will write you back.")));
}
Object.assign(window, {
  ContactHero
});