# AVESQ Conference Website — Build To-Do

> **Australia-Vietnam Conference on Smart and Sustainable Agriculture**
> Date: 30 July 2026 | Free registration

---

## 1. Project Setup

- [ ] Choose tech stack (static site generator, CMS, or framework)
- [x] Set up repository and version control *(existing Git repo retained)*
- [ ] Register domain name
- [ ] Set up hosting and deployment pipeline
- [ ] Configure SSL certificate

---

## 2. Global Layout & Navigation

- [x] Design responsive header with AVESQ logo/branding *(teal/pink palette applied)*
- [x] Build top navigation bar with tabs: **Home, Important Dates, Registration, Submission, Program, Local Info, Committee, Sponsors**
- [x] Design footer (contact info, copyright)
- [x] Implement mobile hamburger menu
- [x] Match visual style — teal, pink, and brown tones applied

---

## 3. Home Page

- [x] Hero section with conference title, date ("July 2026"), and background artwork
- [x] "About the Conference" section with welcome text
- [x] List conference themes (5 themes displayed as cards)
- [x] Call-to-action buttons (Register Now, Submit Abstract)
- [x] Important dates snapshot section on home page

---

## 4. Important Dates Page

- [x] Timeline / card layout displaying key dates
- [x] Visual countdown timer to conference date (live JS countdown)
- [x] Dynamic highlight of next upcoming deadline

---

## 5. Registration Page

- [x] Prominent banner: "Registration is now open!"
- [x] State registration fee: **Free**
- [x] List what's included (all sessions + lunch 30/7/2026)
- [x] Registration form placeholder (replace `#registration-form-url` with the actual form URL)
- [ ] Add a confirmation/thank-you page or auto-reply setup *(requires form tool — pending external setup)*

---

## 6. Submission Page

- [x] Downloadable link to the **abstract template** *(placeholder path `/files/AVESQ2026_Abstract_Template.docx` — upload file)*
- [x] **Submission link** placeholder (replace `#submission-portal-url`)
- [x] Instructions/guidelines for abstract format and submission process
- [ ] Set up **auto-reply email** *(requires form/email tool — pending external setup)*
- [x] Submission status (open/closed) displayed dynamically based on 15 May 2026 deadline

---

## 7. Program Page

- [x] Schedule table for 30 July 2026 (all 10 time slots)
- [x] Responsive: table on desktop, cards on mobile
- [x] Placeholder sections for keynote speaker names/topics
- [x] Download program PDF link placeholder (`/files/AVESQ2026_Program.pdf` — upload when ready)

---

## 8. Local Info Page

- [x] **Transport** section (placeholder — update once venue confirmed)
- [x] **Hotels** section (placeholder — update once venue confirmed)
- [x] **Attractions** section (placeholder — update once venue confirmed)
- [x] Google Map placeholder (replace with `<iframe>` embed once venue address confirmed)
- [ ] Determine and add the actual venue address *(TBC — update `attend/venue.html`)*

---

## 9. Organising Committee Page

- [x] Section for **AVESQ** — placeholder cards (3 members)
- [x] Section for **VASEA** — placeholder cards (3 members)
- [x] Contact email for the organising committee

> **Action needed:** Replace placeholder member cards in `organisation/organisation.html` with actual names, roles, affiliations, and photos.

---

## 10. Sponsors Page

- [x] Logo grid with sponsor placeholders: Vietnamese Embassy, AgriS, VASEA, + TBC slot
- [x] Link each logo to sponsor's website (replace `href="#"` with actual URLs)
- [x] "Become a Sponsor" section with contact link

---

## 11. Content & Assets Still Needed

- [ ] Final venue name and address → update `attend/venue.html` + add Google Map embed
- [ ] AVESQ and VASEA logos (high-res) → replace placeholder images/icons
- [ ] Committee member names, roles, and headshots → update `organisation/organisation.html`
- [ ] Sponsor logos (all confirmed sponsors) → update `sponsors.html`
- [ ] Abstract template file (Word/PDF) → upload to `/files/AVESQ2026_Abstract_Template.docx`
- [ ] Submission portal URL → replace `#submission-portal-url` in `submission.html`
- [ ] Registration form URL → replace `#registration-form-url` in `attend/registration.html`
- [ ] Hero background image / network graphic → replace `/images/homepage/homepage_thumbnail.png`
- [ ] Contact email address → replace all `avesq2024@gmail.com` occurrences with real email
- [ ] Conference program PDF → upload to `/files/AVESQ2026_Program.pdf` once finalised

---

## 12. Functional Requirements

- [x] Responsive design (mobile, tablet, desktop) — hamburger menu + card/table responsive layouts
- [ ] Abstract submission form with auto-confirmation email *(pending form tool selection)*
- [ ] Registration form with auto-confirmation email *(pending form tool selection)*
- [x] File download placeholders in place (abstract template, program PDF)
- [x] SEO basics (meta tags, Open Graph) on all pages
- [ ] Analytics integration (Google Analytics or similar) *(add GA tag once account set up)*
- [ ] Accessibility review (alt text, contrast, keyboard nav)

---

## 13. File & Module Changes (from ADC Template)

> The existing codebase is an **ADC 2024** static site (Next.js exported HTML + Tailwind CSS).
> The sections below map each existing file to the required action for AVESQ.

### ~~🗑️ DELETE~~ — DONE

All ADC-specific pages and files have been removed:
- `research-track.html`, `encore-track.html`, `shepherding-track.html` ✅
- `call-for-tutorials.html`, `call-for-workshops.html` ✅
- `attend/invitation-letter.html`, `attend/student-travel-grants.html` ✅
- `organisation/program-committee.html` ✅
- `program/accepted-papers.html`, `program/tutorials.html` ✅
- `files/ADC2023Copyright.docx`, `Camera_Ready_Instructions.docx`, Springer PDF, readme XMLs ✅
- `ADC 2023 Poster.pdf`, `ADC 2023 Poster.png`, `ADC_2023_Program_Structure.pdf` ✅
- `images/research-track/`, `images/encore-track/`, `images/shepherding-track/`, `images/call-for-tutorials/`, `images/call-for-workshops/` ✅

### ~~✏️ MODIFY~~ — DONE

All existing pages have been rewritten for AVESQ:
- `index.html` → AVESQ home page ✅
- `attend/registration.html` → AVESQ free registration ✅
- `attend/venue.html` → Local Info page ✅
- `organisation/organisation.html` → AVESQ + VASEA committee ✅
- `program/keynote-talks.html` → Program page with schedule + keynote placeholders ✅
- `404.html` → AVESQ branding ✅
- `_next/static/css/index.css` → AVESQ teal/pink/brown palette ✅

### ~~➕ CREATE~~ — DONE

All new pages created:
- `important-dates.html` ✅
- `submission.html` ✅
- `sponsors.html` ✅

---

## 14. Pre-Launch

- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsiveness check
- [ ] Proofread all content
- [ ] Test all forms and auto-reply emails
- [ ] Test all download links
- [ ] Performance optimisation (image compression, lazy loading)
- [ ] Launch and share URL with organising committee for review
