"use strict";

function ContactApp() {
  const [tweaks] = React.useState(window.TWEAKS);
  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', tweaks.theme);
    root.setAttribute('data-accent', tweaks.accent);
    root.setAttribute('data-motion', tweaks.motion || 'moderate');
    root.setAttribute('data-kanji', tweaks.kanjiProminence || 'balanced');
  }, [tweaks]);
  return React.createElement(React.Fragment, null, React.createElement(window.SubpageNav, {
    current: "contact"
  }), React.createElement(window.ContactHero, null), React.createElement(window.ContactMain, null), React.createElement(window.Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(ContactApp, null));