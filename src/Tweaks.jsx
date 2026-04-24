function Tweaks({ values, setValues }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onMsg = (e) => {
      if (!e.data || typeof e.data !== 'object') return;
      if (e.data.type === '__activate_edit_mode') setOpen(true);
      if (e.data.type === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const update = (key, val) => {
    const next = { ...values, [key]: val };
    setValues(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [key]: val } }, '*');
  };

  if (!open) return null;

  const Seg = ({ k, options }) => (
    <div className="seg">
      {options.map((o) => (
        <button
          key={o.v}
          className={values[k] === o.v ? 'active' : ''}
          onClick={() => update(k, o.v)}
        >
          {o.l}
        </button>
      ))}
    </div>
  );

  return (
    <div className="tweaks open">
      <div className="tweaks-head">
        <span className="t">Tweaks</span>
        <span className="jp">調整</span>
        <button className="x" onClick={() => setOpen(false)}>×</button>
      </div>

      <div className="tweak-row">
        <div className="label">Palette</div>
        <Seg k="theme" options={[
          { v: 'stone', l: 'Stone' },
          { v: 'bone', l: 'Bone' },
          { v: 'paper', l: 'Paper' },
          { v: 'ink', l: 'Ink' },
        ]} />
      </div>

      <div className="tweak-row">
        <div className="label">Accent</div>
        <div className="swatch-row">
          {[
            { v: 'brass', c: '#8a7545' },
            { v: 'forest', c: '#2d3a2a' },
            { v: 'rust', c: '#8a4a2d' },
          ].map((s) => (
            <button
              key={s.v}
              className={values.accent === s.v ? 'active' : ''}
              style={{ background: s.c }}
              onClick={() => update('accent', s.v)}
              aria-label={s.v}
            />
          ))}
        </div>
      </div>

      <div className="tweak-row">
        <div className="label">Motion</div>
        <Seg k="motion" options={[
          { v: 'subtle', l: 'Subtle' },
          { v: 'moderate', l: 'Moderate' },
          { v: 'rich', l: 'Rich' },
        ]} />
      </div>
    </div>
  );
}

Object.assign(window, { Tweaks });
