# Launch To-Do — Jason's Mobile Mechanics

Site is built, SEO-optimized, and ready to deploy. The following are the remaining placeholders that require real business data before going live.

## Still Needs Your Input

1. **GA4 Measurement ID** — every page has `G-XXXXXXXXXX` in the gtag snippet.
   - Create a GA4 property at analytics.google.com, grab the Measurement ID, and find/replace `G-XXXXXXXXXX` across all `.html` files.

2. **Trust signals** — placeholders site-wide until you confirm real numbers:
   - Homepage trust strip: `[X]+ Years Serving Charlotte County`, `[X.X]★ Rated`
   - Hero badges: "Licensed & Insured*", "Upfront Pricing*", "Same-Day Appointments*"
   - Once you provide real years-in-business, license/insurance status, and review data, swap these in and remove the `*` and disclaimer note.

3. **Social image** — every page currently uses the favicon SVG as the `og:image`. Replace with a real 1200×630 photo of the truck, tools, or a job in progress for better click-through on Facebook/iMessage shares.

4. **Google Business Profile URL** — add to the schema `sameAs` field in `index.html` once the GBP listing is claimed or created.

## Already Done

- ✅ Domain: `jasonsmobilemechanicsfl.com` — correct across all pages, sitemap, robots.txt
- ✅ Phone: `863-266-9708` — wired in as tel link + GA4 click tracking on every page
- ✅ SEO: preconnect tags, canonical tags, og:image, twitter:image, geo meta tags, schema markup (AutoRepair + Service + BreadcrumbList + FAQPage)
- ✅ Title tags: all under 65 characters
- ✅ Sitemap: 13 URLs, all correct domain, dated 2026-09-15
- ✅ Netlify form: `data-netlify="true"` on the contact form in about.html

## Go-Live Checklist

- [ ] Swap `G-XXXXXXXXXX` with real GA4 ID
- [ ] Update trust strip with real years + rating
- [ ] Replace favicon og:image with real business photo
- [ ] Deploy to Netlify (drag-and-drop the folder, or connect this repo)
- [ ] Verify domain in Google Search Console
- [ ] Submit `sitemap.xml` in Search Console
- [ ] Claim / create Google Business Profile and add URL to schema
