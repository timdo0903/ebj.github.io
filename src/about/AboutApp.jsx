function AboutApp() {
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
      <window.SubpageNav current="about" />
      <window.AboutHero />
      <window.AboutImpact />
      <window.AboutStory />
      <window.AboutAtelier />
      <window.AboutTeam />
      <window.AboutProcess />
      <window.CTABlock
        eyebrow="Work with us"
        title={<>Two ways to <em>begin a relationship.</em></>}
        body="Whether you're a collector considering consignment, or a distributor building a circular luxury programme, our concierge team is ready to listen."
        primary={{ label: 'Get in touch', href: '/contact/' }}
        secondary={{ label: 'View open roles →', href: '/careers/' }}
      />
      <window.Footer />
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<AboutApp />);
