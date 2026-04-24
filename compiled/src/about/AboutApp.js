"use strict";

function AboutApp() {
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
    current: "about"
  }), React.createElement(window.AboutHero, null), React.createElement(window.AboutImpact, null), React.createElement(window.AboutStory, null), React.createElement(window.AboutAtelier, null), React.createElement(window.AboutTeam, null), React.createElement(window.AboutProcess, null), React.createElement(window.CTABlock, {
    eyebrow: isJp ? 'お問い合わせ' : 'Work with us',
    title: isJp ? React.createElement(React.Fragment, null, "\u95A2\u4FC2\u306F\u3001", React.createElement("em", null, "\u5BFE\u8A71\u304B\u3089\u3002")) : React.createElement(React.Fragment, null, "Two ways to ", React.createElement("em", null, "begin a relationship.")),
    body: isJp ? '委託をご検討中のコレクターの方も、循環型ラグジュアリーの取り組みを進めるパートナーの方も。まずは静かにお話をお聞かせください。' : "Whether you're a collector considering consignment, or a distributor building a circular luxury programme, our concierge team is ready to listen.",
    primary: {
      label: isJp ? '問い合わせる' : 'Get in touch',
      href: isJp ? '/ja/contact/' : '/contact/'
    },
    secondary: {
      label: isJp ? '採用情報を見る' : 'View open roles →',
      href: isJp ? '/ja/careers/' : '/careers/'
    }
  }), React.createElement(window.Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(AboutApp, null));