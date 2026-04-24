function App() {
  const tweaks = window.TWEAKS;

  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', tweaks.theme);
    root.setAttribute('data-accent', tweaks.accent);
    root.setAttribute('data-motion', tweaks.motion);
    root.setAttribute('data-kanji', tweaks.kanjiProminence);
  }, [tweaks]);

  return (
    <>
      <window.Nav />
      <window.Hero />
      <window.Maisons />
      <window.Statement />
      <window.Principles />
      <window.Gallery />
      <window.Closing />
      <window.Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
