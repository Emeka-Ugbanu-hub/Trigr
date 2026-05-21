# trigr

Wrap. Watch. Animate.

`trigr` is a React animation package for content-aware UI motion. You wrap the thing you want to animate, choose when the animation should fire, and trigr handles the trigger wiring, restart behavior, cleanup, reduced motion behavior, and preset-specific animation details.

The core mental model is intentionally small:

```tsx
import { Animate } from "trigr/text"

<Animate.Text trigger="change" value={label} animation="fadeSwap">
  <span>{label}</span>
</Animate.Text>
```

The import tells trigr what kind of content is being animated. The `trigger` prop tells trigr when the animation runs.

## Installation

```bash
npm install trigr
```

Peer dependencies:

```json
{
  "react": ">=18.0.0",
  "react-dom": ">=18.0.0"
}
```

## Modules

trigr is split by content type. Pick the module based on the shape of the thing being animated, not only how it looks.

| Module | Import | Component | Use for |
|--------|--------|-----------|---------|
| Text | `trigr/text` | `Animate.Text` | Words, labels, counters, headings, inline text, nav items |
| Paragraph | `trigr/paragraph` | `Animate.Paragraph` | Prose, descriptions, long copy, line and word-level paragraph effects |
| List | `trigr/list` | `Animate.List` | Any repeated keyed collection: cards, buttons, rows, logos, menu items |
| Block | `trigr/block` | `Animate.Block` | One complete element: cards, panels, hero images, modals, notifications |

## Triggers

Every module follows the same trigger idea.

| Trigger | What it means | Best for |
|---------|---------------|----------|
| `change` | Runs when `value` changes | Text replacement, counters, updated cards, live data |
| `scroll` | Runs when the element reaches the threshold | Reveals, scroll entrances, parallax, reading experiences |
| `hover` | Runs when the user hovers | Buttons, cards, labels, menu items |
| `click` | Runs on click/tap | Press feedback, ripple, shake, confirmation |
| `manual` | Runs from `ref.current.animate()` | Replay buttons, guided flows, imperative triggers |
| `mount` | Runs when the component appears | Initial entrance, conditional UI, popovers, lists |

### Multiple Triggers

A component can accept up to two triggers. Each trigger has its own listener and cleanup. If both fire at the same time, trigr queues the animations so they do not run simultaneously on the same element.

```tsx
import { Animate } from "trigr/text"

<Animate.Text
  trigger={["scroll", "change"]}
  scrollAnimation="fadeIn"
  animation="fadeSwap"
  threshold={0.3}
  value={text}
>
  <span>{text}</span>
</Animate.Text>
```

Use this when the same content has different behavior depending on context. For example, text can fade in when it first scrolls into view, then fade-swap when the value changes later.

## Shared Props

Most modules share the same core props.

| Prop | Type | Purpose |
|------|------|---------|
| `animation` | string | Main animation preset |
| `trigger` | string or string[] | When the animation fires |
| `scrollAnimation` | string | Optional animation used specifically for scroll in multi-trigger setups |
| `value` | string or number | Change-tracking value for `change` trigger |
| `duration` | number | Animation duration in milliseconds |
| `easing` | string | CSS easing curve |
| `threshold` | number | Scroll trigger threshold |
| `properties` | object | Extra CSS properties to animate alongside the preset |
| `children` | ReactNode | The content being animated |

### Animating CSS Properties

Use `properties` when a state change should animate CSS values at the same time as the preset.

```tsx
<Animate.Text
  trigger="change"
  value={text}
  animation="fadeSwap"
  properties={{
    color: ["#111", "#7F77DD"],
    fontSize: ["14px", "18px"],
  }}
>
  <span>{text}</span>
</Animate.Text>
```

## Text Module

Use `trigr/text` for short text where the unit of animation is a word, number, label, or character-level effect.

```tsx
import { Animate } from "trigr/text"

function StatusLabel({ status }: { status: string }) {
  return (
    <Animate.Text trigger="change" value={status} animation="fadeSwap">
      <span>{status}</span>
    </Animate.Text>
  )
}
```

### Text Animation Categories

| Category | Presets | Best trigger |
|----------|---------|--------------|
| Swap and replace | `fadeSwap`, `morph`, `slideReplace`, `typewriter`, `decoder`, `scramble`, `odometer`, `ticker`, `textRotate`, `gooeyMorph` | `change` |
| Reveal | `fadeIn`, `letterDrop`, `textReveal`, `scatter`, `splash`, `splitReveal`, `splitSlide`, `staggerText`, `textEffect`, `scrollFanIn` | `scroll`, `mount` |
| Particle and physics | `bigBang`, `scatterAssemble`, `pixelRain`, `vortex`, `dominoFall`, `pendulum`, `centerBurst`, `gravityBounce` | `change`, `mount`, hero scroll |
| Interaction | `bump`, `jitter`, `popUp`, `jello`, `shake`, `pulse`, `blink`, `wave`, `ping`, `highlight`, `boldFlash`, `blur`, `randomLetterSwap` | `hover`, `click`, `manual` |

Best practices:

- Use `change` presets when old and new text both matter.
- Keep short labels inside inline elements such as `span`.
- Use `value` for any animation that depends on detecting content changes.
- Use particle or physics presets sparingly; they are expressive hero moments.
- Avoid using swap-only animations on scroll unless the demo or UI actually provides old and new values.

## Paragraph Module

Use `trigr/paragraph` for readable prose. Paragraph animations are designed around words, lines, and blocks of copy.

```tsx
import { Animate } from "trigr/paragraph"

<Animate.Paragraph trigger="scroll" animation="wordFadeIn" threshold={0.4}>
  <p>Motion should support reading, not interrupt it.</p>
</Animate.Paragraph>
```

### Paragraph Animation Categories

| Category | Presets | Best trigger |
|----------|---------|--------------|
| Word and line reveal | `wordFadeIn`, `wordSlideUp`, `wordPop`, `lineFadeIn`, `lineSlideUp`, `streamIn`, `streamSlide`, `scrollWordReveal` | `scroll`, `mount` |
| Content replacement | `fadeSwap`, `morphText`, `slideReplace`, `crossFade`, `expandCollapse`, `morphBlur`, `pushLeft`, `pushRight`, `flipPage` | `change` |
| Review and emphasis | `highlight`, `diffAnimate`, `flash` | `change`, `hover`, `manual` |
| Paragraph block motion | `fadeIn`, `slideUp`, `slideDown`, `slideLeft`, `slideRight`, `popIn`, `expandIn`, `zoomIn`, `pulse`, `shake` | `scroll`, `mount`, interaction |

Best practices:

- Use paragraph presets when the content is more than a short label.
- Use line and word reveals for scroll reading experiences.
- Use `highlight` for emphasis and review flows.
- Use `diffAnimate` for changed words, not general highlighting.
- Keep paragraph widths readable, usually between `45ch` and `75ch`.

## List Module

`trigr/list` is not only for `<ul>` or basic divs. It wraps any repeated keyed collection.

```tsx
import { Animate } from "trigr/list"

<Animate.List trigger="scroll" animation="staggerSlideUp" stagger={80}>
  {cards.map((card) => (
    <article key={card.id}>{card.title}</article>
  ))}
</Animate.List>
```

The developer owns the children. trigr only controls how the collection behaves.

### List Use Cases

- Words and tags
- Cards and tiles
- Buttons and menu items
- Feature rows
- Pricing options
- Notification items
- Dashboard rows
- Logo marquees
- Sortable keyed collections

### List Animation Categories

| Category | Presets | Best trigger |
|----------|---------|--------------|
| Stagger | `staggerFadeIn`, `staggerSlideUp`, `staggerSlideLeft`, `staggerZoomIn`, `staggerPopIn`, `stackIn` | `scroll`, `mount`, `manual` |
| Cascade | `wordCascade`, `wordWave`, `wordDrop`, `wordFadeIn` | `mount`, `hover`, compact collections |
| Presence | `itemFadeIn`, `itemSlideIn`, `itemPopIn`, `itemBounceIn`, `itemFadeOut`, `itemSlideOut`, `itemCollapseOut` | add/remove flows |
| Marquee | `marquee`, `marqueeReverse`, `marqueeFade` | logos, partners, continuous content |
| Parallax | `parallax`, `parallaxFast`, `parallaxReverse`, `tiltScroll`, `scaleScroll`, `parallaxStagger` | scroll depth for card or block groups |
| Reorder | `flip`, `smooth`, `spring`, `none` | keyed child reordering |

### Collection Parallax

Use list parallax when a keyed collection should move with scroll depth. `parallaxStagger` offsets each child for a layered card-stack feel, while `parallax`, `parallaxFast`, `parallaxReverse`, `tiltScroll`, and `scaleScroll` apply the same scroll-linked behavior with different motion identities.

```tsx
import { Animate } from "trigr/list"

<Animate.List trigger="scroll" animation="parallaxStagger" speed={0.5}>
  {cards.map((card) => (
    <article key={card.id}>{card.title}</article>
  ))}
</Animate.List>
```

Best practices:

- Every child should have a stable `key`.
- Use `stagger` for collection reveals.
- Use `exitAnimation` when children are removed.
- Use `reorder` or `reorderAnimation` when keys change position.
- Use list parallax for many children; use block parallax for one element.

## Block Module

Use `trigr/block` when one complete surface animates as a unit.

```tsx
import { Animate } from "trigr/block"

<Animate.Block trigger="scroll" animation="slideLeft" threshold={0.55}>
  <section className="feature-card">Analytics</section>
</Animate.Block>
```

### Block Animation Categories

| Category | Presets | Best trigger |
|----------|---------|--------------|
| Entrance and exit | `fadeIn`, `fadeSwap`, `slideUp`, `slideDown`, `slideLeft`, `slideRight`, `scaleIn`, `popIn`, `rotateIn`, `flipX`, `flipY`, `bounceIn`, `blurIn`, `clipUp`, `clipLeft`, `zoomIn` | `scroll`, `mount`, `change` |
| Scroll-linked | `parallax`, `parallaxFast`, `parallaxReverse`, `tiltScroll`, `scaleScroll` | `scroll` |
| Hover and cursor | `lift`, `sink`, `grow`, `glow`, `shadow`, `borderPop`, `tilt`, `tilt3D`, `rotate3D`, `depth` | `hover` |
| Feedback and overlays | `press`, `ripple`, `burst`, `shake`, `wiggle`, `jello`, `flash`, `heartBeat`, `pulse`, `float`, `spin`, `ping`, `shimmer` | `click`, `manual`, `mount` |

### Single Element Parallax

Use block parallax for one element moving at a different scroll speed.

```tsx
import { Animate } from "trigr/block"

<Animate.Block trigger="scroll" animation="parallax" speed={0.5}>
  <div className="hero-image" />
</Animate.Block>
```

Best practices:

- Use block for one card, image, panel, section, or notification.
- Use list for many repeated children.
- Use direction-based animations when direction helps meaning.
- Keep click and hover animations short.
- Use scroll-linked presets only with `trigger="scroll"`.

## Choosing the Right Animation

Use this quick decision guide:

| Goal | Use |
|------|-----|
| A word changes to another word | `Animate.Text` with `fadeSwap`, `morph`, `typewriter`, or `slideReplace` |
| A paragraph reveals while reading | `Animate.Paragraph` with `wordFadeIn`, `lineSlideUp`, or `scrollWordReveal` |
| Cards enter one after another | `Animate.List` with `staggerSlideUp` |
| Dashboard rows reorder | `Animate.List` with `reorder="flip"` or `reorder="smooth"` |
| A logo strip loops forever | `Animate.List` with `marqueeFade` |
| A group of cards moves with scroll depth | `Animate.List` with `parallax`, `tiltScroll`, `scaleScroll`, or `parallaxStagger` |
| One hero image moves with scroll depth | `Animate.Block` with `parallax` |
| A pricing card reacts on hover | `Animate.Block` with `lift`, `grow`, `glow`, or `tilt3D` |
| A click needs tactile response | `Animate.Block` with `press`, `ripple`, or `burst` |

## Production Guidelines

- Prefer subtle motion for repeated UI.
- Match animation type to content type.
- Do not use change-only animations without changing values.
- Keep scroll reveals readable and threshold-controlled.
- Keep hover and click feedback fast.
- Avoid layout-shifting wrappers around text.
- Use stable keys for all list children.
- Use `properties` for style transitions instead of manually mixing CSS transitions.
- Respect reduced motion; trigr keeps state changes visible while simplifying transform-heavy effects.

## Playground and Docs Site

Run the playground locally:

```bash
npm run playground
```

Build the docs/playground site:

```bash
npm run site:build
npm run site:preview
```

The playground is also the product documentation surface. It includes:

- A Docs tab
- Module-specific demos
- Trigger-specific examples
- Searchable animation controls
- Code snippets that match the selected animation
- Realistic list, block, paragraph, and text examples

## Publishing

Before publishing:

```bash
npm run typecheck
npm run build
npm run pack:dry
```

Then publish:

```bash
npm login
npm publish --access public
```

The package publish step runs `prepublishOnly`, which typechecks and builds `dist`.

## License

MIT
