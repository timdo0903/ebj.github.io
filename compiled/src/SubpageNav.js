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
  const linkLabel = key => {
    if (!isJp) return key;
    return {
      About: '会社概要',
      Principles: '私たちの約束',
      Highlights: 'ハイライト',
      Careers: '採用情報',
      Contact: 'お問い合わせ'
    }[key] || key;
  };
  const links = [{
    key: 'about',
    href: 'about.html',
    label: linkLabel('About')
  }, {
    key: 'principles',
    href: 'principles.html',
    label: linkLabel('Principles')
  }, {
    key: 'highlights',
    href: 'highlights.html',
    label: linkLabel('Highlights')
  }, {
    key: 'careers',
    href: 'careers.html',
    label: linkLabel('Careers')
  }, {
    key: 'contact',
    href: 'contact.html',
    label: linkLabel('Contact')
  }];
  const closeMenu = () => setOpen(false);
  return React.createElement("nav", {
    className: "nav",
    "data-scrolled": scrolled,
    "data-open": open
  }, React.createElement("div", {
    className: "brand"
  }, React.createElement("a", {
    href: isJp ? 'index-jp.html' : 'index.html',
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
    href: "index.html",
    className: !isJp ? 'active' : undefined
  }, "EN"), React.createElement("span", null, "/"), React.createElement("a", {
    href: "index-jp.html",
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
  }, isJp ? '日本語版はホームページのみ対応しています。' : 'Japanese is available for the homepage at the moment.'), React.createElement("div", {
    className: "lang nav-mobile-lang"
  }, React.createElement("a", {
    href: "index.html",
    className: !isJp ? 'active' : undefined,
    onClick: closeMenu
  }, "EN"), React.createElement("span", null, "/"), React.createElement("a", {
    href: "index-jp.html",
    className: isJp ? 'active' : undefined,
    onClick: closeMenu
  }, "JP")))));
}
Object.assign(window, {
  SubpageNav
});