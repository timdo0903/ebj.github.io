"use strict";

function SubpageNav({
  current = ''
}) {
  const scrolled = window.useScrolled(20);
  const isJp = window.SITE_LANG === 'jp';
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);
  const labels = {
    about: isJp ? '会社概要' : 'About',
    principles: isJp ? '約束' : 'Principles',
    highlights: isJp ? 'ハイライト' : 'Highlights',
    careers: isJp ? '採用情報' : 'Careers',
    contact: isJp ? 'お問い合わせ' : 'Contact'
  };
  const links = ['about', 'principles', 'highlights', 'careers', 'contact'].map(key => ({
    key,
    href: isJp ? `/ja/${key}/` : `/${key}/`,
    label: labels[key]
  }));
  const closeMenu = () => setOpen(false);
  const englishHref = current ? `/${current}/` : '/';
  const japaneseHref = current ? `/ja/${current}/` : '/ja/';
  return React.createElement("nav", {
    className: "nav",
    "data-scrolled": scrolled,
    "data-open": open
  }, React.createElement("div", {
    className: "brand"
  }, React.createElement("a", {
    href: isJp ? '/ja/' : '/',
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, React.createElement("span", {
    className: "brand-mark"
  }, "E"), React.createElement("span", {
    className: "en"
  }, "Eco Brand Japan"))), React.createElement("div", {
    className: "nav-links"
  }, links.map(link => React.createElement("a", {
    key: link.key,
    href: link.href,
    style: current === link.key ? {
      color: 'var(--fg)'
    } : undefined,
    "aria-current": current === link.key ? 'page' : undefined
  }, link.label))), React.createElement("div", {
    className: "nav-right"
  }, React.createElement("span", null, "TOKYO / EST. 2012"), React.createElement("div", {
    className: "lang"
  }, React.createElement("a", {
    href: englishHref,
    className: !isJp ? 'active' : undefined
  }, "EN"), React.createElement("span", null, "/"), React.createElement("a", {
    href: japaneseHref,
    className: isJp ? 'active' : undefined
  }, "JP")), React.createElement("button", {
    type: "button",
    className: "nav-mobile-toggle",
    "aria-expanded": open,
    "aria-label": open ? 'Close menu' : 'Open menu',
    onClick: () => setOpen(value => !value)
  }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null))), React.createElement("div", {
    className: "nav-mobile-panel",
    "data-open": open
  }, React.createElement("div", {
    className: "nav-mobile-links"
  }, links.map(link => React.createElement("a", {
    key: link.key,
    href: link.href,
    "aria-current": current === link.key ? 'page' : undefined,
    onClick: closeMenu
  }, link.label))), React.createElement("div", {
    className: "nav-mobile-foot"
  }, React.createElement("div", {
    className: "nav-mobile-meta"
  }, isJp ? '日本語ページを表示しています。' : 'Japanese is available for each main page.'), React.createElement("div", {
    className: "lang nav-mobile-lang"
  }, React.createElement("a", {
    href: englishHref,
    className: !isJp ? 'active' : undefined,
    onClick: closeMenu
  }, "EN"), React.createElement("span", null, "/"), React.createElement("a", {
    href: japaneseHref,
    className: isJp ? 'active' : undefined,
    onClick: closeMenu
  }, "JP")))));
}
Object.assign(window, {
  SubpageNav
});