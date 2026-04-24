"use strict";

function JobApp() {
  const [tweaks, setTweaks] = React.useState(window.TWEAKS);
  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', tweaks.theme);
    root.setAttribute('data-accent', tweaks.accent);
    root.setAttribute('data-motion', tweaks.motion);
  }, [tweaks]);
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('role') || 'inventory-logistics-specialist';
  const job = window.JOBS[slug];
  React.useEffect(() => {
    if (job) document.title = `${job.plainTitle} · Eco Brand Japan`;
  }, [job]);
  if (!job) {
    return React.createElement(React.Fragment, null, React.createElement(window.NavCareers, null), React.createElement("div", {
      className: "job-not-found"
    }, React.createElement("h1", null, "Role not found"), React.createElement("p", null, "That position isn't listed. Browse our open roles instead."), React.createElement("a", {
      className: "btn-primary",
      href: "/careers/"
    }, React.createElement("span", null, "Back to careers"), React.createElement("span", {
      className: "arrow"
    }))), React.createElement(window.Footer, null));
  }
  return React.createElement(React.Fragment, null, React.createElement(window.NavCareers, null), React.createElement(window.JobHero, {
    job: job
  }), React.createElement(window.JobBody, {
    job: job
  }), React.createElement(window.JobApply, {
    job: job
  }), React.createElement(window.Footer, null));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(JobApp, null));