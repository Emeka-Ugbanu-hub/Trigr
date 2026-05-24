import{h as C,j as e,r as i,d as t,g as n,f as o,e as l}from"./index-CV44TwGv.js";const T=[{icon:"⚡",title:"Zero-config presets",desc:"200+ production-ready animations across four content-aware modules. Pick a preset and ship."},{icon:"🎯",title:"Content-aware modules",desc:"Text, Paragraph, List, and Block — each understands its content's internal structure."},{icon:"🔄",title:"Trigger system",desc:"Scroll, change, hover, click, manual, mount. Combine triggers per module with the triggers array API."},{icon:"🎭",title:"Exit animations",desc:"Lifecycle-controlled exits with show/unmount. Smooth out transitions when content leaves."},{icon:"✨",title:"Blur + transform",desc:"Every entrance and exit combines opacity, transform, and filter blur for premium feel."},{icon:"🔧",title:"presetOptions",desc:"Tune distance, scale, blur, rotate, and stagger per preset without rewriting keyframes."}],A=[{name:"Starter",price:0,desc:"All modules, 200+ presets, tree-shakeable",cta:"Get Started",featured:!1},{name:"Pro",price:49,desc:"Priority support, custom presets, team license",cta:"Go Pro",featured:!0},{name:"Enterprise",price:199,desc:"Dedicated support, custom modules, SLA",cta:"Contact Us",featured:!1}],U=[{name:"Sarah Chen",role:"Lead Engineer at Vercel",quote:"triggr replaced three animation libraries in our design system. The content-aware approach just makes sense."},{name:"Marcus Rivera",role:"Design Director at Linear",quote:"Finally, an animation library where the defaults actually look good. We ship faster because we don't tweak keyframes."},{name:"Aiko Tanaka",role:"Frontend Lead at Notion",quote:"The exit animation system alone saved us weeks of edge-case handling. Lifecycle-controlled exits are the way."}],E=["Stripe","Vercel","Linear","Notion","Figma","Raycast","Supabase","Planetscale"],u=[`import { Animate } from "triggr-motion/text"

<Animate.Text
  trigger="change"
  animation="fadeSwap"
>
  {label}
</Animate.Text>`,`import { Animate } from "triggr-motion/block"

<Animate.Block
  animation="slideUp"
  exitAnimation="fadeOut"
  show={isOpen}
  unmountOnExit
>
  <Card />
</Animate.Block>`,`import { Animate } from "triggr-motion/list"

<Animate.List
  animation="staggerFadeIn"
  exitAnimation="itemSlideOut"
  reorderAnimation="flip"
>
  {items.map(item =>
    <Row key={item.id} />
  )}
</Animate.List>`];function z(){const[v,b]=i.useState(!1),[P,F]=i.useState(!1),[j,k]=i.useState(0),[s,y]=i.useState(0),[p,N]=i.useState("crafted"),[x,g]=i.useState(!0),[c,w]=i.useState(0),[I,m]=i.useState("npm install triggr-motion");i.useEffect(()=>{function r(){b(window.scrollY>40)}return window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[]),i.useEffect(()=>{const r=["crafted","polished","premium","beautiful","smooth"];let a=0;const d=setInterval(()=>{a=(a+1)%r.length,N(r[a])},2200);return()=>clearInterval(d)},[]);const S=["Animation is not decoration — it is communication. Every motion should tell the user what changed, where it came from, and where it's going next.","Great interfaces feel alive because they respond. A button that presses, a card that lifts, text that flows in — these micro-moments build trust.","triggr-motion gives you 200+ presets across four modules. From a single character swap to a full-page transition, one import, one prop, done."],h=i.useCallback(r=>{var a;(a=document.getElementById(r))==null||a.scrollIntoView({behavior:"smooth"})},[]);return e.jsxs("div",{className:"landing",children:[e.jsx("style",{children:L}),e.jsx("nav",{className:`lnav${v?" scrolled":""}`,children:e.jsxs("div",{className:"lnav-inner",children:[e.jsx(t,{trigger:"mount",animation:"slideDown",duration:500,easing:"cubic-bezier(0.22, 1, 0.36, 1)",children:e.jsx("a",{href:"#",className:"lnav-logo",children:"triggr"})}),e.jsx("div",{className:"lnav-links",children:["Features","Code","Pricing","Demo"].map((r,a)=>e.jsx(n,{trigger:"hover",animation:"highlight",highlightColor:"rgba(124,92,255,0.25)",highlightMode:"pulse",highlightHold:600,duration:250,children:e.jsx(t,{trigger:"mount",animation:"fadeIn",duration:300,delay:100+a*60,children:e.jsx("a",{href:`#${r.toLowerCase()}`,onClick:d=>{d.preventDefault(),h(r.toLowerCase())},className:"lnav-link",children:r})})},r))}),e.jsx("div",{className:"lnav-actions",children:e.jsx(t,{trigger:"mount",animation:"popIn",duration:450,delay:300,children:e.jsxs("a",{href:"https://github.com/Emeka-Ugbanu-hub/triggr-motion",target:"_blank",rel:"noopener",className:"lnav-gh",children:[e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),"GitHub"]})})})]})}),e.jsx("section",{className:"hero",id:"hero",children:e.jsxs("div",{className:"hero-grid",children:[e.jsxs("div",{className:"hero-content",children:[e.jsx(t,{trigger:"mount",animation:"fadeIn",duration:600,children:e.jsx("span",{className:"hero-kicker",children:"React Animation System"})}),e.jsx(t,{trigger:"mount",animation:"slideUp",duration:600,delay:80,children:e.jsxs("h1",{className:"hero-headline",children:["One import.",e.jsx("br",{}),e.jsx("span",{className:"hero-highlight",children:"One prop."}),e.jsxs(n,{trigger:"change",value:p,animation:"fadeSwap",duration:400,children:[" ",p]})]})}),e.jsx(o,{trigger:"mount",animation:"wordSlideUp",duration:450,delay:300,children:e.jsx("p",{className:"hero-desc",children:"A content-aware animation library for React. Text, paragraphs, lists, and blocks — each module understands what it's animating. 200+ presets, polished motion out of the box."})}),e.jsxs("div",{className:"hero-actions",children:[e.jsx(t,{trigger:"mount",animation:"springBounce",duration:550,delay:500,children:e.jsx("a",{href:"#features",onClick:r=>{r.preventDefault(),h("features")},className:"hero-btn hero-btn-primary",children:"Explore Features"})}),e.jsx(t,{trigger:"mount",animation:"fadeIn",duration:400,delay:650,children:e.jsx(n,{trigger:"click",animation:"copyConfirm",duration:400,children:e.jsx("button",{className:"hero-btn hero-btn-secondary",onClick:()=>{var r;(r=navigator.clipboard)==null||r.writeText("npm install triggr-motion"),m("Copied!"),setTimeout(()=>m("npm install triggr-motion"),2e3)},children:I})})})]})]}),e.jsx("div",{className:"hero-visual",children:e.jsx(t,{trigger:"mount",animation:"scaleIn",duration:700,delay:200,children:e.jsxs("div",{className:"hero-code-block",children:[e.jsxs("div",{className:"hero-code-header",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsx(o,{trigger:"mount",animation:"lineSlideUp",duration:500,delay:500,children:e.jsx("pre",{className:"hero-code",children:u[0]})})]})})})]})}),e.jsxs("section",{className:"logobar",children:[e.jsx(t,{trigger:"scroll",animation:"fadeIn",duration:500,threshold:.3,children:e.jsx("p",{className:"logobar-label",children:"Trusted by engineering teams at"})}),e.jsx(l,{animation:"marquee",speed:35,children:E.map(r=>e.jsx("span",{className:"logo-item",children:r},r))})]}),e.jsxs("section",{className:"section",id:"features",children:[e.jsxs("div",{className:"section-header",children:[e.jsx(t,{trigger:"scroll",animation:"fadeIn",duration:500,threshold:.3,children:e.jsx("span",{className:"section-kicker",children:"Why triggr"})}),e.jsx(t,{trigger:"scroll",animation:"slideUp",duration:550,threshold:.3,delay:60,children:e.jsx("h2",{className:"section-title",children:"Animation that belongs in your product"})}),e.jsx(o,{trigger:"scroll",animation:"wordFadeIn",duration:400,threshold:.3,delay:120,children:e.jsx("p",{className:"section-desc",children:"Every preset is designed to feel native, not bolted on. Content-aware modules, lifecycle exits, and premium defaults."})})]}),e.jsx("div",{className:"feature-grid",children:e.jsx(l,{animation:"staggerFadeIn",duration:400,stagger:80,threshold:.2,children:T.map((r,a)=>e.jsx(t,{trigger:"hover",animation:"lift",duration:250,presetOptions:{distance:6},children:e.jsxs("div",{className:`feature-card${j===a?" active":""}`,onMouseEnter:()=>k(a),children:[e.jsx(t,{trigger:"mount",animation:"popIn",duration:400,delay:a*60,children:e.jsx("div",{className:"feature-icon",children:r.icon})}),e.jsx("h3",{className:"feature-title",children:r.title}),e.jsx(o,{trigger:"mount",animation:"wordFadeIn",duration:350,delay:200+a*40,children:e.jsx("p",{className:"feature-desc",children:r.desc})})]})},r.title))})})]}),e.jsxs("section",{className:"section section-alt",id:"code",children:[e.jsxs("div",{className:"section-header",children:[e.jsx(t,{trigger:"scroll",animation:"fadeIn",duration:500,threshold:.3,children:e.jsx("span",{className:"section-kicker",children:"Developer experience"})}),e.jsx(t,{trigger:"scroll",animation:"slideUp",duration:550,threshold:.3,delay:60,children:e.jsx("h2",{className:"section-title",children:"One import. One prop. Done."})})]}),e.jsxs("div",{className:"code-showcase",children:[e.jsx("div",{className:"code-tabs",children:["Text","Block","List"].map((r,a)=>e.jsx(t,{trigger:"click",animation:"press",duration:150,children:e.jsx("button",{className:`code-tab${s===a?" active":""}`,onClick:()=>y(a),children:r})},r))}),e.jsx(t,{trigger:"scroll",animation:"slideUp",duration:600,delay:150,threshold:.3,children:e.jsxs("div",{className:"code-block",children:[e.jsxs("div",{className:"code-block-header",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsx(o,{trigger:"change",animation:"fadeSwap",duration:400,children:e.jsx("pre",{className:"code-block-pre",children:u[s]},s)})]})})]})]}),e.jsx("section",{className:"section",children:e.jsx("div",{className:"stats-grid",children:[{label:"Animation Presets",value:"200+"},{label:"Content Modules",value:"4"},{label:"Bundle Size (gzip)",value:"28KB"},{label:"Tree-shakeable",value:"Yes"}].map((r,a)=>e.jsx(t,{trigger:"scroll",animation:"popIn",duration:500,delay:a*80,threshold:.3,children:e.jsxs("div",{className:"stat-card",children:[e.jsx(n,{trigger:"scroll",animation:"odometer",duration:600,delay:a*80,children:e.jsx("span",{className:"stat-value",children:r.value})}),e.jsx("span",{className:"stat-label",children:r.label})]})},r.label))})}),e.jsxs("section",{className:"section section-alt",id:"demo",children:[e.jsxs("div",{className:"section-header",children:[e.jsx(t,{trigger:"scroll",animation:"fadeIn",duration:500,threshold:.3,children:e.jsx("span",{className:"section-kicker",children:"Content animation"})}),e.jsx(t,{trigger:"scroll",animation:"slideUp",duration:550,threshold:.3,delay:60,children:e.jsx("h2",{className:"section-title",children:"Prose that feels alive"})})]}),e.jsxs("div",{className:"prose-demo",children:[e.jsx("div",{className:"prose-controls",children:["01","02","03"].map((r,a)=>e.jsx(t,{trigger:"click",animation:"press",duration:150,children:e.jsx("button",{className:`prose-btn${c===a?" active":""}`,onClick:()=>w(a),children:r})},r))}),e.jsx(t,{trigger:"scroll",animation:"fadeIn",duration:500,threshold:.3,children:e.jsx("div",{className:"prose-card",children:e.jsx(o,{trigger:"change",animation:"slideReplace",duration:400,children:e.jsx("blockquote",{className:"prose-quote",children:S[c]},c)})})})]})]}),e.jsxs("section",{className:"section",id:"pricing",children:[e.jsxs("div",{className:"section-header",children:[e.jsx(t,{trigger:"scroll",animation:"fadeIn",duration:500,threshold:.3,children:e.jsx("span",{className:"section-kicker",children:"Pricing"})}),e.jsx(t,{trigger:"scroll",animation:"slideUp",duration:550,threshold:.3,delay:60,children:e.jsx("h2",{className:"section-title",children:"Free and open source"})}),e.jsx(o,{trigger:"scroll",animation:"wordFadeIn",duration:400,threshold:.3,delay:120,children:e.jsx("p",{className:"section-desc",children:"MIT licensed. Use it anywhere. Premium support available for teams."})})]}),e.jsx("div",{className:"pricing-grid",children:e.jsx(l,{animation:"staggerPopIn",duration:450,stagger:100,threshold:.2,as:"div",style:{display:"contents"},children:A.map(r=>e.jsx(t,{trigger:"hover",animation:"tilt3D",duration:350,children:e.jsxs("div",{className:`pricing-card${r.featured?" featured":""}`,children:[e.jsx(t,{trigger:"mount",animation:"fadeIn",duration:400,children:e.jsx("h3",{className:"pricing-name",children:r.name})}),e.jsxs("div",{className:"pricing-price",children:[e.jsx(n,{trigger:"mount",animation:"dropIn",duration:450,delay:100,children:e.jsx("span",{className:"pricing-currency",children:"$"})}),e.jsx(n,{trigger:"mount",animation:"odometer",duration:500,delay:120,children:e.jsx("span",{className:"pricing-amount",children:r.price})}),r.price>0&&e.jsx("span",{className:"pricing-period",children:"/mo"})]}),e.jsx(o,{trigger:"mount",animation:"wordFadeIn",duration:350,delay:200,children:e.jsx("p",{className:"pricing-desc",children:r.desc})}),e.jsx(t,{trigger:"mount",animation:"springScale",duration:500,delay:300,children:e.jsx(n,{trigger:"hover",animation:"underlineDraw",duration:500,children:e.jsx("a",{href:"#",className:`pricing-cta${r.featured?" primary":""}`,children:r.cta})})})]})},r.name))})})]}),e.jsxs("section",{className:"section section-alt",children:[e.jsxs("div",{className:"section-header",children:[e.jsx(t,{trigger:"scroll",animation:"fadeIn",duration:500,threshold:.3,children:e.jsx("span",{className:"section-kicker",children:"Testimonials"})}),e.jsx(t,{trigger:"scroll",animation:"slideUp",duration:550,threshold:.3,delay:60,children:e.jsx("h2",{className:"section-title",children:"Loved by product teams"})})]}),e.jsx(l,{animation:"parallaxStagger",duration:600,stagger:100,threshold:.2,children:U.map(r=>e.jsx(t,{trigger:"hover",animation:"glow",duration:300,children:e.jsxs("div",{className:"testimonial-card",children:[e.jsx(o,{trigger:"mount",animation:"wordSlideUp",duration:450,children:e.jsxs("p",{className:"testimonial-quote",children:['"',r.quote,'"']})}),e.jsx("div",{className:"testimonial-author",children:e.jsxs(t,{trigger:"mount",animation:"fadeIn",duration:400,delay:200,children:[e.jsx("strong",{children:r.name}),e.jsx("span",{children:r.role})]})})]})},r.name))})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"section-header",children:[e.jsx(t,{trigger:"scroll",animation:"fadeIn",duration:500,threshold:.3,children:e.jsx("span",{className:"section-kicker",children:"Interactions"})}),e.jsx(t,{trigger:"scroll",animation:"slideUp",duration:550,threshold:.3,delay:60,children:e.jsx("h2",{className:"section-title",children:"Micro-interactions you can feel"})})]}),e.jsxs("div",{className:"interact-grid",children:[e.jsx(t,{trigger:"scroll",animation:"slideUp",duration:500,threshold:.3,children:e.jsxs("div",{className:"interact-card",children:[e.jsx("span",{className:"interact-label",children:"Hover"}),e.jsx(n,{trigger:"hover",animation:"bump",duration:200,children:e.jsx("div",{className:"interact-target",children:"Bump me"})})]})}),e.jsx(t,{trigger:"scroll",animation:"slideUp",duration:500,delay:60,threshold:.3,children:e.jsxs("div",{className:"interact-card",children:[e.jsx("span",{className:"interact-label",children:"Click"}),e.jsx(n,{trigger:"click",animation:"shake",duration:350,children:e.jsx("div",{className:"interact-target",children:"Shake me"})})]})}),e.jsx(t,{trigger:"scroll",animation:"slideUp",duration:500,delay:120,threshold:.3,children:e.jsxs("div",{className:"interact-card",children:[e.jsx("span",{className:"interact-label",children:"Pulse"}),e.jsx(n,{trigger:"hover",animation:"pulse",duration:350,repeat:!0,children:e.jsx("div",{className:"interact-target",children:"Pulse me"})})]})}),e.jsx(t,{trigger:"scroll",animation:"slideUp",duration:500,delay:180,threshold:.3,children:e.jsxs("div",{className:"interact-card",children:[e.jsx("span",{className:"interact-label",children:"Exit"}),e.jsx(t,{show:x,animation:"fadeIn",exitAnimation:"blurOut",unmountOnExit:!0,duration:400,children:e.jsx("div",{className:"interact-target interact-dismiss",onClick:()=>g(!1),children:"Dismiss me"})}),!x&&e.jsx("button",{className:"interact-reset",onClick:()=>g(!0),children:"Reset"})]})})]})]}),e.jsx("section",{className:"cta",children:e.jsxs("div",{className:"cta-inner",children:[e.jsx(t,{trigger:"scroll",animation:"fadeIn",duration:500,threshold:.4,children:e.jsx("span",{className:"cta-kicker",children:"Get started today"})}),e.jsx(t,{trigger:"scroll",animation:"slideUp",duration:600,delay:80,threshold:.4,children:e.jsx("h2",{className:"cta-title",children:"Ready to make your UI feel premium?"})}),e.jsx(o,{trigger:"scroll",animation:"wordSlideUp",duration:450,delay:200,threshold:.4,children:e.jsx("p",{className:"cta-desc",children:"Install in seconds. 200+ presets. MIT licensed. Free forever."})}),e.jsxs("div",{className:"cta-actions",children:[e.jsx(t,{trigger:"scroll",animation:"fadeIn",duration:500,delay:200,threshold:.4,children:e.jsx("a",{href:"https://github.com/Emeka-Ugbanu-hub/triggr-motion",target:"_blank",rel:"noopener",className:"cta-btn cta-btn-primary",children:"Get Started"})}),e.jsx(t,{trigger:"scroll",animation:"fadeIn",duration:500,delay:300,threshold:.4,children:e.jsx("a",{href:"/triggr-motion/",className:"cta-btn",children:"Try Playground"})})]})]})}),e.jsxs("footer",{className:"footer",children:[e.jsxs("div",{className:"footer-grid",children:[e.jsx(t,{trigger:"scroll",animation:"fadeIn",duration:500,threshold:.4,children:e.jsxs("div",{className:"footer-brand",children:[e.jsx("span",{className:"footer-logo",children:"triggr"}),e.jsx("p",{className:"footer-tagline",children:"Content-aware animation for React."})]})}),e.jsx(t,{trigger:"scroll",animation:"slideUp",duration:500,delay:80,threshold:.4,children:e.jsxs("div",{className:"footer-col",children:[e.jsx("strong",{children:"Modules"}),["Text","Paragraph","List","Block"].map(r=>e.jsx(n,{trigger:"hover",animation:"brightnessShift",duration:250,children:e.jsx("a",{href:"#",className:"footer-link",children:r})},r))]})}),e.jsx(t,{trigger:"scroll",animation:"slideUp",duration:500,delay:120,threshold:.4,children:e.jsxs("div",{className:"footer-col",children:[e.jsx("strong",{children:"Resources"}),e.jsx("a",{href:"https://github.com/Emeka-Ugbanu-hub/triggr-motion",target:"_blank",rel:"noopener",className:"footer-link",children:"GitHub"}),e.jsx("a",{href:"/triggr-motion/",className:"footer-link",children:"Playground"}),e.jsx("a",{href:"#",className:"footer-link",children:"Documentation"})]})}),e.jsx(t,{trigger:"scroll",animation:"slideUp",duration:500,delay:160,threshold:.4,children:e.jsxs("div",{className:"footer-col",children:[e.jsx("strong",{children:"Legal"}),e.jsx("span",{className:"footer-link",children:"MIT License"}),e.jsx("span",{className:"footer-link",children:"Open Source"})]})})]}),e.jsx("div",{className:"footer-bottom",children:e.jsx(t,{trigger:"scroll",animation:"fadeIn",duration:500,threshold:.5,children:e.jsxs("p",{children:["© ",new Date().getFullYear()," triggr. Built with triggr."]})})})]})]})}const L=`
:root {
  --l-bg: #ffffff;
  --l-surface: #fafafa;
  --l-surface2: #f3f3f3;
  --l-surface3: #ebebeb;
  --l-border: #d4d4d4;
  --l-border2: #9e9e9e;
  --l-text: #0a0a0a;
  --l-text2: #525252;
  --l-text3: #8a8a8a;
  --l-accent: #0a0a0a;
  --l-accent2: #3a3a3a;
  --l-green: #0a0a0a;
  --l-radius: 0px;
  --l-radius2: 0px;
  --l-font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  --l-mono: 'JetBrains Mono', 'SF Mono', 'Fira Code', 'Consolas', monospace;
}

@media (prefers-color-scheme: dark) {
  :root {
    --l-bg: #0a0a0a;
    --l-surface: #111111;
    --l-surface2: #1a1a1a;
    --l-surface3: #222222;
    --l-border: #2a2a2a;
    --l-border2: #444444;
    --l-text: #f0f0f0;
    --l-text2: #999999;
    --l-text3: #666666;
    --l-accent: #f0f0f0;
    --l-accent2: #888888;
  }
}

*, *::before, *::after { box-sizing: border-box; }

body {
  margin: 0;
  background: var(--l-bg);
  color: var(--l-text);
  font: 400 16px/1.6 var(--l-font);
  -webkit-font-smoothing: antialiased;
}

/* ── Nav ────────────────────────────────────────── */
.lnav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  padding: 16px 0;
  background: var(--l-bg);
  border-bottom: 2px solid var(--l-text);
}
.lnav-inner {
  max-width: 1200px; margin: 0 auto; padding: 0 32px;
  display: flex; align-items: center; gap: 40px;
}
.lnav-logo {
  font: 800 22px/1 var(--l-font); color: var(--l-text);
  text-decoration: none; letter-spacing: -0.04em;
  text-transform: uppercase;
}
.lnav-links { display: flex; gap: 32px; }
.lnav-link { color: var(--l-text2); text-decoration: none; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; transition: color 0.15s; }
.lnav-link:hover { color: var(--l-text); }
.lnav-actions { margin-left: auto; display: flex; align-items: center; gap: 16px; }
.lnav-gh {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 10px 18px; border: 2px solid var(--l-text);
  background: var(--l-bg); color: var(--l-text);
  font-size: 13px; font-weight: 600; text-decoration: none;
  text-transform: uppercase; letter-spacing: 0.04em;
  transition: all 0.15s;
}
.lnav-gh:hover { background: var(--l-text); color: var(--l-bg); }

/* ── Hero ────────────────────────────────────────── */
.hero {
  min-height: 100vh; display: flex; align-items: center;
  padding: 120px 32px 80px;
  border-bottom: 2px solid var(--l-text);
}
.hero-grid {
  max-width: 1200px; margin: 0 auto; width: 100%;
  display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
}
.hero-kicker {
  display: inline-block; padding: 6px 14px;
  border: 2px solid var(--l-text); background: var(--l-bg);
  color: var(--l-text); font: 600 11px/1 var(--l-mono);
  letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 24px;
}
.hero-headline {
  font: 800 clamp(40px, 5.5vw, 68px)/1.04 var(--l-font);
  letter-spacing: -0.04em; margin: 0 0 24px;
}
.hero-highlight {
  display: inline-block;
  background: var(--l-text); color: var(--l-bg);
  padding: 0 8px;
}
.hero-desc {
  font-size: 17px; color: var(--l-text2); line-height: 1.7; max-width: 480px; margin: 0 0 36px;
}
.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
.hero-btn {
  display: inline-flex; align-items: center; padding: 14px 28px;
  font: 600 14px/1 var(--l-font); text-decoration: none; cursor: pointer;
  border: 2px solid var(--l-text); transition: all 0.15s;
  text-transform: uppercase; letter-spacing: 0.04em;
}
.hero-btn-primary { background: var(--l-text); color: var(--l-bg); }
.hero-btn-primary:hover { background: var(--l-bg); color: var(--l-text); }
.hero-btn-secondary {
  background: var(--l-bg); color: var(--l-text);
  font-family: var(--l-mono); font-size: 13px; letter-spacing: 0;
  text-transform: none;
}
.hero-btn-secondary:hover { background: var(--l-text); color: var(--l-bg); }

/* ── Hero Code Block ─────────────────────────────── */
.hero-visual { position: relative; }
.hero-code-block {
  background: var(--l-bg); border: 2px solid var(--l-text);
  box-shadow: 8px 8px 0 var(--l-text);
}
.hero-code-header {
  display: flex; gap: 8px; padding: 14px 18px;
  background: var(--l-surface2); border-bottom: 2px solid var(--l-text);
}
.hero-code-header span {
  width: 12px; height: 12px; border: 2px solid var(--l-text);
  background: var(--l-bg);
}
.hero-code-header span:first-child { background: var(--l-text); }
.hero-code {
  margin: 0; padding: 24px 28px; font: 500 13px/1.7 var(--l-mono);
  color: var(--l-text2); overflow-x: auto;
}

/* ── Logo Bar ─────────────────────────────────────── */
.logobar {
  padding: 48px 32px;
  border-bottom: 2px solid var(--l-text);
  text-align: center; overflow: hidden;
}
.logobar-label { color: var(--l-text3); font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 20px; }
.logo-item {
  display: inline-block; padding: 0 40px;
  color: var(--l-text3); font: 700 18px/1 var(--l-font);
  letter-spacing: -0.02em; white-space: nowrap; text-transform: uppercase;
}

/* ── Sections ─────────────────────────────────────── */
.section { max-width: 1200px; margin: 0 auto; padding: 100px 32px; }
.section-alt { border-top: 2px solid var(--l-text); }
.section-header { text-align: left; margin-bottom: 56px; }
.section-kicker {
  display: inline-block; padding: 5px 12px;
  border: 2px solid var(--l-text); background: var(--l-text);
  color: var(--l-bg); font: 600 11px/1 var(--l-mono);
  letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 16px;
}
.section-title {
  font: 700 clamp(28px, 3.5vw, 44px)/1.12 var(--l-font);
  letter-spacing: -0.03em; margin: 0 0 12px;
}
.section-desc { font-size: 16px; color: var(--l-text2); max-width: 560px; margin: 0; }

/* ── Features ─────────────────────────────────────── */
.feature-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 0;
}
.feature-card {
  padding: 32px 28px;
  border: 2px solid var(--l-text);
  border-right: none; border-bottom: none;
  background: var(--l-bg);
  transition: background 0.15s;
}
.feature-card:nth-child(3n) { border-right: 2px solid var(--l-text); }
.feature-card:nth-child(n+4) { border-bottom: 2px solid var(--l-text); }
.feature-card:hover { background: var(--l-surface); }
.feature-icon { font-size: 32px; margin-bottom: 16px; }
.feature-title { font: 600 16px/1.3 var(--l-font); margin: 0 0 8px; letter-spacing: -0.02em; text-transform: uppercase; }
.feature-desc { font-size: 14px; color: var(--l-text2); line-height: 1.6; margin: 0; }

/* ── Code Showcase ────────────────────────────────── */
.code-showcase { max-width: 720px; margin: 0 auto; }
.code-tabs { display: flex; gap: 0; margin-bottom: 0; }
.code-tab {
  padding: 12px 24px;
  border: 2px solid var(--l-text); border-bottom: none;
  background: var(--l-surface); color: var(--l-text2);
  font: 600 13px/1 var(--l-font); cursor: pointer;
  text-transform: uppercase; letter-spacing: 0.04em;
  transition: all 0.15s;
}
.code-tab:hover { background: var(--l-surface2); color: var(--l-text); }
.code-tab.active { background: var(--l-text); color: var(--l-bg); border-color: var(--l-text); }
.code-block {
  background: var(--l-bg); border: 2px solid var(--l-text);
  box-shadow: 6px 6px 0 var(--l-text);
}
.code-block-header {
  display: flex; gap: 8px; padding: 14px 18px;
  background: var(--l-surface2); border-bottom: 2px solid var(--l-text);
}
.code-block-header span {
  width: 11px; height: 11px; border: 2px solid var(--l-text); background: var(--l-bg);
}
.code-block-header span:first-child { background: var(--l-text); }
.code-block-pre {
  margin: 0; padding: 24px 28px; font: 500 13px/1.7 var(--l-mono);
  color: var(--l-text2); overflow-x: auto; white-space: pre;
}

/* ── Stats ────────────────────────────────────────── */
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; }
.stat-card {
  padding: 40px 24px;
  border: 2px solid var(--l-text); border-right: none;
  background: var(--l-bg); text-align: center;
}
.stat-card:last-child { border-right: 2px solid var(--l-text); }
.stat-value {
  display: block; font: 800 clamp(36px, 4vw, 52px)/1 var(--l-font);
  letter-spacing: -0.03em; color: var(--l-text); margin-bottom: 8px;
}
.stat-label { font-size: 12px; color: var(--l-text3); font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; }

/* ── Prose Demo ───────────────────────────────────── */
.prose-demo { max-width: 720px; margin: 0 auto; }
.prose-controls { display: flex; gap: 0; margin-bottom: 0; }
.prose-btn {
  width: 48px; height: 48px;
  border: 2px solid var(--l-text); border-bottom: none;
  background: var(--l-surface); color: var(--l-text2);
  font: 600 13px/1 var(--l-mono); cursor: pointer;
  transition: all 0.15s;
}
.prose-btn:hover { background: var(--l-surface2); color: var(--l-text); }
.prose-btn.active { background: var(--l-text); color: var(--l-bg); }
.prose-card {
  padding: 36px;
  border: 2px solid var(--l-text); background: var(--l-bg);
  box-shadow: 6px 6px 0 var(--l-text);
}
.prose-quote {
  font: 500 18px/1.65 var(--l-font); color: var(--l-text2);
  margin: 0; border-left: 3px solid var(--l-text); padding-left: 20px;
}

/* ── Pricing ──────────────────────────────────────── */
.pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; }
.pricing-card {
  padding: 40px 32px;
  border: 2px solid var(--l-text); border-right: none;
  background: var(--l-bg);
}
.pricing-card:last-child { border-right: 2px solid var(--l-text); }
.pricing-card.featured {
  background: var(--l-text); color: var(--l-bg);
}
.pricing-card.featured .pricing-name,
.pricing-card.featured .pricing-amount,
.pricing-card.featured .pricing-currency { color: var(--l-bg); }
.pricing-card.featured .pricing-desc { color: #999; }
.pricing-name { font: 600 16px/1 var(--l-font); margin: 0 0 16px; text-transform: uppercase; letter-spacing: 0.04em; }
.pricing-price { display: flex; align-items: baseline; gap: 2px; margin-bottom: 20px; }
.pricing-currency { font: 500 20px/1 var(--l-font); color: var(--l-text2); }
.pricing-amount { font: 800 52px/1 var(--l-font); letter-spacing: -0.03em; }
.pricing-period { font-size: 14px; color: var(--l-text3); }
.pricing-desc { font-size: 14px; color: var(--l-text2); margin: 0 0 28px; line-height: 1.6; }
.pricing-cta {
  display: inline-flex; align-items: center; justify-content: center;
  width: 100%; padding: 14px;
  font: 600 14px/1 var(--l-font); text-decoration: none;
  border: 2px solid var(--l-text); background: var(--l-bg); color: var(--l-text);
  text-transform: uppercase; letter-spacing: 0.04em;
  transition: all 0.15s;
}
.pricing-card.featured .pricing-cta {
  border-color: var(--l-bg); background: transparent; color: var(--l-bg);
}
.pricing-card.featured .pricing-cta:hover { background: var(--l-bg); color: var(--l-text); }
.pricing-cta:hover { background: var(--l-text); color: var(--l-bg); }

/* ── Testimonials ──────────────────────────────────── */
.testimonial-card {
  padding: 28px 32px;
  border: 2px solid var(--l-text); background: var(--l-bg);
  margin-bottom: 0;
}
.testimonial-card + .testimonial-card { border-top: none; }
.testimonial-card:hover { background: var(--l-surface); }
.testimonial-quote { font: 500 15px/1.65 var(--l-font); color: var(--l-text2); margin: 0 0 16px; }
.testimonial-quote::before { content: '"'; }
.testimonial-author { display: flex; flex-direction: column; gap: 2px; }
.testimonial-author strong { font-size: 13px; color: var(--l-text); text-transform: uppercase; letter-spacing: 0.04em; }
.testimonial-author span { font-size: 11px; color: var(--l-text3); }

/* ── Interactive Demo ─────────────────────────────── */
.interact-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
}
.interact-card {
  padding: 32px 24px;
  border: 2px solid var(--l-text); border-right: none;
  background: var(--l-bg);
  text-align: center; display: flex; flex-direction: column; align-items: center; gap: 16px;
}
.interact-card:last-child { border-right: 2px solid var(--l-text); }
.interact-label { font: 600 10px/1 var(--l-mono); color: var(--l-text3); letter-spacing: 0.08em; text-transform: uppercase; }
.interact-target {
  padding: 16px 32px;
  border: 2px solid var(--l-text); background: var(--l-surface);
  color: var(--l-text); font: 600 14px/1 var(--l-font);
  cursor: pointer; transition: all 0.15s; user-select: none;
  text-transform: uppercase; letter-spacing: 0.04em;
}
.interact-target:hover { background: var(--l-text); color: var(--l-bg); }
.interact-dismiss:hover { border-color: var(--l-text); color: var(--l-text); background: var(--l-bg); }
.interact-reset {
  padding: 10px 20px;
  border: 2px solid var(--l-text); background: var(--l-bg);
  color: var(--l-text2); font: 500 12px/1 var(--l-font); cursor: pointer;
  text-transform: uppercase; letter-spacing: 0.04em;
}
.interact-reset:hover { background: var(--l-text); color: var(--l-bg); }

/* ── CTA ──────────────────────────────────────────── */
.cta {
  padding: 120px 32px; text-align: center;
  border-top: 2px solid var(--l-text);
  border-bottom: 2px solid var(--l-text);
  background: var(--l-bg);
}
.cta-inner { position: relative; z-index: 1; }
.cta-kicker {
  display: inline-block; padding: 6px 14px;
  border: 2px solid var(--l-text); background: var(--l-text);
  color: var(--l-bg); font: 600 12px/1 var(--l-mono);
  letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 24px;
}
.cta-title { font: 800 clamp(32px, 4vw, 48px)/1.12 var(--l-font); letter-spacing: -0.03em; margin: 0 0 20px; }
.cta-desc { font-size: 16px; color: var(--l-text2); margin: 0 0 36px; }
.cta-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
.cta-btn {
  display: inline-flex; align-items: center; padding: 14px 32px;
  font: 600 14px/1 var(--l-font); text-decoration: none;
  border: 2px solid var(--l-text); background: var(--l-bg); color: var(--l-text);
  text-transform: uppercase; letter-spacing: 0.04em;
  transition: all 0.15s;
}
.cta-btn:hover { background: var(--l-text); color: var(--l-bg); }
.cta-btn-primary { background: var(--l-text); color: var(--l-bg); }
.cta-btn-primary:hover { background: var(--l-bg); color: var(--l-text); }

/* ── Footer ───────────────────────────────────────── */
.footer { max-width: 1200px; margin: 0 auto; padding: 60px 32px 40px; }
.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; margin-bottom: 48px; }
.footer-logo { font: 800 20px/1 var(--l-font); letter-spacing: -0.04em; text-transform: uppercase; display: block; margin-bottom: 8px; }
.footer-tagline { font-size: 13px; color: var(--l-text3); margin: 0; }
.footer-col { display: flex; flex-direction: column; gap: 10px; }
.footer-col strong { font-size: 12px; color: var(--l-text); margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700; }
.footer-link { font-size: 13px; color: var(--l-text3); text-decoration: none; transition: color 0.15s; cursor: pointer; }
.footer-link:hover { color: var(--l-text); }
.footer-bottom { text-align: center; padding-top: 24px; border-top: 2px solid var(--l-text); }
.footer-bottom p { font-size: 12px; color: var(--l-text3); margin: 0; }

/* ── Responsive ───────────────────────────────────── */
@media (max-width: 900px) {
  .hero-grid { grid-template-columns: 1fr; gap: 48px; }
  .hero-headline { font-size: clamp(32px, 6vw, 48px); }
  .hero-visual { display: none; }
  .lnav-links { display: none; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .interact-grid { grid-template-columns: repeat(2, 1fr); }
  .footer-grid { grid-template-columns: 1fr 1fr; }
  .feature-grid { grid-template-columns: 1fr; }
  .feature-card { border-right: 2px solid var(--l-text); }
  .feature-card:nth-child(n+2) { border-bottom: 2px solid var(--l-text); }
}
@media (max-width: 600px) {
  .hero { padding: 100px 20px 60px; }
  .section { padding: 60px 20px; }
  .stats-grid { grid-template-columns: 1fr; }
  .interact-grid { grid-template-columns: repeat(2, 1fr); }
  .footer-grid { grid-template-columns: 1fr; }
  .hero-actions { flex-direction: column; }
  .hero-btn { width: 100%; justify-content: center; }
  .feature-card { border-right: 2px solid var(--l-text); }
}
`,f=document.getElementById("root");f&&C.createRoot(f).render(e.jsx(z,{}));
