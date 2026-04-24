"use strict";

function AboutAtelier() {
  return React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, React.createElement("div", {
    className: "media-break"
  }, React.createElement("img", {
    src: "/catalog/portrait-sakura.jpg",
    alt: "Editorial photography, Tokyo atelier, Eco Brand Japan",
    style: {
      objectPosition: "center 28%"
    }
  }), React.createElement("div", {
    className: "cap"
  }, React.createElement("span", {
    className: "cap-kicker"
  }, "Tokyo atelier"), React.createElement("span", {
    className: "cap-copy"
  }, "Studio photography, Spring 2026"))));
}
Object.assign(window, {
  AboutAtelier
});