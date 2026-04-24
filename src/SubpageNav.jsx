function SubpageNav({ current = '' }) {
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
      Contact: 'お問い合わせ',
    }[key] || key;
  };

  const links = [
    { key: 'about', href: 'about.html', label: linkLabel('About') },
    { key: 'principles', href: 'principles.html', label: linkLabel('Principles') },
    { key: 'highlights', href: 'highlights.html', label: linkLabel('Highlights') },
    { key: 'careers', href: 'careers.html', label: linkLabel('Careers') },
    { key: 'contact', href: 'contact.html', label: linkLabel('Contact') },
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
          <a
            key={link.key}
            href={link.href}
            style={current === link.key ? { color: 'var(--fg)' } : undefined}
            aria-current={current === link.key ? 'page' : undefined}
          >
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
            <a
              key={link.key}
              href={link.href}
              aria-current={current === link.key ? 'page' : undefined}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="nav-mobile-foot">
          <div className="nav-mobile-meta">{isJp ? '日本語版はホームページのみ対応しています。' : 'Japanese is available for the homepage at the moment.'}</div>
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

Object.assign(window, { SubpageNav });
