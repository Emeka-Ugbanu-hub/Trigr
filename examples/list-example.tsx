import { useRef, useState, type CSSProperties, type ReactNode } from "react"
import { Animate } from "../src/list"
import type { AnimateListHandle } from "../src/list/types"

const words = ["trigr", "collection", "animation", "system", "smooth"]
const logos = ["Stripe", "Linear", "Vercel", "Figma", "Notion", "GitHub"]

const dashboardRows = [
  { id: "revenue", title: "Revenue", desc: "$48.2k this month", meta: "+12.4%" },
  { id: "activation", title: "Activation", desc: "1,284 completed flows", meta: "+8.1%" },
  { id: "support", title: "Support", desc: "18 open conversations", meta: "Live" },
]

const cards = [
  { id: "launch", title: "Launch checklist", desc: "Tasks for release readiness" },
  { id: "qa", title: "Motion QA", desc: "Verify easing, timing, and reset states" },
  { id: "notes", title: "Release notes", desc: "Summarize changes for developers" },
]

export function ListExample() {
  return (
    <div style={{ padding: 24, display: "grid", gap: 28 }}>
      <h1 style={{ margin: 0, fontSize: 28 }}>trigr/list collection examples</h1>
      <WordsDemo />
      <CardsDemo />
      <ButtonsDemo />
      <DashboardDemo />
      <LogosDemo />
      <ParallaxDemo />
      <SortableDemo />
    </div>
  )
}

function WordsDemo() {
  return (
    <Section title="Words — cascade">
      <Animate.List animation="wordCascade" stagger={60} trigger="mount" as="div" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {words.map((word) => <Chip key={word}>{word}</Chip>)}
      </Animate.List>
    </Section>
  )
}

function CardsDemo() {
  return (
    <Section title="Cards — staggered reveal on scroll">
      <div style={{ minHeight: 180 }}>
        <Animate.List animation="staggerSlideUp" trigger="scroll" threshold={0.55} stagger={90} as="div" style={{ display: "grid", gap: 12 }}>
          {cards.map((card) => (
            <DemoCard key={card.id} title={card.title} desc={card.desc} />
          ))}
        </Animate.List>
      </div>
    </Section>
  )
}

function ButtonsDemo() {
  return (
    <Section title="Buttons — hover collection">
      <Animate.List animation="staggerPopIn" trigger="hover" stagger={55} as="div" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {["Overview", "Projects", "Reports", "Settings"].map((item) => (
          <button key={item} style={buttonStyle}>{item}</button>
        ))}
      </Animate.List>
    </Section>
  )
}

function DashboardDemo() {
  return (
    <Section title="Dashboard rows — presence and reorder">
      <Animate.List animation="itemSlideIn" exitAnimation="itemCollapseOut" reorder="smooth" stagger={60} as="div" style={{ display: "grid", gap: 8 }}>
        {dashboardRows.map((row) => (
          <DashboardRow key={row.id} row={row} />
        ))}
      </Animate.List>
    </Section>
  )
}

function LogosDemo() {
  return (
    <Section title="Logos — continuous marquee">
      <Animate.List animation="marqueeFade" speed={60} as="div">
        {logos.map((logo) => (
          <div key={logo} style={{ padding: "8px 14px", border: "1px solid #ddd", borderRadius: 999, background: "#fff" }}>
            {logo}
          </div>
        ))}
      </Animate.List>
    </Section>
  )
}

function ParallaxDemo() {
  return (
    <Section title="Cards — collection parallax">
      <div style={{ height: 420, overflowY: "auto", border: "1px solid #ddd", borderRadius: 12, background: "#fff" }}>
        <div style={{ height: 260, display: "grid", placeItems: "center" }}>Scroll</div>
        <Animate.List animation="parallaxStagger" trigger="scroll" speed={0.5} as="div" style={{ minHeight: 760, padding: "48px 16px" }}>
          {cards.map((card) => (
            <DemoCard key={card.id} title={card.title} desc={card.desc} />
          ))}
        </Animate.List>
      </div>
    </Section>
  )
}

function SortableDemo() {
  const [items, setItems] = useState(["Alpha", "Beta", "Gamma", "Delta"])
  const ref = useRef<AnimateListHandle>(null)

  function shuffle() {
    const next = [...items]
    for (let i = next.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[next[i], next[j]] = [next[j], next[i]]
    }
    setItems(next)
  }

  return (
    <Section title="Sortable — FLIP reorder">
      <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
        <button onClick={shuffle}>Shuffle</button>
        <button onClick={() => ref.current?.animate()}>Manual fire</button>
      </div>
      <Animate.List
        ref={ref}
        trigger="manual"
        animation="staggerFadeIn"
        reorder="flip"
        as="div"
        style={{ display: "grid", gap: 6 }}
      >
        {items.map((item) => (
          <div key={item} style={{ background: "#fff", border: "1px solid #ddd", borderRadius: 8, padding: "8px 12px" }}>
            {item}
          </div>
        ))}
      </Animate.List>
    </Section>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section style={{ border: "1px solid #e4e4e4", borderRadius: 12, padding: 16, background: "#fafafa" }}>
      <h2 style={{ margin: "0 0 12px", fontSize: 16 }}>{title}</h2>
      {children}
    </section>
  )
}

function DemoCard({ title, desc }: { title: string; desc: string }) {
  return (
    <article style={{ border: "1px solid #ddd", borderRadius: 10, padding: 14, background: "#fff" }}>
      <strong>{title}</strong>
      <p style={{ margin: "6px 0 0", color: "#666", fontSize: 13 }}>{desc}</p>
    </article>
  )
}

function DashboardRow({ row }: { row: typeof dashboardRows[number] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 12, alignItems: "center", border: "1px solid #ddd", borderRadius: 10, padding: 12, background: "#fff" }}>
      <div>
        <strong>{row.title}</strong>
        <p style={{ margin: "4px 0 0", color: "#666", fontSize: 13 }}>{row.desc}</p>
      </div>
      <span style={{ fontSize: 12, fontWeight: 700 }}>{row.meta}</span>
    </div>
  )
}

function Chip({ children }: { children: ReactNode }) {
  return <span style={{ border: "1px solid #ddd", borderRadius: 999, padding: "6px 10px", background: "#fff" }}>{children}</span>
}

const buttonStyle = {
  border: "1px solid #ddd",
  borderRadius: 999,
  padding: "9px 14px",
  background: "#fff",
  fontWeight: 700,
} satisfies CSSProperties
