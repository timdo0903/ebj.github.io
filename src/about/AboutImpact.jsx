function AboutImpact() {
  const stats = [
    { k: 'Years curating', v: <>12<span className="plus">+</span></>, note: 'Since 2012, from Tokyo to the world' },
    { k: 'Pieces circulated', v: <>150<em>k</em></>, note: 'Handbags, SLG and accessories given a second chapter' },
    { k: 'Maisons curated', v: <>28</>, note: 'From Hermès and Chanel to rarer houses' },
    { k: 'Languages spoken', v: <>6</>, note: 'English · 日本語 · 中文 · Español · Français · Tagalog' },
  ];
  return (
    <section style={{ padding: '20px 0 60px' }}>
      <div className="impact-row">
        {stats.map((s, i) => (
          <div className="stat" key={i}>
            <div className="k">§ {String(i + 1).padStart(2, '0')} · {s.k}</div>
            <div className="v">{s.v}</div>
            <div className="note">{s.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
Object.assign(window, { AboutImpact });
