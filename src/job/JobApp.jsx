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
  const isJp = window.SITE_LANG === 'jp';
  const job = (isJp && window.JOBS_JP?.[slug]) || window.JOBS[slug];

  React.useEffect(() => {
    if (job) document.title = `${job.plainTitle} · Eco Brand Japan`;
  }, [job]);

  if (!job) {
    return (
      <>
        <window.NavCareers />
        <div className="job-not-found">
          <h1>{isJp ? '募集情報が見つかりません' : 'Role not found'}</h1>
          <p>{isJp ? 'このポジションは現在掲載されていません。採用情報ページをご確認ください。' : "That position isn't listed. Browse our careers page instead."}</p>
          <a className="btn-primary" href={isJp ? '/ja/careers/' : '/careers/'}>
            <span>{isJp ? '採用情報へ戻る' : 'Back to careers'}</span>
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
