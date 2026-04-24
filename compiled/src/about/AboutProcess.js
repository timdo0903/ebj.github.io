"use strict";

function AboutProcess() {
  const steps = [{
    num: 'I',
    title: React.createElement(React.Fragment, null, "Sourcing", React.createElement("small", null, "\u5165\u8377 \xB7 Ny\u016Bka")),
    desc: 'We acquire from private collectors, estates, trusted distributors and wholesale channels across Asia, Europe and North America. Every intake is logged, photographed and assigned a dossier before it reaches the bench, regardless of origin.',
    time: '1–2 days'
  }, {
    num: 'II',
    title: React.createElement(React.Fragment, null, React.createElement("em", null, "Authentication"), React.createElement("small", null, "\u9451\u5B9A \xB7 Kantei")),
    desc: 'Every single item we buy is carefully inspected and authenticated by our lead authenticators: hardware, stitching, leather grain, stamping, date codes, and a proprietary checklist tailored to each maison. Nothing ambiguous proceeds.',
    time: '2–5 days'
  }, {
    num: 'III',
    title: React.createElement(React.Fragment, null, "Condition reporting", React.createElement("small", null, "\u8A3A\u65AD \xB7 Shindan")),
    desc: 'A written, internal dossier with daylight photographs and measurements. Flaws are described, not hidden. Every dossier is dated and signed by the authenticator responsible, and kept on file for ten years.',
    time: '1 day'
  }, {
    num: 'IV',
    title: React.createElement(React.Fragment, null, React.createElement("em", null, "Hand revive"), React.createElement("small", null, "\u624B\u5165\u308C \xB7 Teire")),
    desc: 'Gentle cleaning, conditioning, minor stitch work if needed. Never aggressive refinishing. The intent is to return a piece to its quiet, honest best, not to pretend it is new.',
    time: '3–10 days'
  }, {
    num: 'V',
    title: React.createElement(React.Fragment, null, "In-house photography", React.createElement("small", null, "\u64AE\u5F71 \xB7 Satsuei")),
    desc: 'Every piece is photographed in our in-house studio by a professional photographer: clean white background, 10+ shots covering front, back, bottom, sides, interior and production code. Honest colour, no retouching of patina.',
    time: '1 day'
  }, {
    num: 'VI',
    title: React.createElement(React.Fragment, null, React.createElement("em", null, "Partner release"), React.createElement("small", null, "\u53D7\u3051\u6E21\u3057 \xB7 Ukewatashi")),
    desc: 'Introduced to a collector, distributor, or returned to consignment. Packaging is hand-wrapped, traceable, and low-impact. Three signatures before a piece leaves the atelier.',
    time: 'On request'
  }];
  return React.createElement("section", {
    className: "process",
    id: "process"
  }, React.createElement("div", {
    className: "section-label"
  }, React.createElement("span", {
    className: "num"
  }, "\xA7 05"), React.createElement("span", {
    className: "title"
  }, "Our Process"), React.createElement("span", {
    className: "spacer"
  }), React.createElement("span", {
    className: "jp"
  }, "\u5DE5\u7A0B")), React.createElement(window.FadeUp, null, React.createElement("h2", {
    style: {
      fontFamily: 'var(--serif)',
      fontWeight: 300,
      fontSize: 'clamp(36px, 4.4vw, 60px)',
      lineHeight: 1.05,
      letterSpacing: '-0.01em',
      margin: '0 0 40px',
      maxWidth: '18ch',
      textWrap: 'balance'
    }
  }, "Six quiet steps, ", React.createElement("em", {
    style: {
      color: 'var(--accent)',
      fontStyle: 'italic'
    }
  }, "every time."))), React.createElement("div", {
    className: "process-list"
  }, steps.map((s, i) => React.createElement("div", {
    className: "process-row",
    key: i
  }, React.createElement("div", {
    className: "num"
  }, "Step ", s.num), React.createElement("div", {
    className: "title"
  }, s.title), React.createElement("div", {
    className: "desc"
  }, s.desc), React.createElement("div", {
    className: "time"
  }, s.time)))));
}
Object.assign(window, {
  AboutProcess
});