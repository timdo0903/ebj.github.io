"use strict";

function AboutApp() {
  const [tweaks] = React.useState(window.TWEAKS);
  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', tweaks.theme);
    root.setAttribute('data-accent', tweaks.accent);
    root.setAttribute('data-motion', tweaks.motion || 'moderate');
    root.setAttribute('data-kanji', tweaks.kanjiProminence || 'balanced');
  }, [tweaks]);
  return React.createElement(React.Fragment, null, React.createElement(window.SubpageNav, {
    current: "about"
  }), React.createElement(window.AboutHero, null), React.createElement(window.AboutImpact, null), React.createElement(window.AboutStory, null), React.createElement(window.AboutAtelier, null), React.createElement(window.AboutTeam, null), React.createElement(window.AboutProcess, null), React.createElement(window.CTABlock, {
    eyebrow: "Work with us",
    title: React.createElement(React.Fragment, null, "Two ways to ", React.createElement("em", null, "begin a relationship.")),
    body: "Whether you're a collector considering consignment, or a distributor building a circular luxury programme, our concierge team is ready to listen.",
    primary: {
      label: 'Get in touch',
      href: 'contact.html'
    },
    secondary: {
      label: 'View open roles →',
      href: 'careers.html'
    }
  }), React.createElement(window.Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(AboutApp, null));