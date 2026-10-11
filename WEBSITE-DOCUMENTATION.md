# Kebabish Grill — Full Website Documentation

**Project:** Kebabish Grill Family Restaurant & Marriage Hall  
**Location:** Abdul Hakim, Pakistan  
**Live URL:** https://kebabish-grill-qcfe.vercel.app/  
**Documentation date:** 11 October 2026  
**Live verification:** 11 October 2026, approximately 11:48 AM Pakistan time (06:48 UTC)  
**Language:** Roman Urdu, with technical names in English

> Yeh document live website ki fresh HTTP/HTML verification ke baad update kiya gaya hai. Nine main pages, menu-category URLs, 20 image/logo URLs aur deployed stylesheet inspect kiye gaye. AVIF images aur initial menu rendering ab live verify hain. Cart, modal aur form-submission behaviour implementation se documented hai; browser mein end-to-end interaction verify nahi hua. Current order/booking system enquiry-based hai, payment ya automatically confirmed reservation system nahi.

## 1. Project ka overview

Project pehle ek restaurant demo tha. Usmein ek single page par Home, About, Menu, Gallery, Marriage Hall aur Contact sections the. Navigation zyada tar usi page ke sections par scroll karti thi. Kuch buttons galat section par ja rahe the, aur photographs ki jagah menu posters use ho rahe the.

Is demo ko separate pages, restaurant-specific branding, real restaurant photographs, interactive menu, saved selection/cart aur WhatsApp enquiry flows wali website mein convert kiya gaya.

Design reference Stone Bake website thi: https://stonebakedina.vercel.app/. Uska layout aur interaction style reference ke taur par use hua, jabke restaurant ka naam, photos, address, contact aur content Kebabish Grill ka rakha gaya. Baad mein supplied Kebabish logo ke mutabiq theme black, gold aur red mein update ki gayi.

## 2. Business details jo website mein use hain

| Detail | Current website value |
| --- | --- |
| Business name | Kebabish Grill |
| Business type | Family Restaurant, BBQ & Marriage Hall |
| Address | Ghosia Chowk, Tulamba Road, Abdul Hakim |
| Display phone | 0333 7472104 |
| International phone | +923337472104 |
| WhatsApp target | Existing restaurant phone number, international format mein |
| Location link | Google Maps par Kebabish Grill, Abdul Hakim ki search |
| Opening hours | Current site visitors ko call karke hours confirm karne ko kehti hai |

**Owner confirmation required:** Phone/WhatsApp availability, exact map pin, opening hours, full menu, current prices, delivery areas aur event packages restaurant owner se confirm karne hain. Existing number ka WhatsApp account independently verify nahi kiya gaya. Purane demo mein 9 AM–1 AM hours the; new website unhein confirmed hours ke taur par show nahi karti.

## 3. Website ke pages

### 3.1 Home — `/`

Home page restaurant ka main introduction hai. Ismein:

- Announcement strip aur sticky navigation.
- Restaurant photograph ke saath main hero section.
- “Explore Menu” aur “Book a Table” buttons.
- Scrolling brand messages, pause/resume control ke saath.
- Menu categories, search aur food cards.
- Restaurant ki family dining aur celebration features.
- Family meal aur event enquiry cards.
- Restaurant story banner.
- Google reviews ki taraf link aur feedback invitation.
- Address, phone, map aur directions.
- Menu ki taraf final call-to-action.
- Footer aur floating WhatsApp button.

### 3.2 Our Menu — `/menu`

Menu page mein category filters, text search, food details aur enquiry selection hai.

**Current categories:** All, BBQ, Pakistani, Rice aur Chinese.

**Current cards:** BBQ & Tikka, Family Favourites, Rice & Biryani aur Chinese Favourites.

Yeh abhi category-level food selections hain, complete item-by-item priced menu nahi. Har card par image, description, category, “Ask for price” aur “Add to enquiry” action hai. Card/image open karne par detail dialog aata hai.

Category links, jaise `/menu?category=BBQ` aur `/menu?category=Rice`, live HTTP verification mein respective BBQ aur Rice cards ke saath return hue. Home aur Menu ke initial HTML mein food cards present hain; purana “Loading the menu…” client-only fallback ab inspected responses mein nahi hai. Browser ke filter/search buttons ki interactive checking abhi pending hai.

### 3.3 About Us — `/about`

- Restaurant introduction aur family dining story.
- Actual dining area photo.
- Hospitality aur shared meals se related content.
- “Plan your visit” action.
- Restaurant features aur story banner.

Unverified founding year, awards ya business-history claims add nahi kiye gaye.

### 3.4 Offers — `/offers`

- Family meal enquiry card.
- Celebration/event arrangement enquiry card.
- WhatsApp par current offers poochhne ka link.
- Event date aur guest count ke mutabiq pricing confirm karne ki guidance.

Fixed discounts, coupon codes aur package prices abhi configured nahi hain. Yeh page current options discuss karne ke liye hai.

### 3.5 Gallery — `/gallery`

- Restaurant, Food aur Celebrations filters.
- Restaurant ki dining spaces, entrance, dishes aur event setup photographs.
- Photo par click karne se enlarged preview/dialog.
- Responsive photo layout aur image descriptions.

### 3.6 Reviews — `/reviews`

- Google listing par public reviews dekhne ka link.
- Visit ke baare mein feedback invitation.
- Private feedback form jo WhatsApp message prepare karta hai.

Google reviews API integration, live star rating ya imported testimonials abhi nahi hain. Private feedback website par publish nahi hota. Fake reviews ya fabricated ratings add nahi ki gayi.

### 3.7 Marriage Hall — `/marriage-hall`

- Celebration stage aur dining arrangement photographs.
- Wedding functions, receptions aur family occasions ka introduction.
- Date, time, guest count aur menu discuss karne ki guidance.
- Booking enquiry link: `/booking?occasion=hall`.

Hall capacity, fixed packages, available dates aur deposit amounts abhi verified/configured nahi hain.

### 3.8 Contact — `/contact`

- Restaurant address.
- Click-to-call phone link.
- Google Maps directions.
- Embedded map.
- Opening hours confirm karne ki guidance.
- Name, phone aur message wala contact form.
- WhatsApp message review/send flow.

### 3.9 Book Now — `/booking`

Booking enquiry form mein:

- Customer name.
- Phone number.
- Occasion: Family dining, Marriage hall, Birthday or family gathering.
- Preferred date aur time.
- Guest count.
- Optional notes.

Marriage hall page se aane par occasion preselect karne ka flow add hai. Form enquiry prepare karta hai; booking tab confirm hoti hai jab restaurant team reply karke availability aur arrangements confirm kare.

### 3.10 Not-found page

Invalid URL par custom 404 page aata hai, jahan user ko home page par wapas jane ka link diya gaya hai.

## 4. Shared navigation aur layout

Header aur footer shared layout mein hain, isliye tamam pages par same branding aur navigation use hoti hai.

**Header features:**

- Kebabish logo aur restaurant name.
- Active page highlight.
- Separate page links.
- Cart/enquiry selection button with item count.
- Book Now button.
- Mobile navigation toggle.

**Footer features:**

- Logo aur restaurant introduction.
- Menu, About, Offers, Gallery aur Reviews links.
- Hall, booking aur food-category links.
- Address, phone aur WhatsApp link.
- Dynamic copyright year.

Floating WhatsApp button site-wide available hai. Yeh button visitor ko WhatsApp kholta hai; website khud automatically message send nahi karti.

## 5. Cart aur order enquiry system

### Visitor ka flow

1. Visitor menu mein category select ya search karta hai.
2. Kisi food card ko enquiry selection mein add karta hai.
3. Header cart button se apni selection dekhta hai.
4. Quantity increase/decrease ya item remove karta hai.
5. “Continue enquiry” se name aur phone enter karta hai.
6. Pickup, Delivery ya Dine in preference choose karta hai.
7. Delivery choose karne par address enter karta hai.
8. Optional notes add karta hai.
9. WhatsApp enquiry prepare karta hai.
10. WhatsApp open karke message review aur send karta hai.
11. Restaurant exact dishes, portions, prices aur availability confirm karta hai.

### Cart ki implementation

- Selection browser `localStorage` mein save hoti hai.
- Storage key: `kebabish-order-v1`.
- Page navigation aur reload ke baad same browser mein selection restore ho sakti hai.
- Stored item IDs aur quantity values validate ki jati hain.
- Har selection ki quantity 1–20 tak limit ki gayi hai; decrease karke zero par item remove hota hai.
- Browser storage unavailable ho to current session mein cart use ho sakta hai.
- Add action ke baad short notification show hota hai.
- Selection badalne par previously prepared WhatsApp link clear hota hai.

### Current limitations

- Prices configured nahi, isliye payable subtotal/grand total calculate nahi hota.
- Delivery charges ya service area calculation nahi hai.
- Online payment nahi hai.
- Backend par order record ya order number generate nahi hota.
- Order automatically restaurant ko transmit nahi hota.
- Customer accounts aur cross-device cart sync nahi hai.
- Delivery option preference/enquiry hai, guaranteed service confirmation nahi.

## 6. Booking, contact aur feedback forms

Forms mein required fields aur basic browser validation add hai. Phone field accepted characters/length check karta hai; yeh OTP verification nahi. Booking date past date select karne ko restrict karti hai. Guest count input ki limit venue ki verified capacity ka claim nahi hai.

**Message handling:**

- Form entries message prepare hone tak current page/device par rehti hain.
- Name, phone, date ya address backend database mein save nahi hota.
- Visitor WhatsApp mein message send karta hai to information WhatsApp aur restaurant tak jati hai.
- Form values change karne par prepared message reset hota hai.
- Contact enquiries, booking requests aur feedback ke message formats alag hain.

Calendar availability, conflict prevention, email/SMS confirmations aur automated booking approval abhi nahi hain.

## 7. Branding aur logo

User ke supplied logo se black, gold, red aur warm ivory palette choose ki gayi.

| Use | Colour |
| --- | --- |
| Main background | `#0b0b0a` |
| Card/panel background | `#161612` |
| Main gold | `#d6ad39` |
| Red accent | `#b52c22` |
| Main light text | `#fff5d9` |
| Muted text | `#aaa694` |

Gold main buttons, headings, borders aur highlights ke liye use hota hai. Red food badges aur cart count ke liye use hota hai. WhatsApp button recognizable green rakha gaya hai.

### Logo asset

File: `public/images/kebabish-logo.svg`

Logo supplied reference ka SVG recreation hai, exact original image/tracing nahi. Ismein circular black/gold badge, ornamental border, red flames, golden grill/skewer elements aur restaurant lettering hai.

Use locations:

- Header.
- Footer.
- Browser favicon/shortcut icon.

SVG vector format hai, isliye screen sizes par sharp rehta hai. Website typography Poppins headings aur Inter body font use karti hai.

## 8. Restaurant photographs

Pehle lagaye gaye menu posters ko restaurant photographs se replace kiya gaya. Photos Abdul Hakim restaurant ki public Restaurant Guru listing se select aur visually inspect ki gayi thi:

https://restaurantguru.com/Kebabish-Grill-Family-Restaurant-and-BBQ-Abdul-Hakim-Abdul-Hakim

Source mapping `public/images/sources.json` mein rakhi gayi hai. Restaurant owner se supplied original/high-resolution photos milne par assets replace kiye ja sakte hain.

### Current source assets

| File | Content |
| --- | --- |
| `restaurant-interior.webp` | Decorated dining room / hero |
| `family-dining.webp` | Family seating area |
| `restaurant-entrance.webp` | Restaurant entrance |
| `celebration-dining.webp` | Event dining arrangement |
| `celebration-stage.webp` | Celebration stage |
| `bbq-platter.webp` | BBQ food photo |
| `family-meal.webp` | Shared meal photo |
| `rice-platter.webp` | Rice dish photo |
| `chinese-platter.webp` | Chinese food photo |

Yeh photos website ke local `public/images` folder se serve hoti hain; page ko third-party photo hosting par depend nahi karna padta.

## 9. Image-loading improvements

### Pehla optimization pass

- Runtime Next image resizing ko in restaurant photos ke liye static responsive files se replace kiya.
- 400, 640, 960 aur maximum 1200 px variants generate kiye; original width se upscale nahi kiya.
- WebP compression use hui.
- Maximum-resolution variants ka total approximately **1,943 KB se 1,163 KB** hua.
- 400 px variants ka total approximately **272 KB** tha.
- Hero photo ke variants approximately **22 KB, 43 KB, 77 KB aur 132 KB** the.
- Small embedded image previews add kiye, taake download ke dauran empty image area kam nazar aaye.
- Hero ko eager/high-priority loading di; remaining images generally lazy-load hoti hain.
- Hashed asset filenames aur long-lived cache headers add kiye.

Yeh numbers pehle WebP pass ke measured file sizes hain; naye AVIF output ke measured results nahi.

### Latest optimization — live deployment verified

- Build ke waqt **AVIF** variants generate karna add hai.
- **WebP fallback** retained hai.
- New target widths: **320, 480, 768 aur 1200 px**, original image width tak limited.
- AVIF quality 45 aur WebP quality 60 configured hai.
- Browser `<picture>` aur `srcset` ke through suitable format/size choose karta hai.
- Priority image ka responsive preload add hai.
- Hero image ki entrance/zoom animation disable ki, taake loaded photo ke display mein extra animation delay na lage.
- Menu ka client-only loading fallback remove karke initial content server-renderable banaya.
- Category query server page se receive hoti hai.

### Fresh live image measurements

11 October 2026, approximately 06:48 UTC par nine photos ke maximum-size AVIF aur WebP URLs, 320px hero AVIF aur SVG logo ke HTTP headers inspect hue. **20/20 checked URLs ne HTTP 200 return kiya.** Har responsive width separately request nahi ki gayi.

| Photo | Maximum width | AVIF bytes | WebP fallback bytes |
| --- | ---: | ---: | ---: |
| Restaurant interior / hero | 1200 px | 83,201 | 121,138 |
| BBQ platter | 727 px | 56,840 | 84,032 |
| Family meal | 1200 px | 73,105 | 91,242 |
| Rice platter | 720 px | 47,232 | 66,720 |
| Chinese platter | 1200 px | 74,366 | 110,068 |
| Celebration stage | 1156 px | 80,105 | 131,912 |
| Family dining | 1200 px | 130,356 | 201,146 |
| Restaurant entrance | 947 px | 109,132 | 175,304 |
| Celebration dining | 1200 px | 83,672 | 118,054 |
| **Nine maximum-size variants ka total** | | **738,009** | **1,099,616** |

- Hero ka 320px AVIF: **8,104 bytes**, approximately **7.9 KiB**.
- Hero ka 1200px AVIF: **83,201 bytes**, approximately **81.3 KiB**.
- Previous deployment ka 1200px hero WebP 134,974 bytes tha; current maximum AVIF usse approximately **38% smaller** hai.
- SVG logo: **3,356 bytes**; `image/svg+xml` response.
- Checked photo assets correct `image/avif` / `image/webp` content types aur one-year immutable cache headers ke saath available the.
- Kuch responses `X-Vercel-Cache: HIT`, kuch `MISS` the. Initial edge-cache MISS ka matlab missing/broken image nahi; un responses ka status bhi 200 tha.

Yeh **file sizes aur HTTP availability** ke measurements hain. Yeh total page download, browser paint time, Lighthouse score ya actual mobile-network loading time ka measurement nahi. Browser selected viewport/DPR ke hisaab se smaller variants aur supported format choose karta hai; normally AVIF aur WebP dono download nahi karta.

### Optimization files

- `scripts/optimize-images.mjs`: Source images se responsive outputs generate karta hai.
- `lib/optimized-images.json`: Source image, variants, dimensions aur tiny preview ki mapping.
- `public/images/optimized/`: Generated browser-ready files.
- `components/restaurant-image.tsx`: Responsive image component, preload aur fallback handling.
- `app/image-loading.css`: Picture wrappers aur related image presentation rules.
- `next.config.mjs`: Optimized image paths ke cache headers.

Generated asset URLs par `Cache-Control: public, max-age=31536000, immutable` configured hai. Hashed filenames image content/optimization settings change hone par browser ko nayi file identify karne dete hain.

**Note:** Image loading ko literally zero time guarantee nahi kiya ja sakta. Network speed, device, first visit, cached assets aur chosen image size load time ko affect karte hain.

## 10. Technical architecture

| Area | Implementation |
| --- | --- |
| Framework | Next.js, App Router |
| Language | TypeScript / TSX |
| UI | React components |
| Active styling | Plain CSS: restaurant, brand aur image-loading stylesheets |
| Fonts | Poppins + Inter through `next/font/google` |
| Photos | Responsive AVIF with WebP fallback, production HTML and asset headers mein verified |
| Logo | Local SVG |
| Cart persistence | Browser localStorage |
| Messages | WhatsApp deep links |
| Maps | Google Maps link + lazy-loaded embed |
| Hosting | Vercel |
| Database | Not implemented |
| Admin authentication | Not implemented |
| Payment gateway | Not implemented |

Package manifest mein Next.js range `^16.3.6`, React/React DOM `18.3.1`, TypeScript `5.7.2` aur Tailwind `3.4.16` declared the. Reported builds Next.js 16.3.6 use kar rahe the. Dependency compatibility ka fresh audit final changes ke baad run nahi kiya gaya.

Tailwind purane demo ki dependency/config ke taur par project mein maujood hai, lekin current restaurant stylesheet se Tailwind directives remove ki gayi hain. Active design plain CSS use karta hai.

## 11. Important files aur unka kaam

| File / folder | Purpose |
| --- | --- |
| `app/layout.tsx` | Shared shell, fonts, metadata aur stylesheet imports |
| `app/page.tsx` | Home route |
| `app/about/page.tsx` | About route |
| `app/menu/page.tsx` | Menu route aur category query |
| `app/gallery/page.tsx` | Gallery route |
| `app/offers/page.tsx` | Offers route |
| `app/reviews/page.tsx` | Reviews route |
| `app/marriage-hall/page.tsx` | Hall route |
| `app/contact/page.tsx` | Contact route |
| `app/booking/page.tsx` | Booking route |
| `app/not-found.tsx` | Custom 404 |
| `components/home-page.tsx` | Shared page export/entry point |
| `components/restaurant-website.tsx` | Main page sections, menu, gallery aur forms |
| `components/restaurant-shell.tsx` | Header, footer, cart state, cart drawer aur modal |
| `components/restaurant-image.tsx` | Optimized responsive images |
| `components/restaurant-icons.tsx` | Local SVG interface icons |
| `lib/restaurant-data.ts` | Business details, food selections, gallery data aur WhatsApp URL helper |
| `app/restaurant.css` | Reference-based main layout/styles |
| `app/brand-theme.css` | Kebabish logo palette aur branding overrides |
| `app/image-loading.css` | Responsive picture styling |
| `scripts/optimize-images.mjs` | Build-time image processing |
| `lib/optimized-images.json` | Generated image manifest |
| `public/images/` | Photo sources, logo aur source attribution mapping |
| `next.config.mjs` | Next config aur image cache headers |
| `package.json` | Dependencies aur build/development scripts |
| `.gitignore` | Local/generated/private-file ignore rules |

**Legacy files:** Root `index.html`, `styles.css`, `script.js`, `app/globals.css` aur pehle ke kuch header/footer/booking components previous demo se reh sakte hain. Vercel par active Next app ka entry point `app/layout.tsx` aur `app/*/page.tsx` routes hain. Root `index.html` edit karna current Next site update karne ka tareeqa nahi.

## 12. SEO aur accessibility work

### SEO

- Main title aur description.
- Separate pages ke relevant titles/descriptions.
- Basic Open Graph metadata.
- Logo/favicon configuration.
- Semantic headings aur image alt text.
- Clean page URLs.

Custom domain, canonical URLs, sitemap, robots policy aur structured Restaurant schema current implementation mein add/verify nahi kiye gaye. Google Search Console aur analytics setup bhi current Kebabish implementation mein nahi hua.

### Accessibility aur responsive behaviour

- Skip-to-content link.
- Navigation labels aur active-page indication.
- Mobile menu expanded-state indication.
- Form labels aur required-field validation.
- Modal dialog headings, close control aur Escape support.
- Dialog open hone par page scroll locking aur close par focus restoration.
- Image alt text.
- Reduced-motion styling.
- Scrolling message strip pause/resume.
- Responsive cards, navigation, forms aur gallery layouts.

Yeh implemented features hain, formal accessibility compliance certification nahi. Latest version ka full browser/device accessibility audit run nahi hua.

## 13. Deployment aur live verification status

### Vercel project

Live URL: https://kebabish-grill-qcfe.vercel.app/

Project mein `images:optimize` script aur `prebuild` hook add hai. `npm run build` lifecycle mein image generation Next build se pehle chalti hai. Vercel build settings ko yeh lifecycle use karna chahiye; agar custom build command seedha `next build` chalaye to prebuild step skip ho sakta hai.

### Latest live check: 11 October 2026, approximately 06:48 UTC

| Route | Fresh verification result |
| --- | --- |
| `/` | Successful HTML response; hero, menu cards, navigation, footer aur AVIF sources present |
| `/menu` | Successful HTML response; all four food cards initial HTML mein present |
| `/about` | Successful HTML response; restaurant story aur AVIF dining photographs present |
| `/offers` | Successful HTML response; family-meal aur celebration enquiry cards present |
| `/gallery` | Successful HTML response; eight photo entries aur category controls present |
| `/reviews` | Successful HTML response; Google listing links aur private feedback form present |
| `/marriage-hall` | Successful HTML response; stage/dining photographs aur booking CTA present |
| `/contact` | Successful HTML response; address, phone, map embed aur contact form present |
| `/booking` | HTTP 200; occasion, date, time, guest count, name, phone aur notes fields present |
| `/menu?category=BBQ` | HTTP 200; initial food-card result BBQ & Tikka |
| `/menu?category=Rice` | HTTP 200; initial food-card result Rice & Biryani |
| `/documentation-check-missing-page` | HTTP 404; custom error page ka visual render inspect nahi hua |

Additional deployed evidence:

- Header/footer mein Kebabish logo reference aur metadata mein favicon link present hain.
- Fetched stylesheet mein gold palette `#d6ad39`, responsive picture styles aur hero animation-disable rule present hain.
- Hero ka AVIF preload `fetchPriority="high"`, responsive candidates aur `sizes="100vw"` ke saath present hai.
- Home/Menu HTML mein purana client-only rendering bailout nahi hai.
- Nineteen selected photo variants aur one logo URL: 20/20 HTTP 200.
- Booking/contact/feedback form fields aur enquiry disclaimers initial HTML mein present hain; koi form submit ya WhatsApp message send nahi kiya gaya.

**Updated conclusion:** AVIF optimization aur initial menu-rendering fixes **ab production par deployed aur HTTP/HTML level par verified hain**. Purani documentation ka “latest fixes live nahi hain” status is fresh check se supersede ho gaya hai.

Structured findings `WEBSITE-VERIFICATION.json` mein record ki gayi hain. Yeh HTTP/source inspection hai, screenshot ya complete browser-interaction audit nahi.

### Future changes ko live karne ka flow

1. Current source changes connected Git repository/production branch par commit aur push hon.
2. Vercel nayi commit ko build kare.
3. Image optimization prebuild hook execute ho.
4. New deployment production URL par promote ho.
5. Naye HTML mein AVIF source variants aur initial menu markup verify hon.

Sirf old commit ki deployment redeploy karne se unpushed local changes live nahi aate. Project par direct automatic Git push/deployment is work ke dauran perform nahi ki gayi.

## 14. Verification jo pehle hui, aur jo nahi hui

- Initial smaller implementation par TypeScript check pass hua tha.
- Ek earlier production build webpack ke saath pass hua tha; us waqt Turbopack environment port-permission issue de raha tha.
- Initial restaurant photo files aur served-page references check kiye gaye the.
- First responsive WebP pass ke image dimensions/file sizes check hue the.
- First responsive component ka rendering check hua tha.
- Later user instruction ke baad commands/tests band rakhe gaye, except separately authorized read-only website fetches.
- Is documentation update ke liye fresh live HTTP verification hui: nine page routes, two menu-category routes, missing-page status, 20 image/logo URLs aur deployed CSS inspect hue.
- Full reference redesign, branding aur latest AVIF changes ka local build ya browser-interaction test run nahi hua. Production endpoints ki successful availability separately verify hui hai.

**Abhi browser mein verify karna baqi hai:** Mobile layout/overflow, search/filter clicks, cart add/remove/quantity, reload ke baad localStorage restoration, gallery modal opening/closing, keyboard focus, form validation, hall preselection, WhatsApp handoff aur actual browser loading timings. In flows ki code implementation documented hai; HTTP response milna in sab ke end-to-end pass hone ka proof nahi.

Pehle ke successful checks ko current complete codebase ke successful production build ka proof nahi samajhna chahiye.

### Reported errors aur applied fixes

| Reported issue | Applied change |
| --- | --- |
| Invalid `fetchpriority` DOM property | React prop `fetchPriority` use kiya |
| Tailwind scan mein temporary missing `home-page.tsx` error | Shared entry point retained; plain stylesheet se unnecessary Tailwind directives remove ki |
| Contact heading JSX parse error | Missing closing fragment fix kiya aur Contact component readable format mein kiya |
| Photos slow feel hona | Static responsive images, caching, AVIF build pipeline, priority preload aur hero animation removal |

## 15. Security aur privacy boundaries

- Website mein customer login ya payment credentials collect nahi hote.
- Current implementation mein central order/customer database nahi hai.
- Cart storage mein item IDs aur quantities hain; contact-form personal details localStorage mein persist nahi ki jati.
- WhatsApp link prepare karne ke baad personal details encoded message URL mein hoti hain; user ko WhatsApp mein send karna hota hai.
- Google Maps embed third-party service hai.
- External links generally new tab aur `noreferrer` ke saath use hue hain.
- `.env*` ignore rule add hai, example environment file exception ke saath.
- `.next/`, `node_modules` aur TypeScript incremental output ignore rules mein hain.

**Git note:** `.gitignore` pehle se tracked files ko automatically untrack nahi karta. Earlier repository mein tracked `.next` files nazar aaye the; unka cleanup is work mein perform nahi kiya gaya.

## 16. Abhi kya pending hai

### Restaurant content

- Item-by-item confirmed menu.
- Prices aur half/full portions.
- Spice choices, add-ons aur dietary/allergen information.
- Official WhatsApp number confirmation.
- Confirmed opening hours aur map pin.
- Delivery areas, minimum order aur charges.
- Hall capacity, package details, booking policies aur deposits.
- Owner-supplied original photographs, agar available hon.

### Business functionality

- Admin panel.
- Backend database.
- Actual order creation aur order IDs.
- Payment gateway / payment confirmation.
- Order status updates aur tracking.
- Table/hall availability calendar.
- Booking conflict prevention.
- Email/SMS notifications.
- Coupon redemption aur loyalty programme.
- Customer accounts.
- Google review integration.
- Urdu/English language toggle.

Yeh suggested future features hain; current site mein implemented keh kar present nahi karne chahiye.

## 17. Recommended next phases

### Phase 1 — Content complete karna

Owner se menu, prices, contact, hours aur hall details confirm karke website data update karein. Current AVIF/menu-rendering changes production par verify ho gaye hain; next step actual browser/mobile behaviour aur loading experience check karna hai.

### Phase 2 — Real ordering

Database, order creation, customer details, delivery calculation aur admin order view add karein. Payment options business requirements ke mutabiq choose karein.

### Phase 3 — Booking management

Hall/table availability, booking requests dashboard, confirmation process aur notifications add karein.

### Phase 4 — Launch polish

Mobile/browser review, accessibility checks, custom domain, SEO essentials, analytics aur real-world connection par performance measurement karein.

## 18. Website maintain kaise karni hai

| Change | Kahan update karna hai |
| --- | --- |
| Phone, address, WhatsApp | `lib/restaurant-data.ts` |
| Menu cards/descriptions | `menuItems` in `lib/restaurant-data.ts` |
| Gallery content | `galleryPhotos` in `lib/restaurant-data.ts` |
| Logo | `public/images/kebabish-logo.svg` |
| Colours/branding | `app/brand-theme.css` |
| Main layouts and sections | `components/restaurant-website.tsx` |
| Header/footer/cart | `components/restaurant-shell.tsx` |
| Page titles/descriptions | Relevant `app/.../page.tsx` and `app/layout.tsx` |
| Image processing rules | `scripts/optimize-images.mjs` |
| Image loading behaviour | `components/restaurant-image.tsx` |

Generated `lib/optimized-images.json` aur optimized filenames ko manually edit karne ke bajaye source images aur optimization script maintain karein. Build pipeline updated variants aur manifest generate karti hai.

## 19. Current handover summary

Kebabish Grill ka single-page demo ab separate routes, logo-based branding, restaurant photos, responsive interface, searchable menu, saved enquiry cart, gallery preview aur WhatsApp contact/booking flows wali website hai.

Current deliverable **restaurant presentation + enquiry website** hai. Complete priced e-commerce ordering, online payments, admin management aur confirmed reservation backend abhi future work hain. Fresh live verification mein nine pages accessible, AVIF/WebP variants available aur menu initial HTML mein present hai. Full browser interaction, message delivery aur real-device speed verification abhi pending hai.
