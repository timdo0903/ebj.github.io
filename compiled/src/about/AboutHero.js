"use strict";

function AboutHero() {
  const isJp = window.SITE_LANG === 'jp';
  return React.createElement("header", {
    className: "page-hero"
  }, React.createElement("div", {
    className: "meta"
  }, React.createElement("div", null, React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "\u2022"), "\xA0\xA0", isJp ? '2012年創業 / 東京' : 'Est. 2012 · Tokyo'), React.createElement("div", {
    className: "jp"
  }, isJp ? 'アトリエについて' : '物語 · About the atelier'), React.createElement("div", null, "N\xB0002 \xB7 ", isJp ? '会社概要' : 'About')), React.createElement(window.FadeUp, null, React.createElement("h1", null, isJp ? React.createElement(React.Fragment, null, React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, "\u6771\u4EAC\u304B\u3089\u3001")), React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, "\u30E9\u30B0\u30B8\u30E5\u30A2\u30EA\u30FC\u306E")), React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, React.createElement("em", null, "\u6B21\u306E\u7269\u8A9E\u3078\u3002"), React.createElement("span", {
    className: "kanji"
  }, "\u5320")))) : React.createElement(React.Fragment, null, React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, "A Tokyo atelier")), React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, "for luxury's")), React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, React.createElement("em", null, "second life."), React.createElement("span", {
    className: "kanji"
  }, "\u518D")))))), React.createElement(window.FadeUp, {
    delay: 200
  }, React.createElement("p", {
    className: "lede"
  }, isJp ? 'Eco Brand Japanは、東京の小さな一室から始まりました。一点のHermès Kelly、ルーペ、そして「良いものは手入れをすれば、もう一度誰かの大切なものになれる」という信念から。今も私たちは小さな多言語チームとして、同じ手つきでその仕事を続けています。' : 'Eco Brand Japan began in a small room in Tokyo with one Hermès Kelly, a loupe, and a conviction that luxury could be kept, cared for, and passed on, instead of quietly discarded. Twelve years later, we remain a small, multilingual team doing that same work, at a larger scale and with the same hands.')));
}
Object.assign(window, {
  AboutHero
});
