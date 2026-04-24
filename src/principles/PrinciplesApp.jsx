function PrinciplesApp() {
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
      <window.SubpageNav current="principles" />
      <window.PrinciplesHero />
      <window.PrincipleAuthenticity />
      <window.PrincipleSustainability />
      <window.PrincipleRelationships />
      <window.CTABlock
        eyebrow={isJp ? 'ご相談・パートナーシップ' : 'Questions or partnership'}
        title={isJp ? <>アトリエの<em>基準です。</em></> : <>These are the <em>rules of the atelier.</em></>}
        body={isJp ? '詳しく知りたい約束がある場合や、パートナーシップについて話したい場合は、コンシェルジュチームへご連絡ください。' : "If you'd like to understand any of them in more detail, or discuss a partnership with us, our concierge team will be glad to hear from you."}
        primary={{ label: isJp ? '問い合わせる' : 'Get in touch', href: isJp ? '/ja/contact/' : '/contact/' }}
        secondary={{ label: isJp ? 'ハイライトを見る' : 'View current highlights →', href: isJp ? '/ja/highlights/' : '/highlights/' }}
      />
      <window.Footer />
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<PrinciplesApp />);
