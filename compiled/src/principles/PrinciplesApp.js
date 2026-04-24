"use strict";

function PrinciplesApp() {
  const [tweaks] = React.useState(window.TWEAKS);
  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', tweaks.theme);
    root.setAttribute('data-accent', tweaks.accent);
    root.setAttribute('data-motion', tweaks.motion || 'moderate');
    root.setAttribute('data-kanji', tweaks.kanjiProminence || 'balanced');
  }, [tweaks]);
  return React.createElement(React.Fragment, null, React.createElement(window.SubpageNav, {
    current: "principles"
  }), React.createElement(window.PrinciplesHero, null), React.createElement(window.PrincipleAuthenticity, null), React.createElement(window.PrincipleSustainability, null), React.createElement(window.PrincipleRelationships, null), React.createElement(window.CTABlock, {
    eyebrow: "Questions or partnership",
    title: React.createElement(React.Fragment, null, "These are the ", React.createElement("em", null, "rules of the atelier.")),
    body: "If you'd like to understand any of them in more detail, or discuss a partnership with us, our concierge team will be glad to hear from you.",
    primary: {
      label: 'Get in touch',
      href: 'contact.html'
    },
    secondary: {
      label: 'View current highlights →',
      href: 'highlights.html'
    }
  }), React.createElement(window.Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(PrinciplesApp, null));