function JobApply({ job }) {
  const open = job.status === 'open';
  const applyNum = String((job.sections?.length || 0) + 2).padStart(2, '0');

  return (
    <section className="job-apply" id="apply">
      <div className="section-label">
        <span className="num">§ {applyNum}</span>
        <span className="title">Apply</span>
        <span className="spacer" />
      </div>

      <div className="job-apply-grid">
        <div>
          <h2>{open ? <>Apply <em>now</em>.</> : <>This role is <em>closed</em>.</>}</h2>
          <p>
            {open
              ? (job.formUrl
                  ? 'Submit your information below. Our hiring team will contact shortlisted candidates with next steps.'
                  : 'Send us your CV and a short note. We read every application personally.')
              : (job.plainTitle.toLowerCase().includes('buyer')
                  ? <>Thank you for your interest in the Luxury Buyer role. The position has been filled and we are no longer accepting applications. Please follow our <a href="https://www.linkedin.com/company/eco-brand-japan/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>LinkedIn page</a> or the careers page for future updates.</>
                  : <>Thank you for your enthusiasm about this opportunity. The role has been filled and we are not collecting new submissions. Please keep an eye on the careers page for future roles.</>)}
          </p>
        </div>
        <div className="actions">
          {open && job.formUrl ? (
            <a className="btn-primary" href={job.formUrl} target="_blank" rel="noopener noreferrer">
              <span>Open application form</span>
              <span className="arrow"></span>
            </a>
          ) : open ? (
            <a className="btn-primary" href={`mailto:careers@ecobrandjapan.com?subject=${encodeURIComponent('Application · ' + job.plainTitle)}`}>
              <span>Email your application</span>
              <span className="arrow"></span>
            </a>
          ) : (
            <a className="btn-primary" href="/careers/">
              <span>Back to open roles</span>
              <span className="arrow"></span>
            </a>
          )}
          <a className="btn-ghost" href="/careers/">← All roles</a>
        </div>
      </div>

      {open && job.formUrl && (
        <div className="job-embed">
          <p className="job-embed-fallback">
            The application form will open in a new tab when you click the button above.
          </p>
        </div>
      )}
    </section>
  );
}
Object.assign(window, { JobApply });
