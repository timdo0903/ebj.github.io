"use strict";

function JobBody({
  job
}) {
  const isJp = window.SITE_LANG === 'jp';
  const toc = [{
    id: 'overview',
    num: '01',
    label: isJp ? '概要' : 'Overview'
  }, ...job.sections.map(s => ({
    id: s.id,
    num: s.num,
    label: labelFor(s.id, isJp)
  })), {
    id: 'apply',
    num: String(job.sections.length + 2).padStart(2, '0'),
    label: isJp ? '応募' : 'Apply'
  }];
  return React.createElement("section", {
    className: "job-body"
  }, React.createElement("div", {
    className: "job-body-grid"
  }, React.createElement("aside", null, toc.map(t => React.createElement("a", {
    key: t.id,
    href: `#${t.id}`
  }, React.createElement("span", {
    className: "job-toc-num"
  }, '\u00a7', " ", t.num), React.createElement("span", {
    className: "job-toc-label"
  }, t.label)))), React.createElement("div", null, React.createElement("div", {
    className: "job-section",
    id: "overview"
  }, React.createElement("div", {
    className: "job-section-num"
  }, "\xA7 01"), React.createElement("h2", null, isJp ? React.createElement(React.Fragment, null, "\u3053\u306E\u8077\u7A2E\u306B", React.createElement("em", null, "\u3064\u3044\u3066\u3002")) : React.createElement(React.Fragment, null, "About ", React.createElement("em", null, "the role"), ".")), React.createElement("p", null, job.intro)), job.sections.map(s => React.createElement("div", {
    className: "job-section",
    id: s.id,
    key: s.id
  }, React.createElement("div", {
    className: "job-section-num"
  }, "\xA7 ", s.num), React.createElement("h2", null, s.title), s.body && React.createElement("p", null, s.body), s.items && React.createElement("ul", null, s.items.map((it, i) => React.createElement("li", {
    key: i,
    "data-n": String(i + 1).padStart(2, '0')
  }, it))), s.note && React.createElement("p", {
    className: "note"
  }, s.note))))));
}
function labelFor(id, isJp = false) {
  const map = isJp ? {
    responsibilities: "仕事内容",
    duties: "仕事内容",
    requirements: "応募条件",
    preferred: "歓迎経験",
    physical: "身体要件",
    personality: "求める人物像",
    hours: "勤務・出張",
    education: "語学・学歴",
    offer: "働く環境",
    compensation: "給与・待遇",
    eligibility: "応募前の確認",
    interview: "選考"
  } : {
    responsibilities: "Responsibilities",
    duties: "Responsibilities",
    requirements: "Requirements",
    preferred: "Preferred",
    physical: "Physical",
    personality: "Personality",
    hours: "Hours & travel",
    education: "Education",
    offer: "What we offer",
    compensation: "Compensation",
    eligibility: "Need to know",
    interview: "Interview"
  };
  return map[id] || id;
}
Object.assign(window, {
  JobBody
});