"use strict";

function CareersIntro() {
  const benefits = ['Cross-department training in fashion, logistics, marketing, operations', 'Multicultural workplace, in collaboration with overseas teams', 'Structured onboarding, mentorship and development check-ins', 'Allowance for external training', 'Visa renewal sponsorship after 6 months of proven performance', 'Social insurance coverage', 'Work-life balance, by design', 'Travel coverage for domestic and international assignments', 'Transportation expenses covered'];
  return React.createElement("section", {
    className: "careers-intro",
    id: "why-us"
  }, React.createElement("div", {
    className: "section-label"
  }, React.createElement("span", {
    className: "num"
  }, "\xA7 01"), React.createElement("span", {
    className: "title"
  }, "Our Team"), React.createElement("span", {
    className: "spacer"
  })), React.createElement("div", {
    className: "careers-intro-grid"
  }, React.createElement(window.FadeUp, null, React.createElement("h2", null, "Storytellers for ", React.createElement("em", null, "iconic"), " fashion houses."), React.createElement("p", null, "We curate and authenticate rare handbags from Herm\xE8s, Chanel, Louis Vuitton and their peers, and advocate for a circular economy in luxury."), React.createElement("p", null, "If you thrive on collaboration, problem solving and connecting with global partners, you'll feel at home. From sourcing in bustling marketplaces to curating digital campaigns, every role contributes to the life and afterlife of a piece.")), React.createElement(window.FadeUp, {
    delay: 120
  }, React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", {
    className: "dot"
  }), "Why work with us")), React.createElement("div", {
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