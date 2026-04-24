"use strict";

function Gallery() {
  const isJp = window.SITE_LANG === 'jp';
  const tiles = [{
    cls: 'a tall',
    src: 'catalog/kimono-03.jpg',
    maison: 'Editorial',
    piece: 'Tokyo, Autumn walk',
    tag: 'Editorial',
    num: 'N-017'
  }, {
    cls: 'b xtall',
    src: 'images/lady-dior.jpg',
    maison: 'Dior',
    piece: 'Lady Dior',
    tag: 'Authenticated',
    num: 'N-024'
  }, {
    cls: 'c tall',
    src: 'images/hermes-birkin.jpg',
    maison: 'Hermes',
    piece: 'Birkin 35',
    tag: 'Authenticated',
    num: 'N-031'
  }, {
    cls: 'd wide',
    src: 'catalog/iconics-01.jpg',
    maison: 'Chanel',
    piece: 'Premiere watches',
    tag: 'Archive',
    num: 'N-127'
  }, {
    cls: 'e tall',
    src: 'images/pink-chanel.jpg',
    maison: 'Chanel',
    piece: 'Double Flap',
    tag: 'Authenticated',
    num: 'N-056'
  }];
  return React.createElement("section", {
    className: "gallery",
    id: "highlights"
  }, React.createElement("div", {
    className: "gallery-header"
  }, React.createElement("div", {
    className: "section-label"
  }, React.createElement("span", {
    className: "num"
  }, "S 03"), React.createElement("span", {
    className: "title"
  }, isJp ? 'ハイライト' : 'Highlights'), React.createElement("span", {
    className: "spacer"
  })), React.createElement(window.FadeUp, null, React.createElement("h2", {
    className: "gallery-title"
  }, isJp ? React.createElement(React.Fragment, null, "\u4E00\u70B9\u305A\u3064\u3001", React.createElement("br", null), "\u7269\u8A9E\u3092", React.createElement("em", null, "\u53D7\u3051\u7D99\u3050\u3002")) : React.createElement(React.Fragment, null, "Stories preserved", React.createElement("br", null), "in every ", React.createElement("em", null, "detail.")))), React.createElement("div", {
    className: "gallery-sub"
  }, React.createElement("p", null, isJp ? '東京のアトリエで記録し、真贋を確認し、丁寧に整えた一点を、最近のハイライトから抜粋してご紹介しています。' : 'A glimpse of pieces we recently reintroduced to collectors and connoisseurs worldwide, each one documented, authenticated, and hand-prepared in our Tokyo atelier.'), React.createElement("div", {
    className: "gallery-count"
  }, isJp ? '毎日更新 / 412点中 5点を掲載' : 'Refreshed daily / showing 5 of 412'))), React.createElement("div", {
    className: "gallery-grid"
  }, tiles.slice(0, 3).map((t, i) => React.createElement(window.FadeUp, {
    className: `tile ${t.cls}`,
    key: i,
    delay: i * 120
  }, React.createElement("img", {
    src: t.src,
    alt: t.piece
  }), React.createElement("div", {
    className: "tile-corner"
  }, t.tag), React.createElement("div", {
    className: "tile-meta"
  }, React.createElement("div", {
    className: "l"
  }, t.piece, React.createElement("small", null, t.maison)), React.createElement("div", {
    className: "r"
  }, t.num)))), React.createElement(window.FadeUp, {
    className: "gallery-caption-col",
    delay: 400
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--serif)',
      fontWeight: 300,
      fontSize: '84px',
      lineHeight: 1,
      letterSpacing: '-0.03em',
      color: 'var(--accent)',
      fontStyle: 'italic'
    }
  }, isJp ? React.createElement(React.Fragment, null, "\u4E00\u70B9\u3054\u3068\u306B\u3001", React.createElement("br", null), "\u6B21\u306E\u7269\u8A9E\u3078\u3002") : React.createElement(React.Fragment, null, "Each piece,", React.createElement("br", null), "a life", React.createElement("br", null), "continued.")), React.createElement("p", null, isJp ? '東京のアトリエで、記録し、確認し、手で整えています。' : 'Documented, authenticated, and prepared by hand in our Tokyo atelier.')), tiles.slice(3).map((t, i) => React.createElement(window.FadeUp, {
    className: `tile ${t.cls}`,
    key: i + 10,
    delay: i * 120
  }, React.createElement("img", {
    src: t.src,
    alt: t.piece
  }), React.createElement("div", {
    className: "tile-corner"
  }, t.tag), React.createElement("div", {
    className: "tile-meta"
  }, React.createElement("div", {
    className: "l"
  }, t.piece, React.createElement("small", null, t.maison)), React.createElement("div", {
    className: "r"
  }, t.num))))), React.createElement("div", {
    className: "gallery-footer"
  }, React.createElement("div", {
    className: "note"
  }, isJp ? 'カタログは毎日更新しています。' : 'Our catalogue refreshes daily. Partners receive the full index by request.')));
}
Object.assign(window, {
  Gallery
});