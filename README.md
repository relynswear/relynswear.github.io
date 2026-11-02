# Relyn's Wear website

This is the website for Relyn's Wear, a tailor in Goderich, Freetown. It's a single HTML page with a bit of plain JavaScript. There's no framework, no build step and no web font to download, so it opens quickly on a cheap Android phone.

- Live page: https://relynswear.github.io/
- Source code: https://github.com/relynswear/relynswear.github.io

## Write-up

Relyn's Wear is a tailor in Goderich who sews Ankara, lace, bubu and casual outfits to measure for women, men and kids. The page answers what a customer wants to know first: is she open, what does it cost in Leones, and where is the shop. The directions start from Zion Academy Junior Secondary School, which is what you'd actually tell an okada rider. Every style has an order button that opens WhatsApp with the style already named, the Pay button dials the Orange Money menu (#144#), and one tap switches the whole page to Krio. I kept it light for Salone 3G with a hand-traced SVG logo and small WebP photos that load as you scroll, so the first screen comes from a 17 KB file and a full visit stays under 250 KB.

## Test results

Lighthouse 12, mobile, measured on 30 October 2026:

| Test | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|
| Standard mobile (slow 4G) | 96 to 99 | 100 | 100 | 100 |
| Harsh 3G (700 kbps, 300 ms delay, 4x slower CPU) | 89 | 100 | 100 | 100 |

On the 3G test the first text appears after 1.6 s and the main photo after 2.7 s. The page weighs 248 KB with every thumbnail, and full-size photos only download when someone taps one. The axe accessibility checker finds no problems in English or in Krio.

## What's on the page

- The name, tagline and a live sign saying whether the shop is open right now (Sierra Leone time)
- 10 styles with photos and prices in Leones, each with its own WhatsApp order button
- A "Bring your design" gallery of styles Relyn has recreated for customers. The photos come from social media and the page says so. Tap one to see it full size, swipe through the rest, and order by number.
- Four steps for ordering, and the opening hours with today highlighted
- Directions from the nearest landmark, a Plus Code, a Google Maps link and a "Guide me" button
- Orange Money (copy the number, or tap to dial #144#) and cash
- Instagram, Facebook and email
- Buttons to share the page and to save the shop's number to your phone
- An English and Krio switch that the phone remembers. Krio text is marked `lang="kri"` for screen readers.
- A Call, WhatsApp and Pay bar that stays at the bottom of the screen

## Using it for another business

1. Open `index.html` and search for `EDIT:`. That's where the name, tagline, numbers, products, hours, landmark and payment details live.
2. Swap the photos in `img/` for your own. 320 x 320 WebP files under 20 KB each work well.
3. Change the hours list `H` in the script near the bottom, and the file list in `sw.js`.
4. Upload the folder to GitHub Pages, Netlify or Vercel.

## Credits

- Design and build: James Emmanuel Paul Yambasu (https://james-yambasu-portfolio-1.vercel.app/)
- Product photos in "What we sew" and the logo come from Relyn's Wear and are used with her permission. I traced the logo to SVG for this page.
- The "Bring your design" photos were shared on social media and show styles Relyn has made for customers. The rights belong to whoever took them, and any owner can ask for a photo to be taken down.
- I drew the icons for this page. The text uses the phone's own font (Roboto on most Android phones), so no font is downloaded.
