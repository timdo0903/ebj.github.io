function AboutProcess() {
  const isJp = window.SITE_LANG === 'jp';
  const steps = isJp
    ? [
        { num: 'I', title: <>仕入れ<small>入荷 · Nyuka</small></>, desc: '個人コレクター、エステート、信頼できるディストリビューターや卸先から一点ずつ受け入れます。到着した品は撮影し、記録し、作業台に載る前に管理番号を付けます。', time: '1-3日' },
        { num: 'II', title: <><em>真贋確認</em><small>鑑定 · Kantei</small></>, desc: '金具、ステッチ、革の質感、刻印、製造コードなど、メゾンごとの確認項目を専門スタッフが確認します。曖昧なものは次に進めません。', time: '2-5日' },
        { num: 'III', title: <>状態記録<small>診断 · Shindan</small></>, desc: '自然光の写真、採寸、状態コメントを残します。傷や使用感は隠さず、必要な情報として丁寧に記録します。', time: '1日' },
        { num: 'IV', title: <><em>手入れ</em><small>ケア · Teire</small></>, desc: 'クリーニング、コンディショニング、必要に応じた軽い縫製補修。新品に見せるためではなく、その一点らしさを損なわないためのケアです。', time: '3-10日' },
        { num: 'V', title: <>社内撮影<small>撮影 · Satsuei</small></>, desc: 'プロのフォトグラファーが、正面、背面、底面、側面、内側、刻印などを撮影します。色味は正直に、経年の表情は消しません。', time: '1日' },
        { num: 'VI', title: <><em>リリース</em><small>受け渡し · Ukewatashi</small></>, desc: 'コレクター、ディストリビューター、委託元へ。梱包は追跡可能で、手作業で整え、複数の確認を経てアトリエを出ます。', time: '随時' },
      ]
    : [
        { num: 'I', title: <>Sourcing<small>入荷 · Nyuka</small></>, desc: 'We acquire from private collectors, estates, trusted distributors and wholesale channels across Asia, Europe and North America. Every intake is logged, photographed and assigned a dossier before it reaches the bench, regardless of origin.', time: '1-3 days' },
        { num: 'II', title: <><em>Authentication</em><small>鑑定 · Kantei</small></>, desc: 'Every single item we buy is carefully inspected and authenticated by our lead authenticators: hardware, stitching, leather grain, stamping, date codes, and a proprietary checklist tailored to each maison. Nothing ambiguous proceeds.', time: '2-5 days' },
        { num: 'III', title: <>Condition reporting<small>診断 · Shindan</small></>, desc: 'A written, internal dossier with daylight photographs and measurements. Flaws are described, not hidden. Every dossier is dated and signed by the authenticator responsible, and kept on file for ten years.', time: '1 day' },
        { num: 'IV', title: <><em>Hand revive</em><small>手入れ · Teire</small></>, desc: 'Gentle cleaning, conditioning, minor stitch work if needed. Never aggressive refinishing. The intent is to return a piece to its quiet, honest best, not to pretend it is new.', time: '3-10 days' },
        { num: 'V', title: <>In-house photography<small>撮影 · Satsuei</small></>, desc: 'Every piece is photographed in our in-house studio by a professional photographer: clean white background, 10+ shots covering front, back, bottom, sides, interior and production code. Honest colour, no retouching of patina.', time: '1 day' },
        { num: 'VI', title: <><em>Partner release</em><small>受け渡し · Ukewatashi</small></>, desc: 'Introduced to a collector, distributor, or returned to consignment. Packaging is hand-wrapped, traceable, and low-impact. Three signatures before a piece leaves the atelier.', time: 'On request' },
      ];

  return (
    <section className="process" id="process">
      <div className="section-label">
        <span className="num">§ 05</span>
        <span className="title">{isJp ? 'プロセス' : 'Our Process'}</span>
        <span className="spacer" />
        <span className="jp">工程</span>
      </div>

      <window.FadeUp>
        <h2 style={{
          fontFamily: 'var(--serif)', fontWeight: 300,
          fontSize: 'clamp(36px, 4.4vw, 60px)', lineHeight: 1.05,
          letterSpacing: '-0.01em', margin: '0 0 40px', maxWidth: '18ch', textWrap: 'balance',
        }}>
          {isJp ? <>静かな六つの工程を、<em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>毎回。</em></> : <>Six quiet steps, <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>every time.</em></>}
        </h2>
      </window.FadeUp>

      <div className="process-list">
        {steps.map((s, i) => (
          <div className="process-row" key={i}>
            <div className="num">Step {s.num}</div>
            <div className="title">{s.title}</div>
            <div className="desc">{s.desc}</div>
            <div className="time">{s.time}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
Object.assign(window, { AboutProcess });
