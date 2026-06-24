function CareersHero() {
  const isJp = window.SITE_LANG === 'jp';

  return (
    <header className="careers-hero">
      <div className="meta">
        <div className="pill">{isJp ? '採用一時停止中' : 'Hiring paused'}</div>
        <div>{isJp ? '採用情報' : 'Careers'} · N°001</div>
      </div>

      <div className="grid">
        <div>
          <h1>
            {isJp ? (
              <>
                <span className="reveal-line"><span>東京で、</span></span>
                <span className="reveal-line"><span><em>一緒に育てる。</em></span></span>
              </>
            ) : (
              <>
                <span className="reveal-line"><span>Grow</span></span>
                <span className="reveal-line"><span><em>with us,</em></span></span>
                <span className="reveal-line"><span>in Tokyo.</span></span>
              </>
            )}
          </h1>
        </div>
        <div>
          <p className="lede">
            {isJp
              ? 'サーキュラー・ラグジュアリーを支える、多言語でアントレプレナーシップのあるチームです。仕入れ、撮影、物流、ストーリーテリングまで、一つひとつの仕事が品物の次の章につながります。'
              : 'Join a multilingual, entrepreneurial team championing circular luxury, where every role, from sourcing to storytelling, elevates preloved treasures for a new generation of collectors.'}
          </p>
          <div style={{ marginTop: 48, display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
            <a className="btn-primary" href="#open-roles">
              <span>{isJp ? '職種を見る' : 'View roles'}</span>
              <span className="arrow"></span>
            </a>
            <a className="btn-ghost" href="#why-us">{isJp ? '働く環境について' : 'Why work with us'}</a>
          </div>
        </div>
      </div>
    </header>
  );
}
Object.assign(window, { CareersHero });
