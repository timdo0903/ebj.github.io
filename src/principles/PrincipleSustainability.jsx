function PrincipleSustainability() {
  const isJp = window.SITE_LANG === 'jp';
  const checklist = isJp
    ? [
        ['01', '戻せる範囲のケア', 'やさしいクリーニング、コンディショニング、軽い縫製補修。過度な加工はしません。', '手仕事'],
        ['02', '強いリフィニッシュはしない', '再染色や非純正パーツへの交換は行いません。', 'しない'],
        ['03', '低負荷な梱包', '無染色コットン、リサイクルボード、使い捨てプラスチックを抑えた梱包。', '標準'],
        ['04', 'まとめられる配送はまとめる', '可能な範囲でリリースや配送をまとめ、無駄を減らします。', '可能な範囲で'],
      ]
    : [
        ['01', 'Reversible revive', "Gentle cleaning, conditioning, minor stitch. Nothing that can't be undone.", 'Hand'],
        ['02', 'No aggressive refinishing', 'No re-dyeing, no hardware replacement with non-original parts.', 'Never'],
        ['03', 'Low-impact packaging', 'Undyed cotton dust bags, recycled board, no single-use plastics.', 'Default'],
        ['04', 'Consolidated shipping', 'We group releases where partners allow, and offset residual emissions.', 'Where possible'],
      ];

  return (
    <section className="principle-deep" id="sustainability">
      <div className="section-label">
        <span className="num">§ II</span>
        <span className="title">{isJp ? '循環を支える手仕事' : 'Sustainable Stewardship'}</span>
        <span className="spacer" />
        <span className="jp">循環</span>
      </div>

      <div className="head">
        <window.FadeUp>
          <div className="kanji">環</div>
          <div className="label">{isJp ? 'KAN · めぐる、循環する' : 'KAN · cycle, to circle back, circularity'}</div>
        </window.FadeUp>
        <window.FadeUp delay={120}>
          <h2>{isJp ? <>ラグジュアリーを、<em>循環の中へ。</em></> : <>Luxury, kept in <em>circulation.</em></>}</h2>
          <p className="intro">
            {isJp
              ? '古いKellyが今も美しく使われるなら、それはとてもサステナブルな選択です。私たちの仕事は、その継続を可能にすること。強い加工ではなく、戻せる範囲のケアと正直な説明を大切にしています。'
              : 'A Kelly made in 1978 is the most sustainable handbag ever made, provided someone continues to carry it. Our work is to make that continuation possible. Not through aggressive refinishing, but through patient, reversible care and honest description.'}
          </p>
        </window.FadeUp>
      </div>

      <div className="body">
        <window.FadeUp>
          <p>{isJp ? '新しいバッグを生産することと、既にある一点を手入れして使い続けること。その負荷には大きな差があります。だからこそ私たちは、使えるものをきちんと使い続けるための仕事を選んでいます。' : "The carbon cost of a new luxury handbag is, roughly, an order of magnitude greater than the cost of restoring an existing one. We don't publish our own figures because the methodologies are still contested, but the direction of the finding is not in doubt. Keeping a piece in use is the single best thing a collector can do."}</p>
          <p>{isJp ? 'ケアはいつも控えめに。洗浄し、整え、必要な箇所を縫い、そこで止めます。二十年前のバッグを新品に見せるのではなく、その時間を正直に残します。' : 'Our revive work is deliberately gentle. We clean, we condition, we stitch where needed, and we stop. We do not re-dye, we do not replace hardware with non-original parts, and we do not pretend a twenty-year-old piece is a new one. Patina is honest. We photograph it, describe it, and let the next guardian decide.'}</p>
          <p>{isJp ? '梱包には無染色コットンやリサイクルボードを使い、配送は可能な範囲でまとめます。アトリエからお客様へ届くまで、過剰にならない丁寧さを大切にしています。' : 'Packaging is hand-wrapped in undyed cotton and recycled board. Shipping is consolidated where possible, with each release prepared carefully so the work stays considered from atelier to collector.'}</p>
        </window.FadeUp>

        <window.FadeUp delay={120}>
          <div className="checklist">
            {checklist.map(([n, title, small, tag]) => (
              <div className="item" key={n}>
                <div className="n">{n}</div>
                <div className="t">{title}<small>{small}</small></div>
                <div className="tag">{tag}</div>
              </div>
            ))}
          </div>
        </window.FadeUp>
      </div>
    </section>
  );
}
Object.assign(window, { PrincipleSustainability });
