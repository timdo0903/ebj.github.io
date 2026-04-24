function CareersHero() {
  return (
    <header className="careers-hero">
      <div className="meta">
        <div className="pill">Now hiring · 2 roles open</div>
        <div>Careers · N°001</div>
      </div>

      <div className="grid">
        <div>
          <h1>
            <span className="reveal-line"><span>Grow</span></span>
            <span className="reveal-line"><span><em>with us,</em></span></span>
            <span className="reveal-line"><span>in Tokyo.</span></span>
          </h1>
        </div>
        <div>
          <p className="lede">
            Join a multilingual, entrepreneurial team championing circular luxury, where every role, from sourcing to storytelling, elevates preloved treasures for a new generation of collectors.
          </p>
          <div style={{ marginTop: 48, display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
            <a className="btn-primary" href="#open-roles">
              <span>See open roles</span>
              <span className="arrow"></span>
            </a>
            <a className="btn-ghost" href="#why-us">Why work with us</a>
          </div>
        </div>
      </div>
    </header>
  );
}
Object.assign(window, { CareersHero });
