'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

// src/paragraph/index.tsx
function useValueChange(val) {
  const prevRef = react.useRef(void 0);
  const changed = prevRef.current !== void 0 && prevRef.current !== val;
  const prev = prevRef.current;
  prevRef.current = val;
  return { changed, prev, current: val };
}

// src/paragraph/index.tsx
var EASE_IN = "cubic-bezier(0.0, 0.0, 0.2, 1)";
var EASE_OUT = "cubic-bezier(0.4, 0.0, 1, 1)";
var EASE_IN_OUT = "cubic-bezier(0.4, 0.0, 0.2, 1)";
var SPRING = "cubic-bezier(0.34, 1.56, 0.64, 1)";
var SMOOTH = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";
var fadeIn = [
  { opacity: 0, transform: "translateY(4px)" },
  { opacity: 1, transform: "translateY(0)" }
];
var fadeOut = [
  { opacity: 1, transform: "translateY(0)" },
  { opacity: 0, transform: "translateY(-4px)" }
];
var presets = {
  fadeIn: { out: [], in: fadeIn },
  fadeOut: { out: fadeOut, in: [] },
  fadeSwap: { out: fadeOut, in: fadeIn },
  fadeMask: { out: fadeOut, in: fadeIn },
  morphText: { out: fadeOut, in: fadeIn },
  slideUp: {
    out: [
      { opacity: 1, transform: "translateY(0)" },
      { opacity: 0, transform: "translateY(-14px)" }
    ],
    in: [
      { opacity: 0, transform: "translateY(14px)" },
      { opacity: 1, transform: "translateY(0)" }
    ]
  },
  slideDown: {
    out: [
      { opacity: 1, transform: "translateY(0)" },
      { opacity: 0, transform: "translateY(14px)" }
    ],
    in: [
      { opacity: 0, transform: "translateY(-14px)" },
      { opacity: 1, transform: "translateY(0)" }
    ]
  },
  slideLeft: {
    out: [
      { opacity: 1, transform: "translateX(0)" },
      { opacity: 0, transform: "translateX(-14px)" }
    ],
    in: [
      { opacity: 0, transform: "translateX(14px)" },
      { opacity: 1, transform: "translateX(0)" }
    ]
  },
  slideRight: {
    out: [
      { opacity: 1, transform: "translateX(0)" },
      { opacity: 0, transform: "translateX(14px)" }
    ],
    in: [
      { opacity: 0, transform: "translateX(-14px)" },
      { opacity: 1, transform: "translateX(0)" }
    ]
  },
  slideReplace: {
    out: [
      { opacity: 1, transform: "translateX(0)" },
      { opacity: 0, transform: "translateX(-12px)" }
    ],
    in: [
      { opacity: 0, transform: "translateX(12px)" },
      { opacity: 1, transform: "translateX(0)" }
    ]
  },
  popIn: {
    out: [
      { opacity: 1, transform: "scale(1)" },
      { opacity: 0, transform: "scale(0.94)" }
    ],
    in: [
      { opacity: 0, transform: "scale(0.92)" },
      { opacity: 1, transform: "scale(1.05)", offset: 0.62 },
      { opacity: 1, transform: "scale(1)" }
    ]
  },
  popOut: {
    out: [
      { opacity: 1, transform: "scale(1)" },
      { opacity: 0, transform: "scale(0.94)" }
    ],
    in: []
  },
  expandIn: {
    out: [
      { opacity: 1, transform: "scaleY(1)", transformOrigin: "top" },
      { opacity: 0, transform: "scaleY(0.92)", transformOrigin: "top" }
    ],
    in: [
      { opacity: 0, transform: "scaleY(0.92)", transformOrigin: "top" },
      { opacity: 1, transform: "scaleY(1)", transformOrigin: "top" }
    ]
  },
  collapseOut: {
    out: [
      { opacity: 1, transform: "scaleY(1)", transformOrigin: "top" },
      { opacity: 0, transform: "scaleY(0)", transformOrigin: "top" }
    ],
    in: []
  },
  zoomIn: {
    out: [
      { opacity: 1, transform: "scale(1)" },
      { opacity: 0, transform: "scale(0.96)" }
    ],
    in: [
      { opacity: 0, transform: "scale(0.96)" },
      { opacity: 1, transform: "scale(1)" }
    ]
  },
  zoomOut: {
    out: [
      { opacity: 1, transform: "scale(1)" },
      { opacity: 0, transform: "scale(0.96)" }
    ],
    in: []
  },
  wordFadeIn: {
    out: [{ opacity: 1 }, { opacity: 0 }],
    in: [{ opacity: 0 }, { opacity: 1 }]
  },
  wordSlideUp: {
    out: fadeOut,
    in: [
      { opacity: 0, transform: "translateY(10px)" },
      { opacity: 1, transform: "translateY(0)" }
    ]
  },
  wordPop: {
    out: [
      { opacity: 1, transform: "scale(1)" },
      { opacity: 0, transform: "scale(0.96)" }
    ],
    in: [
      { opacity: 0, transform: "scale(0.92)" },
      { opacity: 1, transform: "scale(1.05)", offset: 0.62 },
      { opacity: 1, transform: "scale(1)" }
    ]
  },
  lineFadeIn: {
    out: [{ opacity: 1 }, { opacity: 0 }],
    in: [{ opacity: 0 }, { opacity: 1 }]
  },
  lineSlideUp: {
    out: fadeOut,
    in: [
      { opacity: 0, transform: "translateY(12px)" },
      { opacity: 1, transform: "translateY(0)" }
    ]
  },
  streamIn: {
    out: [{ opacity: 1 }, { opacity: 0 }],
    in: [{ opacity: 0 }, { opacity: 1 }]
  },
  streamFade: {
    out: [{ opacity: 1 }, { opacity: 0 }],
    in: [{ opacity: 0 }, { opacity: 1 }]
  },
  streamSlide: {
    out: fadeOut,
    in: [
      { opacity: 0, transform: "translateY(8px)" },
      { opacity: 1, transform: "translateY(0)" }
    ]
  },
  cursorBlink: {
    out: [{ opacity: 1 }, { opacity: 0 }],
    in: [{ opacity: 0 }, { opacity: 1 }]
  },
  expandCollapse: {
    out: fadeOut,
    in: fadeIn
  },
  heightAuto: {
    out: fadeOut,
    in: fadeIn
  },
  crossFade: {
    out: [{ opacity: 1 }, { opacity: 0 }],
    in: [{ opacity: 0 }, { opacity: 1 }]
  },
  pulse: {
    out: [
      { opacity: 1, transform: "scale(1)" },
      { opacity: 1, transform: "scale(0.98)" }
    ],
    in: [
      { opacity: 1, transform: "scale(1)" },
      { opacity: 1, transform: "scale(1.03)", offset: 0.5 },
      { opacity: 1, transform: "scale(1)" }
    ]
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
  highlight: {
    out: [{ opacity: 1 }, { opacity: 1 }],
    in: []
  },
  flash: {
    out: [],
    in: []
  },
  pushLeft: {
    out: [
      { opacity: 1, transform: "translateX(0)" },
      { opacity: 0, transform: "translateX(-18px)" }
    ],
    in: [
      { opacity: 0, transform: "translateX(18px)" },
      { opacity: 1, transform: "translateX(0)" }
    ]
  },
  pushRight: {
    out: [
      { opacity: 1, transform: "translateX(0)" },
      { opacity: 0, transform: "translateX(18px)" }
    ],
    in: [
      { opacity: 0, transform: "translateX(-18px)" },
      { opacity: 1, transform: "translateX(0)" }
    ]
  },
  flipPage: {
    out: [
      { opacity: 1, transform: "perspective(800px) rotateY(0deg)" },
      { opacity: 0, transform: "perspective(800px) rotateY(-32deg)" }
    ],
    in: [
      { opacity: 0, transform: "perspective(800px) rotateY(32deg)" },
      { opacity: 1, transform: "perspective(800px) rotateY(0deg)" }
    ]
  },
  // FIXED morphBlur: proper blur transition
  morphBlur: {
    out: [
      { opacity: 1, filter: "blur(0px)", transform: "translateY(0)" },
      { opacity: 0.2, filter: "blur(4px)", transform: "translateY(-4px)" }
    ],
    in: [
      { opacity: 0.2, filter: "blur(4px)", transform: "translateY(4px)" },
      { opacity: 1, filter: "blur(0px)", transform: "translateY(0)" }
    ]
  },
  diffAnimate: {
    out: [],
    in: []
  },
  scrollWordReveal: {
    out: [],
    in: []
  }
};
var warned = /* @__PURE__ */ new Set();
var _probe = null;
function getProbe() {
  if (!_probe) {
    _probe = document.createElement("div");
    _probe.style.position = "absolute";
    _probe.style.visibility = "hidden";
    _probe.style.pointerEvents = "none";
    _probe.style.whiteSpace = "pre-wrap";
    _probe.style.width = "max-content";
  }
  return _probe;
}
function measureTextBlock(el, text) {
  const probe = getProbe();
  probe.textContent = text || "\xA0";
  const computed = getComputedStyle(el);
  probe.style.whiteSpace = computed.whiteSpace || "pre-wrap";
  const containerWidth = el.clientWidth || el.getBoundingClientRect().width;
  if (containerWidth > 0) {
    probe.style.width = `${containerWidth}px`;
    probe.style.maxWidth = `${containerWidth}px`;
  } else {
    probe.style.width = "max-content";
    probe.style.maxWidth = "none";
  }
  el.appendChild(probe);
  const rect = probe.getBoundingClientRect();
  probe.remove();
  return { width: rect.width, height: rect.height };
}
function prefersReducedMotion() {
  var _a, _b;
  if (typeof window === "undefined") return false;
  return (_b = (_a = window.matchMedia) == null ? void 0 : _a.call(window, "(prefers-reduced-motion: reduce)").matches) != null ? _b : false;
}
function cancelElementAnimations(el) {
  el.getAnimations({ subtree: true }).forEach((animation) => animation.cancel());
}
function getScrollRoot(el) {
  let parent = el.parentElement;
  while (parent && parent !== document.body && parent !== document.documentElement) {
    const style = getComputedStyle(parent);
    if (/(auto|scroll|overlay)/.test(`${style.overflowY}${style.overflow}`) && parent.scrollHeight > parent.clientHeight) {
      return parent;
    }
    parent = parent.parentElement;
  }
  return null;
}
function scrollObserverOptions(el, threshold) {
  var _a;
  const root = getScrollRoot(el);
  const rootHeight = (_a = root == null ? void 0 : root.clientHeight) != null ? _a : window.innerHeight;
  const clamped = Math.min(0.95, Math.max(0.05, threshold));
  const inset = Math.round(rootHeight * Math.min(0.48, clamped / 2));
  return {
    root,
    rootMargin: `-${inset}px 0px -${inset}px 0px`,
    threshold: 0
  };
}
function runPropertyAnimation(el, properties, options) {
  if (!properties || Object.keys(properties).length === 0) return null;
  const from = {};
  const to = {};
  for (const [property, pair] of Object.entries(properties)) {
    from[property] = pair[0];
    to[property] = pair[1];
  }
  for (const [property, value] of Object.entries(from)) {
    el.style[property] = value;
  }
  const anim = el.animate([from, to], { ...options, fill: "forwards" });
  anim.addEventListener("finish", () => {
    for (const [property, pair] of Object.entries(properties)) {
      el.style[property] = String(pair[1]);
    }
  });
  return anim;
}
function splitWordsAsElements(text) {
  const parts = text.match(/\S+|\s+/g) || [];
  const elements = [];
  for (const part of parts) {
    if (/^\s+$/.test(part)) {
      elements.push(document.createTextNode(part));
    } else {
      const span = document.createElement("span");
      span.textContent = part;
      elements.push(span);
    }
  }
  return elements;
}
function getVisualLines(text, refEl) {
  if (text.length <= 1) return [text];
  const computed = getComputedStyle(refEl);
  const probe = document.createElement("div");
  probe.style.position = "absolute";
  probe.style.visibility = "hidden";
  probe.style.pointerEvents = "none";
  probe.style.left = "0";
  probe.style.top = "0";
  probe.style.width = `${refEl.clientWidth || refEl.getBoundingClientRect().width}px`;
  probe.style.whiteSpace = "pre-wrap";
  probe.style.wordBreak = "break-word";
  probe.style.overflowWrap = "break-word";
  probe.style.font = computed.font;
  probe.style.lineHeight = computed.lineHeight;
  probe.style.letterSpacing = computed.letterSpacing;
  probe.style.wordSpacing = computed.wordSpacing;
  probe.style.padding = "0";
  probe.style.margin = "0";
  probe.textContent = text;
  refEl.appendChild(probe);
  const textNode = probe.firstChild;
  if (!textNode) {
    probe.remove();
    return [text];
  }
  const lines = [];
  const range = document.createRange();
  let start = 0;
  while (start < text.length) {
    range.setStart(textNode, start);
    range.setEnd(textNode, text.length);
    const rects = range.getClientRects();
    if (rects.length <= 1) {
      lines.push(text.slice(start));
      break;
    }
    let lo = start;
    let hi = text.length;
    while (lo < hi - 1) {
      const mid = Math.ceil((lo + hi) / 2);
      range.setStart(textNode, start);
      range.setEnd(textNode, mid);
      if (range.getClientRects().length > 1) {
        hi = mid;
      } else {
        lo = mid;
      }
    }
    lines.push(text.slice(start, lo));
    start = lo;
  }
  probe.remove();
  return lines;
}
function splitLinesAsElements(text, refEl) {
  if (refEl && text.length > 15) {
    const visualLines = getVisualLines(text, refEl);
    if (visualLines.length > 1) {
      return visualLines.map((line) => {
        const div = document.createElement("div");
        div.textContent = line || "\xA0";
        return div;
      });
    }
  }
  const lines = text.split("\n");
  return lines.map((line) => {
    const div = document.createElement("div");
    div.textContent = line || "\xA0";
    return div;
  });
}
function animateMorph(el, prevValue, nextValue, baseDuration, onEnd) {
  var _a;
  const oldText = prevValue != null ? prevValue : "";
  const newText = (_a = nextValue != null ? nextValue : el.textContent) != null ? _a : "";
  if (!newText) return;
  if (prefersReducedMotion()) {
    const { oldEl: oldEl2, newEl: newEl2, cleanup: cleanup2 } = prepareStableParagraphSwap(el, oldText, newText);
    oldEl2.animate(
      [{ opacity: 1 }, { opacity: 0 }],
      { duration: baseDuration / 2, easing: EASE_OUT, fill: "forwards" }
    );
    const anim = newEl2.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: baseDuration / 2, easing: SMOOTH, fill: "forwards" }
    );
    anim.onfinish = () => {
      cleanup2();
      onEnd == null ? void 0 : onEnd();
    };
    anim.oncancel = cleanup2;
    return anim;
  }
  const maxLen = Math.max(oldText.length, newText.length);
  const { oldEl, newEl, cleanup } = prepareStableParagraphSwap(el, oldText, newText);
  let cleaned = false;
  const finish = () => {
    if (cleaned) return;
    cleaned = true;
    cleanup();
    onEnd == null ? void 0 : onEnd();
  };
  const cleanupOnce = () => {
    if (cleaned) return;
    cleaned = true;
    cleanup();
  };
  oldEl.textContent = "";
  for (let i = 0; i < maxLen; i++) {
    const span = document.createElement("span");
    span.textContent = oldText[i] || "\xA0";
    span.style.display = "inline-block";
    span.style.willChange = "transform, opacity";
    oldEl.appendChild(span);
  }
  newEl.textContent = "";
  for (let i = 0; i < maxLen; i++) {
    const span = document.createElement("span");
    span.textContent = newText[i] || "\xA0";
    span.style.display = "inline-block";
    span.style.willChange = "transform, opacity";
    span.style.opacity = "0";
    newEl.appendChild(span);
  }
  const oldChildren = Array.from(oldEl.children);
  const newChildren = Array.from(newEl.children);
  let remaining = maxLen * 2;
  const halfDur = Math.max(120, baseDuration * 0.35);
  oldChildren.forEach((span, i) => {
    const isGone = i >= newText.length || oldText[i] !== newText[i];
    if (!isGone && i < newText.length && oldText[i] === newText[i]) {
      remaining--;
      return;
    }
    const anim = span.animate(
      [
        { opacity: 1, transform: "translateY(0) scale(1)" },
        { opacity: 0, transform: "translateY(-6px) scale(0.9)" }
      ],
      { duration: halfDur, easing: EASE_OUT, fill: "forwards" }
    );
    anim.onfinish = () => {
      remaining--;
      if (remaining <= 0) finish();
    };
    anim.oncancel = cleanupOnce;
  });
  newChildren.forEach((span, i) => {
    const isNew = i >= oldText.length || oldText[i] !== newText[i];
    if (!isNew) {
      span.style.opacity = "1";
      remaining--;
      return;
    }
    const anim = span.animate(
      [
        { opacity: 0, transform: "translateY(6px) scale(0.9)" },
        { opacity: 1, transform: "translateY(0) scale(1)" }
      ],
      {
        duration: halfDur,
        delay: Math.min(40, halfDur * 0.2),
        easing: SPRING,
        fill: "forwards"
      }
    );
    anim.onfinish = () => {
      remaining--;
      if (remaining <= 0) finish();
    };
    anim.oncancel = cleanupOnce;
  });
  if (remaining <= 0) {
    finish();
    return void 0;
  }
  const totalDuration = halfDur + Math.min(40, halfDur * 0.2) + halfDur;
  const marker = el.animate([{ opacity: 1 }, { opacity: 1 }], { duration: totalDuration, fill: "forwards" });
  marker.oncancel = cleanupOnce;
  return marker;
}
function animateFadeSwap(el, prevValue, nextValue, duration, onEnd) {
  var _a;
  const oldText = prevValue != null ? prevValue : "";
  const newText = (_a = nextValue != null ? nextValue : el.textContent) != null ? _a : "";
  if (!oldText && !newText) return;
  const { oldEl, newEl, cleanup } = prepareStableParagraphSwap(el, oldText, newText);
  oldEl.style.opacity = "1";
  oldEl.style.transform = "translateY(0)";
  oldEl.style.filter = "blur(0px)";
  oldEl.style.willChange = "transform, opacity, filter";
  newEl.style.opacity = "0";
  newEl.style.transform = "translateY(0.16em)";
  newEl.style.filter = "blur(1.8px)";
  newEl.style.willChange = "transform, opacity, filter";
  oldEl.animate(
    [
      { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" },
      { opacity: 0.72, transform: "translateY(-0.04em)", filter: "blur(0.35px)", offset: 0.58 },
      { opacity: 0, transform: "translateY(-0.14em)", filter: "blur(1.5px)" }
    ],
    { duration: Math.max(150, duration * 0.42), easing: SMOOTH, fill: "forwards" }
  );
  const anim = newEl.animate(
    [
      { opacity: 0, transform: "translateY(0.16em)", filter: "blur(1.8px)" },
      { opacity: 0.78, transform: "translateY(0.025em)", filter: "blur(0.35px)", offset: 0.55 },
      { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" }
    ],
    {
      duration: Math.max(220, duration * 0.62),
      delay: Math.min(80, Math.max(30, duration * 0.12)),
      easing: SMOOTH,
      fill: "forwards"
    }
  );
  anim.onfinish = () => {
    cleanup();
    onEnd == null ? void 0 : onEnd();
  };
  anim.oncancel = cleanup;
  return anim;
}
function animateSlideReplace(el, prevValue, nextValue, direction, duration, onEnd) {
  var _a;
  const oldText = prevValue != null ? prevValue : "";
  const newText = (_a = nextValue != null ? nextValue : el.textContent) != null ? _a : "";
  if (!oldText && !newText) return;
  const { oldEl, newEl, cleanup } = prepareStableParagraphSwap(el, oldText, newText);
  newEl.style.transform = `translateX(${100 * direction}%)`;
  oldEl.animate(
    [{ transform: "translateX(0)" }, { transform: `translateX(${ -100 * direction}%)` }],
    { duration: duration * 0.4, easing: EASE_OUT, fill: "forwards" }
  );
  const anim = newEl.animate(
    [{ transform: `translateX(${100 * direction}%)` }, { transform: "translateX(0)" }],
    { duration: duration * 0.6, easing: EASE_IN, fill: "forwards" }
  );
  anim.onfinish = () => {
    cleanup();
    onEnd == null ? void 0 : onEnd();
  };
  anim.oncancel = cleanup;
  return anim;
}
function animateCrossFade(el, prevValue, nextValue, duration, onEnd) {
  var _a;
  const oldText = prevValue != null ? prevValue : "";
  const newText = (_a = nextValue != null ? nextValue : el.textContent) != null ? _a : "";
  if (!oldText && !newText) return;
  const { oldEl, newEl, cleanup } = prepareStableParagraphSwap(el, oldText, newText);
  oldEl.style.opacity = "1";
  newEl.style.opacity = "0";
  oldEl.animate([{ opacity: 1 }, { opacity: 0 }], { duration, easing: SMOOTH, fill: "forwards" });
  const anim = newEl.animate([{ opacity: 0 }, { opacity: 1 }], { duration, easing: SMOOTH, fill: "forwards" });
  anim.onfinish = () => {
    cleanup();
    onEnd == null ? void 0 : onEnd();
  };
  anim.oncancel = cleanup;
  return anim;
}
function animateFadeMask(el, duration, onEnd) {
  const color = getComputedStyle(el).color;
  const overlay = document.createElement("div");
  overlay.style.position = "absolute";
  overlay.style.inset = "0";
  overlay.style.background = `linear-gradient(to bottom, ${color} 0%, transparent 100%)`;
  overlay.style.pointerEvents = "none";
  const prevPosition = el.style.position;
  const prevOverflow = el.style.overflow;
  el.style.position = "relative";
  el.style.overflow = "hidden";
  el.appendChild(overlay);
  const anim = overlay.animate(
    [{ transform: "translateY(0%)" }, { transform: "translateY(-100%)" }],
    { duration, easing: EASE_IN_OUT, fill: "forwards" }
  );
  const fadeCleanup = () => {
    overlay.remove();
    el.style.position = prevPosition;
    el.style.overflow = prevOverflow;
  };
  anim.onfinish = () => {
    fadeCleanup();
    onEnd == null ? void 0 : onEnd();
  };
  anim.oncancel = fadeCleanup;
  return anim;
}
function stripTransforms(kfs) {
  return kfs.map((k) => {
    const { transform, ...rest } = k;
    return rest;
  });
}
function animateWords(el, text, keyframes, duration, stagger, easing, onEnd) {
  if (text.length > 30) {
    const lineDivs = splitLinesAsElements(text, el);
    if (lineDivs.length > 1) {
      el.textContent = "";
      for (const div of lineDivs) {
        div.style.willChange = "transform, opacity";
        el.appendChild(div);
      }
      let remaining2 = lineDivs.length;
      const maxDelay2 = (lineDivs.length - 1) * (stagger * 2);
      const totalDuration2 = duration + maxDelay2;
      lineDivs.forEach((div, i) => {
        const anim = div.animate(keyframes, { duration, delay: i * (stagger * 2), fill: "forwards", easing });
        anim.onfinish = () => {
          remaining2--;
          if (remaining2 === 0) {
            lineDivs.forEach((d) => d.style.willChange = "auto");
            onEnd == null ? void 0 : onEnd();
          }
        };
      });
      return el.animate([{ opacity: 1 }, { opacity: 1 }], { duration: totalDuration2, fill: "forwards" });
    }
  }
  const wordKfs = stripTransforms(keyframes);
  const fragments = splitWordsAsElements(text);
  el.textContent = "";
  const wordSpans = [];
  for (const node of fragments) {
    el.appendChild(node);
    if (node instanceof HTMLSpanElement) {
      wordSpans.push(node);
      node.style.willChange = "opacity";
    }
  }
  if (wordSpans.length === 0) {
    onEnd == null ? void 0 : onEnd();
    return;
  }
  let remaining = wordSpans.length;
  const maxDelay = (wordSpans.length - 1) * stagger;
  const totalDuration = duration + maxDelay;
  wordSpans.forEach((span, i) => {
    const anim = span.animate(wordKfs, {
      duration,
      delay: i * stagger,
      fill: "forwards",
      easing
    });
    anim.onfinish = () => {
      remaining--;
      if (remaining === 0) {
        wordSpans.forEach((s) => s.style.willChange = "auto");
        onEnd == null ? void 0 : onEnd();
      }
    };
  });
  return el.animate([{ opacity: 1 }, { opacity: 1 }], { duration: totalDuration, fill: "forwards" });
}
function animateLines(el, text, keyframes, duration, stagger, easing, onEnd) {
  const lineDivs = splitLinesAsElements(text, el);
  el.textContent = "";
  for (const div of lineDivs) {
    div.style.willChange = "transform, opacity";
    el.appendChild(div);
  }
  if (lineDivs.length === 0) {
    onEnd == null ? void 0 : onEnd();
    return;
  }
  let remaining = lineDivs.length;
  const maxDelay = (lineDivs.length - 1) * stagger;
  const totalDuration = duration + maxDelay;
  lineDivs.forEach((div, i) => {
    const anim = div.animate(keyframes, { duration, delay: i * stagger, fill: "forwards", easing });
    anim.onfinish = () => {
      remaining--;
      if (remaining === 0) {
        lineDivs.forEach((d) => d.style.willChange = "auto");
        onEnd == null ? void 0 : onEnd();
      }
    };
  });
  return el.animate([{ opacity: 1 }, { opacity: 1 }], { duration: totalDuration, fill: "forwards" });
}
function animateStream(el, prevValue, nextValue, keyframes, duration, stagger, easing, onEnd) {
  var _a;
  const oldText = "";
  const newText = (_a = nextValue != null ? nextValue : el.textContent) != null ? _a : "";
  if (!newText) return;
  const appended = newText.startsWith(oldText) && newText.length > oldText.length;
  const streamText = appended ? newText.slice(oldText.length) : newText;
  if (!streamText) return;
  const wordKfs = stripTransforms(keyframes);
  const parts = streamText.match(/\S+|\s+/g) || [];
  if (parts.length === 0) {
    onEnd == null ? void 0 : onEnd();
    return;
  }
  if (appended) {
    el.textContent = oldText;
    parts.forEach((part, i) => {
      if (/^\s+$/.test(part)) {
        el.appendChild(document.createTextNode(part));
      } else {
        const span = document.createElement("span");
        span.textContent = part;
        span.style.willChange = "opacity";
        span.animate(wordKfs, { duration, delay: i * stagger, fill: "forwards", easing });
        el.appendChild(span);
      }
    });
    const total = duration + parts.length * stagger + 50;
    const marker = el.animate([{ opacity: 1 }, { opacity: 1 }], { duration: total, fill: "forwards" });
    marker.onfinish = () => onEnd == null ? void 0 : onEnd();
    return marker;
  } else {
    return animateWords(el, newText, keyframes, duration, stagger, easing, onEnd);
  }
}
function animateHighlight(el, text, duration, highlightColor, onEnd) {
  var _a;
  const target = (_a = findTextChild(el)) != null ? _a : el;
  const content = text || target.textContent || "";
  const lineDivs = splitLinesAsElements(content, target);
  if (lineDivs.length === 0) {
    onEnd == null ? void 0 : onEnd();
    return;
  }
  const previous = {
    minHeight: target.style.minHeight,
    overflow: target.style.overflow
  };
  const rect = target.getBoundingClientRect();
  if (rect.height > 0) target.style.minHeight = previous.minHeight || `${Math.ceil(rect.height)}px`;
  target.style.overflow = "visible";
  const hlColor = highlightColor != null ? highlightColor : colorWithAlpha(getComputedStyle(target).color, 0.55);
  target.textContent = "";
  const highlightSpans = [];
  const lineWraps = [];
  for (const line of lineDivs) {
    const lineText = line.textContent || "\xA0";
    const wrap = document.createElement("span");
    const span = document.createElement("span");
    span.textContent = lineText;
    span.style.willChange = "background-size, background-position";
    span.style.background = `linear-gradient(120deg, ${hlColor} 50%, transparent 50%)`;
    span.style.backgroundSize = "200% 100%";
    span.style.backgroundRepeat = "no-repeat";
    span.style.backgroundPosition = "100% 0";
    span.style.borderRadius = "0.18em";
    span.style.paddingInline = "0.08em";
    span.style.marginInline = "-0.08em";
    span.style.boxDecorationBreak = "clone";
    span.style.webkitBoxDecorationBreak = "clone";
    wrap.style.display = "block";
    wrap.style.margin = "0";
    wrap.style.padding = "0";
    wrap.style.lineHeight = "inherit";
    wrap.appendChild(span);
    highlightSpans.push(span);
    lineWraps.push(wrap);
    target.appendChild(wrap);
  }
  let remaining = lineWraps.length;
  const stagger = 70;
  const maxDelay = (lineWraps.length - 1) * stagger;
  const drawDuration = Math.max(260, duration);
  const holdDuration = 140;
  const totalDuration = drawDuration + maxDelay + holdDuration;
  let cleaned = false;
  let cancelled = false;
  let holdTimer = null;
  const cleanup = () => {
    if (cleaned) return;
    cleaned = true;
    if (holdTimer !== null) {
      window.clearTimeout(holdTimer);
      holdTimer = null;
    }
    highlightSpans.forEach((s) => {
      s.style.willChange = "auto";
      s.style.background = "";
      s.style.backgroundSize = "";
      s.style.backgroundRepeat = "";
      s.style.backgroundPosition = "";
    });
    if (lineWraps.some((w) => w.parentElement === target)) {
      target.textContent = content;
    }
    target.style.minHeight = previous.minHeight;
    target.style.overflow = previous.overflow;
  };
  highlightSpans.forEach((span, i) => {
    const anim = span.animate(
      [
        { backgroundPosition: "100% 0" },
        { backgroundPosition: "0% 0" }
      ],
      { duration: drawDuration, delay: i * stagger, fill: "forwards", easing: SMOOTH }
    );
    anim.onfinish = () => {
      remaining--;
      if (remaining === 0) {
        holdTimer = window.setTimeout(() => {
          holdTimer = null;
          if (cancelled) return;
          cleanup();
          onEnd == null ? void 0 : onEnd();
        }, holdDuration);
      }
    };
    anim.oncancel = () => {
      cancelled = true;
      cleanup();
    };
  });
  const marker = target.animate([{ opacity: 1 }, { opacity: 1 }], { duration: totalDuration, fill: "forwards" });
  marker.oncancel = () => {
    cancelled = true;
    cleanup();
  };
  return marker;
}
function animateDiff(el, prevValue, nextValue, duration, onEnd) {
  var _a, _b;
  const oldText = prevValue != null ? prevValue : "";
  const target = (_a = findTextChild(el)) != null ? _a : el;
  const newText = (_b = nextValue != null ? nextValue : target.textContent) != null ? _b : "";
  if (!newText) return;
  const oldParts = oldText.match(/\S+|\s+/g) || [];
  const newParts = newText.match(/\S+|\s+/g) || [];
  const previous = {
    minHeight: target.style.minHeight,
    overflow: target.style.overflow
  };
  const rect = target.getBoundingClientRect();
  if (rect.height > 0) target.style.minHeight = previous.minHeight || `${Math.ceil(rect.height)}px`;
  target.style.overflow = "visible";
  target.textContent = "";
  const diffSpans = [];
  for (let i = 0; i < newParts.length; i++) {
    const part = newParts[i];
    if (/^\s+$/.test(part)) {
      target.appendChild(document.createTextNode(part));
    } else {
      const span = document.createElement("span");
      span.textContent = part;
      span.style.willChange = "transform, opacity, filter";
      span.style.display = "inline-block";
      if (i >= oldParts.length || oldParts[i] !== part) {
        span.setAttribute("data-diff", "");
      }
      target.appendChild(span);
      if (i >= oldParts.length || oldParts[i] !== part) diffSpans.push(span);
    }
  }
  let cleaned = false;
  const cleanup = () => {
    if (cleaned) return;
    cleaned = true;
    diffSpans.forEach((s) => {
      s.style.willChange = "auto";
      s.style.transform = "";
      s.style.filter = "";
    });
    if (diffSpans.length === 0 || diffSpans.some((s) => s.parentElement === target)) {
      target.textContent = newText;
    }
    target.style.minHeight = previous.minHeight;
    target.style.overflow = previous.overflow;
  };
  if (diffSpans.length === 0) {
    cleanup();
    onEnd == null ? void 0 : onEnd();
    return;
  }
  let remaining = diffSpans.length;
  const maxDelay = (diffSpans.length - 1) * 30;
  const totalDuration = duration + maxDelay;
  diffSpans.forEach((span, i) => {
    const anim = span.animate(
      [
        { opacity: 0, transform: "translateY(0.16em)", filter: "blur(1.5px)" },
        { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" }
      ],
      { duration, delay: i * 30, fill: "forwards", easing: SMOOTH }
    );
    anim.onfinish = () => {
      remaining--;
      if (remaining === 0) {
        cleanup();
        onEnd == null ? void 0 : onEnd();
      }
    };
    anim.oncancel = cleanup;
  });
  const marker = target.animate([{ opacity: 1 }, { opacity: 1 }], { duration: totalDuration, fill: "forwards" });
  marker.oncancel = cleanup;
  return marker;
}
function animateHeightAuto(el, prevValue, nextValue, duration, onEnd) {
  const oldText = prevValue != null ? prevValue : "";
  const newText = nextValue != null ? nextValue : "";
  const oldHeight = oldText ? measureTextBlock(el, oldText).height : 0;
  const newHeight = newText ? measureTextBlock(el, newText).height : el.scrollHeight;
  if (!oldHeight && !newHeight) {
    onEnd == null ? void 0 : onEnd();
    return;
  }
  if (oldHeight === newHeight) {
    onEnd == null ? void 0 : onEnd();
    return;
  }
  const { oldEl, newEl, cleanup } = prepareStableParagraphSwap(el, oldText, newText);
  el.style.minHeight = "";
  el.style.overflow = "hidden";
  el.style.height = `${Math.ceil(oldHeight)}px`;
  el.offsetHeight;
  const anim = el.animate(
    [{ height: `${Math.ceil(oldHeight)}px` }, { height: `${Math.ceil(newHeight)}px` }],
    { duration, easing: EASE_IN_OUT, fill: "forwards" }
  );
  function heightCleanup() {
    el.style.overflow = "";
    el.style.height = "";
    el.style.minHeight = "";
  }
  anim.onfinish = () => {
    heightCleanup();
    cleanup();
    onEnd == null ? void 0 : onEnd();
  };
  anim.oncancel = () => {
    heightCleanup();
    cleanup();
  };
  return anim;
}
function setupScrollWordReveal(el, text, threshold = 0.4, onEnd) {
  const textChild = findTextChild(el);
  const content = text || (textChild == null ? void 0 : textChild.textContent) || el.textContent || "";
  const useLines = content.length > 20;
  if (textChild && !useLines) {
    const prevWidth2 = el.style.width;
    const prevMinHeight2 = el.style.minHeight;
    const prevOverflow2 = el.style.overflow;
    const fragments2 = splitWordsAsElements(content);
    const wordSpans2 = fragments2.filter((n) => n instanceof HTMLSpanElement);
    if (wordSpans2.length === 0) {
      onEnd == null ? void 0 : onEnd();
      return;
    }
    el.style.width = prevWidth2 || `${Math.ceil(el.getBoundingClientRect().width)}px`;
    el.style.minHeight = prevMinHeight2 || `${Math.ceil(el.getBoundingClientRect().height)}px`;
    el.style.overflow = "hidden";
    const originalInnerHTML = textChild.innerHTML;
    textChild.textContent = "";
    for (const node of fragments2) {
      textChild.appendChild(node);
      if (node instanceof HTMLSpanElement) {
        node.style.opacity = "0.18";
        node.style.transition = "opacity 120ms linear";
        node.style.willChange = "opacity";
      }
    }
    const observer2 = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const word = entry.target;
            word.style.opacity = "1";
            observer2.unobserve(word);
          }
        }
      },
      scrollObserverOptions(el, threshold)
    );
    wordSpans2.forEach((span) => observer2.observe(span));
    return () => {
      observer2.disconnect();
      wordSpans2.forEach((s) => s.style.willChange = "auto");
      textChild.innerHTML = originalInnerHTML;
      el.style.width = prevWidth2;
      el.style.minHeight = prevMinHeight2;
      el.style.overflow = prevOverflow2;
      onEnd == null ? void 0 : onEnd();
    };
  }
  if (useLines) {
    const refEl = textChild || el;
    const lineDivs = splitLinesAsElements(content, refEl);
    if (lineDivs.length <= 1) {
      if (!textChild) {
        const prevWidth3 = el.style.width;
        const prevMinHeight3 = el.style.minHeight;
        const prevOverflow3 = el.style.overflow;
        const currentRect2 = el.getBoundingClientRect();
        const fragments2 = splitWordsAsElements(content);
        const wordSpans2 = fragments2.filter((n) => n instanceof HTMLSpanElement);
        if (wordSpans2.length === 0) {
          onEnd == null ? void 0 : onEnd();
          return;
        }
        el.textContent = "";
        el.style.width = prevWidth3 || `${Math.ceil(currentRect2.width)}px`;
        el.style.minHeight = prevMinHeight3 || `${Math.ceil(currentRect2.height)}px`;
        el.style.overflow = "hidden";
        for (const node of fragments2) {
          el.appendChild(node);
          if (node instanceof HTMLSpanElement) {
            node.style.opacity = "0.18";
            node.style.transition = "opacity 120ms linear";
            node.style.willChange = "opacity";
          }
        }
        const observer3 = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                const word = entry.target;
                word.style.opacity = "1";
                observer3.unobserve(word);
              }
            }
          },
          scrollObserverOptions(el, threshold)
        );
        wordSpans2.forEach((span) => observer3.observe(span));
        return () => {
          observer3.disconnect();
          wordSpans2.forEach((s) => s.style.willChange = "auto");
          el.textContent = content;
          el.style.width = prevWidth3;
          el.style.minHeight = prevMinHeight3;
          el.style.overflow = prevOverflow3;
          onEnd == null ? void 0 : onEnd();
        };
      }
      onEnd == null ? void 0 : onEnd();
      return;
    }
    const target = textChild || el;
    const prevWidth2 = el.style.width;
    const prevMinHeight2 = el.style.minHeight;
    const prevOverflow2 = el.style.overflow;
    const originalContent = target.innerHTML;
    el.style.width = prevWidth2 || `${Math.ceil(el.getBoundingClientRect().width)}px`;
    el.style.minHeight = prevMinHeight2 || `${Math.ceil(el.getBoundingClientRect().height)}px`;
    el.style.overflow = "hidden";
    target.textContent = "";
    for (const div of lineDivs) {
      div.style.opacity = "0";
      div.style.transition = `opacity 500ms ${SMOOTH}`;
      div.style.willChange = "opacity";
      target.appendChild(div);
    }
    const observer2 = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const line = entry.target;
            line.style.opacity = "1";
            observer2.unobserve(line);
          }
        }
      },
      scrollObserverOptions(el, threshold)
    );
    lineDivs.forEach((div) => observer2.observe(div));
    return () => {
      observer2.disconnect();
      lineDivs.forEach((d) => d.style.willChange = "auto");
      target.innerHTML = originalContent;
      el.style.width = prevWidth2;
      el.style.minHeight = prevMinHeight2;
      el.style.overflow = prevOverflow2;
      onEnd == null ? void 0 : onEnd();
    };
  }
  const prevWidth = el.style.width;
  const prevMinHeight = el.style.minHeight;
  const prevOverflow = el.style.overflow;
  const currentRect = el.getBoundingClientRect();
  const fragments = splitWordsAsElements(content);
  const wordSpans = fragments.filter((n) => n instanceof HTMLSpanElement);
  if (wordSpans.length === 0) {
    onEnd == null ? void 0 : onEnd();
    return;
  }
  el.textContent = "";
  el.style.width = prevWidth || `${Math.ceil(currentRect.width)}px`;
  el.style.minHeight = prevMinHeight || `${Math.ceil(currentRect.height)}px`;
  el.style.overflow = "hidden";
  for (const node of fragments) {
    el.appendChild(node);
    if (node instanceof HTMLSpanElement) {
      node.style.opacity = "0.18";
      node.style.transition = "opacity 120ms linear";
      node.style.willChange = "opacity";
    }
  }
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const word = entry.target;
          word.style.opacity = "1";
          observer.unobserve(word);
        }
      }
    },
    scrollObserverOptions(el, threshold)
  );
  wordSpans.forEach((span) => observer.observe(span));
  return () => {
    observer.disconnect();
    wordSpans.forEach((s) => s.style.willChange = "auto");
    el.style.width = prevWidth;
    el.style.minHeight = prevMinHeight;
    el.style.overflow = prevOverflow;
    el.textContent = content;
    onEnd == null ? void 0 : onEnd();
  };
}
function findTextChild(el) {
  const firstP = el.querySelector("p");
  if (firstP && firstP !== el) return firstP;
  const last = el.lastElementChild;
  if (last && last !== el) return last;
  return null;
}
function prepareStableParagraphSwap(el, oldText, newText) {
  const computed = getComputedStyle(el);
  const textChild = findTextChild(el);
  const previous = {
    position: el.style.position,
    minWidth: el.style.minWidth,
    minHeight: el.style.minHeight,
    overflow: el.style.overflow
  };
  el.style.position = "relative";
  el.style.overflow = "hidden";
  if (el.offsetHeight > 0) el.style.minHeight = `${el.offsetHeight}px`;
  if (textChild) {
    let cleanup2 = function() {
      oldEl2.remove();
      newEl2.remove();
      textChild.style.visibility = prevVisibility;
      Object.assign(el.style, previous);
    };
    var cleanup = cleanup2;
    const childComputed = getComputedStyle(textChild);
    const elRect = el.getBoundingClientRect();
    const childRect = textChild.getBoundingClientRect();
    const top = childRect.top - elRect.top;
    const left = childRect.left - elRect.left;
    const prevVisibility = textChild.style.visibility;
    textChild.style.visibility = "hidden";
    const overlayBase2 = {
      position: "absolute",
      left: `${left}px`,
      right: "0",
      top: `${top}px`,
      pointerEvents: "none",
      font: childComputed.font,
      lineHeight: childComputed.lineHeight,
      color: childComputed.color,
      textAlign: childComputed.textAlign,
      whiteSpace: childComputed.whiteSpace,
      margin: "0",
      padding: childComputed.padding,
      boxSizing: "border-box",
      display: "block"
    };
    const oldEl2 = document.createElement("div");
    oldEl2.textContent = oldText;
    Object.assign(oldEl2.style, overlayBase2);
    const newEl2 = document.createElement("div");
    newEl2.textContent = newText;
    Object.assign(newEl2.style, overlayBase2);
    el.appendChild(oldEl2);
    el.appendChild(newEl2);
    return { oldEl: oldEl2, newEl: newEl2, cleanup: cleanup2 };
  }
  const oldTextHeight = measureTextBlock(el, oldText).height;
  const newTextHeight = measureTextBlock(el, newText).height;
  const currentRect = el.getBoundingClientRect();
  const textHeight = Math.max(oldTextHeight, newTextHeight, currentRect.height);
  const originalHTML = el.innerHTML;
  if (textHeight > 0) el.style.minHeight = `${Math.ceil(textHeight)}px`;
  const overlayBase = {
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    display: "block",
    textAlign: computed.textAlign,
    font: computed.font,
    color: computed.color,
    lineHeight: computed.lineHeight,
    whiteSpace: "pre-wrap",
    pointerEvents: "none",
    boxSizing: "border-box",
    margin: "0",
    padding: "0",
    overflow: "hidden"
  };
  const oldEl = document.createElement("div");
  oldEl.innerHTML = originalHTML;
  Object.assign(oldEl.style, overlayBase);
  const newEl = document.createElement("div");
  newEl.innerHTML = originalHTML;
  Object.assign(newEl.style, overlayBase);
  el.appendChild(oldEl);
  el.appendChild(newEl);
  function cleanup() {
    oldEl.remove();
    newEl.remove();
    el.innerHTML = originalHTML;
    Object.assign(el.style, previous);
  }
  return { oldEl, newEl, cleanup };
}
function reserveStableParagraphSize(el, oldText, newText) {
  const oldSize = measureTextBlock(el, oldText);
  const newSize = measureTextBlock(el, newText);
  const current = el.getBoundingClientRect();
  const width = Math.ceil(Math.max(oldSize.width, newSize.width, current.width));
  const height = Math.ceil(Math.max(oldSize.height, newSize.height, current.height));
  if (width > 0) el.style.minWidth = `${width}px`;
  if (height > 0) el.style.minHeight = `${height}px`;
}
function runSwapAnimate(el, prevText, nextText, duration, onEnd, innerFn) {
  var _a;
  const oldText = prevText != null ? prevText : "";
  const newText = (_a = nextText != null ? nextText : el.textContent) != null ? _a : "";
  if (!newText) return;
  const { oldEl, newEl, cleanup } = prepareStableParagraphSwap(el, oldText, newText);
  let cleaned = false;
  const cleanupOnce = () => {
    if (cleaned) return;
    cleaned = true;
    cleanup();
  };
  const finish = () => {
    cleanupOnce();
    onEnd == null ? void 0 : onEnd();
  };
  oldEl.animate(
    [{ opacity: 1 }, { opacity: 0 }],
    { duration: Math.min(120, duration * 0.3), easing: EASE_OUT, fill: "forwards" }
  );
  const anim = innerFn(newEl, newText, duration, finish);
  if (!anim) {
    finish();
    return void 0;
  }
  const previousCancel = anim.oncancel;
  anim.oncancel = (event) => {
    previousCancel == null ? void 0 : previousCancel.call(anim, event);
    cleanupOnce();
  };
  return anim;
}
var customAnimations = {
  morphText: (el, prev, next, dur, onEnd) => animateMorph(el, prev, next, dur, onEnd),
  fadeSwap: (el, prev, next, dur, onEnd) => animateFadeSwap(el, prev, next, dur, onEnd),
  slideReplace: (el, prev, next, dur, onEnd) => animateSlideReplace(el, prev, next, 1, dur, onEnd),
  pushLeft: (el, prev, next, dur, onEnd) => animateSlideReplace(el, prev, next, 1, dur, onEnd),
  pushRight: (el, prev, next, dur, onEnd) => animateSlideReplace(el, prev, next, -1, dur, onEnd),
  crossFade: (el, prev, next, dur, onEnd) => animateCrossFade(el, prev, next, dur, onEnd),
  fadeMask: (el, _prev, _next, dur, onEnd) => animateFadeMask(el, dur, onEnd),
  wordFadeIn: (el, prev, next, dur, onEnd) => runSwapAnimate(
    el,
    prev,
    next,
    dur,
    onEnd,
    (target, text, _dur, cb) => animateWords(target, text, wordFadeKfs, 350, 30, SMOOTH, cb)
  ),
  wordSlideUp: (el, prev, next, dur, onEnd) => runSwapAnimate(
    el,
    prev,
    next,
    dur,
    onEnd,
    (target, text, _dur, cb) => animateWords(target, text, wordSlideKfs, 350, 30, SMOOTH, cb)
  ),
  wordPop: (el, prev, next, dur, onEnd) => runSwapAnimate(
    el,
    prev,
    next,
    dur,
    onEnd,
    (target, text, _dur, cb) => animateWords(target, text, wordPopKfs, 350, 30, SMOOTH, cb)
  ),
  lineFadeIn: (el, prev, next, dur, onEnd) => runSwapAnimate(
    el,
    prev,
    next,
    dur,
    onEnd,
    (target, text, _dur, cb) => animateLines(target, text, lineFadeKfs, dur * 0.6, 80, SMOOTH, cb)
  ),
  lineSlideUp: (el, prev, next, dur, onEnd) => runSwapAnimate(
    el,
    prev,
    next,
    dur,
    onEnd,
    (target, text, _dur, cb) => animateLines(target, text, lineSlideKfs, dur * 0.6, 80, SMOOTH, cb)
  ),
  streamIn: (el, prev, next, dur, onEnd) => runSwapAnimate(
    el,
    prev,
    next,
    dur,
    onEnd,
    (target, text, _dur, cb) => animateStream(target, void 0, text, wordFadeKfs, 300, 80, SMOOTH, cb)
  ),
  streamFade: (el, prev, next, dur, onEnd) => runSwapAnimate(
    el,
    prev,
    next,
    dur,
    onEnd,
    (target, text, _dur, cb) => animateStream(target, void 0, text, wordFadeKfs, 300, 80, SMOOTH, cb)
  ),
  streamSlide: (el, prev, next, dur, onEnd) => runSwapAnimate(
    el,
    prev,
    next,
    dur,
    onEnd,
    (target, text, _dur, cb) => animateStream(target, void 0, text, wordSlideKfs, 300, 80, SMOOTH, cb)
  ),
  diffAnimate: (el, prev, next, dur, onEnd) => animateDiff(el, prev, next, Math.max(260, dur), onEnd),
  highlight: (el, _prev, next, dur, onEnd, highlightColor) => animateHighlight(el, next != null ? next : "", Math.max(280, dur), highlightColor, onEnd),
  scrollWordReveal: (el, _prev, _next) => {
    var _a;
    setupScrollWordReveal(el, String((_a = _next != null ? _next : el.textContent) != null ? _a : ""));
    return void 0;
  },
  expandCollapse: (el, prev, next, dur, onEnd) => animateHeightAuto(el, prev, next, dur, onEnd),
  heightAuto: (el, prev, next, dur, onEnd) => animateHeightAuto(el, prev, next, dur, onEnd)
};
var wordFadeKfs = [{ opacity: 0 }, { opacity: 1 }];
var wordSlideKfs = [
  { opacity: 0, transform: "translateY(6px)" },
  { opacity: 1, transform: "translateY(0)" }
];
var wordPopKfs = [
  { opacity: 0, transform: "scale(0.92)" },
  { opacity: 1, transform: "scale(1.04)", offset: 0.55 },
  { opacity: 1, transform: "scale(1)" }
];
var lineFadeKfs = [{ opacity: 0 }, { opacity: 1 }];
var lineSlideKfs = [
  { transform: "translateY(8px)", opacity: 0 },
  { transform: "translateY(0)", opacity: 1 }
];
function colorWithAlpha(color, alpha) {
  if (!color) return `rgba(0, 0, 0, ${alpha})`;
  const m = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (m) return `rgba(${m[1]}, ${m[2]}, ${m[3]}, ${alpha})`;
  if (color.startsWith("oklch(") || color.startsWith("lab(") || color.startsWith("hsl(")) {
    const probe = document.createElement("div");
    probe.style.color = color;
    document.body.appendChild(probe);
    const parsed = getComputedStyle(probe).color;
    probe.remove();
    const pm = parsed.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (pm) return `rgba(${pm[1]}, ${pm[2]}, ${pm[3]}, ${alpha})`;
  }
  return `rgba(0, 0, 0, ${alpha})`;
}
function applyInitialState(el, keyframes) {
  const first = keyframes[0];
  if (!first) return;
  if (first.opacity !== void 0) el.style.opacity = String(first.opacity);
  if (first.transform !== void 0) el.style.transform = String(first.transform);
}
function applyFinalState(el, keyframes) {
  const last = keyframes[keyframes.length - 1];
  if (!last) return;
  if (last.opacity !== void 0) el.style.opacity = String(last.opacity);
  if (last.transform !== void 0) el.style.transform = String(last.transform);
}
function runAnimation(el, preset, options, mode = "single") {
  var _a, _b;
  el.style.willChange = "transform, opacity";
  if (preset === "highlight") {
    const hlColor = colorWithAlpha(getComputedStyle(el).color, 0.5);
    el.style.background = `linear-gradient(to right, ${hlColor} 50%, transparent 50%)`;
    el.style.backgroundSize = "200% 100%";
    el.style.backgroundRepeat = "no-repeat";
    el.style.backgroundPosition = "100% 0";
    const dur = (_a = options.duration) != null ? _a : 280;
    const anim2 = el.animate(
      [
        { backgroundPosition: "100% 0" },
        { backgroundPosition: "0% 0" }
      ],
      { duration: dur, easing: SMOOTH, fill: "forwards" }
    );
    const cleanup = () => {
      el.style.background = "";
      el.style.backgroundSize = "";
      el.style.backgroundRepeat = "";
      el.style.backgroundPosition = "";
      el.style.willChange = "auto";
    };
    anim2.addEventListener("finish", cleanup);
    anim2.addEventListener("cancel", cleanup);
    return anim2;
  }
  if (preset === "flash") {
    const flashColor = colorWithAlpha(getComputedStyle(el).color, 0.6);
    el.style.backgroundColor = flashColor;
    const dur = (_b = options.duration) != null ? _b : 280;
    const anim2 = el.animate(
      [
        { backgroundColor: flashColor },
        { backgroundColor: "rgba(0,0,0,0)" }
      ],
      { duration: dur, easing: SMOOTH, fill: "forwards" }
    );
    const cleanup = () => {
      el.style.backgroundColor = "";
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
        `[trigr] Unknown paragraph animation preset "${preset}". Expected one of: ${Object.keys(presets).join(", ")}`
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
  const keyframes = prefersReducedMotion() ? baseFrames.map(({ opacity }) => ({ opacity: opacity != null ? opacity : 1 })) : baseFrames;
  applyInitialState(el, keyframes);
  const anim = el.animate(keyframes, { ...options, fill: "forwards" });
  anim.addEventListener("finish", () => {
    applyFinalState(el, keyframes);
    el.style.willChange = "auto";
  });
  anim.addEventListener("cancel", () => {
    el.style.willChange = "auto";
  });
  return anim;
}
var AnimateParagraph = react.forwardRef(function AnimateParagraph2({
  value,
  trigger = "change",
  animation: baseAnimation,
  scrollAnimation,
  properties,
  highlightColor: highlightColorProp,
  duration = 300,
  easing = SPRING,
  delay = 0,
  threshold = 0.4,
  repeat = false,
  once,
  as = "div",
  className,
  style,
  onClick,
  onEnter,
  onExit,
  onHoverStart,
  onHoverEnd,
  onAnimationEnd: onAnimationEndProp,
  children
}, forwardedRef) {
  var _a, _b;
  const ref = react.useRef(null);
  const animRef = react.useRef(null);
  const propertyAnimRef = react.useRef(null);
  const cleanupRef = react.useRef(null);
  const timerRef = react.useRef(null);
  const runFallbackRef = react.useRef(null);
  const prevHeightRef = react.useRef(0);
  const prevValRef = react.useRef(value);
  const runningRef = react.useRef(false);
  const queueRef = react.useRef([]);
  const runIdRef = react.useRef(0);
  const scrollTriggeredRef = react.useRef(false);
  const [playCount, setPlayCount] = react.useState(0);
  const [currentRun, setCurrentRun] = react.useState(null);
  const { changed, prev, current: watchedCurrent } = useValueChange(value);
  const capturedPrevRef = react.useRef(prev);
  if (changed) capturedPrevRef.current = prev;
  const shouldObserveOnce = once != null ? once : !repeat;
  const triggers = react.useMemo(
    () => Array.isArray(trigger) ? trigger.slice(0, 2) : [trigger],
    [trigger]
  );
  const hasTrigger = react.useCallback((source) => triggers.includes(source), [triggers]);
  const activeTrigger = (_b = (_a = currentRun == null ? void 0 : currentRun.source) != null ? _a : triggers[0]) != null ? _b : "change";
  const animation = activeTrigger === "scroll" && scrollAnimation ? scrollAnimation : baseAnimation;
  const finishRun = react.useCallback(() => {
    if (runFallbackRef.current !== null) {
      clearTimeout(runFallbackRef.current);
      runFallbackRef.current = null;
    }
    runningRef.current = false;
    animRef.current = null;
    onAnimationEndProp == null ? void 0 : onAnimationEndProp();
    const next = queueRef.current.shift();
    if (next) {
      runningRef.current = true;
      setCurrentRun({ id: ++runIdRef.current, source: next });
      setPlayCount((c) => c + 1);
    } else {
      setCurrentRun(null);
    }
  }, [onAnimationEndProp]);
  const requestRun = react.useCallback((source) => {
    if (runningRef.current) {
      if (source !== "scroll") queueRef.current = [...queueRef.current, source].slice(-2);
      return;
    }
    runningRef.current = true;
    setCurrentRun({ id: ++runIdRef.current, source });
    setPlayCount((c) => c + 1);
  }, []);
  const animate = react.useCallback(() => requestRun("manual"), [requestRun]);
  react.useImperativeHandle(forwardedRef, () => ({
    animate,
    get element() {
      return ref.current;
    }
  }), [animate]);
  react.useEffect(() => {
    if (!hasTrigger("scroll")) return;
    const el = ref.current;
    if (!el) return;
    scrollTriggeredRef.current = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (scrollTriggeredRef.current) return;
          scrollTriggeredRef.current = true;
          onEnter == null ? void 0 : onEnter();
          requestRun("scroll");
          if (shouldObserveOnce) observer.disconnect();
        } else {
          scrollTriggeredRef.current = false;
          if (repeat) onExit == null ? void 0 : onExit();
        }
      },
      scrollObserverOptions(el, threshold)
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasTrigger, onEnter, onExit, repeat, requestRun, shouldObserveOnce, threshold]);
  react.useEffect(() => {
    if (hasTrigger("change") && changed) requestRun("change");
  }, [changed, hasTrigger, requestRun]);
  react.useEffect(() => {
    if (!hasTrigger("mount")) return;
    requestRun("mount");
  }, [hasTrigger, requestRun]);
  const handleClick = react.useCallback(
    (e) => {
      onClick == null ? void 0 : onClick(e);
      if (hasTrigger("click")) requestRun("click");
    },
    [hasTrigger, onClick, requestRun]
  );
  const handleMouseEnter = react.useCallback(() => {
    onHoverStart == null ? void 0 : onHoverStart();
    if (hasTrigger("hover")) requestRun("hover");
  }, [hasTrigger, onHoverStart, requestRun]);
  const handleMouseLeave = react.useCallback(() => onHoverEnd == null ? void 0 : onHoverEnd(), [onHoverEnd]);
  react.useEffect(() => {
    var _a2;
    if (animation !== "scrollWordReveal" || !hasTrigger("scroll")) return;
    if (!currentRun || currentRun.source !== "scroll") return;
    const el = ref.current;
    if (!el) return;
    const text = String((_a2 = value != null ? value : el.textContent) != null ? _a2 : "");
    if (!text) return;
    const removeObserver = setupScrollWordReveal(el, text, threshold, finishRun);
    return () => removeObserver == null ? void 0 : removeObserver();
  }, [animation, currentRun, finishRun, hasTrigger, threshold, value]);
  if (value !== prevValRef.current && ref.current) {
    prevHeightRef.current = ref.current.offsetHeight;
  }
  prevValRef.current = value;
  react.useLayoutEffect(() => {
    var _a2, _b2, _c;
    if (playCount <= 0 || !currentRun || !ref.current) return;
    if (animation === "scrollWordReveal" && currentRun.source === "scroll") return;
    cancelElementAnimations(ref.current);
    animRef.current = null;
    propertyAnimRef.current = null;
    (_a2 = cleanupRef.current) == null ? void 0 : _a2.call(cleanupRef);
    if (timerRef.current !== null) clearTimeout(timerRef.current);
    if (runFallbackRef.current !== null) {
      clearTimeout(runFallbackRef.current);
      runFallbackRef.current = null;
    }
    const el = ref.current;
    const current = currentRun.source === "change" ? watchedCurrent : (_b2 = value != null ? value : el.textContent) != null ? _b2 : "";
    const text = String(current);
    const reduced = prefersReducedMotion();
    const motionDuration = reduced ? duration / 2 : duration;
    const effectivePrev = currentRun.source === "change" ? capturedPrevRef.current : void 0;
    runFallbackRef.current = setTimeout(() => {
      runFallbackRef.current = null;
      finishRun();
    }, Math.max(900, motionDuration * 2 + 600));
    if (currentRun.source === "change" && effectivePrev !== void 0) {
      reserveStableParagraphSize(el, String(effectivePrev), text);
    }
    propertyAnimRef.current = runPropertyAnimation(el, properties, {
      duration: motionDuration,
      easing,
      delay
    });
    const handler = customAnimations[animation];
    if (handler) {
      animRef.current = (_c = handler(el, effectivePrev !== void 0 ? String(effectivePrev) : void 0, text, motionDuration, finishRun, highlightColorProp)) != null ? _c : null;
      return;
    }
    const anim = runAnimation(
      el,
      animation,
      { duration: motionDuration, easing, delay },
      currentRun.source === "change" ? "change" : "single"
    );
    animRef.current = anim;
    anim.onfinish = finishRun;
  }, [animation, currentRun, delay, duration, easing, finishRun, highlightColorProp, playCount, prev, properties, value, watchedCurrent]);
  react.useEffect(() => () => {
    var _a2, _b2, _c;
    (_a2 = animRef.current) == null ? void 0 : _a2.cancel();
    (_b2 = propertyAnimRef.current) == null ? void 0 : _b2.cancel();
    (_c = cleanupRef.current) == null ? void 0 : _c.call(cleanupRef);
    if (timerRef.current !== null) clearTimeout(timerRef.current);
    if (runFallbackRef.current !== null) clearTimeout(runFallbackRef.current);
    queueRef.current = [];
  }, []);
  return react.createElement(
    as,
    {
      ref,
      className,
      style,
      onClick: hasTrigger("click") || onClick ? handleClick : void 0,
      onMouseEnter: hasTrigger("hover") || onHoverStart ? handleMouseEnter : void 0,
      onMouseLeave: onHoverEnd ? handleMouseLeave : void 0
    },
    children
  );
});
var Animate = { Paragraph: AnimateParagraph };
var paragraph_default = Animate;

exports.Animate = Animate;
exports.AnimateParagraph = AnimateParagraph;
exports.EASE_IN = EASE_IN;
exports.EASE_IN_OUT = EASE_IN_OUT;
exports.EASE_OUT = EASE_OUT;
exports.SMOOTH = SMOOTH;
exports.SPRING = SPRING;
exports.default = paragraph_default;
exports.presets = presets;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map