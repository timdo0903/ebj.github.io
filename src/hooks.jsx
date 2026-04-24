// Shared hooks · exported to window at the end
const { useState, useEffect, useRef } = React;

function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}

function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, options);
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function FadeUp({ children, delay = 0, as: Tag = 'div', ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`fade-up ${inView ? 'in' : ''} ${rest.className || ''}`}
      style={{ transitionDelay: `${delay}ms`, ...(rest.style || {}) }}
      {...Object.fromEntries(Object.entries(rest).filter(([k]) => k !== 'className' && k !== 'style'))}
    >
      {children}
    </Tag>
  );
}

Object.assign(window, { useScrolled, useInView, FadeUp });
