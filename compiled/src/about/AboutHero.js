"use strict";

function AboutHero() {
  return React.createElement("header", {
    className: "page-hero"
  }, React.createElement("div", {
    className: "meta"
  }, React.createElement("div", null, React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "\u25CF"), "\xA0\xA0Est. 2012 \xB7 Tokyo"), React.createElement("div", {
    className: "jp"
  }, "\u7269\u8A9E \xB7 About the atelier"), React.createElement("div", null, "N\xB0002 \xB7 About")), React.createElement(window.FadeUp, null, React.createElement("h1", null, React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, "A Tokyo atelier")), React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, "for luxury's")), React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, React.createElement("em", null, "second life."), React.createElement("span", {
    className: "kanji"
  }, "\u518D"))))), React.createElement(window.FadeUp, {
    delay: 200
  }, React.createElement("p", {
    className: "lede"
  }, "Eco Brand Japan began in a small room in Tokyo with one Herm\xE8s Kelly, a loupe, and a conviction that luxury could be kept, cared for, and passed on, instead of quietly discarded. Twelve years later, we remain a small, multilingual team doing that same work, at a larger scale and with the same hands.")));
}
Object.assign(window, {
  AboutHero
});