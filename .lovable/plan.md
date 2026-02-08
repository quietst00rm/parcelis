
# Fix Link Preview Images (OG / Twitter)

## The Problem
When you share any Parcelis link on iMessage, Slack, LinkedIn, etc., the preview card shows a nearly invisible blue-on-blue logo. Both `public/og-image.png` and `public/twitter-image.png` have this issue.

## The Fix

### 1. Generate a new professional OG image (1200x630)
Use AI image generation to create a clean, professional Open Graph image with:
- Royal blue gradient background (matching the brand)
- White PARCELIS logo prominently displayed and clearly visible
- Tagline text: "Licensed Shipping Insurance for E-Commerce"
- Clean, modern layout with proper contrast

This will replace `public/og-image.png`.

### 2. Generate a matching Twitter image
Create a similar image for `public/twitter-image.png` (same dimensions work for `summary_large_image` cards).

### 3. No code changes needed to meta tags
The `index.html` already references these files at the correct paths (`/og-image.png` and `/twitter-image.png`), so only the image files themselves need to be replaced.

## Important Note
After publishing, social platforms cache old previews. You may need to use platform-specific tools to clear cached previews:
- **Facebook/Meta**: Use the [Sharing Debugger](https://developers.facebook.com/tools/debug/) to scrape the URL again
- **Twitter/X**: Use the [Card Validator](https://cards-dev.twitter.com/validator)
- **LinkedIn**: Append `?v=2` to the URL when re-sharing, or use the [Post Inspector](https://www.linkedin.com/post-inspector/)
- **iMessage**: Caches aggressively -- may take time to update on its own

## Technical Details
- File: `public/og-image.png` -- replaced with new generated image
- File: `public/twitter-image.png` -- replaced with new generated image
- Dimensions: 1200x630px (standard OG size)
- No changes to `index.html` meta tags (paths remain the same)
- No changes to any page components
