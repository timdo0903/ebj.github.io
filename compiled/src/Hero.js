"use strict";

function Hero() {
  const imgRef = React.useRef(null);
  const isJp = window.SITE_LANG === 'jp';
  React.useEffect(() => {
    const id = requestAnimationFrame(() => {
      if (imgRef.current) imgRef.current.classList.add('loaded');
    });
    return () => cancelAnimationFrame(id);
  }, []);
  const copy = isJp ? {
    left: '創業 2012 / 東京',
    center: '丁寧に受け継ぐ、サーキュラー・ラグジュアリー',
    right: 'N-001 / ホームページ',
    lines: ['名品を、', '次の持ち主へ。'],
    lede: '東京から、希少なメゾンバッグやアクセサリーを選び、真贋確認を行い、やさしく整え、次の持ち主へ届ける準備をします。私たちの循環は、手仕事から始まります。',
    primary: '私たちの約束へ',
    secondary: '最新ハイライトを見る',
    years: '年の実績',
    pieces: '取扱点数',
    languages: '対応言語',
    alt: '東京で撮影したエディトリアルポートレート',
    caption: 'Tokyo / Editorial N-07'
  } : {
    left: 'Est. 2012 / Tokyo',
    center: 'Circular luxury, curated with intention',
    right: 'N-001 / The Homepage',
    lines: ['Luxury,', 'preserved', 'for its next', 'guardian.'],
    lede: 'From Tokyo, we source rare maison handbags, authenticate, lightly revive and prepare each piece for the chapter ahead. Circularity, by hand.',
    primary: 'Explore our promise',
    secondary: 'View current highlights',
    years: 'Years curating',
    pieces: 'Pieces circulated',
    languages: 'Languages spoken',
    alt: 'Editorial sakura portrait, Tokyo',
    caption: 'Tokyo / Editorial N-07'
  };
  return React.createElement("header", {
    className: "hero",
    id: "top"
  }, React.createElement("div", {
    className: "hero-meta"
  }, React.createElement("div", {
    className: "left"
  }, React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "\u2022"), "\xA0\xA0", copy.left), React.createElement("div", {
    className: "center"
  }, copy.center), React.createElement("div", {
    className: "right"
  }, copy.right)), React.createElement("div", {
    className: "hero-grid"
  }, React.createElement("div", null, React.createElement("h1", {
    className: "hero-headline"
  }, copy.lines.map((line, index) => React.createElement("span", {
    key: index,
    className: "reveal-line"
  }, React.createElement("span", null, index === 1 && !isJp ? React.createElement("em", {
    className: "italic"
  }, line) : line))))), React.createElement("div", {
    className: "hero-side"
  }, React.createElement("div", {
    ref: imgRef,
    className: "hero-image-wrap"
  }, React.createElement("img", {
    src: "catalog/portrait-leopard-wallet.jpg",
    alt: copy.alt,
    style: {
      objectPosition: 'center 25%'
    }
  }), React.createElement("div", {
    className: "hero-image-caption"
  }, copy.caption)), React.createElement("p", {
    className: "hero-lede"
  }, copy.lede))), React.createElement("div", {
    className: "hero-cta-row"
  }, React.createElement("a", {
    className: "btn-primary",
    href: "#principles"
  }, React.createElement("span", null, copy.primary), React.createElement("span", {
    className: "arrow",
    "aria-hidden": true
  })), React.createElement("a", {
    className: "btn-ghost",
    href: "#highlights"
  }, copy.secondary), React.createElement("div", {
    className: "hero-stats"
  }, React.createElement("div", {
    className: "hero-stat"
  }, React.createElement("div", {
    className: "n"
  }, "12", React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "+")), React.createElement("div", {
    className: "l"
  }, copy.years)), React.createElement("div", {
    className: "hero-stat"
  }, React.createElement("div", {
    className: "n"
  }, "150k"), React.createElement("div", {
    className: "l"
  }, copy.pieces)), React.createElement("div", {
    className: "hero-stat"
  }, React.createElement("div", {
    className: "n"
  }, "6"), React.createElement("div", {
    className: "l"
  }, copy.languages)))));
}
Object.assign(window, {
  Hero
});