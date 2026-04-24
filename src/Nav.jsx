function Nav() {
  const scrolled = window.useScrolled(20);
  const isJp = window.SITE_LANG === 'jp';
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  const homeHref = isJp ? '/index-jp.html' : '/';
  const links = isJp
    ? [
        { href: '/about/', label: '会社概要' },
        { href: '/principles/', label: '私たちの約束' },
        { href: '/highlights/', label: 'ハイライト' },
        { href: '/careers/', label: '採用情報' },
        { href: '/contact/', label: 'お問い合わせ' },
      ]
    : [
        { href: '/about/', label: 'About' },
        { href: '/principles/', label: 'Principles' },
        { href: '/highlights/', label: 'Highlights' },
        { href: '/careers/', label: 'Careers' },
        { href: '/contact/', label: 'Contact' },
      ];

  const closeMenu = () => setOpen(false);

  return (
    <nav className="nav" data-scrolled={scrolled} data-open={open}>
      <div className="brand">
        <a href={homeHref} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span className="brand-mark">E</span>
          <span className="en">Eco Brand Japan</span>
        </a>
      </div>

      <div className="nav-links">
        {links.map(link => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </div>

      <div className="nav-right">
        <span>{isJp ? 'TOKYO / EST. 2012' : 'TOKYO / EST. 2012'}</span>
        <div className="lang">
          <a href="/" className={!isJp ? 'active' : undefined}>EN</a>
          <span>/</span>
          <a href="/index-jp.html" className={isJp ? 'active' : undefined}>JP</a>
        </div>
        <button
          type="button"
          className="nav-mobile-toggle"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(value => !value)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className="nav-mobile-panel" data-open={open}>
        <div className="nav-mobile-links">
          {links.map(link => (
            <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
          ))}
        </div>
        <div className="nav-mobile-foot">
          <div className="nav-mobile-meta">{isJp ? '東京から世界へ、丁寧に循環するラグジュアリーを。' : 'Circular luxury, curated with intention from Tokyo.'}</div>
          <div className="lang nav-mobile-lang">
            <a href="/" className={!isJp ? 'active' : undefined} onClick={closeMenu}>EN</a>
            <span>/</span>
            <a href="/index-jp.html" className={isJp ? 'active' : undefined} onClick={closeMenu}>JP</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

Object.assign(window, { Nav });
