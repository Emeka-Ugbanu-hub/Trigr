// Easing constants (shared with paragraph/index.tsx)
export const EASE_IN = 'cubic-bezier(0.0, 0.0, 0.2, 1)'
export const EASE_OUT = 'cubic-bezier(0.4, 0.0, 1, 1)'
export const EASE_IN_OUT = 'cubic-bezier(0.4, 0.0, 0.2, 1)'
export const SPRING = 'cubic-bezier(0.34, 1.56, 0.64, 1)'
export const SMOOTH = 'cubic-bezier(0.22, 1, 0.36, 1)'

const fadeIn: Keyframe[] = [
  { opacity: 0, transform: 'translateY(6px)', filter: 'blur(3px)' },
  { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
]
const fadeOut: Keyframe[] = [
  { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
  { opacity: 0, transform: 'translateY(-6px)', filter: 'blur(3px)' },
]

export const presets: Record<string, { out: Keyframe[]; in: Keyframe[] }> = {
  fadeIn: { out: [], in: fadeIn },
  fadeOut: { out: fadeOut, in: [] },
  fadeSwap: { out: fadeOut, in: fadeIn },
  fadeMask: { out: fadeOut, in: fadeIn },
  morphText: { out: fadeOut, in: fadeIn },
  slideUp: {
    out: [
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
      { opacity: 0, transform: 'translateY(-16px)', filter: 'blur(2.5px)' },
    ],
    in: [
      { opacity: 0, transform: 'translateY(16px)', filter: 'blur(2.5px)' },
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
    ],
  },
  slideDown: {
    out: [
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
      { opacity: 0, transform: 'translateY(16px)', filter: 'blur(2.5px)' },
    ],
    in: [
      { opacity: 0, transform: 'translateY(-16px)', filter: 'blur(2.5px)' },
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
    ],
  },
  slideLeft: {
    out: [
      { opacity: 1, transform: 'translateX(0)', filter: 'blur(0px)' },
      { opacity: 0, transform: 'translateX(-18px)', filter: 'blur(2.5px)' },
    ],
    in: [
      { opacity: 0, transform: 'translateX(18px)', filter: 'blur(2.5px)' },
      { opacity: 1, transform: 'translateX(0)', filter: 'blur(0px)' },
    ],
  },
  slideRight: {
    out: [
      { opacity: 1, transform: 'translateX(0)', filter: 'blur(0px)' },
      { opacity: 0, transform: 'translateX(18px)', filter: 'blur(2.5px)' },
    ],
    in: [
      { opacity: 0, transform: 'translateX(-18px)', filter: 'blur(2.5px)' },
      { opacity: 1, transform: 'translateX(0)', filter: 'blur(0px)' },
    ],
  },
  slideReplace: {
    out: [
      { opacity: 1, transform: 'translateX(0)', filter: 'blur(0px)' },
      { opacity: 0, transform: 'translateX(-14px)', filter: 'blur(2px)' },
    ],
    in: [
      { opacity: 0, transform: 'translateX(14px)', filter: 'blur(2px)' },
      { opacity: 1, transform: 'translateX(0)', filter: 'blur(0px)' },
    ],
  },
  popIn: {
    out: [
      { opacity: 1, transform: 'scale(1)', filter: 'blur(0px)' },
      { opacity: 0, transform: 'scale(0.93)', filter: 'blur(2px)' },
    ],
    in: [
      { opacity: 0, transform: 'scale(0.9)', filter: 'blur(2px)' },
      { opacity: 1, transform: 'scale(1.06)', filter: 'blur(0px)', offset: 0.6 },
      { opacity: 1, transform: 'scale(1)', filter: 'blur(0px)' },
    ],
  },
  popOut: {
    out: [
      { opacity: 1, transform: 'scale(1)', filter: 'blur(0px)' },
      { opacity: 0, transform: 'scale(0.93)', filter: 'blur(2px)' },
    ],
    in: [],
  },
  expandIn: {
    out: [
      { opacity: 1, transform: 'scaleY(1)', filter: 'blur(0px)' },
      { opacity: 0, transform: 'scaleY(0.9)', filter: 'blur(2px)' },
    ],
    in: [
      { opacity: 0, transform: 'scaleY(0.9)', filter: 'blur(2px)' },
      { opacity: 1, transform: 'scaleY(1)', filter: 'blur(0px)' },
    ],
  },
  collapseOut: {
    out: [
      { opacity: 1, transform: 'scaleY(1)', filter: 'blur(0px)' },
      { opacity: 0, transform: 'scaleY(0)', filter: 'blur(2px)' },
    ],
    in: [],
  },
  zoomIn: {
    out: [
      { opacity: 1, transform: 'scale(1)', filter: 'blur(0px)' },
      { opacity: 0, transform: 'scale(0.94)', filter: 'blur(2px)' },
    ],
    in: [
      { opacity: 0, transform: 'scale(0.94)', filter: 'blur(2px)' },
      { opacity: 1, transform: 'scale(1.03)', filter: 'blur(0px)', offset: 0.6 },
      { opacity: 1, transform: 'scale(1)', filter: 'blur(0px)' },
    ],
  },
  zoomOut: {
    out: [
      { opacity: 1, transform: 'scale(1)', filter: 'blur(0px)' },
      { opacity: 0, transform: 'scale(0.94)', filter: 'blur(2px)' },
    ],
    in: [],
  },
  wordFadeIn: {
    out: [{ opacity: 1 }, { opacity: 0 }],
    in: [{ opacity: 0 }, { opacity: 1 }],
  },
  wordSlideUp: {
    out: fadeOut,
    in: [
      { opacity: 0, transform: 'translateY(12px)', filter: 'blur(2px)' },
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
    ],
  },
  wordPop: {
    out: [
      { opacity: 1, transform: 'scale(1)', filter: 'blur(0px)' },
      { opacity: 0, transform: 'scale(0.94)', filter: 'blur(2px)' },
    ],
    in: [
      { opacity: 0, transform: 'scale(0.9)', filter: 'blur(2px)' },
      { opacity: 1, transform: 'scale(1.06)', filter: 'blur(0px)', offset: 0.6 },
      { opacity: 1, transform: 'scale(1)', filter: 'blur(0px)' },
    ],
  },
  lineFadeIn: {
    out: [{ opacity: 1 }, { opacity: 0 }],
    in: [{ opacity: 0 }, { opacity: 1 }],
  },
  lineSlideUp: {
    out: fadeOut,
    in: [
      { opacity: 0, transform: 'translateY(14px)', filter: 'blur(2px)' },
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
    ],
  },
  streamIn: {
    out: [{ opacity: 1 }, { opacity: 0 }],
    in: [{ opacity: 0 }, { opacity: 1 }],
  },
  streamFade: {
    out: [{ opacity: 1 }, { opacity: 0 }],
    in: [{ opacity: 0 }, { opacity: 1 }],
  },
  streamSlide: {
    out: fadeOut,
    in: [
      { opacity: 0, transform: 'translateY(10px)', filter: 'blur(2px)' },
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
    ],
  },
  cursorBlink: {
    out: [{ opacity: 1 }, { opacity: 0 }],
    in: [{ opacity: 0 }, { opacity: 1 }],
  },
  expandCollapse: {
    out: fadeOut,
    in: fadeIn,
  },
  heightAuto: {
    out: fadeOut,
    in: fadeIn,
  },
  crossFade: {
    out: [{ opacity: 1 }, { opacity: 0 }],
    in: [{ opacity: 0 }, { opacity: 1 }],
  },
  pulse: {
    out: [
      { opacity: 1, transform: 'scale(1)' },
      { opacity: 1, transform: 'scale(0.98)' },
    ],
    in: [
      { opacity: 1, transform: 'scale(1)' },
      { opacity: 1, transform: 'scale(1.03)', offset: 0.5 },
      { opacity: 1, transform: 'scale(1)' },
    ],
  },
  shake: {
    out: fadeOut,
    in: [
      { opacity: 1, transform: 'translateX(0)' },
      { opacity: 1, transform: 'translateX(-7px)', offset: 0.18 },
      { opacity: 1, transform: 'translateX(7px)', offset: 0.36 },
      { opacity: 1, transform: 'translateX(-5px)', offset: 0.56 },
      { opacity: 1, transform: 'translateX(3px)', offset: 0.72 },
      { opacity: 1, transform: 'translateX(0)' },
    ],
  },
  highlight: {
    out: [{ opacity: 1 }, { opacity: 1 }],
    in: [],
  },
  flash: {
    out: [
      { filter: 'brightness(1)', opacity: 1 },
      { filter: 'brightness(1.8)', opacity: 1, offset: 0.5 },
      { filter: 'brightness(1)', opacity: 1 },
    ],
    in: [
      { filter: 'brightness(1)', opacity: 1 },
      { filter: 'brightness(1.8)', opacity: 1, offset: 0.5 },
      { filter: 'brightness(1)', opacity: 1 },
    ],
  },
  pushLeft: {
    out: [
      { opacity: 1, transform: 'translateX(0)', filter: 'blur(0px)' },
      { opacity: 0, transform: 'translateX(-22px)', filter: 'blur(2px)' },
    ],
    in: [
      { opacity: 0, transform: 'translateX(22px)', filter: 'blur(2px)' },
      { opacity: 1, transform: 'translateX(0)', filter: 'blur(0px)' },
    ],
  },
  pushRight: {
    out: [
      { opacity: 1, transform: 'translateX(0)', filter: 'blur(0px)' },
      { opacity: 0, transform: 'translateX(22px)', filter: 'blur(2px)' },
    ],
    in: [
      { opacity: 0, transform: 'translateX(-22px)', filter: 'blur(2px)' },
      { opacity: 1, transform: 'translateX(0)', filter: 'blur(0px)' },
    ],
  },
  flipPage: {
    out: [
      { opacity: 1, transform: 'perspective(800px) rotateY(0deg)' },
      { opacity: 0, transform: 'perspective(800px) rotateY(-32deg)' },
    ],
    in: [
      { opacity: 0, transform: 'perspective(800px) rotateY(32deg)' },
      { opacity: 1, transform: 'perspective(800px) rotateY(0deg)' },
    ],
  },
  morphBlur: {
    out: [
      { opacity: 1, filter: 'blur(0px)', transform: 'translateY(0)' },
      { opacity: 0.2, filter: 'blur(4px)', transform: 'translateY(-4px)' },
    ],
    in: [
      { opacity: 0.2, filter: 'blur(4px)', transform: 'translateY(4px)' },
      { opacity: 1, filter: 'blur(0px)', transform: 'translateY(0)' },
    ],
  },
  diffAnimate: {
    out: [],
    in: [],
  },
  scrollWordReveal: {
    out: [],
    in: [],
  },
  errorMessageIn: {
    out: [],
    in: [
      { transform: 'translateX(-6px)', opacity: 0, filter: 'blur(2px)' },
      { transform: 'translateX(5px)', opacity: 1, filter: 'blur(0px)', offset: 0.22 },
      { transform: 'translateX(-3px)', opacity: 1, filter: 'blur(0px)', offset: 0.48 },
      { transform: 'translateX(2px)', opacity: 1, filter: 'blur(0px)', offset: 0.72 },
      { transform: 'translateX(0)', opacity: 1, filter: 'blur(0px)' },
    ],
  },
  paragraphFadeOut: {
    out: [
      { opacity: 1, transform: 'translateY(0)' },
      { opacity: 0, transform: 'translateY(0)' },
    ],
    in: [
      { opacity: 0, transform: 'translateY(0)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
  },
  slideOutUp: {
    out: [
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
      { opacity: 0, transform: 'translateY(-18px)', filter: 'blur(2.5px)' },
    ],
    in: [
      { opacity: 0, transform: 'translateY(-18px)', filter: 'blur(2.5px)' },
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
    ],
  },
  slideOutDown: {
    out: [
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
      { opacity: 0, transform: 'translateY(18px)', filter: 'blur(2.5px)' },
    ],
    in: [
      { opacity: 0, transform: 'translateY(18px)', filter: 'blur(2.5px)' },
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
    ],
  },
  slideOutLeft: {
    out: [
      { opacity: 1, transform: 'translateX(0)', filter: 'blur(0px)' },
      { opacity: 0, transform: 'translateX(-22px)', filter: 'blur(2.5px)' },
    ],
    in: [
      { opacity: 0, transform: 'translateX(-22px)', filter: 'blur(2.5px)' },
      { opacity: 1, transform: 'translateX(0)', filter: 'blur(0px)' },
    ],
  },
  slideOutRight: {
    out: [
      { opacity: 1, transform: 'translateX(0)', filter: 'blur(0px)' },
      { opacity: 0, transform: 'translateX(22px)', filter: 'blur(2.5px)' },
    ],
    in: [
      { opacity: 0, transform: 'translateX(22px)', filter: 'blur(2.5px)' },
      { opacity: 1, transform: 'translateX(0)', filter: 'blur(0px)' },
    ],
  },
  collapseHeight: {
    out: [
      { maxHeight: '1000px', opacity: 1, overflow: 'hidden' },
      { maxHeight: '0px', opacity: 0, overflow: 'hidden' },
    ],
    in: [
      { maxHeight: '0px', opacity: 0, overflow: 'hidden' },
      { maxHeight: '1000px', opacity: 1, overflow: 'hidden' },
    ],
  },
  wordFadeOut: {
    out: [{ opacity: 1 }, { opacity: 0 }],
    in: [{ opacity: 0 }, { opacity: 1 }],
  },
  wordSlideOut: {
    out: [
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
      { opacity: 0, transform: 'translateY(-12px)', filter: 'blur(2px)' },
    ],
    in: [
      { opacity: 0, transform: 'translateY(-12px)', filter: 'blur(2px)' },
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
    ],
  },
  lineFadeOut: {
    out: [{ opacity: 1 }, { opacity: 0 }],
    in: [{ opacity: 0 }, { opacity: 1 }],
  },
  lineSlideOut: {
    out: [
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
      { opacity: 0, transform: 'translateY(-14px)', filter: 'blur(2px)' },
    ],
    in: [
      { opacity: 0, transform: 'translateY(-14px)', filter: 'blur(2px)' },
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
    ],
  },
  fadeMaskOut: {
    out: [{ opacity: 1 }, { opacity: 0 }],
    in: [{ opacity: 0 }, { opacity: 1 }],
  },
}
