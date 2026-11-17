# Gemini Digital Solution – Website

A static website: plain HTML, CSS and JavaScript. No build step, no installation.

## Files
- `index.html` – the page
- `css/style.css` – shared styles (most styling is inline in index.html)
- `js/main.js` – contact form behaviour
- `assets/images/` – logo mark, full logo, favicon

## Preview
Double-click `index.html` to open it in a browser.

## Before going live
1. **Email and phone**: in `index.html`, search for `[YOUR EMAIL]` and `[YOUR PHONE / WHATSAPP]` and replace them.
2. **Contact form**: open `js/main.js` and set either `FORM_ENDPOINT` (Formspree) or `WHATSAPP_NUMBER`. Until then the form only shows a thank-you message and sends nothing.
3. **Social preview image**: when you know your domain, change `assets/images/logo-full.png` in the `og:image` tag to the full URL, e.g. `https://yourdomain.com/assets/images/logo-full.png`.

## Hosting
Upload the whole folder (keep the structure) to any host:
- Hostinger / GoDaddy / cPanel: upload to `public_html` via File Manager.
- Netlify: drag the folder onto app.netlify.com/drop.
- Vercel, GitHub Pages or Cloudflare Pages also work as-is.
