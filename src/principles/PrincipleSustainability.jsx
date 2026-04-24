function PrincipleSustainability() {
  return (
    <section className="principle-deep" id="sustainability">
      <div className="section-label">
        <span className="num">§ II</span>
        <span className="title">Sustainable Stewardship</span>
        <span className="spacer" />
        <span className="jp">循環</span>
      </div>

      <div className="head">
        <window.FadeUp>
          <div className="kanji">環</div>
          <div className="label">KAN · cycle, to circle back, circularity</div>
        </window.FadeUp>
        <window.FadeUp delay={120}>
          <h2>Luxury, kept in <em>circulation.</em></h2>
          <p className="intro">
            A Kelly made in 1978 is the most sustainable handbag ever made, provided someone continues to carry it. Our work is to make that continuation possible. Not through aggressive refinishing, but through patient, reversible care and honest description.
          </p>
        </window.FadeUp>
      </div>

      <div className="body">
        <window.FadeUp>
          <p>
            The carbon cost of a new luxury handbag is, roughly, an order of magnitude greater than the cost of restoring an existing one. We don't publish our own figures because the methodologies are still contested, but the direction of the finding is not in doubt. Keeping a piece in use is the single best thing a collector can do.
          </p>
          <p>
            Our revive work is deliberately gentle. We clean, we condition, we stitch where needed, and we stop. We do not re-dye, we do not replace hardware with non-original parts, and we do not pretend a twenty-year-old piece is a new one. Patina is honest. We photograph it, describe it, and let the next guardian decide.
          </p>
          <p>
            Packaging is hand-wrapped in undyed cotton and recycled board. Shipping is consolidated where possible. We measure what we can, and we publish an annual impact note, not because it is perfect, but because transparency is the only way the numbers improve.
          </p>
        </window.FadeUp>

        <window.FadeUp delay={120}>
          <div className="checklist">
            <div className="item">
              <div className="n">01</div>
              <div className="t">Reversible revive<small>Gentle cleaning, conditioning, minor stitch. Nothing that can't be undone.</small></div>
              <div className="tag">Hand</div>
            </div>
            <div className="item">
              <div className="n">02</div>
              <div className="t">No aggressive refinishing<small>No re-dyeing, no hardware replacement with non-original parts.</small></div>
              <div className="tag">Never</div>
            </div>
            <div className="item">
              <div className="n">03</div>
              <div className="t">Low-impact packaging<small>Undyed cotton dust bags, recycled board, no single-use plastics.</small></div>
              <div className="tag">Default</div>
            </div>
            <div className="item">
              <div className="n">04</div>
              <div className="t">Consolidated shipping<small>We group releases where partners allow, and offset residual emissions.</small></div>
              <div className="tag">Where possible</div>
            </div>
            <div className="item">
              <div className="n">05</div>
              <div className="t">Annual impact note<small>Published each spring. Imperfect, but transparent.</small></div>
              <div className="tag">Annual</div>
            </div>
          </div>
        </window.FadeUp>
      </div>
    </section>
  );
}
Object.assign(window, { PrincipleSustainability });
