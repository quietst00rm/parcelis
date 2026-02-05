

# Updates to the /calculate Page

## Overview
Add three new sections and update copy in three existing sections on the `/calculate` page. The calculator, trust bar, and footer remain untouched.

## Final Section Order
1. Hero (UPDATE copy)
2. Problem Context Strip (NEW)
3. Calculator Section Header (NEW)
4. Calculator inputs + results (KEEP)
5. Volume Example Scenarios (NEW)
6. Trust bar (KEEP)
7. How It Works (UPDATE copy)
8. FAQ Accordion (NEW)
9. CTA Footer (KEEP)

---

## Changes

### 1. UPDATE: `CalculateHero.tsx`
- Change headline to: "Your Shipping Protection Is Leaving Money on the Table"
- Change subheadline to: "Most Shopify merchants lose thousands every month to package theft, damage claims, and customer refunds. Parcelis turns that cost center into a profit line."
- Add a row of three stats between the subheadline and the existing divider line:
  - "$15.7B" / "lost to porch piracy in 2024"
  - "250,000" / "packages stolen daily in the US"
  - "79%" / "won't return after a bad delivery"
- Stats layout: horizontal with gap-12 on desktop, vertical gap-6 on mobile, thin white vertical dividers (opacity-20, h-10) between stats on desktop only

### 2. NEW: `ProblemContextStrip.tsx`
- Dark navy background (#141564), py-10, centered text, max-w-[800px]
- Single paragraph of white text (text-lg, font-medium): "Right now, every lost or stolen package costs you the product, the reshipping, the support ticket ($25-70 each), and often the customer. What if that same risk generated revenue instead?"

### 3. NEW: `CalculateSectionHeader.tsx`
- Simple centered text block on white background
- "Calculate Your Profit" in text-3xl font-bold, color #1e2099
- Subtext: "Plug in your store's real numbers. Every dollar below is profit you're not collecting today." in text-lg text-gray-500, max-w-[600px], centered
- mb-10 spacing below

### 4. UPDATE: `ProfitCalculator.tsx`
- Remove the top padding/section wrapper from this component so it sits flush under the new section header. The section header component will handle spacing above. Only a small structural tweak -- no logic or UI changes to inputs/results.

### 5. NEW: `VolumeScenarios.tsx`
- Light gray background (#f8fafc), py-16
- Header: "What Merchants at Your Scale Are Earning"
- Subheader: "Based on 43% opt-in rate and $2.49 profit per insured package."
- Four static cards in a grid (lg:grid-cols-4, md:grid-cols-2, single column mobile)
- Cards show tier label, order volume, monthly profit, and annual profit with the exact values specified

### 6. UPDATE: `CalculateHowItWorks.tsx`
- Section header: "Three Steps. Zero Hassle."
- Step 1: title "Install", description "Add Parcelis to your Shopify store from the App Store. One click. No code. Live in under 15 minutes."
- Step 2: title "Set Your Price", description "Choose what to charge customers for protection at checkout. The default gives you roughly 50% margin on every insured package."
- Step 3: title "Collect Profit", description "Customers opt in at checkout. We handle every claim start to finish. You keep the spread. Your team does nothing."

### 7. NEW: `CalculateFAQ.tsx`
- White background, py-16
- Header: "Common Questions" centered, text-3xl font-bold, #111827
- Uses the existing Accordion component from `@/components/ui/accordion`
- Merchant-focused FAQ items (6-8 questions) covering: how pricing works, what merchants pay, claim process, opt-in rates, integration time, contract terms, coverage details
- Styled consistently with the existing FAQ page pattern (rounded-lg cards, px-6)

### 8. UPDATE: `CalculatePage.tsx`
- Import and render all new components in the correct order
- New order: CalculateHero, ProblemContextStrip, CalculateSectionHeader + ProfitCalculator (wrapped together), VolumeScenarios, CalculateTrust, CalculateHowItWorks, CalculateFAQ, CalculateCTA

## Technical Details

### Files to Create
- `src/components/calculate/ProblemContextStrip.tsx`
- `src/components/calculate/CalculateSectionHeader.tsx`
- `src/components/calculate/VolumeScenarios.tsx`
- `src/components/calculate/CalculateFAQ.tsx`

### Files to Modify
- `src/components/calculate/CalculateHero.tsx` -- copy + stats row
- `src/components/calculate/CalculateHowItWorks.tsx` -- copy only
- `src/components/calculate/ProfitCalculator.tsx` -- minor wrapper adjustment
- `src/pages/CalculatePage.tsx` -- imports and section ordering

### No Changes To
- Calculator logic, sliders, results cards, base cost banner
- Trust bar (`CalculateTrust.tsx`)
- CTA footer (`CalculateCTA.tsx`)
- Navbar, Footer, or any other pages

