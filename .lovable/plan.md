

# Replace Our Partners Hero with Standard Site Banner

## What changes

Replace the current white hero section (lines 365-390) in `PartnerDirectory.tsx` with the same gradient + ParallaxParcels hero pattern used on About, How It Works, Pricing, and other pages. No CTA buttons.

## Implementation

### 1. Add ParallaxParcels import
Add `import ParallaxParcels from "@/components/ParallaxParcels";` at the top of `PartnerDirectory.tsx`.

### 2. Replace the hero section (lines 365-390)
Remove the current white `<section>` hero and replace with:

```tsx
<div className="relative bg-brand overflow-hidden pt-24 md:pt-40 pb-32 flex flex-col items-center justify-center text-center">
  <div className="absolute inset-0 bg-gradient-to-br from-[#101155] via-[#1e22aa] to-[#2e32d4] z-0"></div>
  <ParallaxParcels />
  <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white leading-tight mb-6">
      The Parcelis Partner Ecosystem
    </h1>
    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
      Vetted service providers offering exclusive benefits to Parcelis-protected merchants.
    </p>
  </div>
</div>
```

### 3. Remove `pt-24` from outer wrapper
The current outer div has `pt-24` (line 365) which was needed for the white hero. The new banner handles its own top padding, so remove it — change to just `min-h-screen` (matching how other pages work where the hero pulls up behind the navbar).

### 4. Remove unused CheckCircle import
The "Verified Partners" pill badge is removed with the old hero, so `CheckCircle` can be removed from the lucide imports if not used elsewhere in the file.

