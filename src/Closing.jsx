function Closing() {
  const isJp = window.SITE_LANG === 'jp';

  return (
    <section className="closing" id="careers">
      <div className="section-label">
        <span className="num">S 04</span>
        <span className="title">{isJp ? '次の章へ' : 'The Next Chapter'}</span>
        <span className="spacer" />
      </div>

      <window.FadeUp>
        <h2 className={`closing-big${isJp ? ' closing-big-jp' : ''}`}>
          {isJp ? (
            <>
              ともに、<br />
              次のラグジュアリーを<br />
              つくっていく。
            </>
          ) : (
            <>
              Let's shape the<br />
              <em>future</em> of <span className="outline">sustainable</span><br />
              luxury, together.
            </>
          )}
        </h2>
      </window.FadeUp>

      <div className="closing-sub">
        <window.FadeUp delay={100}>
          <p>
            {isJp
              ? 'お客様のコレクションのご相談でも、クライアント向けのキュレーションでも。多言語対応のチームが、査定からストーリーテリングまで、ひとつひとつ丁寧に伴走します。'
              : 'Bring your collection, or curate ours for your clients. Our multilingual team orchestrates every detail, from valuation to storytelling, with the care the pieces deserve.'}
          </p>
        </window.FadeUp>
        <window.FadeUp delay={180} className="closing-actions">
          <a className="btn-primary" href="contact.html">
            <span>{isJp ? 'ご相談はこちら' : 'Begin a conversation'}</span>
            <span className="arrow"></span>
          </a>
          <a className="btn-ghost" href="careers.html">{isJp ? '採用情報を見る' : 'View open roles'}</a>
        </window.FadeUp>
      </div>
    </section>
  );
}

Object.assign(window, { Closing });
