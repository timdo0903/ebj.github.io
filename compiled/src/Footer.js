"use strict";

function Footer() {
  const isJp = window.SITE_LANG === 'jp';
  return React.createElement("footer", {
    className: "foot",
    id: "contact"
  }, React.createElement("div", {
    className: "foot-top"
  }, React.createElement("div", {
    className: "foot-brand"
  }, React.createElement("div", {
    className: "mark",
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      lineHeight: 1.1
    }
  }, React.createElement("span", null, "Eco Brand Japan"), React.createElement("span", {
    style: {
      fontFamily: 'var(--jp)',
      fontSize: '11px',
      color: 'var(--ink-quiet)',
      letterSpacing: '.14em',
      marginTop: '6px',
      fontWeight: 400
    }
  }, "\u30A8\u30B3\u30D6\u30E9\u30F3\u30C9\u30B8\u30E3\u30D1\u30F3")), React.createElement("p", null, isJp ? '東京から、丁寧に選び、次へつなぐサーキュラー・ラグジュアリーを。' : 'Circular luxury, curated with intention. From Tokyo, to the world\'s most considered collectors.')), React.createElement("div", null, React.createElement("h5", null, isJp ? 'ページ' : 'Explore'), React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
    href: isJp ? '/ja/about/' : '/about/'
  }, isJp ? '会社概要' : 'About')), React.createElement("li", null, React.createElement("a", {
    href: isJp ? '/ja/principles/' : '/principles/'
  }, isJp ? '約束' : 'Principles')), React.createElement("li", null, React.createElement("a", {
    href: isJp ? '/ja/highlights/' : '/highlights/'
  }, isJp ? 'ハイライト' : 'Highlights')), React.createElement("li", null, React.createElement("a", {
    href: isJp ? '/ja/careers/' : '/careers/'
  }, isJp ? '採用情報' : 'Careers')), React.createElement("li", null, React.createElement("a", {
    href: isJp ? '/ja/contact/' : '/contact/'
  }, isJp ? 'お問い合わせ' : 'Contact')))), React.createElement("div", null, React.createElement("h5", null, isJp ? '外部リンク' : 'Channels'), React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
    href: "https://www.instagram.com/brandcoparis/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Instagram")), React.createElement("li", null, React.createElement("a", {
    href: "https://www.facebook.com/brandcoparis",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Facebook")), React.createElement("li", null, React.createElement("a", {
    href: "https://www.linkedin.com/company/eco-brand-japan/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "LinkedIn")), React.createElement("li", null, React.createElement("a", {
    href: "https://www.rakuten.co.jp/brandcoparis/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Rakuten")), React.createElement("li", null, React.createElement("a", {
    href: "https://jp.mercari.com/shops/profile/Fv7W5YWA78UVv8mjcHr4RM",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Mercari")), React.createElement("li", null, React.createElement("a", {
    href: "https://www.brandcoparis.com/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Brandco Paris"))))), React.createElement("div", {
    className: "foot-bot"
  }, React.createElement("div", null, "Copyright 2026 Eco Brand Japan - Tokyo"), React.createElement("div", null, isJp ? '丁寧に受け継ぐラグジュアリー' : 'Circular luxury, curated with intention')));
}
Object.assign(window, {
  Footer
});