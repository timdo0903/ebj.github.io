"use strict";

function JobApply({
  job
}) {
  const open = job.status === 'open';
  const applyNum = String((job.sections?.length || 0) + 2).padStart(2, '0');
  return React.createElement("section", {
    className: "job-apply",
    id: "apply"
  }, React.createElement("div", {
    className: "section-label"
  }, React.createElement("span", {
    className: "num"
  }, "\xA7 ", applyNum), React.createElement("span", {
    className: "title"
  }, "Apply"), React.createElement("span", {
    className: "spacer"
  })), React.createElement("div", {
    className: "job-apply-grid"
  }, React.createElement("div", null, React.createElement("h2", null, open ? React.createElement(React.Fragment, null, "Apply ", React.createElement("em", null, "now"), ".") : React.createElement(React.Fragment, null, "This role is ", React.createElement("em", null, "closed"), ".")), React.createElement("p", null, open ? job.formUrl ? 'Submit your information below. Our hiring team will contact shortlisted candidates with next steps.' : 'Send us your CV and a short note. We read every application personally.' : job.plainTitle.toLowerCase().includes('buyer') ? React.createElement(React.Fragment, null, "Thank you for your interest in the Luxury Buyer role. The position has been filled and we are no longer accepting applications. Please follow our ", React.createElement("a", {
    href: "https://www.linkedin.com/company/eco-brand-japan/",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: 'var(--accent)'
    }
  }, "LinkedIn page"), " or the careers page for future updates.") : React.createElement(React.Fragment, null, "Thank you for your enthusiasm about this opportunity. The role has been filled and we are not collecting new submissions. Please keep an eye on the careers page for future roles."))), React.createElement("div", {
    className: "actions"
  }, open && job.formUrl ? React.createElement("a", {
    className: "btn-primary",
    href: job.formUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, React.createElement("span", null, "Open application form"), React.createElement("span", {
    className: "arrow"
  })) : open ? React.createElement("a", {
    className: "btn-primary",
    href: `mailto:careers@ecobrandjapan.com?subject=${encodeURIComponent('Application · ' + job.plainTitle)}`
  }, React.createElement("span", null, "Email your application"), React.createElement("span", {
    className: "arrow"
  })) : React.createElement("a", {
    className: "btn-primary",
    href: "careers.html"
  }, React.createElement("span", null, "Back to open roles"), React.createElement("span", {
    className: "arrow"
  })), React.createElement("a", {
    className: "btn-ghost",
    href: "careers.html"
  }, "\u2190 All roles"))), open && job.formUrl && React.createElement("div", {
    className: "job-embed"
  }, React.createElement("p", {
    className: "job-embed-fallback"
  }, "The application form will open in a new tab when you click the button above.")));
}
Object.assign(window, {
  JobApply
});