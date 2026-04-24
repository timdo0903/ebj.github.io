function SubpageNav({ current = '' }) {
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
    contact: isJp ? 'お問い合わせ' : 'Contact',
  };

  const links = ['about', 'principles', 'highlights', 'careers', 'contact'].map(key => ({
    key,
    href: isJp ? `/ja/${key}/` : `/${key}/`,
    label: labels[key],
  }));

  const closeMenu = () => setOpen(false);
  const englishHref = current ? `/${current}/` : '/';
  const japaneseHref = current ? `/ja/${current}/` : '/ja/';

  return (
    <nav className="nav" data-scrolled={scrolled} data-open={open}>
      <div className="brand">
        <a href={isJp ? '/ja/' : '/'} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
          <a href={englishHref} className={!isJp ? 'active' : undefined}>EN</a>
          <span>/</span>
          <a href={japaneseHref} className={isJp ? 'active' : undefined}>JP</a>
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
          <div className="nav-mobile-meta">{isJp ? '日本語ページを表示しています。' : 'Japanese is available for each main page.'}</div>
          <div className="lang nav-mobile-lang">
            <a href={englishHref} className={!isJp ? 'active' : undefined} onClick={closeMenu}>EN</a>
            <span>/</span>
            <a href={japaneseHref} className={isJp ? 'active' : undefined} onClick={closeMenu}>JP</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

Object.assign(window, { SubpageNav });
