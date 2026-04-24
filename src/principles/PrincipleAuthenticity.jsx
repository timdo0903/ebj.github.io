function PrincipleAuthenticity() {
  return (
    <section className="principle-deep" id="authenticity">
      <div className="section-label">
        <span className="num">§ I</span>
        <span className="title">Authenticity · Assured</span>
        <span className="spacer" />
        <span className="jp">本物</span>
      </div>

      <div className="head">
        <window.FadeUp>
          <div className="kanji">真</div>
          <div className="label">SHIN · true, real, authentic</div>
        </window.FadeUp>
        <window.FadeUp delay={120}>
          <h2>What we sell is <em>real</em>, and we can prove it.</h2>
          <p className="intro">
            Every piece passes a multi-point authentication protocol before it receives a catalogue number. If any single checkpoint returns a doubt, the piece is returned to the sender. We do not sell ambiguity, and we do not re-describe it as "unverified".
          </p>
        </window.FadeUp>
      </div>

      <div className="body">
        <window.FadeUp>
          <p>
            Our lead authenticators have between five and twenty years in leather goods between them. They examine hardware stamping, stitch count, leather grain, edge painting, interior date codes and maison-specific tells that we don't publish, because the moment we did, they would be reverse-engineered by the market.
          </p>
          <p>
            Every piece is accompanied by a detailed internal condition dossier, dated and signed by the authenticator responsible, with daylight photographs, measurements and an honest account of condition. These records are kept for internal tracking and partner assurance. A formal authentication certificate is available to collectors and partners on request, issued for an additional fee.
          </p>
          <p>
            When a piece fails authentication, we tell the consignor immediately and return it at our expense. We keep no ambiguous inventory. This is the simplest and most important rule we operate by.
          </p>
        </window.FadeUp>

        <window.FadeUp delay={120}>
          <div className="checklist">
            <div className="item">
              <div className="n">01</div>
              <div className="t">Multi-point authentication<small>Hardware, stitching, leather, stamping, date codes, and maison-specific checks.</small></div>
              <div className="tag">Required</div>
            </div>
            <div className="item">
              <div className="n">02</div>
              <div className="t">Authentication certificate<small>A formal certificate of authenticity is available on request, issued for an additional fee.</small></div>
              <div className="tag">On request</div>
            </div>
            <div className="item">
              <div className="n">03</div>
              <div className="t">Provenance tracking<small>Chain of custody from intake to release, kept on file for ten years.</small></div>
              <div className="tag">On record</div>
            </div>
            <div className="item">
              <div className="n">04</div>
              <div className="t">No-doubt rule<small>If a single checkpoint returns a doubt, the piece is returned at our expense.</small></div>
              <div className="tag">Absolute</div>
            </div>
            <div className="item">
              <div className="n">05</div>
              <div className="t">Independent review<small>Quarterly audit of random dossiers by an outside specialist.</small></div>
              <div className="tag">Quarterly</div>
            </div>
          </div>
        </window.FadeUp>
      </div>
    </section>
  );
}
Object.assign(window, { PrincipleAuthenticity });
