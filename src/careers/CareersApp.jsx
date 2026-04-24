function CareersApp() {
  const [tweaks, setTweaks] = React.useState(window.TWEAKS);

  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', tweaks.theme);
    root.setAttribute('data-accent', tweaks.accent);
    root.setAttribute('data-motion', tweaks.motion);
  }, [tweaks]);

  return (
    <>
      <window.NavCareers />
      <window.CareersHero />
      <window.CareersIntro />
      <window.OpenRoles />
      <window.Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CareersApp />);
