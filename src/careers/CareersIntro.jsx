function CareersIntro() {
  const isJp = window.SITE_LANG === 'jp';
  const benefits = isJp
    ? [
        'ファッション、物流、マーケティング、オペレーションを横断する研修',
        '海外チームと連携する多文化な職場',
        'オンボーディング、メンター制度、定期的な成長面談',
        '外部研修の補助',
        '実績に応じたビザ更新サポート',
        '社会保険完備',
        '働きやすさを意識したチーム運営',
        '国内外出張時の交通・移動サポート',
        '通勤交通費支給',
      ]
    : [
        'Cross-department training in fashion, logistics, marketing, operations',
        'Multicultural workplace, in collaboration with overseas teams',
        'Structured onboarding, mentorship and development check-ins',
        'Allowance for external training',
        'Visa renewal sponsorship after 6 months of proven performance',
        'Social insurance coverage',
        'Work-life balance, by design',
        'Travel coverage for domestic and international assignments',
        'Transportation expenses covered',
      ];

  return (
    <section className="careers-intro" id="why-us">
      <div className="section-label">
        <span className="num">§ 01</span>
        <span className="title">{isJp ? 'チーム' : 'Our Team'}</span>
        <span className="spacer" />
      </div>

      <div className="careers-intro-grid">
        <window.FadeUp>
          <h2>{isJp ? <>アイコニックなメゾンを、<em>次の持ち主へ。</em></> : <>Storytellers for <em>iconic</em> fashion houses.</>}</h2>
          <p>
            {isJp
              ? 'Hermes、Chanel、Louis Vuittonをはじめとする希少なバッグをキュレーションし、真贋を確認し、ラグジュアリーの循環を支えています。'
              : 'We curate and authenticate rare handbags from Hermès, Chanel, Louis Vuitton and their peers, and advocate for a circular economy in luxury.'}
          </p>
          <p>
            {isJp
              ? 'チームで動くこと、課題を見つけて解くこと、海外のパートナーとつながることが好きな方には、きっと合う環境です。マーケットでの仕入れからデジタルキャンペーンまで、どの役割も一点の次の人生につながっています。'
              : "If you thrive on collaboration, problem solving and connecting with global partners, you'll feel at home. From sourcing in bustling marketplaces to curating digital campaigns, every role contributes to the life and afterlife of a piece."}
          </p>
        </window.FadeUp>

        <window.FadeUp delay={120}>
          <div style={{ marginBottom: 28 }}>
            <div className="eyebrow"><span className="dot"></span>{isJp ? '働く環境' : 'Why work with us'}</div>
          </div>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div className="benefit" key={i}>
                <div className="num">{String(i + 1).padStart(2, '0')}</div>
                <div className="text">{b}</div>
              </div>
            ))}
          </div>
        </window.FadeUp>
      </div>
    </section>
  );
}
Object.assign(window, { CareersIntro });
