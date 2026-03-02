

# Square Logo Update for Partner Cards & Modal

## Changes in `src/components/partners/PartnerDirectory.tsx`

### 1. LogoPlaceholder — make square
Change from 140×40 rectangle to 48×48 square with rounded-lg corners. Keep the dashed border and gray background. Replace company name text with the first letter/initials of the company (since full names won't fit in a square).

### 2. Card Logo Row (ROW 1, ~line 260)
Update the logo container from `h-12` with `maxHeight: 40, maxWidth: 140` to a 48×48 square container. The logo image gets `w-12 h-12 object-contain rounded-lg`. Margin bottom stays 16px.

### 3. Modal Header (~line 556-586)
Add the partner's logo to the modal header, positioned to the left of the name/category text. Show a 56×56 square logo (or square placeholder with white background and initials) inside the gradient header. The layout becomes: `[logo] [name + category] ... [verified badge]`.

### Technical details

**LogoPlaceholder** — accepts a `size` prop (default 48) for reuse in card vs modal (48 in card, 56 in modal). Square dimensions, `rounded-lg`, `bg-[#F3F4F6]`, dashed `#D1D5DB` border. Shows 1-2 letter initials in `#9CA3AF`.

**Card**: Logo image uses `w-12 h-12 rounded-lg object-contain`.

**Modal**: Logo sits in a `w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center` container inside the existing flex row, before the name div. Placeholder in modal uses white bg with `#101155` initials for contrast against the gradient.

