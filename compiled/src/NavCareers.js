"use strict";

function NavCareers() {
  const scrolled = window.useScrolled(20);
  const isJp = window.SITE_LANG === 'jp';
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);
  const links = isJp ? [{
    href: '/about/',
    label: '会社概要'
  }, {
    href: '/principles/',
    label: '私たちの約束'
  }, {
    href: '/highlights/',
    label: 'ハイライト'
  }, {
    href: '/careers/',
    label: '採用情報',
    current: true
  }, {
    href: '/contact/',
    label: 'お問い合わせ'
  }] : [{
    href: '/about/',
    label: 'About'
  }, {
    href: '/principles/',
    label: 'Principles'
  }, {
    href: '/highlights/',
    label: 'Highlights'
  }, {
    href: '/careers/',
    label: 'Careers',
    current: true
  }, {
    href: '/contact/',
    label: 'Contact'
  }];
  const closeMenu = () => setOpen(false);
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
    key: link.href,
    href: link.href,
    style: link.current ? {
      color: 'var(--fg)'
    } : undefined
  }, link.label))), React.createElement("div", {
    className: "nav-right"
  }, React.createElement("span", null, "TOKYO / EST. 2012"), React.createElement("div", {
    className: "lang"
  }, React.createElement("a", {
    href: "/",
    className: !isJp ? 'active' : undefined
  }, "EN"), React.createElement("span", null, "/"), React.createElement("a", {
    href: "/ja/",
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
    key: link.href,
    href: link.href,
    "aria-current": link.current ? 'page' : undefined,
    onClick: closeMenu
  }, link.label))), React.createElement("div", {
    className: "nav-mobile-foot"
  }, React.createElement("div", {
    className: "nav-mobile-meta"
  }, isJp ? '採用情報ページです。' : 'Careers and current openings.'), React.createElement("div", {
    className: "lang nav-mobile-lang"
  }, React.createElement("a", {
    href: "/",
    className: !isJp ? 'active' : undefined,
    onClick: closeMenu
  }, "EN"), React.createElement("span", null, "/"), React.createElement("a", {
    href: "/ja/",
    className: isJp ? 'active' : undefined,
    onClick: closeMenu
  }, "JP")))));
}
Object.assign(window, {
  NavCareers
});