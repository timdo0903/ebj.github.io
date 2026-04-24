"use strict";

function AboutImpact() {
  const stats = [{
    k: 'Years curating',
    v: React.createElement(React.Fragment, null, "12", React.createElement("span", {
      className: "plus"
    }, "+")),
    note: 'Since 2012, from Tokyo to the world'
  }, {
    k: 'Pieces circulated',
    v: React.createElement(React.Fragment, null, "150", React.createElement("em", null, "k")),
    note: 'Handbags, SLG and accessories given a second chapter'
  }, {
    k: 'Maisons curated',
    v: React.createElement(React.Fragment, null, "28"),
    note: 'From Hermès and Chanel to rarer houses'
  }, {
    k: 'Languages spoken',
    v: React.createElement(React.Fragment, null, "6"),
    note: 'English · 日本語 · 中文 · Español · Français · Tagalog'
  }];
  return React.createElement("section", {
    style: {
      padding: '20px 0 60px'
    }
  }, React.createElement("div", {
    className: "impact-row"
  }, stats.map((s, i) => React.createElement("div", {
    className: "stat",
    key: i
  }, React.createElement("div", {
    className: "k"
  }, "\xA7 ", String(i + 1).padStart(2, '0'), " \xB7 ", s.k), React.createElement("div", {
    className: "v"
  }, s.v), React.createElement("div", {
    className: "note"
  }, s.note)))));
}
Object.assign(window, {
  AboutImpact
});