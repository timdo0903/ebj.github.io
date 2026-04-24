function Statement() {
  const isJp = window.SITE_LANG === 'jp';
  const copy = isJp
    ? {
        num: 'S 01',
        title: '私たちの仕事',
        kanji: '継',
        caption: 'tsugu / 受け継ぐ、つないでいく',
        quote: '「ものを大切にすることは、その前に触れてきた手を大切にすることでもある。」',
        body:
          '2012年に東京で始まり、Hermes、Chanel、Louis Vuitton をはじめとするメゾンのバッグやアクセサリーを扱ってきました。すべての品を真贋確認し、やさしく整え、次の持ち主へ渡す準備をする。それが私たちの静かなサーキュラー・ラグジュアリーです。',
        founded: '2012 / Tokyo',
        auth: '専門スタッフによる確認',
        onboarding: '24時間以内の初回対応',
      }
    : {
        num: 'S 01',
        title: 'The Practice',
        kanji: '継',
        caption: 'tsugu / to inherit, to carry forward',
        quote: '"To care for an object is to care for every hand that held it before."',
        body:
          'Founded in Tokyo in 2012, we source and curate handbags and accessories from Hermes, Chanel, Louis Vuitton and their peers. Each piece is authenticated, gently revived, and prepared by hand for its next chapter, a quiet practice of circular luxury.',
        founded: '2012 / Tokyo',
        auth: '100% specialist-verified',
        onboarding: '24-hour turnaround',
      };

  return (
    <section className="statement" id="about">
      <div className="section-label">
        <span className="num">{copy.num}</span>
        <span className="title">{copy.title}</span>
        <span className="spacer" />
      </div>

      <div className="statement-body">
        <window.FadeUp className="statement-aside">
          <div className="kanji-big">{copy.kanji}</div>
          <div className="kanji-caption">
            {copy.caption}
            <em>{copy.quote}</em>
          </div>
        </window.FadeUp>

        <div>
          <window.FadeUp delay={80}>
            <p className="statement-text">{copy.body}</p>
          </window.FadeUp>

          <div className="statement-meta">
            <div>
              <div className="k">{isJp ? '創業' : 'Founded'}</div>
              <div className="v">{copy.founded}</div>
            </div>
            <div>
              <div className="k">{isJp ? '真贋確認' : 'Authentication'}</div>
              <div className="v">{copy.auth}</div>
            </div>
            <div>
              <div className="k">{isJp ? 'お取引開始' : 'Supplier onboarding'}</div>
              <div className="v">{copy.onboarding}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Statement });
