"use strict";

function CareersIntro() {
  const isJp = window.SITE_LANG === 'jp';
  const benefits = isJp ? ['ファッション、物流、マーケティング、オペレーションを横断する研修', '海外チームと連携する多文化な職場', 'オンボーディング、メンター制度、定期的な成長面談', '外部研修の補助', '実績に応じたビザ更新サポート', '社会保険完備', '働きやすさを意識したチーム運営', '国内外出張時の交通・移動サポート', '通勤交通費支給'] : ['Cross-department training in fashion, logistics, marketing, operations', 'Multicultural workplace, in collaboration with overseas teams', 'Structured onboarding, mentorship and development check-ins', 'Allowance for external training', 'Visa renewal sponsorship after 6 months of proven performance', 'Social insurance coverage', 'Work-life balance, by design', 'Travel coverage for domestic and international assignments', 'Transportation expenses covered'];
  return React.createElement("section", {
    className: "careers-intro",
    id: "why-us"
  }, React.createElement("div", {
    className: "section-label"
  }, React.createElement("span", {
    className: "num"
  }, "\xA7 01"), React.createElement("span", {
    className: "title"
  }, isJp ? 'チーム' : 'Our Team'), React.createElement("span", {
    className: "spacer"
  })), React.createElement("div", {
    className: "careers-intro-grid"
  }, React.createElement(window.FadeUp, null, React.createElement("h2", null, isJp ? React.createElement(React.Fragment, null, "\u30A2\u30A4\u30B3\u30CB\u30C3\u30AF\u306A\u30E1\u30BE\u30F3\u3092\u3001", React.createElement("em", null, "\u6B21\u306E\u6301\u3061\u4E3B\u3078\u3002")) : React.createElement(React.Fragment, null, "Storytellers for ", React.createElement("em", null, "iconic"), " fashion houses.")), React.createElement("p", null, isJp ? 'Hermès、Chanel、Louis Vuittonをはじめとする希少なバッグをキュレーションし、真贋を確認し、ラグジュアリーの循環を支えています。' : 'We curate and authenticate rare handbags from Hermès, Chanel, Louis Vuitton and their peers, and advocate for a circular economy in luxury.'), React.createElement("p", null, isJp ? 'チームで動くこと、課題を見つけて解くこと、海外のパートナーとつながることが好きな方には、きっと合う環境です。マーケットでの仕入れからデジタルキャンペーンまで、どの役割も一点の次の人生につながっています。' : "If you thrive on collaboration, problem solving and connecting with global partners, you'll feel at home. From sourcing in bustling marketplaces to curating digital campaigns, every role contributes to the life and afterlife of a piece.")), React.createElement(window.FadeUp, {
    delay: 120
  }, React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), isJp ? '働く環境' : 'Why work with us')), React.createElement("div", {
    className: "benefits-grid"
  }, benefits.map((b, i) => React.createElement("div", {
    className: "benefit",
    key: i
  }, React.createElement("div", {
    className: "num"
  }, String(i + 1).padStart(2, '0')), React.createElement("div", {
    className: "text"
  }, b)))))));
}
Object.assign(window, {
  CareersIntro
});