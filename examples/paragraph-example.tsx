import { useState } from "react"
import { Animate } from "../src/paragraph"
import type { ParagraphPreset } from "../src/paragraph/types"

const categories: { label: string; presets: ParagraphPreset[] }[] = [
  {
    label: "Fade",
    presets: ["fadeIn", "fadeOut", "fadeSwap", "fadeMask"],
  },
  {
    label: "Slide",
    presets: ["slideUp", "slideDown", "slideLeft", "slideRight", "slideReplace"],
  },
  {
    label: "Scale",
    presets: ["popIn", "popOut", "expandIn", "collapseOut", "zoomIn", "zoomOut"],
  },
  {
    label: "Word level",
    presets: ["wordFadeIn", "wordSlideUp", "wordPop"],
  },
  {
    label: "Line level",
    presets: ["lineFadeIn", "lineSlideUp"],
  },
  {
    label: "Streaming",
    presets: ["streamIn", "streamFade", "streamSlide", "cursorBlink"],
  },
  {
    label: "Height & layout",
    presets: ["expandCollapse", "heightAuto", "crossFade"],
  },
  {
    label: "Attention",
    presets: ["pulse", "shake", "highlight", "flash"],
  },
  {
    label: "Page transitions",
    presets: ["pushLeft", "pushRight", "flipPage", "morphBlur", "diffAnimate"],
  },
]

const sampleTexts = [
  "The quick brown fox jumps over the lazy dog.",
  "Hello world — this is a paragraph animation demo.",
  "Short text.",
  "Line one\nLine two\nLine three with more words",
]

export function ParagraphExample() {
  const [text, setText] = useState(sampleTexts[0])
  const [animation, setAnimation] = useState<ParagraphPreset>("fadeIn")
  const [duration, setDuration] = useState(400)
  const [trigger, setTrigger] = useState(0)

  function applyAndTrigger(newText: string) {
    setText(newText)
  }

  function triggerAnimation() {
    setTrigger((t) => t + 1)
  }

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ fontSize: 20, fontWeight: 600, marginBottom: 24, color: "#1e293b" }}>
        trigr / paragraph
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 24 }}>
        <textarea
          value={text}
          onChange={(e) => applyAndTrigger(e.target.value)}
          rows={3}
          style={{
            padding: 12,
            fontSize: 14,
            border: "1px solid #cbd5e1",
            borderRadius: 6,
            fontFamily: "monospace",
            resize: "vertical",
          }}
        />

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <select
            value={animation}
            onChange={(e) => setAnimation(e.target.value as ParagraphPreset)}
            style={{
              padding: "8px 12px",
              border: "1px solid #cbd5e1",
              borderRadius: 6,
              fontSize: 13,
              fontFamily: "monospace",
              background: "#fff",
            }}
          >
            {categories.map((cat) => (
              <optgroup key={cat.label} label={cat.label}>
                {cat.presets.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </optgroup>
            ))}
          </select>

          <label style={{ fontSize: 13, color: "#475569", display: "flex", alignItems: "center", gap: 6 }}>
            ms
            <input
              type="range"
              min={100}
              max={1200}
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              style={{ width: 100 }}
            />
            {duration}
          </label>

          <button
            onClick={triggerAnimation}
            style={{
              padding: "8px 20px",
              border: "1px solid #cbd5e1",
              borderRadius: 6,
              background: "#f8fafc",
              cursor: "pointer",
              fontSize: 13,
              fontFamily: "monospace",
              color: "#475569",
            }}
          >
            trigger
          </button>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {sampleTexts.map((t) => (
            <button
              key={t}
              onClick={() => { setText(t); setAnimation(animation) }}
              style={{
                padding: "4px 10px",
                border: "1px solid #e2e8f0",
                borderRadius: 4,
                background: text === t ? "#e2e8f0" : "#fff",
                cursor: "pointer",
                fontSize: 11,
                fontFamily: "monospace",
                color: "#64748b",
                maxWidth: 200,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          border: "1px solid #e2e8f0",
          borderRadius: 8,
          padding: "32px 24px",
          background: "#fff",
          fontSize: 18,
          lineHeight: 1.6,
          color: "#1e293b",
          minHeight: 80,
        }}
        key={`${trigger}`}
      >
        <Animate.Paragraph value={text} animation={animation} duration={duration}>
          {text}
        </Animate.Paragraph>
      </div>

      <div style={{ marginTop: 16, fontSize: 12, color: "#94a3b8", fontFamily: "monospace" }}>
        &lt;Animate.Paragraph value=&#123;text&#125; animation=&#34;{animation}&#34; duration=&#123;{duration}&#125;&gt;
      </div>
    </div>
  )
}
