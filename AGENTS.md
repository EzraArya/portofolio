# AI Agent Guidelines (AGENTS.md)

This file contains crucial context, design principles, and performance standards for AI assistants (Antigravity, Copilot, Gemini) editing this portfolio codebase. Please read and apply these patterns before making any modifications.

---

## 🛠 Tech Stack & Architecture

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS & Custom Vanilla CSS (located in `src/app/globals.css`)
- **Animations**: `framer-motion` (Client-side)
- **Icons**: Inline SVGs (for speed and low bundle sizes)

---

## ⚡ Performance Policies (Crucial for Mobile)

To prevent frame drops and visual lag during tab transitions on mobile, follow these strict development rules:

### 1. Canvas & Graphics Optimization (`SakuraBackground.tsx`)
- Keep any requestAnimationFrame (rAF) loops extremely lightweight.
- **Mobile Throttling**: Always define a mobile fallback mode (e.g., reduce falling petal count from 50 to 15 under 768px).
- **Avoid Dynamic Allocations**: Do not call expensive Canvas API context states such as `ctx.createLinearGradient()` on every frame on mobile. Use solid fill fallbacks instead.
- **Resolution Clamping**: Clamp `devicePixelRatio` to a maximum of `1.5` on mobile devices to prevent excessive pixel-fill work on high-density displays (e.g., 3x Retina screens).
- **Visibility Pausing**: Always register a `visibilitychange` listener to completely pause rAF loops when the tab or browser goes into the background.

### 2. Layout Transitions (`layout-transition.tsx`)
- Page transitions are wrapped with `AnimatePresence mode="wait"`. Keep durations short on mobile (e.g., `exit: 0.1s`, `enter: 0.15s`) to keep tab switching feeling snappy.
- **Route Freezing**: Next.js unmounts page subtrees immediately on navigation. To allow exit animations, we wrap page children in a `FrozenRouter`. 
- **React Concurrent Warning & Content Swap Fix**: Do not use dynamic route tracking state or custom `usePreviousValue` hooks inside `FrozenRouter` as they trigger React's concurrent rendering warning. Also, we must freeze the `children` prop using `useRef(props.children).current` so that exiting pages keep rendering their original content (instead of swapping to the new route content prematurely during the exit transition):
  ```tsx
  function FrozenRouter(props: { children: React.ReactNode }) {
    const context = useContext(LayoutRouterContext);
    const frozenContext = useRef(context).current; // Snapshot-freezes context on mount
    const frozenChildren = useRef(props.children).current; // Snapshot-freezes children on mount
    return (
      <LayoutRouterContext.Provider value={frozenContext}>
        {frozenChildren}
      </LayoutRouterContext.Provider>
    );
  }
  ```

### 3. Compositing & Blend Overlays (`Spotlight.tsx`)
- Full-screen effects with heavy layout blending (like `mix-blend-overlay` in Spotlight) should be **disabled completely on mobile** (return `null` or use `display: none` via `@media`).
- Avoid registering mouse event listeners (e.g., `mousemove`) on touch devices where they will never fire.

### 4. Backdrop Filters & Blurs
- `backdrop-blur-*` is extremely expensive on mobile GPUs when rendered on top of moving canvases.
- **Mobile Policy**: Disable `backdrop-blur` on page content cards beneath `768px` using Tailwind classes or the `.backdrop-blur` utility media query inside `globals.css`. Pinned/floating persistent components (like `FloatingNav`) may keep blur since they are small and persistent.
- Increase background opacity slightly on mobile fallbacks to maintain text contrast without the blur filter.

### 5. CSS Wildcard Transitions
- **Never** use broad wildcard selectors for CSS transition properties (e.g., `[class*="bg-"] { transition: ... }`). This forces style recalculations across dozens of elements during layout or page updates.
- Scope style transitions specifically to container layers (like `body` or `.theme-transition`) and restrict expensive transitions to desktop screens (`@media (min-width: 768px)`) where possible.

---

## 🎨 Design Aesthetics & Theme Standards

- **Theme System**: Managed by `next-themes` and configured in `src/app/components/theme-provider.tsx`.
- **Aesthetic**: Premium dark mode by default, glassmorphism on persistent components, soft linear color gradients, and micro-animations with Framer Motion.
- **Typography**: Heading font uses `Space Grotesk` (`--font-heading`), code uses `JetBrains Mono` (`--font-mono`), and body text uses `GeistSans` (`font-sans`).
