"use strict";

function JobBody({
  job
}) {
  const toc = [{
    id: 'overview',
    num: '01',
    label: 'Overview'
  }, ...job.sections.map(s => ({
    id: s.id,
    num: s.num,
    label: labelFor(s.id)
  })), {
    id: 'apply',
    num: String(job.sections.length + 2).padStart(2, '0'),
    label: 'Apply'
  }];
  return React.createElement("section", {
    className: "job-body"
  }, React.createElement("div", {
    className: "job-body-grid"
  }, React.createElement("aside", null, toc.map(t => React.createElement("a", {
    key: t.id,
    href: `#${t.id}`
  }, "\xA7 ", t.num, " \xB7 ", t.label))), React.createElement("div", null, React.createElement("div", {
    className: "job-section",
    id: "overview"
  }, React.createElement("div", {
    className: "job-section-num"
  }, "\xA7 01"), React.createElement("h2", null, "About ", React.createElement("em", null, "the role"), "."), React.createElement("p", null, job.intro)), job.sections.map(s => React.createElement("div", {
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
function labelFor(id) {
  const map = {
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