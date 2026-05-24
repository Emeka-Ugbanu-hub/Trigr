import type { ListAnimationPreset, AnimationDefinition } from "./types"

export const EASE_IN = "cubic-bezier(0.0, 0.0, 0.2, 1)"
export const EASE_OUT = "cubic-bezier(0.4, 0.0, 1, 1)"
export const EASE_IN_OUT = "cubic-bezier(0.4, 0.0, 0.2, 1)"
export const SPRING = "cubic-bezier(0.34, 1.56, 0.64, 1)"
export const SNAPPY = "cubic-bezier(0.2, 0, 0, 1)"
export const SMOOTH = "cubic-bezier(0.22, 1, 0.36, 1)"

const SPRING_EASE = SPRING
const SMOOTH_EASE = SMOOTH
const SNAPPY_EASE = SNAPPY

export const enterPresets: Record<string, AnimationDefinition> = {
  staggerFadeIn: {
    keyframes: [{ opacity: 0, transform: "translateY(10px)", filter: "blur(2px)" }, { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" }],
    options: { duration: 320, easing: SPRING_EASE },
  },
  staggerSlideUp: {
    keyframes: [{ transform: "translateY(18px)", opacity: 0, filter: "blur(2.5px)" }, { transform: "translateY(0)", opacity: 1, filter: "blur(0px)" }],
    options: { duration: 340, easing: SPRING_EASE },
  },
  staggerSlideLeft: {
    keyframes: [{ transform: "translateX(24px)", opacity: 0, filter: "blur(2.5px)" }, { transform: "translateX(0)", opacity: 1, filter: "blur(0px)" }],
    options: { duration: 340, easing: SPRING_EASE },
  },
  staggerZoomIn: {
    keyframes: [{ transform: "scale(0.86)", opacity: 0, filter: "blur(2px)" }, { transform: "scale(1)", opacity: 1, filter: "blur(0px)" }],
    options: { duration: 360, easing: SPRING_EASE },
  },
  staggerPopIn: {
    keyframes: [
      { transform: "scale(0.86)", opacity: 0, filter: "blur(2px)" },
      { transform: "scale(1.05)", opacity: 1, filter: "blur(0px)", offset: 0.48 },
      { transform: "scale(0.98)", opacity: 1, filter: "blur(0px)", offset: 0.72 },
      { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
    ],
    options: { duration: 380, easing: SPRING_EASE },
  },
  stackIn: {
    keyframes: [{ transform: "translateY(28px) scale(0.92)", opacity: 0, filter: "blur(3px)" }, { transform: "translateY(0) scale(1)", opacity: 1, filter: "blur(0px)" }],
    options: { duration: 400, easing: SMOOTH_EASE },
  },
  wordCascade: {
    keyframes: [{ transform: "translateY(14px)", opacity: 0, filter: "blur(2px)" }, { transform: "translateY(0)", opacity: 1, filter: "blur(0px)" }],
    options: { duration: 300, easing: SMOOTH_EASE },
  },
  wordWave: {
    keyframes: [
      { transform: "translateY(0)", opacity: 0, filter: "blur(0px)" },
      { transform: "translateY(-12px)", opacity: 1, filter: "blur(0px)", offset: 0.4 },
      { transform: "translateY(0)", opacity: 1, filter: "blur(0px)" },
    ],
    options: { duration: 400, easing: SMOOTH_EASE },
  },
  wordDrop: {
    keyframes: [{ transform: "translateY(-22px)", opacity: 0, filter: "blur(3px)" }, { transform: "translateY(0)", opacity: 1, filter: "blur(0px)" }],
    options: { duration: 360, easing: SMOOTH_EASE },
  },
  wordFadeIn: {
    keyframes: [{ opacity: 0, filter: "blur(2px)" }, { opacity: 1, filter: "blur(0px)" }],
    options: { duration: 280, easing: SMOOTH_EASE },
  },

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
  itemFadeIn: { keyframes: [{ opacity: 0, filter: "blur(2px)" }, { opacity: 1, filter: "blur(0px)" }], options: { duration: 250, easing: SPRING_EASE } },
  itemSlideIn: {
    keyframes: [{ transform: "translateY(14px)", opacity: 0, filter: "blur(2px)" }, { transform: "translateY(0)", opacity: 1, filter: "blur(0px)" }],
    options: { duration: 280, easing: SPRING_EASE },
  },
  itemPopIn: {
    keyframes: [{ transform: "scale(0.88)", opacity: 0, filter: "blur(2px)" }, { transform: "scale(1.04)", opacity: 1, filter: "blur(0px)", offset: 0.6 }, { transform: "scale(1)", opacity: 1, filter: "blur(0px)" }],
    options: { duration: 280, easing: SNAPPY_EASE },
  },
  itemBounceIn: {
    keyframes: [
      { transform: "scale(0.86)", opacity: 0, filter: "blur(2px)" },
      { transform: "scale(1.08)", opacity: 1, filter: "blur(0px)", offset: 0.46 },
      { transform: "scale(0.97)", opacity: 1, filter: "blur(0px)", offset: 0.72 },
      { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
    ],
    options: { duration: 350, easing: SPRING_EASE },
  },
  itemFadeOut: { keyframes: [{ opacity: 1, filter: "blur(0px)" }, { opacity: 0, filter: "blur(2px)" }], options: { duration: 200, easing: EASE_OUT } },
  itemSlideOut: {
    keyframes: [{ transform: "translateY(0)", opacity: 1, filter: "blur(0px)" }, { transform: "translateY(-16px)", opacity: 0, filter: "blur(2px)" }],
    options: { duration: 230, easing: EASE_OUT },
  },
  itemCollapseOut: {
    keyframes: [{ transform: "scaleY(1)", opacity: 1, filter: "blur(0px)" }, { transform: "scaleY(0)", opacity: 0, filter: "blur(2px)" }],
    options: { duration: 250, easing: EASE_OUT },
  },

  // ── Reorder tokens (handled by runtime) ──
  flip: { keyframes: [] },
  smooth: { keyframes: [] },
  spring: { keyframes: [] },
  none: { keyframes: [] },
}

// Distinct legacy aliases (not references — each has its own identity)
const extended: Record<string, AnimationDefinition> = {
  fadeIn:      { keyframes: [{ opacity: 0, transform: "translateY(8px)", filter: "blur(2.5px)" }, { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" }], options: { duration: 320, easing: SMOOTH_EASE } },
  slideIn:     { keyframes: [{ transform: "translateY(24px)", opacity: 0, filter: "blur(3px)" }, { transform: "translateY(0)", opacity: 1, filter: "blur(0px)" }], options: { duration: 350, easing: SMOOTH_EASE } },
  slideInLeft: { keyframes: [{ transform: "translateX(-24px)", opacity: 0, filter: "blur(2.5px)" }, { transform: "translateX(0)", opacity: 1, filter: "blur(0px)" }], options: { duration: 330, easing: SPRING_EASE } },
  slideInRight:{ keyframes: [{ transform: "translateX(24px)", opacity: 0, filter: "blur(2.5px)" }, { transform: "translateX(0)", opacity: 1, filter: "blur(0px)" }], options: { duration: 330, easing: SPRING_EASE } },
  popIn: { keyframes: [{ transform: "scale(0.88)", opacity: 0, filter: "blur(2px)" }, { transform: "scale(1.06)", opacity: 1, filter: "blur(0px)", offset: 0.52 }, { transform: "scale(0.98)", opacity: 1, filter: "blur(0px)", offset: 0.76 }, { transform: "scale(1)", opacity: 1, filter: "blur(0px)" }], options: { duration: 360, easing: SPRING_EASE } },
  bounceIn: { keyframes: [{ transform: "translateY(14px) scale(0.88)", opacity: 0, filter: "blur(2px)" }, { transform: "translateY(-6px) scale(1.08)", opacity: 1, filter: "blur(0px)", offset: 0.42 }, { transform: "translateY(2px) scale(0.99)", opacity: 1, filter: "blur(0px)", offset: 0.68 }, { transform: "translateY(0) scale(1)", opacity: 1, filter: "blur(0px)" }], options: { duration: 380, easing: SPRING_EASE } },
  expandIn:   { keyframes: [{ transform: "scaleY(0.82)", opacity: 0, filter: "blur(2px)" }, { transform: "scaleY(1)", opacity: 1, filter: "blur(0px)" }], options: { duration: 330, easing: SPRING_EASE } },
  flipIn: { keyframes: [{ transform: "perspective(800px) rotateX(-80deg)", opacity: 0, filter: "blur(3px)" }, { transform: "perspective(800px) rotateX(4deg)", opacity: 1, filter: "blur(0px)", offset: 0.72 }, { transform: "perspective(800px) rotateX(0deg)", opacity: 1, filter: "blur(0px)" }], options: { duration: 420, easing: SMOOTH_EASE } },
  glideIn:    { keyframes: [{ transform: "translateX(-14px)", opacity: 0, filter: "blur(2px)" }, { transform: "translateX(0)", opacity: 1, filter: "blur(0px)" }], options: { duration: 300, easing: SMOOTH_EASE } },
  fadeOut:      { keyframes: [{ opacity: 1, filter: "blur(0px)" }, { opacity: 0, filter: "blur(2px)" }], options: { duration: 200, easing: EASE_OUT } },
  slideOut:     { keyframes: [{ transform: "translateY(0)", opacity: 1, filter: "blur(0px)" }, { transform: "translateY(24px)", opacity: 0, filter: "blur(2.5px)" }], options: { duration: 230, easing: EASE_OUT } },
  slideOutLeft: { keyframes: [{ transform: "translateX(0)", opacity: 1, filter: "blur(0px)" }, { transform: "translateX(-24px)", opacity: 0, filter: "blur(2.5px)" }], options: { duration: 230, easing: EASE_OUT } },
  slideOutRight:{ keyframes: [{ transform: "translateX(0)", opacity: 1, filter: "blur(0px)" }, { transform: "translateX(24px)", opacity: 0, filter: "blur(2.5px)" }], options: { duration: 230, easing: EASE_OUT } },
  popOut: { keyframes: [{ transform: "scale(1)", opacity: 1, filter: "blur(0px)" }, { transform: "scale(1.04)", opacity: 1, filter: "blur(0px)", offset: 0.28 }, { transform: "scale(0.88)", opacity: 0, filter: "blur(2px)" }], options: { duration: 230, easing: EASE_OUT } },
  bounceOut: { keyframes: [{ transform: "scale(1)", opacity: 1, filter: "blur(0px)" }, { transform: "translateY(-4px) scale(1.06)", opacity: 1, filter: "blur(0px)", offset: 0.3 }, { transform: "translateY(0) scale(0.88)", opacity: 0, filter: "blur(2px)" }], options: { duration: 260, easing: EASE_OUT } },
  collapseOut: { keyframes: [{ transform: "scaleY(1)", opacity: 1, filter: "blur(0px)" }, { transform: "scaleY(0)", opacity: 0, filter: "blur(2px)" }], options: { duration: 250, easing: EASE_OUT } },
  flipOut: { keyframes: [{ transform: "perspective(800px) rotateX(0deg)", opacity: 1, filter: "blur(0px)" }, { transform: "perspective(800px) rotateX(80deg)", opacity: 0, filter: "blur(3px)" }], options: { duration: 270, easing: EASE_OUT } },
  glideOut: { keyframes: [{ transform: "translateX(0)", opacity: 1, filter: "blur(0px)" }, { transform: "translateX(-14px)", opacity: 0, filter: "blur(2px)" }], options: { duration: 220, easing: EASE_OUT } },

  staggerBlurIn: {
    keyframes: [
      { filter: 'blur(4px)', opacity: 0 },
      { filter: 'blur(0px)', opacity: 1 },
    ],
    options: { duration: 400, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' },
  },
  feedAppend: {
    keyframes: [
      { transform: 'translateY(20px)', opacity: 0, filter: 'blur(2.5px)' },
      { transform: 'translateY(0)', opacity: 1, filter: 'blur(0px)' },
    ],
    options: { duration: 380, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)', fill: 'forwards' },
  },
  filterIn: {
    keyframes: [
      { transform: 'scale(0.82)', opacity: 0, filter: 'blur(2px)' },
      { transform: 'scale(1.04)', opacity: 1, filter: 'blur(0px)', offset: 0.58 },
      { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
    ],
    options: { duration: 340, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)', fill: 'forwards' },
  },
  emptyToList: {
    keyframes: [
      { transform: 'translateY(12px)', opacity: 0, filter: 'blur(2px)' },
      { transform: 'translateY(0)', opacity: 1, filter: 'blur(0px)' },
    ],
    options: { duration: 450, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' },
  },
  selectionPulse: {
    keyframes: [
      { boxShadow: '0 0 0 0 rgba(99, 102, 241, 0.4)', transform: 'scale(1)' },
      { boxShadow: '0 0 0 6px rgba(99, 102, 241, 0)', transform: 'scale(1.02)', offset: 0.5 },
      { boxShadow: '0 0 0 0 rgba(99, 102, 241, 0)', transform: 'scale(1)' },
    ],
    options: { duration: 400, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' },
  },
  insertItem: {
    keyframes: [
      { transform: 'translateY(-18px) scale(0.94)', opacity: 0, filter: 'blur(3px)' },
      { transform: 'translateY(0) scale(1.03)', opacity: 1, filter: 'blur(0px)', offset: 0.58 },
      { transform: 'translateY(0) scale(1)', opacity: 1, filter: 'blur(0px)' },
    ],
    options: { duration: 380, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)', fill: 'forwards' },
  },
  emptyStateToList: {
    keyframes: [
      { transform: 'translateY(24px)', opacity: 0, filter: 'blur(3px)' },
      { transform: 'translateY(0)', opacity: 1, filter: 'blur(0px)' },
    ],
    options: { duration: 550, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' },
  },
  itemSlideOutLeft: {
    keyframes: [
      { transform: 'translateX(0)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'translateX(-24px)', opacity: 0, filter: 'blur(2.5px)' },
    ],
    options: { duration: 240, easing: 'cubic-bezier(0.4, 0.0, 1, 1)', fill: 'forwards' },
  },
  itemSlideOutRight: {
    keyframes: [
      { transform: 'translateX(0)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'translateX(24px)', opacity: 0, filter: 'blur(2.5px)' },
    ],
    options: { duration: 240, easing: 'cubic-bezier(0.4, 0.0, 1, 1)', fill: 'forwards' },
  },
  itemScaleOut: {
    keyframes: [
      { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'scale(0.88)', opacity: 0, filter: 'blur(3px)' },
    ],
    options: { duration: 220, easing: 'cubic-bezier(0.4, 0.0, 1, 1)', fill: 'forwards' },
  },
  itemPopOut: {
    keyframes: [
      { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'scale(1.04)', opacity: 0.35, filter: 'blur(1px)', offset: 0.28 },
      { transform: 'scale(0.88)', opacity: 0, filter: 'blur(2.5px)' },
    ],
    options: { duration: 240, easing: 'cubic-bezier(0.4, 0.0, 1, 1)', fill: 'forwards' },
  },
  itemBlurOut: {
    keyframes: [
      { filter: 'blur(0)', opacity: 1 },
      { filter: 'blur(4px)', opacity: 0 },
    ],
    options: { duration: 270, easing: 'cubic-bezier(0.4, 0.0, 1, 1)', fill: 'forwards' },
  },
  itemDismissOut: {
    keyframes: [
      { transform: 'translateX(0)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'translateX(24px)', opacity: 0, filter: 'blur(2.5px)' },
    ],
    options: { duration: 270, easing: 'cubic-bezier(0.4, 0.0, 1, 1)', fill: 'forwards' },
  },
  tagRemove: {
    keyframes: [
      { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'scale(0.78)', opacity: 0, filter: 'blur(2px)' },
    ],
    options: { duration: 200, easing: 'cubic-bezier(0.4, 0.0, 1, 1)', fill: 'forwards' },
  },
  cardRemove: {
    keyframes: [
      { transform: 'translateY(0) scale(1)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'translateY(-10px) scale(0.94)', opacity: 0, filter: 'blur(2.5px)' },
    ],
    options: { duration: 260, easing: 'cubic-bezier(0.4, 0.0, 1, 1)', fill: 'forwards' },
  },
  rowCollapseOut: {
    keyframes: [
      { maxHeight: '200px', opacity: 1, marginBottom: '8px', overflow: 'hidden' },
      { maxHeight: '0px', opacity: 0, marginBottom: '0px', overflow: 'hidden', padding: '0 16px' },
    ],
    options: { duration: 280, easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)', fill: 'forwards' },
  },
}

// Merge enterPresets + extended into a single lookup, typed as the union
const merged = { ...enterPresets, ...extended } as Record<string, AnimationDefinition>
export const presets = merged as Record<ListAnimationPreset, AnimationDefinition>
