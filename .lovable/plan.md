

# Update Portfolio Earnings Breakdown to 10,000 Packages

## What Changes

The "Portfolio Earnings Breakdown" reference cards currently use 5,000 packages/merchant. This updates them to use 10,000 packages/merchant while keeping the 43% opt-in rate.

## New Numbers

With the formula: `insured = merchants * 10,000 * 0.43`, then `monthly = insured * $0.10`:

| Merchants | Monthly   | Annual     |
|-----------|-----------|------------|
| 5         | $2,150    | $25,800    |
| 10        | $4,300    | $51,600    |
| 25        | $10,750   | $129,000   |
| 50        | $21,500   | $258,000   |

The footnote will update to: "Based on 10,000 packages/merchant at 43% opt-in rate."

## Technical Details

**File: `src/components/partner/PartnerCalculator.tsx`**

One change in the `ReferenceCards` component:
- Line calculating `insured`: change `r.merchants * 5000 * 0.43` to `r.merchants * 10000 * 0.43`
- Update the footnote text from "5,000 packages/merchant" to "10,000 packages/merchant"

No other files or logic affected.
