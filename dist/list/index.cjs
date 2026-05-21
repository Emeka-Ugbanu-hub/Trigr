'use strict';

var React = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

// src/list/index.tsx

// src/list/animations.ts
var EASE_IN = "cubic-bezier(0.0, 0.0, 0.2, 1)";
var EASE_OUT = "cubic-bezier(0.4, 0.0, 1, 1)";
var EASE_IN_OUT = "cubic-bezier(0.4, 0.0, 0.2, 1)";
var SPRING = "cubic-bezier(0.34, 1.56, 0.64, 1)";
var SNAPPY = "cubic-bezier(0.2, 0, 0, 1)";
var SMOOTH = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";
var SPRING_EASE = SPRING;
var SMOOTH_EASE = SMOOTH;
var SNAPPY_EASE = SNAPPY;
var enterPresets = {
  // ── Stagger ──
  staggerFadeIn: {
    keyframes: [{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "translateY(0)" }],
    options: { duration: 280, easing: SPRING_EASE }
  },
  staggerSlideUp: {
    keyframes: [{ transform: "translateY(14px)", opacity: 0 }, { transform: "translateY(0)", opacity: 1 }],
    options: { duration: 300, easing: SPRING_EASE }
  },
  staggerSlideLeft: {
    keyframes: [{ transform: "translateX(20px)", opacity: 0 }, { transform: "translateX(0)", opacity: 1 }],
    options: { duration: 300, easing: SPRING_EASE }
  },
  staggerZoomIn: {
    keyframes: [{ transform: "scale(0.88)", opacity: 0 }, { transform: "scale(1)", opacity: 1 }],
    options: { duration: 320, easing: SPRING_EASE }
  },
  staggerPopIn: {
    keyframes: [
      { transform: "scale(0.88)", opacity: 0 },
      { transform: "scale(1.04)", opacity: 1, offset: 0.6 },
      { transform: "scale(0.99)", opacity: 1, offset: 0.82 },
      { transform: "scale(1)", opacity: 1 }
    ],
    options: { duration: 340, easing: SPRING_EASE }
  },
  stackIn: {
    keyframes: [{ transform: "translateY(24px) scale(0.93)", opacity: 0 }, { transform: "translateY(0) scale(1)", opacity: 1 }],
    options: { duration: 350, easing: SMOOTH_EASE }
  },
  // ── Cascade ──
  wordCascade: {
    keyframes: [{ transform: "translateY(12px)", opacity: 0 }, { transform: "translateY(0)", opacity: 1 }],
    options: { duration: 280, easing: SMOOTH_EASE }
  },
  wordWave: {
    keyframes: [
      { transform: "translateY(0)", opacity: 1 },
      { transform: "translateY(-10px)", opacity: 1, offset: 0.5 },
      { transform: "translateY(0)", opacity: 1 }
    ],
    options: { duration: 360, easing: SMOOTH_EASE }
  },
  wordDrop: {
    keyframes: [{ transform: "translateY(-18px)", opacity: 0 }, { transform: "translateY(0)", opacity: 1 }],
    options: { duration: 320, easing: SMOOTH_EASE }
  },
  wordFadeIn: {
    keyframes: [{ opacity: 0 }, { opacity: 1 }],
    options: { duration: 260, easing: SMOOTH_EASE }
  },
  // ── Marquee (keyframes handled by runtime) ──
  marquee: { keyframes: [] },
  marqueeReverse: { keyframes: [] },
  marqueeFade: { keyframes: [] },
  // ── Scroll-linked collection motion (handled by runtime) ──
  parallax: { keyframes: [] },
  parallaxFast: { keyframes: [] },
  parallaxReverse: { keyframes: [] },
  tiltScroll: { keyframes: [] },
  scaleScroll: { keyframes: [] },
  parallaxStagger: { keyframes: [] },
  // ── Presence ──
  itemFadeIn: { keyframes: [{ opacity: 0 }, { opacity: 1 }], options: { duration: 220, easing: SPRING_EASE } },
  itemSlideIn: {
    keyframes: [{ transform: "translateY(12px)", opacity: 0 }, { transform: "translateY(0)", opacity: 1 }],
    options: { duration: 250, easing: SPRING_EASE }
  },
  itemPopIn: {
    keyframes: [{ transform: "scale(0.9)", opacity: 0 }, { transform: "scale(1)", opacity: 1 }],
    options: { duration: 250, easing: SNAPPY_EASE }
  },
  itemBounceIn: {
    keyframes: [
      { transform: "scale(0.88)", opacity: 0 },
      { transform: "scale(1.06)", opacity: 1, offset: 0.45 },
      { transform: "scale(0.98)", opacity: 1, offset: 0.68 },
      { transform: "scale(1)", opacity: 1 }
    ],
    options: { duration: 320, easing: SPRING_EASE }
  },
  itemFadeOut: { keyframes: [{ opacity: 1 }, { opacity: 0 }], options: { duration: 180, easing: EASE_OUT } },
  itemSlideOut: {
    keyframes: [{ transform: "translateY(0)", opacity: 1 }, { transform: "translateY(-14px)", opacity: 0 }],
    options: { duration: 210, easing: EASE_OUT }
  },
  itemCollapseOut: {
    keyframes: [{ transform: "scaleY(1)", opacity: 1, transformOrigin: "top" }, { transform: "scaleY(0)", opacity: 0, transformOrigin: "top" }],
    options: { duration: 230, easing: EASE_OUT }
  },
  // ── Reorder tokens (handled by runtime) ──
  flip: { keyframes: [{ transform: "translate(0, 0)" }, { transform: "translate(0, 0)" }] },
  smooth: { keyframes: [{ transform: "translate(0, 0)" }, { transform: "translate(0, 0)" }] },
  spring: { keyframes: [{ transform: "translate(0, 0)" }, { transform: "translate(0, 0)" }] },
  none: { keyframes: [] }
};
var extended = {
  fadeIn: { keyframes: [{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "translateY(0)" }], options: { duration: 300, easing: SMOOTH_EASE } },
  slideIn: { keyframes: [{ transform: "translateY(20px)", opacity: 0 }, { transform: "translateY(0)", opacity: 1 }], options: { duration: 320, easing: SMOOTH_EASE } },
  slideInLeft: { keyframes: [{ transform: "translateX(-20px)", opacity: 0 }, { transform: "translateX(0)", opacity: 1 }], options: { duration: 300, easing: SPRING_EASE } },
  slideInRight: { keyframes: [{ transform: "translateX(20px)", opacity: 0 }, { transform: "translateX(0)", opacity: 1 }], options: { duration: 300, easing: SPRING_EASE } },
  popIn: {
    keyframes: [
      { transform: "scale(0.9)", opacity: 0 },
      { transform: "scale(1.05)", opacity: 1, offset: 0.55 },
      { transform: "scale(0.99)", opacity: 1, offset: 0.78 },
      { transform: "scale(1)", opacity: 1 }
    ],
    options: { duration: 320, easing: SPRING_EASE }
  },
  bounceIn: {
    keyframes: [
      { transform: "translateY(10px) scale(0.9)", opacity: 0 },
      { transform: "translateY(-6px) scale(1.06)", opacity: 1, offset: 0.45 },
      { transform: "translateY(2px) scale(0.99)", opacity: 1, offset: 0.7 },
      { transform: "translateY(0) scale(1)", opacity: 1 }
    ],
    options: { duration: 340, easing: SPRING_EASE }
  },
  expandIn: { keyframes: [{ transform: "scaleY(0.85)", opacity: 0, transformOrigin: "top" }, { transform: "scaleY(1)", opacity: 1, transformOrigin: "top" }], options: { duration: 300, easing: SPRING_EASE } },
  flipIn: {
    keyframes: [
      { transform: "perspective(500px) rotateX(-75deg)", opacity: 0 },
      { transform: "perspective(500px) rotateX(4deg)", opacity: 1, offset: 0.75 },
      { transform: "perspective(500px) rotateX(0deg)", opacity: 1 }
    ],
    options: { duration: 380, easing: SMOOTH_EASE }
  },
  glideIn: { keyframes: [{ transform: "translateX(-12px)", opacity: 0 }, { transform: "translateX(0)", opacity: 1 }], options: { duration: 280, easing: SMOOTH_EASE } },
  // Exit aliases — reverses of their enter counterparts
  fadeOut: { keyframes: [{ opacity: 1 }, { opacity: 0 }], options: { duration: 180, easing: EASE_OUT } },
  slideOut: { keyframes: [{ transform: "translateY(0)", opacity: 1 }, { transform: "translateY(20px)", opacity: 0 }], options: { duration: 210, easing: EASE_OUT } },
  slideOutLeft: { keyframes: [{ transform: "translateX(0)", opacity: 1 }, { transform: "translateX(-20px)", opacity: 0 }], options: { duration: 210, easing: EASE_OUT } },
  slideOutRight: { keyframes: [{ transform: "translateX(0)", opacity: 1 }, { transform: "translateX(20px)", opacity: 0 }], options: { duration: 210, easing: EASE_OUT } },
  popOut: {
    keyframes: [
      { transform: "scale(1)", opacity: 1 },
      { transform: "scale(1.03)", opacity: 1, offset: 0.3 },
      { transform: "scale(0.9)", opacity: 0 }
    ],
    options: { duration: 210, easing: EASE_OUT }
  },
  bounceOut: {
    keyframes: [
      { transform: "scale(1)", opacity: 1 },
      { transform: "translateY(-4px) scale(1.04)", opacity: 1, offset: 0.32 },
      { transform: "translateY(8px) scale(0.9)", opacity: 0 }
    ],
    options: { duration: 240, easing: EASE_OUT }
  },
  collapseOut: {
    keyframes: [{ transform: "scaleY(1)", opacity: 1, transformOrigin: "top" }, { transform: "scaleY(0)", opacity: 0, transformOrigin: "top" }],
    options: { duration: 230, easing: EASE_OUT }
  },
  flipOut: {
    keyframes: [
      { transform: "perspective(500px) rotateX(0deg)", opacity: 1 },
      { transform: "perspective(500px) rotateX(75deg)", opacity: 0 }
    ],
    options: { duration: 250, easing: EASE_OUT }
  },
  glideOut: { keyframes: [{ transform: "translateX(0)", opacity: 1 }, { transform: "translateX(-12px)", opacity: 0 }], options: { duration: 200, easing: EASE_OUT } }
};
var merged = { ...enterPresets, ...extended };
var presets = merged;
function useListDiff(keys) {
  const prevKeysRef = React.useRef(keys);
  const prev = prevKeysRef.current;
  const prevSet = new Set(prev);
  const currSet = new Set(keys);
  const added = keys.filter((k) => !prevSet.has(k));
  const removed = prev.filter((k) => !currSet.has(k));
  const stable = [];
  const reordered = [];
  const prevIndexMap = new Map(prev.map((k, i) => [k, i]));
  keys.forEach((k, i) => {
    if (prevSet.has(k) && currSet.has(k)) {
      if (prevIndexMap.get(k) !== i) reordered.push(k);
      else stable.push(k);
    }
  });
  prevKeysRef.current = keys;
  return { added, removed, reordered, stable };
}
function usePositionTracker(containerRef) {
  const posRef = React.useRef(/* @__PURE__ */ new Map());
  const snapshot = React.useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const map = /* @__PURE__ */ new Map();
    const containerRect = el.getBoundingClientRect();
    for (const child of el.children) {
      const key = child.getAttribute("data-trigr-key");
      if (!key) continue;
      const rect = child.getBoundingClientRect();
      map.set(key, {
        top: rect.top - containerRect.top,
        left: rect.left - containerRect.left,
        width: rect.width,
        height: rect.height
      });
    }
    posRef.current = map;
  }, [containerRef]);
  const getPositions = React.useCallback(() => {
    return new Map(posRef.current);
  }, []);
  return { snapshot, getPositions };
}

// src/list/index.tsx
var warned = /* @__PURE__ */ new Set();
function resolveDef(name, type, custom) {
  if (type === "enter" && (custom == null ? void 0 : custom.enter)) return custom.enter;
  if (type === "exit" && (custom == null ? void 0 : custom.exit)) return custom.exit;
  const def = presets[name];
  if (!def) {
    if (!warned.has(name)) {
      warned.add(name);
      const fallback = type === "enter" ? "staggerFadeIn" : "itemFadeOut";
      console.warn(`[trigr/list] Unknown animation "${name}", falling back to "${fallback}"`);
    }
    return type === "enter" ? presets.staggerFadeIn : presets.itemFadeOut;
  }
  return def;
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
function runAnimation(el, def, opts) {
  el.style.willChange = "transform, opacity";
  const keyframes = reducedMotion() ? def.keyframes.map(({ opacity }) => ({ opacity: opacity != null ? opacity : 1 })) : def.keyframes;
  applyInitialState(el, keyframes);
  const anim = el.animate(keyframes, { ...def.options, ...opts, fill: "forwards" });
  anim.addEventListener("finish", () => {
    applyFinalState(el, keyframes);
    el.style.willChange = "auto";
  });
  anim.addEventListener("cancel", () => {
    el.style.willChange = "auto";
  });
  return anim;
}
function cancelElementAnimations(el) {
  el.getAnimations({ subtree: true }).forEach((animation) => animation.cancel());
}
function reducedMotion() {
  var _a, _b;
  if (typeof window === "undefined") return false;
  return (_b = (_a = window.matchMedia) == null ? void 0 : _a.call(window, "(prefers-reduced-motion: reduce)").matches) != null ? _b : false;
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
function getKeys(children) {
  const keys = [];
  React__default.default.Children.forEach(children, (child) => {
    if (React__default.default.isValidElement(child) && child.key != null) keys.push(child.key);
  });
  return keys;
}
function isMarqueeAnimation(name) {
  return name === "marquee" || name === "marqueeReverse" || name === "marqueeFade";
}
function isParallaxAnimation(name) {
  return name === "parallax" || name === "parallaxFast" || name === "parallaxReverse" || name === "tiltScroll" || name === "scaleScroll" || name === "parallaxStagger";
}
function normalizeParallaxSpeed(speed) {
  if (!Number.isFinite(speed)) return 0.5;
  return Math.min(1.5, Math.max(0.05, speed));
}
function closestItem(el, root) {
  return el.closest("[data-trigr-key]");
}
function getItemKey(el) {
  return el.getAttribute("data-trigr-key");
}
var AnimateList = React.forwardRef(function AnimateList2({
  animation = "staggerFadeIn",
  scrollAnimation,
  properties,
  exitAnimation = "itemFadeOut",
  reorderAnimation = "flip",
  reorder = "flip",
  duration = 300,
  reorderDuration = 250,
  stagger = 60,
  exitStagger = 0,
  speed = 50,
  trigger = "mount",
  threshold = 0.4,
  easing = EASE_IN,
  reorderEasing = EASE_IN_OUT,
  as = "div",
  className,
  style,
  onItemEnter,
  onItemExit,
  onReorder,
  children,
  customAnimation
}, ref) {
  var _a, _b, _c, _d;
  const rootRef = React.useRef(null);
  const currentKeys = getKeys(children);
  const diff = useListDiff(currentKeys);
  const { getPositions } = usePositionTracker(rootRef);
  const prevChildrenRef = React.useRef(children);
  const [ghosts, setGhosts] = React.useState(/* @__PURE__ */ new Map());
  const ghostAnimatedRef = React.useRef(/* @__PURE__ */ new Set());
  const ghostTimersRef = React.useRef(/* @__PURE__ */ new Map());
  const runTimerRef = React.useRef(null);
  const runningRef = React.useRef(false);
  const queueRef = React.useRef([]);
  const runIdRef = React.useRef(0);
  const reducedRef = React.useRef(false);
  const triggers = React.useMemo(
    () => Array.isArray(trigger) ? trigger.slice(0, 2) : [trigger],
    [trigger]
  );
  const hasTrigger = React.useCallback((source) => triggers.includes(source), [triggers]);
  const [currentRun, setCurrentRun] = React.useState(null);
  const [inView, setInView] = React.useState(!hasTrigger("scroll"));
  const activeTrigger = (_b = (_a = currentRun == null ? void 0 : currentRun.source) != null ? _a : triggers[0]) != null ? _b : "mount";
  const activeAnimation = activeTrigger === "scroll" && scrollAnimation ? scrollAnimation : animation;
  if (typeof window !== "undefined") {
    reducedRef.current = (_d = (_c = window.matchMedia) == null ? void 0 : _c.call(window, "(prefers-reduced-motion: reduce)").matches) != null ? _d : false;
  }
  React.useEffect(() => {
    setInView(!hasTrigger("scroll"));
  }, [hasTrigger]);
  React.useEffect(() => {
    if (!hasTrigger("scroll")) return;
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target !== node) continue;
          setInView(entry.isIntersecting);
        }
      },
      scrollObserverOptions(node, threshold)
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [hasTrigger, threshold]);
  const finishRun = React.useCallback(() => {
    if (runTimerRef.current !== null) {
      clearTimeout(runTimerRef.current);
      runTimerRef.current = null;
    }
    runningRef.current = false;
    const next = queueRef.current.shift();
    if (next) {
      runningRef.current = true;
      setCurrentRun({ id: ++runIdRef.current, source: next });
    } else {
      setCurrentRun(null);
    }
  }, []);
  const requestRun = React.useCallback((source) => {
    if (runningRef.current) {
      if (source !== "scroll") queueRef.current = [...queueRef.current, source].slice(-2);
      return;
    }
    runningRef.current = true;
    setCurrentRun({ id: ++runIdRef.current, source });
  }, []);
  const reorderMode = reorderAnimation != null ? reorderAnimation : reorder;
  const animateCollection = React.useCallback((source = activeTrigger) => {
    var _a2, _b2;
    const root = rootRef.current;
    if (!root) {
      finishRun();
      return;
    }
    if (reducedRef.current) {
      finishRun();
      return;
    }
    const selectedAnimation = source === "scroll" && scrollAnimation ? scrollAnimation : animation;
    if (isParallaxAnimation(selectedAnimation) || isMarqueeAnimation(selectedAnimation)) {
      finishRun();
      return;
    }
    const def = resolveDef(selectedAnimation, "enter", customAnimation);
    const nodes = Array.from(root.querySelectorAll("[data-trigr-key]"));
    if (nodes.length === 0) {
      finishRun();
      return;
    }
    if (runTimerRef.current !== null) {
      clearTimeout(runTimerRef.current);
      runTimerRef.current = null;
    }
    cancelElementAnimations(root);
    const resolvedDuration = reducedRef.current ? duration / 2 : Number((_b2 = (_a2 = def.options) == null ? void 0 : _a2.duration) != null ? _b2 : duration);
    nodes.forEach((el, index) => {
      var _a3, _b3;
      runAnimation(el, def, {
        duration: resolvedDuration,
        easing: (_b3 = (_a3 = def.options) == null ? void 0 : _a3.easing) != null ? _b3 : easing,
        delay: index * stagger,
        fill: "forwards"
      });
      runPropertyAnimation(el, properties, {
        duration: resolvedDuration,
        easing,
        delay: index * stagger
      });
    });
    runTimerRef.current = setTimeout(finishRun, resolvedDuration + Math.max(0, nodes.length - 1) * stagger + 80);
  }, [activeTrigger, animation, customAnimation, duration, easing, finishRun, properties, scrollAnimation, stagger]);
  const hoveredKeyRef = React.useRef(null);
  const runSingleItem = React.useCallback((key) => {
    var _a2, _b2;
    const root = rootRef.current;
    if (!root || reducedRef.current) return;
    const el = root.querySelector(`[data-trigr-key="${key}"]`);
    if (!el) return;
    cancelElementAnimations(el);
    const def = resolveDef(animation, "enter", customAnimation);
    const dur = reducedRef.current ? duration / 2 : duration;
    runAnimation(el, def, {
      duration: dur,
      easing: (_b2 = (_a2 = def.options) == null ? void 0 : _a2.easing) != null ? _b2 : easing,
      fill: "forwards"
    });
    runPropertyAnimation(el, properties, { duration: dur, easing });
  }, [animation, duration, easing, customAnimation, properties]);
  const handleMouseOver = React.useCallback((e) => {
    if (!hasTrigger("hover")) return;
    const root = rootRef.current;
    if (!root) return;
    const target = closestItem(e.target);
    if (!target) return;
    const key = getItemKey(target);
    if (key == null || key === hoveredKeyRef.current) return;
    hoveredKeyRef.current = key;
    runSingleItem(key);
  }, [hasTrigger, runSingleItem]);
  const handleMouseLeave = React.useCallback(() => {
    hoveredKeyRef.current = null;
  }, []);
  const handleItemClick = React.useCallback((e) => {
    if (!hasTrigger("click")) return;
    const root = rootRef.current;
    if (!root) return;
    const target = closestItem(e.target);
    if (!target) return;
    const key = getItemKey(target);
    if (key == null) return;
    runSingleItem(key);
  }, [hasTrigger, runSingleItem]);
  React.useImperativeHandle(ref, () => ({ animate: () => requestRun("manual") }), [requestRun]);
  const reorderEasings = {
    flip: EASE_IN_OUT,
    smooth: EASE_IN_OUT,
    spring: SPRING,
    none: EASE_IN_OUT
  };
  React.useEffect(() => {
    var _a2;
    const root = rootRef.current;
    if (!root) return;
    const dur = duration;
    const rDur = reorderDuration;
    if (reducedRef.current) {
      if (diff.removed.length > 0) diff.removed.forEach((key) => onItemExit == null ? void 0 : onItemExit(key));
      if (diff.added.length > 0) diff.added.forEach((key) => onItemEnter == null ? void 0 : onItemEnter(key));
      prevChildrenRef.current = children;
      return;
    }
    const getEl = (key) => root.querySelector(`[data-trigr-key="${key}"]`);
    const rootRect = root.getBoundingClientRect();
    const readPositions = () => {
      const map = /* @__PURE__ */ new Map();
      for (const child of root.children) {
        const k = child.getAttribute("data-trigr-key");
        if (!k) continue;
        const rect = child.getBoundingClientRect();
        map.set(k, {
          top: rect.top - rootRect.top,
          left: rect.left - rootRect.left,
          width: rect.width,
          height: rect.height
        });
      }
      return map;
    };
    const oldPositions = getPositions();
    if (diff.reordered.length > 0 && reorderMode !== "none") {
      const newPositions = readPositions();
      const rEasing = (_a2 = reorderEasings[reorderMode]) != null ? _a2 : reorderEasing;
      for (const key of diff.reordered) {
        const old = oldPositions.get(key);
        const now = newPositions.get(key);
        if (!old || !now) continue;
        const deltaX = old.left - now.left;
        const deltaY = old.top - now.top;
        if (deltaX === 0 && deltaY === 0) continue;
        const el = getEl(key);
        if (!el) continue;
        el.style.zIndex = "1";
        el.style.willChange = "transform";
        el.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        el.getBoundingClientRect();
        const anim = el.animate(
          [{ transform: `translate(${deltaX}px, ${deltaY}px)` }, { transform: "translate(0, 0)" }],
          { duration: rDur, easing: rEasing, fill: "forwards" }
        );
        anim.onfinish = () => {
          el.style.zIndex = "";
          el.style.willChange = "auto";
        };
        el.style.transform = "";
      }
      onReorder == null ? void 0 : onReorder();
    }
    if (diff.added.length > 0) {
      const def = resolveDef(activeAnimation, "enter", customAnimation);
      diff.added.forEach((key, i) => {
        var _a3, _b2;
        const el = getEl(key);
        if (el) {
          runAnimation(el, def, {
            duration: dur,
            easing: (_b2 = (_a3 = def.options) == null ? void 0 : _a3.easing) != null ? _b2 : easing,
            delay: i * stagger,
            fill: "forwards"
          });
          runPropertyAnimation(el, properties, {
            duration: dur,
            easing,
            delay: i * stagger
          });
        }
        onItemEnter == null ? void 0 : onItemEnter(key);
      });
    }
    if (diff.removed.length > 0) {
      const prevArr = React__default.default.Children.toArray(prevChildrenRef.current);
      const newGhosts = new Map(ghosts);
      diff.removed.forEach((key) => {
        if (ghosts.has(key)) return;
        const element = prevArr.find((c) => React__default.default.isValidElement(c) && c.key === key);
        const pos = oldPositions.get(key);
        if (element && pos) newGhosts.set(key, { key, element, ...pos });
      });
      if (newGhosts.size !== ghosts.size) setGhosts(newGhosts);
    }
    prevChildrenRef.current = children;
  }, [diff, children, activeAnimation, exitAnimation, duration, reorderDuration, stagger, exitStagger, reorderMode, reorderEasing, properties]);
  React.useEffect(() => {
    if (reducedRef.current) return;
    const root = rootRef.current;
    if (!root || ghosts.size === 0) return;
    const def = resolveDef(exitAnimation, "exit", customAnimation);
    const unanimated = [];
    ghosts.forEach((g, key) => {
      if (!ghostAnimatedRef.current.has(key)) unanimated.push([key, g]);
    });
    if (unanimated.length === 0) return;
    unanimated.forEach(([key], idx) => {
      var _a2, _b2;
      ghostAnimatedRef.current.add(key);
      const timer = setTimeout(() => {
        setGhosts((prev) => {
          const next = new Map(prev);
          next.delete(key);
          return next;
        });
        ghostAnimatedRef.current.delete(key);
        ghostTimersRef.current.delete(key);
      }, duration + idx * exitStagger);
      ghostTimersRef.current.set(key, timer);
      const el = root.querySelector(`[data-trigr-key="${key}"]`);
      if (el) {
        el.getAnimations().forEach((a) => a.cancel());
        runAnimation(el, def, {
          duration,
          easing: (_b2 = (_a2 = def.options) == null ? void 0 : _a2.easing) != null ? _b2 : EASE_OUT,
          delay: idx * exitStagger,
          fill: "forwards"
        });
      }
      onItemExit == null ? void 0 : onItemExit(key);
    });
  }, [ghosts, exitAnimation, duration, exitStagger, customAnimation]);
  React.useEffect(() => {
    const scrollName = scrollAnimation != null ? scrollAnimation : animation;
    if (!hasTrigger("scroll") || !isParallaxAnimation(scrollName)) return;
    const root = rootRef.current;
    if (!root || reducedRef.current) return;
    const scrollRoot = getScrollRoot(root);
    const scrollTarget = scrollRoot != null ? scrollRoot : window;
    const previous = /* @__PURE__ */ new Map();
    let raf = 0;
    let ticking = false;
    let idleTimer = null;
    function viewport() {
      if (scrollRoot) {
        const rect = scrollRoot.getBoundingClientRect();
        return { top: rect.top, height: scrollRoot.clientHeight };
      }
      return { top: 0, height: window.innerHeight };
    }
    function children2() {
      return Array.from(root.children).filter(
        (child) => child instanceof HTMLElement && child.hasAttribute("data-trigr-key")
      );
    }
    function update() {
      ticking = false;
      if (!root) return;
      if (idleTimer) clearTimeout(idleTimer);
      const nodes = children2();
      const count = nodes.length;
      if (count === 0) return;
      const rootRect = root.getBoundingClientRect();
      const view = viewport();
      const viewCenter = view.top + view.height / 2;
      const rootCenter = rootRect.top + rootRect.height / 2;
      const rawCenterOffset = (rootCenter - viewCenter) / Math.max(view.height, 1);
      const centerOffset = Math.max(-1.25, Math.min(1.25, rawCenterOffset));
      const baseSpeed = normalizeParallaxSpeed(speed);
      const centerIndex = (count - 1) / 2;
      nodes.forEach((el, index) => {
        if (!previous.has(el)) {
          previous.set(el, {
            transform: el.style.transform,
            zIndex: el.style.zIndex,
            willChange: el.style.willChange
          });
        }
        const depth = index - centerIndex;
        const layerSpeed = baseSpeed * (44 + Math.abs(depth) * 18);
        let y = -centerOffset * layerSpeed + depth * 10;
        let x = 0;
        let scale = 1 - Math.min(0.04, Math.abs(depth) * 0.012);
        let rotateX = 0;
        let transform = "";
        if (scrollName === "parallaxFast") {
          y = -centerOffset * layerSpeed * 1.45 + depth * 12;
        }
        if (scrollName === "parallaxReverse") {
          y = centerOffset * layerSpeed + depth * 10;
        }
        if (scrollName === "tiltScroll") {
          y = -centerOffset * layerSpeed * 0.62 + depth * 8;
          rotateX = -centerOffset * (7 + Math.abs(depth) * 2);
          scale = 1 - Math.min(0.035, Math.abs(depth) * 0.01);
          transform = `perspective(720px) translate3d(0, ${y.toFixed(2)}px, 0) rotateX(${rotateX.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
        }
        if (scrollName === "scaleScroll") {
          const focus = 1 - Math.min(1, Math.abs(centerOffset));
          y = -centerOffset * layerSpeed * 0.28 + depth * 8;
          x = depth * focus * 5;
          scale = Math.min(1.12, Math.max(0.9, 0.9 + focus * (0.18 + baseSpeed * 0.08) - Math.abs(depth) * 0.01));
        }
        el.style.willChange = "transform";
        el.style.zIndex = String(index + 1);
        el.style.transform = transform || `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) scale(${scale.toFixed(3)})`;
      });
      idleTimer = setTimeout(() => {
        nodes.forEach((el) => {
          el.style.willChange = "auto";
        });
      }, 300);
    }
    function onScroll() {
      if (ticking) return;
      raf = requestAnimationFrame(update);
      ticking = true;
    }
    scrollTarget.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    return () => {
      scrollTarget.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      if (idleTimer) clearTimeout(idleTimer);
      previous.forEach((styles, el) => {
        el.style.transform = styles.transform;
        el.style.zIndex = styles.zIndex;
        el.style.willChange = styles.willChange;
      });
    };
  }, [animation, hasTrigger, scrollAnimation, speed]);
  React.useEffect(() => {
    if (hasTrigger("mount")) {
      if (isParallaxAnimation(animation)) return;
      requestRun("mount");
      return;
    }
    const scrollName = scrollAnimation != null ? scrollAnimation : animation;
    if (hasTrigger("scroll") && inView && !isParallaxAnimation(scrollName)) requestRun("scroll");
  }, [animation, hasTrigger, inView, requestRun, scrollAnimation]);
  React.useEffect(() => {
    if (!currentRun) return;
    animateCollection(currentRun.source);
  }, [animateCollection, currentRun]);
  React.useEffect(() => () => {
    ghostTimersRef.current.forEach((t) => clearTimeout(t));
    ghostTimersRef.current.clear();
    if (runTimerRef.current !== null) clearTimeout(runTimerRef.current);
    queueRef.current = [];
  }, []);
  const marquee = isMarqueeAnimation(activeAnimation);
  if (marquee) {
    const childrenArr = React__default.default.Children.toArray(children);
    const marqueeChildren = [...childrenArr, ...childrenArr];
    const reverse = activeAnimation === "marqueeReverse";
    const fadeMask = activeAnimation === "marqueeFade";
    const pxPerSec = Math.max(speed, 1);
    const travelPx = Math.max(800, childrenArr.length * 180);
    const marqueeDurationMs = Math.round(travelPx / pxPerSec * 1e3);
    return React.createElement(
      as,
      {
        ref: rootRef,
        className,
        style: {
          position: "relative",
          overflow: "hidden",
          width: "100%",
          ...fadeMask ? { maskImage: "linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)" } : null,
          ...style
        }
      },
      React.createElement("style", {
        key: "trigr-list-marquee-keyframes",
        dangerouslySetInnerHTML: {
          __html: "@keyframes trigr-list-marquee-x{from{transform:translateX(0)}to{transform:translateX(-50%)}}"
        }
      }),
      React.createElement(
        "div",
        {
          style: {
            display: "inline-flex",
            width: "max-content",
            gap: "1rem",
            whiteSpace: "nowrap",
            animation: reducedRef.current ? void 0 : `trigr-list-marquee-x ${marqueeDurationMs}ms linear infinite${reverse ? " reverse" : ""}`,
            willChange: reducedRef.current ? void 0 : "transform"
          }
        },
        marqueeChildren.map(
          (child, index) => React.createElement("div", { key: `mq-${index}`, style: { display: "inline-flex", alignItems: "center" } }, child)
        )
      )
    );
  }
  const ghostEntries = [];
  ghosts.forEach((g) => {
    ghostEntries.push(
      React.createElement("div", {
        key: `ghost-${g.key}`,
        "data-trigr-key": g.key,
        style: {
          position: "absolute",
          top: g.top,
          left: g.left,
          width: g.width,
          height: g.height,
          overflow: "visible",
          pointerEvents: "none"
        }
      }, g.element)
    );
  });
  const wrapperStyle = {
    position: "relative",
    ...style
  };
  const items = React__default.default.Children.map(children, (child) => {
    var _a2;
    if (!React__default.default.isValidElement(child)) return child;
    return React.createElement(
      "div",
      {
        key: child.key,
        "data-trigr-key": (_a2 = child.key) != null ? _a2 : "",
        style: { overflow: "visible" }
      },
      child
    );
  });
  return React.createElement(
    as,
    {
      ref: rootRef,
      className,
      style: wrapperStyle,
      onMouseOver: hasTrigger("hover") ? handleMouseOver : void 0,
      onMouseLeave: hasTrigger("hover") ? handleMouseLeave : void 0,
      onClick: hasTrigger("click") ? handleItemClick : void 0
    },
    items,
    ...ghostEntries
  );
});
var Animate = { List: AnimateList };

exports.Animate = Animate;
exports.AnimateList = AnimateList;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map