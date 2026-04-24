function JobApply({ job }) {
  const isJp = window.SITE_LANG === 'jp';
  const open = job.status === 'open';
  const applyNum = String((job.sections?.length || 0) + 2).padStart(2, '0');

  return (
    <section className="job-apply" id="apply">
      <div className="section-label">
        <span className="num">§ {applyNum}</span>
        <span className="title">{isJp ? '応募' : 'Apply'}</span>
        <span className="spacer" />
      </div>

      <div className="job-apply-grid">
        <div>
          <h2>{isJp ? (open ? <>応募を<em>受け付けています。</em></> : <>この職種は<em>募集終了</em>しました。</>) : (open ? <>Apply <em>now</em>.</> : <>This role is <em>closed</em>.</>)}</h2>
          <p>
            {isJp
              ? (open
                  ? (job.formUrl
                      ? '応募フォームから必要事項をご送信ください。書類を確認のうえ、通過された方へ次のステップをご案内します。'
                      : '履歴書・職務経歴書と簡単なメッセージをお送りください。')
                  : <>ご関心をお寄せいただきありがとうございます。現在この職種の新規応募は受け付けていません。今後の募集は採用情報ページをご確認ください。</>)
              : open
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
              <span>{isJp ? '応募フォームを開く' : 'Open application form'}</span>
              <span className="arrow"></span>
            </a>
          ) : open ? (
            <a className="btn-primary" href={`mailto:careers@ecobrandjapan.com?subject=${encodeURIComponent('Application · ' + job.plainTitle)}`}>
              <span>{isJp ? 'メールで応募する' : 'Email your application'}</span>
              <span className="arrow"></span>
            </a>
          ) : (
            <a className="btn-primary" href={isJp ? '/ja/careers/' : '/careers/'}>
              <span>{isJp ? '採用情報へ戻る' : 'Back to open roles'}</span>
              <span className="arrow"></span>
            </a>
          )}
          <a className="btn-ghost" href={isJp ? '/ja/careers/' : '/careers/'}>← {isJp ? 'すべての職種' : 'All roles'}</a>
        </div>
      </div>

      {open && job.formUrl && (
        <div className="job-embed">
          <p className="job-embed-fallback">
            {isJp ? '上のボタンを押すと、応募フォームが新しいタブで開きます。' : 'The application form will open in a new tab when you click the button above.'}
          </p>
        </div>
      )}
    </section>
  );
}
Object.assign(window, { JobApply });
