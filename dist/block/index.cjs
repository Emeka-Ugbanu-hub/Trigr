'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

// src/block/index.tsx

// src/block/animations.ts
var SPRING = "cubic-bezier(0.34, 1.56, 0.64, 1)";
var SNAPPY = "cubic-bezier(0.2, 0, 0, 1)";
var SMOOTH = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";
var presetCategory = {
  fadeIn: "oneshot",
  fadeOut: "oneshot",
  fadeSwap: "oneshot",
  slideUp: "oneshot",
  slideDown: "oneshot",
  slideLeft: "oneshot",
  slideRight: "oneshot",
  scaleIn: "oneshot",
  scaleOut: "oneshot",
  popIn: "oneshot",
  popOut: "oneshot",
  rotateIn: "oneshot",
  rotateOut: "oneshot",
  flipX: "oneshot",
  flipY: "oneshot",
  bounceIn: "oneshot",
  bounceOut: "oneshot",
  shake: "oneshot",
  wiggle: "oneshot",
  jello: "oneshot",
  flash: "oneshot",
  heartBeat: "oneshot",
  glideIn: "oneshot",
  glideOut: "oneshot",
  dropIn: "oneshot",
  riseUp: "oneshot",
  expandIn: "oneshot",
  collapseOut: "oneshot",
  expandHeight: "oneshot",
  fadeSlideUp: "oneshot",
  blurIn: "oneshot",
  blurOut: "oneshot",
  clipUp: "oneshot",
  clipLeft: "oneshot",
  zoomIn: "oneshot",
  zoomOut: "oneshot",
  press: "oneshot",
  parallax: "scrollLink",
  parallaxFast: "scrollLink",
  parallaxReverse: "scrollLink",
  tiltScroll: "scrollLink",
  scaleScroll: "scrollLink",
  lift: "hoverState",
  sink: "hoverState",
  grow: "hoverState",
  glow: "hoverState",
  shadow: "hoverState",
  borderPop: "hoverState",
  tilt: "cursorTrack",
  tilt3D: "cursorTrack",
  rotate3D: "cursorTrack",
  depth: "cursorTrack",
  float: "continuous",
  pulse: "continuous",
  spin: "continuous",
  ping: "continuous",
  shimmer: "continuous",
  ripple: "overlay",
  burst: "overlay"
};
var presets = {
  fadeIn: {
    in: [{ opacity: 0 }, { opacity: 1 }],
    out: [{ opacity: 1 }, { opacity: 0 }]
  },
  fadeOut: {
    in: [{ opacity: 0 }, { opacity: 1 }],
    out: [{ opacity: 1 }, { opacity: 0 }]
  },
  fadeSwap: {
    in: [
      { opacity: 0, transform: "translateY(10px)" },
      { opacity: 0.72, transform: "translateY(2px)", offset: 0.58 },
      { opacity: 1, transform: "translateY(0)" }
    ],
    out: [
      { opacity: 1, transform: "translateY(0)" },
      { opacity: 0, transform: "translateY(-10px)" }
    ]
  },
  slideUp: {
    in: [
      { opacity: 0, transform: "translateY(32px)" },
      { opacity: 0.76, transform: "translateY(7px)", offset: 0.62 },
      { opacity: 1, transform: "translateY(0)" }
    ],
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 0, transform: "translateY(-24px)" }]
  },
  slideDown: {
    in: [
      { opacity: 0, transform: "translateY(-32px)" },
      { opacity: 0.76, transform: "translateY(-7px)", offset: 0.62 },
      { opacity: 1, transform: "translateY(0)" }
    ],
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 0, transform: "translateY(24px)" }]
  },
  slideLeft: {
    in: [
      { opacity: 0, transform: "translateX(-32px)" },
      { opacity: 0.76, transform: "translateX(-7px)", offset: 0.62 },
      { opacity: 1, transform: "translateX(0)" }
    ],
    out: [{ opacity: 1, transform: "translateX(0)" }, { opacity: 0, transform: "translateX(-24px)" }]
  },
  slideRight: {
    in: [
      { opacity: 0, transform: "translateX(32px)" },
      { opacity: 0.76, transform: "translateX(7px)", offset: 0.62 },
      { opacity: 1, transform: "translateX(0)" }
    ],
    out: [{ opacity: 1, transform: "translateX(0)" }, { opacity: 0, transform: "translateX(24px)" }]
  },
  scaleIn: {
    in: [{ opacity: 0, transform: "scale(0.9)" }, { opacity: 1, transform: "scale(1)" }],
    out: [{ opacity: 1, transform: "scale(1)" }, { opacity: 0, transform: "scale(0.9)" }]
  },
  scaleOut: {
    in: [{ opacity: 0, transform: "scale(0.9)" }, { opacity: 1, transform: "scale(1)" }],
    out: [{ opacity: 1, transform: "scale(1)" }, { opacity: 0, transform: "scale(0.9)" }]
  },
  popIn: {
    in: [{ opacity: 0, transform: "scale(0.92)" }, { opacity: 1, transform: "scale(1.04)", offset: 0.6 }, { opacity: 1, transform: "scale(1)" }],
    out: [{ opacity: 1, transform: "scale(1)" }, { opacity: 0, transform: "scale(0.92)" }]
  },
  popOut: {
    in: [{ opacity: 0, transform: "scale(0.92)" }, { opacity: 1, transform: "scale(1)" }],
    out: [{ opacity: 1, transform: "scale(1)" }, { opacity: 0, transform: "scale(1.05)", offset: 0.45 }, { opacity: 0, transform: "scale(0.92)" }]
  },
  rotateIn: {
    in: [{ opacity: 0, transform: "rotate(-12deg) scale(0.9)" }, { opacity: 1, transform: "rotate(0deg) scale(1)" }],
    out: [{ opacity: 1, transform: "rotate(0deg) scale(1)" }, { opacity: 0, transform: "rotate(12deg) scale(0.9)" }]
  },
  rotateOut: {
    in: [{ opacity: 0, transform: "rotate(-12deg) scale(0.9)" }, { opacity: 1, transform: "rotate(0deg) scale(1)" }],
    out: [{ opacity: 1, transform: "rotate(0deg) scale(1)" }, { opacity: 0, transform: "rotate(12deg) scale(0.9)" }]
  },
  flipX: {
    in: [{ opacity: 0, transform: "perspective(600px) rotateX(-90deg)" }, { opacity: 1, transform: "perspective(600px) rotateX(0deg)" }],
    out: [{ opacity: 1, transform: "perspective(600px) rotateX(0deg)" }, { opacity: 0, transform: "perspective(600px) rotateX(90deg)" }]
  },
  flipY: {
    in: [{ opacity: 0, transform: "perspective(600px) rotateY(-90deg)" }, { opacity: 1, transform: "perspective(600px) rotateY(0deg)" }],
    out: [{ opacity: 1, transform: "perspective(600px) rotateY(0deg)" }, { opacity: 0, transform: "perspective(600px) rotateY(90deg)" }]
  },
  bounceIn: {
    in: [{ opacity: 0, transform: "scale(0.9)" }, { opacity: 1, transform: "scale(1.05)", offset: 0.55 }, { opacity: 1, transform: "scale(1)" }],
    out: [{ opacity: 1, transform: "scale(1)" }, { opacity: 0, transform: "scale(0.9)" }]
  },
  bounceOut: {
    in: [{ opacity: 0, transform: "scale(0.9)" }, { opacity: 1, transform: "scale(1.05)", offset: 0.55 }, { opacity: 1, transform: "scale(1)" }],
    out: [{ opacity: 1, transform: "scale(1)" }, { opacity: 0, transform: "scale(1.04)", offset: 0.45 }, { opacity: 0, transform: "scale(0.9)" }]
  },
  shake: {
    in: [
      { opacity: 1, transform: "translateX(0)" },
      { opacity: 1, transform: "translateX(-6px)", offset: 0.15 },
      { opacity: 1, transform: "translateX(6px)", offset: 0.3 },
      { opacity: 1, transform: "translateX(-4px)", offset: 0.45 },
      { opacity: 1, transform: "translateX(4px)", offset: 0.6 },
      { opacity: 1, transform: "translateX(-2px)", offset: 0.75 },
      { opacity: 1, transform: "translateX(2px)", offset: 0.9 },
      { opacity: 1, transform: "translateX(0)" }
    ],
    out: [{ opacity: 1, transform: "translateX(0)" }, { opacity: 0, transform: "translateX(-6px)" }]
  },
  wiggle: {
    in: [
      { opacity: 1, transform: "rotate(0deg)" },
      { opacity: 1, transform: "rotate(8deg)", offset: 0.2 },
      { opacity: 1, transform: "rotate(-6deg)", offset: 0.4 },
      { opacity: 1, transform: "rotate(4deg)", offset: 0.6 },
      { opacity: 1, transform: "rotate(-2deg)", offset: 0.8 },
      { opacity: 1, transform: "rotate(0deg)" }
    ],
    out: [{ opacity: 1, transform: "rotate(0deg)" }, { opacity: 0, transform: "rotate(8deg)" }]
  },
  jello: {
    in: [
      { opacity: 1, transform: "scale(1, 1)" },
      { opacity: 1, transform: "scale(1.06, 0.96)", offset: 0.25 },
      { opacity: 1, transform: "scale(0.97, 1.04)", offset: 0.5 },
      { opacity: 1, transform: "scale(1.02, 0.99)", offset: 0.75 },
      { opacity: 1, transform: "scale(1, 1)" }
    ],
    out: [{ opacity: 1, transform: "scale(1, 1)" }, { opacity: 0, transform: "scale(0.9, 0.9)" }]
  },
  flash: {
    in: [
      { opacity: 1 },
      { opacity: 0.72, offset: 0.28 },
      { opacity: 1, offset: 0.5 },
      { opacity: 0.78, offset: 0.78 },
      { opacity: 1 }
    ],
    out: [{ opacity: 1 }, { opacity: 0 }]
  },
  heartBeat: {
    in: [
      { opacity: 1, transform: "scale(1)" },
      { opacity: 1, transform: "scale(1.12)", offset: 0.15 },
      { opacity: 1, transform: "scale(1)", offset: 0.3 },
      { opacity: 1, transform: "scale(1.12)", offset: 0.45 },
      { opacity: 1, transform: "scale(1)", offset: 0.6 },
      { opacity: 1, transform: "scale(1.06)", offset: 0.75 },
      { opacity: 1, transform: "scale(1)" }
    ],
    out: [{ opacity: 1, transform: "scale(1)" }, { opacity: 0, transform: "scale(0.85)" }]
  },
  glideIn: {
    in: [
      { opacity: 0, transform: "translateY(24px) scale(0.97)" },
      { opacity: 0.82, transform: "translateY(5px) scale(0.995)", offset: 0.62 },
      { opacity: 1, transform: "translateY(0) scale(1)" }
    ],
    out: [{ opacity: 1, transform: "translateY(0) scale(1)" }, { opacity: 0, transform: "translateY(-18px) scale(0.97)" }]
  },
  glideOut: {
    in: [
      { opacity: 0, transform: "translateY(24px) scale(0.97)" },
      { opacity: 0.82, transform: "translateY(5px) scale(0.995)", offset: 0.62 },
      { opacity: 1, transform: "translateY(0) scale(1)" }
    ],
    out: [{ opacity: 1, transform: "translateY(0) scale(1)" }, { opacity: 0, transform: "translateY(-18px) scale(0.97)" }]
  },
  dropIn: {
    in: [{ opacity: 0, transform: "translateY(-30px)" }, { opacity: 1, transform: "translateY(3px)", offset: 0.7 }, { opacity: 1, transform: "translateY(0)" }],
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 0, transform: "translateY(-30px)" }]
  },
  riseUp: {
    in: [{ opacity: 0, transform: "translateY(30px)" }, { opacity: 1, transform: "translateY(-3px)", offset: 0.7 }, { opacity: 1, transform: "translateY(0)" }],
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 0, transform: "translateY(30px)" }]
  },
  expandIn: {
    in: [{ opacity: 0, transform: "scaleX(0.9)" }, { opacity: 1, transform: "scaleX(1)" }],
    out: [{ opacity: 1, transform: "scaleX(1)" }, { opacity: 0, transform: "scaleX(0.9)" }]
  },
  collapseOut: {
    in: [{ opacity: 0, transform: "scaleX(0.9)" }, { opacity: 1, transform: "scaleX(1)" }],
    out: [{ opacity: 1, transform: "scaleX(1)" }, { opacity: 0, transform: "scaleX(0.9)" }]
  },
  expandHeight: {
    in: [{ opacity: 0, transform: "scaleY(0.5)", transformOrigin: "top" }, { opacity: 1, transform: "scaleY(1)", transformOrigin: "top" }],
    out: [{ opacity: 1, transform: "scaleY(1)", transformOrigin: "top" }, { opacity: 0, transform: "scaleY(0.5)", transformOrigin: "top" }]
  },
  fadeSlideUp: {
    in: [{ opacity: 0, transform: "translateY(16px)" }, { opacity: 1, transform: "translateY(0)" }],
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 0, transform: "translateY(-16px)" }]
  },
  blurIn: {
    in: [{ opacity: 0, filter: "blur(4px)" }, { opacity: 1, filter: "blur(0px)" }],
    out: [{ opacity: 1, filter: "blur(0px)" }, { opacity: 0, filter: "blur(4px)" }]
  },
  blurOut: {
    in: [{ opacity: 0, filter: "blur(4px)" }, { opacity: 1, filter: "blur(0px)" }],
    out: [{ opacity: 1, filter: "blur(0px)" }, { opacity: 0, filter: "blur(4px)" }]
  },
  clipUp: {
    in: [
      { opacity: 0, transform: "translateY(10px)", clipPath: "inset(100% 0 0 0)" },
      { opacity: 1, transform: "translateY(0)", clipPath: "inset(0 0 0 0)" }
    ],
    out: [
      { opacity: 1, transform: "translateY(0)", clipPath: "inset(0 0 0 0)" },
      { opacity: 0, transform: "translateY(-8px)", clipPath: "inset(0 0 100% 0)" }
    ]
  },
  clipLeft: {
    in: [
      { opacity: 0, transform: "translateX(10px)", clipPath: "inset(0 100% 0 0)" },
      { opacity: 1, transform: "translateX(0)", clipPath: "inset(0 0 0 0)" }
    ],
    out: [
      { opacity: 1, transform: "translateX(0)", clipPath: "inset(0 0 0 0)" },
      { opacity: 0, transform: "translateX(-8px)", clipPath: "inset(0 0 0 100%)" }
    ]
  },
  zoomIn: {
    in: [{ opacity: 0, transform: "scale(0.85)" }, { opacity: 1, transform: "scale(1)" }],
    out: [{ opacity: 1, transform: "scale(1)" }, { opacity: 0, transform: "scale(0.85)" }]
  },
  zoomOut: {
    in: [{ opacity: 0, transform: "scale(1.15)" }, { opacity: 1, transform: "scale(1)" }],
    out: [{ opacity: 1, transform: "scale(1)" }, { opacity: 0, transform: "scale(1.15)" }]
  },
  press: {
    in: [{ transform: "scale(1)", opacity: 1 }, { transform: "scale(0.96)", opacity: 1 }],
    out: [{ transform: "scale(0.96)", opacity: 1 }, { transform: "scale(1)", opacity: 1 }]
  }
};
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
function Parallax({
  children,
  type = "parallax",
  strength: _strength,
  className,
  style
}) {
  const containerRef = react.useRef(null);
  const items = react.Children.toArray(children);
  const count = items.length;
  const strength = _strength != null ? _strength : type === "parallaxFast" ? 0.55 : type === "parallaxReverse" ? 0.35 : type === "tiltScroll" ? 0.3 : type === "scaleScroll" ? 0.4 : 0.3;
  react.useEffect(() => {
    var _a, _b;
    const container = containerRef.current;
    if (!container || count === 0) return;
    const mm = typeof window !== "undefined" ? (_a = window.matchMedia) == null ? void 0 : _a.call(window, "(prefers-reduced-motion: reduce)") : null;
    if (mm == null ? void 0 : mm.matches) return;
    let ticking = false;
    let scrollRoot = null;
    function measureViewport() {
      if (scrollRoot && scrollRoot instanceof HTMLElement) {
        const rect = scrollRoot.getBoundingClientRect();
        return { top: rect.top, height: scrollRoot.clientHeight };
      }
      return { top: 0, height: window.innerHeight };
    }
    function update() {
      ticking = false;
      const { top, height: viewH } = measureViewport();
      if (viewH === 0) return;
      const rect = container.getBoundingClientRect();
      const scrollY = top - rect.top;
      const progress = scrollY / viewH;
      for (let i = 0; i < count; i++) {
        const frame = container.children[i];
        const child = frame == null ? void 0 : frame.firstElementChild;
        if (!child) continue;
        const relative = Math.max(-1.4, Math.min(1.4, progress - i));
        const depth = Math.abs(relative);
        child.style.willChange = "transform";
        let transform = "";
        switch (type) {
          case "parallax":
          case "parallaxFast":
            transform = `translateY(${-relative * strength * 110}px) scale(${1 - Math.min(depth, 1) * 0.025})`;
            break;
          case "parallaxReverse":
            transform = `translateY(${relative * strength * 110}px) scale(${1 - Math.min(depth, 1) * 0.025})`;
            break;
          case "tiltScroll":
            transform = `perspective(700px) translateY(${-relative * strength * 60}px) rotateX(${-relative * strength * 14}deg)`;
            break;
          case "scaleScroll":
            {
              const focus = 1 - Math.min(depth, 1);
              const scale = Math.min(1.12, Math.max(0.9, 0.9 + focus * (0.18 + strength * 0.08)));
              child.style.transformOrigin = "center";
              transform = `translateY(${-relative * strength * 42}px) scale(${scale.toFixed(3)})`;
            }
            break;
        }
        child.style.transform = transform;
      }
    }
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }
    function onResize() {
      const { height: h } = measureViewport();
      if (container) {
        container.style.height = `${count * h}px`;
        for (let i = 0; i < count; i++) {
          const child = container.children[i];
          if (child) child.style.height = `${h}px`;
        }
      }
      onScroll();
    }
    scrollRoot = (_b = getScrollRoot(container)) != null ? _b : window;
    scrollRoot.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    onResize();
    return () => {
      const target = scrollRoot;
      if (target && typeof target.removeEventListener === "function") {
        target.removeEventListener("scroll", onScroll);
      }
      window.removeEventListener("resize", onResize);
      for (let i = 0; i < count; i++) {
        const frame = container.children[i];
        const child = frame == null ? void 0 : frame.firstElementChild;
        if (child) {
          child.style.transform = "";
          child.style.transformOrigin = "";
          child.style.willChange = "auto";
        }
      }
    };
  }, [count, type, strength]);
  if (count === 0) return null;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref: containerRef,
      className,
      style: {
        position: "relative",
        height: `calc(${count} * 100dvh)`,
        ...style
      },
      children: items.map((child, i) => /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          style: {
            position: "sticky",
            top: 0,
            height: "100dvh",
            zIndex: i + 1,
            boxSizing: "border-box",
            display: "grid",
            placeItems: "center",
            overflow: "visible"
          },
          children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "trigr-parallax-layer", children: child })
        },
        i
      ))
    }
  );
}

// src/block/index.tsx
var warned = /* @__PURE__ */ new Set();
function prefersReducedMotion() {
  var _a, _b;
  if (typeof window === "undefined") return false;
  return (_b = (_a = window.matchMedia) == null ? void 0 : _a.call(window, "(prefers-reduced-motion: reduce)").matches) != null ? _b : false;
}
function finishWillChange(el) {
  el.style.willChange = "auto";
}
function effectiveDuration(duration) {
  return prefersReducedMotion() ? duration / 2 : duration;
}
function cancelElementAnimations(el) {
  el.getAnimations({ subtree: true }).forEach((animation) => animation.cancel());
}
function getScrollRoot2(el) {
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
  const root = getScrollRoot2(el);
  const rootHeight = (_a = root == null ? void 0 : root.clientHeight) != null ? _a : window.innerHeight;
  const clamped = Math.min(0.95, Math.max(0.05, threshold));
  const inset = Math.round(rootHeight * Math.min(0.48, clamped / 2));
  return {
    root,
    rootMargin: `-${inset}px 0px -${inset}px 0px`,
    threshold: 0
  };
}
function scrollCenterOffset(el, root) {
  var _a, _b;
  const rect = el.getBoundingClientRect();
  const rootRect = root == null ? void 0 : root.getBoundingClientRect();
  const viewTop = (_a = rootRect == null ? void 0 : rootRect.top) != null ? _a : 0;
  const viewHeight = (_b = rootRect == null ? void 0 : rootRect.height) != null ? _b : window.innerHeight;
  const viewCenter = viewTop + viewHeight / 2;
  const elCenter = rect.top + rect.height / 2;
  return (elCenter - viewCenter) / Math.max(viewHeight, 1);
}
var HOVER_STATE_CSS = {
  lift: { transform: "translateY(-4px)" },
  sink: { transform: "translateY(4px)" },
  grow: { transform: "scale(1.03)" },
  glow: { filter: "brightness(1.15)" },
  shadow: { boxShadow: "0 8px 24px currentColor" },
  borderPop: { borderColor: "currentColor", borderWidth: "2px" }
};
var CONTINUOUS_KEYFRAMES = {
  pulse: {
    keyframes: [
      { transform: "scale(1)" },
      { transform: "scale(1.05)", offset: 0.5 },
      { transform: "scale(1)" }
    ],
    duration: 2e3,
    easing: SMOOTH
  },
  float: {
    keyframes: [
      { transform: "translateY(0)" },
      { transform: "translateY(-5px)", offset: 0.5 },
      { transform: "translateY(0)" }
    ],
    duration: 1500,
    easing: SMOOTH
  },
  spin: {
    keyframes: [
      { transform: "rotate(0deg)" },
      { transform: "rotate(360deg)" }
    ],
    duration: 2e3,
    easing: "linear"
  },
  ping: {
    keyframes: [
      { transform: "scale(1)", opacity: 1 },
      { transform: "scale(1.15)", opacity: 0 }
    ],
    duration: 1500,
    easing: SMOOTH
  },
  shimmer: {
    keyframes: [
      { backgroundPosition: "-200% 0" },
      { backgroundPosition: "200% 0" }
    ],
    duration: 2500,
    easing: "linear"
  }
};
function hasScale(kf) {
  return kf.some((k) => {
    const t = k.transform;
    return t ? /\bscalef?[a-zA-Z]*\(/.test(t) : false;
  });
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
function runAnimation(el, keyframes, options, onEnd) {
  el.style.willChange = "transform, opacity";
  const prevTransition = el.style.transition;
  el.style.transition = "none";
  const usesScale = hasScale(keyframes);
  const prevOrigin = el.style.transformOrigin;
  if (usesScale) el.style.transformOrigin = "center";
  applyInitialState(el, keyframes);
  const kf = prefersReducedMotion() ? keyframes.map(({ opacity }) => ({ opacity: opacity != null ? opacity : 1 })) : keyframes;
  const anim = el.animate(kf, { ...options, fill: "forwards" });
  const cleanup = () => {
    el.style.transition = prevTransition;
    if (usesScale) el.style.transformOrigin = prevOrigin;
  };
  anim.addEventListener("finish", () => {
    applyFinalState(el, keyframes);
    finishWillChange(el);
    cleanup();
    onEnd == null ? void 0 : onEnd();
  });
  anim.addEventListener("cancel", () => {
    cleanup();
  });
  return anim;
}
function setStyles(el, styles) {
  for (const key in styles) {
    el.style[key] = styles[key];
  }
}
function clearStyles(el, styles) {
  for (const key in styles) {
    el.style[key] = "";
  }
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
function spawnOverlay(el, preset, x, y) {
  const rect = el.getBoundingClientRect();
  const px = x - rect.left;
  const py = y - rect.top;
  const prevPosition = el.style.position;
  const prevOverflow = el.style.overflow;
  el.style.position = "relative";
  el.style.overflow = "hidden";
  const overlayColor = getComputedStyle(el).getPropertyValue("--trigr-overlay-color") || "currentColor";
  let pending = 0;
  function done() {
    pending -= 1;
    if (pending <= 0) {
      el.style.position = prevPosition;
      el.style.overflow = prevOverflow;
    }
  }
  if (preset === "ripple") {
    pending = 1;
    const size = Math.max(rect.width, rect.height) * 2.5;
    const dot = document.createElement("span");
    dot.style.cssText = `
      position: absolute; left: ${px}px; top: ${py}px; width: 0; height: 0;
      border-radius: 50%; background: ${overlayColor};
      transform: translate(-50%, -50%); pointer-events: none;
      opacity: 1;
    `;
    el.appendChild(dot);
    dot.animate(
      [{ width: "0", height: "0", opacity: 1 }, { width: `${size}px`, height: `${size}px`, opacity: 0 }],
      { duration: 400, easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", fill: "forwards" }
    ).onfinish = () => {
      dot.remove();
      done();
    };
  }
  if (preset === "burst") {
    pending = 8;
    for (let i = 0; i < 8; i++) {
      const angle = Math.PI * 2 * i / 8;
      const particle = document.createElement("span");
      particle.style.cssText = `
        position: absolute; left: ${px}px; top: ${py}px; width: 6px; height: 6px;
        border-radius: 50%; background: ${overlayColor};
        pointer-events: none; transform: translate(-50%, -50%);
      `;
      el.appendChild(particle);
      const dx = Math.cos(angle) * 60;
      const dy = Math.sin(angle) * 60;
      particle.animate(
        [
          { transform: "translate(-50%, -50%) scale(1)", opacity: 1 },
          { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0)`, opacity: 0 }
        ],
        { duration: 360, easing: "cubic-bezier(0.4, 0.0, 1, 1)", fill: "forwards" }
      ).onfinish = () => {
        particle.remove();
        done();
      };
    }
  }
}
var AnimateBlock = react.forwardRef(function AnimateBlock2({
  value,
  trigger = "change",
  animation: baseAnimation,
  scrollAnimation,
  properties,
  exitAnimation,
  show,
  unmountOnExit = true,
  duration = 400,
  easing = SPRING,
  delay = 0,
  speed = 0.5,
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
  var _a, _b, _c, _d, _e;
  const ref = react.useRef(null);
  const animRef = react.useRef(null);
  const propertyAnimRef = react.useRef(null);
  const rafRef = react.useRef(null);
  const runTimerRef = react.useRef(null);
  const prevValueRef = react.useRef(value);
  const hoverApplied = react.useRef(false);
  const runningRef = react.useRef(false);
  const queueRef = react.useRef([]);
  const runIdRef = react.useRef(0);
  const [currentRun, setCurrentRun] = react.useState(null);
  const [phase, setPhase] = react.useState(
    show !== false ? "entered" : "exited"
  );
  const exitAnimRef = react.useRef(null);
  const exitKeyRef = react.useRef(0);
  const mountPlayedRef = react.useRef(false);
  const scrollTriggeredRef = react.useRef(false);
  const shouldObserveOnce = once != null ? once : !repeat;
  const triggers = react.useMemo(
    () => Array.isArray(trigger) ? trigger.slice(0, 2) : [trigger],
    [trigger]
  );
  const hasTrigger = react.useCallback((source) => triggers.includes(source), [triggers]);
  const activeTrigger = (_b = (_a = currentRun == null ? void 0 : currentRun.source) != null ? _a : triggers[0]) != null ? _b : "change";
  const animation = activeTrigger === "scroll" && scrollAnimation ? scrollAnimation : baseAnimation;
  const cat = (_c = presetCategory[animation]) != null ? _c : "oneshot";
  const getAnimationFor = react.useCallback(
    (source) => source === "scroll" && scrollAnimation ? scrollAnimation : baseAnimation,
    [baseAnimation, scrollAnimation]
  );
  const finishRun = react.useCallback(() => {
    if (runTimerRef.current !== null) {
      clearTimeout(runTimerRef.current);
      runTimerRef.current = null;
    }
    runningRef.current = false;
    onAnimationEndProp == null ? void 0 : onAnimationEndProp();
    const next = queueRef.current.shift();
    if (next) {
      runningRef.current = true;
      setCurrentRun({ id: ++runIdRef.current, source: next });
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
  }, []);
  const play = react.useCallback((source = activeTrigger, presetName) => {
    var _a2;
    const el = ref.current;
    if (!el) {
      finishRun();
      return;
    }
    const name = presetName != null ? presetName : getAnimationFor(source);
    cancelElementAnimations(el);
    animRef.current = null;
    propertyAnimRef.current = null;
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    if (runTimerRef.current !== null) {
      clearTimeout(runTimerRef.current);
      runTimerRef.current = null;
    }
    const motionDuration = effectiveDuration(duration);
    const category = (_a2 = presetCategory[name]) != null ? _a2 : "oneshot";
    propertyAnimRef.current = runPropertyAnimation(el, properties, {
      duration: motionDuration,
      easing,
      delay
    });
    const savedHoverStyles = {};
    if (hoverApplied.current) {
      const hoverStyleDef = HOVER_STATE_CSS[name];
      if (hoverStyleDef) {
        for (const key in hoverStyleDef) {
          savedHoverStyles[key] = el.style[key];
          el.style[key] = "";
        }
      }
    }
    function restoreHover() {
      if (hoverApplied.current) {
        for (const key in savedHoverStyles) {
          el.style[key] = savedHoverStyles[key];
        }
      }
    }
    if (category === "overlay" || category === "hoverState" || category === "cursorTrack") {
      finishRun();
      return;
    }
    if (category === "continuous") {
      const cfg = CONTINUOUS_KEYFRAMES[name];
      if (!cfg || prefersReducedMotion()) {
        finishRun();
        return;
      }
      const loopDuration = Math.max(360, cfg.duration);
      animRef.current = runAnimation(
        el,
        cfg.keyframes,
        { duration: loopDuration, easing: cfg.easing, delay, iterations: 1, fill: "forwards" },
        finishRun
      );
      if (Object.keys(savedHoverStyles).length) {
        animRef.current.addEventListener("finish", restoreHover, { once: true });
        animRef.current.addEventListener("cancel", restoreHover, { once: true });
      }
      runTimerRef.current = setTimeout(finishRun, loopDuration + delay + 80);
      return;
    }
    const def = presets[name];
    if (!def) {
      if (!warned.has(name)) {
        warned.add(name);
        if (process.env.NODE_ENV === "development") {
          console.warn(`[trigr] Unknown block animation preset "${name}". Expected one of: ${Object.keys(presets).join(", ")}`);
        }
      }
      finishRun();
      return;
    }
    const animationEasing = name === "press" ? SNAPPY : easing;
    runTimerRef.current = setTimeout(finishRun, Math.max(500, motionDuration + delay + 300));
    animRef.current = runAnimation(el, def.in, { duration: motionDuration, easing: animationEasing, delay }, finishRun);
    if (Object.keys(savedHoverStyles).length) {
      animRef.current.addEventListener("finish", restoreHover, { once: true });
      animRef.current.addEventListener("cancel", restoreHover, { once: true });
    }
    if (name === "press") {
      animRef.current.addEventListener("finish", () => {
        el.animate([{ transform: "scale(1)" }, { transform: "scale(1)" }], { duration: 80, fill: "forwards" });
      }, { once: true });
    }
  }, [activeTrigger, delay, duration, easing, finishRun, getAnimationFor, properties]);
  const animate = react.useCallback(() => {
    requestRun("manual");
  }, [requestRun]);
  react.useImperativeHandle(forwardedRef, () => ({
    animate,
    get element() {
      return ref.current;
    }
  }), [animate]);
  react.useEffect(() => {
    var _a2;
    const scrollName = getAnimationFor("scroll");
    const scrollCat = (_a2 = presetCategory[scrollName]) != null ? _a2 : "oneshot";
    if (!hasTrigger("scroll") || scrollCat !== "oneshot") return;
    const el = ref.current;
    if (!el) return;
    scrollTriggeredRef.current = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          scrollTriggeredRef.current = false;
          if (repeat) onExit == null ? void 0 : onExit();
          return;
        }
        if (scrollTriggeredRef.current) return;
        scrollTriggeredRef.current = true;
        onEnter == null ? void 0 : onEnter();
        requestRun("scroll");
        if (shouldObserveOnce) observer.disconnect();
      },
      scrollObserverOptions(el, threshold)
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [getAnimationFor, hasTrigger, onEnter, onExit, repeat, requestRun, shouldObserveOnce, threshold]);
  react.useEffect(() => {
    const previous = prevValueRef.current;
    if (!hasTrigger("change") || cat !== "oneshot") {
      prevValueRef.current = value;
      return;
    }
    prevValueRef.current = value;
    if (previous === void 0 || Object.is(previous, value) || !ref.current) return;
    requestRun("change");
  }, [cat, hasTrigger, value, requestRun]);
  react.useEffect(() => {
    if (cat !== "continuous" || hasTrigger("hover") || hasTrigger("click") || hasTrigger("manual") || hasTrigger("mount")) return;
    const el = ref.current;
    if (!el) return;
    const cfg = CONTINUOUS_KEYFRAMES[animation];
    if (!cfg || prefersReducedMotion()) return;
    if (animation === "shimmer") {
      const color = getComputedStyle(el).color;
      el.style.background = `linear-gradient(90deg, transparent 0%, ${color}33 50%, transparent 100%)`;
      el.style.backgroundSize = "200% 100%";
    }
    el.style.willChange = "transform, opacity";
    animRef.current = el.animate(cfg.keyframes, {
      duration: cfg.duration,
      iterations: Infinity,
      easing: cfg.easing
    });
    animRef.current.addEventListener("cancel", () => finishWillChange(el));
    return () => {
      if (animRef.current) {
        animRef.current.cancel();
        animRef.current = null;
      }
      if (animation === "shimmer") {
        el.style.background = "";
        el.style.backgroundSize = "";
      }
    };
  }, [animation, cat, hasTrigger]);
  react.useEffect(() => {
    if (!hasTrigger("mount")) return;
    if (phase !== "entered") return;
    if (mountPlayedRef.current) return;
    const isShown = show != null ? show : true;
    if (!isShown) return;
    mountPlayedRef.current = true;
    const el = ref.current;
    if (!el) return;
    if (cat === "continuous") {
      const cfg = CONTINUOUS_KEYFRAMES[animation];
      if (!cfg || prefersReducedMotion()) return;
      el.style.willChange = "transform, opacity";
      animRef.current = el.animate(cfg.keyframes, {
        duration: cfg.duration,
        iterations: Infinity,
        easing: cfg.easing
      });
      animRef.current.addEventListener("cancel", () => finishWillChange(el));
      return () => {
        var _a2;
        (_a2 = animRef.current) == null ? void 0 : _a2.cancel();
        animRef.current = null;
      };
    }
    if (cat === "oneshot") {
      const motionDuration = effectiveDuration(duration);
      const def = presets[animation];
      if (!def) return;
      propertyAnimRef.current = runPropertyAnimation(el, properties, {
        duration: motionDuration,
        easing,
        delay
      });
      runTimerRef.current = setTimeout(finishRun, Math.max(600, motionDuration + delay + 300));
      animRef.current = runAnimation(el, def.in, { duration: motionDuration, easing, delay }, finishRun);
    }
  }, [hasTrigger, phase, show, animation, cat, duration, easing, delay, finishRun, properties]);
  react.useEffect(() => {
    if (phase === "exiting" || phase === "exited") {
      mountPlayedRef.current = false;
    }
  }, [phase]);
  react.useLayoutEffect(() => {
    if (!currentRun) return;
    play(currentRun.source);
  }, [currentRun, play]);
  react.useEffect(() => {
    var _a2, _b2, _c2;
    if (show === void 0) return;
    if (show) {
      (_a2 = exitAnimRef.current) == null ? void 0 : _a2.cancel();
      exitAnimRef.current = null;
      setPhase("entered");
      return;
    }
    const key = ++exitKeyRef.current;
    if (!exitAnimation) {
      setPhase("exited");
      return;
    }
    const el = ref.current;
    if (!el) {
      setPhase("exited");
      return;
    }
    (_b2 = animRef.current) == null ? void 0 : _b2.cancel();
    const motionDuration = effectiveDuration(duration);
    const exitCat = (_c2 = presetCategory[exitAnimation]) != null ? _c2 : "oneshot";
    const onExitEnd = () => {
      if (exitKeyRef.current === key) {
        setPhase("exited");
        exitAnimRef.current = null;
      }
    };
    setPhase("exiting");
    if (exitCat === "continuous") {
      const cfg = CONTINUOUS_KEYFRAMES[exitAnimation];
      if (cfg && !prefersReducedMotion()) {
        exitAnimRef.current = runAnimation(el, cfg.keyframes, {
          duration: motionDuration || cfg.duration,
          easing: cfg.easing,
          fill: "forwards"
        }, onExitEnd);
      } else {
        setPhase("exited");
      }
    } else {
      const def = presets[exitAnimation];
      if (!def) {
        if (process.env.NODE_ENV === "development") {
          if (!warned.has(`exit:${exitAnimation}`)) {
            warned.add(`exit:${exitAnimation}`);
            console.warn(`[trigr] Unknown exit animation preset "${exitAnimation}". Expected one of: ${Object.keys(presets).join(", ")}`);
          }
        }
        setPhase("exited");
        return;
      }
      exitAnimRef.current = runAnimation(el, def.out, {
        duration: motionDuration,
        easing,
        fill: "forwards"
      }, onExitEnd);
    }
    return () => {
      var _a3;
      if (exitKeyRef.current === key) {
        (_a3 = exitAnimRef.current) == null ? void 0 : _a3.cancel();
        exitAnimRef.current = null;
      }
    };
  }, [show, exitAnimation, duration, easing]);
  react.useEffect(() => {
    var _a2;
    const hoverName = getAnimationFor("hover");
    const hoverCat = (_a2 = presetCategory[hoverName]) != null ? _a2 : "oneshot";
    if (hoverCat !== "cursorTrack" || !hasTrigger("hover")) return;
    const el = ref.current;
    if (!el) return;
    const previousTransform = el.style.transform;
    const previousTransition = el.style.transition;
    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      switch (hoverName) {
        case "tilt":
          el.style.transform = `perspective(400px) rotateY(${x * 12}deg) rotateX(${-y * 8}deg)`;
          break;
        case "tilt3D":
          el.style.transform = `perspective(600px) rotateY(${x * 20}deg) rotateX(${-y * 15}deg) rotateZ(${x * y * 5}deg)`;
          break;
        case "rotate3D":
          el.style.transform = `perspective(800px) rotateX(${-y * 30}deg) rotateY(${x * 30}deg)`;
          break;
        case "depth":
          el.style.transform = `perspective(600px) translateZ(${(1 - Math.abs(x) - Math.abs(y)) * 40}px)`;
          break;
      }
      el.style.transition = "none";
    }
    function onLeave() {
      if (!el) return;
      el.style.transition = `transform 220ms ${SMOOTH}`;
      el.style.transform = previousTransform;
    }
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.style.transform = previousTransform;
      el.style.transition = previousTransition;
    };
  }, [getAnimationFor, hasTrigger]);
  react.useEffect(() => {
    var _a2;
    const scrollName = getAnimationFor("scroll");
    const scrollCat = (_a2 = presetCategory[scrollName]) != null ? _a2 : "oneshot";
    if (scrollCat !== "scrollLink" || !hasTrigger("scroll")) return;
    const el = ref.current;
    if (!el) return;
    const previousTransform = el.style.transform;
    const previousTransformOrigin = el.style.transformOrigin;
    const root = getScrollRoot2(el);
    const scrollTarget = root != null ? root : window;
    let ticking = false;
    let idleTimer;
    function clearIdleTimer() {
      clearTimeout(idleTimer);
    }
    function resetWillChange() {
      if (el) finishWillChange(el);
    }
    function onScroll() {
      if (!ticking) {
        rafRef.current = requestAnimationFrame(update);
        ticking = true;
      }
    }
    function update() {
      ticking = false;
      if (!el) return;
      clearIdleTimer();
      el.style.willChange = "transform";
      idleTimer = setTimeout(resetWillChange, 300);
      const offset = Math.max(-1.25, Math.min(1.25, scrollCenterOffset(el, root)));
      const intensity = Number.isFinite(speed) ? Math.min(1.5, Math.max(0.05, speed)) : 0.5;
      const distance = 80 * intensity;
      switch (scrollName) {
        case "parallax":
          el.style.transform = `translateY(${offset * distance}px)`;
          break;
        case "parallaxFast":
          el.style.transform = `translateY(${offset * distance * 1.45}px)`;
          break;
        case "parallaxReverse":
          el.style.transform = `translateY(${-offset * distance}px)`;
          break;
        case "tiltScroll":
          el.style.transform = `perspective(400px) rotateX(${-offset * 30 * intensity}deg)`;
          break;
        case "scaleScroll":
          {
            const focus = 1 - Math.min(1, Math.abs(offset));
            const scale = Math.min(1.12, Math.max(0.9, 0.9 + focus * (0.18 + intensity * 0.08)));
            el.style.transformOrigin = "center";
            el.style.transform = `scale(${scale.toFixed(3)})`;
          }
          break;
      }
    }
    scrollTarget.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    return () => {
      scrollTarget.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearIdleTimer();
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      finishWillChange(el);
      el.style.transform = previousTransform;
      el.style.transformOrigin = previousTransformOrigin;
    };
  }, [getAnimationFor, hasTrigger, speed]);
  const handleClick = react.useCallback((event) => {
    var _a2;
    onClick == null ? void 0 : onClick(event);
    const el = ref.current;
    if (!el) return;
    const clickAnimation = getAnimationFor("click");
    const c = (_a2 = presetCategory[clickAnimation]) != null ? _a2 : "oneshot";
    if (c === "overlay") {
      spawnOverlay(el, clickAnimation, event.clientX, event.clientY);
    }
    if (hasTrigger("click") && c === "continuous") {
      requestRun("click");
    }
    if (hasTrigger("click") && c === "oneshot") {
      requestRun("click");
    }
  }, [getAnimationFor, hasTrigger, onClick, requestRun]);
  const handleMouseEnter = react.useCallback(() => {
    var _a2, _b2;
    onHoverStart == null ? void 0 : onHoverStart();
    const el = ref.current;
    if (!el) return;
    const hoverAnimation = getAnimationFor("hover");
    const c = (_a2 = presetCategory[hoverAnimation]) != null ? _a2 : "oneshot";
    if (c === "hoverState") {
      const styles = HOVER_STATE_CSS[hoverAnimation];
      if (styles && !prefersReducedMotion()) {
        const transitionDuration = `${effectiveDuration(duration)}ms`;
        el.style.transition = `transform ${transitionDuration} ${easing}, filter ${transitionDuration} ${easing}, box-shadow ${transitionDuration} ${easing}, border-color ${transitionDuration} ${easing}, border-width ${transitionDuration} ${easing}`;
        setStyles(el, styles);
        hoverApplied.current = true;
      }
    }
    if (hasTrigger("hover") && c === "continuous") {
      const cfg = CONTINUOUS_KEYFRAMES[hoverAnimation];
      if (cfg && !prefersReducedMotion()) {
        (_b2 = animRef.current) == null ? void 0 : _b2.cancel();
        el.style.willChange = "transform, opacity";
        animRef.current = el.animate(cfg.keyframes, {
          duration: cfg.duration,
          iterations: Infinity,
          easing: cfg.easing
        });
        animRef.current.addEventListener("cancel", () => finishWillChange(el));
      }
    }
    if (hasTrigger("hover") && c === "oneshot") {
      requestRun("hover");
    }
  }, [getAnimationFor, hasTrigger, onHoverStart, requestRun, duration, easing]);
  const handleMouseLeave = react.useCallback(() => {
    var _a2;
    onHoverEnd == null ? void 0 : onHoverEnd();
    const el = ref.current;
    if (!el) return;
    const hoverAnimation = getAnimationFor("hover");
    const c = (_a2 = presetCategory[hoverAnimation]) != null ? _a2 : "oneshot";
    if (c === "hoverState") {
      const styles = HOVER_STATE_CSS[hoverAnimation];
      if (styles) {
        const transitionDuration = `${effectiveDuration(duration)}ms`;
        el.style.transition = `transform ${transitionDuration} ${easing}, filter ${transitionDuration} ${easing}, box-shadow ${transitionDuration} ${easing}, border-color ${transitionDuration} ${easing}, border-width ${transitionDuration} ${easing}`;
        clearStyles(el, styles);
        hoverApplied.current = false;
      }
    }
    if (hasTrigger("hover") && c === "continuous" && animRef.current) {
      animRef.current.cancel();
      animRef.current = null;
      finishWillChange(el);
    }
  }, [getAnimationFor, onHoverEnd, duration, easing, hasTrigger]);
  react.useEffect(() => {
    return () => {
      var _a2, _b2, _c2;
      (_a2 = animRef.current) == null ? void 0 : _a2.cancel();
      (_b2 = propertyAnimRef.current) == null ? void 0 : _b2.cancel();
      (_c2 = exitAnimRef.current) == null ? void 0 : _c2.cancel();
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      if (runTimerRef.current !== null) clearTimeout(runTimerRef.current);
      queueRef.current = [];
      if (hoverApplied.current && ref.current) {
        const styles = HOVER_STATE_CSS[animation];
        if (styles) clearStyles(ref.current, styles);
      }
    };
  }, []);
  if (phase === "exited" && unmountOnExit !== false) {
    return null;
  }
  const clickCategory = (_d = presetCategory[getAnimationFor("click")]) != null ? _d : "oneshot";
  const hoverCategory = (_e = presetCategory[getAnimationFor("hover")]) != null ? _e : "oneshot";
  return react.createElement(
    as,
    {
      ref,
      className,
      style: phase === "exited" ? { ...style, visibility: "hidden", pointerEvents: "none" } : style,
      onClick: hasTrigger("click") || onClick || clickCategory === "overlay" ? handleClick : void 0,
      onMouseEnter: hasTrigger("hover") || onHoverStart || hoverCategory === "hoverState" ? handleMouseEnter : void 0,
      onMouseLeave: onHoverEnd || hoverCategory === "hoverState" ? handleMouseLeave : void 0
    },
    children
  );
});
var Animate = { Block: AnimateBlock, Parallax };
var block_default = Animate;

exports.Animate = Animate;
exports.AnimateBlock = AnimateBlock;
exports.Parallax = Parallax;
exports.default = block_default;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map