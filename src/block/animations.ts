import type { BlockAnimationPreset, AnimationDefinition, PresetCategory } from "./types"

export const EASE_IN = "cubic-bezier(0.0, 0.0, 0.2, 1)"
export const EASE_OUT = "cubic-bezier(0.4, 0.0, 1, 1)"
export const EASE_IN_OUT = "cubic-bezier(0.4, 0.0, 0.2, 1)"
export const SPRING = "cubic-bezier(0.34, 1.56, 0.64, 1)"
export const SNAPPY = "cubic-bezier(0.2, 0, 0, 1)"
export const SMOOTH = "cubic-bezier(0.22, 1, 0.36, 1)"

export const presetCategory: Record<string, PresetCategory> = {
  fadeIn: "oneshot", fadeOut: "oneshot", fadeSwap: "oneshot",
  slideUp: "oneshot", slideDown: "oneshot", slideLeft: "oneshot", slideRight: "oneshot",
  scaleIn: "oneshot", scaleOut: "oneshot", popIn: "oneshot", popOut: "oneshot",
  rotateIn: "oneshot", rotateOut: "oneshot", flipX: "oneshot", flipY: "oneshot",
  bounceIn: "oneshot", bounceOut: "oneshot",
  shake: "oneshot", wiggle: "oneshot", jello: "oneshot", flash: "oneshot", heartBeat: "oneshot",
  glideIn: "oneshot", glideOut: "oneshot", dropIn: "oneshot", riseUp: "oneshot",
  expandIn: "oneshot", collapseOut: "oneshot", expandHeight: "oneshot", fadeSlideUp: "oneshot",
  blurIn: "oneshot", blurOut: "oneshot",
  clipUp: "oneshot", clipLeft: "oneshot",
  zoomIn: "oneshot", zoomOut: "oneshot",
  springBounce: "oneshot", springScale: "oneshot", springSlideUp: "oneshot", springSlideDown: "oneshot",
  morphRadius: "oneshot", morphCircle: "oneshot",
  press: "hoverState",
  parallax: "scrollLink", parallaxFast: "scrollLink", parallaxReverse: "scrollLink",
  tiltScroll: "scrollLink", scaleScroll: "scrollLink",
  lift: "hoverState", sink: "hoverState", grow: "hoverState",
  glow: "hoverState", shadow: "hoverState", borderPop: "hoverState",
  tilt: "cursorTrack", tilt3D: "cursorTrack", rotate3D: "cursorTrack", depth: "cursorTrack",
  float: "continuous",
  pulse: "continuous",
  spin: "continuous", ping: "continuous", shimmer: "continuous",
  ripple: "overlay", burst: "overlay",
  modalIn: "oneshot", modalOut: "oneshot",
  popoverIn: "oneshot", popoverOut: "oneshot",
  toastIn: "oneshot", toastOut: "oneshot",
  successCheckIn: "oneshot", buttonLoading: "oneshot",
  focusRingPulse: "continuous",
  tabPanelIn: "oneshot",
  tabPanelOut: "oneshot",
  successToast: "oneshot",
  checkboxCheck: "oneshot",
  dialogOut: "oneshot", drawerOutLeft: "oneshot", drawerOutRight: "oneshot", drawerOutTop: "oneshot", drawerOutBottom: "oneshot",
  menuOut: "oneshot", toastOutRight: "oneshot", toastOutUp: "oneshot", collapseWidth: "oneshot", dismissOut: "oneshot", errorOut: "oneshot", successOut: "oneshot",
}

export const presets: Record<string, AnimationDefinition> = {
  fadeIn: {
    in: [{ opacity: 0, filter: "blur(3px)" }, { opacity: 1, filter: "blur(0px)" }],
    out: [{ opacity: 1, filter: "blur(0px)" }, { opacity: 0, filter: "blur(3px)" }],
  },
  fadeOut: {
    in: [{ opacity: 0, filter: "blur(3px)" }, { opacity: 1, filter: "blur(0px)" }],
    out: [{ opacity: 1, filter: "blur(0px)" }, { opacity: 0, filter: "blur(3px)" }],
  },
  fadeSwap: {
    in: [
      { opacity: 0, transform: "translateY(12px)", filter: "blur(3px)" },
      { opacity: 0.72, transform: "translateY(2px)", filter: "blur(0.5px)", offset: 0.58 },
      { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" },
    ],
    out: [
      { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" },
      { opacity: 0, transform: "translateY(-12px)", filter: "blur(3px)" },
    ],
  },
  slideUp: {
    in: [
      { opacity: 0, transform: "translateY(36px)", filter: "blur(3px)" },
      { opacity: 0.76, transform: "translateY(6px)", filter: "blur(0.5px)", offset: 0.62 },
      { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" },
    ],
    out: [{ opacity: 1, transform: "translateY(0)", filter: "blur(0px)" }, { opacity: 0, transform: "translateY(-28px)", filter: "blur(3px)" }],
  },
  slideDown: {
    in: [
      { opacity: 0, transform: "translateY(-36px)", filter: "blur(3px)" },
      { opacity: 0.76, transform: "translateY(-6px)", filter: "blur(0.5px)", offset: 0.62 },
      { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" },
    ],
    out: [{ opacity: 1, transform: "translateY(0)", filter: "blur(0px)" }, { opacity: 0, transform: "translateY(28px)", filter: "blur(3px)" }],
  },
  slideLeft: {
    in: [
      { opacity: 0, transform: "translateX(-36px)", filter: "blur(3px)" },
      { opacity: 0.76, transform: "translateX(-6px)", filter: "blur(0.5px)", offset: 0.62 },
      { opacity: 1, transform: "translateX(0)", filter: "blur(0px)" },
    ],
    out: [{ opacity: 1, transform: "translateX(0)", filter: "blur(0px)" }, { opacity: 0, transform: "translateX(-28px)", filter: "blur(3px)" }],
  },
  slideRight: {
    in: [
      { opacity: 0, transform: "translateX(36px)", filter: "blur(3px)" },
      { opacity: 0.76, transform: "translateX(6px)", filter: "blur(0.5px)", offset: 0.62 },
      { opacity: 1, transform: "translateX(0)", filter: "blur(0px)" },
    ],
    out: [{ opacity: 1, transform: "translateX(0)", filter: "blur(0px)" }, { opacity: 0, transform: "translateX(28px)", filter: "blur(3px)" }],
  },
  scaleIn: {
    in: [{ opacity: 0, transform: "scale(0.88)", filter: "blur(2.5px)" }, { opacity: 1, transform: "scale(1)", filter: "blur(0px)" }],
    out: [{ opacity: 1, transform: "scale(1)", filter: "blur(0px)" }, { opacity: 0, transform: "scale(0.88)", filter: "blur(2.5px)" }],
  },
  scaleOut: {
    in: [{ opacity: 0, transform: "scale(0.88)", filter: "blur(2.5px)" }, { opacity: 1, transform: "scale(1)", filter: "blur(0px)" }],
    out: [{ opacity: 1, transform: "scale(1)", filter: "blur(0px)" }, { opacity: 0, transform: "scale(0.88)", filter: "blur(2.5px)" }],
  },
  popIn: {
    in: [{ opacity: 0, transform: "scale(0.9)", filter: "blur(2px)" }, { opacity: 1, transform: "scale(1.06)", filter: "blur(0px)", offset: 0.58 }, { opacity: 1, transform: "scale(1)", filter: "blur(0px)" }],
    out: [{ opacity: 1, transform: "scale(1)", filter: "blur(0px)" }, { opacity: 0, transform: "scale(0.9)", filter: "blur(2px)" }],
  },
  popOut: {
    in: [{ opacity: 0, transform: "scale(0.9)", filter: "blur(2px)" }, { opacity: 1, transform: "scale(1.06)", filter: "blur(0px)", offset: 0.58 }, { opacity: 1, transform: "scale(1)", filter: "blur(0px)" }],
    out: [{ opacity: 1, transform: "scale(1)", filter: "blur(0px)" }, { opacity: 1, transform: "scale(1.06)", filter: "blur(0px)", offset: 0.4 }, { opacity: 0, transform: "scale(0.9)", filter: "blur(2px)" }],
  },
  rotateIn: {
    in: [{ opacity: 0, transform: "rotate(-14deg) scale(0.88)", filter: "blur(3px)" }, { opacity: 1, transform: "rotate(0deg) scale(1)", filter: "blur(0px)" }],
    out: [{ opacity: 1, transform: "rotate(0deg) scale(1)", filter: "blur(0px)" }, { opacity: 0, transform: "rotate(14deg) scale(0.88)", filter: "blur(3px)" }],
  },
  rotateOut: {
    in: [{ opacity: 0, transform: "rotate(-14deg) scale(0.88)", filter: "blur(3px)" }, { opacity: 1, transform: "rotate(0deg) scale(1)", filter: "blur(0px)" }],
    out: [{ opacity: 1, transform: "rotate(0deg) scale(1)", filter: "blur(0px)" }, { opacity: 0, transform: "rotate(14deg) scale(0.88)", filter: "blur(3px)" }],
  },
  flipX: {
    in: [{ opacity: 0, transform: "perspective(800px) rotateX(-90deg)" }, { opacity: 1, transform: "perspective(800px) rotateX(0deg)" }],
    out: [{ opacity: 1, transform: "perspective(800px) rotateX(0deg)" }, { opacity: 0, transform: "perspective(800px) rotateX(90deg)" }],
  },
  flipY: {
    in: [{ opacity: 0, transform: "perspective(800px) rotateY(-90deg)" }, { opacity: 1, transform: "perspective(800px) rotateY(0deg)" }],
    out: [{ opacity: 1, transform: "perspective(800px) rotateY(0deg)" }, { opacity: 0, transform: "perspective(800px) rotateY(90deg)" }],
  },
  bounceIn: {
    in: [{ opacity: 0, transform: "scale(0.88)", filter: "blur(2px)" }, { opacity: 1, transform: "scale(1.07)", filter: "blur(0px)", offset: 0.52 }, { opacity: 1, transform: "scale(0.97)", filter: "blur(0px)", offset: 0.74 }, { opacity: 1, transform: "scale(1)", filter: "blur(0px)" }],
    out: [{ opacity: 1, transform: "scale(1)", filter: "blur(0px)" }, { opacity: 0, transform: "scale(0.88)", filter: "blur(2px)" }],
  },
  bounceOut: {
    in: [{ opacity: 0, transform: "scale(0.88)", filter: "blur(2px)" }, { opacity: 1, transform: "scale(1.07)", filter: "blur(0px)", offset: 0.52 }, { opacity: 1, transform: "scale(0.97)", filter: "blur(0px)", offset: 0.74 }, { opacity: 1, transform: "scale(1)", filter: "blur(0px)" }],
    out: [{ opacity: 1, transform: "scale(1)", filter: "blur(0px)" }, { opacity: 1, transform: "scale(1.06)", filter: "blur(0px)", offset: 0.35 }, { opacity: 0, transform: "scale(0.9)", filter: "blur(2px)" }],
  },
  shake: {
    in: [
      { opacity: 0, transform: "translateX(0)" },
      { opacity: 1, transform: "translateX(-7px)", offset: 0.18 },
      { opacity: 1, transform: "translateX(7px)", offset: 0.36 },
      { opacity: 1, transform: "translateX(-5px)", offset: 0.56 },
      { opacity: 1, transform: "translateX(3px)", offset: 0.72 },
      { opacity: 1, transform: "translateX(0)" },
    ],
    out: [{ opacity: 1, transform: "translateX(0)" }, { opacity: 0, transform: "translateX(-7px)" }],
  },
  wiggle: {
    in: [
      { opacity: 0, transform: "rotate(0deg)" },
      { opacity: 1, transform: "rotate(8deg)", offset: 0.22 },
      { opacity: 1, transform: "rotate(-6deg)", offset: 0.44 },
      { opacity: 1, transform: "rotate(4deg)", offset: 0.66 },
      { opacity: 1, transform: "rotate(-2deg)", offset: 0.82 },
      { opacity: 1, transform: "rotate(0deg)" },
    ],
    out: [{ opacity: 1, transform: "rotate(0deg)" }, { opacity: 0, transform: "rotate(8deg)" }],
  },
  jello: {
    in: [
      { opacity: 0, transform: "scale(1, 1)" },
      { opacity: 1, transform: "scale(1.06, 0.96)", offset: 0.28 },
      { opacity: 1, transform: "scale(0.97, 1.04)", offset: 0.52 },
      { opacity: 1, transform: "scale(1.02, 0.99)", offset: 0.76 },
      { opacity: 1, transform: "scale(1, 1)" },
    ],
    out: [{ opacity: 1, transform: "scale(1, 1)" }, { opacity: 0, transform: "scale(0.9, 0.9)" }],
  },
  flash: {
    in: [
      { opacity: 0 },
      { opacity: 0.78, offset: 0.22 },
      { opacity: 1, offset: 0.44 },
      { opacity: 0.75, offset: 0.66 },
      { opacity: 1, offset: 0.84 },
      { opacity: 1 },
    ],
    out: [{ opacity: 1 }, { opacity: 0 }],
  },
  heartBeat: {
    in: [
      { opacity: 0, transform: "scale(1)" },
      { opacity: 1, transform: "scale(1.12)", offset: 0.2 },
      { opacity: 1, transform: "scale(1)", offset: 0.38 },
      { opacity: 1, transform: "scale(1.12)", offset: 0.56 },
      { opacity: 1, transform: "scale(1)", offset: 0.72 },
      { opacity: 1, transform: "scale(1.06)", offset: 0.86 },
      { opacity: 1, transform: "scale(1)" },
    ],
    out: [{ opacity: 1, transform: "scale(1)" }, { opacity: 0, transform: "scale(0.85)" }],
  },
  glideIn: {
    in: [
      { opacity: 0, transform: "translateY(28px) scale(0.96)", filter: "blur(3px)" },
      { opacity: 0.82, transform: "translateY(4px) scale(0.995)", filter: "blur(0.5px)", offset: 0.62 },
      { opacity: 1, transform: "translateY(0) scale(1)", filter: "blur(0px)" },
    ],
    out: [{ opacity: 1, transform: "translateY(0) scale(1)", filter: "blur(0px)" }, { opacity: 0, transform: "translateY(-22px) scale(0.96)", filter: "blur(3px)" }],
  },
  glideOut: {
    in: [
      { opacity: 0, transform: "translateY(28px) scale(0.96)", filter: "blur(3px)" },
      { opacity: 0.82, transform: "translateY(4px) scale(0.995)", filter: "blur(0.5px)", offset: 0.62 },
      { opacity: 1, transform: "translateY(0) scale(1)", filter: "blur(0px)" },
    ],
    out: [{ opacity: 1, transform: "translateY(0) scale(1)", filter: "blur(0px)" }, { opacity: 0, transform: "translateY(-22px) scale(0.96)", filter: "blur(3px)" }],
  },
  dropIn: {
    in: [{ opacity: 0, transform: "translateY(-36px)", filter: "blur(4px)" }, { opacity: 1, transform: "translateY(3px)", filter: "blur(0px)", offset: 0.68 }, { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" }],
    out: [{ opacity: 1, transform: "translateY(0)", filter: "blur(0px)" }, { opacity: 0, transform: "translateY(-36px)", filter: "blur(4px)" }],
  },
  riseUp: {
    in: [{ opacity: 0, transform: "translateY(36px)", filter: "blur(4px)" }, { opacity: 1, transform: "translateY(-3px)", filter: "blur(0px)", offset: 0.68 }, { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" }],
    out: [{ opacity: 1, transform: "translateY(0)", filter: "blur(0px)" }, { opacity: 0, transform: "translateY(36px)", filter: "blur(4px)" }],
  },
  expandIn: {
    in: [{ opacity: 0, transform: "scaleX(0.86)", filter: "blur(2px)" }, { opacity: 1, transform: "scaleX(1)", filter: "blur(0px)" }],
    out: [{ opacity: 1, transform: "scaleX(1)", filter: "blur(0px)" }, { opacity: 0, transform: "scaleX(0.86)", filter: "blur(2px)" }],
  },
  collapseOut: {
    in: [{ opacity: 0, transform: "scaleX(0.86)", filter: "blur(2px)" }, { opacity: 1, transform: "scaleX(1)", filter: "blur(0px)" }],
    out: [{ opacity: 1, transform: "scaleX(1)", filter: "blur(0px)" }, { opacity: 0, transform: "scaleX(0.86)", filter: "blur(2px)" }],
  },
  expandHeight: {
    in: [{ opacity: 0, transform: "scaleY(0.5)" }, { opacity: 1, transform: "scaleY(1)" }],
    out: [{ opacity: 1, transform: "scaleY(1)" }, { opacity: 0, transform: "scaleY(0.5)" }],
  },
  fadeSlideUp: {
    in: [{ opacity: 0, transform: "translateY(20px)", filter: "blur(2.5px)" }, { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" }],
    out: [{ opacity: 1, transform: "translateY(0)", filter: "blur(0px)" }, { opacity: 0, transform: "translateY(-20px)", filter: "blur(2.5px)" }],
  },
  blurIn: {
    in: [{ opacity: 0, filter: "blur(6px)" }, { opacity: 1, filter: "blur(0px)" }],
    out: [{ opacity: 1, filter: "blur(0px)" }, { opacity: 0, filter: "blur(6px)" }],
  },
  blurOut: {
    in: [{ opacity: 0, filter: "blur(6px)" }, { opacity: 1, filter: "blur(0px)" }],
    out: [{ opacity: 1, filter: "blur(0px)" }, { opacity: 0, filter: "blur(6px)" }],
  },
  clipUp: {
    in: [
      { opacity: 0, transform: "translateY(14px)", clipPath: "inset(100% 0 0 0)", filter: "blur(2px)" },
      { opacity: 1, transform: "translateY(0)", clipPath: "inset(0 0 0 0)", filter: "blur(0px)" },
    ],
    out: [
      { opacity: 1, transform: "translateY(0)", clipPath: "inset(0 0 0 0)", filter: "blur(0px)" },
      { opacity: 0, transform: "translateY(-10px)", clipPath: "inset(0 0 100% 0)", filter: "blur(2px)" },
    ],
  },
  clipLeft: {
    in: [
      { opacity: 0, transform: "translateX(14px)", clipPath: "inset(0 100% 0 0)", filter: "blur(2px)" },
      { opacity: 1, transform: "translateX(0)", clipPath: "inset(0 0 0 0)", filter: "blur(0px)" },
    ],
    out: [
      { opacity: 1, transform: "translateX(0)", clipPath: "inset(0 0 0 0)", filter: "blur(0px)" },
      { opacity: 0, transform: "translateX(-10px)", clipPath: "inset(0 0 0 100%)", filter: "blur(2px)" },
    ],
  },
  zoomIn: {
    in: [{ opacity: 0, transform: "scale(0.82)", filter: "blur(3px)" }, { opacity: 1, transform: "scale(1.03)", filter: "blur(0px)", offset: 0.62 }, { opacity: 1, transform: "scale(1)", filter: "blur(0px)" }],
    out: [{ opacity: 1, transform: "scale(1)", filter: "blur(0px)" }, { opacity: 0, transform: "scale(0.82)", filter: "blur(3px)" }],
  },
  zoomOut: {
    in: [{ opacity: 0, transform: "scale(1.18)", filter: "blur(3px)" }, { opacity: 1, transform: "scale(1)", filter: "blur(0px)" }],
    out: [{ opacity: 1, transform: "scale(1)", filter: "blur(0px)" }, { opacity: 0, transform: "scale(1.18)", filter: "blur(3px)" }],
  },
  springBounce: {
    in: [
      { transform: "scale(0)", opacity: 0, filter: "blur(6px)" },
      { transform: "scale(1.15)", opacity: 1, filter: "blur(0px)", offset: 0.52 },
      { transform: "scale(0.91)", opacity: 1, filter: "blur(0px)", offset: 0.7 },
      { transform: "scale(1.03)", opacity: 1, filter: "blur(0px)", offset: 0.84 },
      { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
    ],
    out: [
      { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
      { transform: "scale(1.1)", opacity: 0.35, filter: "blur(0px)", offset: 0.28 },
      { transform: "scale(0)", opacity: 0, filter: "blur(4px)" },
    ],
  },
  springScale: {
    in: [
      { transform: "scale(0.55)", opacity: 0, filter: "blur(4px)" },
      { transform: "scale(1.1)", opacity: 1, filter: "blur(0px)", offset: 0.58 },
      { transform: "scale(0.95)", opacity: 1, filter: "blur(0px)", offset: 0.78 },
      { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
    ],
    out: [
      { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
      { transform: "scale(0.55)", opacity: 0, filter: "blur(4px)" },
    ],
  },
  springSlideUp: {
    in: [
      { transform: "translateY(48px)", opacity: 0, filter: "blur(4px)" },
      { transform: "translateY(-6px)", opacity: 1, filter: "blur(0px)", offset: 0.6 },
      { transform: "translateY(3px)", opacity: 1, filter: "blur(0px)", offset: 0.78 },
      { transform: "translateY(0)", opacity: 1, filter: "blur(0px)" },
    ],
    out: [
      { transform: "translateY(0)", opacity: 1, filter: "blur(0px)" },
      { transform: "translateY(-24px)", opacity: 0, filter: "blur(4px)" },
    ],
  },
  springSlideDown: {
    in: [
      { transform: "translateY(-48px)", opacity: 0, filter: "blur(4px)" },
      { transform: "translateY(6px)", opacity: 1, filter: "blur(0px)", offset: 0.6 },
      { transform: "translateY(-3px)", opacity: 1, filter: "blur(0px)", offset: 0.78 },
      { transform: "translateY(0)", opacity: 1, filter: "blur(0px)" },
    ],
    out: [
      { transform: "translateY(0)", opacity: 1, filter: "blur(0px)" },
      { transform: "translateY(24px)", opacity: 0, filter: "blur(4px)" },
    ],
  },
  morphRadius: {
    in: [
      { borderRadius: "16px", opacity: 0, filter: "blur(2px)" },
      { borderRadius: "0px", opacity: 1, filter: "blur(0px)" },
    ],
    out: [
      { borderRadius: "0px", opacity: 1, filter: "blur(0px)" },
      { borderRadius: "16px", opacity: 0, filter: "blur(2px)" },
    ],
  },
  morphCircle: {
    in: [
      { borderRadius: "50%", opacity: 0, filter: "blur(3px)" },
      { borderRadius: "8px", opacity: 1, filter: "blur(0px)", offset: 0.52 },
      { borderRadius: "12px", opacity: 1, filter: "blur(0px)" },
    ],
    out: [
      { borderRadius: "12px", opacity: 1, filter: "blur(0px)" },
      { borderRadius: "50%", opacity: 0, filter: "blur(3px)" },
    ],
  },
  press: {
    in: [{ transform: "scale(1)", opacity: 1 }, { transform: "scale(0.94)", opacity: 1 }],
    out: [{ transform: "scale(0.94)", opacity: 1 }, { transform: "scale(1)", opacity: 1 }],
  },
  modalIn: {
    in: [
      { transform: 'scale(0.88)', opacity: 0, filter: 'blur(4px)' },
      { transform: 'scale(1.03)', opacity: 1, filter: 'blur(0px)', offset: 0.62 },
      { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
    ],
    out: [
      { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'scale(0.92)', opacity: 0, filter: 'blur(3px)' },
    ],
  },
  modalOut: {
    in: [],
    out: [
      { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'scale(0.88)', opacity: 0, filter: 'blur(3px)' },
    ],
  },
  popoverIn: {
    in: [
      { transform: 'scale(0)', opacity: 0, filter: 'blur(6px)' },
      { transform: 'scale(1.06)', opacity: 1, filter: 'blur(0px)', offset: 0.68 },
      { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
    ],
    out: [
      { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'scale(0.94)', opacity: 0, filter: 'blur(2px)' },
    ],
  },
  popoverOut: {
    in: [],
    out: [
      { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'scale(0.92)', opacity: 0, filter: 'blur(3px)' },
    ],
  },
  toastIn: {
    in: [
      { transform: 'translateY(-28px)', opacity: 0, filter: 'blur(3px)' },
      { transform: 'translateY(2px)', opacity: 1, filter: 'blur(0px)', offset: 0.68 },
      { transform: 'translateY(0)', opacity: 1, filter: 'blur(0px)' },
    ],
    out: [
      { transform: 'translateY(0)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'translateY(-14px)', opacity: 0, filter: 'blur(2.5px)' },
    ],
  },
  toastOut: {
    in: [],
    out: [
      { transform: 'translateY(0)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'translateY(-14px)', opacity: 0, filter: 'blur(2.5px)' },
    ],
  },
  successCheckIn: {
    in: [
      { transform: 'scale(0.35)', opacity: 0, filter: 'blur(8px)' },
      { transform: 'scale(1.18)', opacity: 1, filter: 'blur(0px)', offset: 0.52 },
      { transform: 'scale(0.91)', opacity: 1, filter: 'blur(0px)', offset: 0.74 },
      { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
    ],
    out: [
      { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'scale(0.55)', opacity: 0, filter: 'blur(4px)' },
    ],
  },
  buttonLoading: {
    in: [
      { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
      { transform: "scale(0.95)", opacity: 0.72, filter: "blur(0px)" },
      { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
    ],
    out: [
      { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
      { transform: "scale(0.96)", opacity: 0, filter: "blur(2px)" },
    ],
  },
  tabPanelIn: {
    in: [
      { transform: 'translateX(20px)', opacity: 0, filter: 'blur(2px)' },
      { transform: 'translateX(0)', opacity: 1, filter: 'blur(0px)' },
    ],
    out: [
      { transform: 'translateX(0)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'translateX(-20px)', opacity: 0, filter: 'blur(2px)' },
    ],
  },
  tabPanelOut: {
    in: [],
    out: [
      { transform: 'translateX(0)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'translateX(-20px)', opacity: 0, filter: 'blur(2px)' },
    ],
  },
  successToast: {
    in: [
      { transform: 'translateY(28px) scale(0.88)', opacity: 0, filter: 'blur(3px)' },
      { transform: 'translateY(-2px) scale(1.02)', opacity: 1, filter: 'blur(0px)', offset: 0.58 },
      { transform: 'translateY(0) scale(1)', opacity: 1, filter: 'blur(0px)' },
    ],
    out: [
      { transform: 'translateY(0) scale(1)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'translateY(-10px) scale(0.98)', opacity: 0, filter: 'blur(2.5px)' },
    ],
  },
  checkboxCheck: {
    in: [
      { transform: 'scale(0) rotate(-50deg)', opacity: 0, filter: 'blur(4px)' },
      { transform: 'scale(1.2) rotate(0deg)', opacity: 1, filter: 'blur(0px)', offset: 0.58 },
      { transform: 'scale(1) rotate(0deg)', opacity: 1, filter: 'blur(0px)' },
    ],
    out: [
      { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'scale(0)', opacity: 0, filter: 'blur(2px)' },
    ],
  },
  dialogOut: {
    in: [],
    out: [
      { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'scale(0.93)', opacity: 0, filter: 'blur(2px)' },
    ],
  },
  drawerOutLeft: {
    in: [],
    out: [
      { transform: 'translateX(0)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'translateX(-100%)', opacity: 0, filter: 'blur(3px)' },
    ],
  },
  drawerOutRight: {
    in: [],
    out: [
      { transform: 'translateX(0)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'translateX(100%)', opacity: 0, filter: 'blur(3px)' },
    ],
  },
  drawerOutTop: {
    in: [],
    out: [
      { transform: 'translateY(0)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'translateY(-100%)', opacity: 0, filter: 'blur(3px)' },
    ],
  },
  drawerOutBottom: {
    in: [],
    out: [
      { transform: 'translateY(0)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'translateY(100%)', opacity: 0, filter: 'blur(3px)' },
    ],
  },
  menuOut: {
    in: [],
    out: [
      { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'scale(0.93)', opacity: 0, filter: 'blur(2px)' },
    ],
  },
  toastOutRight: {
    in: [],
    out: [
      { transform: 'translateX(0)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'translateX(28px)', opacity: 0, filter: 'blur(2.5px)' },
    ],
  },
  toastOutUp: {
    in: [],
    out: [
      { transform: 'translateY(0)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'translateY(-18px)', opacity: 0, filter: 'blur(2.5px)' },
    ],
  },
  dismissOut: {
    in: [],
    out: [
      { transform: 'translateY(0)', opacity: 1, filter: 'blur(0px)' },
      { transform: 'translateY(10px) scale(0.95)', opacity: 0, filter: 'blur(3px)' },
    ],
  },
  errorOut: {
    in: [],
    out: [
      { transform: "translateX(0)", opacity: 1, filter: "blur(0px)" },
      { transform: "translateX(-5px)", opacity: 1, offset: 0.18 },
      { transform: "translateX(5px)", opacity: 1, offset: 0.36 },
      { transform: "translateX(-3px)", opacity: 0.5, offset: 0.56 },
      { transform: "translateX(2px)", opacity: 0.15, filter: "blur(1px)", offset: 0.76 },
      { transform: "translateX(0)", opacity: 0, filter: "blur(2px)" },
    ],
  },
  successOut: {
    in: [],
    out: [
      { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
      { transform: "scale(1.12)", opacity: 0.35, filter: "blur(1px)", offset: 0.38 },
      { transform: "scale(0.88)", opacity: 0, filter: "blur(3px)" },
    ],
  },
  collapseWidth: {
    in: [],
    out: [
      { clipPath: "inset(0 0 0 0)", opacity: 1, filter: "blur(0px)" },
      { clipPath: "inset(0 100% 0 0)", opacity: 0, filter: "blur(2px)" },
    ],
  },
}

