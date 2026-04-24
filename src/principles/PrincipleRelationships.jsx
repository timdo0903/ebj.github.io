function PrincipleRelationships() {
  return (
    <section className="principle-deep" id="relationships">
      <div className="section-label">
        <span className="num">S III</span>
        <span className="title">Respectful Relationships</span>
        <span className="spacer" />
        <span className="jp">縁</span>
      </div>

      <div className="head">
        <window.FadeUp>
          <div className="kanji">縁</div>
          <div className="label">EN - bond, connection, relationship that lasts</div>
        </window.FadeUp>
        <window.FadeUp delay={120}>
          <h2>A partner, <em>for the life</em> of the piece.</h2>
          <p className="intro">
            We measure ourselves by whether a consignor comes back a second time, and a fifth. Everything we do around a piece is secondary to that. Clear terms, honest communication, multilingual concierge. These are not perks. They are the relationship.
          </p>
        </window.FadeUp>
      </div>

      <div className="body">
        <window.FadeUp>
          <p>
            We agree terms up front and honour them to the day. We communicate in the language a partner prefers, operating in six in house with translation arranged for any that we do not. We remember preferences between conversations because we keep careful notes, and our concierges do not rotate every six months.
          </p>
          <p>
            We do not chase growth for its own sake. A careful studio scales by the number of careful people in it, and careful people are rare. We would rather decline a piece than release it under time pressure.
          </p>
        </window.FadeUp>

        <window.FadeUp delay={120}>
          <div className="checklist">
            <div className="item">
              <div className="n">01</div>
              <div className="t">Clear agreements<small>Terms are set up front, documented carefully, and honoured to the day.</small></div>
              <div className="tag">Contractual</div>
            </div>
            <div className="item">
              <div className="n">02</div>
              <div className="t">Multilingual concierge<small>English, Japanese, Chinese, Spanish, French, and Tagalog in house, with translation arranged for others.</small></div>
              <div className="tag">6 languages</div>
            </div>
            <div className="item">
              <div className="n">03</div>
              <div className="t">Careful notes<small>Preferences, histories, and quirks are recorded between conversations and respected.</small></div>
              <div className="tag">On file</div>
            </div>
            <div className="item">
              <div className="n">04</div>
              <div className="t">Right to decline<small>We will decline a piece rather than release it under time pressure.</small></div>
              <div className="tag">Reserved</div>
            </div>
          </div>
        </window.FadeUp>
      </div>
    </section>
  );
}

Object.assign(window, { PrincipleRelationships });
