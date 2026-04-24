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
    return (
      <>
        <window.NavCareers />
        <div className="job-not-found">
          <h1>Role not found</h1>
          <p>That position isn't listed. Browse our open roles instead.</p>
          <a className="btn-primary" href="/careers/">
            <span>Back to careers</span>
            <span className="arrow"></span>
          </a>
        </div>
        <window.Footer />
      </>
    );
  }

  return (
    <>
      <window.NavCareers />
      <window.JobHero job={job} />
      <window.JobBody job={job} />
      <window.JobApply job={job} />
      <window.Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<JobApp />);
