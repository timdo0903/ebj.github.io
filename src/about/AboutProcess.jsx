function AboutProcess() {
  const steps = [
    {
      num: 'I',
      title: <>Sourcing<small>入荷 · Nyūka</small></>,
      desc: 'We acquire from private collectors, estates, trusted distributors and wholesale channels across Asia, Europe and North America. Every intake is logged, photographed and assigned a dossier before it reaches the bench, regardless of origin.',
      time: '1–2 days',
    },
    {
      num: 'II',
      title: <><em>Authentication</em><small>鑑定 · Kantei</small></>,
      desc: 'Every single item we buy is carefully inspected and authenticated by our lead authenticators: hardware, stitching, leather grain, stamping, date codes, and a proprietary checklist tailored to each maison. Nothing ambiguous proceeds.',
      time: '2–5 days',
    },
    {
      num: 'III',
      title: <>Condition reporting<small>診断 · Shindan</small></>,
      desc: 'A written, internal dossier with daylight photographs and measurements. Flaws are described, not hidden. Every dossier is dated and signed by the authenticator responsible, and kept on file for ten years.',
      time: '1 day',
    },
    {
      num: 'IV',
      title: <><em>Hand revive</em><small>手入れ · Teire</small></>,
      desc: 'Gentle cleaning, conditioning, minor stitch work if needed. Never aggressive refinishing. The intent is to return a piece to its quiet, honest best, not to pretend it is new.',
      time: '3–10 days',
    },
    {
      num: 'V',
      title: <>In-house photography<small>撮影 · Satsuei</small></>,
      desc: 'Every piece is photographed in our in-house studio by a professional photographer: clean white background, 10+ shots covering front, back, bottom, sides, interior and production code. Honest colour, no retouching of patina.',
      time: '1 day',
    },
    {
      num: 'VI',
      title: <><em>Partner release</em><small>受け渡し · Ukewatashi</small></>,
      desc: 'Introduced to a collector, distributor, or returned to consignment. Packaging is hand-wrapped, traceable, and low-impact. Three signatures before a piece leaves the atelier.',
      time: 'On request',
    },
  ];

  return (
    <section className="process" id="process">
      <div className="section-label">
        <span className="num">§ 05</span>
        <span className="title">Our Process</span>
        <span className="spacer" />
        <span className="jp">工程</span>
      </div>

      <window.FadeUp>
        <h2 style={{
          fontFamily: 'var(--serif)', fontWeight: 300,
          fontSize: 'clamp(36px, 4.4vw, 60px)', lineHeight: 1.05,
          letterSpacing: '-0.01em', margin: '0 0 40px', maxWidth: '18ch', textWrap: 'balance',
        }}>
          Six quiet steps, <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>every time.</em>
        </h2>
      </window.FadeUp>

      <div className="process-list">
        {steps.map((s, i) => (
          <div className="process-row" key={i}>
            <div className="num">Step {s.num}</div>
            <div className="title">{s.title}</div>
            <div className="desc">{s.desc}</div>
            <div className="time">{s.time}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
Object.assign(window, { AboutProcess });
