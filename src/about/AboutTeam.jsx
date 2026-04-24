function AboutTeam() {
  return (
    <section className="team-atelier" id="team">
      <div className="section-label">
        <span className="num">§ 04</span>
        <span className="title">The Atelier</span>
        <span className="spacer" />
        <span className="jp">アトリエ</span>
      </div>

      <div className="atelier-hero">
        <window.FadeUp>
          <div className="atelier-eyebrow">
            <span className="dot"></span>
            <span>Fifty hands, one standard</span>
          </div>
        </window.FadeUp>

        <window.FadeUp delay={60}>
          <h2 className="atelier-headline">
            A small team<br/>
            of <em>careful hands</em>.
          </h2>
        </window.FadeUp>

        <div className="atelier-number-row">
          <window.FadeUp delay={120} className="atelier-number">
            <div className="n">50</div>
            <div className="n-caption">
              <span className="plus">+</span>
              <div>
                <div className="k">Specialists on staff</div>
                <div className="v">Authenticators, restorers, photographers, concierges.</div>
              </div>
            </div>
          </window.FadeUp>

          <window.FadeUp delay={200} className="atelier-quote">
            <div className="kanji">慎</div>
            <p>
              "Every piece passes through at least three pairs of hands before it reaches its next guardian. We believe that is the minimum that careful work requires."
            </p>
            <div className="cite">The team, on careful practice</div>
          </window.FadeUp>
        </div>
      </div>

      <div className="atelier-map">
        <div className="atelier-map-head">
          <span className="k">§ IV.a</span>
          <span className="t">Our offices</span>
          <span className="spacer" />
          <span className="jp">拠点</span>
        </div>

        <div className="atelier-map-rows">
          <window.FadeUp delay={80} className="atelier-row">
            <div className="atelier-row-label">
              <span className="badge badge-quiet">Office</span>
              <span className="jp">オフィス</span>
            </div>
            <div className="atelier-row-place">
              <div className="city">Europe</div>
              <div className="role">Brand partnerships and market development</div>
            </div>
            <div className="atelier-row-note">
              An independent office focused on partnerships, sourcing relationships, and regional business development.
            </div>
            <div className="atelier-row-mark">
              <span className="dot quiet"></span>
            </div>
          </window.FadeUp>

          <window.FadeUp delay={140} className="atelier-row">
            <div className="atelier-row-label">
              <span className="badge badge-quiet">Office</span>
              <span className="jp">オフィス</span>
            </div>
            <div className="atelier-row-place">
              <div className="city">Tokyo</div>
              <div className="role">Authentication, restoration, and studio operations</div>
            </div>
            <div className="atelier-row-note">
              The atelier where pieces are received, restored, photographed, and prepared with the team's daily hands-on standard.
            </div>
            <div className="atelier-row-mark">
              <span className="dot"></span>
            </div>
          </window.FadeUp>

          <window.FadeUp delay={200} className="atelier-row">
            <div className="atelier-row-label">
              <span className="badge badge-quiet">Office</span>
              <span className="jp">オフィス</span>
            </div>
            <div className="atelier-row-place">
              <div className="city">United States</div>
              <div className="role">Client service and collector relations</div>
            </div>
            <div className="atelier-row-note">
              A standalone client-facing office supporting collectors, wholesale partners, and time-zone coverage across the Americas.
            </div>
            <div className="atelier-row-mark">
              <span className="dot quiet"></span>
            </div>
          </window.FadeUp>
        </div>

        <div className="atelier-map-foot">
          <span>Three standalone offices, aligned by the same standard of care.</span>
          <span className="mono">EUROPE &nbsp;/&nbsp; TOKYO &nbsp;/&nbsp; UNITED STATES</span>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { AboutTeam });
