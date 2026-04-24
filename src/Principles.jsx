function Principles() {
  const isJp = window.SITE_LANG === 'jp';
  const items = isJp
    ? [
        {
          num: 'I',
          title: <>確かな<em>真贋確認</em></>,
          body: '専門スタッフによる確認、独自のチェックポイント、透明性のある情報開示によって、すべての一点を信頼できる状態でお届けします。',
          checks: ['多角的な真贋確認', '状態の記録', '由来の追跡'],
        },
        {
          num: 'II',
          title: <>持続可能な<em>受け継ぎ</em></>,
          body: 'やさしいケアとクリーニング、負荷を抑えた梱包、循環を意識した運営によって、ラグジュアリーが長く価値を持ち続ける流れをつくります。',
          checks: ['手作業での軽いケア', '環境配慮の梱包', '循環型の仕入れ'],
        },
        {
          num: 'III',
          title: <>誠実な<em>関係性</em></>,
          body: 'お預かりする方々との関係を、明確さと誠実さ、そして丁寧な対応で育てていきます。長く続く関係こそ、私たちの基準です。',
          checks: ['多言語対応', '迅速なやり取り', '長期的な関係性'],
        },
      ]
    : [
        {
          num: 'I',
          title: <>Authenticity<br /><em>assured</em></>,
          body: 'Expert authenticators, proprietary checkpoints and transparent reporting ensure each item and description is worthy of your trust, without exception.',
          checks: ['Multi-point authentication', 'Condition reporting', 'Provenance tracking'],
        },
        {
          num: 'II',
          title: <>Sustainable<br /><em>stewardship</em></>,
          body: 'From gentle care and cleaning to sustainable packaging, we promote circularity, so luxury continues to create positive impact, generation after generation.',
          checks: ['Light refresh by hand', 'Low-impact packaging', 'Closed-loop sourcing'],
        },
        {
          num: 'III',
          title: <>Respectful<br /><em>relationships</em></>,
          body: 'We build long-term partnerships rooted in clarity, integrity and care for the people who entrust us with their collections, a relationship that lasts.',
          checks: ['Multilingual concierge', 'Swift payment cycles', 'Lifelong partners'],
        },
      ];

  return (
    <section className="principles" id="principles">
      <div className="section-label">
        <span className="num">S 02</span>
        <span className="title">{isJp ? '私たちの約束' : 'Our Promise'}</span>
        <span className="spacer" />
      </div>

      <div className="principles-grid">
        {items.map((p, i) => (
          <window.FadeUp className="principle" key={p.num} delay={i * 120}>
            <div className="num">Principle {p.num}</div>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
            <div className="checks">
              {p.checks.map(c => (
                <div className="check" key={c}>{c}</div>
              ))}
            </div>
          </window.FadeUp>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Principles });
