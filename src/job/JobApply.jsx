function JobApply({ job }) {
  const isJp = window.SITE_LANG === 'jp';
  const open = job.status === 'open';
  const applyNum = String((job.sections?.length || 0) + 2).padStart(2, '0');
  const { submitForm, status, submitting } = window.useManagedForm({
    formKey: job.slug || job.plainTitle,
    successMessage: isJp ? '応募を受け付けました。書類を確認のうえ、通過された方へご連絡します。' : 'Thanks for applying. We will contact shortlisted candidates via email.',
    errorMessage: isJp ? '送信できませんでした。時間をおいて再度お試しいただくか、メールでご応募ください。' : 'We could not submit your application. Please try again later or email your application.',
    submittingMessage: isJp ? '応募を送信中...' : 'Submitting your application...',
  });

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
                  ? '履歴書・職務経歴書と簡単なメッセージをお送りください。書類を確認のうえ、通過された方へ次のステップをご案内します。'
                  : <>ご関心をお寄せいただきありがとうございます。現在この職種の新規応募は受け付けていません。今後の募集は採用情報ページをご確認ください。</>)
              : open
              ? 'Submit your resume, portfolio if relevant, and a short note. Our hiring team will contact shortlisted candidates with next steps.'
              : (job.plainTitle.toLowerCase().includes('buyer')
                  ? <>Thank you for your interest in the Luxury Buyer role. The position has been filled and we are no longer accepting applications. Please follow our <a href="https://www.linkedin.com/company/eco-brand-japan/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>LinkedIn page</a> or the careers page for future updates.</>
                  : <>Thank you for your enthusiasm about this opportunity. The role has been filled and we are not collecting new submissions. Please keep an eye on the careers page for future roles.</>)}
          </p>
	        </div>
	        <div className="actions">
	          {!open && (
	            <a className="btn-primary" href={isJp ? '/ja/careers/' : '/careers/'}>
	              <span>{isJp ? '採用情報へ戻る' : 'Back to open roles'}</span>
	              <span className="arrow"></span>
	            </a>
	          )}
          <a className="btn-ghost" href={isJp ? '/ja/careers/' : '/careers/'}>← {isJp ? 'すべての職種' : 'All roles'}</a>
        </div>
      </div>

      {open && (
        <div className="job-embed">
          <form className="site-form application-form" onSubmit={submitForm}>
            <input type="hidden" name="formType" value="job-application" />
            <input type="hidden" name="language" value={isJp ? 'ja' : 'en'} />
            <input type="hidden" name="role" value={job.plainTitle} />
            <input type="hidden" name="roleSlug" value={job.slug || ''} />
            <div className="form-grid two">
              <label>
                <span>{isJp ? 'お名前' : 'Name'}</span>
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                <span>{isJp ? 'メールアドレス' : 'Email'}</span>
                <input name="email" type="email" autoComplete="email" required />
              </label>
            </div>
            <div className="form-grid two">
              <label>
                <span>{isJp ? '電話番号' : 'Phone'}</span>
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
              <label>
                <span>{isJp ? '現在の居住地' : 'Current location'}</span>
                <input name="location" type="text" autoComplete="address-level2" />
              </label>
            </div>
            <label>
              <span>{isJp ? 'LinkedIn / ポートフォリオURL' : 'LinkedIn / portfolio URL'}</span>
              <input name="portfolioUrl" type="url" placeholder="https://" />
            </label>
            <label>
              <span>{isJp ? 'メッセージ' : 'Short note'}</span>
              <textarea name="message" rows="6" required></textarea>
            </label>
            <div className="form-grid two">
              <label>
                <span>{isJp ? '履歴書・職務経歴書' : 'Resume / CV'}</span>
                <input name="resume" type="file" accept=".pdf,.doc,.docx,.txt,.rtf" required />
              </label>
              <label>
                <span>{isJp ? 'ポートフォリオなど任意書類' : 'Optional portfolio file'}</span>
                <input name="portfolioFile" type="file" accept=".pdf,.zip,.jpg,.jpeg,.png,.webp" />
              </label>
            </div>
            <input className="form-trap" type="text" name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" />
            <div className="form-submit-row">
              <p>{isJp ? '各ファイル10MBまで、合計20MBまで送信できます。' : 'Upload up to 10 MB per file, 20 MB total.'}</p>
              <button className="btn-primary" type="submit" disabled={submitting}>
                <span>{submitting ? (isJp ? '送信中' : 'Submitting') : (isJp ? '応募を送信' : 'Submit application')}</span>
                <span className="arrow"></span>
              </button>
            </div>
            <div className={`form-status ${status.type}`} role="status" aria-live="polite">
              {status.message}
            </div>
          </form>
        </div>
      )}
    </section>
  );
}
Object.assign(window, { JobApply });
