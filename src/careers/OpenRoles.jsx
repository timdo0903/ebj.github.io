function OpenRoles() {
  const isJp = window.SITE_LANG === 'jp';
  const pausedSeasonalRoleStatus = 'closed';
  const roles = isJp
    ? [
        { num: 'I', title: '物流スペシャリスト', type: '正社員 · 東京', blurb: '入荷、保管、移動、出荷までの日々の物流を正確に進め、必要に応じて在庫業務も支えます。', status: 'open', href: '/ja/job-detail/?role=logistics-specialist' },
        { num: 'II', title: '在庫・物流スペシャリスト', type: '正社員 · 東京', blurb: '商品情報の正確性を守り、出荷や社内横断プロジェクトを支えます。', status: pausedSeasonalRoleStatus, href: '/ja/job-detail/?role=inventory-logistics-specialist' },
        { num: 'III', title: '商品フォトグラファー', type: '正社員 · 東京', blurb: '一点ごとの魅力と状態を、マーケットプレイスやマーケティング向けに撮影します。', status: pausedSeasonalRoleStatus, href: '/ja/job-detail/?role=product-photographer' },
        { num: 'IV', title: 'ラグジュアリーバイヤー', type: '正社員 · 東京 / 出張あり', blurb: '信頼できるパートナーと連携し、ラグジュアリーコレクションを仕入れ、評価します。', status: 'closed', href: '/ja/job-detail/?role=buyers-position' },
        { num: 'V', title: 'ライブセラー / SNSオペレーター', type: 'パートタイム · 東京', blurb: 'ライブ配信と日々のコンテンツで、コミュニティを育てます。', status: 'closed', href: '/ja/job-detail/?role=live-seller-social-media-operator' },
      ]
    : [
        { num: 'I', title: 'Logistics Specialist', type: 'Full-time · Tokyo, Japan', blurb: 'Coordinate daily receiving, storage, transfers and shipments, with occasional inventory support as needed.', status: 'open', href: '/job-detail/?role=logistics-specialist' },
        { num: 'II', title: 'Inventory & Logistics Specialist', type: 'Full-time · Tokyo, Japan', blurb: 'Safeguard product accuracy, coordinate shipments and support cross-functional projects.', status: pausedSeasonalRoleStatus, href: '/job-detail/?role=inventory-logistics-specialist' },
        { num: 'III', title: 'Product Photographer', type: 'Full-time · Tokyo, Japan', blurb: 'Capture the craftsmanship of every piece for marketplaces and marketing channels.', status: pausedSeasonalRoleStatus, href: '/job-detail/?role=product-photographer' },
        { num: 'IV', title: 'Luxury Buyer', type: 'Full-time · Tokyo, Japan', blurb: 'Source, evaluate and authenticate luxury collections with trusted partners worldwide.', status: 'closed', href: '/job-detail/?role=buyers-position' },
        { num: 'V', title: 'Live Seller & Social Media Operator', type: 'Part-time · Tokyo, Japan', blurb: 'Combine on-camera livestream selling with daily content to grow our community.', status: 'closed', href: '/job-detail/?role=live-seller-social-media-operator' },
      ];

  return (
    <section className="roles" id="open-roles">
      <div className="section-label">
        <span className="num">§ 02</span>
        <span className="title">{isJp ? '職種一覧' : 'Roles'}</span>
        <span className="spacer" />
      </div>

      <div className="roles-header">
        <h2>{isJp ? <>物流ポジションを<em>募集中</em>です。</> : <>Now hiring for <em>logistics</em>.</>}</h2>
        <p>{isJp ? '現在、物流スペシャリストの応募を受け付けています。その他の職種は今後の募集再開に備えて、職種内容を掲載しています。' : 'We are accepting applications for the Logistics Specialist role. Other role descriptions remain available in case hiring reopens in the future.'}</p>
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
