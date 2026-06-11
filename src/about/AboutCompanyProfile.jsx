function AboutCompanyProfile() {
  const isJp = window.SITE_LANG === 'jp';
  const rows = isJp
    ? [
        { label: '設立', value: '2012年1月5日' },
        { label: '資本金', value: '3,500万円' },
        { label: '従業員数', value: '20名' },
        { label: '所在地', value: '〒106-0047 東京都港区南麻布4-12-25' },
        { label: '法人番号', value: '0104-01-097558' },
        { label: '電話番号', value: '03-6912-2532' },
        { label: '許可', value: '古物商許可' },
      ]
    : [
        { label: 'Founded', value: 'January 5, 2012' },
        { label: 'Capital', value: 'JPY 35,000,000' },
        { label: 'Employees', value: '20' },
        { label: 'Office', value: '4-12-25 Minamiazabu, Minato-ku, Tokyo 106-0047' },
        { label: 'Corporate Number', value: '0104-01-097558' },
        { label: 'Phone', value: '03-6912-2532' },
        { label: 'License', value: 'Secondhand Goods Dealer License / Kobutsusho Kyoka / 古物商許可' },
      ];

  return (
    <section className="company-profile" id="company-profile">
      <div className="section-label">
        <span className="num">§ 06</span>
        <span className="title">{isJp ? '会社概要' : 'Company Profile'}</span>
        <span className="spacer" />
        <span className="jp">会社情報</span>
      </div>

      <div className="company-profile-grid">
        <window.FadeUp>
          <div className="company-profile-kicker">{isJp ? '会社情報' : 'Legal profile'}</div>
          <h2>
            {isJp ? <>東京を拠点に、<em>信頼を積み重ねる会社</em>として。</> : <>A Tokyo company, built for <em>trust and continuity.</em></>}
          </h2>
          <p>
            {isJp
              ? 'Eco Brand Japanは、2012年の創業以来、ラグジュアリーアイテムを丁寧に受け取り、確認し、次の持ち主へつなぐ事業を東京から続けています。'
              : 'Since 2012, Eco Brand Japan has operated from Tokyo with a clear, verifiable company foundation behind every item we source, authenticate, care for, and pass forward.'}
          </p>
        </window.FadeUp>

        <window.FadeUp delay={120}>
          <dl className="company-profile-list">
            {rows.map((row) => (
              <div className="company-profile-row" key={row.label}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </window.FadeUp>
      </div>
    </section>
  );
}
Object.assign(window, { AboutCompanyProfile });
