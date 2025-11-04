# Hijama Cupping Center — Front-end (AZ v1)
Stack: Plain HTML, CSS, JS. Design: Modern Minimal.

## Local preview
Any static server (e.g., `python -m http.server`) and open `http://localhost:8000/az/`

## Structure
- /az … AZ pages (default). /en and /ru reserved.
- /styles … base.css, layout.css, components.css
- /scripts … inject-shared.js (loads header/footer), nav.js, accordion.js, form-contact.js
- /partials … header-az.html, footer-az.html (shared)
- /images, /icons … assets

## Edit common header/footer
- Edit files in `/partials` once; they inject everywhere.

## Contact info (site-wide)
- Address: Həsən Əliyev küç.103 (Gənclik M/s yaxınlığı)
- Phone: +994(70) 818 5030
- Hours: Mon–Sat: 9:00 AM – 7:00 PM

## Next steps
- Replace map `src` with precise pin.
- Add EN/RU folders by copying AZ pages and translating.
- Hook contact form `POST` to backend endpoint.
