function JobHero({ job }) {
  return (
    <header className="job-hero">
      <nav className="job-crumbs">
        <a href="/">Home</a>
        <span className="sep">·</span>
        <a href="/careers/">Careers</a>
        <span className="sep">·</span>
        <span className="here">{job.plainTitle}</span>
      </nav>

      <div className="job-hero-grid">
        <div>
          <h1>{job.title}</h1>
        </div>
        <div className="job-facts">
          <div className="job-fact"><div className="k">Type</div><div className="v">{job.type}</div></div>
          <div className="job-fact"><div className="k">Location</div><div className="v">{job.location}</div></div>
          <div className="job-fact"><div className="k">Department</div><div className="v">{job.department}</div></div>
          <div className="job-fact"><div className="k">Commitment</div><div className="v">{job.commitment}</div></div>
        </div>
      </div>

      <div className="job-status-bar">
        <div className={`pill ${job.status === 'closed' ? 'closed' : ''}`}>
          {job.status === 'open' ? 'Applications open' : 'Applications closed'}
        </div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--ink-quiet)' }}>
          Ref · EBJ / {job.plainTitle.split(' ').map(w => w[0]).join('').toUpperCase()}
        </div>
      </div>
    </header>
  );
}
Object.assign(window, { JobHero });
