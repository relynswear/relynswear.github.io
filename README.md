# Relyn’s Wear: mobile landing page

A fast, mobile-first landing page for **Relyn’s Wear**, a bespoke tailor in Goderich, Freetown, Sierra Leone.
Plain HTML, CSS and a little vanilla JavaScript. No framework, no build step, no web fonts, no trackers.

## Write-up

Relyn’s Wear is a bespoke tailor in Goderich, Freetown, serving women, men and kids who want Ankara, lace, bubu and casual outfits sewn to their own measurements at a fair price. The page keeps the shop’s own black, plum and gold brand and puts the three questions customers usually ask on WhatsApp right at the top: is the shop open now, how much does it cost in Leones, and where is it, with directions anchored on Zion Academy Junior Secondary School and a line to tell the okada or keke rider. Every product has a one-tap WhatsApp order with the item name already written in, the Orange Money button dials #144# directly, and one tap switches the whole page into Krio. To stay fast on Salone 3G it uses no framework and no web fonts, a hand-traced vector logo inlined in the HTML, and ten lazy-loaded WebP photos, so a first visit is under 250 KB with every thumbnail and the first screen paints from a 17 KB file; a small service worker keeps the page working offline after the first visit.

## Results (Lighthouse 12, mobile)

| Test | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|
| Default mobile (slow 4G) | 99 | 100 | 100 | 100 |
| Custom 3G (700 kbps, 300 ms RTT, 4x CPU slowdown) | 93 | | | |

3G profile: First Contentful Paint 1.7 s, Largest Contentful Paint 3.0 s, Total Blocking Time 40 ms.
axe-core: 0 violations in English and Krio modes.

## What is on the page

- Business name, tagline, live “Open now / Closed” status in Sierra Leone time (GMT)
- 10 products with photos and prices in SLE, each with a one-tap WhatsApp order
- Style gallery: tap any photo to open it full size, swipe or use arrows, and order that style by number on WhatsApp (full-size photos load only when tapped)
- How to order in 4 steps
- Opening hours with today highlighted
- Landmark-first location, Plus Code, Google Maps directions, “Guide me” on WhatsApp
- Orange Money (the Pay button dials #144# in one tap, copy number, “I have paid” message) and cash
- Instagram, Facebook and email links
- Share on WhatsApp and Save number (vCard) for word-of-mouth
- Full English / Krio switch, remembered on the phone, with `lang="kri"` for screen readers
- Sticky Call / WhatsApp / Pay bar

## Reuse it for your business

1. Open `index.html` and search for `EDIT:`. Change the name, tagline, phone numbers, products, hours, landmark and payment numbers.
2. Replace the photos in `img/` with your own (320 x 320 WebP, under 20 KB each works well).
3. Update the hours list `H` in the script at the bottom, and the file list in `sw.js`.
4. Upload the folder to Netlify, Vercel or GitHub Pages.

## Credits

- Product and gallery photos and logo: supplied by Relyn’s Wear (used with the owner’s permission). Logo traced to SVG for this page.
- Icons: drawn for this page.
- Fonts: the phone’s own system font (Roboto on most Android phones), so nothing is downloaded.

## Links

- Live page: https://relynswear.github.io/
- Source code: https://github.com/relynswear/relynswear.github.io
