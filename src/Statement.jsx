function Statement() {
  const isJp = window.SITE_LANG === 'jp';
  const copy = isJp
    ? {
        num: 'S 01',
        title: '私たちの仕事',
        kanji: '継',
        caption: 'tsugu / 受け継ぐ、次へつなぐ',
        quote: '「ものを大切にすることは、それを手にしてきた人たちを大切にすることでもあります。」',
        body:
          '2012年、東京でスタートした私たちは、Hermes、Chanel、Louis Vuittonをはじめとするメゾンのバッグやアクセサリーを扱っています。一点ずつ真贋を確認し、状態を整え、次の持ち主へ渡す準備をする。派手ではありませんが、それが私たちのサーキュラー・ラグジュアリーです。',
        founded: '2012 / Tokyo',
        auth: '専門スタッフによる確認',
        onboarding: '初回対応は24時間以内',
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
              <div className="k">{isJp ? 'お問い合わせ' : 'Supplier onboarding'}</div>
              <div className="v">{copy.onboarding}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Statement });
