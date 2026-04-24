function JobHero({ job }) {
  const isJp = window.SITE_LANG === 'jp';

  return (
    <header className="job-hero">
      <nav className="job-crumbs">
        <a href={isJp ? '/ja/' : '/'}>{isJp ? 'ホーム' : 'Home'}</a>
        <span className="sep">·</span>
        <a href={isJp ? '/ja/careers/' : '/careers/'}>{isJp ? '採用情報' : 'Careers'}</a>
        <span className="sep">·</span>
        <span className="here">{job.plainTitle}</span>
      </nav>

      <div className="job-hero-grid">
        <div>
          <h1>{job.title}</h1>
        </div>
        <div className="job-facts">
          <div className="job-fact"><div className="k">{isJp ? '雇用形態' : 'Type'}</div><div className="v">{job.type}</div></div>
          <div className="job-fact"><div className="k">{isJp ? '勤務地' : 'Location'}</div><div className="v">{job.location}</div></div>
          <div className="job-fact"><div className="k">{isJp ? 'チーム' : 'Department'}</div><div className="v">{job.department}</div></div>
          <div className="job-fact"><div className="k">{isJp ? '働き方' : 'Commitment'}</div><div className="v">{job.commitment}</div></div>
        </div>
      </div>

      <div className="job-status-bar">
        <div className={`pill ${job.status === 'closed' ? 'closed' : ''}`}>
          {isJp ? (job.status === 'open' ? '応募受付中' : '募集終了') : (job.status === 'open' ? 'Applications open' : 'Applications closed')}
        </div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--ink-quiet)' }}>
          Ref · EBJ / {job.plainTitle.split(' ').map(w => w[0]).join('').toUpperCase()}
        </div>
      </div>
    </header>
  );
}
Object.assign(window, { JobHero });
