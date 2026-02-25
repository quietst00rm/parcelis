

# Fix: Uniform Partner Card Grid

## Problem
Featured partners use a double-width horizontal card (`md:col-span-2`) while standard partners use single-column vertical cards with varying heights (`min-h-[360px]`). This creates an uneven, inconsistent grid layout.

## Solution
Remove the FeaturedCard component entirely. All partners — featured or not — use the same StandardCard layout in a uniform 3-column grid. Featured partners are distinguished only by a subtle "Featured" badge and a green-tinted icon background, not by card size or layout.

## Changes

### File: `src/components/partners/PartnerDirectory.tsx`

1. **Remove the `FeaturedCard` component** (lines 252-333) entirely

2. **Update `StandardCard`** to handle featured partners:
   - If `partner.featured`, show the green "Featured" badge (star icon + text) next to the name
   - If `partner.featured`, use `bg-success/10` for the icon background with `text-success` icon color
   - Keep everything else the same — same padding, same height, same layout

3. **Update the grid rendering** (lines 516-528):
   - Remove the conditional `featured` check
   - Render all partners with `<StandardCard>` — no `col-span-2` anywhere
   - Every card sits in a single grid cell

Result: a perfectly uniform 3-column grid where every card is the same size, with featured partners distinguished only by a badge and accent color.

