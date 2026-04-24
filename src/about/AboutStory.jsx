function AboutStory() {
  return (
    <section className="about-story" id="story">
      <div className="section-label">
        <span className="num">§ 03</span>
        <span className="title">Our Story</span>
        <span className="spacer" />
        <span className="jp">由来</span>
      </div>

      <div className="about-story-grid">
        <window.FadeUp>
          <div className="kanji-big">継</div>
          <div className="kanji-cap">
            KEI · to continue, to inherit
            <em>The thread that connects one guardian to the next.</em>
          </div>
        </window.FadeUp>

        <window.FadeUp delay={120}>
          <h2>Founded by collectors, for <em>collectors.</em></h2>
          <p>
            In 2012, our founder, a long-time collector of vintage leather goods, noticed the same pattern across Tokyo: exquisite bags, quietly unused, often beautiful but for a missing stitch or a dulled clasp. The market was happy to resell them in a rush. Few were willing to spend a week restoring one by hand.
          </p>
          <p>
            We started small. A bench in Tokyo, a single loupe, and a simple principle: no piece leaves the atelier unless it would make its next owner proud. That principle hasn't changed. What has changed is the team around it: craftspeople, authenticators, photographers, concierges, each one bringing a discipline, a language, a taste.
          </p>

          <p className="serif-quote">
            "We don't resell bags. We introduce a piece to its next chapter, and we ask ourselves whether we'd be comfortable carrying it ourselves."
          </p>

          <p>
            Today Eco Brand Japan partners with private collectors, estates, and distributors across Asia, Europe and North America. We remain a small studio by design, because authentication, restoration and storytelling are crafts that scale only by the number of careful hands you have.
          </p>
        </window.FadeUp>
      </div>
    </section>
  );
}
Object.assign(window, { AboutStory });
