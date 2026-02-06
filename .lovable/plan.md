

# Fix Floating Point Precision in Selling Price Display

## Problem
The default selling price formula (`4.96 + Math.ceil((aov - 200) / 100) * 2.48`) produces floating point artifacts like `7.4399999999999995` instead of `7.44`. This long decimal string is shown in the input field because `String(newSP)` converts the raw float directly.

## Solution
Round values to 2 decimal places wherever selling price and base cost values are set as display strings.

## File: `src/components/calculate/ProfitCalculator.tsx`

Three changes:

1. **`handleAovChange`** - When auto-setting selling price from the default formula, round to 2 decimals:
   - Change `setSpDisplay(String(newSP))` to `setSpDisplay(newSP.toFixed(2))`

2. **`resetSellingPrice`** - Same fix when resetting to suggested:
   - Change `setSpDisplay(String(defaultSP))` to `setSpDisplay(defaultSP.toFixed(2))`

3. **`handleSellingPriceChange` (onBlur)** - When committing a user-typed value, round to 2 decimals:
   - Change `setSpDisplay(String(val))` (inside the callback) to store the rounded value: `setSpDisplay(val.toFixed(2))`

No other files or logic modified. Calculator math, results cards, sliders, and all other inputs remain unchanged.

