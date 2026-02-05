

# Streamline /calculate Page Above the Calculator

## Overview
Three targeted changes to tighten the top of the page and get users to the calculator faster. No changes to the calculator, results, or any sections below it.

---

## CHANGE 1: Remove Problem Context Strip

**File:** `src/pages/CalculatePage.tsx`

- Remove the `ProblemContextStrip` import
- Remove `<ProblemContextStrip />` from the JSX
- Page flow becomes: `CalculateHero` directly followed by `CalculateSectionHeader` + `ProfitCalculator`

## CHANGE 2: Tighten the Hero

**File:** `src/components/calculate/CalculateHero.tsx`

- Delete the subheadline paragraph entirely (the `<p>` with "Most Shopify merchants lose thousands...")
- Change section padding from `py-16 md:py-24` to `pt-16 md:pt-24 pb-12` so the bottom is tighter
- Remove the horizontal divider line (`<div className="w-[120px] h-px bg-white/20 mx-auto mt-10" />`)
- Adjust stats row margin: keep `mt-8` but since there's no subheadline above, the stats will sit closer to the headline naturally

Final hero structure: Headline -> Stats row -> end.

## CHANGE 3: Reduce Calculator Section Header Spacing

**File:** `src/components/calculate/CalculateSectionHeader.tsx`

- Change the outer div padding from `pt-16 pb-0` to `pt-12 pb-4`
- This tightens the gap between the hero and the "Calculate Your Profit" header

---

## Files Modified

| File | Change |
|------|--------|
| `src/pages/CalculatePage.tsx` | Remove ProblemContextStrip import and usage |
| `src/components/calculate/CalculateHero.tsx` | Remove subheadline, remove divider, adjust bottom padding |
| `src/components/calculate/CalculateSectionHeader.tsx` | Change padding to `pt-12 pb-4` |

## Files NOT Modified
- Calculator logic, sliders, results cards
- Volume scenarios, Trust bar, How It Works, CTA footer
- Navbar, Footer, or any other pages

