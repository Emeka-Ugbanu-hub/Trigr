# trigr

**Content-aware animation for the web.** React components with full trigger wiring, or framework-agnostic keyframes for any stack. One import. Polished motion out of the box.

- [Live Playground](https://emeka-ugbanu-hub.github.io/Trigr/) — explore 200+ presets across all modules
- [Landing Page](https://emeka-ugbanu-hub.github.io/Trigr/example) — real-world demo showcasing every feature

```bash
npm install trigr
```

---

## How it works

trigr maps content shape to animation behavior. Use the React components for full trigger/lifecycle management, or import the keyframes directly for use with Vue, Angular, Svelte, or vanilla JS via the Web Animations API.

```tsx
import { Animate } from "trigr/text"

<Animate.Text trigger="change" animation="fadeSwap">
  <span>{label}</span>
</Animate.Text>
```

The import tells trigr what kind of content is being animated. The `trigger` prop tells trigr when the animation runs.

## Subpath imports only

Each module is an independent subpath export. There is no root `import { Animate } from "trigr"` — pick the module you need:

```tsx
import { Animate } from "trigr/text"       // Animate.Text
import { Animate } from "trigr/block"      // Animate.Block, Parallax
import { Animate } from "trigr/paragraph"  // Animate.Paragraph
import { Animate } from "trigr/list"       // Animate.List
```

This keeps the bundle small. Import only the modules you use and bundlers tree-shake the rest.

## Framework-agnostic keyframes

The animation data (presets, easing constants, keyframes) is available without React. Import the `keyframes` subpath from any framework — Vue, Angular, Svelte, vanilla JS — and use `el.animate()` directly:

```ts
// Any framework — no React required
import { presets, SPRING, SMOOTH } from "trigr/text/keyframes"
import { presets, presetCategory } from "trigr/block/keyframes"

el.animate(
  presets.fadeSwap.in,
  { duration: 400, easing: SPRING, fill: "forwards" }
)
```

| Keyframe subpath | Size | Exports |
|---|---|---|
| `trigr/text/keyframes` | 14KB | `presets`, `EASE_IN`, `EASE_OUT`, `EASE_IN_OUT`, `SPRING`, `SNAPPY`, `SMOOTH` |
| `trigr/paragraph/keyframes` | 8.7KB | `presets`, `EASE_IN`, `EASE_OUT`, `EASE_IN_OUT`, `SPRING`, `SMOOTH` |
| `trigr/list/keyframes` | 11KB | `presets`, `EASE_IN`, `EASE_OUT`, `EASE_IN_OUT`, `SPRING`, `SNAPPY`, `SMOOTH` |
| `trigr/block/keyframes` | 19KB | `presets`, `presetCategory`, `EASE_IN`, `EASE_OUT`, `EASE_IN_OUT`, `SPRING`, `SNAPPY`, `SMOOTH` |

The React components (`Animate.Text`, etc.) use these same keyframes internally — the `keyframes` subpath gives you direct access without pulling in any React code.

## Modules

Pick the wrapper that matches the content shape, not the visual style.

| Module | Import | Component | Presets | Use for |
|--------|--------|-----------|---------|---------|
| Text | `trigr/text` | `Animate.Text` | 75 | Words, labels, counters, headings, nav items, inline text, character-level effects |
| Paragraph | `trigr/paragraph` | `Animate.Paragraph` | 42 | Prose, descriptions, long copy, line and word-level paragraph effects |
| List | `trigr/list` | `Animate.List` | 55 | Repeated keyed collections: cards, buttons, rows, logos, menu items |
| Block | `trigr/block` | `Animate.Block` | 79 | One complete element: cards, panels, hero images, modals, notifications, drag, parallax, layout transitions |

## Triggers

Every module follows the same trigger system. Presets decide how the motion feels. Triggers decide when it fires.

| Trigger | Behavior | Best for |
|---------|----------|----------|
| `change` | Fires when `value` or children change | Text replacement, counters, updated cards, live data |
| `scroll` | Fires when the element reaches the viewport threshold via IntersectionObserver | Reveals, scroll entrances, parallax |
| `hover` | Fires on pointer enter. Resets on leave | Buttons, cards, labels, menu items |
| `click` | Fires on click/tap | Press feedback, ripple, shake, confirmation |
| `manual` | Fires from `ref.current.animate()` | Replay buttons, guided flows, imperative triggers |
| `mount` | Fires when the component appears | Initial entrance, conditional UI, popovers |

### Multiple triggers

Pass an array to `trigger` for two sources. Use `scrollAnimation` to set a different preset for scroll:

```tsx
<Animate.Text
  trigger={["scroll", "change"]}
  scrollAnimation="fadeIn"
  animation="fadeSwap"
  value={text}
>
  <span>{text}</span>
</Animate.Text>
```

Or use the `triggers` array API for per-trigger configuration with individual thresholds:

```tsx
<Animate.Text
  triggers={[
    { trigger: "scroll", animation: "wordFadeIn", threshold: 0.3 },
    { trigger: "change", animation: "fadeSwap" },
  ]}
  value={text}
>
  <span>{text}</span>
</Animate.Text>
```

## Core Props

| Prop | Type | Default | Purpose |
|------|------|---------|---------|
| `animation` | string | required | Main animation preset |
| `trigger` | string or string[] | `"change"` | When the animation fires |
| `triggers` | TriggerConfig[] | — | Per-trigger config (alternative to `trigger` + `scrollAnimation`) |
| `value` | string or number | — | Change-tracking value for `change` trigger |
| `duration` | number | 300–400 | Animation duration in ms |
| `easing` | string | varies | CSS easing curve (SPRING, SMOOTH, SNAPPY, EASE_IN, EASE_OUT, EASE_IN_OUT) |
| `delay` | number | 0 | Delay before animation starts |
| `threshold` | number | 0.4 | Scroll trigger threshold (0–1) |
| `properties` | object | — | Extra CSS properties to animate alongside the preset |
| `presetOptions` | object | — | Tune distance, scale, blur, stagger, rotate per preset |
| `show` | boolean | — | Lifecycle control — set `false` to trigger exit |
| `exitAnimation` | string | — | Exit preset played when `show` becomes `false` |
| `unmountOnExit` | boolean | `true` | Remove from DOM after exit animation completes |
| `as` | string | `"span"` / `"div"` | Wrapper element tag |
| `once` | boolean | `!repeat` | Only fire scroll trigger once |
| `repeat` | boolean | `false` | Allow scroll animation to replay on re-entry |
| `highlightColor` | string | auto | Color for the `highlight` preset (Text, Paragraph) |
| `highlightMode` | string | `"persist"` | Highlight behavior: `"persist"`, `"pulse"`, or `"erase"` (Text, Paragraph) |
| `highlightHold` | number | 800 | Hold duration in ms before fade-out in pulse mode |

### Properties

Animate CSS properties alongside the main preset. Each key is a CSS property mapped to a `[from, to]` tuple:

```tsx
<Animate.Text
  trigger="change"
  animation="fadeSwap"
  properties={{
    color: ["#111", "#7F77DD"],
    fontSize: ["14px", "18px"],
  }}
>
  <span>{text}</span>
</Animate.Text>
```

### presetOptions

Tune animation intensity without rewriting keyframes. Each module has its own options:

| Module | Options |
|--------|---------|
| Text | `distance`, `scale`, `blur`, `stagger` |
| Paragraph | `distance`, `scale`, `blur` |
| List | `distance`, `scale`, `blur`, `stagger` |
| Block | `distance`, `scale`, `blur`, `rotate` |

```tsx
<Animate.Text
  presetOptions={{ distance: 64, blur: 2 }}
  animation="slideReplace"
>
  <span>{text}</span>
</Animate.Text>
```

### Exit animations

Use `show` and `exitAnimation` for declarative lifecycle control:

```tsx
<Animate.Block
  show={isOpen}
  animation="slideUp"
  exitAnimation="modalOut"
  unmountOnExit
>
  <Dialog />
</Animate.Block>
```

For lists, exits fire automatically when a keyed child is removed:

```tsx
<Animate.List exitAnimation="itemFadeOut" exitStagger={30}>
  {items.map(item => <div key={item.id}>{item.name}</div>)}
</Animate.List>
```

---

## Text Module

`trigr/text` — 75 presets for short inline text. The animation operates on words, characters, or labels. Nested styled children like `<span className="stat-value">200+</span>` are preserved through text-replacing animations (odometer, ticker, typewriter, scramble, decoder).

```tsx
import { Animate } from "trigr/text"

// Animate inside a styled child — .stat-value class stays attached
<Animate.Text trigger="change" animation="odometer">
  <span className="stat-value">200+</span>
</Animate.Text>
```

| Category | Presets | Best trigger |
|----------|---------|--------------|
| Swap & replace | `fadeSwap`, `morph`, `slideReplace`, `typewriter`, `decoder`, `scramble`, `odometer`, `ticker`, `underlineDraw`, `underlineSlide`, `copyConfirm`, `brightnessShift`, `activeTabText`, `textRotate`, `gooeyMorph`, `randomLetterSwap` | `change` |
| Reveal | `fadeIn`, `letterDrop`, `textReveal`, `liftReveal`, `scatter`, `splash`, `splitReveal`, `splitSlide`, `staggerText`, `textEffect`, `scrollFanIn` | `scroll`, `mount` |
| Particle & physics | `bigBang`, `scatterAssemble`, `pixelRain`, `vortex`, `dominoFall`, `pendulum`, `centerBurst`, `gravityBounce` | `change`, `mount`, hero moments |
| Interaction | `bump`, `jitter`, `popUp`, `jello`, `shake`, `pulse`, `blink`, `wave`, `ping`, `highlight`, `boldFlash`, `blur`, `flip`, `bounce`, `dropIn`, `riseUp`, `expandIn`, `popIn`, `strikeThrough` | `hover`, `click`, `manual` |
| Exit | `fadeOut`, `fadeOutUp`, `fadeOutDown`, `slideOutUp`, `slideOutDown`, `slideOutLeft`, `slideOutRight`, `scaleOut`, `blurOut`, `clipOut`, `strikeOut`, `typeOut`, `scrambleOut`, `popOut`, `shrinkOut`, `fadeAway` | `show` lifecycle |

---

## Paragraph Module

`trigr/paragraph` — 42 presets for prose. Animations use visual-line measurement for morphText and word/line-level effects. The paragraph wrapper stays intact.

```tsx
import { Animate } from "trigr/paragraph"

<Animate.Paragraph trigger="scroll" animation="wordFadeIn" threshold={0.4}>
  <p>Motion should support reading, not interrupt it.</p>
</Animate.Paragraph>
```

| Category | Presets | Best trigger |
|----------|---------|--------------|
| Word & line reveal | `wordFadeIn`, `wordSlideUp`, `wordPop`, `lineFadeIn`, `lineSlideUp`, `streamIn`, `streamFade`, `streamSlide`, `scrollWordReveal` | `scroll`, `mount` |
| Content replacement | `fadeSwap`, `morphText`, `slideReplace`, `crossFade`, `expandCollapse`, `morphBlur`, `pushLeft`, `pushRight`, `flipPage` | `change` |
| Emphasis | `highlight`, `diffAnimate`, `flash`, `errorMessageIn` | `change`, `hover` |
| Paragraph motion | `fadeIn`, `slideUp`, `slideDown`, `slideLeft`, `slideRight`, `popIn`, `expandIn`, `zoomIn`, `pulse`, `shake`, `cursorBlink`, `heightAuto`, `fadeMask` | `scroll`, `mount`, interaction |
| Exit | `fadeOut`, `paragraphFadeOut`, `popOut`, `collapseOut`, `zoomOut`, `slideOutUp`, `slideOutDown`, `slideOutLeft`, `slideOutRight`, `collapseHeight`, `wordFadeOut`, `wordSlideOut`, `lineFadeOut`, `lineSlideOut`, `fadeMaskOut` | `show` lifecycle |

---

## List Module

`trigr/list` — 55 presets for keyed collections. Handles staggered entrances, item presence (add/remove), reorder animation, parallax, marquee, and exit animations.

```tsx
import { Animate } from "trigr/list"

<Animate.List
  trigger="scroll"
  animation="staggerSlideUp"
  stagger={80}
  exitAnimation="itemSlideOut"
  reorderAnimation="flip"
>
  {cards.map(card => <article key={card.id}>{card.title}</article>)}
</Animate.List>
```

| Category | Presets | Best trigger |
|----------|---------|--------------|
| Stagger | `staggerFadeIn`, `staggerSlideUp`, `staggerSlideLeft`, `staggerZoomIn`, `staggerPopIn`, `staggerBlurIn`, `stackIn` | `scroll`, `mount` |
| Cascade | `wordCascade`, `wordWave`, `wordDrop`, `wordFadeIn` | `mount`, compact collections |
| Presence | `itemFadeIn`, `itemSlideIn`, `itemPopIn`, `itemBounceIn`, `itemFadeOut`, `itemSlideOut`, `itemCollapseOut` | add/remove |
| Entrance | `fadeIn`, `slideIn`, `slideInLeft`, `slideInRight`, `popIn`, `bounceIn`, `expandIn`, `flipIn`, `glideIn`, `feedAppend`, `filterIn`, `emptyToList`, `insertItem`, `emptyStateToList`, `selectionPulse` | `scroll`, `mount` |
| Marquee | `marquee`, `marqueeReverse`, `marqueeFade` | logos, continuous strips |
| Parallax | `parallax`, `parallaxFast`, `parallaxReverse`, `tiltScroll`, `scaleScroll`, `parallaxStagger` | scroll depth |
| Reorder | `flip`, `smooth`, `spring`, `none` | key position changes |
| Exit | `fadeOut`, `slideOut`, `slideOutLeft`, `slideOutRight`, `popOut`, `bounceOut`, `collapseOut`, `flipOut`, `glideOut`, `itemSlideOutLeft`, `itemSlideOutRight`, `itemScaleOut`, `itemPopOut`, `itemBlurOut`, `itemDismissOut`, `rowCollapseOut`, `tagRemove`, `cardRemove` | child removal |

---

## Block Module

`trigr/block` — 79 presets for single elements. Supports entrance/exit, scroll-linked parallax, hover states, cursor tracking, overlays, drag gesture, and shared layout transitions.

```tsx
import { Animate } from "trigr/block"

<Animate.Block trigger="scroll" animation="slideUp" threshold={0.5}>
  <section className="card">Analytics</section>
</Animate.Block>
```

### Drag

```tsx
<Animate.Block
  drag="x"
  dragThreshold={100}
  dragElastic={0.6}
  onDragEnd={(info) => {
    if (info.dismissed) handleDismiss()
  }}
>
  <div className="swipeable-card" />
</Animate.Block>
```

### Shared layout

```tsx
<Animate.Block layoutId="card" layoutTransition={{ duration: 400, easing: "ease-in-out" }}>
  {expanded ? <ExpandedCard /> : <CompactCard />}
</Animate.Block>
```

### Parallax

```tsx
import { Parallax } from "trigr/block"

<Parallax type="parallaxFast" strength={0.4}>
  <img src={hero} alt="" />
</Parallax>
```

| Category | Presets | Best trigger |
|----------|---------|--------------|
| Entrance | `fadeIn`, `slideUp`, `slideDown`, `slideLeft`, `slideRight`, `scaleIn`, `popIn`, `rotateIn`, `flipX`, `flipY`, `bounceIn`, `blurIn`, `clipUp`, `clipLeft`, `zoomIn`, `glideIn`, `dropIn`, `riseUp`, `expandIn`, `expandHeight`, `fadeSlideUp`, `springBounce`, `springScale`, `springSlideUp`, `springSlideDown`, `morphRadius`, `morphCircle`, `fadeSwap` | `scroll`, `mount`, `change` |
| Scroll-linked | `parallax`, `parallaxFast`, `parallaxReverse`, `tiltScroll`, `scaleScroll` | `scroll` |
| Hover & cursor | `lift`, `sink`, `grow`, `glow`, `shadow`, `borderPop`, `tilt`, `tilt3D`, `rotate3D`, `depth`, `float` | `hover` |
| Feedback & overlay | `press`, `ripple`, `burst`, `shake`, `wiggle`, `jello`, `flash`, `heartBeat`, `pulse`, `spin`, `ping`, `shimmer` | `click`, `manual` |
| UI patterns | `modalIn`, `modalOut`, `popoverIn`, `popoverOut`, `toastIn`, `toastOut`, `successCheckIn`, `buttonLoading`, `focusRingPulse`, `tabPanelIn`, `tabPanelOut`, `successToast`, `checkboxCheck` | `mount`, `show`, `click` |
| Exit | `fadeOut`, `scaleOut`, `popOut`, `rotateOut`, `bounceOut`, `glideOut`, `collapseOut`, `blurOut`, `zoomOut`, `dialogOut`, `drawerOutLeft`, `drawerOutRight`, `drawerOutTop`, `drawerOutBottom`, `menuOut`, `toastOutRight`, `toastOutUp`, `collapseWidth`, `dismissOut`, `errorOut`, `successOut` | `show` lifecycle |

---

## Easing

All modules export named easing constants:

| Constant | Curve | Best for |
|----------|-------|----------|
| `SPRING` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Entrances, pop, bounce |
| `SMOOTH` | `cubic-bezier(0.22, 1, 0.36, 1)` | Reveals, scroll-triggered, paragraph |
| `SNAPPY` | `cubic-bezier(0.2, 0, 0, 1)` | Hover, click, instant feedback |
| `EASE_IN` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Exits, dismissals |
| `EASE_OUT` | `cubic-bezier(0.4, 0.0, 1, 1)` | Exits |
| `EASE_IN_OUT` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Neutral transitions, reorder |

---

## Quick Reference

| Goal | Use |
|------|-----|
| A word changes to another | `Animate.Text` with `fadeSwap`, `morph`, `typewriter`, or `slideReplace` |
| A paragraph reveals on scroll | `Animate.Paragraph` with `wordFadeIn`, `lineSlideUp`, or `scrollWordReveal` |
| Cards stagger in | `Animate.List` with `staggerSlideUp` or `staggerFadeIn` |
| Dashboard rows reorder | `Animate.List` with `reorderAnimation="flip"` |
| Logo strip loops | `Animate.List` with `marquee` |
| A group of cards moves with scroll | `Animate.List` with `parallaxStagger` or `tiltScroll` |
| One hero image moves with scroll | `Animate.Block` with `parallax` |
| A pricing card lifts on hover | `Animate.Block` with `lift` or `tilt3D` |
| A button presses on click | `Animate.Block` with `press` or `ripple` |
| A modal animates in and out | `Animate.Block` with `modalIn` / `modalOut` |
| A notification toasts and dismisses | `Animate.Block` with `toastIn` / `toastOut` |
| A swipeable card | `Animate.Block` with `drag="x"` |
| Shared element transitions | `Animate.Block` with `layoutId` |

---

## Works everywhere

- **React/Next.js**: Full components (`Animate.Text`, `.Paragraph`, `.List`, `.Block`) with trigger wiring, lifecycle management, and exit animations.
- **Vue, Angular, Svelte, vanilla JS**: Import the keyframes and call `el.animate()` directly.
- **TypeScript**: Fully typed — every preset, easing, and keyframe object has IDE autocomplete.
- **Tree-shakeable**: Each module is independent. Import only what you use.
- **Reduced motion**: Detects `prefers-reduced-motion: reduce` and degrades to opacity-only transitions.
- **Layout stable**: All animations use composited properties (transform, opacity, filter).

---

## License

MIT
