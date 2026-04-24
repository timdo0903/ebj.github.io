"use strict";

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
  return React.createElement(React.Fragment, null, React.createElement(window.SubpageNav, {
    current: "principles"
  }), React.createElement(window.PrinciplesHero, null), React.createElement(window.PrincipleAuthenticity, null), React.createElement(window.PrincipleSustainability, null), React.createElement(window.PrincipleRelationships, null), React.createElement(window.CTABlock, {
    eyebrow: isJp ? 'ご相談・パートナーシップ' : 'Questions or partnership',
    title: isJp ? React.createElement(React.Fragment, null, "\u30A2\u30C8\u30EA\u30A8\u306E", React.createElement("em", null, "\u57FA\u6E96\u3067\u3059\u3002")) : React.createElement(React.Fragment, null, "These are the ", React.createElement("em", null, "rules of the atelier.")),
    body: isJp ? '詳しく知りたい約束がある場合や、パートナーシップについて話したい場合は、コンシェルジュチームへご連絡ください。' : "If you'd like to understand any of them in more detail, or discuss a partnership with us, our concierge team will be glad to hear from you.",
    primary: {
      label: isJp ? '問い合わせる' : 'Get in touch',
      href: isJp ? '/ja/contact/' : '/contact/'
    },
    secondary: {
      label: isJp ? 'ハイライトを見る' : 'View current highlights →',
      href: isJp ? '/ja/highlights/' : '/highlights/'
    }
  }), React.createElement(window.Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(PrinciplesApp, null));