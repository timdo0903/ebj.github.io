function PrinciplesApp() {
  const [tweaks] = React.useState(window.TWEAKS);
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
        eyebrow="Questions or partnership"
        title={<>These are the <em>rules of the atelier.</em></>}
        body="If you'd like to understand any of them in more detail, or discuss a partnership with us, our concierge team will be glad to hear from you."
        primary={{ label: 'Get in touch', href: 'contact.html' }}
        secondary={{ label: 'View current highlights →', href: 'highlights.html' }}
      />
      <window.Footer />
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<PrinciplesApp />);
