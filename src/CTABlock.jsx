function CTABlock({ eyebrow, title, body, primary, secondary }) {
  return (
    <section className="cta-block">
      <window.FadeUp className="inner">
        <div>
          <div className="eyebrow" style={{ marginBottom: 20 }}>
            <span className="dot"></span>{eyebrow}
          </div>
          <h3>{title}</h3>
          {body && <p>{body}</p>}
        </div>
        <div className="actions">
          {primary && (
            <a className="btn-primary" href={primary.href}>
              <span>{primary.label}</span>
              <span className="arrow" aria-hidden></span>
            </a>
          )}
          {secondary && (
            <a className="btn-ghost" href={secondary.href}>{secondary.label}</a>
          )}
        </div>
      </window.FadeUp>
    </section>
  );
}
Object.assign(window, { CTABlock });
