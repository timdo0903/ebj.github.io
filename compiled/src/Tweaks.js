"use strict";

function Tweaks({
  values,
  setValues
}) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onMsg = e => {
      if (!e.data || typeof e.data !== 'object') return;
      if (e.data.type === '__activate_edit_mode') setOpen(true);
      if (e.data.type === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const update = (key, val) => {
    const next = {
      ...values,
      [key]: val
    };
    setValues(next);
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits: {
        [key]: val
      }
    }, '*');
  };
  if (!open) return null;
  const Seg = ({
    k,
    options
  }) => React.createElement("div", {
    className: "seg"
  }, options.map(o => React.createElement("button", {
    key: o.v,
    className: values[k] === o.v ? 'active' : '',
    onClick: () => update(k, o.v)
  }, o.l)));
  return React.createElement("div", {
    className: "tweaks open"
  }, React.createElement("div", {
    className: "tweaks-head"
  }, React.createElement("span", {
    className: "t"
  }, "Tweaks"), React.createElement("span", {
    className: "jp"
  }, "\u8ABF\u6574"), React.createElement("button", {
    className: "x",
    onClick: () => setOpen(false)
  }, "\xD7")), React.createElement("div", {
    className: "tweak-row"
  }, React.createElement("div", {
    className: "label"
  }, "Palette"), React.createElement(Seg, {
    k: "theme",
    options: [{
      v: 'stone',
      l: 'Stone'
    }, {
      v: 'bone',
      l: 'Bone'
    }, {
      v: 'paper',
      l: 'Paper'
    }, {
      v: 'ink',
      l: 'Ink'
    }]
  })), React.createElement("div", {
    className: "tweak-row"
  }, React.createElement("div", {
    className: "label"
  }, "Accent"), React.createElement("div", {
    className: "swatch-row"
  }, [{
    v: 'brass',
    c: '#8a7545'
  }, {
    v: 'forest',
    c: '#2d3a2a'
  }, {
    v: 'rust',
    c: '#8a4a2d'
  }].map(s => React.createElement("button", {
    key: s.v,
    className: values.accent === s.v ? 'active' : '',
    style: {
      background: s.c
    },
    onClick: () => update('accent', s.v),
    "aria-label": s.v
  })))), React.createElement("div", {
    className: "tweak-row"
  }, React.createElement("div", {
    className: "label"
  }, "Motion"), React.createElement(Seg, {
    k: "motion",
    options: [{
      v: 'subtle',
      l: 'Subtle'
    }, {
      v: 'moderate',
      l: 'Moderate'
    }, {
      v: 'rich',
      l: 'Rich'
    }]
  })));
}
Object.assign(window, {
  Tweaks
});