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

### Triggers Array (Alternative API)

Instead of the `trigger` + `scrollAnimation` pattern, pass a `triggers` array for explicit per-trigger configuration:

```tsx
<Animate.Text
  triggers={[
    { trigger: "scroll", animation: "fadeIn", threshold: 0.3 },
    { trigger: "change", animation: "fadeSwap" },
  ]}
  value={text}
>
  <span>{text}</span>
</Animate.Text>
```

Each entry in the array specifies its own animation and optional threshold.

## Shared Props

Most modules share the same core props.

| Prop | Type | Purpose |
|------|------|---------|
| `animation` | string | Main animation preset |
| `trigger` | string or string[] | When the animation fires |
| `triggers` | TriggerConfig[] | Explicit per-trigger config (alternative to `trigger` + `scrollAnimation`) |
| `scrollAnimation` | string | Optional animation used specifically for scroll in multi-trigger setups |
| `value` | string or number | Change-tracking value for `change` trigger |
| `duration` | number | Animation duration in milliseconds |
| `easing` | string | CSS easing curve |
| `threshold` | number | Scroll trigger threshold |
| `properties` | object | Extra CSS properties to animate alongside the preset |
| `show` | boolean | Control lifecycle — set `false` to trigger exit animation |
| `exitAnimation` | string | Exit preset played when `show` becomes `false` or child is removed |
| `unmountOnExit` | boolean | Remove from DOM after exit animation completes |
| `presetOptions` | object | Tune animation parameters (distance, scale, blur, stagger, rotate) |
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

Each key is a CSS property. Values are `[from, to]` tuples.

### Exit Animations

Control exit animations via the `show` prop. When `show` transitions from `true` to `false`, the component plays the `exitAnimation` before unmounting (if `unmountOnExit` is set).

```tsx
<Animate.Text
  show={isVisible}
  animation="fadeIn"
  exitAnimation="slideOutUp"
  unmountOnExit
>
  <span>{label}</span>
</Animate.Text>
```

For lists, exit animations fire automatically when a keyed child is removed. Set `exitAnimation` on the list:

```tsx
<Animate.List exitAnimation="itemFadeOut">
  {items.map(item => <div key={item.id}>{item.name}</div>)}
</Animate.List>
```

### Tuning Animation Parameters

Use `presetOptions` to adjust animation intensity. Each module has its own PresetOptions type. Only provided values override the preset defaults.

```tsx
<Animate.Text
  trigger="change"
  value={text}
  animation="slideReplace"
  presetOptions={{ distance: 64, blur: 8 }}
>
  <span>{text}</span>
</Animate.Text>
```

Options differ per module:

| Module | Options |
|--------|---------|
| Text | `distance`, `scale`, `blur`, `stagger` |
| Paragraph | `distance`, `scale`, `blur` |
| List | `distance`, `scale`, `blur`, `stagger` |
| Block | `distance`, `scale`, `blur`, `rotate` |

## Text Module

Use `trigr/text` for short text where the unit of animation is a word, number, label, or character-level effect. 59 presets.

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
| Swap and replace | `fadeSwap`, `morph`, `slideReplace`, `typewriter`, `decoder`, `scramble`, `odometer`, `ticker`, `textRotate`, `gooeyMorph`, `randomLetterSwap` | `change` |
| Reveal | `fadeIn`, `letterDrop`, `textReveal`, `liftReveal`, `scatter`, `splash`, `splitReveal`, `splitSlide`, `staggerText`, `textEffect`, `scrollFanIn` | `scroll`, `mount` |
| Particle and physics | `bigBang`, `scatterAssemble`, `pixelRain`, `vortex`, `dominoFall`, `pendulum`, `centerBurst`, `gravityBounce` | `change`, `mount`, hero scroll |
| Interaction | `bump`, `jitter`, `popUp`, `jello`, `shake`, `pulse`, `blink`, `wave`, `ping`, `highlight`, `boldFlash`, `blur`, `flip`, `bounce`, `dropIn`, `riseUp`, `expandIn`, `shrinkOut`, `popIn`, `strikeThrough`, `underlineDraw`, `underlineSlide`, `copyConfirm`, `brightnessShift`, `activeTabText` | `hover`, `click`, `manual` |
| Exit | `fadeOut`, `fadeOutUp`, `fadeOutDown`, `slideOutUp`, `slideOutDown`, `slideOutLeft`, `slideOutRight`, `scaleOut`, `blurOut`, `clipOut`, `strikeOut`, `typeOut`, `scrambleOut`, `popOut` | `show` lifecycle |

Best practices:

- Use `change` presets when old and new text both matter.
- Keep short labels inside inline elements such as `span`.
- Use `value` for any animation that depends on detecting content changes.
- Use particle or physics presets sparingly; they are expressive hero moments.

## Paragraph Module

Use `trigr/paragraph` for readable prose. Paragraph animations are designed around words, lines, and blocks of copy. 42 presets.

```tsx
import { Animate } from "trigr/paragraph"

<Animate.Paragraph trigger="scroll" animation="wordFadeIn" threshold={0.4}>
  <p>Motion should support reading, not interrupt it.</p>
</Animate.Paragraph>
```

### Paragraph Animation Categories

| Category | Presets | Best trigger |
|----------|---------|--------------|
| Word and line reveal | `wordFadeIn`, `wordSlideUp`, `wordPop`, `lineFadeIn`, `lineSlideUp`, `streamIn`, `streamFade`, `streamSlide`, `scrollWordReveal` | `scroll`, `mount` |
| Content replacement | `fadeSwap`, `morphText`, `slideReplace`, `crossFade`, `expandCollapse`, `morphBlur`, `pushLeft`, `pushRight`, `flipPage` | `change` |
| Review and emphasis | `highlight`, `diffAnimate`, `flash` | `change`, `hover`, `manual` |
| Paragraph block motion | `fadeIn`, `slideUp`, `slideDown`, `slideLeft`, `slideRight`, `popIn`, `expandIn`, `zoomIn`, `pulse`, `shake`, `cursorBlink`, `heightAuto`, `errorMessageIn` | `scroll`, `mount`, interaction |
| Exit | `fadeOut`, `paragraphFadeOut`, `popOut`, `collapseOut`, `zoomOut`, `slideOutUp`, `slideOutDown`, `slideOutLeft`, `slideOutRight`, `collapseHeight`, `wordFadeOut`, `wordSlideOut`, `lineFadeOut`, `lineSlideOut`, `fadeMaskOut` | `show` lifecycle |

Best practices:

- Use paragraph presets when the content is more than a short label.
- Use line and word reveals for scroll reading experiences.
- Use `highlight` for emphasis and review flows.
- Use `diffAnimate` for changed words, not general highlighting.
- Keep paragraph widths readable, usually between `45ch` and `75ch`.

## List Module

`trigr/list` is not only for `<ul>` or basic divs. It wraps any repeated keyed collection. 55 presets.

```tsx
import { Animate } from "trigr/list"

<Animate.List trigger="scroll" animation="staggerSlideUp" stagger={80}>
  {cards.map((card) => (
    <article key={card.id}>{card.title}</article>
  ))}
</Animate.List>
```

The developer owns the children. trigr only controls how the collection behaves.

### List Animation Categories

| Category | Presets | Best trigger |
|----------|---------|--------------|
| Stagger | `staggerFadeIn`, `staggerSlideUp`, `staggerSlideLeft`, `staggerZoomIn`, `staggerPopIn`, `staggerBlurIn`, `stackIn` | `scroll`, `mount`, `manual` |
| Cascade | `wordCascade`, `wordWave`, `wordDrop`, `wordFadeIn` | `mount`, `hover`, compact collections |
| Presence | `itemFadeIn`, `itemSlideIn`, `itemPopIn`, `itemBounceIn`, `itemFadeOut`, `itemSlideOut`, `itemCollapseOut` | add/remove flows |
| Marquee | `marquee`, `marqueeReverse`, `marqueeFade` | logos, partners, continuous content |
| Parallax | `parallax`, `parallaxFast`, `parallaxReverse`, `tiltScroll`, `scaleScroll`, `parallaxStagger` | scroll depth for card or block groups |
| Reorder | `flip`, `smooth`, `spring`, `none` | keyed child reordering |
| Entrance | `fadeIn`, `slideIn`, `slideInLeft`, `slideInRight`, `popIn`, `bounceIn`, `expandIn`, `flipIn`, `glideIn`, `feedAppend`, `filterIn`, `emptyToList`, `insertItem`, `emptyStateToList` | `scroll`, `mount` |
| Exit | `fadeOut`, `slideOut`, `slideOutLeft`, `slideOutRight`, `popOut`, `bounceOut`, `collapseOut`, `flipOut`, `glideOut`, `itemSlideOutLeft`, `itemSlideOutRight`, `itemScaleOut`, `itemPopOut`, `itemBlurOut`, `itemDismissOut`, `rowCollapseOut`, `tagRemove`, `cardRemove` | child removal |

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

### List Exit Animations

Exit animations fire when a keyed child is removed from the list:

```tsx
<Animate.List exitAnimation="itemSlideOut" exitStagger={40}>
  {items.map(item => <div key={item.id}>{item.name}</div>}
</Animate.List>
```

Use `exitStagger` to delay each removed child by a set amount of milliseconds.

Best practices:

- Every child should have a stable `key`.
- Use `stagger` for collection reveals.
- Use `exitAnimation` when children are removed.
- Use `reorder` or `reorderAnimation` when keys change position.
- Use list parallax for many children; use block parallax for one element.

## Block Module

Use `trigr/block` when one complete surface animates as a unit. 79 presets.

```tsx
import { Animate } from "trigr/block"

<Animate.Block trigger="scroll" animation="slideLeft" threshold={0.55}>
  <section className="feature-card">Analytics</section>
</Animate.Block>
```

### Block Animation Categories

| Category | Presets | Best trigger |
|----------|---------|--------------|
| Entrance and exit | `fadeIn`, `fadeSwap`, `slideUp`, `slideDown`, `slideLeft`, `slideRight`, `scaleIn`, `popIn`, `rotateIn`, `flipX`, `flipY`, `bounceIn`, `blurIn`, `clipUp`, `clipLeft`, `zoomIn`, `glideIn`, `dropIn`, `riseUp`, `expandIn`, `expandHeight`, `fadeSlideUp`, `springBounce`, `springScale`, `springSlideUp`, `springSlideDown`, `morphRadius`, `morphCircle` | `scroll`, `mount`, `change` |
| Scroll-linked | `parallax`, `parallaxFast`, `parallaxReverse`, `tiltScroll`, `scaleScroll` | `scroll` |
| Hover and cursor | `lift`, `sink`, `grow`, `glow`, `shadow`, `borderPop`, `tilt`, `tilt3D`, `rotate3D`, `depth`, `float` | `hover` |
| Feedback and overlays | `press`, `ripple`, `burst`, `shake`, `wiggle`, `jello`, `flash`, `heartBeat`, `pulse`, `spin`, `ping`, `shimmer` | `click`, `manual`, `mount` |
| UI pattern | `modalIn`, `modalOut`, `popoverIn`, `popoverOut`, `toastIn`, `toastOut`, `successCheckIn`, `buttonLoading`, `focusRingPulse`, `tabPanelIn`, `tabPanelOut`, `successToast`, `checkboxCheck` | `mount`, `show`, `click` |
| Exit | `fadeOut`, `scaleOut`, `popOut`, `rotateOut`, `bounceOut`, `glideOut`, `collapseOut`, `blurOut`, `zoomOut`, `modalOut`, `dialogOut`, `drawerOutLeft`, `drawerOutRight`, `drawerOutTop`, `drawerOutBottom`, `popoverOut`, `menuOut`, `toastOutRight`, `toastOutUp`, `collapseWidth`, `dismissOut`, `errorOut`, `successOut`, `tabPanelOut` | `show` lifecycle |

### Drag

Block supports drag gesture for swipe-to-dismiss and draggable panels:

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

### Layout ID

Animate shared layout transitions between different locations:

```tsx
<Animate.Block layoutId="shared-card" layoutTransition={{ duration: 400, easing: "ease-in-out" }}>
  {expanded ? <ExpandedCard /> : <CompactCard />}
</Animate.Block>
```

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
| A modal animates in and out | `Animate.Block` with `modalIn` / `modalOut` |
| A notification appears and dismisses | `Animate.Block` with `toastIn` / `toastOut` |
| A swipeable card | `Animate.Block` with `drag="x"` and exit animation |
| Shared layout transitions | `Animate.Block` with `layoutId` |

## Production Guidelines

- Prefer subtle motion for repeated UI.
- Match animation type to content type.
- Do not use change-only animations without changing values.
- Keep scroll reveals readable and threshold-controlled.
- Keep hover and click feedback fast.
- Avoid layout-shifting wrappers around text.
- Use stable keys for all list children.
- Use `properties` for style transitions instead of manually mixing CSS transitions.
- Use `presetOptions` to tune animation intensity rather than writing custom keyframes.
- Respect reduced motion; trigr keeps state changes visible while simplifying transform-heavy effects.

## Playground and Docs Site

The playground is also the product documentation surface. It includes module demos, trigger-specific examples, searchable animation controls, code snippets, and 12 real-world composed demos.

Built-in composed demos:

| Demo | Module | What it shows |
|------|--------|---------------|
| RepoFeed | List + Block | Staggered card entrance, scroll reveals |
| Dashboard | List + Block | Widget grid with hover states and value changes |
| NotificationCentre | List | Item entrance, exit, and stagger |
| OnboardingWizard | Block | Step transitions, modal patterns |
| SettingsPanel | Block | Toggle feedback, section reveals |
| HeroSection | Block + Text | Scroll-linked parallax and text reveals |
| DragDismiss | Block | Swipe-to-dismiss with drag gesture |
| LayoutId | Block | Shared layout transitions |
| ToastNotification | Block | Toast stacking and dismiss flow |
| UnderlineNav | Text | Hover underline slide animation |
| FilterFeed | List | Filter transitions and list presence |
| TabPanel | Block | Tab content transitions |

Run the playground locally:

```bash
npm run playground
```

Build the docs/playground site:

```bash
npm run site:build
npm run site:preview
```

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

## Bundle Size

Tree-shakeable with zero-cost unused module elimination:

| Module | Minified | Gzipped |
|--------|----------|---------|
| text | 77 KB | ~28 KB total |
| block | 38 KB | (all 4 modules) |
| paragraph | 29 KB | |
| list | 23 KB | |

Import only what you need via subpath exports (`trigr/text`, `trigr/block`, etc.) and bundlers eliminate the rest.

## License

MIT
