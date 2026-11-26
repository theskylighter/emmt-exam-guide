/*
  Shared step player for animated explainers (explainer-visuals pattern: "stepped animation with scrubber").

  One progress value t in [0, 1] drives each scene, so Play, Next/Back and the scrubber always agree.
  A scene calls Explainer({ stops, captions, render, ambient? }) where
    stops     sorted t values where Next/Back stop (first 0, last 1)
    captions  one caption per stop (the text for the interval ending at that stop); may contain <b>
    render(t, { clock, user })  draws the frame. `clock` is seconds of ambient time for looping motion
              (carrier streams, photons); `user` is true when the user jumped (Back, Restart, scrubbing)
    ambient(t)  optional: true while the frame has looping motion, so it keeps moving when paused
  Also handles: the study site's light/dark theme, iframe auto-height, and prefers-reduced-motion
  (Play then jumps step to step and ambient motion stays still).
*/
(function () {
  const NS = "http://www.w3.org/2000/svg";
  function Explainer(opt) {
    const { stops, captions, render } = opt;
    const speed = opt.speed || 1 / 14, holdTime = opt.hold ?? 1.1, ambient = opt.ambient || (() => false);
    const root = document.getElementById("root");
    const ui = document.createElement("div");
    ui.innerHTML = `<div class="controls">
        <button type="button" data-a="restart">Restart</button>
        <button type="button" data-a="back" aria-label="Previous step">Back</button>
        <button type="button" data-a="play" class="primary">Play</button>
        <button type="button" data-a="next" aria-label="Next step">Next</button>
        <input type="range" min="0" max="1000" value="0" aria-label="Scrub through the animation">
      </div>
      <div class="caption" aria-live="polite"><div class="n"></div><div class="c"></div></div>`;
    root.appendChild(ui);
    const btn = (a) => ui.querySelector(`[data-a=${a}]`);
    const scrub = ui.querySelector("input"), stepNo = ui.querySelector(".n"), cap = ui.querySelector(".c");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    let T = 0, playing = false, hold = 0, last = 0, clock = 0, loop = 0;
    const stepOf = (t) => { let s = 0; while (s < stops.length - 1 && t > stops[s] + 1e-6) s++; return s; };
    const nextStop = () => stops.find((s) => s > T + 1e-6);
    const prevStop = () => [...stops].reverse().find((s) => s < T - 1e-6);
    function draw(user) {
      render(T, { clock, user: !!user });
      const s = stepOf(T);
      stepNo.textContent = `Step ${s + 1} of ${stops.length}`;
      cap.innerHTML = captions[s];
      scrub.value = Math.round(T * 1000);
    }
    const wantsLoop = () => playing || (ambient(T) && !reduce);
    function kick() { if (!loop && wantsLoop()) { last = 0; loop = requestAnimationFrame(frame); } }
    function setPlaying(on) { playing = on; btn("play").textContent = on ? "Pause" : "Play"; }
    function frame(ts) {
      loop = 0;
      const dt = last ? Math.min(0.1, (ts - last) / 1000) : 0;
      last = ts;
      if (!reduce) clock += dt;
      if (playing) {
        if (hold > 0) hold -= dt;
        else if (T >= 1 - 1e-9) setPlaying(false);
        else if (reduce) { T = nextStop() ?? 1; hold = 2.2; }
        else {
          const after = Math.min(1, T + dt * speed);
          const crossed = stops.find((s) => s > T + 1e-6 && s <= after);
          T = crossed ?? after;
          if (crossed !== undefined) hold = holdTime; // pause briefly on each step
        }
      }
      draw(false);
      if (wantsLoop()) loop = requestAnimationFrame(frame);
    }
    function seek(t, user = true) { T = Math.max(0, Math.min(1, t)); draw(user); kick(); }
    btn("play").onclick = () => { if (!playing && T >= 1 - 1e-9) seek(0); setPlaying(!playing); hold = 0; kick(); };
    btn("next").onclick = () => { setPlaying(false); seek(nextStop() ?? 1, false); };
    btn("back").onclick = () => { setPlaying(false); seek(prevStop() ?? 0); };
    btn("restart").onclick = () => { setPlaying(false); seek(0); };
    scrub.oninput = () => { setPlaying(false); seek(scrub.value / 1000); };

    // Follow the study site's theme when embedded; otherwise the OS preference.
    const applyTheme = () => {
      let dark;
      try { if (parent !== window) dark = parent.document.documentElement.classList.contains("dark"); } catch (e) { /* cross-origin */ }
      if (dark === undefined) dark = matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", dark);
      draw(true);
    };
    try { if (parent !== window) new MutationObserver(applyTheme).observe(parent.document.documentElement, { attributes: true, attributeFilter: ["class"] }); } catch (e) { /* cross-origin */ }
    // Size the embedding iframe to the content (same origin).
    const fe = window.frameElement;
    if (fe) new ResizeObserver(() => { fe.style.height = root.offsetHeight + "px"; }).observe(root);
    applyTheme();
    kick();
    return { seek: (t) => { setPlaying(false); seek(t); }, get t() { return T; } };
  }
  Explainer.css = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  Explainer.el = (tag, attrs, parent) => {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  };
  Explainer.clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
  Explainer.lerp = (a, b, k) => a + (b - a) * k;
  Explainer.ease = (k) => k * k * (3 - 2 * k); // smoothstep
  window.Explainer = Explainer;
})();
