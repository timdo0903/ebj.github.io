"use strict";

function AboutStory() {
  const isJp = window.SITE_LANG === 'jp';
  return React.createElement("section", {
    className: "about-story",
    id: "story"
  }, React.createElement("div", {
    className: "section-label"
  }, React.createElement("span", {
    className: "num"
  }, "\xA7 03"), React.createElement("span", {
    className: "title"
  }, isJp ? 'はじまり' : 'Our Story'), React.createElement("span", {
    className: "spacer"
  }), React.createElement("span", {
    className: "jp"
  }, isJp ? '由来' : '由来')), React.createElement("div", {
    className: "about-story-grid"
  }, React.createElement(window.FadeUp, null, React.createElement("div", {
    className: "kanji-big"
  }, "\u7D99"), React.createElement("div", {
    className: "kanji-cap"
  }, "KEI \xB7 ", isJp ? '受け継ぐ、続いていく' : 'to continue, to inherit', React.createElement("em", null, isJp ? 'ひとつの品を、次の持ち主へつなぐために。' : 'The thread that connects one guardian to the next.'))), React.createElement(window.FadeUp, {
    delay: 120
  }, React.createElement("h2", null, isJp ? React.createElement(React.Fragment, null, "\u30B3\u30EC\u30AF\u30BF\u30FC\u306E\u76EE\u7DDA\u304B\u3089\u3001", React.createElement("em", null, "\u30B3\u30EC\u30AF\u30BF\u30FC\u306E\u305F\u3081\u306B\u3002")) : React.createElement(React.Fragment, null, "Founded by collectors, for ", React.createElement("em", null, "collectors."))), React.createElement("p", null, isJp ? '2012年、ヴィンテージレザーグッズを長く愛してきた創業者は、東京で同じ光景を何度も目にしました。美しいバッグが、わずかなステッチのほつれや金具のくすみだけで、静かに使われなくなっていること。' : 'In 2012, our founder, a long-time collector of vintage leather goods, noticed the same pattern across Tokyo: exquisite bags, quietly unused, often beautiful but for a missing stitch or a dulled clasp. The market was happy to resell them in a rush. Few were willing to spend a week restoring one by hand.'), React.createElement("p", null, isJp ? '私たちは、小さな作業台と一本のルーペから始まりました。アトリエを出る一点が、次の持ち主に誇って持ってもらえる状態であること。その基準は今も変わりません。' : "We started small. A bench in Tokyo, a single loupe, and a simple principle: no piece leaves the atelier unless it would make its next owner proud. That principle hasn't changed. What has changed is the team around it: craftspeople, authenticators, photographers, concierges, each one bringing a discipline, a language, a taste."), React.createElement("p", {
    className: "serif-quote"
  }, isJp ? '「バッグを売るのではなく、その一点を次の章へ紹介する。自分たちでも持ちたいと思える状態かどうかを、いつも問い直しています。」' : "\"We don't resell bags. We introduce a piece to its next chapter, and we ask ourselves whether we'd be comfortable carrying it ourselves.\""), React.createElement("p", null, isJp ? '現在は、アジア、ヨーロッパ、北米の個人コレクター、エステート、ディストリビューターと連携しています。それでも私たちは、意図して小さなスタジオであり続けています。真贋確認、手入れ、撮影、言葉選びは、丁寧な手の数だけでしか広げられない仕事だからです。' : 'Today Eco Brand Japan partners with private collectors, estates, and distributors across Asia, Europe and North America. We remain a small studio by design, because authentication, restoration and storytelling are crafts that scale only by the number of careful hands you have.'))));
}
Object.assign(window, {
  AboutStory
});