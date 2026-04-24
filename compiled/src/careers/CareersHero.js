"use strict";

function CareersHero() {
  const isJp = window.SITE_LANG === 'jp';
  return React.createElement("header", {
    className: "careers-hero"
  }, React.createElement("div", {
    className: "meta"
  }, React.createElement("div", {
    className: "pill"
  }, isJp ? '募集中 · 2職種' : 'Now hiring · 2 roles open'), React.createElement("div", null, isJp ? '採用情報' : 'Careers', " \xB7 N\xB0001")), React.createElement("div", {
    className: "grid"
  }, React.createElement("div", null, React.createElement("h1", null, isJp ? React.createElement(React.Fragment, null, React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, "\u6771\u4EAC\u3067\u3001")), React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, React.createElement("em", null, "\u4E00\u7DD2\u306B\u80B2\u3066\u308B\u3002")))) : React.createElement(React.Fragment, null, React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, "Grow")), React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, React.createElement("em", null, "with us,"))), React.createElement("span", {
    className: "reveal-line"
  }, React.createElement("span", null, "in Tokyo."))))), React.createElement("div", null, React.createElement("p", {
    className: "lede"
  }, isJp ? 'サーキュラー・ラグジュアリーを支える、多言語でアントレプレナーシップのあるチームです。仕入れ、撮影、物流、ストーリーテリングまで、一つひとつの仕事が品物の次の章につながります。' : 'Join a multilingual, entrepreneurial team championing circular luxury, where every role, from sourcing to storytelling, elevates preloved treasures for a new generation of collectors.'), React.createElement("div", {
    style: {
      marginTop: 48,
      display: 'flex',
      gap: 24,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, React.createElement("a", {
    className: "btn-primary",
    href: "#open-roles"
  }, React.createElement("span", null, isJp ? '募集中の職種を見る' : 'See open roles'), React.createElement("span", {
    className: "arrow"
  })), React.createElement("a", {
    className: "btn-ghost",
    href: "#why-us"
  }, isJp ? '働く環境について' : 'Why work with us')))));
}
Object.assign(window, {
  CareersHero
});