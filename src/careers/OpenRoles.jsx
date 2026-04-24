function OpenRoles() {
  const roles = [
    {
      num: 'I',
      title: 'Inventory & Logistics Specialist',
      type: 'Full-time · Tokyo, Japan',
      blurb: 'Safeguard product accuracy, coordinate shipments and support cross-functional projects.',
      status: 'open',
      href: '/job-detail/?role=inventory-logistics-specialist',
    },
    {
      num: 'II',
      title: 'Product Photographer',
      type: 'Full-time · Tokyo, Japan',
      blurb: 'Capture the craftsmanship of every piece for marketplaces and marketing channels.',
      status: 'open',
      href: '/job-detail/?role=product-photographer',
    },
    {
      num: 'III',
      title: 'Luxury Buyer',
      type: 'Full-time · Tokyo, Japan',
      blurb: 'Source, evaluate and authenticate luxury collections with trusted partners worldwide.',
      status: 'closed',
      href: '/job-detail/?role=buyers-position',
    },
    {
      num: 'IV',
      title: 'Live Seller & Social Media Operator',
      type: 'Part-time · Tokyo, Japan',
      blurb: 'Combine on-camera livestream selling with daily content to grow our community.',
      status: 'closed',
      href: '/job-detail/?role=live-seller-social-media-operator',
    },
  ];

  return (
    <section className="roles" id="open-roles">
      <div className="section-label">
        <span className="num">§ 02</span>
        <span className="title">Open Roles</span>
        <span className="spacer" />
      </div>

      <div className="roles-header">
        <h2>Now <em>hiring</em>.</h2>
        <p>Two positions are actively reviewing applications. Others remain closed for now, but you're welcome to read the descriptions and introduce yourself.</p>
      </div>

      <div>
        {roles.map((r) => (
          <window.FadeUp key={r.num}>
            <a className="role-row" href={r.href}>
              <div className="num">{r.num}</div>
              <div className="title">
                {r.title}
                <small>{r.type}</small>
              </div>
              <div className="blurb">{r.blurb}</div>
              <div className={`status ${r.status}`}>
                {r.status === 'open' ? 'Applications open' : 'Applications closed'}
              </div>
              <div className="go">
                {r.status === 'open' ? 'Apply' : 'Read role'}
                <span style={{ display: 'inline-block', width: 18, height: 1, background: 'currentColor', position: 'relative' }}>
                  <span style={{ position: 'absolute', right: 0, top: -3, width: 7, height: 7, borderTop: '1px solid currentColor', borderRight: '1px solid currentColor', transform: 'rotate(45deg)' }}></span>
                </span>
              </div>
            </a>
          </window.FadeUp>
        ))}
      </div>
    </section>
  );
}
Object.assign(window, { OpenRoles });
