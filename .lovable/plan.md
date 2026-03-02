

## Simplify Partner Listings: Remove Tags, Internalize Categories

Based on your feedback, two changes:

### 1. Remove tags entirely
Tags are displayed in two places: as badges in the modal detail view (~line 598-603) and stored in each partner's data. Remove the `tags` property from the `Partner` interface and all partner data entries, and remove the tag badges from the modal.

### 2. Remove categories from partner requirements
Categories stay in the code (we use them for filtering), but they become something **we** assign internally rather than something partners provide. No code change needed for this — it's just a documentation/process note.

### What partners actually need to provide
After these changes, the streamlined ask becomes:
- **Logo** (square, 200-512px, PNG/SVG, transparent background)
- **Company name**
- **Short description** (~120 characters)
- **Full description** (2-3 sentences)
- **Why we trust them** (2-3 sentences, or we write it)
- **2-3 key stats** (value + label)
- **Website URL**

That's it — much lighter.

