

## Fix: Hero overlapping the navbar

The page container has `-mt-24 pt-24` to pull up behind the fixed navbar, but since this page has a **white background hero** (not a full-bleed dark hero like the homepage), the content visually collides with the transparent navbar.

### Root cause
The navbar is `fixed top-0 h-20` (80px). The page uses `-mt-24 pt-24` (96px) which is meant for dark-hero pages where content intentionally extends behind the navbar. On this white-background page, the hero text starts too close to the top.

### Fix in `src/components/partners/PartnerDirectory.tsx`

**Line 399**: Change the container from `-mt-24 pt-24` to just `pt-24` (no negative margin). This keeps the content below the fixed navbar without pulling the section up behind it.

The `/terms` and `/privacy` pages (also white-background) likely use a similar pattern worth referencing, but the fix here is isolated to this one line.

