# Mwangaza Frontend - Quick Reference Guide

## Project Structure
```
apps/web/
├── app/
│   ├── layout.tsx           # Root layout with fonts
│   ├── globals.css          # Global styles and animations
│   ├── page.tsx             # Splash screen (home)
│   ├── lesson/page.tsx      # Lesson screen
│   ├── quiz/page.tsx        # Quiz screen
│   ├── results/page.tsx     # Results screen
│   ├── profile/page.tsx     # User profile
│   ├── premium/page.tsx     # Premium upgrade
│   └── admin/page.tsx       # Admin dashboard
├── components/
│   └── ui/                  # shadcn/ui components
├── lib/
│   └── utils.ts             # Utility functions
└── next.config.ts           # Next.js configuration

root/
├── tailwind.config.js       # Tailwind CSS config
├── postcss.config.js        # PostCSS config
└── package.json             # Dependencies
```

---

## Brand Colors (CSS Variables)
```css
--gold: #D4A017              /* Primary CTA, highlights */
--gold-light: #FDF3D0        /* Backgrounds, info */
--gold-dark: #A67C00         /* Hovers, borders */
--background: #F8F4E8        /* Page background */
--surface: #FFFFFF           /* Cards, containers */
--text: #1A1A2E              /* Primary text */
--success: #22C55E           /* Correct/positive */
--error: #EF4444             /* Wrong/negative */
```

**Usage in Tailwind:**
```tsx
<button className="bg-gold text-white">Button</button>
<div className="text-gold-dark">Dark text</div>
```

---

## Fonts
```tsx
// Plus Jakarta Sans (headings)
<h1 className="font-heading">Heading</h1>

// DM Sans (body)
<p className="font-body">Body text</p>
```

---

## Global Animations
All animations defined in `apps/web/app/globals.css`:

| Animation | Use Case | Duration |
|-----------|----------|----------|
| `fade-in-up` | Page content enter | 500ms |
| `pulse-dot` | Loading indicators | 1500ms |
| `slide-in-right` | Side panels | 400ms |
| `slide-out-left` | Exit animations | 400ms |
| `confetti-fall` | Celebration | 3-4s |
| `trophy-pulse` | Emphasis | 2s infinite |
| `star-pop` | Reveal | 200ms |

**Usage:**
```tsx
<div style={{ animation: 'fade-in-up 500ms ease-out' }}>
  Content
</div>
```

---

## Screen Routes
| Route | Component | Status |
|-------|-----------|--------|
| `/` | Splash | ✅ Ready |
| `/lesson` | Lesson | ✅ Ready |
| `/quiz` | Quiz | ✅ Ready |
| `/results` | Results | ✅ Ready |
| `/profile` | Profile | ✅ Ready |
| `/premium` | Premium | ✅ Ready |
| `/admin` | Admin | ✅ Ready |

---

## Key Components & Hooks

### Custom Hooks
```tsx
// useCountUp - Animated counter
function useCountUp(target: number, duration: number = 1000, startDelay: number = 500) {
  // Returns count value that animates from 0 to target
}
```

### State Pattern for Animations
```tsx
// Visible animation trigger
const [visible, setVisible] = useState(false);
useEffect(() => {
  const timer = setTimeout(() => setVisible(true), delay);
  return () => clearTimeout(timer);
}, [delay]);

// Apply transform
style={{ transform: visible ? "scale(1)" : "scale(0)" }}
```

---

## Responsive Design

### Mobile-First Approach
```tsx
// Mobile first (default)
<div className="p-4">

// Tablet/desktop
<div className="p-4 lg:p-8">
```

### Viewport Settings
- Width: 375px minimum (mobile)
- No zooming (PWA)
- Safe area support for notches

---

## Code Patterns

### Form Input with State
```tsx
const [selectedId, setSelectedId] = useState<string | null>(null);
const [isAnswered, setIsAnswered] = useState(false);

const handleSelect = (id: string) => {
  setSelectedId(id);
  setIsAnswered(true);
};
```

### Modal with State
```tsx
const [showModal, setShowModal] = useState(false);

return (
  <>
    <button onClick={() => setShowModal(true)}>Open</button>
    {showModal && (
      <div className="fixed inset-0 bg-black/50">
        {/* Modal content */}
      </div>
    )}
  </>
);
```

### Conditional Styling
```tsx
<div className={cn(
  "base-class",
  condition ? "active-class" : "inactive-class"
)}>
  Content
</div>
```

---

## Common Tasks

### Add a New Screen
1. Create `app/[screen]/page.tsx`
2. Use existing screens as template
3. Follow component structure (UI > Logic > Layout)
4. Test responsive on 375px

### Add Global Animation
1. Add `@keyframes` in `globals.css`
2. Use with inline style or as CSS class
3. Document in animation table

### Update Brand Color
1. Change CSS variable in `globals.css`
2. All components automatically update
3. Also update Tailwind config if needed

### Fix Mobile Layout
1. Check viewport meta tag in layout.tsx
2. Use `lg:` breakpoint for tablet+
3. Test on 375px screen
4. Check safe area padding

---

## Performance Tips

### Animations
- Use CSS animations (not JavaScript)
- Use `transform` and `opacity` for best performance
- Avoid `left`, `top`, `width`, `height` animations

### Images
- Use SVG for icons and illustrations
- Optimize PNG/JPG with tools like TinyPNG
- Lazy load below-the-fold images

### Rendering
- Keep components focused and small
- Avoid rendering large lists without pagination
- Use React.memo for expensive calculations

---

## Debugging

### Console Logging
```tsx
console.log("[v0] Component loaded:", { props });
```

### Check Build
```bash
npm run build
```

### Dev Server
```bash
npm run dev
# Runs on http://localhost:3000
```

### TypeScript Check
```bash
npm run build  # Runs TypeScript check
```

---

## Environment Setup

### Required
- Node.js 18+
- npm or pnpm
- Next.js 14+

### Optional
- VSCode with TypeScript extension
- Tailwind CSS IntelliSense extension
- React Developer Tools browser extension

---

## Common Errors & Fixes

| Error | Cause | Fix |
|-------|-------|-----|
| `undefined is not a function` | Missing import | Check import statement |
| `Cannot find module` | Wrong path | Use absolute path `/` |
| `className not applied` | Tailwind not scanning | Run `npm run build` |
| `Animation jittery` | JS rendering conflicts | Use CSS animation only |

---

## Best Practices Checklist

- [x] Use semantic HTML (`<button>`, `<header>`, etc.)
- [x] Provide ARIA labels for icons
- [x] Test on 375px mobile viewport
- [x] Use CSS variables for colors
- [x] Keep components under 200 lines
- [x] Document complex state logic
- [x] Use TypeScript interfaces
- [x] No hardcoded values in components
- [x] Test animations for smoothness
- [x] Verify color contrast (WCAG AA)

---

## Useful Links

- **Tailwind CSS**: https://tailwindcss.com
- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Lucide Icons**: https://lucide.dev
- **TypeScript**: https://www.typescriptlang.org

---

## Getting Help

### For Frontend Issues
1. Check DEBUGGING_REPORT.md for detailed analysis
2. Review FRONTEND_CHECKLIST.md for status
3. Check console for errors
4. Run `npm run build` to check TypeScript

### For Design Issues
1. Compare with brand colors in CSS variables
2. Check typography classes (font-heading, font-body)
3. Verify spacing matches design system (p-4, gap-3, etc.)

---

**Last Updated**: May 7, 2026
**Version**: 1.0
**Status**: Production Ready
