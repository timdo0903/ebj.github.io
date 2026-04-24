function CareersIntro() {
  const benefits = [
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
        <span className="title">Our Team</span>
        <span className="spacer" />
      </div>

      <div className="careers-intro-grid">
        <window.FadeUp>
          <h2>Storytellers for <em>iconic</em> fashion houses.</h2>
          <p>
            We curate and authenticate rare handbags from Hermès, Chanel, Louis Vuitton and their peers, and advocate for a circular economy in luxury.
          </p>
          <p>
            If you thrive on collaboration, problem solving and connecting with global partners, you'll feel at home. From sourcing in bustling marketplaces to curating digital campaigns, every role contributes to the life and afterlife of a piece.
          </p>
        </window.FadeUp>

        <window.FadeUp delay={120}>
          <div style={{ marginBottom: 28 }}>
            <div className="eyebrow"><span className="dot"></span>Why work with us</div>
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
