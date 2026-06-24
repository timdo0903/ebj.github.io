function OpenRoles() {
  const isJp = window.SITE_LANG === 'jp';
  // Reopen the current hiring cycle by changing this value back to 'open'.
  const currentHiringStatus = 'closed';
  const roles = isJp
    ? [
        { num: 'I', title: '在庫・物流スペシャリスト', type: '正社員 · 東京', blurb: '商品情報の正確性を守り、出荷や社内横断プロジェクトを支えます。', status: currentHiringStatus, href: '/ja/job-detail/?role=inventory-logistics-specialist' },
        { num: 'II', title: '商品フォトグラファー', type: '正社員 · 東京', blurb: '一点ごとの魅力と状態を、マーケットプレイスやマーケティング向けに撮影します。', status: currentHiringStatus, href: '/ja/job-detail/?role=product-photographer' },
        { num: 'III', title: 'ラグジュアリーバイヤー', type: '正社員 · 東京 / 出張あり', blurb: '信頼できるパートナーと連携し、ラグジュアリーコレクションを仕入れ、評価します。', status: 'closed', href: '/ja/job-detail/?role=buyers-position' },
        { num: 'IV', title: 'ライブセラー / SNSオペレーター', type: 'パートタイム · 東京', blurb: 'ライブ配信と日々のコンテンツで、コミュニティを育てます。', status: 'closed', href: '/ja/job-detail/?role=live-seller-social-media-operator' },
      ]
    : [
        { num: 'I', title: 'Inventory & Logistics Specialist', type: 'Full-time · Tokyo, Japan', blurb: 'Safeguard product accuracy, coordinate shipments and support cross-functional projects.', status: currentHiringStatus, href: '/job-detail/?role=inventory-logistics-specialist' },
        { num: 'II', title: 'Product Photographer', type: 'Full-time · Tokyo, Japan', blurb: 'Capture the craftsmanship of every piece for marketplaces and marketing channels.', status: currentHiringStatus, href: '/job-detail/?role=product-photographer' },
        { num: 'III', title: 'Luxury Buyer', type: 'Full-time · Tokyo, Japan', blurb: 'Source, evaluate and authenticate luxury collections with trusted partners worldwide.', status: 'closed', href: '/job-detail/?role=buyers-position' },
        { num: 'IV', title: 'Live Seller & Social Media Operator', type: 'Part-time · Tokyo, Japan', blurb: 'Combine on-camera livestream selling with daily content to grow our community.', status: 'closed', href: '/job-detail/?role=live-seller-social-media-operator' },
      ];

  return (
    <section className="roles" id="open-roles">
      <div className="section-label">
        <span className="num">§ 02</span>
        <span className="title">{isJp ? '職種一覧' : 'Roles'}</span>
        <span className="spacer" />
      </div>

      <div className="roles-header">
        <h2>{isJp ? <>現在、<em>募集終了</em>しています。</> : <>Hiring is <em>paused</em>.</>}</h2>
        <p>{isJp ? '今年度の採用枠はすべて充足したため、現在新規応募は受け付けていません。今後募集を再開する場合に備えて、職種内容は掲載しています。' : 'All positions for this hiring cycle have been filled, so we are not accepting new applications right now. Role descriptions remain available in case hiring reopens in the future.'}</p>
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
                {isJp ? (r.status === 'open' ? '応募受付中' : '募集終了') : (r.status === 'open' ? 'Applications open' : 'Applications closed')}
              </div>
              <div className="go">
                {isJp ? (r.status === 'open' ? '応募する' : '詳細を見る') : (r.status === 'open' ? 'Apply' : 'Read role')}
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
