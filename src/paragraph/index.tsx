import {
  forwardRef,
  useRef,
  useState,
  useCallback,
  useImperativeHandle,
  useEffect,
  useLayoutEffect,
  useMemo,
  createElement,
} from 'react'
import type { MouseEvent } from 'react'
import type { AnimateParagraphHandle, AnimateParagraphProps, AnimationProperties, AnimationTrigger, ParagraphPresetOptions } from './types'
import { useValueChange } from './useValueChange'

// ============================================================
// EASING & KEYFRAME HELPERS
// ============================================================
export const EASE_IN = 'cubic-bezier(0.0, 0.0, 0.2, 1)'
export const EASE_OUT = 'cubic-bezier(0.4, 0.0, 1, 1)'
export const EASE_IN_OUT = 'cubic-bezier(0.4, 0.0, 0.2, 1)'
export const SPRING = 'cubic-bezier(0.34, 1.56, 0.64, 1)'
export const SMOOTH = 'cubic-bezier(0.22, 1, 0.36, 1)'

function validDuration(value: unknown, fallback = 300): number {
  const n = Number(value)
  return Number.isFinite(n) && n > 0 ? n : fallback
}

const fadeIn: Keyframe[] = [
  { opacity: 0, transform: 'translateY(6px)', filter: 'blur(3px)' },
  { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
]
const fadeOut: Keyframe[] = [
  { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
  { opacity: 0, transform: 'translateY(-6px)', filter: 'blur(3px)' },
]

// ============================================================
// PRESETS (simplified, no hardcoded colors)
// ============================================================
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
  // FIXED morphBlur: proper blur transition
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
      { transform: 'translateX(-3px)', offset: 0.48 },
      { transform: 'translateX(2px)', offset: 0.72 },
      { transform: 'translateX(0)' },
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

// ============================================================
// UTILITIES
// ============================================================
const warned = new Set<string>()

// Reusable probe for text measurements
let _probe: HTMLDivElement | null = null
function getProbe(): HTMLDivElement {
  if (!_probe) {
    _probe = document.createElement('div')
    _probe.style.position = 'absolute'
    _probe.style.visibility = 'hidden'
    _probe.style.pointerEvents = 'none'
    _probe.style.whiteSpace = 'pre-wrap'
    _probe.style.width = 'max-content'
  }
  return _probe
}

function measureTextBlock(el: HTMLElement, text?: string): { width: number; height: number } {
  const probe = getProbe()
  probe.textContent = text || '\u00A0'
  const computed = getComputedStyle(el)
  probe.style.whiteSpace = computed.whiteSpace || 'pre-wrap'
  const containerWidth = el.clientWidth || el.getBoundingClientRect().width
  if (containerWidth > 0) {
    probe.style.width = `${containerWidth}px`
    probe.style.maxWidth = `${containerWidth}px`
  } else {
    probe.style.width = 'max-content'
    probe.style.maxWidth = 'none'
  }
  el.appendChild(probe)
  const rect = probe.getBoundingClientRect()
  probe.remove()
  return { width: rect.width, height: rect.height }
}

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
}

function cancelElementAnimations(el: HTMLElement) {
  el.getAnimations({ subtree: true }).forEach((animation) => animation.cancel())
}

function getScrollRoot(el: HTMLElement): HTMLElement | null {
  let parent = el.parentElement
  while (parent && parent !== document.body && parent !== document.documentElement) {
    const style = getComputedStyle(parent)
    if (/(auto|scroll|overlay)/.test(`${style.overflowY}${style.overflow}`) && parent.scrollHeight > parent.clientHeight) {
      return parent
    }
    parent = parent.parentElement
  }
  return null
}

function scrollObserverOptions(el: HTMLElement, threshold: number): IntersectionObserverInit {
  const root = getScrollRoot(el)
  const rootHeight = root?.clientHeight ?? window.innerHeight
  const clamped = Math.min(0.95, Math.max(0.05, threshold))
  const inset = Math.round(rootHeight * Math.min(0.48, clamped / 2))
  return {
    root,
    rootMargin: `-${inset}px 0px -${inset}px 0px`,
    threshold: 0,
  }
}

function runPropertyAnimation(
  el: HTMLElement,
  properties: AnimationProperties | undefined,
  options: KeyframeAnimationOptions,
): Animation | null {
  if (!properties || Object.keys(properties).length === 0) return null
  const from: Keyframe = {}
  const to: Keyframe = {}
  for (const [property, pair] of Object.entries(properties)) {
    from[property as keyof Keyframe] = pair[0] as any
    to[property as keyof Keyframe] = pair[1] as any
  }
  // Apply initial from-styles inline to prevent flash on cancel/restart
  for (const [property, value] of Object.entries(from)) {
    ;(el.style as any)[property] = value
  }
  const anim = el.animate([from, to], { ...options, fill: 'forwards' })
  anim.addEventListener('finish', () => {
    for (const [property, pair] of Object.entries(properties)) {
      ;(el.style as any)[property] = String(pair[1])
    }
  })
  anim.addEventListener('cancel', () => {
    for (const [property, value] of Object.entries(from)) {
      ;(el.style as any)[property] = value
    }
  })
  return anim
}

function resolveInlineJustify(textAlign: string): string {
  if (textAlign === 'center') return 'center'
  if (textAlign === 'right' || textAlign === 'end') return 'flex-end'
  return 'flex-start'
}

// Safe word splitting – returns array of TextNodes and <span> elements (inline, preserves flow)
function splitWordsAsElements(text: string): (Text | HTMLSpanElement)[] {
  const parts = text.match(/\S+|\s+/g) || []
  const elements: (Text | HTMLSpanElement)[] = []
  for (const part of parts) {
    if (/^\s+$/.test(part)) {
      elements.push(document.createTextNode(part))
    } else {
      const span = document.createElement('span')
      span.textContent = part
      elements.push(span)
    }
  }
  return elements
}

// Detect natural visual line breaks using a probe element
function getVisualLines(text: string, refEl: HTMLElement): string[] {
  if (text.length <= 1) return [text]
  const computed = getComputedStyle(refEl)
  const probe = document.createElement('div')
  probe.style.position = 'absolute'
  probe.style.visibility = 'hidden'
  probe.style.pointerEvents = 'none'
  probe.style.left = '0'
  probe.style.top = '0'
  probe.style.width = `${refEl.clientWidth || refEl.getBoundingClientRect().width}px`
  probe.style.whiteSpace = 'pre-wrap'
  probe.style.wordBreak = 'break-word'
  probe.style.overflowWrap = 'break-word'
  probe.style.font = computed.font
  probe.style.lineHeight = computed.lineHeight
  probe.style.letterSpacing = computed.letterSpacing
  probe.style.wordSpacing = computed.wordSpacing
  probe.style.padding = '0'
  probe.style.margin = '0'
  probe.textContent = text

  refEl.appendChild(probe)
  const textNode = probe.firstChild
  if (!textNode) { probe.remove(); return [text] }

  const lines: string[] = []
  const range = document.createRange()
  let start = 0

  while (start < text.length) {
    range.setStart(textNode, start)
    range.setEnd(textNode, text.length)
    const rects = range.getClientRects()
    if (rects.length <= 1) {
      lines.push(text.slice(start))
      break
    }
    let lo = start
    let hi = text.length
    while (lo < hi - 1) {
      const mid = Math.ceil((lo + hi) / 2)
      range.setStart(textNode, start)
      range.setEnd(textNode, mid)
      if (range.getClientRects().length > 1) {
        hi = mid
      } else {
        lo = mid
      }
    }
    lines.push(text.slice(start, lo))
    start = lo
  }

  probe.remove()
  return lines
}

// Line splitting – uses visual wrapping when a reference element is available
function splitLinesAsElements(text: string, refEl?: HTMLElement): HTMLDivElement[] {
  if (refEl && text.length > 15) {
    const visualLines = getVisualLines(text, refEl)
    if (visualLines.length > 1) {
      return visualLines.map((line) => {
        const div = document.createElement('div')
        div.textContent = line || '\u00A0'
        return div
      })
    }
  }
  const lines = text.split('\n')
  return lines.map((line) => {
    const div = document.createElement('div')
    div.textContent = line || '\u00A0'
    return div
  })
}

// ============================================================
// CUSTOM ANIMATIONS
// ============================================================

// Morph – character-by-character swap with individual char transitions
function animateMorph(
  el: HTMLElement,
  prevValue: string | undefined,
  nextValue: string | undefined,
  baseDuration: number,
  onEnd?: () => void,
) {
  const oldText = prevValue ?? ''
  const newText = nextValue ?? el.textContent ?? ''
  if (!newText) return

  if (prefersReducedMotion()) {
    const { oldEl, newEl, cleanup } = prepareStableParagraphSwap(el, oldText, newText)
    oldEl.animate(
      [{ opacity: 1 }, { opacity: 0 }],
      { duration: baseDuration / 2, easing: EASE_OUT, fill: 'forwards' },
    )
    const anim = newEl.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: baseDuration / 2, easing: SMOOTH, fill: 'forwards' },
    )
    anim.onfinish = () => { cleanup(); onEnd?.() }
    anim.oncancel = cleanup
    return anim
  }

  // Line-level morph — split old and new text into visual lines, stack
  // them in containers, and crossfade only changed lines. Unchanged lines
  // stay still, preserving paragraph layout.
  const oldLines = getVisualLines(oldText || '', el)
  const newLines = getVisualLines(newText || '', el)
  const maxLines = Math.max(oldLines.length, newLines.length)

  el.style.willChange = 'transform, opacity'
  const prevDisplay = el.style.display
  const rect = el.getBoundingClientRect()
  el.style.display = 'inline-block'
  el.style.width = `${Math.ceil(rect.width)}px`
  if (rect.height > 0) el.style.minHeight = `${Math.ceil(rect.height)}px`

  el.textContent = ''

  // Line containers — each holds old + new stacked via inline-grid
  const lines: { oldEl: HTMLSpanElement | null; newEl: HTMLSpanElement | null; same: boolean }[] = []
  for (let i = 0; i < maxLines; i++) {
    const oldLine = oldLines[i] ?? ''
    const newLine = newLines[i] ?? ''
    const same = oldLine === newLine

    const container = document.createElement('span')
    container.style.display = 'block'
    container.style.lineHeight = 'inherit'
    el.appendChild(container)

    if (same && newLine) {
      container.textContent = newLine
      lines.push({ oldEl: null, newEl: null, same: true })
      continue
    }

    // Both sides present — create grid slot for crossfade
    if (oldLine && newLine) {
      container.style.display = 'inline-grid'
      container.style.position = 'relative'
      container.style.width = '100%'

      const oldSpan = document.createElement('span')
      oldSpan.textContent = oldLine
      oldSpan.style.gridArea = '1 / 1'
      oldSpan.style.willChange = 'transform, opacity, filter'
      oldSpan.style.opacity = '1'
      container.appendChild(oldSpan)

      const newSpan = document.createElement('span')
      newSpan.textContent = newLine
      newSpan.style.gridArea = '1 / 1'
      newSpan.style.willChange = 'transform, opacity, filter'
      newSpan.style.opacity = '0'
      container.appendChild(newSpan)

      lines.push({ oldEl: oldSpan, newEl: newSpan, same: false })
    } else if (oldLine) {
      container.textContent = oldLine
      lines.push({ oldEl: null, newEl: null, same: true })
    } else if (newLine) {
      container.style.opacity = '0'
      container.textContent = newLine
      lines.push({ oldEl: null, newEl: container, same: false })
    } else {
      lines.push({ oldEl: null, newEl: null, same: true })
    }
  }

  let unfinished = 0
  const halfDur = Math.max(120, Math.min(280, baseDuration * 0.43))
  const stagger = Math.min(20, Math.max(8, halfDur * 0.12))
  let cleaned = false

  const cleanup = () => {
    if (cleaned) return
    cleaned = true
    el.textContent = newText
    el.style.willChange = 'auto'
    el.style.minHeight = ''
    el.style.width = ''
    el.style.display = prevDisplay
  }

  const track = () => {
    unfinished--
    if (unfinished <= 0) {
      cleanup()
      onEnd?.()
    }
  }

  lines.forEach((line, i) => {
    if (line.same) return
    if (line.oldEl) {
      unfinished++
      const anim = line.oldEl.animate(
        [
          { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
          { opacity: 0, transform: 'translateY(-6px)', filter: 'blur(1.5px)' },
        ],
        { duration: halfDur, delay: i * stagger, easing: EASE_OUT, fill: 'forwards' },
      )
      anim.onfinish = track
      anim.oncancel = () => { line.oldEl!.style.willChange = 'auto' }
    }
    if (line.newEl) {
      unfinished++
      const anim = line.newEl.animate(
        [
          { opacity: 0, transform: 'translateY(8px)', filter: 'blur(2px)' },
          { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
        ],
        { duration: halfDur, delay: i * stagger + halfDur * 0.3, easing: SPRING, fill: 'forwards' },
      )
      anim.onfinish = track
      anim.oncancel = () => { line.newEl!.style.willChange = 'auto' }
    }
  })

  if (unfinished <= 0) {
    cleanup()
    onEnd?.()
    return
  }

  const marker = el.animate([{ opacity: 1 }, { opacity: 1 }],
    { duration: halfDur + maxLines * stagger + halfDur + 120, fill: 'forwards' })
  marker.oncancel = cleanup
  return marker
}

// FadeSwap
function animateFadeSwap(
  el: HTMLElement,
  prevValue: string | undefined,
  nextValue: string | undefined,
  duration: number,
  onEnd?: () => void,
) {
  const oldText = prevValue ?? ''
  const newText = nextValue ?? el.textContent ?? ''
  if (!oldText && !newText) return

  const { oldEl, newEl, cleanup } = prepareStableParagraphSwap(el, oldText, newText)
  oldEl.style.opacity = '1'
  oldEl.style.transform = 'translateY(0)'
  oldEl.style.filter = 'blur(0px)'
  oldEl.style.willChange = 'transform, opacity, filter'
  newEl.style.opacity = '0'
  newEl.style.transform = 'translateY(0.16em)'
  newEl.style.filter = 'blur(1.8px)'
  newEl.style.willChange = 'transform, opacity, filter'

  oldEl.animate(
    [
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
      { opacity: 0.72, transform: 'translateY(-0.04em)', filter: 'blur(0.35px)', offset: 0.58 },
      { opacity: 0, transform: 'translateY(-0.14em)', filter: 'blur(1.5px)' },
    ],
    { duration: Math.max(150, duration * 0.42), easing: SMOOTH, fill: 'forwards' },
  )
  const anim = newEl.animate(
    [
      { opacity: 0, transform: 'translateY(0.16em)', filter: 'blur(1.8px)' },
      { opacity: 0.78, transform: 'translateY(0.025em)', filter: 'blur(0.35px)', offset: 0.55 },
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
    ],
    {
      duration: Math.max(220, duration * 0.62),
      delay: Math.min(80, Math.max(30, duration * 0.12)),
      easing: SMOOTH,
      fill: 'forwards',
    },
  )
  anim.onfinish = () => { cleanup(); onEnd?.() }
  anim.oncancel = cleanup
  return anim
}

// SlideReplace / pushLeft / pushRight
function animateSlideReplace(
  el: HTMLElement,
  prevValue: string | undefined,
  nextValue: string | undefined,
  direction: 1 | -1,
  duration: number,
  onEnd?: () => void,
) {
  const oldText = prevValue ?? ''
  const newText = nextValue ?? el.textContent ?? ''
  if (!oldText && !newText) return

  const width = el.getBoundingClientRect().width
  const { oldEl, newEl, cleanup } = prepareStableParagraphSwap(el, oldText, newText)
  newEl.style.transform = `translateX(${width * direction}px)`

  oldEl.animate(
    [{ transform: 'translateX(0)' }, { transform: `translateX(${-width * direction}px)` }],
    { duration: duration * 0.4, easing: EASE_OUT, fill: 'forwards' },
  )
  const anim = newEl.animate(
    [{ transform: `translateX(${width * direction}px)` }, { transform: 'translateX(0)' }],
    { duration: duration * 0.6, easing: EASE_IN, fill: 'forwards' },
  )
  anim.onfinish = () => { cleanup(); onEnd?.() }
  anim.oncancel = cleanup
  return anim
}

// CrossFade
function animateCrossFade(
  el: HTMLElement,
  prevValue: string | undefined,
  nextValue: string | undefined,
  duration: number,
  onEnd?: () => void,
) {
  const oldText = prevValue ?? ''
  const newText = nextValue ?? el.textContent ?? ''
  if (!oldText && !newText) return

  const { oldEl, newEl, cleanup } = prepareStableParagraphSwap(el, oldText, newText)
  oldEl.style.opacity = '1'
  newEl.style.opacity = '0'

  oldEl.animate([{ opacity: 1 }, { opacity: 0 }], { duration, easing: SMOOTH, fill: 'forwards' })
  const anim = newEl.animate([{ opacity: 0 }, { opacity: 1 }], { duration, easing: SMOOTH, fill: 'forwards' })
  anim.onfinish = () => { cleanup(); onEnd?.() }
  anim.oncancel = cleanup
  return anim
}

// FadeMask (gradient reveal) – inherits currentColor
function animateFadeMask(el: HTMLElement, duration: number, onEnd?: () => void) {
  const color = getComputedStyle(el).color
  const overlay = document.createElement('div')
  overlay.style.position = 'absolute'
  overlay.style.inset = '0'
  overlay.style.background = `linear-gradient(to bottom, ${color} 0%, transparent 100%)`
  overlay.style.pointerEvents = 'none'

  const prevPosition = el.style.position
  const prevOverflow = el.style.overflow
  el.style.position = 'relative'
  el.style.overflow = 'hidden'
  el.appendChild(overlay)

  const anim = overlay.animate(
    [{ transform: 'translateY(0%)' }, { transform: 'translateY(-100%)' }],
    { duration, easing: EASE_IN_OUT, fill: 'forwards' },
  )
  const fadeCleanup = () => {
    overlay.remove()
    el.style.position = prevPosition
    el.style.overflow = prevOverflow
  }
  anim.onfinish = () => {
    fadeCleanup()
    onEnd?.()
  }
  anim.oncancel = fadeCleanup
  return anim
}

// Strip transform/scale from keyframes for inline word animation
function stripTransforms(kfs: Keyframe[]): Keyframe[] {
  return kfs.map(k => {
    const { transform, ...rest } = k
    return rest
  })
}

// Word-level animations – uses visual line detection for paragraph-length text
function animateWords(
  el: HTMLElement,
  text: string,
  keyframes: Keyframe[],
  duration: number,
  stagger: number,
  easing: string,
  onEnd?: () => void,
): Animation | undefined {
  // For paragraph-length text, delegate to line-level animation for natural flow
  if (text.length > 30) {
    const lineDivs = splitLinesAsElements(text, el)
    if (lineDivs.length > 1) {
      el.textContent = ''
      for (const div of lineDivs) {
        div.style.willChange = 'transform, opacity'
        el.appendChild(div)
      }
      let remaining = lineDivs.length
      const maxDelay = (lineDivs.length - 1) * (stagger * 2)
      const totalDuration = duration + maxDelay
      lineDivs.forEach((div, i) => {
        const anim = div.animate(keyframes, { duration, delay: i * (stagger * 2), fill: 'forwards', easing })
        anim.onfinish = () => {
          remaining--
          if (remaining === 0) {
            lineDivs.forEach(d => d.style.willChange = 'auto')
            onEnd?.()
          }
        }
        anim.oncancel = () => { div.style.willChange = 'auto' }
      })
      return el.animate([{ opacity: 1 }, { opacity: 1 }], { duration: totalDuration, fill: 'forwards' })
    }
  }

  // For short text, do opacity-only word stagger (inline spans preserve flow)
  const wordKfs = stripTransforms(keyframes)
  const fragments = splitWordsAsElements(text)
  el.textContent = ''
  const wordSpans: HTMLSpanElement[] = []
  for (const node of fragments) {
    el.appendChild(node)
    if (node instanceof HTMLSpanElement) {
      wordSpans.push(node)
      node.style.willChange = 'opacity'
    }
  }
  if (wordSpans.length === 0) { onEnd?.(); return }

  let remaining = wordSpans.length
  const maxDelay = (wordSpans.length - 1) * stagger
  const totalDuration = duration + maxDelay
  wordSpans.forEach((span, i) => {
    const anim = span.animate(wordKfs, {
      duration,
      delay: i * stagger,
      fill: 'forwards',
      easing,
    })
    anim.onfinish = () => {
      remaining--
      if (remaining === 0) {
        wordSpans.forEach(s => s.style.willChange = 'auto')
        onEnd?.()
      }
    }
    anim.oncancel = () => { span.style.willChange = 'auto' }
  })
  return el.animate([{ opacity: 1 }, { opacity: 1 }], { duration: totalDuration, fill: 'forwards' })
}

// Line-level animations – uses visual line detection for natural paragraph flow
function animateLines(
  el: HTMLElement,
  text: string,
  keyframes: Keyframe[],
  duration: number,
  stagger: number,
  easing: string,
  onEnd?: () => void,
): Animation | undefined {
  const lineDivs = splitLinesAsElements(text, el)
  el.textContent = ''
  for (const div of lineDivs) {
    div.style.willChange = 'transform, opacity'
    el.appendChild(div)
  }
  if (lineDivs.length === 0) { onEnd?.(); return }

  let remaining = lineDivs.length
  const maxDelay = (lineDivs.length - 1) * stagger
  const totalDuration = duration + maxDelay
  lineDivs.forEach((div, i) => {
    const anim = div.animate(keyframes, { duration, delay: i * stagger, fill: 'forwards', easing })
    anim.onfinish = () => {
      remaining--
      if (remaining === 0) {
        lineDivs.forEach(d => d.style.willChange = 'auto')
        onEnd?.()
      }
    }
    anim.oncancel = () => { div.style.willChange = 'auto' }
  })
  return el.animate([{ opacity: 1 }, { opacity: 1 }], { duration: totalDuration, fill: 'forwards' })
}

// Stream – appends or replaces text with word-by-word reveal
function animateStream(
  el: HTMLElement,
  prevValue: string | undefined,
  nextValue: string | undefined,
  keyframes: Keyframe[],
  duration: number,
  stagger: number,
  easing: string,
  onEnd?: () => void,
): Animation | undefined {
  const oldText = prevValue ?? ''
  const newText = nextValue ?? el.textContent ?? ''
  if (!newText) return

  const appended = newText.startsWith(oldText) && newText.length > oldText.length
  const streamText = appended ? newText.slice(oldText.length) : newText
  if (!streamText) return

  const wordKfs = stripTransforms(keyframes)
  const parts = streamText.match(/\S+|\s+/g) || []
  if (parts.length === 0) { onEnd?.(); return }

  if (appended) {
    el.textContent = oldText
    parts.forEach((part, i) => {
      if (/^\s+$/.test(part)) {
        el.appendChild(document.createTextNode(part))
      } else {
        const span = document.createElement('span')
        span.textContent = part
        span.style.willChange = 'opacity'
        span.animate(wordKfs, { duration, delay: i * stagger, fill: 'forwards', easing })
        el.appendChild(span)
      }
    })
    const total = duration + parts.length * stagger + 50
    const marker = el.animate([{ opacity: 1 }, { opacity: 1 }], { duration: total, fill: 'forwards' })
    marker.onfinish = () => onEnd?.()
    return marker
  } else {
    return animateWords(el, newText, keyframes, duration, stagger, easing, onEnd)
  }
}

// Highlight – line-by-line background sweep (highlighter effect)
function animateHighlight(
  el: HTMLElement,
  text: string,
  duration: number,
  highlightColor: string | undefined,
  onEnd?: () => void,
  mode: "persist" | "pulse" | "erase" = "persist",
  hold = 800,
): Animation | undefined {
  const target = findTextChild(el) ?? el
  const content = text || target.textContent || ''
  if (!content) { onEnd?.(); return }

  const previous = {
    minHeight: target.style.minHeight,
    overflow: target.style.overflow,
  }
  const rect = target.getBoundingClientRect()
  if (rect.height > 0) target.style.minHeight = previous.minHeight || `${Math.ceil(rect.height)}px`
  target.style.overflow = 'visible'

  const hlColor = highlightColor ?? colorWithAlpha(getComputedStyle(target).color, 0.55)

  // Single inline span — boxDecorationBreak handles native multi-line wrapping
  target.textContent = ''
  const span = document.createElement('span')
  span.textContent = content
  span.style.display = 'inline'
  span.style.willChange = 'background-size, background-position'
  span.style.background = `linear-gradient(120deg, ${hlColor} 50%, transparent 50%)`
  span.style.backgroundSize = '200% 100%'
  span.style.backgroundRepeat = 'no-repeat'
  span.style.backgroundPosition = '100% 0'
  span.style.borderRadius = '0.18em'
  span.style.paddingInline = '0.08em'
  span.style.marginInline = '-0.08em'
  span.style.boxDecorationBreak = 'clone'
  ;(span.style as any).webkitBoxDecorationBreak = 'clone'
  target.appendChild(span)

  const drawDuration = Math.max(260, validDuration(duration, 600))
  let cleaned = false
  let cancelled = false

  const finish = () => {
    if (cleaned) return
    cleaned = true
    span.style.willChange = 'auto'
    target.style.minHeight = previous.minHeight
    target.style.overflow = previous.overflow
  }

  const abort = () => {
    if (cleaned) return
    cleaned = true
    span.style.willChange = 'auto'
    span.style.background = ''
    span.style.backgroundSize = ''
    span.style.backgroundRepeat = ''
    span.style.backgroundPosition = ''
    if (span.parentElement === target) {
      target.textContent = content
    }
    target.style.minHeight = previous.minHeight
    target.style.overflow = previous.overflow
  }

  const anim = span.animate(
    [
      { backgroundPosition: '100% 0' },
      { backgroundPosition: '0% 0' },
    ],
    { duration: drawDuration, fill: 'forwards', easing: 'cubic-bezier(0.22, 1, 0.36, 1)' },
  )
  anim.onfinish = () => {
    if (cancelled) return
    onEnd?.()

    if (mode === "pulse") {
      const fadeAnim = span.animate(
        [{ backgroundPosition: "0% 0" }, { backgroundPosition: "120% 0" }],
        { duration: Math.min(500, hold * 0.5), easing: EASE_IN, fill: "forwards", delay: hold },
      )
      fadeAnim.onfinish = () => { abort() }
      fadeAnim.oncancel = () => { abort() }
    } else if (mode === "erase") {
      const eraseAnim = span.animate(
        [{ backgroundPosition: "0% 0" }, { backgroundPosition: "120% 0" }],
        { duration: drawDuration * 0.6, easing: EASE_IN, fill: "forwards", delay: 200 },
      )
      eraseAnim.onfinish = () => { abort() }
      eraseAnim.oncancel = () => { abort() }
    } else {
      finish()
    }
  }
  anim.oncancel = () => {
    cancelled = true
    abort()
  }

  const marker = target.animate([{ opacity: 1 }, { opacity: 1 }], { duration: drawDuration + 100, fill: 'forwards' })
  marker.oncancel = abort
  return marker
}
function animateDiff(
  el: HTMLElement,
  prevValue: string | undefined,
  nextValue: string | undefined,
  duration: number,
  onEnd?: () => void,
): Animation | undefined {
  const oldText = prevValue ?? ''
  const target = findTextChild(el) ?? el
  const newText = nextValue ?? target.textContent ?? ''
  if (!newText) return

  const oldParts = oldText.match(/\S+|\s+/g) || []
  const newParts = newText.match(/\S+|\s+/g) || []
  const previous = {
    minHeight: target.style.minHeight,
    overflow: target.style.overflow,
  }
  const rect = target.getBoundingClientRect()
  if (rect.height > 0) target.style.minHeight = previous.minHeight || `${Math.ceil(rect.height)}px`
  target.style.overflow = 'visible'

  target.textContent = ''
  const diffSpans: HTMLSpanElement[] = []
  for (let i = 0; i < newParts.length; i++) {
    const part = newParts[i]
    if (/^\s+$/.test(part)) {
      target.appendChild(document.createTextNode(part))
    } else {
      const span = document.createElement('span')
      span.textContent = part
      span.style.willChange = 'transform, opacity, filter'
      span.style.display = 'inline-block'
      if (i >= oldParts.length || oldParts[i] !== part) {
        span.setAttribute('data-diff', '')
      }
      target.appendChild(span)
      if (i >= oldParts.length || oldParts[i] !== part) diffSpans.push(span)
    }
  }

  let cleaned = false
  const cleanup = () => {
    if (cleaned) return
    cleaned = true
    diffSpans.forEach(s => {
      s.style.willChange = 'auto'
      s.style.transform = ''
      s.style.filter = ''
    })
    if (diffSpans.length === 0 || diffSpans.some(s => s.parentElement === target)) {
      target.textContent = newText
    }
    target.style.minHeight = previous.minHeight
    target.style.overflow = previous.overflow
  }

  if (diffSpans.length === 0) {
    cleanup()
    onEnd?.()
    return
  }
  let remaining = diffSpans.length
  const maxDelay = (diffSpans.length - 1) * 30
  const totalDuration = duration + maxDelay
  diffSpans.forEach((span, i) => {
    const anim = span.animate(
      [
        { opacity: 0, transform: 'translateY(0.16em)', filter: 'blur(1.5px)' },
        { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
      ],
      { duration, delay: i * 30, fill: 'forwards', easing: SMOOTH },
    )
    anim.onfinish = () => {
      remaining--
      if (remaining === 0) {
        cleanup()
        onEnd?.()
      }
    }
    anim.oncancel = cleanup
  })
  const marker = target.animate([{ opacity: 1 }, { opacity: 1 }], { duration: totalDuration, fill: 'forwards' })
  marker.oncancel = cleanup
  return marker
}

// Expand/Collapse height animation
function animateHeightAuto(
  el: HTMLElement,
  prevValue: string | undefined,
  nextValue: string | undefined,
  duration: number,
  onEnd?: () => void,
): Animation | undefined {
  const oldText = prevValue ?? ''
  const newText = nextValue ?? ''
  const oldHeight = oldText ? measureTextBlock(el, oldText).height : 0
  const newHeight = newText ? measureTextBlock(el, newText).height : el.scrollHeight
  if (!oldHeight && !newHeight) { onEnd?.(); return }
  if (oldHeight === newHeight) { onEnd?.(); return }

  const { oldEl, newEl, cleanup } = prepareStableParagraphSwap(el, oldText, newText)

  // Override minHeight set by prepareStableParagraphSwap so height animation works
  el.style.minHeight = ''
  el.style.overflow = 'hidden'
  el.style.height = `${Math.ceil(oldHeight)}px`
  el.offsetHeight

  const anim = el.animate(
    [{ height: `${Math.ceil(oldHeight)}px` }, { height: `${Math.ceil(newHeight)}px` }],
    { duration, easing: EASE_IN_OUT, fill: 'forwards' },
  )

  function heightCleanup() {
    el.style.overflow = ''
    el.style.height = ''
    el.style.minHeight = ''
  }
  anim.onfinish = () => { heightCleanup(); cleanup(); onEnd?.() }
  anim.oncancel = () => { heightCleanup(); cleanup() }
  return anim
}

function animateCursorBlink(
  el: HTMLElement,
  _prevValue: string | undefined,
  _nextValue: string | undefined,
  duration: number,
  onEnd?: () => void,
): Animation | undefined {
  const cursor = document.createElement('span')
  cursor.textContent = '|'
  cursor.style.display = 'inline-block'
  cursor.style.width = '0.6em'
  cursor.style.fontWeight = '300'
  cursor.style.opacity = '1'
  el.appendChild(cursor)

  const blinkDuration = validDuration(duration, 800)

  const anim = cursor.animate(
    [{ opacity: 1 }, { opacity: 0.3 }],
    {
      duration: blinkDuration / 2,
      iterations: Infinity,
      direction: 'alternate',
      easing: 'steps(1)',
      fill: 'forwards',
    },
  )

  let cleaned = false
  const cleanup = () => {
    if (cleaned) return
    cleaned = true
    cursor.remove()
  }

  anim.oncancel = () => {
    cleanup()
    onEnd?.()
  }

  queueMicrotask(() => onEnd?.())

  return anim
}

// ─── Helpers for old/new paragraph swap ───────────────────

function colorWithAlpha(color: string, alpha: number): string {
  const m = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/)
  if (m) return `rgba(${m[1]}, ${m[2]}, ${m[3]}, ${alpha})`
  return `rgba(0, 0, 0, ${alpha})`
}

function findTextChild(el: HTMLElement): HTMLElement | null {
  for (const child of el.children) {
    if (child instanceof HTMLElement && child.childElementCount === 0 && (child.textContent?.trim() ?? '').length > 0) {
      return child
    }
  }
  return null
}

function prepareStableParagraphSwap(el: HTMLElement, oldText: string, newText: string): { oldEl: HTMLDivElement; newEl: HTMLDivElement; cleanup: () => void } {
  const containerHeight = el.getBoundingClientRect().height
  el.style.minHeight = containerHeight + 'px'
  const savedText = el.textContent ?? ""
  el.textContent = ''
  const keeper = document.createElement("span")
  keeper.textContent = oldText || "\u00A0"
  keeper.style.opacity = "0"
  keeper.style.pointerEvents = "none"
  el.appendChild(keeper)
  el.style.position = 'relative'
  const oldEl = document.createElement('div')
  const newEl = document.createElement('div')
  oldEl.textContent = oldText || '\u00A0'
  newEl.textContent = newText || '\u00A0'
  oldEl.style.position = 'absolute'
  oldEl.style.inset = '0'
  newEl.style.position = 'absolute'
  newEl.style.inset = '0'
  el.appendChild(oldEl)
  el.appendChild(newEl)
  return {
    oldEl,
    newEl,
    cleanup: () => {
      el.style.position = ''
      el.textContent = newText
    },
  }
}

function reserveStableParagraphSize(el: HTMLElement, prevText: string, nextText: string) {
  const prevSize = measureTextBlock(el, prevText)
  const nextSize = measureTextBlock(el, nextText)
  const minW = Math.max(prevSize.width, nextSize.width)
  el.dataset.motifPrevWidth = el.style.width
  el.dataset.motifPrevMinHeight = el.style.minHeight
  el.style.width = `${Math.ceil(minW)}px`
  el.style.minHeight = `${Math.ceil(prevSize.height)}px`
}

// ─── Custom animation registry ────────────────────────────

const customAnimations: Record<string, (...args: any[]) => Animation | undefined> = {
  morph: animateMorph,
  morphText: animateMorph,
  fadeSwap: animateFadeSwap,
  slideReplace: (el: HTMLElement, prev: string | undefined, text: string | undefined, duration: number, onEnd?: () => void) =>
    animateSlideReplace(el, prev, text, 1, duration, onEnd),
  crossFade: animateCrossFade,
  fadeMask: (el: HTMLElement, _prev: string | undefined, _text: string | undefined, duration: number, onEnd?: () => void) =>
    animateFadeMask(el, duration, onEnd),
  highlight: (el: HTMLElement, _prev: string | undefined, text: string | undefined, duration: number, onEnd?: () => void, highlightColor?: string, highlightMode?: "persist" | "pulse" | "erase", highlightHold?: number) =>
    animateHighlight(el, text ?? '', duration, highlightColor, onEnd, highlightMode, highlightHold),
  diffAnimate: animateDiff,
  heightAuto: animateHeightAuto,
  cursorBlink: animateCursorBlink,
}

// ─── runAnimation fallback ────────────────────────────────

function rebaseParagraphKeyframes(keyframes: Keyframe[], options?: ParagraphPresetOptions): Keyframe[] {
  if (!options) return keyframes
  const { distance, scale, blur } = options
  return keyframes.map(kf => {
    let t = (kf as any).transform as string | undefined
    let f = (kf as any).filter as string | undefined
    if (distance !== undefined && t) {
      t = t.replace(/translateY\((-?\d+(?:\.\d+)?)(px)?\)/g, (_, val) =>
        `translateY(${Math.round(Number(val) * (distance / 32))}px)`)
      t = t.replace(/translateX\((-?\d+(?:\.\d+)?)(px)?\)/g, (_, val) =>
        `translateX(${Math.round(Number(val) * (distance / 32))}px)`)
    }
    if (scale !== undefined && t) {
      t = t.replace(/scale\((-?[\d.]+(?:,\s*-?[\d.]+)?)\)/g, `scale(${scale})`)
    }
    if (blur !== undefined && f) {
      f = f.replace(/blur\((\d+)px\)/g, `blur(${blur}px)`)
    }
    return { ...kf, transform: t, filter: f }
  })
}

function runAnimation(
  el: HTMLElement,
  name: string,
  options: KeyframeAnimationOptions,
  mode: 'change' | 'single' = 'single',
  presetOptions?: ParagraphPresetOptions,
): Animation {
  el.style.willChange = 'transform, opacity, filter'
  const def = presets[name]
  if (!def) {
    if (!warned.has(name)) {
      warned.add(name)
      console.warn(`[trigr] Unknown paragraph animation "${name}"`)
    }
    const anim = el.animate([], options)
    anim.addEventListener('finish', () => { el.style.willChange = 'auto' })
    anim.addEventListener('cancel', () => { el.style.willChange = 'auto' })
    return anim
  }
  const baseFrames = mode === 'change' ? [...def.out, ...def.in] : (def.in.length ? [...def.in] : [...def.out])
  const rebased = rebaseParagraphKeyframes(baseFrames, presetOptions)
  const kf = prefersReducedMotion() ? rebased.map(({ opacity }) => ({ opacity: opacity ?? 1 })) : rebased
  const prevOrigin = el.style.transformOrigin
  const hasScaleY = rebased.some((k: any) => k.transform?.includes("scaleY"))
  if (hasScaleY) el.style.transformOrigin = "top"
  const first = kf[0]
  if (first) {
    if ((first as any).opacity !== undefined) el.style.opacity = String((first as any).opacity)
    if ((first as any).transform !== undefined) el.style.transform = String((first as any).transform)
    if ((first as any).filter !== undefined) el.style.filter = String((first as any).filter)
  }
  const anim = el.animate(kf, { ...options, fill: 'forwards' })
  anim.addEventListener('finish', () => {
    const first = kf[0]
    const last = kf[kf.length - 1]
    if (last) {
      const hadOpacity = (first as any).opacity !== undefined
      const hadFilter = (first as any).filter !== undefined
      if ((last as any).opacity !== undefined) {
        el.style.opacity = String((last as any).opacity)
      } else if (hadOpacity) {
        el.style.opacity = '1'
      }
      if ((last as any).transform !== undefined) el.style.transform = String((last as any).transform)
      if ((last as any).filter !== undefined) {
        el.style.filter = String((last as any).filter)
      } else if (hadFilter) {
        el.style.filter = 'blur(0px)'
      }
    }
    if (hasScaleY) el.style.transformOrigin = prevOrigin
    el.style.willChange = 'auto'
  })
  anim.addEventListener('cancel', () => {
    const last = kf[kf.length - 1]
    if (last) {
      if ((last as any).opacity !== undefined) el.style.opacity = String((last as any).opacity) ?? 1
      if ((last as any).transform !== undefined) el.style.transform = String((last as any).transform)
      if ((last as any).filter !== undefined) el.style.filter = String((last as any).filter)
    }
    if (hasScaleY) el.style.transformOrigin = prevOrigin
    el.style.willChange = 'auto'
  })
  return anim
}

// ─── ScrollWordReveal – uses IntersectionObserver for performance, line-based for paragraphs ─────
function setupScrollWordReveal(el: HTMLElement, text: string, threshold = 0.4, onEnd?: () => void) {
  const textChild = findTextChild(el)
  const content = text || textChild?.textContent || el.textContent || ''
  const useLines = content.length > 20

  if (textChild && !useLines) {
    const prevWidth = el.style.width
    const prevMinHeight = el.style.minHeight
    const prevOverflow = el.style.overflow

    const fragments = splitWordsAsElements(content)
    const wordSpans: HTMLSpanElement[] = fragments.filter((n): n is HTMLSpanElement => n instanceof HTMLSpanElement)

    if (wordSpans.length === 0) { onEnd?.(); return }

    const rect = el.getBoundingClientRect()
    el.style.width = prevWidth || `${Math.ceil(rect.width)}px`
    el.style.minHeight = prevMinHeight || `${Math.ceil(rect.height)}px`
    el.style.overflow = 'hidden'

    const originalInnerHTML = textChild.innerHTML

    textChild.textContent = ''
    for (const node of fragments) {
      textChild.appendChild(node)
      if (node instanceof HTMLSpanElement) {
        node.style.opacity = '0.18'
        node.style.transition = 'opacity 120ms linear'
        node.style.willChange = 'opacity'
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const word = entry.target as HTMLSpanElement
            word.style.opacity = '1'
            observer.unobserve(word)
          }
        }
      },
      scrollObserverOptions(el, threshold),
    )

    wordSpans.forEach(span => observer.observe(span))
    return () => {
      observer.disconnect()
      wordSpans.forEach(s => s.style.willChange = 'auto')
      textChild.innerHTML = originalInnerHTML
      el.style.width = prevWidth
      el.style.minHeight = prevMinHeight
      el.style.overflow = prevOverflow
      onEnd?.()
    }
  }

  // Line-based reveal for paragraph-length content (preserves children, natural flow)
  if (useLines) {
    const refEl = textChild || el
    const lineDivs = splitLinesAsElements(content, refEl)
    if (lineDivs.length > 1) {
      const prevWidth = el.style.width
      const prevMinHeight = el.style.minHeight
      const prevOverflow = el.style.overflow
      const originalInnerHTML = refEl.innerHTML

      const rect = el.getBoundingClientRect()
      el.style.width = prevWidth || `${Math.ceil(rect.width)}px`
      el.style.minHeight = prevMinHeight || `${Math.ceil(rect.height)}px`
      el.style.overflow = 'hidden'

      refEl.textContent = ''
      for (const div of lineDivs) {
        div.style.opacity = '0.18'
        div.style.transition = 'opacity 120ms linear'
        div.style.willChange = 'opacity'
        refEl.appendChild(div)
      }

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const line = entry.target as HTMLElement
              line.style.opacity = '1'
              observer.unobserve(line)
            }
          }
        },
        scrollObserverOptions(el, threshold),
      )

      lineDivs.forEach(div => observer.observe(div))
      return () => {
        observer.disconnect()
        lineDivs.forEach(d => d.style.willChange = 'auto')
        refEl.innerHTML = originalInnerHTML
        el.style.width = prevWidth
        el.style.minHeight = prevMinHeight
        el.style.overflow = prevOverflow
        onEnd?.()
      }
    }
  }

  // Word-based reveal fallback for remaining cases
  {
    const target = textChild || el
    const isTargetChild = target === textChild
    const prevWidth = el.style.width
    const prevMinHeight = el.style.minHeight
    const prevOverflow = el.style.overflow

    const fragments = splitWordsAsElements(content)
    const wordSpans: HTMLSpanElement[] = fragments.filter((n): n is HTMLSpanElement => n instanceof HTMLSpanElement)

    if (wordSpans.length === 0) { onEnd?.(); return () => {} }

    const currentRect = el.getBoundingClientRect()
    el.style.width = prevWidth || `${Math.ceil(currentRect.width)}px`
    el.style.minHeight = prevMinHeight || `${Math.ceil(currentRect.height)}px`
    el.style.overflow = 'hidden'

    const originalInnerHTML = target.innerHTML
    target.textContent = ''
    for (const node of fragments) {
      target.appendChild(node)
      if (node instanceof HTMLSpanElement) {
        node.style.opacity = '0.18'
        node.style.transition = 'opacity 120ms linear'
        node.style.willChange = 'opacity'
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const word = entry.target as HTMLSpanElement
            word.style.opacity = '1'
            observer.unobserve(word)
          }
        }
      },
      scrollObserverOptions(el, threshold),
    )

    wordSpans.forEach(span => observer.observe(span))
    return () => {
      observer.disconnect()
      wordSpans.forEach(s => s.style.willChange = 'auto')
      if (isTargetChild) {
        target.innerHTML = originalInnerHTML
      } else {
        el.textContent = ''
      }
      el.style.width = prevWidth
      el.style.minHeight = prevMinHeight
      el.style.overflow = prevOverflow
      onEnd?.()
    }
  }
}

// ─── Component ───────────────────────────────────────────
export const AnimateParagraph = forwardRef<AnimateParagraphHandle, AnimateParagraphProps>(function AnimateParagraph({
  value,
  triggers: triggersProp,
  trigger = 'change',
  animation: baseAnimation,
  scrollAnimation,
  properties,
  exitAnimation,
  show,
  unmountOnExit = true,
  highlightColor: highlightColorProp,
  highlightMode = "persist" as "persist" | "pulse" | "erase",
  highlightHold = 800,
  duration = 300,
  easing = SMOOTH,
  delay = 0,
  threshold = 0.4,
  repeat = false,
  once,
  as = 'div',
  className,
  style,
  onClick,
  onEnter,
  onExit,
  onHoverStart,
  onHoverEnd,
  onAnimationEnd: onAnimationEndProp,
  presetOptions,
  children,
}: AnimateParagraphProps, forwardedRef) {
  const ref = useRef<HTMLElement>(null)
  const animRef = useRef<Animation | null>(null)
  const propertyAnimRef = useRef<Animation | null>(null)
  const cleanupRef = useRef<(() => void) | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const runFallbackRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const prevHeightRef = useRef(0)
  const prevValRef = useRef(value)
  const runningRef = useRef(false)
  const queueRef = useRef<AnimationTrigger[]>([])
  const runIdRef = useRef(0)
  const scrollTriggeredRef = useRef(false)
  const exitAnimRef = useRef<Animation | null>(null)
  const exitKeyRef = useRef(0)

  const [playCount, setPlayCount] = useState(0)
  const [currentRun, setCurrentRun] = useState<{ id: number; source: AnimationTrigger } | null>(null)
  const [phase, setPhase] = useState<"entered" | "exiting" | "exited">(
    show !== false ? "entered" : "exited"
  )
  const { changed, prev, current: watchedCurrent } = useValueChange(value)
  const capturedPrevRef = useRef(prev)
  if (changed) capturedPrevRef.current = prev
  const shouldObserveOnce = once ?? !repeat

  const triggerConfigs = useMemo(() => {
    if (triggersProp) {
      return triggersProp.map(tc => ({
        trigger: tc.trigger as AnimationTrigger,
        animation: tc.animation,
        threshold: tc.threshold ?? threshold,
      }))
    }
    const sources = (Array.isArray(trigger) ? trigger.slice(0, 2) : [trigger]) as AnimationTrigger[]
    return sources.map(s => ({
      trigger: s,
      animation: s === 'scroll' && scrollAnimation ? scrollAnimation : baseAnimation,
      threshold,
    }))
  }, [triggersProp, trigger, baseAnimation, scrollAnimation, threshold])

  const triggerSources = useMemo(
    () => triggerConfigs.map(tc => tc.trigger),
    [triggerConfigs]
  )

  const hasTrigger = useCallback((source: AnimationTrigger) => triggerSources.includes(source), [triggerSources])
  const activeTrigger = currentRun?.source ?? triggerSources[0] ?? 'change'
  const activeConfig = triggerConfigs.find(tc => tc.trigger === activeTrigger)
  const animation = activeConfig?.animation ?? baseAnimation
  const scrollConfig = triggerConfigs.find(tc => tc.trigger === 'scroll')
  const scrollThreshold = scrollConfig?.threshold ?? threshold

  const finishRun = useCallback(() => {
    if (runFallbackRef.current !== null) {
      clearTimeout(runFallbackRef.current)
      runFallbackRef.current = null
    }
    runningRef.current = false
    animRef.current = null
    onAnimationEndProp?.()
    const next = queueRef.current.shift()
    if (next) {
      runningRef.current = true
      setCurrentRun({ id: ++runIdRef.current, source: next })
      setPlayCount((c) => c + 1)
    } else {
      setCurrentRun(null)
    }
  }, [onAnimationEndProp])

  const requestRun = useCallback((source: AnimationTrigger) => {
    if (runningRef.current) {
      if (source !== 'scroll' && queueRef.current.length < 2) queueRef.current.push(source)
      return
    }
    runningRef.current = true
    setCurrentRun({ id: ++runIdRef.current, source })
    setPlayCount((c) => c + 1)
  }, [])

  const onAnimationEnd = finishRun

  // scroll trigger (IntersectionObserver)
  useEffect(() => {
    if (!hasTrigger('scroll')) return
    const el = ref.current
    if (!el) return

    scrollTriggeredRef.current = false

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (scrollTriggeredRef.current) return
          scrollTriggeredRef.current = true
          onEnter?.()
          requestRun('scroll')
          if (shouldObserveOnce) observer.disconnect()
        } else {
          scrollTriggeredRef.current = false
          if (repeat) onExit?.()
        }
      },
      scrollObserverOptions(el, scrollThreshold),
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [hasTrigger, onEnter, onExit, repeat, requestRun, shouldObserveOnce, scrollThreshold])

  useEffect(() => {
    if (hasTrigger('change') && changed) requestRun('change')
  }, [changed, hasTrigger, requestRun])

  useEffect(() => {
    if (!hasTrigger('mount')) return
    requestRun('mount')
  }, [hasTrigger, requestRun])

  useEffect(() => {
    if (show === undefined) return

    if (show) {
      exitAnimRef.current?.cancel()
      exitAnimRef.current = null
      setPhase("entered")
      return
    }

    const key = ++exitKeyRef.current

    if (!exitAnimation) {
      setPhase("exited")
      return
    }

    const el = ref.current
    if (!el) {
      setPhase("exited")
      return
    }

    animRef.current?.cancel()
    animRef.current = null
    runningRef.current = false
    queueRef.current = []

    const motionDuration = validDuration(duration, 300)
    const def = presets[exitAnimation]
    if (!def) {
      setPhase("exited")
      return
    }

    const onExitEnd = () => {
      if (exitKeyRef.current === key) {
        setPhase("exited")
        exitAnimRef.current = null
      }
    }

    setPhase("exiting")

    const exitFrames = def.out.length ? def.out : def.in.length ? def.in : [{ opacity: 0 }]
    el.style.willChange = "transform, opacity, filter"
    const exitPrevOrigin = el.style.transformOrigin
    const exitHasScaleY = exitFrames.some((k: any) => k.transform?.includes("scaleY"))
    if (exitHasScaleY) el.style.transformOrigin = "top"
    const first = exitFrames[0]
    if (first) {
      if ((first as any).opacity !== undefined) el.style.opacity = String((first as any).opacity)
      if ((first as any).transform !== undefined) el.style.transform = String((first as any).transform)
      if ((first as any).filter !== undefined) el.style.filter = String((first as any).filter)
    }
    const kf = prefersReducedMotion() ? exitFrames.map(({ opacity }: any) => ({ opacity: opacity ?? 1 })) : exitFrames
    exitAnimRef.current = el.animate(kf, {
      duration: motionDuration,
      easing,
      fill: "forwards",
    })
    exitAnimRef.current.addEventListener("finish", () => {
      const last = exitFrames[exitFrames.length - 1]
      if (last) {
        if ((last as any).opacity !== undefined) el.style.opacity = String((last as any).opacity)
        if ((last as any).transform !== undefined) el.style.transform = String((last as any).transform)
        if ((last as any).filter !== undefined) el.style.filter = String((last as any).filter)
      }
      if (exitHasScaleY) el.style.transformOrigin = exitPrevOrigin
      el.style.willChange = "auto"
      onExitEnd()
    })
    exitAnimRef.current.addEventListener("cancel", () => {
      if (exitHasScaleY) el.style.transformOrigin = exitPrevOrigin
      el.style.willChange = "auto"
    })

    return () => {
      if (exitKeyRef.current === key) {
        exitAnimRef.current?.cancel()
        exitAnimRef.current = null
      }
    }
  }, [show, exitAnimation, duration, easing])

  // click / hover
  const handleClick = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      onClick?.(e)
      if (hasTrigger('click')) requestRun('click')
    },
    [hasTrigger, onClick, requestRun],
  )

  const handleMouseEnter = useCallback(() => {
    onHoverStart?.()
    if (hasTrigger('hover')) requestRun('hover')
  }, [hasTrigger, onHoverStart, requestRun])

  const handleMouseLeave = useCallback(() => onHoverEnd?.(), [onHoverEnd])

  // Special scrollWordReveal on scroll
  useEffect(() => {
    if (animation !== 'scrollWordReveal' || !hasTrigger('scroll')) return
    if (!currentRun || currentRun.source !== 'scroll') return
    const el = ref.current
    if (!el) return
    const text = String(value ?? el.textContent ?? '')
    if (!text) return
    const removeObserver = setupScrollWordReveal(el, text, scrollThreshold, finishRun)
    return () => removeObserver?.()
  }, [animation, currentRun, finishRun, hasTrigger, scrollThreshold, value])

  // Track previous height for expandCollapse
  if (value !== prevValRef.current && ref.current) {
    prevHeightRef.current = ref.current.offsetHeight
  }
  prevValRef.current = value

  useLayoutEffect(() => {
    if (playCount <= 0 || !currentRun || !ref.current) return
    if (animation === 'scrollWordReveal' && currentRun.source === 'scroll') return

    cancelElementAnimations(ref.current)
    animRef.current = null
    propertyAnimRef.current = null
    cleanupRef.current?.()
    if (timerRef.current !== null) clearTimeout(timerRef.current)
    if (runFallbackRef.current !== null) {
      clearTimeout(runFallbackRef.current)
      runFallbackRef.current = null
    }
    if (ref.current.dataset.motifPrevWidth !== undefined) {
      ref.current.style.width = ref.current.dataset.motifPrevWidth
      delete ref.current.dataset.motifPrevWidth
    }
    if (ref.current.dataset.motifPrevMinHeight !== undefined) {
      ref.current.style.minHeight = ref.current.dataset.motifPrevMinHeight
      delete ref.current.dataset.motifPrevMinHeight
    }

    const el = ref.current
    const current = currentRun.source === 'change' ? (watchedCurrent as string) : (value as string) ?? el.textContent ?? ''
    const text = String(current)
    const reduced = prefersReducedMotion()
    const safeDuration = validDuration(duration, 300)
    const motionDuration = reduced ? safeDuration / 2 : safeDuration
    const effectivePrev = currentRun.source === 'change' ? capturedPrevRef.current : undefined
    const isChange = currentRun.source === 'change' && effectivePrev !== undefined

    const onFinish = isChange
      ? () => {
          if (el.dataset.motifPrevWidth !== undefined) {
            el.style.width = el.dataset.motifPrevWidth
            delete el.dataset.motifPrevWidth
          }
          if (el.dataset.motifPrevMinHeight !== undefined) {
            el.style.minHeight = el.dataset.motifPrevMinHeight
            delete el.dataset.motifPrevMinHeight
          }
          finishRun()
        }
      : finishRun

    runFallbackRef.current = setTimeout(() => {
      runFallbackRef.current = null
      onFinish()
    }, Math.max(900, motionDuration * 2 + 600))

    if (isChange) {
      reserveStableParagraphSize(el, String(effectivePrev), text)
    }
    propertyAnimRef.current = runPropertyAnimation(el, properties, {
      duration: motionDuration,
      easing,
      delay,
    })

    // Try registry
    const handler = customAnimations[animation as string]
    if (handler) {
      animRef.current = handler(el, effectivePrev !== undefined ? String(effectivePrev) : undefined, text, motionDuration, onFinish, highlightColorProp, highlightMode, highlightHold) ?? null
      return
    }

    // Fallback to runAnimation with presets
    const anim = runAnimation(
      el,
      animation as string,
      { duration: motionDuration, easing, delay },
      currentRun.source === 'change' ? 'change' : 'single',
      presetOptions,
    )
    animRef.current = anim
    anim.onfinish = onFinish
  }, [animation, currentRun, delay, duration, easing, finishRun, highlightColorProp, playCount, prev, properties, value, watchedCurrent])

  useEffect(() => () => {
    animRef.current?.cancel()
    propertyAnimRef.current?.cancel()
    exitAnimRef.current?.cancel()
    cleanupRef.current?.()
    if (timerRef.current !== null) clearTimeout(timerRef.current)
    if (runFallbackRef.current !== null) clearTimeout(runFallbackRef.current)
    queueRef.current = []
  }, [])

  if (phase === "exited" && unmountOnExit !== false) {
    return null
  }

  return createElement(
    as,
    {
      ref,
      className,
      style,
      onClick: hasTrigger('click') || onClick ? handleClick : undefined,
      onMouseEnter: hasTrigger('hover') || onHoverStart ? handleMouseEnter : undefined,
      onMouseLeave: onHoverEnd ? handleMouseLeave : undefined,
    },
    children,
  )
})

export const Animate = { Paragraph: AnimateParagraph }
export default Animate
