

# Fix: Restrict Dollar Inputs to 2 Decimal Places at Input Time

## Root Cause

The inputs use `type="number"`, which has **no built-in way to restrict decimal places while typing**. The `step={0.01}` attribute only affects the spinner arrows -- it does NOT prevent a user from typing `4.555555`. The `onChange` handler blindly passes `e.target.value` to state with zero validation. Formatting on blur is too late -- the user already sees the garbage value.

## The Real Fix

Switch both dollar inputs (Selling Price and AOV) from `type="number"` to `type="text"` with `inputMode="decimal"` (which still shows the numeric keyboard on mobile). Then validate every keystroke with a regex that **rejects input that doesn't match a valid currency pattern** before it ever reaches state.

## File: `src/components/calculate/ProfitCalculator.tsx`

### 1. Add a currency input sanitizer function (top of file, near helpers)

```typescript
const sanitizeCurrencyInput = (value: string, allowDecimals: boolean): string => {
  if (value === "" || value === ".") return value;
  const pattern = allowDecimals ? /^\d*\.?\d{0,2}$/ : /^\d*$/;
  return pattern.test(value) ? value : null; // null = reject keystroke
};
```

### 2. Selling Price input changes

- Change `type="number"` to `type="text"` and add `inputMode="decimal"`
- Remove `min`, `step` attributes (not valid for text inputs)
- Replace `onChange={e => setSpDisplay(e.target.value)}` with:
  ```typescript
  onChange={e => {
    const sanitized = sanitizeCurrencyInput(e.target.value, true);
    if (sanitized !== null) setSpDisplay(sanitized);
  }}
  ```

This means if a user types "4.55" and then presses "5", the regex `/^\d*\.?\d{0,2}$/` fails on "4.555" and the keystroke is silently ignored. The input stays at "4.55".

### 3. AOV input changes

- Change `type="number"` to `type="text"` and add `inputMode="numeric"`
- Remove `min`, `step` attributes
- Replace `onChange={e => setAovDisplay(e.target.value)}` with:
  ```typescript
  onChange={e => {
    const sanitized = sanitizeCurrencyInput(e.target.value, false);
    if (sanitized !== null) setAovDisplay(sanitized);
  }}
  ```

AOV is whole dollars only, so `allowDecimals=false` restricts to digits only.

### 4. No other changes

- Blur handlers, select-all on focus, reset logic, calculation logic, results cards, sliders, and all other sections remain exactly as they are.
- The blur handler already rounds to `.toFixed(2)` which handles edge cases like the user typing "5." and blurring (becomes "5.00").

## Why This Is the Correct Solution

| Approach | Problem |
|----------|---------|
| Format on blur only | User sees ugly values while typing |
| `type="number"` + `step` | Browsers ignore `step` for typed input |
| `maxLength` on number input | Browsers ignore `maxLength` on number inputs |
| **`type="text"` + regex gate** | **Prevents invalid input at the source** |

Using `inputMode="decimal"` / `inputMode="numeric"` ensures mobile keyboards still show the numeric pad.

