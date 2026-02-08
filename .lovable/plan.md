

# Add Editable Number Inputs to Partner Calculator Sliders

## What Changes

Each of the three calculator sliders (Merchants, Packages, Opt-In Rate) will get an editable text input alongside the slider, so users can either drag the slider or type a value directly.

## How It Will Work

The current value badge on the right side of each slider label (e.g., the blue pill showing "10" or "5,000" or "43%") will become a clickable/editable inline text input. Users can:
- **Drag the slider** as before -- the input updates in real time
- **Click the value and type** a number directly -- the slider moves to match

The input will clamp values to the slider's min/max range on blur, and snap to the nearest valid step. Invalid/empty input reverts to the previous value.

## Technical Details

**File: `src/components/partner/PartnerCalculator.tsx`**

### PartnerSlider component changes

1. Add local state for the text display value (`displayValue` string) that syncs with the numeric `value` prop.

2. Replace the static `<span>` badge with a `<input type="text">` styled to look like the current badge (blue text, blue/10 background, rounded-full, same font size/weight).

3. Input behavior:
   - `inputMode="numeric"` for mobile number pad
   - On focus: select all text (`e.target.select()`)
   - On change: update local display string, filtering to digits only (plus `%` suffix display for opt-in)
   - On blur: parse the number, clamp to `[min, max]`, snap to nearest `step`, call `onChange`, and reformat the display
   - On Enter key: blur the input (same as above)

4. Add a `suffix` prop (optional) to handle the "%" display for the opt-in rate slider. The packages slider will show comma-formatted numbers.

5. Input width: use a compact fixed width (~70-80px) so it fits neatly in the label row without layout shift. The input text is right-aligned to match current badge appearance.

### No other changes

- Calculator results, animated counters, reference cards, and all other sections remain untouched.
- No changes to any other pages.

