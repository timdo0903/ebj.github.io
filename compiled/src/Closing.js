"use strict";

function Closing() {
  const isJp = window.SITE_LANG === 'jp';
  return React.createElement("section", {
    className: "closing",
    id: "careers"
  }, React.createElement("div", {
    className: "section-label"
  }, React.createElement("span", {
    className: "num"
  }, "S 04"), React.createElement("span", {
    className: "title"
  }, isJp ? '次の章へ' : 'The Next Chapter'), React.createElement("span", {
    className: "spacer"
  })), React.createElement(window.FadeUp, null, React.createElement("h2", {
    className: `closing-big${isJp ? ' closing-big-jp' : ''}`
  }, isJp ? React.createElement(React.Fragment, null, "\u3068\u3082\u306B\u3001", React.createElement("br", null), "\u6B21\u306E\u30E9\u30B0\u30B8\u30E5\u30A2\u30EA\u30FC\u3092", React.createElement("br", null), "\u3064\u304F\u3063\u3066\u3044\u304F\u3002") : React.createElement(React.Fragment, null, "Let's shape the", React.createElement("br", null), React.createElement("em", null, "future"), " of ", React.createElement("span", {
    className: "outline"
  }, "sustainable"), React.createElement("br", null), "luxury, together."))), React.createElement("div", {
    className: "closing-sub"
  }, React.createElement(window.FadeUp, {
    delay: 100
  }, React.createElement("p", null, isJp ? 'お客様のコレクションのご相談でも、クライアント向けのキュレーションでも。多言語対応のチームが、査定からストーリーテリングまで、ひとつひとつ丁寧に伴走します。' : 'Bring your collection, or curate ours for your clients. Our multilingual team orchestrates every detail, from valuation to storytelling, with the care the pieces deserve.')), React.createElement(window.FadeUp, {
    delay: 180,
    className: "closing-actions"
  }, React.createElement("a", {
    className: "btn-primary",
    href: "/contact/"
  }, React.createElement("span", null, isJp ? 'ご相談はこちら' : 'Begin a conversation'), React.createElement("span", {
    className: "arrow"
  })), React.createElement("a", {
    className: "btn-ghost",
    href: "/careers/"
  }, isJp ? '採用情報を見る' : 'View open roles'))));
}
Object.assign(window, {
  Closing
});