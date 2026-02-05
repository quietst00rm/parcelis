

# Fix Issues on /calculate Page

## Four targeted fixes with no changes to the calculator, results, sliders, or logic.

---

## FIX 1: Hero Section Spacing (`CalculateHero.tsx`)

Rewrite the hero section styling for spacious, confident layout:

- Outer padding: `py-16 md:py-24` (currently `py-14 md:py-20`)
- Headline: add `mt-8` for navbar clearance
- Subheadline: change `max-w-2xl` to `max-w-[640px]`, change `mb-8` to `mb-12`
- Stats row: add `mt-8`, change gap from `gap-6 md:gap-12` to `gap-6 md:gap-16`
- Each stat label: add `max-w-[160px] mx-auto`
- Divider line at bottom: add `mt-10` (currently has no top margin, relies on parent `mb-8`)
- Remove `mb-8` from the stats row wrapper since the divider line handles spacing via `mt-10`

## FIX 2: Problem Context Strip (`ProblemContextStrip.tsx`)

- Replace text with: "Every lost or stolen package costs you the product, the reshipping, the support ticket ($25-70 each), and often the customer. Parcelis turns that liability into a new revenue line."
- This removes the rhetorical question and the em-dash (`$25–70` becomes `$25-70`)
- Change padding from `py-10` to `py-12`

## FIX 3: Remove FAQ Section (`CalculatePage.tsx`)

- Remove the `CalculateFAQ` import and its usage from `CalculatePage.tsx`
- The `CalculateFAQ.tsx` file can remain (unused) or be deleted -- either way it will not render
- Page flow becomes: CalculateHowItWorks directly followed by CalculateCTA

## FIX 4: CTA Footer Copy (`CalculateCTA.tsx`)

- Headline: "The Math Speaks for Itself"
- Subtext: "Install Parcelis today. No contracts. No setup fees. Start earning on your next order."
- Primary button text: "Install on Shopify"
- Add a line below both buttons: "Free to install. No monthly fees. No credit card required." in `text-white/60 text-sm text-center mt-4`

---

## Files Modified

| File | Change |
|------|--------|
| `src/components/calculate/CalculateHero.tsx` | Spacing, padding, max-widths |
| `src/components/calculate/ProblemContextStrip.tsx` | New copy, padding increase |
| `src/pages/CalculatePage.tsx` | Remove CalculateFAQ import and usage |
| `src/components/calculate/CalculateCTA.tsx` | New copy, button text, disclaimer line |

## Files NOT Modified
- Calculator logic, sliders, results cards
- Trust bar, How It Works section
- Navbar, Footer, or any other pages

