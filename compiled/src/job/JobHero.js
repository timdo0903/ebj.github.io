"use strict";

function JobHero({
  job
}) {
  return React.createElement("header", {
    className: "job-hero"
  }, React.createElement("nav", {
    className: "job-crumbs"
  }, React.createElement("a", {
    href: "index.html"
  }, "Home"), React.createElement("span", {
    className: "sep"
  }, "\xB7"), React.createElement("a", {
    href: "careers.html"
  }, "Careers"), React.createElement("span", {
    className: "sep"
  }, "\xB7"), React.createElement("span", {
    className: "here"
  }, job.plainTitle)), React.createElement("div", {
    className: "job-hero-grid"
  }, React.createElement("div", null, React.createElement("h1", null, job.title)), React.createElement("div", {
    className: "job-facts"
  }, React.createElement("div", {
    className: "job-fact"
  }, React.createElement("div", {
    className: "k"
  }, "Type"), React.createElement("div", {
    className: "v"
  }, job.type)), React.createElement("div", {
    className: "job-fact"
  }, React.createElement("div", {
    className: "k"
  }, "Location"), React.createElement("div", {
    className: "v"
  }, job.location)), React.createElement("div", {
    className: "job-fact"
  }, React.createElement("div", {
    className: "k"
  }, "Department"), React.createElement("div", {
    className: "v"
  }, job.department)), React.createElement("div", {
    className: "job-fact"
  }, React.createElement("div", {
    className: "k"
  }, "Commitment"), React.createElement("div", {
    className: "v"
  }, job.commitment)))), React.createElement("div", {
    className: "job-status-bar"
  }, React.createElement("div", {
    className: `pill ${job.status === 'closed' ? 'closed' : ''}`
  }, job.status === 'open' ? 'Applications open' : 'Applications closed'), React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 11,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: 'var(--ink-quiet)'
    }
  }, "Ref \xB7 EBJ / ", job.plainTitle.split(' ').map(w => w[0]).join('').toUpperCase())));
}
Object.assign(window, {
  JobHero
});