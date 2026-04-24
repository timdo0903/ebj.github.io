function NavCareers() {
  const scrolled = window.useScrolled(20);
  const isJp = window.SITE_LANG === 'jp';
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  const links = isJp
    ? [
        { href: 'about.html', label: '会社概要' },
        { href: 'principles.html', label: '私たちの約束' },
        { href: 'highlights.html', label: 'ハイライト' },
        { href: 'careers.html', label: '採用情報', current: true },
        { href: 'contact.html', label: 'お問い合わせ' },
      ]
    : [
        { href: 'about.html', label: 'About' },
        { href: 'principles.html', label: 'Principles' },
        { href: 'highlights.html', label: 'Highlights' },
        { href: 'careers.html', label: 'Careers', current: true },
        { href: 'contact.html', label: 'Contact' },
      ];

  const closeMenu = () => setOpen(false);

  return (
    <nav className="nav" data-scrolled={scrolled} data-open={open}>
      <div className="brand">
        <a href={isJp ? 'index-jp.html' : 'index.html'} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span className="brand-mark">E</span>
          <span className="en">Eco Brand Japan</span>
        </a>
      </div>

      <div className="nav-links">
        {links.map(link => (
          <a key={link.href} href={link.href} style={link.current ? { color: 'var(--fg)' } : undefined}>
            {link.label}
          </a>
        ))}
      </div>

      <div className="nav-right">
        <span>TOKYO / EST. 2012</span>
        <div className="lang">
          <a href="index.html" className={!isJp ? 'active' : undefined}>EN</a>
          <span>/</span>
          <a href="index-jp.html" className={isJp ? 'active' : undefined}>JP</a>
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
            <a key={link.href} href={link.href} aria-current={link.current ? 'page' : undefined} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="nav-mobile-foot">
          <div className="nav-mobile-meta">{isJp ? '採用情報ページです。' : 'Careers and current openings.'}</div>
          <div className="lang nav-mobile-lang">
            <a href="index.html" className={!isJp ? 'active' : undefined} onClick={closeMenu}>EN</a>
            <span>/</span>
            <a href="index-jp.html" className={isJp ? 'active' : undefined} onClick={closeMenu}>JP</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

Object.assign(window, { NavCareers });
