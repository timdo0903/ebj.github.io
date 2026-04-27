function AboutTeam() {
  const isJp = window.SITE_LANG === 'jp';

  const offices = isJp
    ? [
        {
          city: 'Europe',
          role: 'ブランドパートナーシップとマーケット開発',
          note: 'パートナーシップ、仕入れ先との関係構築、地域ごとのビジネス開発を担う独立拠点です。',
          quiet: true,
        },
        {
          city: 'Japan',
          role: '真贋確認、ケア、撮影、オペレーション',
          note: 'アイテムを受け取り、確認し、整え、撮影し、次の持ち主へ送り出す中心となるアトリエです。',
          quiet: false,
        },
        {
          city: 'United States',
          role: 'クライアントサービスとコレクター対応',
          note: '米州のコレクターや卸先を支える、クライアント-facingの独立拠点です。',
          quiet: true,
        },
      ]
    : [
        {
          city: 'Europe',
          role: 'Brand partnerships and market development',
          note: 'An independent office focused on partnerships, sourcing relationships, and regional business development.',
          quiet: true,
        },
        {
          city: 'Japan',
          role: 'Authentication, restoration, and studio operations',
          note: "The atelier where pieces are received, restored, photographed, and prepared with the team's daily hands-on standard.",
          quiet: false,
        },
        {
          city: 'United States',
          role: 'Client service and collector relations',
          note: 'A standalone client-facing office supporting collectors, wholesale partners, and time-zone coverage across the Americas.',
          quiet: true,
        },
      ];

  return (
    <section className="team-atelier" id="team">
      <div className="section-label">
        <span className="num">§ 04</span>
        <span className="title">{isJp ? 'アトリエ' : 'The Atelier'}</span>
        <span className="spacer" />
        <span className="jp">アトリエ</span>
      </div>

      <div className="atelier-hero">
        <window.FadeUp>
          <div className="atelier-eyebrow">
            <span className="dot"></span>
            <span>{isJp ? '二十の手、ひとつの基準' : 'twenty hands, one standard'}</span>
          </div>
        </window.FadeUp>

        <window.FadeUp delay={60}>
          <h2 className="atelier-headline">
            {isJp ? <>小さなチームの、<br/><em>丁寧な手仕事</em>。</> : <>A small team<br/><em>of careful hands</em>.</>}
          </h2>
        </window.FadeUp>

        <div className="atelier-number-row">
          <window.FadeUp delay={120} className="atelier-number">
            <div className="n">20</div>
            <div className="n-caption">
              <span className="plus">+</span>
              <div>
                <div className="k">{isJp ? '社内スペシャリスト' : 'Specialists on staff'}</div>
                <div className="v">{isJp ? '真贋確認、ケア、撮影、コンシェルジュ。' : 'Authenticators, restorers, photographers, concierges.'}</div>
              </div>
            </div>
          </window.FadeUp>

          <window.FadeUp delay={200} className="atelier-quote">
            <div className="kanji">慮</div>
            <p>
              {isJp
                ? '「一点が次の持ち主へ届くまでに、少なくとも三組の手を通ります。丁寧な仕事には、そのくらいの確認が必要だと考えています。」'
                : '"Every piece passes through at least three pairs of hands before it reaches its next guardian. We believe that is the minimum that careful work requires."'}
            </p>
            <div className="cite">{isJp ? 'チームが大切にしていること' : 'The team, on careful practice'}</div>
          </window.FadeUp>
        </div>
      </div>

      <div className="atelier-map">
        <div className="atelier-map-head">
          <span className="k">§ IV.a</span>
          <span className="t">{isJp ? '拠点' : 'Our offices'}</span>
          <span className="spacer" />
          <span className="jp">拠点</span>
        </div>

        <div className="atelier-map-rows">
          {offices.map((office, index) => (
            <window.FadeUp delay={80 + index * 60} className="atelier-row" key={office.city}>
              <div className="atelier-row-label">
                <span className="badge badge-quiet">Office</span>
                <span className="jp">オフィス</span>
              </div>
              <div className="atelier-row-place">
                <div className="city">{office.city}</div>
                <div className="role">{office.role}</div>
              </div>
              <div className="atelier-row-note">{office.note}</div>
              <div className="atelier-row-mark">
                <span className={`dot${office.quiet ? ' quiet' : ''}`}></span>
              </div>
            </window.FadeUp>
          ))}
        </div>

        <div className="atelier-map-foot">
          <span>{isJp ? '三つの独立した拠点を、同じケアの基準でつないでいます。' : 'Three standalone offices, aligned by the same standard of care.'}</span>
          <span className="mono">EUROPE &nbsp;/&nbsp; JAPAN &nbsp;/&nbsp; UNITED STATES</span>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { AboutTeam });
