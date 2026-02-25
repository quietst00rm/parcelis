

# Build "Our Partners" Directory Page

## Overview

Create a new hidden page at `/our-partners` that showcases Parcelis's featured partners. The page follows the structure from the reference screenshots: a hero section, category filter tabs, search bar, a 3-column partner card grid, and a detail modal that opens when clicking a partner card. All styling uses Parcelis brand colors and typography -- not the dark theme from the reference.

## Page Structure

```text
┌─────────────────────────────────────────────┐
│  HERO                                       │
│  Blue gradient bg (brand style)             │
│  "Directory" pill label                     │
│  "OUR PARTNER ECOSYSTEM." heading           │
│  Subtitle paragraph                         │
├─────────────────────────────────────────────┤
│  CATEGORY TABS                              │
│  All | Logistics | Finance | Legal | ...    │
│  Underline style, horizontal scroll mobile  │
├─────────────────────────────────────────────┤
│  SEARCH BAR (sticky)                        │
│  "Find a partner..."                        │
├─────────────────────────────────────────────┤
│  PARTNER GRID (3 cols desktop, 1 mobile)    │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│  │ Card    │ │ Card    │ │ Card    │       │
│  │ Name    │ │ Name    │ │ Name    │       │
│  │ Cat tag │ │ Cat tag │ │ Cat tag │       │
│  │ Desc    │ │ Desc    │ │ Desc    │       │
│  │ View -> │ │ View -> │ │ View -> │       │
│  └─────────┘ └─────────┘ └─────────┘       │
├─────────────────────────────────────────────┤
│  FOOTER (existing site footer)              │
└─────────────────────────────────────────────┘
```

**Partner Detail Modal** (opens on card click):
```text
┌─────────────────────────────────────────────┐
│  Header: Icon + Name + Category + "Verified"│
│  ┌──────────────┐ ┌──────────────────┐      │
│  │ WHO THEY ARE │ │ WHY WE TRUST THEM│      │
│  │ Description  │ │ Trust text       │      │
│  │ Stats cards  │ │                  │      │
│  │ Tags         │ │ Exclusive Offer  │      │
│  └──────────────┘ └──────────────────┘      │
│  [ Visit Partner Website ] button           │
└─────────────────────────────────────────────┘
```

## Visual Adaptation (Reference to Parcelis)

- **Hero background**: Brand blue gradient (`#101155` to `#1e22aa` to `#2e32d4`) instead of dark/orange
- **Cards**: White background with subtle border and shadow on white/light gray page background, hover lift effect
- **Category tabs**: Brand blue underline for active tab (not orange)
- **"View Partner" links**: Brand blue text with arrow
- **"Verified Partner" badge**: Brand blue or green accent
- **Modal**: White background, brand blue accents, clean light theme
- **"Exclusive Offer" box**: Brand light blue background (`#e8e9ff`) with brand blue accent
- **CTA button**: Brand blue solid button (not orange)
- **Typography**: Plus Jakarta Sans for headings, Inter for body (matching site)

## Files to Create/Modify

### 1. `src/pages/OurPartnersPage.tsx` (NEW)
- Main page component with Helmet meta tags (noindex, nofollow)
- Hero section with brand gradient
- Imports and renders the partner directory component
- Scrolls to top on mount

### 2. `src/components/partners/PartnerDirectory.tsx` (NEW)
- Contains the full directory logic: state for category filter, search query, selected partner
- Category tabs with filtering
- Search input
- 3-column responsive grid of partner cards
- Partner detail modal (overlay)
- Placeholder partner data (can be swapped later with real partners)
- Uses lucide-react icons for partner icons and UI elements

### 3. `src/App.tsx` (MODIFY)
- Import `OurPartnersPage`
- Add route: `<Route path="/our-partners" element={<OurPartnersPage />} />`
- No navbar or footer changes

## Partner Data Structure

Each partner will have: `id`, `name`, `category`, `description`, `icon`, `featured` flag, `fullDescription`, `whyWeTrust`, `stats` array, `tags` array, optional `offer`, and `website` URL. Initially populated with placeholder partners relevant to the e-commerce/shipping space (not the Amazon-specific ones from the reference).

## Technical Details

- Categories adapted for Parcelis context: All, Logistics, Finance, Legal, Software, Creative
- Search filters by name and description
- Modal uses a fixed overlay with backdrop blur
- Scroll-triggered fade-in animations using the existing `useScrollReveal` hook
- Fully responsive: single column on mobile, 2 on tablet, 3 on desktop
- Page is hidden: no links added to Navbar or Footer

