

# Mobile Optimization Plan: Our Partners Page

## Issues Identified

### 1. Glassmorphic Stat Bar Overflows / Gets Clipped (CRITICAL)
The `inline-flex` stat bar with three stats side-by-side overflows the viewport at 390px. The third stat ("4 Exclusive Offers") is cut off at the right edge with no scroll indicator. The bar uses `px-8` padding per stat cell, which is too generous for mobile.

**Fix**: On mobile, stack the stats vertically or use a compact 3-column grid. Replace `inline-flex items-center gap-0` with a responsive approach: `flex flex-col sm:flex-row sm:inline-flex` or use `grid grid-cols-3` on mobile with reduced `px-4 py-3` padding. Remove the vertical dividers on mobile and use a simpler layout.

### 2. Hero Heading Too Large on Mobile
`text-5xl` (3rem / 48px) for the h1 on mobile is oversized — "OUR PARTNER ECOSYSTEM." spans 3 lines awkwardly. The line break (`<br />`) between "PARTNER" and "ECOSYSTEM" also creates an odd reading pattern on small screens.

**Fix**: Reduce to `text-3xl md:text-5xl lg:text-7xl`. Remove the `<br />` and let text wrap naturally, or use it only on `md+` with a `hidden md:inline` approach.

### 3. Cards Have Excessive Padding on Mobile
Cards use `p-10` (40px) padding uniformly. On a 390px viewport that leaves very little content width, making text feel cramped despite the generous whitespace.

**Fix**: Use `p-6 md:p-10` — comfortable on mobile, generous on desktop.

### 4. Cards Have `min-h-[360px]` — Forces Tall Cards on Mobile
The minimum height constraint creates overly tall cards with excessive whitespace at the bottom on mobile, especially for partners with short descriptions.

**Fix**: Use `min-h-0 md:min-h-[360px]` — let cards size naturally on mobile, enforce minimum height on desktop for grid uniformity.

### 5. Filter Toolbar Spacing Issues
The category pills row uses `overflow-x-auto` which is correct, but there is no visual hint that it scrolls horizontally. The "Software" and "Creative" pills are likely off-screen. The search input takes full width below the pills which is fine, but the `py-3` on the toolbar is tight.

**Fix**: Add a subtle right fade/gradient mask on the pills container to indicate horizontal scroll. Consider `py-4` for better touch targets on mobile.

### 6. Modal Header Cramped on Mobile
The modal header shows the icon, name, category, and "Verified Partner" badge all in one flex row. At 390px, the badge gets squeezed and wraps awkwardly (as seen in the screenshot — it's a two-line badge). The close button overlaps content.

**Fix**: Stack the modal header on mobile — icon + name on one row, badge below. Use `flex-col sm:flex-row` for the header layout. Increase close button spacing.

### 7. Modal Body Uses `md:grid-cols-2` — Single Column on Mobile is Correct but Has No Section Divider
On mobile, the "Who They Are" and "Why We Trust Them" sections stack vertically with no visual separation, making it read as one continuous block.

**Fix**: Add a `border-t border-border/40 pt-6` to the second column's content wrapper on mobile, or add a subtle separator `<hr>` between sections that hides on `md+`.

### 8. Modal Padding Too Wide on Mobile
The modal body and footer use `p-8` (32px) padding. On a 390px screen that's excessive.

**Fix**: Use `p-5 md:p-8` for the modal body and footer sections.

### 9. Grid Section Top Padding Excessive
`py-16` on mobile for the grid section creates a large gap between the sticky toolbar and the first card.

**Fix**: Use `py-10 md:py-16 lg:py-24`.

### 10. Hero Description Line Length
`text-lg md:text-xl` for the hero description paragraph is fine, but `mb-16` (64px) bottom margin before the stat bar is excessive on mobile.

**Fix**: Use `mb-10 md:mb-16`.

## Changes

### File: `src/components/partners/PartnerDirectory.tsx`

All changes are within this single file:

1. **Hero h1**: `text-3xl md:text-5xl lg:text-7xl`, remove `<br />` or make it desktop-only
2. **Hero description margin**: `mb-10 md:mb-16`
3. **Glassmorphic stat bar**: Convert to `grid grid-cols-3` on mobile with compact padding (`px-4 py-3 md:px-8 md:py-5`), hide vertical dividers on mobile (`hidden sm:block`)
4. **Card padding**: `p-6 md:p-10`
5. **Card min-height**: `min-h-0 md:min-h-[360px]`
6. **Grid section padding**: `py-10 md:py-16 lg:py-24`
7. **Filter toolbar**: Add right fade indicator for horizontal scroll on mobile
8. **Modal header**: Stack layout on mobile with `flex-col sm:flex-row` for the inner content, badge moves below name
9. **Modal body/footer padding**: `p-5 md:p-8`, `px-5 pb-5 md:px-8 md:pb-8`
10. **Modal section divider**: Add a `border-t` between sections on mobile

No new files, no new dependencies.

