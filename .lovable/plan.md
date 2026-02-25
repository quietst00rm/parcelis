

# Redesign: Our Partners Page — World-Class Upgrade

## Current Problems

The page is functional but visually flat and generic:
- **Hero** is a plain gradient with small text and no visual depth — no parallax parcels, no layered elements, no energy
- **Cards** are basic white boxes with tiny icons, no visual hierarchy, no personality — they all look the same regardless of category or featured status
- **Category tabs and search** feel disconnected and utilitarian — two separate sticky bars stacked awkwardly
- **Modal** is cramped, lacks visual breathing room, and the two-column layout feels like a rushed form rather than a showcase
- **No Navbar/Footer integration** — the page renders Navbar via layout but the hero doesn't pull up behind it like other pages do (missing `-mt-24 pt-24` pattern)
- **No ParallaxParcels** in the hero — every other hero on the site has the animated parcel background

## Design Enhancements

### 1. Hero — Match Site Standard
- Add `-mt-24 pt-24` to pull hero behind the transparent navbar (consistent with HomeHero, HowItWorksHero)
- Add `ParallaxParcels` animated background
- Use the same gradient structure: `absolute inset-0 bg-gradient-to-br from-[#101155] via-[#1e22aa] to-[#2e32d4]`
- Increase heading size to `text-5xl md:text-7xl` with `font-extrabold` to match other heroes
- Increase subtitle to `text-xl md:text-2xl text-blue-100 font-light` for consistency
- Add a subtle aggregate stat strip at the bottom of the hero (e.g., "8 Verified Partners | 6 Categories | Exclusive Offers") to add substance

### 2. Filters — Unified Toolbar
- Merge category tabs and search into a single sticky bar instead of two stacked rows
- Category pills on the left, search input on the right, all in one row
- Use pill-style buttons for categories (rounded-full, filled when active) rather than underline tabs — more modern and tactile
- Single `sticky top-0 z-30` bar with subtle backdrop blur and border-bottom

### 3. Partner Cards — Premium Treatment
- **Featured cards** get a gradient border glow (primary blue shimmer) and a "Featured" ribbon badge, making them immediately distinct
- **All cards**: Increase padding, add a top-aligned partner logo area (larger icon in a 56px circle), name and category on separate lines with more spacing
- Add a subtle stat preview on the card itself (the two key stats shown as small inline badges, e.g., "99.4% On-Time | 20+ Countries") so users get value before clicking
- Hover effect: subtle border-primary transition + shadow-xl + slight scale(1.02), not just translate
- "View Partner →" becomes a proper button-style link at the card bottom with more visual weight
- Card minimum height consistency so grid rows align

### 4. Modal — Full Redesign
- **Increase max-width to `max-w-4xl`** for breathing room
- **Add a colored header band**: a small gradient strip at the top of the modal matching the brand blue, with the partner icon and name overlaid — gives the modal a polished "page" feel
- **"Verified Partner" badge**: always visible (remove `hidden sm:`)
- **Stats**: style as proper metric cards with borders and slightly larger typography
- **Exclusive Offer box**: add a subtle animated border or star icon to draw attention, use a warmer accent background
- **"Visit Partner Website" button**: full-width with icon, but add a secondary "Back to Directory" text link below it
- **Close button**: larger hit target, semi-transparent circle background always visible
- **Body scroll**: add a subtle scroll indicator if content overflows

### 5. Page Structure & Polish
- Wrap the whole page in the standard layout pattern so Navbar and Footer render properly
- Add `aria-label` on the modal overlay for accessibility
- Lock body scroll when modal is open (`overflow-hidden` on body)
- Add a brief "Become a Partner" CTA section before the footer — a simple centered block with a heading and a link to `/partner-with-us`

## Technical Changes

### File: `src/components/partners/PartnerDirectory.tsx` (REWRITE)
- Import `ParallaxParcels` for the hero background
- Restructure hero section with `-mt-24 pt-24`, absolute gradient, ParallaxParcels, larger typography
- Add hero stat strip
- Merge filter tabs + search into a single sticky toolbar row with pill-style category buttons
- Restyle partner cards: larger icons, stat previews, enhanced hover, featured glow
- Redesign modal: gradient header band, larger width, always-visible verified badge, body scroll lock
- Add "Become a Partner" CTA section at the bottom
- Add `useEffect` to toggle `document.body.style.overflow` when modal opens/closes

### File: `src/pages/OurPartnersPage.tsx` (MINOR)
- Already has `noindex, nofollow` — confirmed, no changes needed

### File: `src/App.tsx`
- No changes needed — route already exists

No new dependencies. No navigation changes. Page remains hidden.

