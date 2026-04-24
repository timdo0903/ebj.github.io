function JobBody({ job }) {
  const toc = [
    { id: 'overview', num: '01', label: 'Overview' },
    ...job.sections.map((s) => ({ id: s.id, num: s.num, label: labelFor(s.id) })),
    { id: 'apply', num: String(job.sections.length + 2).padStart(2, '0'), label: 'Apply' },
  ];

  return (
    <section className="job-body">
      <div className="job-body-grid">
        <aside>
          {toc.map((t) => (
            <a key={t.id} href={`#${t.id}`}>
              <span className="job-toc-num">{'\u00a7'} {t.num}</span>
              <span className="job-toc-label">{t.label}</span>
            </a>
          ))}
        </aside>

        <div>
          <div className="job-section" id="overview">
            <div className="job-section-num">§ 01</div>
            <h2>About <em>the role</em>.</h2>
            <p>{job.intro}</p>
          </div>

          {job.sections.map((s) => (
            <div className="job-section" id={s.id} key={s.id}>
              <div className="job-section-num">§ {s.num}</div>
              <h2>{s.title}</h2>
              {s.body && <p>{s.body}</p>}
              {s.items && (
                <ul>
                  {s.items.map((it, i) => (
                    <li key={i} data-n={String(i + 1).padStart(2, '0')}>{it}</li>
                  ))}
                </ul>
              )}
              {s.note && <p className="note">{s.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function labelFor(id) {
  const map = {
    responsibilities: "Responsibilities",
    duties: "Responsibilities",
    requirements: "Requirements",
    preferred: "Preferred",
    physical: "Physical",
    personality: "Personality",
    hours: "Hours & travel",
    education: "Education",
    offer: "What we offer",
    compensation: "Compensation",
    eligibility: "Need to know",
    interview: "Interview",
  };
  return map[id] || id;
}

Object.assign(window, { JobBody });
