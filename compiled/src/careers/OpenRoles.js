"use strict";

function OpenRoles() {
  const roles = [{
    num: 'I',
    title: 'Inventory & Logistics Specialist',
    type: 'Full-time · Tokyo, Japan',
    blurb: 'Safeguard product accuracy, coordinate shipments and support cross-functional projects.',
    status: 'open',
    href: 'job-detail.html?role=inventory-logistics-specialist'
  }, {
    num: 'II',
    title: 'Product Photographer',
    type: 'Full-time · Tokyo, Japan',
    blurb: 'Capture the craftsmanship of every piece for marketplaces and marketing channels.',
    status: 'open',
    href: 'job-detail.html?role=product-photographer'
  }, {
    num: 'III',
    title: 'Luxury Buyer',
    type: 'Full-time · Tokyo, Japan',
    blurb: 'Source, evaluate and authenticate luxury collections with trusted partners worldwide.',
    status: 'closed',
    href: 'job-detail.html?role=buyers-position'
  }, {
    num: 'IV',
    title: 'Live Seller & Social Media Operator',
    type: 'Part-time · Tokyo, Japan',
    blurb: 'Combine on-camera livestream selling with daily content to grow our community.',
    status: 'closed',
    href: 'job-detail.html?role=live-seller-social-media-operator'
  }];
  return React.createElement("section", {
    className: "roles",
    id: "open-roles"
  }, React.createElement("div", {
    className: "section-label"
  }, React.createElement("span", {
    className: "num"
  }, "\xA7 02"), React.createElement("span", {
    className: "title"
  }, "Open Roles"), React.createElement("span", {
    className: "spacer"
  })), React.createElement("div", {
    className: "roles-header"
  }, React.createElement("h2", null, "Now ", React.createElement("em", null, "hiring"), "."), React.createElement("p", null, "Two positions are actively reviewing applications. Others remain closed for now, but you're welcome to read the descriptions and introduce yourself.")), React.createElement("div", null, roles.map(r => React.createElement(window.FadeUp, {
    key: r.num
  }, React.createElement("a", {
    className: "role-row",
    href: r.href
  }, React.createElement("div", {
    className: "num"
  }, r.num), React.createElement("div", {
    className: "title"
  }, r.title, React.createElement("small", null, r.type)), React.createElement("div", {
    className: "blurb"
  }, r.blurb), React.createElement("div", {
    className: `status ${r.status}`
  }, r.status === 'open' ? 'Applications open' : 'Applications closed'), React.createElement("div", {
    className: "go"
  }, r.status === 'open' ? 'Apply' : 'Read role', React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 18,
      height: 1,
      background: 'currentColor',
      position: 'relative'
    }
  }, React.createElement("span", {
    style: {
      position: 'absolute',
      right: 0,
      top: -3,
      width: 7,
      height: 7,
      borderTop: '1px solid currentColor',
      borderRight: '1px solid currentColor',
      transform: 'rotate(45deg)'
    }
  }))))))));
}
Object.assign(window, {
  OpenRoles
});