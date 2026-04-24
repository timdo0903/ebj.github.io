"use strict";

function PrinciplesHero() {
  const isJp = window.SITE_LANG === 'jp';
  return React.createElement("header", {
    className: "page-hero"
  }, React.createElement("div", {
    className: "meta"
  }, React.createElement("div", null, React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "\u2022"), "\xA0\xA0", isJp ? '三つの約束' : 'Three commitments'), React.createElement("div", {
    className: "jp"
  }, isJp ? '私たちの基準' : '三つの約束'), React.createElement("div", null, "N\xB0003 \xB7 ", isJp ? '約束' : 'Principles')), React.createElement(window.FadeUp, null, React.createElement("h1", null, isJp ? React.createElement(React.Fragment, null, React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, "\u4F8B\u5916\u306A\u304F\u3001")), React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, "\u5B88\u308A\u7D9A\u3051\u308B")), React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, React.createElement("em", null, "\u4E09\u3064\u306E\u7D04\u675F\u3002"), React.createElement("span", {
    className: "kanji"
  }, "\u8AA0")))) : React.createElement(React.Fragment, null, React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, "Three principles,")), React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, "held to ", React.createElement("em", null, "without"))), React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, React.createElement("em", null, "exception."), React.createElement("span", {
    className: "kanji"
  }, "\u8AA0")))))), React.createElement(window.FadeUp, {
    delay: 200
  }, React.createElement("p", {
    className: "lede"
  }, isJp ? '私たちの仕事は、三つの約束に立ち返ります。本物であること。ものを長く生かすこと。お客様やパートナーと誠実な関係を続けること。これは飾りの言葉ではなく、日々の判断基準です。' : 'Everything we do is traceable to one of three commitments: that what we sell is real, that how we work is kind to the planet, and that the people we work with are treated as partners for life. These are not marketing language. They are operating rules.')), React.createElement("div", {
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
  }, "I \xB7 ", isJp ? '真贋' : 'Authenticity'), React.createElement("a", {
    className: "filter-chip",
    href: "#sustainability"
  }, "II \xB7 ", isJp ? '循環' : 'Sustainability'), React.createElement("a", {
    className: "filter-chip",
    href: "#relationships"
  }, "III \xB7 ", isJp ? '関係性' : 'Relationships')));
}
Object.assign(window, {
  PrinciplesHero
});