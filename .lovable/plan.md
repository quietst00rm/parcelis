

# Merchant Profit Calculator - Hidden Page at `/calculate`

## Overview
Create a private, hidden merchant profit calculator page accessible only via direct link at `/calculate`. This page allows prospective merchants to see how much profit they can earn by offering Parcelis package protection. It will not appear in site navigation.

## Files to Create

### 1. `src/pages/CalculatePage.tsx`
The main page component that assembles all five sections in order.

### 2. `src/components/calculate/CalculateHero.tsx`
Full-width hero with solid royal blue background (`#1e2099`), white headline ("See How Much You'll Earn with Parcelis"), subheadline with slight transparency, and a subtle centered divider line. No buttons or CTAs.

### 3. `src/components/calculate/ProfitCalculator.tsx`
The core interactive calculator section on white background. Two-column layout on desktop (inputs left ~45%, results right ~55%), stacking on mobile.

**Left Column - Inputs Card:**
- Average Order Value (number input with `$` prefix, default `$100`)
- Monthly Orders (synced slider + number input, range 100-50,000, step 100, default 5,000)
- Customer Opt-In Rate (synced slider + percentage input, range 5%-85%, step 1%, default 43%)
- Your Selling Price (number input with `$` prefix, auto-calculated default based on AOV formula, editable with "Reset to suggested" link when overridden)
- Info banner showing Parcelis base cost for the current AOV

**Right Column - Results (real-time, animated):**
- **Monthly Profit Card** - Royal blue background, large hero number, annual projection
- **Breakdown Card** - Receipt-style list with dotted separators showing total orders, insured packages, revenue, cost, profit, profit per package
- **Scaling Projection Card** - Three columns showing monthly, quarterly, annual projections

**Calculation Logic:**
- Base cost: AOV <= $200 = $2.50; AOV > $200 = $2.50 + (Math.ceil((AOV-200)/100) * $1.25), capped at $200
- Default selling price: AOV <= $200 = $4.96; AOV > $200 = $4.96 + (Math.ceil((AOV-200)/100) * $2.48)
- Insured packages = Math.round(monthlyOrders * optInRate/100)
- Profit = (insuredPackages * sellingPrice) - (insuredPackages * baseCost)
- Negative profit displayed in red

### 4. `src/components/calculate/CalculateTrust.tsx`
Light gray background section with three trust points in a horizontal grid: "Backed by The Hartford", "5-7 Day Claims Resolution", "$2,500 per box coverage". Uses lucide-react icons (Shield, Clock, Package).

### 5. `src/components/calculate/CalculateHowItWorks.tsx`
White background section with three numbered steps (Integrate, Sell, Profit) in a horizontal row with decorative arrow connectors on desktop.

### 6. `src/components/calculate/CalculateCTA.tsx`
Royal blue background CTA footer with headline, subtext, and two buttons:
- "Get Started Free" (white bg, blue text) linking to `https://apps.shopify.com/parcelis`
- "Talk to Our Team" (transparent, white border) linking to `https://www.myparcelis.com/contact`

### 7. `src/hooks/use-animated-number.tsx`
A custom hook for animating number transitions over 400ms with smooth easing. Used by all result values in the calculator.

## File to Modify

### `src/App.tsx`
Add a new route: `<Route path="/calculate" element={<CalculatePage />} />`. No changes to Navbar or Footer.

## Technical Details

- **Number animation**: Custom hook using `requestAnimationFrame` with cubic ease-out over 400ms, tracking previous value via `useRef`
- **Selling price override**: Boolean `hasOverride` state flag. When user manually edits selling price, flag is set to `true` and AOV changes no longer auto-update it. "Reset to suggested" link sets flag back to `false`
- **Slider + input sync**: Both controls share the same state variable, each updating the other on change
- **Accessibility**: `aria-live="polite"` on results container, proper `aria-label` on all inputs, visible focus rings, WCAG AA color contrast
- **Edge cases**: Division by zero guard on profit-per-package, $0 defaults for empty/zero inputs, negative profit shown in red
- **Responsive**: `lg:grid-cols-2` for calculator layout, `md:grid-cols-3` for trust/steps sections, everything stacks on mobile
- **Styling**: Matches existing Parcelis design tokens from `index.css` -- uses brand royal blue (`#1e2099`), Inter font, rounded cards with shadows

