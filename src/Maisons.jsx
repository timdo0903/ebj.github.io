function Maisons() {
  const isJp = window.SITE_LANG === 'jp';
  const items = [
    { name: 'Hermès', num: '01', italic: false },
    { name: 'Chanel', num: '02', italic: true },
    { name: 'Louis Vuitton', num: '03', italic: false },
    { name: 'Dior', num: '04', italic: true },
    { name: 'Goyard', num: '05', italic: false },
    { name: 'Saint Laurent', num: '06', italic: true },
    { name: 'Gucci', num: '07', italic: false },
    { name: 'Bottega Veneta', num: '08', italic: true },
    { name: 'Celine', num: '09', italic: false },
    { name: 'Loewe', num: '10', italic: true },
  ];

  const group = key => (
    <div className="marquee-group" key={key}>
      {items.map(m => (
        <React.Fragment key={m.name + key}>
          <span className={`maison-name ${m.italic ? 'italic' : ''}`}>
            <span className="num">{m.num}</span>
            {m.name}
          </span>
          <span className="maison-dot" />
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <section className="maisons">
      <div className="maisons-label">
        <div className="eyebrow"><span className="dot"></span>{isJp ? '取り扱いメゾン' : 'The maisons we curate'}</div>
        <div className="eyebrow" style={{ color: 'var(--ink-faint)' }}>A / Z</div>
      </div>
      <div className="marquee">
        {group('a')}
        {group('b')}
      </div>
    </section>
  );
}

Object.assign(window, { Maisons });
