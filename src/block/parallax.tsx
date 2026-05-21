import { useRef, useEffect, Children, type ReactNode, type CSSProperties } from "react"

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

export interface ParallaxProps {
  children: ReactNode
  type?: "parallax" | "parallaxFast" | "parallaxReverse" | "tiltScroll" | "scaleScroll"
  strength?: number
  className?: string
  style?: CSSProperties
}

export function Parallax({
  children,
  type = "parallax",
  strength: _strength,
  className,
  style,
}: ParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const items = Children.toArray(children)
  const count = items.length

  const strength = _strength ?? (
    type === "parallaxFast" ? 0.55 :
    type === "parallaxReverse" ? 0.35 :
    type === "tiltScroll" ? 0.3 :
    type === "scaleScroll" ? 0.4 :
    0.3
  )

  useEffect(() => {
    const container = containerRef.current
    if (!container || count === 0) return

    const mm = typeof window !== "undefined" ? window.matchMedia?.("(prefers-reduced-motion: reduce)") : null
    if (mm?.matches) return

    let ticking = false
    let scrollRoot: HTMLElement | Window | null = null

    function measureViewport() {
      if (scrollRoot && scrollRoot instanceof HTMLElement) {
        const rect = scrollRoot.getBoundingClientRect()
        return { top: rect.top, height: scrollRoot.clientHeight }
      }

      return { top: 0, height: window.innerHeight }
    }

    function update() {
      ticking = false
      const { top, height: viewH } = measureViewport()
      if (viewH === 0) return

      const rect = container!.getBoundingClientRect()
      const scrollY = top - rect.top
      const progress = scrollY / viewH

      for (let i = 0; i < count; i++) {
        const frame = container!.children[i] as HTMLElement | undefined
        const child = frame?.firstElementChild as HTMLElement | undefined
        if (!child) continue

        const relative = Math.max(-1.4, Math.min(1.4, progress - i))
        const depth = Math.abs(relative)
        child.style.willChange = "transform"

        let transform = ""
        switch (type) {
          case "parallax":
          case "parallaxFast":
            transform = `translateY(${-relative * strength * 110}px) scale(${1 - Math.min(depth, 1) * 0.025})`
            break
          case "parallaxReverse":
            transform = `translateY(${relative * strength * 110}px) scale(${1 - Math.min(depth, 1) * 0.025})`
            break
          case "tiltScroll":
            transform = `perspective(700px) translateY(${-relative * strength * 60}px) rotateX(${-relative * strength * 14}deg)`
            break
          case "scaleScroll":
            {
              const focus = 1 - Math.min(depth, 1)
              const scale = Math.min(1.12, Math.max(0.9, 0.9 + focus * (0.18 + strength * 0.08)))
              child.style.transformOrigin = "center"
              transform = `translateY(${-relative * strength * 42}px) scale(${scale.toFixed(3)})`
            }
            break
        }
        child.style.transform = transform
      }
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    function onResize() {
      const { height: h } = measureViewport()
      if (container) {
        container.style.height = `${count * h}px`
        for (let i = 0; i < count; i++) {
          const child = container.children[i] as HTMLElement | undefined
          if (child) child.style.height = `${h}px`
        }
      }
      onScroll()
    }

    scrollRoot = getScrollRoot(container) ?? window
    ;(scrollRoot as any).addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize, { passive: true })
    onResize()

    return () => {
      const target = scrollRoot as any
      if (target && typeof target.removeEventListener === "function") {
        target.removeEventListener("scroll", onScroll)
      }
      window.removeEventListener("resize", onResize)
      for (let i = 0; i < count; i++) {
        const frame = container.children[i] as HTMLElement | undefined
        const child = frame?.firstElementChild as HTMLElement | undefined
        if (child) {
          child.style.transform = ""
          child.style.transformOrigin = ""
          child.style.willChange = "auto"
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, type, strength])

  if (count === 0) return null

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "relative",
        height: `calc(${count} * 100dvh)`,
        ...style,
      }}
    >
      {items.map((child, i) => (
        <div
          key={i}
          style={{
            position: "sticky",
            top: 0,
            height: "100dvh",
            zIndex: i + 1,
            boxSizing: "border-box",
            display: "grid",
            placeItems: "center",
            overflow: "visible",
          }}
        >
          <div className="trigr-parallax-layer">
            {child}
          </div>
        </div>
      ))}
    </div>
  )
}
