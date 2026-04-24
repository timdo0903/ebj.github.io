function ContactHero() {
  const isJp = window.SITE_LANG === 'jp';

  return (
    <header className="page-hero" style={{ paddingBottom: 40 }}>
      <div className="meta">
        <div><span style={{ color: 'var(--accent)' }}>•</span>&nbsp;&nbsp;{isJp ? '通常24時間以内に返信' : 'Usually replies within 24h'}</div>
        <div className="jp">ご連絡</div>
        <div>N°005 · {isJp ? 'お問い合わせ' : 'Contact'}</div>
      </div>

      <window.FadeUp>
        <h1>
          {isJp ? (
            <>
              <span className="reveal-line"><span>ご相談は、</span></span>
              <span className="reveal-line"><span><em>いつもの窓口へ。</em><span className="kanji">縁</span></span></span>
            </>
          ) : (
            <>
              <span className="reveal-line"><span>Say hello,</span></span>
              <span className="reveal-line"><span>in any of <em>six</em></span></span>
              <span className="reveal-line"><span><em>languages.</em><span className="kanji">縁</span></span></span>
            </>
          )}
        </h1>
      </window.FadeUp>

      <window.FadeUp delay={180}>
        <p className="lede">
          {isJp
            ? '東京のコンシェルジュチームが平日にメッセージを確認しています。コレクター、パートナー、プレス、採用に関するご連絡まで、同じ窓口から適切な担当へつなぎます。'
            : "Our concierge team reads messages every weekday in Tokyo, with support from Paris. Whether you're a collector, a partner maison, a distributor, or press, the same people will write you back."}
        </p>
      </window.FadeUp>
    </header>
  );
}
Object.assign(window, { ContactHero });
