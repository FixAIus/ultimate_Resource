## Instagram Appointment Setting Mastery – High-Ticket B2B Coach Resource

Premium, custom-coded resource hub for mastering Instagram appointment setting.

### Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS (v4) with custom design tokens
- Framer Motion animations
- Lucide React icons
- Railway deployment

### Local Setup
```bash
npm i
npm run dev
```

### Build
```bash
npm run build && npm start
```

### Environment
Copy `.env.example` to `.env` and set values:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GA_ID` (optional)

### Railway
Included `railway.toml`. Deploy by connecting repo in Railway and setting env vars.

### Project Structure
```
src/
  app/
    globals.css
    layout.tsx
    page.tsx
    sitemap.ts
    robots.ts
    resources/
      templates/page.tsx
      checklists/page.tsx
  components/
    analytics/Analytics.tsx
    layout/{SiteHeader,StickyTabs,ScrollProgress,PageTransition}.tsx
    sections/{Hero,ContentSections,BookAudit}.tsx
  lib/{utils,constants}.ts
  styles/globals.css
```

### Features
- Premium hero, tabs navigation, deep-dive sections
- Smooth transitions, scroll progress, micro-interactions
- Sitemap/robots, SEO-ready metadata, WebP/AVIF images

### Notes
- Replace `public/og-cover.png` with your branded image
- Update `metadataBase` in `src/app/layout.tsx`

