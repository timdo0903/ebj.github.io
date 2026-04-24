function Principles() {
  const isJp = window.SITE_LANG === 'jp';
  const items = isJp
    ? [
        {
          num: 'I',
          title: <>確かな<br /><em>真贋確認</em></>,
          body: '専門スタッフの確認、独自のチェックポイント、状態の丁寧な記録。信頼できる一点としてお届けできるものだけを扱います。',
          checks: ['多角的な真贋確認', '状態の記録', '履歴の管理'],
        },
        {
          num: 'II',
          title: <>循環を支える<br /><em>手仕事</em></>,
          body: '過度な加工ではなく、必要なケアを静かに。素材を尊重し、長く使い続けられる状態へ整えます。',
          checks: ['手作業でのケア', '低負荷な梱包', '循環を意識した仕入れ'],
        },
        {
          num: 'III',
          title: <>長く続く<br /><em>関係性</em></>,
          body: 'お客様やパートナーとの関係を、明確さ、誠実さ、丁寧なコミュニケーションで育てます。',
          checks: ['多言語対応', '明確なやり取り', '長期的な関係'],
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
