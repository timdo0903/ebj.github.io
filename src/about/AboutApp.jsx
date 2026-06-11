function AboutApp() {
  const [tweaks] = React.useState(window.TWEAKS);
  const isJp = window.SITE_LANG === 'jp';

  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', tweaks.theme);
    root.setAttribute('data-accent', tweaks.accent);
    root.setAttribute('data-motion', tweaks.motion || 'moderate');
    root.setAttribute('data-kanji', tweaks.kanjiProminence || 'balanced');
  }, [tweaks]);

  return (
    <>
      <window.SubpageNav current="about" />
      <window.AboutHero />
      <window.AboutImpact />
      <window.AboutStory />
      <window.AboutAtelier />
      <window.AboutTeam />
      <window.AboutProcess />
      <window.AboutCompanyProfile />
      <window.CTABlock
        eyebrow={isJp ? 'お問い合わせ' : 'Work with us'}
        title={isJp ? <>関係は、<em>対話から。</em></> : <>Two ways to <em>begin a relationship.</em></>}
        body={isJp ? '委託をご検討中のコレクターの方も、循環型ラグジュアリーの取り組みを進めるパートナーの方も。まずは静かにお話をお聞かせください。' : "Whether you're a collector considering consignment, or a distributor building a circular luxury programme, our concierge team is ready to listen."}
        primary={{ label: isJp ? '問い合わせる' : 'Get in touch', href: isJp ? '/ja/contact/' : '/contact/' }}
        secondary={{ label: isJp ? '採用情報を見る' : 'View open roles →', href: isJp ? '/ja/careers/' : '/careers/' }}
      />
      <window.Footer />
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<AboutApp />);
