function ContactApp() {
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
      <window.SubpageNav current="contact" />
      <window.ContactHero />
      <window.ContactMain />
      <window.Footer />
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<ContactApp />);
