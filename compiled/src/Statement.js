"use strict";

function Statement() {
  const isJp = window.SITE_LANG === 'jp';
  const copy = isJp ? {
    num: 'S 01',
    title: '私たちの仕事',
    kanji: '継',
    caption: 'tsugu / 受け継ぐ、次へつなぐ',
    quote: '「ものを大切にすることは、それを手にしてきた人たちを大切にすることでもあります。」',
    body: '2012年、東京でスタートした私たちは、Hermès、Chanel、Louis Vuittonをはじめとするメゾンのバッグやアクセサリーを扱っています。一点ずつ真贋を確認し、状態を整え、次の持ち主へ渡す準備をする。派手ではありませんが、それが私たちのサーキュラー・ラグジュアリーです。',
    founded: '2012 / Tokyo',
    auth: '専門スタッフによる確認',
    onboarding: '初回対応は24時間以内'
  } : {
    num: 'S 01',
    title: 'The Practice',
    kanji: '継',
    caption: 'tsugu / to inherit, to carry forward',
    quote: '"To care for an object is to care for every hand that held it before."',
    body: 'Founded in Tokyo in 2012, we source and curate handbags and accessories from Hermès, Chanel, Louis Vuitton and their peers. Each piece is authenticated, gently revived, and prepared by hand for its next chapter, a quiet practice of circular luxury.',
    founded: '2012 / Tokyo',
    auth: '100% specialist-verified',
    onboarding: '24-hour turnaround'
  };
  return React.createElement("section", {
    className: "statement",
    id: "about"
  }, React.createElement("div", {
    className: "section-label"
  }, React.createElement("span", {
    className: "num"
  }, copy.num), React.createElement("span", {
    className: "title"
  }, copy.title), React.createElement("span", {
    className: "spacer"
  })), React.createElement("div", {
    className: "statement-body"
  }, React.createElement(window.FadeUp, {
    className: "statement-aside"
  }, React.createElement("div", {
    className: "kanji-big"
  }, copy.kanji), React.createElement("div", {
    className: "kanji-caption"
  }, copy.caption, React.createElement("em", null, copy.quote))), React.createElement("div", null, React.createElement(window.FadeUp, {
    delay: 80
  }, React.createElement("p", {
    className: "statement-text"
  }, copy.body)), React.createElement("div", {
    className: "statement-meta"
  }, React.createElement("div", null, React.createElement("div", {
    className: "k"
  }, isJp ? '創業' : 'Founded'), React.createElement("div", {
    className: "v"
  }, copy.founded)), React.createElement("div", null, React.createElement("div", {
    className: "k"
  }, isJp ? '真贋確認' : 'Authentication'), React.createElement("div", {
    className: "v"
  }, copy.auth)), React.createElement("div", null, React.createElement("div", {
    className: "k"
  }, isJp ? 'お問い合わせ' : 'Supplier onboarding'), React.createElement("div", {
    className: "v"
  }, copy.onboarding))))));
}
Object.assign(window, {
  Statement
});