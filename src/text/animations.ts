import type { AnimationPreset, AnimationDefinition } from "./types"

export const EASE_IN = "cubic-bezier(0.0, 0.0, 0.2, 1)"
export const EASE_OUT = "cubic-bezier(0.4, 0.0, 1, 1)"
export const EASE_IN_OUT = "cubic-bezier(0.4, 0.0, 0.2, 1)"
export const SPRING = "cubic-bezier(0.34, 1.56, 0.64, 1)"
export const SNAPPY = "cubic-bezier(0.2, 0, 0, 1)"
export const SMOOTH = "cubic-bezier(0.22, 1, 0.36, 1)"

const fadeOut: Keyframe[] = [{ opacity: 1, transform: "translateY(0)", filter: "blur(0px)" }, { opacity: 0, transform: "translateY(-6px)", filter: "blur(3px)" }]
const fadeIn: Keyframe[] = [{ opacity: 0, transform: "translateY(6px)", filter: "blur(3px)" }, { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" }]
const neutralOut: Keyframe[] = [{ opacity: 1, transform: "scale(1)", filter: "blur(0px)" }, { opacity: 0, transform: "scale(0.95)", filter: "blur(2.5px)" }]
const neutralIn: Keyframe[] = [{ opacity: 0, transform: "scale(0.95)", filter: "blur(2.5px)" }, { opacity: 1, transform: "scale(1)", filter: "blur(0px)" }]

export const presets: Record<AnimationPreset, AnimationDefinition> = {
  fadeSwap: {
    out: [
      { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" },
      { opacity: 0.92, transform: "translateY(0)", filter: "blur(0px)", offset: 0.28 },
      { opacity: 0, transform: "translateY(-0.12em)", filter: "blur(1.5px)" },
    ],
    in: [
      { opacity: 0, transform: "translateY(0.14em)", filter: "blur(2px)" },
      { opacity: 0.9, transform: "translateY(0.02em)", filter: "blur(0.35px)", offset: 0.72 },
      { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" },
    ],
  },
  morph: {
    out: neutralOut,
    in: neutralIn,
  },
  slideUp: {
    out: [{ opacity: 1, transform: "translateY(0)", filter: "blur(0px)" }, { opacity: 0, transform: "translateY(-12px)", filter: "blur(2.5px)" }],
    in: [{ opacity: 0, transform: "translateY(12px)", filter: "blur(2.5px)" }, { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" }],
  },
  slideDown: {
    out: [{ opacity: 1, transform: "translateY(0)", filter: "blur(0px)" }, { opacity: 0, transform: "translateY(12px)", filter: "blur(2.5px)" }],
    in: [{ opacity: 0, transform: "translateY(-12px)", filter: "blur(2.5px)" }, { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" }],
  },
  highlight: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: [],
  },
  bump: {
    out: [{ opacity: 1, transform: "scale(1)" }, { opacity: 1, transform: "scale(1.12)", offset: 0.4 }, { opacity: 1, transform: "scale(0.97)", offset: 0.72 }, { opacity: 1, transform: "scale(1)" }],
    in: [],
  },
  blur: {
    out: [{ opacity: 1, filter: "blur(0px)", transform: "translateY(0)" }, { opacity: 0, filter: "blur(4px)", transform: "translateY(-4px)" }],
    in: [{ opacity: 0, filter: "blur(4px)", transform: "translateY(4px)" }, { opacity: 1, filter: "blur(0px)", transform: "translateY(0)" }],
  },
  decoder: {
    out: fadeOut,
    in: fadeIn,
  },
  fadeAway: {
    out: fadeOut,
    in: fadeIn,
  },
  fadeIn: {
    out: fadeOut,
    in: fadeIn,
  },
  fadeOut: {
    out: fadeOut,
    in: fadeIn,
  },
  slideReplace: {
    out: [{ opacity: 1, transform: "translateX(0)", filter: "blur(0px)" }, { opacity: 0, transform: "translateX(-12px)", filter: "blur(2px)" }],
    in: [{ opacity: 0, transform: "translateX(12px)", filter: "blur(2px)" }, { opacity: 1, transform: "translateX(0)", filter: "blur(0px)" }],
  },
  letterDrop: {
    out: fadeOut,
    in: [{ opacity: 0, transform: "translateY(-24px)", filter: "blur(4px)" }, { opacity: 1, transform: "translateY(2px)", filter: "blur(0px)", offset: 0.72 }, { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" }],
  },
  glitch: {
    out: fadeOut,
    in: [{ opacity: 0, transform: "translateX(-4px)", filter: "blur(2px)" }, { opacity: 1, transform: "translateX(3px)", filter: "blur(0px)", offset: 0.45 }, { opacity: 1, transform: "translateX(0)", filter: "blur(0px)" }],
  },
  textReveal: {
    out: fadeOut,
    in: fadeIn,
  },
  liftReveal: {
    out: [{ opacity: 1, transform: "translateY(0)", filter: "blur(0px)" }, { opacity: 0, transform: "translateY(-12px)", filter: "blur(2.5px)" }],
    in: [{ opacity: 0, transform: "translateY(12px)", filter: "blur(2.5px)" }, { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" }],
  },
  scatter: {
    out: fadeOut,
    in: [{ opacity: 0, transform: "translateY(10px) scale(0.95)", filter: "blur(2px)" }, { opacity: 1, transform: "translateY(0) scale(1)", filter: "blur(0px)" }],
  },
  typewriter: {
    out: fadeOut,
    in: [{ opacity: 0, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
  },
  splash: {
    out: fadeOut,
    in: [{ opacity: 0, transform: "translateY(14px) scale(0.9)", filter: "blur(3px)" }, { opacity: 1, transform: "translateY(0) scale(1)", filter: "blur(0px)" }],
  },
  jitter: {
    out: fadeOut,
    in: [
      { transform: "translateX(0)", opacity: 1 },
      { transform: "translateX(-3px)", opacity: 1, offset: 0.18 },
      { transform: "translateX(3px)", opacity: 1, offset: 0.36 },
      { transform: "translateX(-2px)", opacity: 1, offset: 0.54 },
      { transform: "translateX(1px)", opacity: 1, offset: 0.72 },
      { transform: "translateX(0)", opacity: 1 },
    ],
  },
  popUp: {
    out: fadeOut,
    in: [{ opacity: 0, transform: "translateY(12px) scale(0.9)", filter: "blur(2px)" }, { opacity: 1, transform: "translateY(-2px) scale(1.06)", filter: "blur(0px)", offset: 0.62 }, { opacity: 1, transform: "translateY(0) scale(1)", filter: "blur(0px)" }],
  },
  jello: {
    out: fadeOut,
    in: [
      { opacity: 1, transform: "scale(1, 1)" },
      { opacity: 1, transform: "scale(1.08, 0.94)", offset: 0.24 },
      { opacity: 1, transform: "scale(0.96, 1.05)", offset: 0.48 },
      { opacity: 1, transform: "scale(1.03, 0.98)", offset: 0.72 },
      { opacity: 1, transform: "scale(1, 1)" },
    ],
  },
  scramble: {
    out: fadeOut,
    in: fadeIn,
  },
  flip: {
    out: [{ opacity: 1, transform: "perspective(800px) rotateY(0deg)" }, { opacity: 0, transform: "perspective(800px) rotateY(-36deg)" }],
    in: [{ opacity: 0, transform: "perspective(800px) rotateY(36deg)" }, { opacity: 1, transform: "perspective(800px) rotateY(0deg)" }],
  },
  bounce: {
    out: [{ opacity: 1, transform: "scale(1)", filter: "blur(0px)" }, { opacity: 0, transform: "scale(0.9)", filter: "blur(2px)" }],
    in: [{ opacity: 0, transform: "scale(0.86)", filter: "blur(2px)" }, { opacity: 1, transform: "scale(1.07)", filter: "blur(0px)", offset: 0.5 }, { opacity: 1, transform: "scale(0.97)", filter: "blur(0px)", offset: 0.74 }, { opacity: 1, transform: "scale(1)", filter: "blur(0px)" }],
  },
  shake: {
    out: fadeOut,
    in: [
      { opacity: 1, transform: "translateX(0)" },
      { opacity: 1, transform: "translateX(-7px)", offset: 0.16, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
      { opacity: 1, transform: "translateX(7px)", offset: 0.32, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
      { opacity: 1, transform: "translateX(-5px)", offset: 0.56, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
      { opacity: 1, transform: "translateX(3px)", offset: 0.72, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
      { opacity: 1, transform: "translateX(0)" },
    ],
  },
  pulse: {
    out: [{ opacity: 1, transform: "scale(1)" }, { opacity: 1, transform: "scale(0.97)" }],
    in: [{ opacity: 1, transform: "scale(1)" }, { opacity: 1, transform: "scale(1.06)", offset: 0.42 }, { opacity: 1, transform: "scale(0.98)", offset: 0.72 }, { opacity: 1, transform: "scale(1)" }],
  },
  blink: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 0, transform: "translateY(0)" }],
    in: [{ opacity: 0, transform: "translateY(0)" }, { opacity: 0.3, transform: "translateY(0)", offset: 0.5 }, { opacity: 1, transform: "translateY(0)" }],
  },
  wave: {
    out: fadeOut,
    in: fadeIn,
  },
  ping: {
    out: [{ opacity: 1, transform: "scale(1)", filter: "blur(0px)" }, { opacity: 0, transform: "scale(1.15)", filter: "blur(0px)" }],
    in: [{ opacity: 0, transform: "scale(0.88)", filter: "blur(2px)" }, { opacity: 1, transform: "scale(1.1)", filter: "blur(0px)", offset: 0.48 }, { opacity: 1, transform: "scale(1)", filter: "blur(0px)" }],
  },
  popIn: {
    out: [{ opacity: 1, transform: "scale(1)", filter: "blur(0px)" }, { opacity: 0, transform: "scale(0.9)", filter: "blur(2px)" }],
    in: [{ opacity: 0, transform: "scale(0.9)", filter: "blur(2px)" }, { opacity: 1, transform: "scale(1.07)", filter: "blur(0px)", offset: 0.62 }, { opacity: 1, transform: "scale(1)", filter: "blur(0px)" }],
  },
  dropIn: {
    out: fadeOut,
    in: [{ opacity: 0, transform: "translateY(-28px)", filter: "blur(4px)" }, { opacity: 1, transform: "translateY(2px)", filter: "blur(0px)", offset: 0.68 }, { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" }],
  },
  riseUp: {
    out: fadeOut,
    in: [{ opacity: 0, transform: "translateY(22px)", filter: "blur(3px)" }, { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" }],
  },
  expandIn: {
    out: neutralOut,
    in: [{ opacity: 0, transform: "scaleX(0.88)", filter: "blur(2px)" }, { opacity: 1, transform: "scaleX(1.02)", filter: "blur(0px)", offset: 0.65 }, { opacity: 1, transform: "scaleX(1)", filter: "blur(0px)" }],
  },
  shrinkOut: {
    out: neutralOut,
    in: [{ opacity: 1, transform: "scaleX(1)" }, { opacity: 0, transform: "scaleX(0.92)" }],
  },
  boldFlash: {
    out: fadeOut,
    in: [{ opacity: 0, transform: "scale(0.98)" }, { opacity: 1, transform: "scale(1.02)", offset: 0.35 }, { opacity: 1, transform: "scale(1)" }],
  },
  strikeThrough: {
    out: fadeOut,
    in: fadeIn,
  },
  odometer: {
    out: fadeOut,
    in: fadeIn,
  },
  ticker: {
    out: fadeOut,
    in: fadeIn,
  },
  splitReveal: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: [],
  },
  splitSlide: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: [],
  },
  bigBang: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: [],
  },
  scatterAssemble: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: [],
  },
  pixelRain: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: [],
  },
  dominoFall: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: [],
  },
  vortex: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: [],
  },
  pendulum: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: [],
  },
  centerBurst: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: [],
  },
  gravityBounce: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: [],
  },
  scrollFanIn: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: [],
  },
  textRotate: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: [],
  },
  gooeyMorph: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: [],
  },
  randomLetterSwap: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: [],
  },
  textEffect: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: [],
  },
  staggerText: {
    out: [{ opacity: 1, transform: "translateY(0)" }, { opacity: 1, transform: "translateY(0)" }],
    in: [],
  },
  underlineDraw: {
    out: [
      { backgroundSize: '100% 2px', backgroundPosition: '0% 100%', backgroundRepeat: 'no-repeat', backgroundImage: 'linear-gradient(currentColor, currentColor)', opacity: 1 },
      { backgroundSize: '100% 2px', backgroundPosition: '0% 100%', backgroundRepeat: 'no-repeat', backgroundImage: 'linear-gradient(currentColor, currentColor)', opacity: 1 },
    ],
    in: [
      { backgroundSize: '0% 2px', backgroundPosition: '0% 100%', backgroundRepeat: 'no-repeat', backgroundImage: 'linear-gradient(currentColor, currentColor)', opacity: 1 },
      { backgroundSize: '100% 2px', backgroundPosition: '0% 100%', backgroundRepeat: 'no-repeat', backgroundImage: 'linear-gradient(currentColor, currentColor)', opacity: 1 },
    ],
  },
  underlineSlide: {
    out: [
      { backgroundSize: '100% 2px', backgroundPosition: '0% 100%', backgroundRepeat: 'no-repeat', backgroundImage: 'linear-gradient(currentColor, currentColor)', opacity: 1 },
      { backgroundSize: '0% 2px', backgroundPosition: '100% 100%', backgroundRepeat: 'no-repeat', backgroundImage: 'linear-gradient(currentColor, currentColor)', opacity: 1 },
    ],
    in: [
      { backgroundSize: '0% 2px', backgroundPosition: '0% 100%', backgroundRepeat: 'no-repeat', backgroundImage: 'linear-gradient(currentColor, currentColor)', opacity: 1 },
      { backgroundSize: '100% 2px', backgroundPosition: '0% 100%', backgroundRepeat: 'no-repeat', backgroundImage: 'linear-gradient(currentColor, currentColor)', opacity: 1 },
    ],
  },
  copyConfirm: {
    out: [],
    in: [
      { transform: 'scale(0.88)', opacity: 0, filter: 'blur(2px)' },
      { transform: 'scale(1.1)', opacity: 1, filter: 'blur(0px)', offset: 0.55 },
      { transform: 'scale(0.97)', opacity: 1, filter: 'blur(0px)', offset: 0.74 },
      { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
    ],
  },
  brightnessShift: {
    out: [
      { filter: 'brightness(1) saturate(1)', opacity: 1 },
      { filter: 'brightness(1.15) saturate(1.2)', opacity: 0.92 },
    ],
    in: [
      { filter: 'brightness(0.7) saturate(0.6)', opacity: 0.65 },
      { filter: 'brightness(1.2) saturate(1.3)', opacity: 1 },
      { filter: 'brightness(1) saturate(1)', opacity: 1 },
    ],
  },
  activeTabText: {
    out: [],
    in: [
      { filter: 'brightness(0.6)', opacity: 0.7 },
      { filter: 'brightness(1.1)', opacity: 1, offset: 0.5 },
      { filter: 'brightness(1)', opacity: 1 },
    ],
  },

  fadeOutUp: {
    out: [
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
      { opacity: 0, transform: 'translateY(-10px)', filter: 'blur(3px)' },
    ],
    in: [
      { opacity: 0, transform: 'translateY(-10px)', filter: 'blur(3px)' },
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
    ],
  },
  fadeOutDown: {
    out: [
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
      { opacity: 0, transform: 'translateY(10px)', filter: 'blur(3px)' },
    ],
    in: [
      { opacity: 0, transform: 'translateY(10px)', filter: 'blur(3px)' },
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
    ],
  },

  slideOutUp: {
    out: [
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
      { opacity: 0, transform: 'translateY(-16px)', filter: 'blur(2.5px)' },
    ],
    in: [
      { opacity: 0, transform: 'translateY(-16px)', filter: 'blur(2.5px)' },
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
    ],
  },
  slideOutDown: {
    out: [
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
      { opacity: 0, transform: 'translateY(16px)', filter: 'blur(2.5px)' },
    ],
    in: [
      { opacity: 0, transform: 'translateY(16px)', filter: 'blur(2.5px)' },
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
    ],
  },
  slideOutLeft: {
    out: [
      { opacity: 1, transform: 'translateX(0)', filter: 'blur(0px)' },
      { opacity: 0, transform: 'translateX(-18px)', filter: 'blur(2.5px)' },
    ],
    in: [
      { opacity: 0, transform: 'translateX(-18px)', filter: 'blur(2.5px)' },
      { opacity: 1, transform: 'translateX(0)', filter: 'blur(0px)' },
    ],
  },
  slideOutRight: {
    out: [
      { opacity: 1, transform: 'translateX(0)', filter: 'blur(0px)' },
      { opacity: 0, transform: 'translateX(18px)', filter: 'blur(2.5px)' },
    ],
    in: [
      { opacity: 0, transform: 'translateX(18px)', filter: 'blur(2.5px)' },
      { opacity: 1, transform: 'translateX(0)', filter: 'blur(0px)' },
    ],
  },

  scaleOut: {
    out: [
      { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'scale(0.88)', opacity: 0, filter: 'blur(3px)' },
    ],
    in: [
      { transform: 'scale(0.88)', opacity: 0, filter: 'blur(3px)' },
      { transform: 'scale(1.04)', opacity: 1, filter: 'blur(0px)', offset: 0.55 },
      { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
    ],
  },
  popOut: {
    out: [
      { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'scale(1.06)', opacity: 0.35, filter: 'blur(1px)', offset: 0.38 },
      { transform: 'scale(0.88)', opacity: 0, filter: 'blur(3px)' },
    ],
    in: [
      { transform: 'scale(0.88)', opacity: 0, filter: 'blur(3px)' },
      { transform: 'scale(1.06)', opacity: 1, filter: 'blur(0px)', offset: 0.58 },
      { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
    ],
  },

  blurOut: {
    out: [
      { filter: 'blur(0)', opacity: 1 },
      { filter: 'blur(4px)', opacity: 0 },
    ],
    in: [
      { filter: 'blur(4px)', opacity: 0 },
      { filter: 'blur(0)', opacity: 1 },
    ],
  },
  clipOut: {
    out: [
      { clipPath: 'inset(0 0 0 0)', opacity: 1 },
      { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
    ],
    in: [
      { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
      { clipPath: 'inset(0 0 0 0)', opacity: 1 },
    ],
  },

  strikeOut: {
    out: [
      { opacity: 1, transform: "translateY(0)", filter: "blur(0px)", textDecorationColor: "currentColor" },
      { opacity: 0.68, transform: "translateY(0)", filter: "blur(1px)", textDecorationColor: "currentColor", offset: 0.45 },
      { opacity: 0, transform: "translateY(-6px)", filter: "blur(3px)", textDecorationColor: "currentColor" },
    ],
    in: fadeIn,
  },
  typeOut: {
    out: [
      { opacity: 1, clipPath: "inset(0 0 0 0)", transform: "translateY(0)" },
      { opacity: 0, clipPath: "inset(0 0 0 100%)", transform: "translateY(0)" },
    ],
    in: [
      { opacity: 0, clipPath: "inset(0 100% 0 0)", transform: "translateY(0)" },
      { opacity: 1, clipPath: "inset(0 0 0 0)", transform: "translateY(0)" },
    ],
  },
  scrambleOut: {
    out: [
      { opacity: 1, filter: "blur(0px)", transform: "translateY(0)" },
      { opacity: 0.45, filter: "blur(2px)", transform: "translateY(-2px)", offset: 0.55 },
      { opacity: 0, filter: "blur(4px)", transform: "translateY(-4px)" },
    ],
    in: fadeIn,
  },
}
