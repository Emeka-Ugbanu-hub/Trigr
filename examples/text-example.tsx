import { useState } from "react"
import { Animate } from "../src/text"
import type { AnimationPreset } from "../src/text/types"

type CardDef = {
  name: AnimationPreset
  as: keyof JSX.IntrinsicElements
  props?: Record<string, unknown>
  code: string
  initial: string | number
  toggle: (prev: string | number) => string | number
}

const presets: CardDef[] = [
  { name: "fadeSwap", as: "h2", initial: "hello", toggle: (p) => (p === "hello" ? "world" : "hello"), code: '<Animate.Text value={word} animation="fadeSwap" as="h2">{word}</Animate.Text>' },
  { name: "slideUp", as: "div", initial: 0, toggle: (p) => (p as number) + 1, code: '<Animate.Text value={count} animation="slideUp" as="div">{count}</Animate.Text>' },
  { name: "slideDown", as: "p", props: { duration: 500, easing: "ease-in-out" }, initial: "hello", toggle: (p) => (p === "hello" ? "world" : "hello"), code: '<Animate.Text value={word} animation="slideDown" as="p" duration={500} easing="ease-in-out">{word}</Animate.Text>' },
  { name: "morphNumber", as: "span", props: { duration: 600, easing: "spring" }, initial: 0, toggle: (p) => (p as number) + 1, code: '<Animate.Text value={count} animation="morphNumber" duration={600} easing="spring">{count}</Animate.Text>' },
  { name: "highlight", as: "strong", props: { delay: 100 }, initial: "hello", toggle: (p) => (p === "hello" ? "world" : "hello"), code: '<Animate.Text value={word} animation="highlight" as="strong" delay={100}>{word}</Animate.Text>' },
  { name: "bump", as: "span", props: { duration: 400 }, initial: 0, toggle: (p) => (p as number) + 1, code: '<Animate.Text value={count} animation="bump" duration={400}>{count}</Animate.Text>' },
  { name: "blur", as: "div", props: { duration: 400, easing: "ease-out" }, initial: "hello", toggle: (p) => (p === "hello" ? "world" : "hello"), code: '<Animate.Text value={word} animation="blur" as="div" duration={400} easing="ease-out">{word}</Animate.Text>' },
  { name: "decoder", as: "span", props: { duration: 800 }, initial: "REACT", toggle: (p) => (p === "REACT" ? "TRIGR" : "REACT"), code: '<Animate.Text value={word} animation="decoder" duration={800}>{word}</Animate.Text>' },
  { name: "fadeAway", as: "span", props: { duration: 800 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="fadeAway" duration={800}>{word}</Animate.Text>' },
  { name: "fadeIn", as: "span", props: { duration: 800 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="fadeIn" duration={800}>{word}</Animate.Text>' },
  { name: "slideReplace", as: "span", props: { duration: 500 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="slideReplace" duration={500}>{word}</Animate.Text>' },
  { name: "letterDrop", as: "span", props: { duration: 700 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="letterDrop" duration={700}>{word}</Animate.Text>' },
  { name: "glitch", as: "h2", props: { duration: 500 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="glitch" duration={500} as="h2">{word}</Animate.Text>' },
  { name: "textReveal", as: "span", props: { duration: 600 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="textReveal" duration={600}>{word}</Animate.Text>' },
  { name: "liftReveal", as: "span", props: { duration: 500 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="liftReveal" duration={500}>{word}</Animate.Text>' },
  { name: "scatter", as: "span", props: { duration: 600 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="scatter" duration={600}>{word}</Animate.Text>' },
  { name: "typewriter", as: "span", props: { duration: 1000 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="typewriter" duration={1000}>{word}</Animate.Text>' },
  { name: "splash", as: "span", props: { duration: 600 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="splash" duration={600}>{word}</Animate.Text>' },
  { name: "jitter", as: "span", props: { duration: 500 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="jitter" duration={500}>{word}</Animate.Text>' },
  { name: "popUp", as: "span", props: { duration: 400 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="popUp" duration={400}>{word}</Animate.Text>' },
  { name: "jello", as: "span", props: { duration: 600 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="jello" duration={600}>{word}</Animate.Text>' },
  { name: "scramble", as: "span", props: { duration: 400 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="scramble" duration={400}>{word}</Animate.Text>' },
  { name: "flip", as: "span", props: { duration: 600 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="flip" duration={600}>{word}</Animate.Text>' },
  { name: "bounce", as: "span", props: { duration: 500 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="bounce" duration={500}>{word}</Animate.Text>' },
  { name: "shake", as: "span", props: { duration: 400 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="shake" duration={400}>{word}</Animate.Text>' },
  { name: "pulse", as: "span", props: { duration: 1000 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="pulse" duration={1000}>{word}</Animate.Text>' },
  { name: "blink", as: "span", props: { duration: 600 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="blink" duration={600}>{word}</Animate.Text>' },
  { name: "wave", as: "span", props: { duration: 600 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="wave" duration={600}>{word}</Animate.Text>' },
  { name: "ping", as: "span", props: { duration: 300 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="ping" duration={300}>{word}</Animate.Text>' },
  { name: "popIn", as: "span", props: { duration: 500 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="popIn" duration={500}>{word}</Animate.Text>' },
  { name: "dropIn", as: "span", props: { duration: 500 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="dropIn" duration={500}>{word}</Animate.Text>' },
  { name: "riseUp", as: "span", props: { duration: 400 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="riseUp" duration={400}>{word}</Animate.Text>' },
  { name: "expandIn", as: "span", props: { duration: 400 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="expandIn" duration={400}>{word}</Animate.Text>' },
  { name: "shrinkOut", as: "span", props: { duration: 300 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="shrinkOut" duration={300}>{word}</Animate.Text>' },
  { name: "boldFlash", as: "span", props: { duration: 300 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="boldFlash" duration={300}>{word}</Animate.Text>' },
  { name: "strikeThrough", as: "span", props: { duration: 600 }, initial: "HELLO", toggle: (p) => (p === "HELLO" ? "WORLD" : "HELLO"), code: '<Animate.Text value={word} animation="strikeThrough" duration={600}>{word}</Animate.Text>' },
  { name: "odometer", as: "span", props: { duration: 500 }, initial: 1234, toggle: (p) => (p === 1234 ? 5678 : 1234), code: '<Animate.Text value={n} animation="odometer" duration={500}>{n}</Animate.Text>' },
  { name: "ticker", as: "span", props: { duration: 400 }, initial: 1234, toggle: (p) => (p === 1234 ? 5678 : 1234), code: '<Animate.Text value={n} animation="ticker" duration={400}>{n}</Animate.Text>' },
]

function Card({
  name,
  as,
  props,
  code,
  initial,
  toggle,
}: {
  name: AnimationPreset
  as: keyof JSX.IntrinsicElements
  props?: Record<string, unknown>
  code: string
  initial: string | number
  toggle: (prev: string | number) => string | number
}) {
  const [value, setValue] = useState(initial)
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e2e8f0",
        borderRadius: 8,
        padding: "24px 24px 16px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <span style={{ fontFamily: "monospace", fontSize: 12, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em" }}>
        {name}
      </span>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "32px 0", fontSize: 28, fontWeight: 600 }}>
        <Animate.Text value={value} animation={name} as={as} {...props}>
          {value}
        </Animate.Text>
      </div>
      <button
        onClick={() => setValue((v) => toggle(v))}
        style={{
          padding: "8px 16px",
          border: "1px solid #cbd5e1",
          borderRadius: 6,
          background: "#f8fafc",
          cursor: "pointer",
          fontSize: 14,
          fontFamily: "monospace",
          color: "#475569",
        }}
      >
        trigger
      </button>
      <pre
        style={{
          fontFamily: "monospace",
          fontSize: 11,
          color: "#94a3b8",
          background: "#f8fafc",
          padding: "8px 12px",
          borderRadius: 4,
          margin: 0,
          overflow: "auto",
          lineHeight: 1.5,
        }}
      >
        {code}
      </pre>
    </div>
  )
}

export function TextExample() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "max(16px, 2vw)" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "max(16px, 1.5vw)",
        }}
      >
        {presets.map((p) => (
          <Card key={p.name} {...p} />
        ))}
      </div>
    </div>
  )
}
