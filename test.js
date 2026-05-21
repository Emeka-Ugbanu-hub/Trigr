import { forwardRef, useRef, useState, useCallback, useImperativeHandle, useEffect, useLayoutEffect, createElement } from 'react';

// src/text/index.tsx

// src/text/animations.ts
var EASE_IN = "cubic-bezier(0.0, 0.0, 0.2, 1)";
var EASE_OUT = "cubic-bezier(0.4, 0.0, 1, 1)";
var EASE_IN_OUT = "cubic-bezier(0.4, 0.0, 0.2, 1)";
var SPRING = "cubic-bezier(0.34, 1.56, 0.64, 1)";
var SMOOTH = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";
var fadeOut = [{ opacity: 1, transform: "translateY(0)" }, { opacity: 0, transform: "translateY(-4px)" }];
var fadeIn = [{ opacity: 0, transform: "translateY(4px)" }, { opacity: 1, transform: "translateY(0)" }];
var neutralOut = [{ opacity: 1, transform: "scale(1)" }, { opacity: 0, transform: "scale(0.96)" }];
var neutralIn = [{ opacity: 0, transform: "scale(0.96)" }, { opacity: 1, transform: "scale(1)" }];
var presets = {
  fadeSwap: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 0, transform: "translateY(-3px)" }],
    in: [{ opacity: 0, transform: "translateY(3px)" }, { opacity: 1, transform: "translateY(0)" }]
  },
  morph: {
    out: neutralOut,
    in: neutralIn
  },
  slideUp: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 0, transform: "translateY(-10px)" }],
    in: [{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "translateY(0)" }]
  },
  slideDown: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 0, transform: "translateY(10px)" }],
    in: [{ opacity: 0, transform: "translateY(-10px)" }, { opacity: 1, transform: "translateY(0)" }]
  },
  highlight: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: []
  },
  bump: {
    out: [{ opacity: 1, transform: "scale(1)" }, { opacity: 1, transform: "scale(1.08)", offset: 0.45 }, { opacity: 1, transform: "scale(1)" }],
    in: []
  },
  blur: {
    out: [{ opacity: 1, filter: "blur(0px)", transform: "translateY(0)" }, { opacity: 0, filter: "blur(4px)", transform: "translateY(-4px)" }],
    in: [{ opacity: 0, filter: "blur(4px)", transform: "translateY(4px)" }, { opacity: 1, filter: "blur(0px)", transform: "translateY(0)" }]
  },
  decoder: {
    out: fadeOut,
    in: fadeIn
  },
  fadeAway: {
    out: fadeOut,
    in: fadeIn
  },
  fadeIn: {
    out: fadeOut,
    in: fadeIn
  },
  slideReplace: {
    out: [{ opacity: 1, transform: "translateX(0)" }, { opacity: 0, transform: "translateX(-10px)" }],
    in: [{ opacity: 0, transform: "translateX(10px)" }, { opacity: 1, transform: "translateX(0)" }]
  },
  letterDrop: {
    out: fadeOut,
    in: [{ opacity: 0, transform: "translateY(-18px)" }, { opacity: 1, transform: "translateY(2px)", offset: 0.72 }, { opacity: 1, transform: "translateY(0)" }]
  },
  glitch: {
    out: fadeOut,
    in: [{ opacity: 0, transform: "translateX(-3px)" }, { opacity: 1, transform: "translateX(3px)", offset: 0.45 }, { opacity: 1, transform: "translateX(0)" }]
  },
  textReveal: {
    out: fadeOut,
    in: fadeIn
  },
  liftReveal: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 0, transform: "translateY(-10px)" }],
    in: [{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "translateY(0)" }]
  },
  scatter: {
    out: fadeOut,
    in: [{ opacity: 0, transform: "translateY(8px) scale(0.96)" }, { opacity: 1, transform: "translateY(0) scale(1)" }]
  },
  typewriter: {
    out: fadeOut,
    in: [{ opacity: 0, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }]
  },
  splash: {
    out: fadeOut,
    in: [{ opacity: 0, transform: "translateY(12px) scale(0.92)" }, { opacity: 1, transform: "translateY(0) scale(1)" }]
  },
  jitter: {
    out: fadeOut,
    in: [
      { opacity: 1, transform: "translateX(0)" },
      { opacity: 1, transform: "translateX(-6px)", offset: 0.2 },
      { opacity: 1, transform: "translateX(6px)", offset: 0.4 },
      { opacity: 1, transform: "translateX(-4px)", offset: 0.6 },
      { opacity: 1, transform: "translateX(4px)", offset: 0.8 },
      { opacity: 1, transform: "translateX(0)" }
    ]
  },
  popUp: {
    out: fadeOut,
    in: [{ opacity: 0, transform: "translateY(10px) scale(0.92)" }, { opacity: 1, transform: "translateY(-2px) scale(1.04)", offset: 0.65 }, { opacity: 1, transform: "translateY(0) scale(1)" }]
  },
  jello: {
    out: fadeOut,
    in: [
      { opacity: 1, transform: "scale(1, 1)" },
      { opacity: 1, transform: "scale(1.08, 0.94)", offset: 0.24 },
      { opacity: 1, transform: "scale(0.96, 1.05)", offset: 0.48 },
      { opacity: 1, transform: "scale(1.03, 0.98)", offset: 0.72 },
      { opacity: 1, transform: "scale(1, 1)" }
    ]
  },
  scramble: {
    out: fadeOut,
    in: fadeIn
  },
  flip: {
    out: [{ opacity: 1, transform: "perspective(600px) rotateY(0deg)" }, { opacity: 0, transform: "perspective(600px) rotateY(-36deg)" }],
    in: [{ opacity: 0, transform: "perspective(600px) rotateY(36deg)" }, { opacity: 1, transform: "perspective(600px) rotateY(0deg)" }]
  },
  bounce: {
    out: [{ opacity: 1, transform: "scale(1)" }, { opacity: 0, transform: "scale(0.92)" }],
    in: [{ opacity: 0, transform: "scale(0.88)" }, { opacity: 1, transform: "scale(1.06)", offset: 0.55 }, { opacity: 1, transform: "scale(1)" }]
  },
  shake: {
    out: fadeOut,
    in: [
      { opacity: 1, transform: "translateX(0)" },
      { opacity: 1, transform: "translateX(-6px)", offset: 0.2 },
      { opacity: 1, transform: "translateX(6px)", offset: 0.4 },
      { opacity: 1, transform: "translateX(-4px)", offset: 0.6 },
      { opacity: 1, transform: "translateX(4px)", offset: 0.8 },
      { opacity: 1, transform: "translateX(0)" }
    ]
  },
  pulse: {
    out: [{ opacity: 1, transform: "scale(1)" }, { opacity: 1, transform: "scale(0.98)" }],
    in: [{ opacity: 1, transform: "scale(1)" }, { opacity: 1, transform: "scale(1.04)", offset: 0.5 }, { opacity: 1, transform: "scale(1)" }]
  },
  blink: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 0, transform: "translateY(0)" }],
    in: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 0.28, transform: "translateY(0)", offset: 0.5 }, { opacity: 1, transform: "translateY(0)" }]
  },
  wave: {
    out: fadeOut,
    in: fadeIn
  },
  ping: {
    out: [{ opacity: 1, transform: "scale(1)" }, { opacity: 0, transform: "scale(1.12)" }],
    in: [{ opacity: 0, transform: "scale(0.92)" }, { opacity: 1, transform: "scale(1.08)", offset: 0.52 }, { opacity: 1, transform: "scale(1)" }]
  },
  popIn: {
    out: [{ opacity: 1, transform: "scale(1)" }, { opacity: 0, transform: "scale(0.92)" }],
    in: [{ opacity: 0, transform: "scale(0.92)" }, { opacity: 1, transform: "scale(1.06)", offset: 0.65 }, { opacity: 1, transform: "scale(1)" }]
  },
  dropIn: {
    out: fadeOut,
    in: [{ opacity: 0, transform: "translateY(-20px)" }, { opacity: 1, transform: "translateY(2px)", offset: 0.72 }, { opacity: 1, transform: "translateY(0)" }]
  },
  riseUp: {
    out: fadeOut,
    in: [{ opacity: 0, transform: "translateY(18px)" }, { opacity: 1, transform: "translateY(0)" }]
  },
  expandIn: {
    out: neutralOut,
    in: [{ opacity: 0, transform: "scaleX(0.92)" }, { opacity: 1, transform: "scaleX(1)" }]
  },
  shrinkOut: {
    out: neutralOut,
    in: [{ opacity: 1, transform: "scaleX(1)" }, { opacity: 0, transform: "scaleX(0.92)" }]
  },
  boldFlash: {
    out: fadeOut,
    in: [{ opacity: 0, transform: "scale(0.98)" }, { opacity: 1, transform: "scale(1.02)", offset: 0.35 }, { opacity: 1, transform: "scale(1)" }]
  },
  strikeThrough: {
    out: fadeOut,
    in: fadeIn
  },
  odometer: {
    out: fadeOut,
    in: fadeIn
  },
  ticker: {
    out: fadeOut,
    in: fadeIn
  },
  colorShift: {
    out: [{ color: "rgb(0,0,0)", opacity: 1 }, { color: "rgb(220, 38, 38)", opacity: 1 }],
    in: [{ color: "rgb(37, 99, 235)", opacity: 1 }, { color: "rgb(0,0,0)", opacity: 1 }]
  },
  splitReveal: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: []
  },
  splitSlide: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: []
  },
  bigBang: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: []
  },
  scatterAssemble: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: []
  },
  pixelRain: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: []
  },
  dominoFall: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: []
  },
  vortex: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: []
  },
  pendulum: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: []
  },
  centerBurst: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: []
  },
  gravityBounce: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: []
  },
  minimalistRipple: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: []
  },
  scrollFanIn: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: []
  },
  textRotate: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: []
  },
  gooeyMorph: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: []
  },
  randomLetterSwap: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: []
  },
  textEffect: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: []
  },
  staggerText: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: []
  }
};
function useValueChange(value) {
  const prevRef = useRef(void 0);
  const changed = prevRef.current !== void 0 && prevRef.current !== value;
  const prev = prevRef.current;
  prevRef.current = value;
  return { changed, prev, current: value };
}

// src/text/index.tsx
var warned = /* @__PURE__ */ new Set();
function runAnimation(el, preset, options, mode = "single", oldText, newText) {
  var _a, _b, _c;
  el.style.willChange = "transform, opacity";
  if (preset === "highlight") {
    const duration = (_a = options.duration) != null ? _a : 400;
    el.style.willChange = "transform, opacity";
    const mark = document.createElement("mark");
    mark.style.background = "transparent";
    mark.style.color = "inherit";
    mark.style.textDecoration = "none";
    const span = document.createElement("span");
    span.textContent = oldText !== void 0 ? String(oldText) : (_b = el.textContent) != null ? _b : "";
    span.style.background = "linear-gradient(120deg, rgba(254, 240, 138, 0.55) 50%, transparent 50%) 110% 0 / 200% 100% no-repeat";
    span.style.backgroundPosition = "110% 0";
    span.style.transition = `background-position ${duration}ms ${SMOOTH}`;
    mark.appendChild(span);
    el.innerHTML = "";
    el.appendChild(mark);
    requestAnimationFrame(() => {
      span.style.backgroundPosition = "0% 0";
    });
    const newTextValue = newText !== void 0 ? String(newText) : (_c = el.textContent) != null ? _c : "";
    const anim2 = el.animate([{ opacity: 1 }, { opacity: 1 }], { duration, fill: "forwards" });
    const cleanup = () => {
      el.textContent = newTextValue;
      el.style.willChange = "auto";
    };
    anim2.addEventListener("finish", cleanup);
    anim2.addEventListener("cancel", cleanup);
    return anim2;
  }
  const def = presets[preset];
  if (!def) {
    if (process.env.NODE_ENV === "development" && !warned.has(preset)) {
      warned.add(preset);
      console.warn(
        `[trigr] Unknown animation preset "${preset}". Expected one of: ${Object.keys(presets).join(", ")}`
      );
    }
    const anim2 = el.animate([], options);
    anim2.addEventListener("finish", () => {
      el.style.willChange = "auto";
    });
    anim2.addEventListener("cancel", () => {
      el.style.willChange = "auto";
    });
    return anim2;
  }
  const baseFrames = mode === "change" ? [...def.out, ...def.in] : def.in.length ? [...def.in] : [...def.out];
  const keyframes = prefersReducedMotion() ? reducedKeyframes(baseFrames) : baseFrames;
  const anim = el.animate(keyframes, options);
  anim.addEventListener("finish", () => {
    el.style.willChange = "auto";
  });
  anim.addEventListener("cancel", () => {
    el.style.willChange = "auto";
  });
  return anim;
}
function prefersReducedMotion() {
  var _a, _b;
  if (typeof window === "undefined") return false;
  return (_b = (_a = window.matchMedia) == null ? void 0 : _a.call(window, "(prefers-reduced-motion: reduce)").matches) != null ? _b : false;
}
function reducedKeyframes(keyframes) {
  return keyframes.map(({ opacity }) => ({ opacity: opacity != null ? opacity : 1 }));
}
function finishWillChange(el) {
  el.style.willChange = "auto";
}
function resolveInlineJustify(textAlign) {
  if (textAlign === "center") return "center";
  if (textAlign === "right" || textAlign === "end") return "flex-end";
  return "flex-start";
}
function measureInlineText(el, text) {
  const probe = document.createElement("span");
  probe.textContent = text || "\xA0";
  probe.style.position = "absolute";
  probe.style.visibility = "hidden";
  probe.style.pointerEvents = "none";
  probe.style.whiteSpace = getComputedStyle(el).whiteSpace === "normal" ? "pre" : getComputedStyle(el).whiteSpace;
  probe.style.display = "inline-block";
  el.appendChild(probe);
  const rect = probe.getBoundingClientRect();
  probe.remove();
  return { width: rect.width, height: rect.height };
}
function prepareStableTextSwap(el, oldText, newText) {
  const computed = getComputedStyle(el);
  const oldSize = measureInlineText(el, oldText);
  const newSize = measureInlineText(el, newText);
  const width = Math.max(oldSize.width, newSize.width, el.getBoundingClientRect().width);
  const height = Math.max(oldSize.height, newSize.height, el.getBoundingClientRect().height);
  const justifyContent = resolveInlineJustify(computed.textAlign);
  const previous = {
    position: el.style.position,
    overflow: el.style.overflow,
    display: el.style.display,
    width: el.style.width,
    minWidth: el.style.minWidth,
    height: el.style.height,
    verticalAlign: el.style.verticalAlign
  };
  el.style.position = "relative";
  el.style.overflow = "visible";
  el.style.display = "inline-block";
  el.style.verticalAlign = previous.verticalAlign || "baseline";
  el.style.width = `${width}px`;
  el.style.minWidth = `${width}px`;
  if (height > 0) el.style.height = `${height}px`;
  el.innerHTML = "";
  const oldEl = document.createElement("span");
  oldEl.textContent = oldText;
  oldEl.style.display = "flex";
  oldEl.style.alignItems = "center";
  oldEl.style.justifyContent = justifyContent;
  oldEl.style.whiteSpace = "pre";
  oldEl.style.position = "absolute";
  oldEl.style.left = "0";
  oldEl.style.top = "0";
  oldEl.style.width = "100%";
  oldEl.style.height = "100%";
  oldEl.style.lineHeight = computed.lineHeight;
  const newEl = document.createElement("span");
  newEl.textContent = newText;
  newEl.style.display = "flex";
  newEl.style.alignItems = "center";
  newEl.style.justifyContent = justifyContent;
  newEl.style.whiteSpace = "pre";
  newEl.style.position = "absolute";
  newEl.style.left = "0";
  newEl.style.top = "0";
  newEl.style.width = "100%";
  newEl.style.height = "100%";
  newEl.style.lineHeight = computed.lineHeight;
  el.appendChild(oldEl);
  el.appendChild(newEl);
  function cleanup() {
    el.textContent = newText;
    el.style.position = previous.position;
    el.style.overflow = previous.overflow;
    el.style.display = previous.display;
    el.style.width = previous.width;
    el.style.minWidth = previous.minWidth;
    el.style.height = previous.height;
    el.style.verticalAlign = previous.verticalAlign;
    el.style.willChange = "auto";
  }
  return { oldEl, newEl, cleanup };
}
function reserveStableTextSize(el, oldText, newText) {
  var _a;
  const oldSize = measureInlineText(el, oldText);
  const newSize = measureInlineText(el, newText);
  const currentWidth = el.getBoundingClientRect().width;
  const storedWidth = Number.parseFloat((_a = el.dataset.trigrStableWidth) != null ? _a : "0");
  const width = Math.ceil(Math.max(oldSize.width, newSize.width, currentWidth, storedWidth));
  if (width > 0) {
    el.dataset.trigrStableWidth = String(width);
    el.style.minWidth = `${width}px`;
    if (getComputedStyle(el).display === "inline") el.style.display = "inline-block";
  }
}
function splitGraphemes(text) {
  const Segmenter = Intl.Segmenter;
  if (Segmenter) {
    const segmenter = new Segmenter("en", { granularity: "grapheme" });
    return Array.from(segmenter.segment(text), ({ segment }) => segment);
  }
  return Array.from(text);
}
function buildRollingCharSlots(text, slotHeightEm = 1.22) {
  return [...text].map(
    (c) => c === " " ? " " : `<span style="display:inline-flex;align-items:flex-end;overflow:hidden;height:${slotHeightEm}em;line-height:${slotHeightEm};vertical-align:baseline"><span style="display:block;line-height:1;will-change:transform,opacity">${c}</span></span>`
  ).join("");
}
function animateSplitReveal(el, value, duration, onAnimationEnd) {
  var _a;
  const text = value === void 0 ? (_a = el.textContent) != null ? _a : "" : String(value);
  if (!text) return;
  const reduced = prefersReducedMotion();
  if (reduced) {
    const anim2 = el.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: duration / 2, easing: EASE_IN, fill: "forwards" }
    );
    anim2.onfinish = () => onAnimationEnd == null ? void 0 : onAnimationEnd();
    return anim2;
  }
  const computed = getComputedStyle(el);
  const visibleColor = computed.color || "#111";
  const lineHeight = Number.parseFloat(computed.lineHeight) || Number.parseFloat(computed.fontSize) * 1.1 || 64;
  const halfShift = lineHeight * 0.52;
  const previous = {
    position: el.style.position,
    display: el.style.display,
    overflow: el.style.overflow,
    color: el.style.color,
    textShadow: el.style.textShadow,
    minWidth: el.style.minWidth
  };
  el.style.position = "relative";
  el.style.display = "inline-block";
  el.style.overflow = "hidden";
  el.style.color = "transparent";
  el.style.textShadow = `0 0 0 ${visibleColor}`;
  el.style.minWidth = `${Math.ceil(el.getBoundingClientRect().width)}px`;
  el.style.willChange = "transform, opacity";
  el.innerHTML = "";
  const shadow = document.createElement("span");
  shadow.textContent = text;
  shadow.style.visibility = "hidden";
  shadow.style.display = "block";
  const line = document.createElement("span");
  Object.assign(line.style, {
    position: "absolute",
    width: "50%",
    height: "0.08em",
    minHeight: "4px",
    left: "-55%",
    top: "0.46em",
    background: visibleColor,
    borderRadius: "999px",
    pointerEvents: "none",
    willChange: "transform"
  });
  function makeHalf(placement) {
    const half = document.createElement("span");
    const inner = document.createElement("span");
    inner.textContent = text;
    Object.assign(half.style, {
      position: "absolute",
      left: "0",
      width: "100%",
      height: "50%",
      overflow: "hidden",
      pointerEvents: "none",
      willChange: "transform, opacity",
      top: placement === "top" ? "0" : "",
      bottom: placement === "bottom" ? "0" : ""
    });
    Object.assign(inner.style, {
      display: "block",
      color: visibleColor,
      willChange: "transform, opacity",
      transform: placement === "top" ? `translateY(${halfShift}px)` : `translateY(${-halfShift}px)`
    });
    half.appendChild(inner);
    return { half, inner };
  }
  const top = makeHalf("top");
  const bottom = makeHalf("bottom");
  el.append(shadow, line, top.half, bottom.half);
  line.animate(
    [{ transform: "translateX(0)" }, { transform: "translateX(210%)" }],
    { duration: duration * 0.58, easing: EASE_IN_OUT, fill: "forwards" }
  );
  top.inner.animate(
    [
      { transform: `translateY(${halfShift}px)`, opacity: 0.88 },
      { transform: "translateY(0)", opacity: 1 }
    ],
    { duration: duration * 0.42, delay: duration * 0.38, easing: EASE_OUT, fill: "forwards" }
  );
  const anim = bottom.inner.animate(
    [
      { transform: `translateY(${-halfShift}px)`, opacity: 0.88 },
      { transform: `translateY(${-lineHeight / 2}px)`, opacity: 1 }
    ],
    { duration: duration * 0.42, delay: duration * 0.38, easing: EASE_OUT, fill: "forwards" }
  );
  anim.onfinish = () => {
    el.textContent = text;
    el.style.position = previous.position;
    el.style.display = previous.display;
    el.style.overflow = previous.overflow;
    el.style.color = previous.color;
    el.style.textShadow = previous.textShadow;
    el.style.minWidth = previous.minWidth;
    finishWillChange(el);
    onAnimationEnd == null ? void 0 : onAnimationEnd();
  };
  return anim;
}
function animateSplitSlide(el, value, duration, onAnimationEnd) {
  var _a;
  const text = value === void 0 ? (_a = el.textContent) != null ? _a : "" : String(value);
  if (!text) return;
  const reduced = prefersReducedMotion();
  if (reduced) {
    const anim2 = el.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: duration / 2, easing: EASE_IN, fill: "forwards" }
    );
    anim2.onfinish = () => onAnimationEnd == null ? void 0 : onAnimationEnd();
    return anim2;
  }
  const splitAt = Math.ceil(text.length / 2);
  const leftText = text.slice(0, splitAt);
  const rightText = text.slice(splitAt);
  const previous = {
    display: el.style.display,
    overflow: el.style.overflow,
    whiteSpace: el.style.whiteSpace,
    minWidth: el.style.minWidth
  };
  el.style.display = "inline-flex";
  el.style.overflow = "hidden";
  el.style.whiteSpace = "pre";
  el.style.minWidth = `${Math.ceil(el.getBoundingClientRect().width)}px`;
  el.style.willChange = "transform, opacity";
  el.innerHTML = "";
  const left = document.createElement("span");
  const right = document.createElement("span");
  left.textContent = leftText;
  right.textContent = rightText;
  Object.assign(left.style, { display: "inline-block", willChange: "transform, opacity" });
  Object.assign(right.style, { display: "inline-block", willChange: "transform, opacity" });
  el.append(left, right);
  left.animate(
    [
      { opacity: 0, transform: "translateX(-120%)" },
      { opacity: 1, transform: "translateX(0)" }
    ],
    { duration, easing: EASE_IN, fill: "forwards" }
  );
  const anim = right.animate(
    [
      { opacity: 0, transform: "translateX(120%)" },
      { opacity: 1, transform: "translateX(0)" }
    ],
    { duration, easing: EASE_IN, fill: "forwards" }
  );
  anim.onfinish = () => {
    el.textContent = text;
    el.style.display = previous.display;
    el.style.overflow = previous.overflow;
    el.style.whiteSpace = previous.whiteSpace;
    el.style.minWidth = previous.minWidth;
    finishWillChange(el);
    onAnimationEnd == null ? void 0 : onAnimationEnd();
  };
  return anim;
}
function animateBigBang(el, value, duration, onAnimationEnd) {
  var _a;
  const text = value === void 0 ? (_a = el.textContent) != null ? _a : "" : String(value);
  if (!text) return;
  if (prefersReducedMotion()) {
    const anim2 = el.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: duration / 2, easing: EASE_IN, fill: "forwards" }
    );
    anim2.onfinish = () => onAnimationEnd == null ? void 0 : onAnimationEnd();
    return anim2;
  }
  const computed = getComputedStyle(el);
  const rect = el.getBoundingClientRect();
  const fontSize = Number.parseFloat(computed.fontSize) || 48;
  const width = Math.max(180, Math.ceil(rect.width + fontSize * 1.4));
  const height = Math.max(fontSize * 1.7, Math.ceil(rect.height + fontSize * 1.2));
  const color = computed.color || "rgb(232, 234, 240)";
  const previous = {
    position: el.style.position,
    display: el.style.display,
    overflow: el.style.overflow,
    color: el.style.color,
    width: el.style.width,
    height: el.style.height,
    minWidth: el.style.minWidth,
    verticalAlign: el.style.verticalAlign
  };
  el.style.position = "relative";
  el.style.display = "inline-block";
  el.style.overflow = "hidden";
  el.style.color = "transparent";
  el.style.width = `${width}px`;
  el.style.height = `${height}px`;
  el.style.minWidth = `${width}px`;
  el.style.verticalAlign = "middle";
  el.style.willChange = "transform, opacity";
  el.innerHTML = "";
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.style.display = "block";
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    el.textContent = text;
    return;
  }
  const drawCtx = ctx;
  drawCtx.scale(dpr, dpr);
  el.appendChild(canvas);
  const off = document.createElement("canvas");
  off.width = width;
  off.height = height;
  const octx = off.getContext("2d");
  if (!octx) {
    el.textContent = text;
    return;
  }
  octx.font = computed.font || `700 ${fontSize}px sans-serif`;
  octx.textAlign = "center";
  octx.textBaseline = "middle";
  octx.fillStyle = "#fff";
  octx.fillText(text, width / 2, height / 2);
  const { data } = octx.getImageData(0, 0, width, height);
  const density = Math.max(3, Math.round(fontSize / 18));
  const points = [];
  for (let y = 0; y < height; y += density) {
    for (let x = 0; x < width; x += density) {
      if (data[(y * width + x) * 4 + 3] > 128) points.push({ x, y });
    }
  }
  if (points.length === 0) {
    el.textContent = text;
    return;
  }
  const maxParticles = 900;
  const step = Math.max(1, Math.ceil(points.length / maxParticles));
  const sampled = points.filter((_, i) => i % step === 0);
  const cx = width / 2;
  const cy = height / 2;
  const particles = sampled.map((point) => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 6 + Math.random() * 10;
    return {
      x: cx,
      y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      ox: point.x,
      oy: point.y
    };
  });
  let frameId = 0;
  let finished = false;
  const total = Math.max(1200, duration);
  const start = performance.now();
  const anim = el.animate([{ opacity: 1 }, { opacity: 1 }], { duration: total, fill: "forwards" });
  function cleanup() {
    if (finished) return;
    finished = true;
    cancelAnimationFrame(frameId);
    el.textContent = text;
    el.style.position = previous.position;
    el.style.display = previous.display;
    el.style.overflow = previous.overflow;
    el.style.color = previous.color;
    el.style.width = previous.width;
    el.style.height = previous.height;
    el.style.minWidth = previous.minWidth;
    el.style.verticalAlign = previous.verticalAlign;
    finishWillChange(el);
  }
  function frame(now) {
    const elapsed = now - start;
    drawCtx.clearRect(0, 0, width, height);
    particles.forEach((particle) => {
      particle.vx += (particle.ox - particle.x) * 0.045;
      particle.vx *= 0.88;
      particle.x += particle.vx;
      particle.vy += (particle.oy - particle.y) * 0.045;
      particle.vy *= 0.88;
      particle.y += particle.vy;
      const dist = Math.hypot(particle.x - particle.ox, particle.y - particle.oy);
      const alpha = Math.min(0.92, 0.28 + (1 - Math.min(1, dist / 160)) * 0.64);
      drawCtx.globalAlpha = alpha;
      drawCtx.fillStyle = color;
      drawCtx.beginPath();
      drawCtx.arc(particle.x, particle.y, Math.max(1, density * 0.34), 0, Math.PI * 2);
      drawCtx.fill();
    });
    drawCtx.globalAlpha = 1;
    if (elapsed < total) frameId = requestAnimationFrame(frame);
  }
  frameId = requestAnimationFrame(frame);
  anim.onfinish = () => {
    cleanup();
    onAnimationEnd == null ? void 0 : onAnimationEnd();
  };
  anim.oncancel = cleanup;
  return anim;
}
function animateScatterAssemble(el, value, duration, onAnimationEnd) {
  var _a;
  const text = value === void 0 ? (_a = el.textContent) != null ? _a : "" : String(value);
  if (!text) return;
  if (prefersReducedMotion()) {
    const anim2 = el.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: duration / 2, easing: EASE_IN, fill: "forwards" }
    );
    anim2.onfinish = () => onAnimationEnd == null ? void 0 : onAnimationEnd();
    return anim2;
  }
  const computed = getComputedStyle(el);
  const rect = el.getBoundingClientRect();
  const fontSize = Number.parseFloat(computed.fontSize) || 48;
  const width = Math.max(180, Math.ceil(rect.width + fontSize * 1.4));
  const height = Math.max(fontSize * 1.7, Math.ceil(rect.height + fontSize * 1.2));
  const previous = {
    position: el.style.position,
    display: el.style.display,
    overflow: el.style.overflow,
    color: el.style.color,
    width: el.style.width,
    height: el.style.height,
    minWidth: el.style.minWidth,
    verticalAlign: el.style.verticalAlign
  };
  el.style.position = "relative";
  el.style.display = "inline-block";
  el.style.overflow = "hidden";
  el.style.color = "transparent";
  el.style.width = `${width}px`;
  el.style.height = `${height}px`;
  el.style.minWidth = `${width}px`;
  el.style.verticalAlign = "middle";
  el.style.willChange = "transform, opacity";
  el.innerHTML = "";
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.style.display = "block";
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    el.textContent = text;
    return;
  }
  const drawCtx = ctx;
  drawCtx.scale(dpr, dpr);
  el.appendChild(canvas);
  const off = document.createElement("canvas");
  off.width = width;
  off.height = height;
  const octx = off.getContext("2d");
  if (!octx) {
    el.textContent = text;
    return;
  }
  octx.font = computed.font || `700 ${fontSize}px sans-serif`;
  octx.textAlign = "center";
  octx.textBaseline = "middle";
  octx.fillStyle = "#fff";
  octx.fillText(text, width / 2, height / 2);
  const { data } = octx.getImageData(0, 0, width, height);
  const density = Math.max(3, Math.round(fontSize / 18));
  const points = [];
  for (let y = 0; y < height; y += density) {
    for (let x = 0; x < width; x += density) {
      if (data[(y * width + x) * 4 + 3] > 128) points.push({ x, y });
    }
  }
  if (points.length === 0) {
    el.textContent = text;
    return;
  }
  const maxParticles = 900;
  const step = Math.max(1, Math.ceil(points.length / maxParticles));
  const sampled = points.filter((_, i) => i % step === 0);
  const particles = sampled.map((point) => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: 0,
    vy: 0,
    ox: point.x,
    oy: point.y,
    delay: Math.random() * duration * 0.32
  }));
  let frameId = 0;
  let finished = false;
  const total = Math.max(1200, duration);
  const start = performance.now();
  const anim = el.animate([{ opacity: 1 }, { opacity: 1 }], { duration: total, fill: "forwards" });
  function cleanup() {
    if (finished) return;
    finished = true;
    cancelAnimationFrame(frameId);
    el.textContent = text;
    el.style.position = previous.position;
    el.style.display = previous.display;
    el.style.overflow = previous.overflow;
    el.style.color = previous.color;
    el.style.width = previous.width;
    el.style.height = previous.height;
    el.style.minWidth = previous.minWidth;
    el.style.verticalAlign = previous.verticalAlign;
    finishWillChange(el);
  }
  function frame(now) {
    const elapsed = now - start;
    drawCtx.clearRect(0, 0, width, height);
    particles.forEach((particle) => {
      if (elapsed < particle.delay) return;
      particle.vx += (particle.ox - particle.x) * 0.055;
      particle.vx *= 0.8;
      particle.x += particle.vx;
      particle.vy += (particle.oy - particle.y) * 0.055;
      particle.vy *= 0.8;
      particle.y += particle.vy;
      drawCtx.globalAlpha = Math.min(0.86, 0.25 + elapsed / total);
      drawCtx.fillStyle = "rgba(124, 92, 255, 0.9)";
      drawCtx.beginPath();
      drawCtx.arc(particle.x, particle.y, Math.max(1, density * 0.32), 0, Math.PI * 2);
      drawCtx.fill();
    });
    drawCtx.globalAlpha = 1;
    if (elapsed < total) frameId = requestAnimationFrame(frame);
  }
  frameId = requestAnimationFrame(frame);
  anim.onfinish = () => {
    cleanup();
    onAnimationEnd == null ? void 0 : onAnimationEnd();
  };
  anim.oncancel = cleanup;
  return anim;
}
function animatePixelRain(el, value, duration, onAnimationEnd) {
  var _a;
  const text = value === void 0 ? (_a = el.textContent) != null ? _a : "" : String(value);
  if (!text) return;
  if (prefersReducedMotion()) {
    const anim2 = el.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: duration / 2, easing: EASE_IN, fill: "forwards" }
    );
    anim2.onfinish = () => onAnimationEnd == null ? void 0 : onAnimationEnd();
    return anim2;
  }
  const computed = getComputedStyle(el);
  const rect = el.getBoundingClientRect();
  const fontSize = Number.parseFloat(computed.fontSize) || 48;
  const width = Math.max(180, Math.ceil(rect.width + fontSize * 1.4));
  const height = Math.max(fontSize * 1.7, Math.ceil(rect.height + fontSize * 1.2));
  const previous = {
    position: el.style.position,
    display: el.style.display,
    overflow: el.style.overflow,
    color: el.style.color,
    width: el.style.width,
    height: el.style.height,
    minWidth: el.style.minWidth,
    verticalAlign: el.style.verticalAlign
  };
  el.style.position = "relative";
  el.style.display = "inline-block";
  el.style.overflow = "hidden";
  el.style.color = "transparent";
  el.style.width = `${width}px`;
  el.style.height = `${height}px`;
  el.style.minWidth = `${width}px`;
  el.style.verticalAlign = "middle";
  el.style.willChange = "transform, opacity";
  el.innerHTML = "";
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.style.display = "block";
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    el.textContent = text;
    return;
  }
  const drawCtx = ctx;
  drawCtx.scale(dpr, dpr);
  el.appendChild(canvas);
  const off = document.createElement("canvas");
  off.width = width;
  off.height = height;
  const octx = off.getContext("2d");
  if (!octx) {
    el.textContent = text;
    return;
  }
  octx.font = computed.font || `700 ${fontSize}px sans-serif`;
  octx.textAlign = "center";
  octx.textBaseline = "middle";
  octx.fillStyle = "#fff";
  octx.fillText(text, width / 2, height / 2);
  const { data } = octx.getImageData(0, 0, width, height);
  const density = Math.max(3, Math.round(fontSize / 18));
  const points = [];
  for (let y = 0; y < height; y += density) {
    for (let x = 0; x < width; x += density) {
      if (data[(y * width + x) * 4 + 3] > 128) points.push({ x, y });
    }
  }
  if (points.length === 0) {
    el.textContent = text;
    return;
  }
  const maxParticles = 900;
  const step = Math.max(1, Math.ceil(points.length / maxParticles));
  const sampled = points.filter((_, i) => i % step === 0);
  const particles = sampled.map((point) => ({
    x: point.x + (Math.random() - 0.5) * 6,
    y: point.y - height * (0.55 + Math.random() * 0.9),
    vx: (Math.random() - 0.5) * 1.5,
    vy: 0,
    ox: point.x,
    oy: point.y
  }));
  let frameId = 0;
  let finished = false;
  const total = Math.max(1200, duration);
  const start = performance.now();
  const anim = el.animate([{ opacity: 1 }, { opacity: 1 }], { duration: total, fill: "forwards" });
  function cleanup() {
    if (finished) return;
    finished = true;
    cancelAnimationFrame(frameId);
    el.textContent = text;
    el.style.position = previous.position;
    el.style.display = previous.display;
    el.style.overflow = previous.overflow;
    el.style.color = previous.color;
    el.style.width = previous.width;
    el.style.height = previous.height;
    el.style.minWidth = previous.minWidth;
    el.style.verticalAlign = previous.verticalAlign;
    finishWillChange(el);
  }
  function frame(now) {
    const elapsed = now - start;
    drawCtx.clearRect(0, 0, width, height);
    particles.forEach((particle) => {
      particle.vx += (particle.ox - particle.x) * 0.045;
      particle.vx *= 0.84;
      particle.x += particle.vx;
      particle.vy += (particle.oy - particle.y) * 0.045;
      particle.vy *= 0.84;
      particle.y += particle.vy;
      const dist = Math.hypot(particle.x - particle.ox, particle.y - particle.oy);
      const alpha = Math.min(0.86, 0.16 + (1 - Math.min(1, dist / 160)) * 0.7);
      drawCtx.globalAlpha = alpha;
      drawCtx.fillStyle = "rgb(46, 230, 166)";
      drawCtx.beginPath();
      drawCtx.arc(particle.x, particle.y, Math.max(1, density * 0.3), 0, Math.PI * 2);
      drawCtx.fill();
    });
    drawCtx.globalAlpha = 1;
    if (elapsed < total) frameId = requestAnimationFrame(frame);
  }
  frameId = requestAnimationFrame(frame);
  anim.onfinish = () => {
    cleanup();
    onAnimationEnd == null ? void 0 : onAnimationEnd();
  };
  anim.oncancel = cleanup;
  return anim;
}
function animateVortex(el, value, duration, onAnimationEnd) {
  var _a;
  const text = value === void 0 ? (_a = el.textContent) != null ? _a : "" : String(value);
  if (!text) return;
  if (prefersReducedMotion()) {
    const anim2 = el.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: duration / 2, easing: EASE_IN, fill: "forwards" }
    );
    anim2.onfinish = () => onAnimationEnd == null ? void 0 : onAnimationEnd();
    return anim2;
  }
  const computed = getComputedStyle(el);
  const rect = el.getBoundingClientRect();
  const fontSize = Number.parseFloat(computed.fontSize) || 48;
  const width = Math.max(180, Math.ceil(rect.width + fontSize * 1.4));
  const height = Math.max(fontSize * 1.7, Math.ceil(rect.height + fontSize * 1.2));
  const previous = {
    position: el.style.position,
    display: el.style.display,
    overflow: el.style.overflow,
    color: el.style.color,
    width: el.style.width,
    height: el.style.height,
    minWidth: el.style.minWidth,
    verticalAlign: el.style.verticalAlign
  };
  el.style.position = "relative";
  el.style.display = "inline-block";
  el.style.overflow = "hidden";
  el.style.color = "transparent";
  el.style.width = `${width}px`;
  el.style.height = `${height}px`;
  el.style.minWidth = `${width}px`;
  el.style.verticalAlign = "middle";
  el.style.willChange = "transform, opacity";
  el.innerHTML = "";
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.style.display = "block";
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    el.textContent = text;
    return;
  }
  const drawCtx = ctx;
  drawCtx.scale(dpr, dpr);
  el.appendChild(canvas);
  const off = document.createElement("canvas");
  off.width = width;
  off.height = height;
  const octx = off.getContext("2d");
  if (!octx) {
    el.textContent = text;
    return;
  }
  octx.font = computed.font || `700 ${fontSize}px sans-serif`;
  octx.textAlign = "center";
  octx.textBaseline = "middle";
  octx.fillStyle = "#fff";
  octx.fillText(text, width / 2, height / 2);
  const { data } = octx.getImageData(0, 0, width, height);
  const density = Math.max(3, Math.round(fontSize / 18));
  const points = [];
  for (let y = 0; y < height; y += density) {
    for (let x = 0; x < width; x += density) {
      if (data[(y * width + x) * 4 + 3] > 128) points.push({ x, y });
    }
  }
  if (points.length === 0) {
    el.textContent = text;
    return;
  }
  const maxParticles = 900;
  const step = Math.max(1, Math.ceil(points.length / maxParticles));
  const sampled = points.filter((_, i) => i % step === 0);
  const cx = width / 2;
  const cy = height / 2;
  const radiusBase = Math.min(width, height) * 0.45;
  const particles = sampled.map((point) => {
    const angle = Math.random() * Math.PI * 2;
    const radius = radiusBase * (0.62 + Math.random() * 0.42);
    return {
      x: cx + Math.cos(angle) * radius,
      y: cy + Math.sin(angle) * radius,
      vx: -Math.sin(angle) * 3.5,
      vy: Math.cos(angle) * 3.5,
      ox: point.x,
      oy: point.y
    };
  });
  let frameId = 0;
  let finished = false;
  const total = Math.max(1200, duration);
  const start = performance.now();
  const anim = el.animate([{ opacity: 1 }, { opacity: 1 }], { duration: total, fill: "forwards" });
  function cleanup() {
    if (finished) return;
    finished = true;
    cancelAnimationFrame(frameId);
    el.textContent = text;
    el.style.position = previous.position;
    el.style.display = previous.display;
    el.style.overflow = previous.overflow;
    el.style.color = previous.color;
    el.style.width = previous.width;
    el.style.height = previous.height;
    el.style.minWidth = previous.minWidth;
    el.style.verticalAlign = previous.verticalAlign;
    finishWillChange(el);
  }
  function frame(now) {
    const elapsed = now - start;
    drawCtx.clearRect(0, 0, width, height);
    particles.forEach((particle) => {
      particle.vx += (particle.ox - particle.x) * 0.045;
      particle.vx *= 0.88;
      particle.x += particle.vx;
      particle.vy += (particle.oy - particle.y) * 0.045;
      particle.vy *= 0.88;
      particle.y += particle.vy;
      const progress = 1 - Math.min(1, Math.hypot(particle.x - particle.ox, particle.y - particle.oy) / 180);
      drawCtx.globalAlpha = 0.3 + progress * 0.6;
      drawCtx.fillStyle = "rgb(124, 92, 255)";
      drawCtx.beginPath();
      drawCtx.arc(particle.x, particle.y, Math.max(1, density * 0.32), 0, Math.PI * 2);
      drawCtx.fill();
    });
    drawCtx.globalAlpha = 1;
    if (elapsed < total) frameId = requestAnimationFrame(frame);
  }
  frameId = requestAnimationFrame(frame);
  anim.onfinish = () => {
    cleanup();
    onAnimationEnd == null ? void 0 : onAnimationEnd();
  };
  anim.oncancel = cleanup;
  return anim;
}
function animateDominoFall(el, value, duration, onAnimationEnd) {
  var _a;
  const text = value === void 0 ? (_a = el.textContent) != null ? _a : "" : String(value);
  if (!text) return;
  if (prefersReducedMotion()) {
    const anim2 = el.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: duration / 2, easing: EASE_IN, fill: "forwards" }
    );
    anim2.onfinish = () => onAnimationEnd == null ? void 0 : onAnimationEnd();
    return anim2;
  }
  const previous = {
    display: el.style.display,
    flexWrap: el.style.flexWrap,
    whiteSpace: el.style.whiteSpace,
    willChange: el.style.willChange
  };
  el.style.display = "inline-flex";
  el.style.whiteSpace = "pre-wrap";
  el.style.willChange = "transform, opacity";
  el.innerHTML = "";
  const chars = Array.from(text).map((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.display = "inline-block";
    span.style.whiteSpace = "pre";
    span.style.transformOrigin = "50% 100%";
    span.style.willChange = "transform";
    el.appendChild(span);
    return span;
  });
  const states = chars.map(() => ({ angle: 0, velocity: 0, active: false, done: false }));
  if (states[0]) states[0].active = true;
  let frameId = 0;
  let finished = false;
  let reported = false;
  const total = Math.max(duration, chars.length * 90 + 360);
  const start = performance.now();
  const anim = el.animate([{ opacity: 1 }, { opacity: 1 }], { duration: total, fill: "forwards" });
  function cleanup() {
    if (finished) return;
    finished = true;
    cancelAnimationFrame(frameId);
    el.textContent = text;
    el.style.display = previous.display;
    el.style.flexWrap = previous.flexWrap;
    el.style.whiteSpace = previous.whiteSpace;
    el.style.willChange = previous.willChange;
    finishWillChange(el);
  }
  function complete() {
    cleanup();
    if (reported) return;
    reported = true;
    onAnimationEnd == null ? void 0 : onAnimationEnd();
  }
  function frame(now) {
    let allDone = true;
    const elapsed = now - start;
    chars.forEach((char, index) => {
      const state = states[index];
      if (!state.active || state.done) {
        if (!state.done) allDone = false;
        return;
      }
      state.velocity += (90 - state.angle) * 0.035;
      state.velocity *= 0.94;
      state.angle += state.velocity;
      if (state.angle > 50 && states[index + 1] && !states[index + 1].active) {
        states[index + 1].active = true;
      }
      if (state.angle >= 90) {
        state.angle = 90;
        state.velocity = 0;
        state.done = true;
      } else {
        allDone = false;
      }
      char.style.transform = `rotateZ(${state.angle}deg)`;
    });
    if (!allDone && elapsed < total) {
      frameId = requestAnimationFrame(frame);
    } else {
      complete();
    }
  }
  frameId = requestAnimationFrame(frame);
  anim.onfinish = complete;
  anim.oncancel = cleanup;
  return anim;
}
function animatePendulum(el, value, duration, onAnimationEnd) {
  var _a;
  const text = value === void 0 ? (_a = el.textContent) != null ? _a : "" : String(value);
  if (!text) return;
  if (prefersReducedMotion()) {
    const anim2 = el.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: duration / 2, easing: EASE_IN, fill: "forwards" }
    );
    anim2.onfinish = () => onAnimationEnd == null ? void 0 : onAnimationEnd();
    return anim2;
  }
  const previous = {
    display: el.style.display,
    whiteSpace: el.style.whiteSpace,
    width: el.style.width,
    minWidth: el.style.minWidth,
    willChange: el.style.willChange
  };
  const computed = getComputedStyle(el);
  const justifyContent = resolveInlineJustify(computed.textAlign);
  const currentRect = el.getBoundingClientRect();
  const nextWidth = Math.ceil(measureInlineText(el, text).width);
  const prevMinWidthPx = Number.parseFloat(previous.minWidth || "0");
  const settledMinWidth = Math.ceil(Math.max(prevMinWidthPx, currentRect.width, nextWidth));
  el.style.display = "inline-block";
  el.style.whiteSpace = "pre-wrap";
  el.style.width = `${Math.ceil(Math.max(currentRect.width, nextWidth))}px`;
  el.style.minWidth = `${settledMinWidth}px`;
  el.style.willChange = "transform, opacity";
  el.innerHTML = "";
  const row = document.createElement("span");
  row.style.display = "flex";
  row.style.width = "100%";
  row.style.justifyContent = justifyContent;
  row.style.whiteSpace = "pre";
  row.style.textAlign = computed.textAlign;
  el.appendChild(row);
  const chars = Array.from(text).map((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.display = "inline-block";
    span.style.whiteSpace = "pre";
    span.style.transformOrigin = "50% -16px";
    span.style.willChange = "transform";
    row.appendChild(span);
    return span;
  });
  const states = chars.map((_, index) => ({
    position: (index % 2 === 0 ? 1 : -1) * (14 + index * 1.8),
    velocity: 0
  }));
  let frameId = 0;
  let finished = false;
  let reported = false;
  const total = Math.max(duration, chars.length * 80 + 520);
  const start = performance.now();
  const anim = el.animate([{ opacity: 1 }, { opacity: 1 }], { duration: total, fill: "forwards" });
  function cleanup() {
    if (finished) return;
    finished = true;
    cancelAnimationFrame(frameId);
    el.textContent = text;
    el.style.display = previous.display;
    el.style.whiteSpace = previous.whiteSpace;
    el.style.width = previous.width;
    el.style.minWidth = `${settledMinWidth}px`;
    el.style.willChange = previous.willChange;
    finishWillChange(el);
  }
  function complete() {
    cleanup();
    if (reported) return;
    reported = true;
    onAnimationEnd == null ? void 0 : onAnimationEnd();
  }
  function frame(now) {
    const elapsed = now - start;
    let allDone = true;
    chars.forEach((char, index) => {
      if (elapsed < index * 90) {
        allDone = false;
        return;
      }
      const state = states[index];
      state.velocity += (0 - state.position) * 0.016;
      state.velocity *= 0.986;
      state.position += state.velocity;
      char.style.transform = `rotateZ(${state.position}deg)`;
      if (Math.abs(state.velocity) + Math.abs(state.position) >= 0.05) allDone = false;
    });
    if (!allDone && elapsed < total) {
      frameId = requestAnimationFrame(frame);
    } else {
      complete();
    }
  }
  frameId = requestAnimationFrame(frame);
  anim.onfinish = complete;
  anim.oncancel = cleanup;
  return anim;
}
function animateCenterBurst(el, value, duration, onAnimationEnd) {
  var _a;
  const text = value === void 0 ? (_a = el.textContent) != null ? _a : "" : String(value);
  if (!text) return;
  if (prefersReducedMotion()) {
    const anim2 = el.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: duration / 2, easing: EASE_IN, fill: "forwards" }
    );
    anim2.onfinish = () => onAnimationEnd == null ? void 0 : onAnimationEnd();
    return anim2;
  }
  const previous = {
    display: el.style.display,
    alignItems: el.style.alignItems,
    justifyContent: el.style.justifyContent,
    whiteSpace: el.style.whiteSpace,
    width: el.style.width,
    minWidth: el.style.minWidth,
    willChange: el.style.willChange
  };
  const computed = getComputedStyle(el);
  const justifyContent = resolveInlineJustify(computed.textAlign);
  const currentRect = el.getBoundingClientRect();
  const nextWidth = Math.ceil(measureInlineText(el, text).width);
  const prevMinWidthPx = Number.parseFloat(previous.minWidth || "0");
  const settledMinWidth = Math.ceil(Math.max(prevMinWidthPx, currentRect.width, nextWidth));
  el.style.display = "inline-block";
  el.style.whiteSpace = "pre-wrap";
  el.style.width = `${Math.ceil(Math.max(currentRect.width, nextWidth))}px`;
  el.style.minWidth = `${settledMinWidth}px`;
  el.style.willChange = "transform, opacity";
  el.innerHTML = "";
  const row = document.createElement("span");
  row.style.display = "flex";
  row.style.width = "100%";
  row.style.justifyContent = justifyContent;
  row.style.whiteSpace = "pre";
  row.style.textAlign = computed.textAlign;
  el.appendChild(row);
  const chars = Array.from(text).map((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.display = "inline-block";
    span.style.whiteSpace = "pre";
    span.style.opacity = "0";
    span.style.willChange = "transform, opacity";
    row.appendChild(span);
    return span;
  });
  const textRect = el.getBoundingClientRect();
  const centerX = textRect.left + textRect.width / 2;
  const offsets = chars.map((char) => {
    const rect = char.getBoundingClientRect();
    return rect.left + rect.width / 2 - centerX;
  });
  const xStates = chars.map((_, index) => ({ position: -offsets[index], velocity: 0 }));
  const yStates = chars.map(() => ({ position: (Math.random() - 0.5) * 40, velocity: 0 }));
  const opacityStates = chars.map(() => ({ position: 0, velocity: 0 }));
  let frameId = 0;
  let finished = false;
  let reported = false;
  const total = Math.max(duration, 900);
  const start = performance.now();
  const anim = el.animate([{ opacity: 1 }, { opacity: 1 }], { duration: total, fill: "forwards" });
  function cleanup() {
    if (finished) return;
    finished = true;
    cancelAnimationFrame(frameId);
    el.textContent = text;
    el.style.display = previous.display;
    el.style.alignItems = previous.alignItems;
    el.style.justifyContent = previous.justifyContent;
    el.style.whiteSpace = previous.whiteSpace;
    el.style.width = previous.width;
    el.style.minWidth = `${settledMinWidth}px`;
    el.style.willChange = previous.willChange;
    finishWillChange(el);
  }
  function complete() {
    cleanup();
    if (reported) return;
    reported = true;
    onAnimationEnd == null ? void 0 : onAnimationEnd();
  }
  function spring(state, target, k, damping) {
    state.velocity += (target - state.position) * k;
    state.velocity *= damping;
    state.position += state.velocity;
    return Math.abs(state.velocity) + Math.abs(target - state.position) < 0.05;
  }
  function frame(now) {
    const elapsed = now - start;
    let allDone = true;
    chars.forEach((char, index) => {
      const xDone = spring(xStates[index], 0, 0.07, 0.7);
      const yDone = spring(yStates[index], 0, 0.09, 0.68);
      spring(opacityStates[index], 1, 0.08, 0.74);
      char.style.transform = `translate(${xStates[index].position}px, ${yStates[index].position}px)`;
      char.style.opacity = String(Math.max(0, Math.min(1, opacityStates[index].position)));
      if (!xDone || !yDone) allDone = false;
    });
    if (!allDone && elapsed < total) {
      frameId = requestAnimationFrame(frame);
    } else {
      complete();
    }
  }
  frameId = requestAnimationFrame(frame);
  anim.onfinish = complete;
  anim.oncancel = cleanup;
  return anim;
}
function animateGravityBounce(el, value, duration, onAnimationEnd) {
  var _a;
  const text = value === void 0 ? (_a = el.textContent) != null ? _a : "" : String(value);
  if (!text) return;
  if (prefersReducedMotion()) {
    const anim2 = el.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: duration / 2, easing: EASE_IN, fill: "forwards" }
    );
    anim2.onfinish = () => onAnimationEnd == null ? void 0 : onAnimationEnd();
    return anim2;
  }
  const previous = {
    display: el.style.display,
    alignItems: el.style.alignItems,
    justifyContent: el.style.justifyContent,
    whiteSpace: el.style.whiteSpace,
    width: el.style.width,
    minWidth: el.style.minWidth,
    willChange: el.style.willChange
  };
  const computed = getComputedStyle(el);
  const justifyContent = resolveInlineJustify(computed.textAlign);
  const currentRect = el.getBoundingClientRect();
  const nextWidth = Math.ceil(measureInlineText(el, text).width);
  const prevMinWidthPx = Number.parseFloat(previous.minWidth || "0");
  const settledMinWidth = Math.ceil(Math.max(prevMinWidthPx, currentRect.width, nextWidth));
  el.style.display = "inline-block";
  el.style.whiteSpace = "pre-wrap";
  el.style.width = `${Math.ceil(Math.max(currentRect.width, nextWidth))}px`;
  el.style.minWidth = `${settledMinWidth}px`;
  el.style.willChange = "transform, opacity";
  el.innerHTML = "";
  const row = document.createElement("span");
  row.style.display = "flex";
  row.style.width = "100%";
  row.style.justifyContent = justifyContent;
  row.style.whiteSpace = "pre";
  row.style.textAlign = computed.textAlign;
  el.appendChild(row);
  const chars = Array.from(text).map((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.display = "inline-block";
    span.style.whiteSpace = "pre";
    span.style.opacity = "0";
    span.style.willChange = "transform, opacity";
    row.appendChild(span);
    return span;
  });
  const states = chars.map((_, index) => ({
    position: -(60 + index * 12),
    velocity: 0,
    settled: false,
    opacity: 0,
    opacityVelocity: 0
  }));
  let frameId = 0;
  let finished = false;
  let reported = false;
  const total = Math.max(duration, chars.length * 70 + 900);
  const start = performance.now();
  const anim = el.animate([{ opacity: 1 }, { opacity: 1 }], { duration: total, fill: "forwards" });
  function cleanup() {
    if (finished) return;
    finished = true;
    cancelAnimationFrame(frameId);
    el.textContent = text;
    el.style.display = previous.display;
    el.style.whiteSpace = previous.whiteSpace;
    el.style.width = previous.width;
    el.style.minWidth = `${settledMinWidth}px`;
    el.style.willChange = previous.willChange;
    finishWillChange(el);
  }
  function complete() {
    cleanup();
    if (reported) return;
    reported = true;
    onAnimationEnd == null ? void 0 : onAnimationEnd();
  }
  function frame(now) {
    const elapsed = now - start;
    let done = true;
    chars.forEach((char, index) => {
      if (elapsed < index * 64) {
        done = false;
        return;
      }
      const state = states[index];
      if (!state.settled) {
        state.velocity += 0.9;
        state.position += state.velocity;
        if (state.position >= 0) {
          state.position = 0;
          state.velocity *= -0.42;
          if (Math.abs(state.velocity) < 1) {
            state.velocity = 0;
            state.settled = true;
          } else {
            done = false;
          }
        } else {
          done = false;
        }
      }
      state.opacityVelocity += (1 - state.opacity) * 0.07;
      state.opacityVelocity *= 0.78;
      state.opacity += state.opacityVelocity;
      char.style.transform = `translateY(${state.position}px)`;
      char.style.opacity = String(Math.max(0, Math.min(1, state.opacity)));
    });
    if (!done && elapsed < total) {
      frameId = requestAnimationFrame(frame);
    } else {
      complete();
    }
  }
  frameId = requestAnimationFrame(frame);
  anim.onfinish = complete;
  anim.oncancel = cleanup;
  return anim;
}
function animateMinimalistRipple(el, value, duration, onAnimationEnd) {
  var _a;
  const text = value === void 0 ? (_a = el.textContent) != null ? _a : "" : String(value);
  if (!text) return;
  if (prefersReducedMotion()) {
    const anim2 = el.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: duration / 2, easing: EASE_IN, fill: "forwards" }
    );
    anim2.onfinish = () => onAnimationEnd == null ? void 0 : onAnimationEnd();
    return anim2;
  }
  const computed = getComputedStyle(el);
  const rect = el.getBoundingClientRect();
  const fontSize = Number.parseFloat(computed.fontSize) || 48;
  const width = Math.max(180, Math.ceil(rect.width + fontSize * 1.4));
  const height = Math.max(fontSize * 1.5, Math.ceil(rect.height + fontSize));
  const isDark = document.documentElement.classList.contains("dark");
  const uid = Math.random().toString(36).slice(2);
  const previous = {
    position: el.style.position,
    display: el.style.display,
    overflow: el.style.overflow,
    color: el.style.color,
    width: el.style.width,
    height: el.style.height,
    minWidth: el.style.minWidth,
    verticalAlign: el.style.verticalAlign
  };
  el.style.position = "relative";
  el.style.display = "inline-block";
  el.style.overflow = "hidden";
  el.style.color = "transparent";
  el.style.width = `${width}px`;
  el.style.height = `${height}px`;
  el.style.minWidth = `${width}px`;
  el.style.verticalAlign = "middle";
  el.style.willChange = "transform, opacity";
  el.innerHTML = "";
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", `${width}`);
  svg.setAttribute("height", `${height}`);
  svg.setAttribute("viewBox", "0 0 150 50");
  svg.setAttribute("aria-hidden", "true");
  Object.assign(svg.style, {
    display: "block",
    width: "100%",
    height: "100%",
    userSelect: "none"
  });
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  const monoGradient = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
  const maskGradient = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
  const mask = document.createElementNS("http://www.w3.org/2000/svg", "mask");
  const maskRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  const textNode = document.createElementNS("http://www.w3.org/2000/svg", "text");
  const monoId = `trigr-mono-${uid}`;
  const maskGradientId = `trigr-mask-gradient-${uid}`;
  const maskId = `trigr-mask-${uid}`;
  monoGradient.setAttribute("id", monoId);
  monoGradient.setAttribute("gradientUnits", "userSpaceOnUse");
  monoGradient.setAttribute("r", "35%");
  maskGradient.setAttribute("id", maskGradientId);
  maskGradient.setAttribute("gradientUnits", "userSpaceOnUse");
  maskGradient.setAttribute("r", "30%");
  const stops = isDark ? [["0%", "#f3f4f6"], ["50%", "#52525b"], ["100%", "#18181b"]] : [["0%", "#ffffff"], ["50%", "#a3a3a3"], ["100%", "#171717"]];
  stops.forEach(([offset, color]) => {
    const stop = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop.setAttribute("offset", offset);
    stop.setAttribute("stop-color", color);
    monoGradient.appendChild(stop);
  });
  [["0%", "black"], ["80%", "white"], ["100%", "white"]].forEach(([offset, color]) => {
    const stop = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop.setAttribute("offset", offset);
    stop.setAttribute("stop-color", color);
    maskGradient.appendChild(stop);
  });
  mask.setAttribute("id", maskId);
  maskRect.setAttribute("x", "0");
  maskRect.setAttribute("y", "0");
  maskRect.setAttribute("width", "100%");
  maskRect.setAttribute("height", "100%");
  maskRect.setAttribute("fill", `url(#${maskGradientId})`);
  mask.appendChild(maskRect);
  textNode.setAttribute("x", "50%");
  textNode.setAttribute("y", "50%");
  textNode.setAttribute("text-anchor", "middle");
  textNode.setAttribute("dominant-baseline", "middle");
  textNode.setAttribute("fill", `url(#${monoId})`);
  textNode.setAttribute("mask", `url(#${maskId})`);
  textNode.setAttribute("font-family", computed.fontFamily || "monospace");
  textNode.setAttribute("font-weight", computed.fontWeight || "300");
  textNode.setAttribute("letter-spacing", computed.letterSpacing === "normal" ? "0.12em" : computed.letterSpacing);
  textNode.setAttribute("font-size", "16");
  textNode.textContent = text;
  textNode.style.opacity = "0";
  defs.append(monoGradient, maskGradient, mask);
  svg.append(defs, textNode);
  el.appendChild(svg);
  let targetX = 75;
  let targetY = 25;
  let currentX = 75;
  let currentY = 25;
  let frameId = 0;
  let finished = false;
  const total = Math.max(700, duration);
  const anim = textNode.animate(
    [{ opacity: 0 }, { opacity: 1 }],
    { duration: Math.min(600, total), easing: EASE_IN_OUT, fill: "forwards" }
  );
  function move(event) {
    const bounds = svg.getBoundingClientRect();
    targetX = (event.clientX - bounds.left) / bounds.width * 150;
    targetY = (event.clientY - bounds.top) / bounds.height * 50;
  }
  function cleanup() {
    if (finished) return;
    finished = true;
    cancelAnimationFrame(frameId);
    el.removeEventListener("mousemove", move);
    el.textContent = text;
    el.style.position = previous.position;
    el.style.display = previous.display;
    el.style.overflow = previous.overflow;
    el.style.color = previous.color;
    el.style.width = previous.width;
    el.style.height = previous.height;
    el.style.minWidth = previous.minWidth;
    el.style.verticalAlign = previous.verticalAlign;
    finishWillChange(el);
  }
  function frame() {
    currentX += (targetX - currentX) * 0.18;
    currentY += (targetY - currentY) * 0.18;
    monoGradient.setAttribute("cx", `${currentX}`);
    monoGradient.setAttribute("cy", `${currentY}`);
    maskGradient.setAttribute("cx", `${currentX}`);
    maskGradient.setAttribute("cy", `${currentY}`);
    frameId = requestAnimationFrame(frame);
  }
  el.addEventListener("mousemove", move);
  frameId = requestAnimationFrame(frame);
  anim.onfinish = () => {
    window.setTimeout(() => {
      cleanup();
      onAnimationEnd == null ? void 0 : onAnimationEnd();
    }, Math.max(120, total - Math.min(600, total)));
  };
  anim.oncancel = cleanup;
  return anim;
}
function animateScrollFanIn(el, value, duration, onAnimationEnd) {
  var _a;
  const text = value === void 0 ? (_a = el.textContent) != null ? _a : "" : String(value);
  if (!text) return;
  if (prefersReducedMotion()) {
    const anim2 = el.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: duration / 2, easing: EASE_IN, fill: "forwards" }
    );
    anim2.onfinish = () => onAnimationEnd == null ? void 0 : onAnimationEnd();
    return anim2;
  }
  const previous = {
    display: el.style.display,
    whiteSpace: el.style.whiteSpace,
    perspective: el.style.perspective,
    width: el.style.width,
    minWidth: el.style.minWidth,
    willChange: el.style.willChange
  };
  const computed = getComputedStyle(el);
  const justifyContent = resolveInlineJustify(computed.textAlign);
  const currentRect = el.getBoundingClientRect();
  const nextWidth = Math.ceil(measureInlineText(el, text).width);
  const prevMinWidthPx = Number.parseFloat(previous.minWidth || "0");
  const settledMinWidth = Math.ceil(Math.max(prevMinWidthPx, currentRect.width, nextWidth));
  el.style.display = "inline-block";
  el.style.whiteSpace = "pre-wrap";
  el.style.perspective = "500px";
  el.style.width = `${Math.ceil(Math.max(currentRect.width, nextWidth))}px`;
  el.style.minWidth = `${settledMinWidth}px`;
  el.style.willChange = "transform, opacity";
  el.innerHTML = "";
  const chars = Array.from(text);
  const row = document.createElement("span");
  row.style.display = "flex";
  row.style.width = "100%";
  row.style.justifyContent = justifyContent;
  row.style.whiteSpace = "pre";
  row.style.textAlign = computed.textAlign;
  el.appendChild(row);
  const center = Math.floor(chars.length / 2);
  const spans = chars.map((char, index) => {
    const span = document.createElement("span");
    const distance = index - center;
    const x = Math.max(-260, Math.min(260, distance * 50));
    const rotateX = Math.max(-70, Math.min(70, distance * 50));
    span.textContent = char;
    span.style.display = "inline-block";
    span.style.whiteSpace = "pre";
    span.style.color = "currentColor";
    span.style.willChange = "transform, opacity";
    span.style.transformOrigin = "center";
    span.style.transform = `translateX(${x}px) rotateX(${rotateX}deg)`;
    span.style.opacity = "0";
    row.appendChild(span);
    return { span, x, rotateX };
  });
  const childDuration = Math.max(420, duration * 0.75);
  let remaining = spans.length;
  let finished = false;
  const anim = el.animate([{ opacity: 1 }, { opacity: 1 }], { duration: childDuration + 120, fill: "forwards" });
  function cleanup() {
    if (finished) return;
    finished = true;
    el.textContent = text;
    el.style.display = previous.display;
    el.style.whiteSpace = previous.whiteSpace;
    el.style.perspective = previous.perspective;
    el.style.width = previous.width;
    el.style.minWidth = `${settledMinWidth}px`;
    el.style.willChange = previous.willChange;
    finishWillChange(el);
  }
  spans.forEach(({ span, x, rotateX }) => {
    const child = span.animate(
      [
        { opacity: 0, transform: `translateX(${x}px) rotateX(${rotateX}deg) scale(0.96)` },
        { opacity: 1, transform: "translateX(0) rotateX(0deg) scale(1)" }
      ],
      { duration: childDuration, easing: EASE_IN_OUT, fill: "forwards" }
    );
    child.onfinish = () => {
      remaining -= 1;
      if (remaining === 0) {
        cleanup();
        onAnimationEnd == null ? void 0 : onAnimationEnd();
      }
    };
  });
  anim.oncancel = cleanup;
  return anim;
}
function animateTextRotate(el, prevValue, nextValue, duration, onAnimationEnd) {
  var _a, _b;
  const oldText = prevValue === void 0 ? (_a = el.textContent) != null ? _a : "" : String(prevValue);
  const newText = nextValue === void 0 ? (_b = el.textContent) != null ? _b : "" : String(nextValue);
  if (!newText) return;
  if (prefersReducedMotion()) {
    const anim2 = el.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: duration / 2, easing: EASE_IN, fill: "forwards" }
    );
    anim2.onfinish = () => onAnimationEnd == null ? void 0 : onAnimationEnd();
    return anim2;
  }
  const oldSize = measureInlineText(el, oldText);
  const newSize = measureInlineText(el, newText);
  const currentRect = el.getBoundingClientRect();
  const computed = getComputedStyle(el);
  const justifyContent = resolveInlineJustify(computed.textAlign);
  const stableWidth = Math.ceil(Math.max(oldSize.width, newSize.width, currentRect.width));
  const stableHeight = Math.ceil(Math.max(oldSize.height, newSize.height, currentRect.height));
  const previous = {
    position: el.style.position,
    display: el.style.display,
    overflow: el.style.overflow,
    whiteSpace: el.style.whiteSpace,
    width: el.style.width,
    minWidth: el.style.minWidth,
    height: el.style.height,
    minHeight: el.style.minHeight,
    willChange: el.style.willChange
  };
  el.style.position = "relative";
  el.style.display = "inline-block";
  el.style.overflow = "hidden";
  el.style.whiteSpace = "pre-wrap";
  el.style.width = `${stableWidth}px`;
  el.style.minWidth = `${stableWidth}px`;
  el.style.height = `${stableHeight}px`;
  el.style.minHeight = `${stableHeight}px`;
  el.style.willChange = "transform, opacity";
  el.innerHTML = "";
  function makeRow(text) {
    const row = document.createElement("span");
    row.style.display = "flex";
    row.style.alignItems = "center";
    row.style.justifyContent = justifyContent;
    row.style.flexWrap = "wrap";
    row.style.whiteSpace = "pre-wrap";
    row.style.textAlign = computed.textAlign;
    row.style.inset = "0";
    row.style.width = "100%";
    row.style.height = "100%";
    splitGraphemes(text).forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      span.style.whiteSpace = "pre";
      span.style.willChange = "transform, opacity";
      row.appendChild(span);
    });
    return row;
  }
  const oldRow = makeRow(oldText);
  const newRow = makeRow(newText);
  oldRow.style.position = "absolute";
  oldRow.style.left = "0";
  oldRow.style.top = "0";
  newRow.style.position = "absolute";
  newRow.style.left = "0";
  newRow.style.top = "0";
  el.append(oldRow, newRow);
  const oldChars = Array.from(oldRow.children);
  const newChars = Array.from(newRow.children);
  const total = Math.max(oldChars.length, newChars.length, 1);
  const stagger = Math.min(35, Math.max(12, duration * 0.05));
  const childDuration = Math.max(260, duration * 0.72);
  let remaining = oldChars.length + newChars.length;
  let reported = false;
  let finished = false;
  const anim = el.animate([{ opacity: 1 }, { opacity: 1 }], { duration: childDuration + total * stagger, fill: "forwards" });
  function cleanup() {
    if (finished) return;
    finished = true;
    el.textContent = newText;
    el.style.position = previous.position;
    el.style.display = previous.display;
    el.style.overflow = previous.overflow;
    el.style.whiteSpace = previous.whiteSpace;
    el.style.width = previous.width;
    el.style.minWidth = previous.minWidth;
    el.style.height = previous.height;
    el.style.minHeight = previous.minHeight;
    el.style.willChange = previous.willChange;
    finishWillChange(el);
  }
  function doneOne() {
    remaining -= 1;
    if (remaining > 0 || reported) return;
    reported = true;
    cleanup();
    onAnimationEnd == null ? void 0 : onAnimationEnd();
  }
  if (remaining === 0) {
    cleanup();
    onAnimationEnd == null ? void 0 : onAnimationEnd();
    return anim;
  }
  oldChars.forEach((char, index) => {
    const child = char.animate(
      [
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0, transform: "translateY(-120%)" }
      ],
      { duration: childDuration * 0.82, delay: index * stagger, easing: EASE_OUT, fill: "forwards" }
    );
    child.onfinish = doneOne;
  });
  newChars.forEach((char, index) => {
    const child = char.animate(
      [
        { opacity: 0, transform: "translateY(100%)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      { duration: childDuration, delay: index * stagger + stagger * 1.5, easing: SPRING, fill: "forwards" }
    );
    child.onfinish = doneOne;
  });
  anim.oncancel = cleanup;
  return anim;
}
function animateGooeyMorph(el, prevValue, nextValue, duration, onAnimationEnd) {
  var _a, _b;
  const oldText = prevValue === void 0 ? (_a = el.textContent) != null ? _a : "" : String(prevValue);
  const newText = nextValue === void 0 ? (_b = el.textContent) != null ? _b : "" : String(nextValue);
  if (!newText) return;
  if (prefersReducedMotion()) {
    const anim2 = el.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: duration / 2, easing: EASE_IN, fill: "forwards" }
    );
    anim2.onfinish = () => onAnimationEnd == null ? void 0 : onAnimationEnd();
    return anim2;
  }
  const uid = Math.random().toString(36).slice(2);
  const oldSize = measureInlineText(el, oldText);
  const newSize = measureInlineText(el, newText);
  const currentRect = el.getBoundingClientRect();
  const computed = getComputedStyle(el);
  const justifyContent = resolveInlineJustify(computed.textAlign);
  const justifyItems = justifyContent === "center" ? "center" : justifyContent === "flex-end" ? "end" : "start";
  const stableWidth = Math.ceil(Math.max(oldSize.width, newSize.width, currentRect.width));
  const stableHeight = Math.ceil(Math.max(oldSize.height, newSize.height, currentRect.height));
  const previous = {
    position: el.style.position,
    display: el.style.display,
    overflow: el.style.overflow,
    width: el.style.width,
    minWidth: el.style.minWidth,
    height: el.style.height,
    minHeight: el.style.minHeight,
    willChange: el.style.willChange
  };
  el.style.position = "relative";
  el.style.display = "inline-block";
  el.style.overflow = "visible";
  el.style.width = `${stableWidth}px`;
  el.style.minWidth = `${stableWidth}px`;
  el.style.height = `${stableHeight}px`;
  el.style.minHeight = `${stableHeight}px`;
  el.style.willChange = "transform, opacity";
  el.innerHTML = "";
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  svg.style.position = "absolute";
  svg.style.width = "0";
  svg.style.height = "0";
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  const filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
  const matrix = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
  filter.setAttribute("id", `trigr-gooey-${uid}`);
  matrix.setAttribute("in", "SourceGraphic");
  matrix.setAttribute("type", "matrix");
  matrix.setAttribute("values", "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 255 -140");
  filter.appendChild(matrix);
  defs.appendChild(filter);
  svg.appendChild(defs);
  const wrap = document.createElement("span");
  wrap.style.display = "grid";
  wrap.style.alignItems = "center";
  wrap.style.justifyItems = justifyItems;
  wrap.style.width = "100%";
  wrap.style.height = "100%";
  wrap.style.textAlign = computed.textAlign;
  wrap.style.filter = `url(#trigr-gooey-${uid})`;
  const oldSpan = document.createElement("span");
  const newSpan = document.createElement("span");
  oldSpan.textContent = oldText;
  newSpan.textContent = newText;
  [oldSpan, newSpan].forEach((span) => {
    span.style.gridArea = "1 / 1";
    span.style.display = "inline-block";
    span.style.textAlign = computed.textAlign;
    span.style.justifySelf = justifyItems;
    span.style.userSelect = "none";
    span.style.willChange = "filter, opacity";
  });
  oldSpan.style.opacity = "1";
  newSpan.style.opacity = "0";
  wrap.append(oldSpan, newSpan);
  el.append(svg, wrap);
  let frameId = 0;
  let finished = false;
  const total = Math.max(650, duration);
  const start = performance.now();
  const anim = el.animate([{ opacity: 1 }, { opacity: 1 }], { duration: total, fill: "forwards" });
  function cleanup() {
    if (finished) return;
    finished = true;
    cancelAnimationFrame(frameId);
    el.textContent = newText;
    el.style.position = previous.position;
    el.style.display = previous.display;
    el.style.overflow = previous.overflow;
    el.style.width = previous.width;
    el.style.minWidth = previous.minWidth;
    el.style.height = previous.height;
    el.style.minHeight = previous.minHeight;
    el.style.willChange = previous.willChange;
    finishWillChange(el);
  }
  function setMorph(fraction) {
    const next = Math.max(1e-3, Math.min(1, fraction));
    const old = Math.max(1e-3, 1 - next);
    newSpan.style.filter = `blur(${Math.min(8 / next - 8, 28)}px)`;
    newSpan.style.opacity = `${Math.pow(next, 0.4)}`;
    oldSpan.style.filter = `blur(${Math.min(8 / old - 8, 28)}px)`;
    oldSpan.style.opacity = `${Math.pow(old, 0.4)}`;
  }
  function frame(now) {
    const fraction = Math.min(1, (now - start) / total);
    setMorph(fraction);
    if (fraction < 1) frameId = requestAnimationFrame(frame);
  }
  frameId = requestAnimationFrame(frame);
  anim.onfinish = () => {
    cleanup();
    onAnimationEnd == null ? void 0 : onAnimationEnd();
  };
  anim.oncancel = cleanup;
  return anim;
}
function animateRandomLetterSwap(el, value, duration, onAnimationEnd) {
  var _a;
  const text = value === void 0 ? (_a = el.textContent) != null ? _a : "" : String(value);
  if (!text) return;
  if (prefersReducedMotion()) {
    const anim2 = el.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: duration / 2, easing: EASE_IN, fill: "forwards" }
    );
    anim2.onfinish = () => onAnimationEnd == null ? void 0 : onAnimationEnd();
    return anim2;
  }
  const previous = {
    display: el.style.display,
    alignItems: el.style.alignItems,
    justifyContent: el.style.justifyContent,
    overflow: el.style.overflow,
    whiteSpace: el.style.whiteSpace,
    willChange: el.style.willChange
  };
  el.style.display = "inline-block";
  el.style.overflow = "hidden";
  el.style.whiteSpace = "pre";
  el.style.willChange = "transform, opacity";
  el.innerHTML = "";
  const chars = splitGraphemes(text);
  const order = chars.map((_, index) => index).sort(() => Math.random() - 0.5);
  const slots = chars.map((char) => {
    const slot = document.createElement("span");
    const primary = document.createElement("span");
    const secondary = document.createElement("span");
    slot.style.display = "inline-flex";
    slot.style.position = "relative";
    slot.style.alignItems = "flex-end";
    slot.style.overflow = "hidden";
    slot.style.height = "1.22em";
    slot.style.lineHeight = "1.22";
    slot.style.verticalAlign = "baseline";
    slot.style.whiteSpace = "pre";
    primary.textContent = char;
    secondary.textContent = char;
    primary.style.display = "inline-block";
    primary.style.position = "relative";
    primary.style.willChange = "transform";
    secondary.style.display = "inline-block";
    secondary.style.position = "absolute";
    secondary.style.left = "0";
    secondary.style.top = "-100%";
    secondary.style.willChange = "transform";
    slot.append(primary, secondary);
    el.appendChild(slot);
    return { primary, secondary };
  });
  const stagger = Math.max(14, Math.min(36, duration * 0.04));
  const childDuration = Math.max(220, duration * 0.62);
  let remaining = slots.length * 2;
  let finished = false;
  const anim = el.animate([{ opacity: 1 }, { opacity: 1 }], { duration: childDuration + slots.length * stagger + 40, fill: "forwards" });
  function cleanup() {
    if (finished) return;
    finished = true;
    el.querySelectorAll("span > span:last-child").forEach((s) => s.remove());
    el.querySelectorAll("span > span:first-child").forEach((s) => {
      const span = s;
      span.style.position = "";
      span.style.willChange = "";
      span.style.display = "";
    });
    const slots2 = Array.from(el.children);
    slots2.forEach((slot) => {
      const primary = slot.querySelector("span");
      if (primary) slot.replaceWith(primary);
    });
    el.style.display = previous.display;
    el.style.alignItems = previous.alignItems;
    el.style.justifyContent = previous.justifyContent;
    el.style.overflow = previous.overflow;
    el.style.whiteSpace = previous.whiteSpace;
    el.style.willChange = previous.willChange;
    finishWillChange(el);
  }
  function doneOne() {
    remaining -= 1;
    if (remaining > 0) return;
    cleanup();
    onAnimationEnd == null ? void 0 : onAnimationEnd();
  }
  if (remaining === 0) {
    cleanup();
    onAnimationEnd == null ? void 0 : onAnimationEnd();
    return anim;
  }
  order.forEach((charIndex, orderIndex) => {
    const slot = slots[charIndex];
    const delay = orderIndex * stagger;
    const primary = slot.primary.animate(
      [
        { transform: "translateY(0)" },
        { transform: "translateY(100%)" }
      ],
      { duration: childDuration, delay, easing: SPRING, fill: "forwards" }
    );
    const secondary = slot.secondary.animate(
      [
        { transform: "translateY(0)" },
        { transform: "translateY(100%)" }
      ],
      { duration: childDuration, delay, easing: SPRING, fill: "forwards" }
    );
    primary.onfinish = doneOne;
    secondary.onfinish = doneOne;
  });
  anim.oncancel = cleanup;
  return anim;
}
function animateTextEffect(el, value, duration, onAnimationEnd) {
  var _a;
  const text = value === void 0 ? (_a = el.textContent) != null ? _a : "" : String(value);
  if (!text) return;
  if (prefersReducedMotion()) {
    const anim2 = el.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: duration / 2, easing: EASE_IN, fill: "forwards" }
    );
    anim2.onfinish = () => onAnimationEnd == null ? void 0 : onAnimationEnd();
    return anim2;
  }
  const previous = {
    display: el.style.display,
    whiteSpace: el.style.whiteSpace,
    width: el.style.width,
    minWidth: el.style.minWidth,
    willChange: el.style.willChange
  };
  const currentRect = el.getBoundingClientRect();
  const nextWidth = Math.ceil(measureInlineText(el, text).width);
  const prevMinWidthPx = Number.parseFloat(previous.minWidth || "0");
  const settledMinWidth = Math.ceil(Math.max(prevMinWidthPx, currentRect.width, nextWidth));
  el.style.display = "inline-block";
  el.style.whiteSpace = "pre-wrap";
  el.style.width = `${Math.ceil(Math.max(currentRect.width, nextWidth))}px`;
  el.style.minWidth = `${settledMinWidth}px`;
  el.style.willChange = "transform, opacity";
  el.innerHTML = "";
  const segments = text.split(/(\s+)/);
  const words = segments.map((segment) => {
    const span = document.createElement("span");
    span.textContent = segment;
    span.style.display = /^\s+$/.test(segment) ? "inline" : "inline-block";
    span.style.whiteSpace = "pre";
    span.style.willChange = "transform, opacity, filter";
    span.style.opacity = /^\s+$/.test(segment) ? "1" : "0";
    el.appendChild(span);
    return span;
  }).filter((span) => {
    var _a2;
    return !/^\s+$/.test((_a2 = span.textContent) != null ? _a2 : "");
  });
  const stagger = Math.max(24, Math.min(60, duration * 0.08));
  const childDuration = Math.max(320, duration * 0.72);
  let remaining = words.length;
  let finished = false;
  const anim = el.animate([{ opacity: 1 }, { opacity: 1 }], { duration: childDuration + words.length * stagger, fill: "forwards" });
  function cleanup() {
    if (finished) return;
    finished = true;
    el.textContent = text;
    el.style.display = previous.display;
    el.style.whiteSpace = previous.whiteSpace;
    el.style.width = previous.width;
    el.style.minWidth = `${settledMinWidth}px`;
    el.style.willChange = previous.willChange;
    finishWillChange(el);
  }
  function doneOne() {
    remaining -= 1;
    if (remaining > 0) return;
    cleanup();
    onAnimationEnd == null ? void 0 : onAnimationEnd();
  }
  if (remaining === 0) {
    cleanup();
    onAnimationEnd == null ? void 0 : onAnimationEnd();
    return anim;
  }
  words.forEach((word, index) => {
    const child = word.animate(
      [
        { opacity: 0, filter: "blur(12px)", transform: "translateY(20px)" },
        { opacity: 1, filter: "blur(0px)", transform: "translateY(0)" }
      ],
      { duration: childDuration, delay: index * stagger, easing: SMOOTH, fill: "forwards" }
    );
    child.onfinish = doneOne;
  });
  anim.oncancel = cleanup;
  return anim;
}
function animateStaggerText(el, value, duration, onAnimationEnd) {
  var _a;
  const text = value === void 0 ? (_a = el.textContent) != null ? _a : "" : String(value);
  if (!text) return;
  if (prefersReducedMotion()) {
    const anim2 = el.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: duration / 2, easing: EASE_IN, fill: "forwards" }
    );
    anim2.onfinish = () => onAnimationEnd == null ? void 0 : onAnimationEnd();
    return anim2;
  }
  const previous = {
    display: el.style.display,
    flexWrap: el.style.flexWrap,
    whiteSpace: el.style.whiteSpace,
    width: el.style.width,
    minWidth: el.style.minWidth,
    willChange: el.style.willChange
  };
  const currentRect = el.getBoundingClientRect();
  const nextWidth = Math.ceil(measureInlineText(el, text).width);
  const prevMinWidthPx = Number.parseFloat(previous.minWidth || "0");
  const settledMinWidth = Math.ceil(Math.max(prevMinWidthPx, currentRect.width, nextWidth));
  el.style.display = "inline-block";
  el.style.flexWrap = "wrap";
  el.style.whiteSpace = "pre-wrap";
  el.style.width = `${Math.ceil(Math.max(currentRect.width, nextWidth))}px`;
  el.style.minWidth = `${settledMinWidth}px`;
  el.style.willChange = "transform, opacity";
  el.innerHTML = "";
  const chars = [];
  text.split(" ").forEach((word, wordIndex, words) => {
    const wordEl = document.createElement("span");
    wordEl.style.display = "inline-block";
    wordEl.style.whiteSpace = "nowrap";
    splitGraphemes(word).forEach((char) => {
      const clip = document.createElement("span");
      const inner = document.createElement("span");
      clip.style.display = "inline-block";
      clip.style.overflow = "hidden";
      inner.textContent = char;
      inner.style.display = "inline-block";
      inner.style.opacity = "0";
      inner.style.transform = "translateY(100%)";
      inner.style.willChange = "transform, opacity";
      clip.appendChild(inner);
      wordEl.appendChild(clip);
      chars.push(inner);
    });
    el.appendChild(wordEl);
    if (wordIndex < words.length - 1) el.appendChild(document.createTextNode(" "));
  });
  const stagger = Math.max(18, Math.min(50, duration * 0.06));
  const childDuration = Math.max(280, duration * 0.68);
  let remaining = chars.length;
  let finished = false;
  const anim = el.animate([{ opacity: 1 }, { opacity: 1 }], { duration: childDuration + chars.length * stagger, fill: "forwards" });
  function cleanup() {
    if (finished) return;
    finished = true;
    el.textContent = text;
    el.style.display = previous.display;
    el.style.flexWrap = previous.flexWrap;
    el.style.whiteSpace = previous.whiteSpace;
    el.style.width = previous.width;
    el.style.minWidth = `${settledMinWidth}px`;
    el.style.willChange = previous.willChange;
    finishWillChange(el);
  }
  function doneOne() {
    remaining -= 1;
    if (remaining > 0) return;
    cleanup();
    onAnimationEnd == null ? void 0 : onAnimationEnd();
  }
  if (remaining === 0) {
    cleanup();
    onAnimationEnd == null ? void 0 : onAnimationEnd();
    return anim;
  }
  chars.forEach((char, index) => {
    const child = char.animate(
      [
        { opacity: 0, transform: "translateY(100%)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      { duration: childDuration, delay: index * stagger, easing: EASE_IN, fill: "forwards" }
    );
    child.onfinish = doneOne;
  });
  anim.oncancel = cleanup;
  return anim;
}
function animateTextMorph(el, prevValue, nextValue, baseDuration, onAnimationEnd) {
  var _a;
  const oldText = prevValue === void 0 ? "" : String(prevValue);
  const newText = nextValue === void 0 ? (_a = el.textContent) != null ? _a : "" : String(nextValue);
  if (prefersReducedMotion()) {
    const { oldEl, newEl, cleanup } = prepareStableTextSwap(el, oldText, newText);
    oldEl.animate([{ opacity: 1 }, { opacity: 0 }], { duration: baseDuration / 2, easing: EASE_OUT, fill: "forwards" });
    const anim = newEl.animate([{ opacity: 0 }, { opacity: 1 }], { duration: baseDuration / 2, easing: EASE_IN, fill: "forwards" });
    anim.onfinish = () => {
      cleanup();
      onAnimationEnd == null ? void 0 : onAnimationEnd();
    };
    anim.oncancel = cleanup;
    return;
  }
  const chars = Array.from(newText.length > oldText.length ? newText : oldText);
  const oldSize = measureInlineText(el, oldText);
  const newSize = measureInlineText(el, newText);
  const currentRect = el.getBoundingClientRect();
  const computed = getComputedStyle(el);
  const justifyContent = resolveInlineJustify(computed.textAlign);
  const stableWidth = Math.ceil(Math.max(oldSize.width, newSize.width, currentRect.width));
  const previous = {
    display: el.style.display,
    whiteSpace: el.style.whiteSpace,
    width: el.style.width,
    minWidth: el.style.minWidth,
    willChange: el.style.willChange
  };
  const prevMinWidthPx = Number.parseFloat(previous.minWidth || "0");
  const settledMinWidth = Math.ceil(Math.max(prevMinWidthPx, stableWidth));
  el.style.willChange = "transform, opacity";
  el.style.display = "inline-block";
  el.style.whiteSpace = "pre";
  el.style.width = `${stableWidth}px`;
  el.style.minWidth = `${settledMinWidth}px`;
  el.innerHTML = "";
  const duration = Math.max(400, baseDuration + Math.max(0, chars.length - 5) * 15);
  const row = document.createElement("span");
  row.style.display = "flex";
  row.style.alignItems = "baseline";
  row.style.justifyContent = justifyContent;
  row.style.whiteSpace = "pre";
  row.style.width = "100%";
  row.style.textAlign = computed.textAlign;
  el.appendChild(row);
  chars.forEach((_, i) => {
    const oldChar = oldText[i];
    const newChar = newText[i];
    const same = oldChar !== void 0 && oldChar === newChar;
    const slot = document.createElement("span");
    slot.style.display = "inline-grid";
    slot.style.placeItems = "center";
    slot.style.position = "relative";
    slot.style.minWidth = same || newChar === void 0 ? "auto" : "0.55em";
    row.appendChild(slot);
    if (same) {
      slot.textContent = newChar;
      slot.animate(
        [{ opacity: 1, transform: "scale(1)" }, { opacity: 1, transform: "scale(1)" }],
        { duration: duration * 0.55, delay: i * 15, easing: SMOOTH, fill: "forwards" }
      );
      return;
    }
    if (oldChar !== void 0) {
      const oldSpan = document.createElement("span");
      oldSpan.textContent = oldChar;
      oldSpan.style.gridArea = "1 / 1";
      slot.appendChild(oldSpan);
      oldSpan.animate(
        [{ opacity: 1, transform: "translateY(0) scale(1)" }, { opacity: 0, transform: "translateY(-4px) scale(0.5)" }],
        { duration: duration * 0.45, delay: i * 15, easing: EASE_OUT, fill: "forwards" }
      );
    }
    if (newChar !== void 0) {
      const newSpan = document.createElement("span");
      newSpan.textContent = newChar;
      newSpan.style.gridArea = "1 / 1";
      slot.appendChild(newSpan);
      newSpan.animate(
        [{ opacity: 0, transform: "translateY(4px) scale(0.5)" }, { opacity: 1, transform: "translateY(0) scale(1)" }],
        { duration: duration * 0.65, delay: i * 15 + 55, easing: SPRING, fill: "forwards" }
      );
    }
  });
  const widthAnim = el.animate([{ opacity: 1 }, { opacity: 1 }], { duration, fill: "forwards" });
  widthAnim.onfinish = () => {
    el.textContent = newText;
    el.style.display = previous.display;
    el.style.whiteSpace = previous.whiteSpace;
    el.style.width = previous.width;
    el.style.minWidth = `${settledMinWidth}px`;
    el.style.willChange = previous.willChange;
    finishWillChange(el);
    onAnimationEnd == null ? void 0 : onAnimationEnd();
  };
  widthAnim.oncancel = () => {
    el.textContent = newText;
    el.style.display = previous.display;
    el.style.whiteSpace = previous.whiteSpace;
    el.style.width = previous.width;
    el.style.minWidth = `${settledMinWidth}px`;
    el.style.willChange = previous.willChange;
    finishWillChange(el);
  };
}
var AnimateText = forwardRef(function AnimateText2({
  value,
  trigger = "change",
  animation,
  duration = 300,
  easing = SMOOTH,
  delay = 0,
  threshold = 0.1,
  repeat = false,
  once,
  as = "span",
  className,
  style,
  onClick,
  onEnter,
  onExit,
  onHoverStart,
  onHoverEnd,
  onAnimationEnd,
  children
}, forwardedRef) {
  const ref = useRef(null);
  const animRef = useRef(null);
  const rafRef = useRef(null);
  const timerRef = useRef(null);
  const [playCount, setPlayCount] = useState(0);
  const { changed, prev, current: watchedCurrent } = useValueChange(value);
  const shouldObserveOnce = once != null ? once : !repeat;
  const animate = useCallback(() => {
    setPlayCount((count) => count + 1);
  }, []);
  useImperativeHandle(forwardedRef, () => ({
    animate,
    get element() {
      return ref.current;
    }
  }), [animate]);
  useEffect(() => {
    if (trigger !== "scroll") return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onEnter == null ? void 0 : onEnter();
          animate();
          if (shouldObserveOnce) observer.disconnect();
        } else if (repeat) {
          onExit == null ? void 0 : onExit();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animate, onEnter, onExit, repeat, shouldObserveOnce, threshold, trigger]);
  const handleClick = useCallback((event) => {
    onClick == null ? void 0 : onClick(event);
    if (trigger === "click") animate();
  }, [animate, onClick, trigger]);
  const handleMouseEnter = useCallback(() => {
    onHoverStart == null ? void 0 : onHoverStart();
    if (trigger === "hover") animate();
  }, [animate, onHoverStart, trigger]);
  const handleMouseLeave = useCallback(() => {
    onHoverEnd == null ? void 0 : onHoverEnd();
  }, [onHoverEnd]);
  useLayoutEffect(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
    const shouldAnimate = trigger === "change" ? changed : playCount > 0;
    if (!shouldAnimate || !ref.current) return;
    if (animRef.current) animRef.current.cancel();
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    if (timerRef.current !== null) clearTimeout(timerRef.current);
    const current = trigger === "change" ? watchedCurrent : (_a = value != null ? value : ref.current.textContent) != null ? _a : "";
    const reduced = prefersReducedMotion();
    const motionDuration = reduced ? duration / 2 : duration;
    const effectivePrev = trigger === "change" ? prev : (_b = ref.current.textContent) != null ? _b : "";
    if (trigger === "change" && effectivePrev !== void 0) {
      reserveStableTextSize(ref.current, String(effectivePrev), String(current));
    }
    if (animation === "morph") {
      animateTextMorph(ref.current, effectivePrev, current, motionDuration, onAnimationEnd);
      return;
    }
    if (animation === "splitReveal") {
      animRef.current = (_c = animateSplitReveal(ref.current, current, motionDuration, onAnimationEnd)) != null ? _c : null;
      return;
    }
    if (animation === "splitSlide") {
      animRef.current = (_d = animateSplitSlide(ref.current, current, motionDuration, onAnimationEnd)) != null ? _d : null;
      return;
    }
    if (animation === "bigBang") {
      animRef.current = (_e = animateBigBang(ref.current, current, motionDuration, onAnimationEnd)) != null ? _e : null;
      return;
    }
    if (animation === "scatterAssemble") {
      animRef.current = (_f = animateScatterAssemble(ref.current, current, motionDuration, onAnimationEnd)) != null ? _f : null;
      return;
    }
    if (animation === "pixelRain") {
      animRef.current = (_g = animatePixelRain(ref.current, current, motionDuration, onAnimationEnd)) != null ? _g : null;
      return;
    }
    if (animation === "vortex") {
      animRef.current = (_h = animateVortex(ref.current, current, motionDuration, onAnimationEnd)) != null ? _h : null;
      return;
    }
    if (animation === "dominoFall") {
      animRef.current = (_i = animateDominoFall(ref.current, current, motionDuration, onAnimationEnd)) != null ? _i : null;
      return;
    }
    if (animation === "pendulum") {
      animRef.current = (_j = animatePendulum(ref.current, current, motionDuration, onAnimationEnd)) != null ? _j : null;
      return;
    }
    if (animation === "centerBurst") {
      animRef.current = (_k = animateCenterBurst(ref.current, current, motionDuration, onAnimationEnd)) != null ? _k : null;
      return;
    }
    if (animation === "gravityBounce") {
      animRef.current = (_l = animateGravityBounce(ref.current, current, motionDuration, onAnimationEnd)) != null ? _l : null;
      return;
    }
    if (animation === "minimalistRipple") {
      animRef.current = (_m = animateMinimalistRipple(ref.current, current, motionDuration, onAnimationEnd)) != null ? _m : null;
      return;
    }
    if (animation === "scrollFanIn") {
      animRef.current = (_n = animateScrollFanIn(ref.current, current, motionDuration, onAnimationEnd)) != null ? _n : null;
      return;
    }
    if (animation === "textRotate") {
      animRef.current = (_o = animateTextRotate(ref.current, effectivePrev, current, motionDuration, onAnimationEnd)) != null ? _o : null;
      return;
    }
    if (animation === "gooeyMorph") {
      animRef.current = (_p = animateGooeyMorph(ref.current, effectivePrev, current, motionDuration, onAnimationEnd)) != null ? _p : null;
      return;
    }
    if (animation === "randomLetterSwap") {
      animRef.current = (_q = animateRandomLetterSwap(ref.current, current, motionDuration, onAnimationEnd)) != null ? _q : null;
      return;
    }
    if (animation === "textEffect") {
      animRef.current = (_r = animateTextEffect(ref.current, current, motionDuration, onAnimationEnd)) != null ? _r : null;
      return;
    }
    if (animation === "staggerText") {
      animRef.current = (_s = animateStaggerText(ref.current, current, motionDuration, onAnimationEnd)) != null ? _s : null;
      return;
    }
    if (animation === "decoder") {
      let tick2 = function(now) {
        const elapsed = now - startTime;
        let result = "";
        let done = true;
        for (let i = 0; i < n; i++) {
          if (target[i] === " ") {
            result += " ";
            continue;
          }
          const t = elapsed - i * staggerGap;
          if (t >= charDur) {
            result += target[i];
          } else {
            result += chars[Math.floor(Math.random() * chars.length)];
            done = false;
          }
        }
        if (ref.current) ref.current.textContent = result;
        if (!done) {
          rafRef.current = requestAnimationFrame(tick2);
        } else {
          rafRef.current = null;
          onAnimationEnd == null ? void 0 : onAnimationEnd();
        }
      };
      const target = String(current);
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
      const n = target.length;
      const charDur = motionDuration * 0.7;
      const staggerGap = n > 1 ? motionDuration * 0.3 / (n - 1) : 0;
      const startTime = performance.now();
      rafRef.current = requestAnimationFrame(tick2);
      return;
    }
    if (animation === "fadeAway") {
      const text = prev !== void 0 ? String(prev) : null;
      if (!text) return;
      const spans = [...text].map(
        (c) => c === " " ? " " : `<span style="display:inline-block">${c}</span>`
      ).join("");
      ref.current.innerHTML = spans;
      const els = Array.from(ref.current.querySelectorAll("span"));
      const stagger = 40;
      els.forEach((span, i) => {
        span.animate(
          [
            { opacity: 1, filter: "blur(0px)" },
            { opacity: 0, filter: "blur(2px)" }
          ],
          { duration: motionDuration, delay: i * stagger, fill: "forwards", easing: EASE_OUT }
        );
      });
      return;
    }
    if (animation === "fadeIn") {
      const text = String(current);
      if (!text) return;
      const spans = [...text].map(
        (c) => c === " " ? " " : `<span style="display:inline-block;opacity:0;filter:blur(2px)">${c}</span>`
      ).join("");
      ref.current.innerHTML = spans;
      const els = Array.from(ref.current.querySelectorAll("span"));
      const stagger = 40;
      els.forEach((span, i) => {
        span.animate(
          [
            { opacity: 0, filter: "blur(2px)" },
            { opacity: 1, filter: "blur(0px)" }
          ],
          { duration: motionDuration, delay: (els.length - 1 - i) * stagger, fill: "forwards", easing: EASE_IN }
        );
      });
      return;
    }
    if (animation === "slideReplace") {
      const old = prev !== void 0 ? String(prev) : null;
      const next = String(current);
      if (!old || !next) return;
      const { oldEl, newEl, cleanup } = prepareStableTextSwap(ref.current, old, next);
      newEl.style.transform = "translateX(100%)";
      const line = document.createElement("span");
      line.style.position = "absolute";
      line.style.bottom = "0";
      line.style.left = "0";
      line.style.width = "100%";
      line.style.height = "2px";
      line.style.background = "#54b3d6";
      line.style.transform = "scaleX(0)";
      line.style.transformOrigin = "0% 50%";
      ref.current.appendChild(line);
      oldEl.animate(
        [{ transform: "translateX(0)" }, { transform: "translateX(-100%)" }],
        { duration: 150, easing: EASE_OUT, fill: "forwards" }
      );
      const anim2 = newEl.animate(
        [{ transform: "translateX(100%)" }, { transform: "translateX(0)" }],
        { duration: 200, easing: EASE_IN, fill: "forwards" }
      );
      line.animate(
        [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
        { duration: 250, easing: EASE_IN_OUT, fill: "forwards" }
      );
      animRef.current = anim2;
      anim2.onfinish = () => {
        animRef.current = null;
        if (ref.current) {
          const line2 = ref.current.querySelector("span:last-child");
          if (line2) line2.remove();
          cleanup();
        }
        onAnimationEnd == null ? void 0 : onAnimationEnd();
      };
      anim2.oncancel = cleanup;
      return;
    }
    if (animation === "letterDrop") {
      const text = String(current);
      if (!text) return;
      const spans = [...text].map(
        (c) => c === " " ? " " : `<span style="display:inline-block">${c}</span>`
      ).join("");
      ref.current.innerHTML = spans;
      const els = Array.from(ref.current.querySelectorAll("span"));
      const stagger = duration * 0.1;
      els.forEach((span, i) => {
        span.animate(
          [
            { transform: "translateY(-200px)", opacity: 0 },
            { transform: "translateY(-200px)", opacity: 1, offset: 0.05 },
            { transform: "translateY(6px)", offset: 0.85 },
            { transform: "translateY(0)" }
          ],
          { duration: motionDuration, delay: i * stagger, fill: "forwards", easing: SPRING }
        );
      });
      return;
    }
    if (animation === "glitch") {
      const text = String(current);
      if (!text) return;
      const glitched = [1, 2, 3, 4, 5].map((i) => `${i}px ${i}px`).join(", ");
      const clean = [0, 0, 0, 0, 0].map(() => "0px 0px").join(", ");
      const anim2 = ref.current.animate(
        [
          { textShadow: glitched, transform: "translate(-6px, -6px) skewX(-2deg)" },
          { textShadow: clean, transform: "translate(0, 0) skewX(0deg)" }
        ],
        { duration: motionDuration, easing: EASE_IN_OUT, fill: "forwards" }
      );
      animRef.current = anim2;
      anim2.onfinish = () => {
        animRef.current = null;
        onAnimationEnd == null ? void 0 : onAnimationEnd();
      };
      return;
    }
    if (animation === "textReveal") {
      const curtain = document.createElement("div");
      curtain.style.position = "absolute";
      curtain.style.top = "0";
      curtain.style.left = "0";
      curtain.style.width = "100%";
      curtain.style.height = "100%";
      curtain.style.background = "#fff";
      curtain.style.transform = "translateX(-100%)";
      curtain.style.pointerEvents = "none";
      ref.current.style.position = "relative";
      ref.current.style.overflow = "hidden";
      ref.current.appendChild(curtain);
      const anim2 = curtain.animate(
        [{ transform: "translateX(-100%)" }, { transform: "translateX(100%)" }],
        { duration: motionDuration, easing: EASE_IN_OUT, fill: "forwards" }
      );
      animRef.current = anim2;
      anim2.onfinish = () => {
        animRef.current = null;
        curtain.remove();
        if (ref.current) {
          ref.current.style.position = "";
          ref.current.style.overflow = "";
        }
        onAnimationEnd == null ? void 0 : onAnimationEnd();
      };
      return;
    }
    if (animation === "liftReveal") {
      const oldText = prev !== void 0 ? String(prev) : null;
      const newText = String(current);
      if (!oldText) return;
      const { oldEl: top, newEl: bottom, cleanup } = prepareStableTextSwap(ref.current, oldText, newText);
      bottom.style.transform = "translateY(100%)";
      top.animate(
        [{ transform: "translateY(0)" }, { transform: "translateY(-100%)" }],
        { duration, easing, fill: "forwards" }
      );
      const anim2 = bottom.animate(
        [{ transform: "translateY(100%)" }, { transform: "translateY(0)" }],
        { duration, easing, fill: "forwards" }
      );
      animRef.current = anim2;
      anim2.onfinish = () => {
        animRef.current = null;
        cleanup();
        onAnimationEnd == null ? void 0 : onAnimationEnd();
      };
      anim2.oncancel = cleanup;
      return;
    }
    if (animation === "scatter") {
      const text = String(current);
      if (!text) return;
      const spans = [...text].map(
        (c) => c === " " ? " " : `<span style="display:inline-block">${c}</span>`
      ).join("");
      ref.current.innerHTML = spans;
      const els = Array.from(ref.current.querySelectorAll("span"));
      const order = els.map((_, i) => i).sort(() => Math.random() - 0.5);
      const staggerGap = duration / els.length;
      els.forEach((span, i) => {
        span.animate(
          [{ opacity: 0 }, { opacity: 1 }],
          { duration, delay: order[i] * staggerGap, fill: "forwards" }
        );
      });
      return;
    }
    if (animation === "typewriter") {
      const text = String(current);
      if (!text) return;
      const numChars = text.length || 1;
      const el = ref.current;
      el.style.overflow = "hidden";
      el.style.whiteSpace = "nowrap";
      el.style.display = "inline-block";
      el.style.borderRight = "2px solid currentColor";
      const revealAnim = el.animate(
        [{ clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)" }],
        { duration: motionDuration, easing: `steps(${numChars}, end)`, fill: "forwards" }
      );
      const cursorBlink = el.animate(
        [
          { borderRightColor: "currentColor" },
          { borderRightColor: "transparent" },
          { borderRightColor: "currentColor" },
          { borderRightColor: "transparent" }
        ],
        { duration: 500, iterations: Infinity, easing: "step-end" }
      );
      animRef.current = revealAnim;
      revealAnim.onfinish = () => {
        animRef.current = null;
        cursorBlink.cancel();
        el.animate(
          [{ borderRightColor: "currentColor" }, { borderRightColor: "transparent" }],
          { duration: 120, fill: "forwards" }
        ).onfinish = () => {
          el.style.borderRight = "";
          el.style.overflow = "";
          el.style.whiteSpace = "";
          el.style.display = "";
        };
        onAnimationEnd == null ? void 0 : onAnimationEnd();
      };
      return;
    }
    if (animation === "splash") {
      const text = String(current);
      if (!text) return;
      const spans = [...text].map(
        (c) => c === " " ? " " : `<span style="display:inline-block">${c}</span>`
      ).join("");
      ref.current.innerHTML = spans;
      const els = Array.from(ref.current.querySelectorAll("span"));
      els.forEach((span) => {
        const x = (Math.random() - 0.5) * 32;
        const y = (Math.random() - 0.5) * 32;
        const r = (Math.random() - 0.5) * 8;
        span.animate(
          [
            { transform: `translate(${x}px, ${y}px) rotate(${r}deg)`, opacity: 0 },
            { transform: "translate(0, 0) rotate(0deg)", opacity: 1 }
          ],
          {
            duration: motionDuration * 0.8,
            delay: Math.random() * motionDuration * 0.3,
            fill: "forwards",
            easing: EASE_IN
          }
        );
      });
      return;
    }
    if (animation === "jitter") {
      const text = String(current);
      if (!text) return;
      const spans = [...text].map(
        (c) => c === " " ? " " : `<span style="display:inline-block">${c}</span>`
      ).join("");
      ref.current.innerHTML = spans;
      const els = Array.from(ref.current.querySelectorAll("span"));
      els.forEach((span) => {
        const x = (Math.random() - 0.5) * 8;
        const y = (Math.random() - 0.5) * 8;
        const r = (Math.random() - 0.5) * 12;
        span.animate(
          [
            { transform: "translate(0, 0) rotate(0deg)" },
            { transform: `translate(${x}px, ${y}px) rotate(${r}deg)`, offset: 0.15 },
            { transform: `translate(${-x * 0.6}px, ${-y * 0.6}px) rotate(${-r * 0.6}deg)`, offset: 0.35 },
            { transform: `translate(${x * 0.3}px, ${y * 0.3}px) rotate(${r * 0.3}deg)`, offset: 0.55 },
            { transform: `translate(${-x * 0.1}px, ${-y * 0.1}px) rotate(${-r * 0.1}deg)`, offset: 0.75 },
            { transform: "translate(0, 0) rotate(0deg)" }
          ],
          {
            duration: motionDuration * 0.6,
            delay: Math.random() * motionDuration * 0.2,
            fill: "forwards",
            easing: EASE_IN_OUT
          }
        );
      });
      return;
    }
    if (animation === "popUp") {
      const shadows = Array.from({ length: 9 }, (_, i) => `0 ${i + 1}px 0 #cccccc`).join(", ");
      const anim2 = ref.current.animate(
        [
          { transform: "translateY(0)", textShadow: "none" },
          { transform: "translateY(-16px)", textShadow: `${shadows}, 0 16px 18px rgba(0,0,0,0.22)` }
        ],
        { duration: motionDuration, easing: SPRING, fill: "forwards" }
      );
      animRef.current = anim2;
      anim2.onfinish = () => {
        animRef.current = null;
        onAnimationEnd == null ? void 0 : onAnimationEnd();
      };
      return;
    }
    if (animation === "jello") {
      const anim2 = ref.current.animate(
        [
          { transform: "scale(1, 1)" },
          { transform: "scale(1.25, 0.75)", offset: 0.167 },
          { transform: "scale(0.75, 1.25)", offset: 0.333 },
          { transform: "scale(1.15, 0.85)", offset: 0.5 },
          { transform: "scale(0.95, 1.05)", offset: 0.667 },
          { transform: "scale(1.05, 0.95)", offset: 0.833 },
          { transform: "scale(1, 1)" }
        ],
        { duration: motionDuration, easing: SPRING }
      );
      animRef.current = anim2;
      anim2.onfinish = () => {
        animRef.current = null;
        onAnimationEnd == null ? void 0 : onAnimationEnd();
      };
      return;
    }
    if (animation === "scramble") {
      let tick2 = function(now) {
        const elapsed = now - startTime;
        if (elapsed >= totalMs) {
          els.forEach((span, i) => {
            span.textContent = text[i];
          });
          onAnimationEnd == null ? void 0 : onAnimationEnd();
          return;
        }
        els.forEach((span) => {
          span.textContent = chars[Math.floor(Math.random() * chars.length)];
        });
        rafRef.current = requestAnimationFrame(tick2);
      };
      const text = String(current);
      if (!text) return;
      const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`\xA1\u2122\xA3\xA2\u221E\xA7\xB6\u2022\xAA\xBA\u2013\u2260\xE5\xDF\u2202\u0192\xA9\u02D9\u2206\u02DA\xAC\u2026\xE6\u2248\xE7\u221A\u222B\u02DC\xB5\u2264\u2265\xF7/\u2591\u2592\u2593<>";
      const spans = [...text].map(
        (c) => c === " " ? " " : `<span style="display:inline-block">${c}</span>`
      ).join("");
      ref.current.innerHTML = spans;
      const els = Array.from(ref.current.querySelectorAll("span"));
      const stepMs = 50;
      const totalMs = Math.max(240, Math.min(motionDuration + text.length * 18, stepMs * Math.max(6, text.length)));
      const startTime = performance.now();
      rafRef.current = requestAnimationFrame(tick2);
      return;
    }
    if (animation === "wave") {
      const text = String(current);
      if (!text) return;
      if (prefersReducedMotion()) {
        const anim2 = ref.current.animate(
          [{ opacity: 0 }, { opacity: 1 }],
          { duration: motionDuration / 2, easing: EASE_IN, fill: "forwards" }
        );
        animRef.current = anim2;
        anim2.onfinish = () => {
          ref.current.style.textShadow = "";
          animRef.current = null;
          onAnimationEnd == null ? void 0 : onAnimationEnd();
        };
        return;
      }
      const spans = [...text].map(
        (c) => c === " " ? " " : `<span style="display:inline-block">${c}</span>`
      ).join("");
      ref.current.innerHTML = spans;
      const els = Array.from(ref.current.querySelectorAll("span"));
      const stagger = Math.max(80, motionDuration * 0.1);
      els.forEach((span, i) => {
        const anim2 = span.animate(
          [
            { transform: "translateY(0)", opacity: 1 },
            { transform: "translateY(-20px)", opacity: 1, offset: 0.5 },
            { transform: "translateY(0)", opacity: 1 }
          ],
          { duration: Math.max(900, motionDuration), delay: i * stagger, iterations: 1, easing: SMOOTH }
        );
        if (i === 0) animRef.current = anim2;
      });
      return;
    }
    if (animation === "strikeThrough") {
      const oldText = prev !== void 0 ? String(prev) : null;
      const newText = String(current);
      if (!oldText || !newText) return;
      ref.current.innerHTML = `<span style="text-decoration:line-through">${oldText}</span>`;
      const oldSpan = ref.current.firstElementChild;
      oldSpan.animate(
        [{ opacity: 1 }, { opacity: 0.3 }],
        { duration: motionDuration * 0.5, fill: "forwards", easing: EASE_OUT }
      );
      const t = setTimeout(() => {
        if (!ref.current) return;
        oldSpan.textContent = newText;
        oldSpan.style.textDecoration = "";
        const reveal = oldSpan.animate(
          [{ opacity: 0.3 }, { opacity: 1 }],
          { duration: motionDuration * 0.5, easing: EASE_IN }
        );
        reveal.onfinish = () => {
          if (ref.current) ref.current.textContent = newText;
          onAnimationEnd == null ? void 0 : onAnimationEnd();
        };
      }, motionDuration * 0.5);
      timerRef.current = t;
      return;
    }
    if (animation === "odometer") {
      const text = String(current);
      if (!text) return;
      const spans = buildRollingCharSlots(text, 1.24);
      ref.current.innerHTML = spans;
      const inners = Array.from(ref.current.querySelectorAll("span > span"));
      const stagger = 40;
      inners.forEach((s, i) => {
        s.animate(
          [
            { transform: "translateY(-100%)", opacity: 0 },
            { transform: "translateY(4px)", opacity: 1, offset: 0.7 },
            { transform: "translateY(0)" }
          ],
          { duration: motionDuration * 0.5, delay: i * stagger, fill: "forwards", easing: EASE_IN }
        );
      });
      const t = setTimeout(() => onAnimationEnd == null ? void 0 : onAnimationEnd(), duration * 0.5 + inners.length * stagger + 50);
      timerRef.current = t;
      return;
    }
    if (animation === "ticker") {
      const text = String(current);
      if (!text) return;
      const spans = buildRollingCharSlots(text, 1.22);
      ref.current.innerHTML = spans;
      const inners = Array.from(ref.current.querySelectorAll("span > span"));
      const stagger = 30;
      inners.forEach((s, i) => {
        s.animate(
          [{ transform: "translateY(100%)", opacity: 0 }, { transform: "translateY(0)", opacity: 1 }],
          { duration: motionDuration * 0.6, delay: i * stagger, fill: "forwards", easing: EASE_IN }
        );
      });
      const t = setTimeout(() => onAnimationEnd == null ? void 0 : onAnimationEnd(), duration * 0.6 + inners.length * stagger + 50);
      timerRef.current = t;
      return;
    }
    if (animation === "colorShift") {
      const color = getComputedStyle(ref.current).color;
      const anim2 = ref.current.animate(
        [
          { color },
          { color: "#ff6b6b", offset: 0.25 },
          { color: "#51cf66", offset: 0.5 },
          { color: "#339af0", offset: 0.75 },
          { color, offset: 1 }
        ],
        { duration: motionDuration, easing: SMOOTH, fill: "forwards" }
      );
      animRef.current = anim2;
      anim2.onfinish = () => {
        animRef.current = null;
        onAnimationEnd == null ? void 0 : onAnimationEnd();
      };
      return;
    }
    if (animation === "fadeSwap") {
      const oldText = effectivePrev !== void 0 ? String(effectivePrev) : "";
      const newText = String(current);
      if (!oldText && !newText) return;
      const { oldEl, newEl, cleanup } = prepareStableTextSwap(ref.current, oldText, newText);
      oldEl.style.opacity = "1";
      oldEl.style.transform = "translateY(0)";
      newEl.style.opacity = "0";
      newEl.style.transform = "translateY(3px)";
      oldEl.animate(
        [
          { opacity: 1, transform: "translateY(0)" },
          { opacity: 0, transform: "translateY(-3px)" }
        ],
        { duration: motionDuration * 0.5, easing: EASE_OUT, fill: "forwards" }
      );
      const anim2 = newEl.animate(
        [
          { opacity: 0, transform: "translateY(3px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        { duration: motionDuration * 0.5, delay: motionDuration * 0.5, easing: EASE_IN, fill: "forwards" }
      );
      animRef.current = anim2;
      anim2.onfinish = () => {
        animRef.current = null;
        cleanup();
        onAnimationEnd == null ? void 0 : onAnimationEnd();
      };
      anim2.oncancel = cleanup;
      return;
    }
    const iterations = void 0;
    const anim = runAnimation(
      ref.current,
      animation,
      {
        duration: motionDuration,
        easing,
        delay,
        iterations
      },
      trigger === "change" ? "change" : "single",
      effectivePrev,
      current
    );
    animRef.current = anim;
    anim.onfinish = () => {
      animRef.current = null;
      onAnimationEnd == null ? void 0 : onAnimationEnd();
    };
  }, [value, playCount, trigger]);
  return createElement(
    as,
    {
      ref,
      className,
      style,
      onClick: trigger === "click" || onClick ? handleClick : void 0,
      onMouseEnter: trigger === "hover" || onHoverStart ? handleMouseEnter : void 0,
      onMouseLeave: onHoverEnd ? handleMouseLeave : void 0
    },
    children
  );
});
var Animate = { Text: AnimateText };
var text_default = Animate;

export { Animate, AnimateText, text_default as default };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map