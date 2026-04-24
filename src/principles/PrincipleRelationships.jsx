function PrincipleRelationships() {
  const isJp = window.SITE_LANG === 'jp';
  const checklist = isJp
    ? [
        ['01', '明確な合意', '条件は最初に確認し、丁寧に記録し、約束した通りに守ります。', '契約'],
        ['02', '多言語コンシェルジュ', '英語、日本語、中国語、スペイン語、フランス語、タガログ語に社内で対応します。', '6言語'],
        ['03', '丁寧な記録', '好み、履歴、細かなニュアンスを次の会話へ引き継ぎます。', '記録'],
        ['04', '断る判断', '時間に追われて品質を落とすくらいなら、私たちはお断りします。', '基準'],
      ]
    : [
        ['01', 'Clear agreements', 'Terms are set up front, documented carefully, and honoured to the day.', 'Contractual'],
        ['02', 'Multilingual concierge', 'English, Japanese, Chinese, Spanish, French, and Tagalog in house, with translation arranged for others.', '6 languages'],
        ['03', 'Careful notes', 'Preferences, histories, and quirks are recorded between conversations and respected.', 'On file'],
        ['04', 'Right to decline', 'We will decline a piece rather than release it under time pressure.', 'Reserved'],
      ];

  return (
    <section className="principle-deep" id="relationships">
      <div className="section-label">
        <span className="num">S III</span>
        <span className="title">{isJp ? '長く続く関係性' : 'Respectful Relationships'}</span>
        <span className="spacer" />
        <span className="jp">縁</span>
      </div>

      <div className="head">
        <window.FadeUp>
          <div className="kanji">縁</div>
          <div className="label">{isJp ? 'EN · つながり、続いていく関係' : 'EN · bond, connection, relationship that lasts'}</div>
        </window.FadeUp>
        <window.FadeUp delay={120}>
          <h2>{isJp ? <>一点の人生に寄り添う、<em>長い関係。</em></> : <>A partner, <em>for the life</em> of the piece.</>}</h2>
          <p className="intro">
            {isJp
              ? '一度きりではなく、二度目、五度目も相談したいと思っていただけるか。私たちはそこで自分たちの仕事を測ります。明確な条件、正直な連絡、多言語対応。それらは付加価値ではなく、関係そのものです。'
              : 'We measure ourselves by whether a consignor comes back a second time, and a fifth. Everything we do around a piece is secondary to that. Clear terms, honest communication, multilingual concierge. These are not perks. They are the relationship.'}
          </p>
        </window.FadeUp>
      </div>

      <div className="body">
        <window.FadeUp>
          <p>{isJp ? '条件は最初に確認し、約束した日まで守ります。パートナーが話しやすい言語で対応し、必要に応じて翻訳も手配します。好みや過去のやり取りは丁寧に記録し、次の会話へ引き継ぎます。' : 'We agree terms up front and honour them to the day. We communicate in the language a partner prefers, operating in six in house with translation arranged for any that we do not. We remember preferences between conversations because we keep careful notes, and our concierges do not rotate every six months.'}</p>
          <p>{isJp ? '私たちは、成長のためだけの成長を追いません。丁寧なスタジオは、丁寧な人の数だけしか広がりません。時間に追われて品質を落とすくらいなら、私たちはその一点を扱わない選択をします。' : 'We do not chase growth for its own sake. A careful studio scales by the number of careful people in it, and careful people are rare. We would rather decline a piece than release it under time pressure.'}</p>
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

Object.assign(window, { PrincipleRelationships });
