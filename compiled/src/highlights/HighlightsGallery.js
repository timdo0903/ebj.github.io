"use strict";

function HighlightsGallery() {
  const data = window.HIGHLIGHTS_DATA;
  const {
    studio,
    editorial
  } = data;
  const Section = ({
    num,
    title,
    jp,
    lede,
    tag,
    subtag,
    items
  }) => React.createElement("div", {
    className: "hl-section"
  }, React.createElement("div", {
    className: "section-label"
  }, React.createElement("span", {
    className: "num"
  }, "S ", num), React.createElement("span", {
    className: "title"
  }, title), React.createElement("span", {
    className: "spacer"
  }), React.createElement("span", {
    className: "jp"
  }, jp)), React.createElement("div", {
    className: "hl-section-head"
  }, React.createElement("div", {
    className: "hl-section-head-top"
  }, React.createElement("span", {
    className: "hl-eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), tag), React.createElement("span", {
    className: "hl-count"
  }, React.createElement("span", {
    className: "n"
  }, String(items.length).padStart(2, '0')), React.createElement("span", {
    className: "l"
  }, "pieces"))), React.createElement(window.FadeUp, null, React.createElement("h2", {
    className: "hl-section-title"
  }, lede)), subtag ? React.createElement("div", {
    className: "hl-section-subtag"
  }, subtag) : null), React.createElement("div", {
    className: "highlights-grid"
  }, items.map((t, i) => React.createElement(window.FadeUp, {
    className: `hl-card ${t.w}`,
    key: t.id,
    delay: Math.min(i * 40, 320)
  }, React.createElement("div", {
    className: "img"
  }, React.createElement("img", {
    src: t.img,
    alt: t.pieceText,
    loading: "lazy"
  }), React.createElement("div", {
    className: "corner"
  }, t.tag), React.createElement("div", {
    className: "num"
  }, t.num)), React.createElement("div", {
    className: "info"
  }, React.createElement("div", null, React.createElement("div", {
    className: "maison"
  }, t.maison), React.createElement("div", {
    className: "piece"
  }, t.piece)))))));
  return React.createElement(React.Fragment, null, React.createElement(Section, {
    num: "01",
    title: "In-house photography",
    jp: "Tokyo atelier",
    lede: React.createElement(React.Fragment, null, "In-house photography, ", React.createElement("em", null, "professional.")),
    tag: "In-house photography",
    subtag: "",
    items: studio
  }), React.createElement("div", {
    className: "hl-divider",
    "aria-hidden": "true"
  }), React.createElement(Section, {
    num: "02",
    title: "Styled",
    jp: "Portrait work",
    lede: React.createElement(React.Fragment, null, "Styled sittings, ", React.createElement("em", null, "pieces in context.")),
    tag: "Styled portraits",
    subtag: "Seasonal stories, shot in and around Tokyo",
    items: editorial
  }));
}
Object.assign(window, {
  HighlightsGallery
});