"use strict";

function AboutAtelier() {
  const isJp = window.SITE_LANG === 'jp';
  return React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, React.createElement("div", {
    className: "media-break"
  }, React.createElement("img", {
    src: "/catalog/portrait-sakura.jpg",
    alt: isJp ? '東京アトリエのエディトリアル撮影' : 'Editorial photography, Tokyo atelier, Eco Brand Japan',
    style: {
      objectPosition: "center 28%"
    }
  }), React.createElement("div", {
    className: "cap"
  }, React.createElement("span", {
    className: "cap-kicker"
  }, "Tokyo atelier"), React.createElement("span", {
    className: "cap-copy"
  }, isJp ? 'Studio photography, Spring 2026' : 'Studio photography, Spring 2026'))));
}
Object.assign(window, {
  AboutAtelier
});