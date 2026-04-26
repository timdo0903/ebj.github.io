function AboutStory() {
  const isJp = window.SITE_LANG === 'jp';

  return (
    <section className="about-story" id="story">
      <div className="section-label">
        <span className="num">§ 03</span>
        <span className="title">{isJp ? 'はじまり' : 'Our Story'}</span>
        <span className="spacer" />
        <span className="jp">{isJp ? '由来' : '由来'}</span>
      </div>

      <div className="about-story-grid">
        <window.FadeUp>
          <div className="kanji-big">匠</div>
          <div className="kanji-cap">
            TAKUMI · {isJp ? '匠の手しごと、受け継ぐ美意識' : 'artisan craft, carried forward'}
            <em>{isJp ? 'ひとつの品を、次の持ち主へつなぐために。' : 'The thread that connects one guardian to the next.'}</em>
          </div>
        </window.FadeUp>

        <window.FadeUp delay={120}>
          <h2>{isJp ? <>コレクターの目線から、<em>コレクターのために。</em></> : <>Founded by collectors, for <em>collectors.</em></>}</h2>
          <p>
            {isJp
              ? '2012年、ヴィンテージレザーグッズを長く愛してきた創業者は、東京で同じ光景を何度も目にしました。美しいバッグが、わずかなステッチのほつれや金具のくすみだけで、静かに使われなくなっていること。'
              : 'In 2012, our founder, a long-time collector of vintage leather goods, noticed the same pattern across Tokyo: exquisite bags, quietly unused, often beautiful but for a missing stitch or a dulled clasp. The market was happy to resell them in a rush. Few were willing to spend a week restoring one by hand.'}
          </p>
          <p>
            {isJp
              ? '私たちは、小さな作業台と一本のルーペから始まりました。アトリエを出る一点が、次の持ち主に誇って持ってもらえる状態であること。その基準は今も変わりません。'
              : "We started small. A bench in Tokyo, a single loupe, and a simple principle: no piece leaves the atelier unless it would make its next owner proud. That principle hasn't changed. What has changed is the team around it: craftspeople, authenticators, photographers, concierges, each one bringing a discipline, a language, a taste."}
          </p>

          <p className="serif-quote">
            {isJp
              ? '「バッグを売るのではなく、その一点を次の章へ紹介する。自分たちでも持ちたいと思える状態かどうかを、いつも問い直しています。」'
              : "\"We don't resell bags. We introduce a piece to its next chapter, and we ask ourselves whether we'd be comfortable carrying it ourselves.\""}
          </p>

          <p>
            {isJp
              ? '現在は、アジア、ヨーロッパ、北米の個人コレクター、エステート、ディストリビューターと連携しています。それでも私たちは、意図して小さなスタジオであり続けています。真贋確認、手入れ、撮影、言葉選びは、丁寧な手の数だけでしか広げられない仕事だからです。'
              : 'Today Eco Brand Japan partners with private collectors, estates, and distributors across Asia, Europe and North America. We remain a small studio by design, because authentication, restoration and storytelling are crafts that scale only by the number of careful hands you have.'}
          </p>
        </window.FadeUp>
      </div>
    </section>
  );
}
Object.assign(window, { AboutStory });
