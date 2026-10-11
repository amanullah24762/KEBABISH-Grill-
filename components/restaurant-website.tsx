'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { RestaurantImage as Image } from './restaurant-image';
import { Icon } from './restaurant-icons';
import { Modal, useCart } from './restaurant-shell';
import { galleryPhotos, menuItems, restaurant, whatsapp, type MenuItem } from '@/lib/restaurant-data';

export type RestaurantPage = 'home' | 'menu' | 'about' | 'offers' | 'gallery' | 'reviews' | 'hall' | 'contact' | 'booking';
const foodSizes = '(max-width: 420px) calc(100vw - 40px), (max-width: 1000px) 50vw, 25vw';
function Eyebrow({ children }: { children: React.ReactNode }) { return <div className="eyebrow"><span/>{children}</div>; }
function Button({ children, href = '/menu', outline = false }: { children: React.ReactNode; href?: string; outline?: boolean }) { return <Link href={href} className={`button ${outline ? 'outline-button' : ''}`}>{children}<Icon name="arrow" size={18}/></Link>; }
function PageHero({ label, eyebrow, title, accent, description }: { label: string; eyebrow: string; title: string; accent: string; description: string }) {
  return <section className="page-hero"><div className="container"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{label}</span></nav><Eyebrow>{eyebrow}</Eyebrow><h1>{title}<br/><span>{accent}</span></h1><p>{description}</p><div className="kg-page-mark"><Icon size={220}/></div></div></section>;
}

function Hero() {
  return <section className="hero"><Image src="/images/restaurant-interior.webp" alt="Kebabish Grill’s decorated dining room in Abdul Hakim" fill priority sizes="100vw" className="hero-photo"/><div className="hero-shade"/><div className="hero-grain"/><div className="container hero-container"><div className="hero-copy"><Eyebrow>FIRE. FLAVOUR. FAMILY.</Eyebrow><h1>Fresh From<br/>The Grill, Made<br/>With <span className="hero-accent">Heart.</span></h1><p>Some meals bring everyone a little closer.<br className="desktop-break"/> Enjoy BBQ, Pakistani favourites and family dining<br className="desktop-break"/> at Kebabish Grill in Abdul Hakim.</p><div className="hero-buttons"><Button>Explore Menu</Button><Button href="/booking" outline>Book a Table</Button></div><div className="hero-note"><span className="tiny-flame"><Icon size={18}/></span>Good food. Familiar flavours. Your people.</div></div><div className="hero-stamp"><Icon size={26}/><strong>FIRE<br/>GRILLED</strong><span>MADE TO BRING YOU TOGETHER</span></div><div className="hero-bottom"><span><Icon name="pin" size={14}/> PROUDLY SERVING ABDUL HAKIM</span><a href="#menu">EXPLORE THE GOOD STUFF ↓</a></div></div></section>;
}

function Marquee() {
  const [paused, setPaused] = useState(false);
  return <div className="flavor-marquee is-in-view" data-paused={paused}><div className="flavor-track">{[0,1].map(copy => <div key={copy} className="flavor-group" aria-hidden={copy === 1 ? true : undefined}><span><Icon/>Fresh from the grill.</span><i>✦</i><span><Icon name="heart"/>Good food brings us together.</span><i>✦</i><span>Family dining. Memorable occasions.</span><i>✦</i><span>Made with love in Abdul Hakim <b className="orange">♥</b></span><i>✦</i></div>)}</div><button type="button" className="marquee-toggle" aria-label={paused ? 'Resume scrolling text' : 'Pause scrolling text'} aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? '▶' : 'Ⅱ'}</button></div>;
}

function MenuGrid({ full = false }: { full?: boolean }) {
  const params = useSearchParams();
  const categoryParam = params.get('category');
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const cart = useCart();
  const categories = ['All', 'BBQ', 'Pakistani', 'Rice', 'Chinese'];
  useEffect(() => { setCategory(['BBQ', 'Pakistani', 'Rice', 'Chinese'].includes(categoryParam || '') ? categoryParam! : 'All'); }, [categoryParam]);
  const filtered = menuItems.filter(item => (category === 'All' || item.category === category) && `${item.name} ${item.description}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <section id="menu" className={`section ${full ? 'full-menu' : ''}`}><div className="container"><div className="section-heading"><div><Eyebrow>YOUR NEXT FAVOURITE STARTS HERE</Eyebrow><h2>Big on flavour. <span>Made to share.</span></h2><p>Pick a favourite and ask our team about dishes, portions and prices.</p></div>{!full && <Link href="/menu" className="text-link">View full menu<Icon name="arrow" size={16}/></Link>}</div><div className="menu-toolbar"><div className="category-tabs" role="group" aria-label="Filter menu by category">{categories.map(name => <button key={name} type="button" className={category === name ? 'selected' : ''} aria-pressed={category === name} onClick={() => setCategory(name)}>{name === 'All' ? 'All favourites' : name}</button>)}</div><label className="kg-search-label"><span className="kg-sr-only">Search the menu</span><input className="menu-search" type="search" placeholder="Search your favourites…" value={query} onChange={event => setQuery(event.target.value)}/></label></div>
    <div className="food-grid">{filtered.map(item => <article className="food-card" key={item.id}><button className="food-image kg-image-button" type="button" aria-label={`View ${item.name}`} onClick={() => setSelected(item)}><Image src={item.image} alt={item.name} fill sizes={foodSizes} className="kg-cover"/>{item.badge && <span className="food-badge"><Icon size={12}/>{item.badge}</span>}</button><div className="food-content"><span className="food-category">{item.category.toUpperCase()}</span><h3><button className="kg-title-button" type="button" onClick={() => setSelected(item)}>{item.name}</button></h3><p>{item.description}</p><div className="food-bottom"><strong className="kg-price-note">Ask for price</strong><button type="button" onClick={() => cart.add(item.id)} aria-label={`Add ${item.name} to your enquiry`}>Add to enquiry +</button></div></div></article>)}</div>
    {filtered.length === 0 && <div className="empty-results" role="status"><h3>No favourites found.</h3><p>Try another search or category.</p><button type="button" className="text-link" onClick={() => { setQuery(''); setCategory('All'); }}>Show all favourites</button></div>}
    <p className="menu-disclaimer">Photos show dishes from the restaurant. Exact dishes, portions, availability and current prices are confirmed by our team before your order.</p>
    <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.name || 'Menu details'}>{selected && <><div className="kg-detail-image"><Image src={selected.image} alt={selected.name} fill sizes="(max-width: 600px) 100vw, 560px" className="kg-cover" priority/></div><div className="kg-dialog-content"><span className="food-category">{selected.category}</span><p>{selected.description}</p><p className="small">Ask us about portion sizes and today’s price.</p><button className="button full-width" onClick={() => { cart.add(selected.id); setSelected(null); }}>Add to enquiry<Icon name="bag"/></button></div></>}</Modal>
  </div></section>;
}
function MenuSection({ full = false }: { full?: boolean }) { return <Suspense fallback={<div className="section container" role="status">Loading the menu…</div>}><MenuGrid full={full}/></Suspense>; }

function WhyUs() {
  const values = [
    ['flame', 'Flavour from the grill', 'BBQ and tikka with the familiar flavours you come back for.'],
    ['heart', 'A table for your family', 'A welcoming place to slow down and share a meal together.'],
    ['bag', 'Something for everyone', 'Pakistani classics, rice and Chinese favourites around one table.'],
    ['check', 'Room for celebrations', 'From family gatherings to wedding occasions, plan it with our team.'],
  ] as const;
  return <section className="section why-section"><div className="container why-layout"><div><Eyebrow>THE KEBABISH WAY</Eyebrow><h2>More than a meal.<br/><span>A reason to gather.</span></h2><p>Good food and warm hospitality belong together. That’s what we bring to your table.</p><Link className="text-link" href="/about">Get to know us<Icon name="arrow" size={16}/></Link></div><div className="values-grid">{values.map(([icon,title,copy])=><article className="value" key={title}><div className="value-icon"><Icon name={icon}/></div><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>;
}

function Offers() {
  return <section className="section"><div className="container"><div className="section-heading"><div><Eyebrow>GOOD FOOD. GOOD COMPANY.</Eyebrow><h2>Make room for <span>something special.</span></h2><p>Ask about today’s offers and arrangements for your group.</p></div><a className="text-link" href={whatsapp('Hi Kebabish Grill! What offers and group dining options are available today?')} target="_blank" rel="noreferrer">Ask about offers<Icon name="arrow" size={16}/></a></div><div className="offers-grid"><article className="offer-card"><Image src="/images/family-meal.webp" alt="A family meal at Kebabish Grill" fill sizes="(max-width: 760px) 100vw, 50vw"/><div className="offer-shade"/><div className="offer-copy"><span className="offer-label">GATHER AROUND THE TABLE</span><h3>A meal for<br/>your whole family.</h3><p>Let us help you choose a spread everyone can share.</p><strong>Ask for today’s options</strong><Button href="/menu">Explore favourites</Button></div></article><article className="offer-card offer-1"><Image src="/images/celebration-stage.webp" alt="Floral event stage at Kebabish Grill" fill sizes="(max-width: 760px) 100vw, 50vw"/><div className="offer-shade"/><div className="offer-copy"><span className="offer-label">MAKE IT AN OCCASION</span><h3>Your celebration.<br/>Our warm welcome.</h3><p>Talk to us about dining and hall arrangements for your date.</p><strong>Plan it with our team</strong><Button href="/booking?occasion=hall">Enquire now</Button></div></article></div><p className="menu-disclaimer">Offers and event packages depend on your date, guest count and menu. Contact the restaurant for current pricing.</p></div></section>;
}

function StoryBanner() { return <section className="story-banner"><Image src="/images/family-dining.webp" alt="Family tables at Kebabish Grill" fill sizes="100vw"/><div className="story-shade"/><div className="container story-copy"><Eyebrow>FROM OUR TABLE, WITH LOVE</Eyebrow><h2>A little fire.<br/>A lot of <span>heart.</span></h2><p>Our favourite part of a great meal is who you share it with.<br/>Discover family dining at Kebabish Grill.</p><Button href="/about" outline>Our story</Button></div><span className="story-side">PREPARED WITH CARE · SHARED WITH LOVE</span></section>; }

function Reviews({ full = false }: { full?: boolean }) { return <section className="section"><div className="container"><div className="section-heading"><div><Eyebrow>AROUND OUR TABLE</Eyebrow><h2>Your visit. <span>Your words.</span></h2><p>See what guests are saying, or tell us about your own experience.</p></div><a href={restaurant.maps} target="_blank" rel="noreferrer" className="text-link">Read reviews on Google<Icon name="arrow" size={16}/></a></div><div className="kg-review-invite"><div className="value-icon"><Icon name="chat" size={28}/></div><div><h3>Been to Kebabish?</h3><p>We’d love to hear about your meal, family visit or celebration. Open our Google listing to read and share public reviews.</p></div><a className="button outline-button" href={restaurant.maps} target="_blank" rel="noreferrer">Visit Google listing<Icon name="arrow"/></a></div>{full && <div className="kg-feedback"><EnquiryForm purpose="feedback"/></div>}</div></section>; }

function Location() { return <section className="section location-section"><div className="container location-layout"><div><Eyebrow>YOUR TABLE IS THIS WAY</Eyebrow><h2>Right here in<br/><span>Abdul Hakim.</span></h2><p>Bring your appetite, bring your people. Find Kebabish Grill on Tulamba Road.</p><div className="location-detail"><Icon name="pin"/><div><strong>Come hungry.</strong><br/>{restaurant.address}</div></div><div className="location-detail"><Icon name="phone"/><a href={`tel:${restaurant.phone}`}>{restaurant.displayPhone}</a></div><div className="location-detail"><Icon name="clock"/><span>Call to confirm today’s opening hours.</span></div><div className="location-actions"><a className="button" href={restaurant.maps} target="_blank" rel="noreferrer">Get directions<Icon name="arrow" size={16}/></a><Link href="/contact" className="text-link">Get in touch<Icon name="arrow" size={16}/></Link></div></div><div className="map-frame"><iframe title="Kebabish Grill location in Abdul Hakim" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=Kebabish%20Grill%20Abdul%20Hakim&t=&z=15&ie=UTF8&iwloc=&output=embed"/><a className="map-caption" href={restaurant.maps} target="_blank" rel="noreferrer"><Icon name="pin" size={15}/>KEBABISH GRILL · ABDUL HAKIM<Icon name="arrow" size={15}/></a></div></div></section>; }
function BottomCTA() { return <section className="bottom-cta"><div className="container"><div><Icon size={48}/><h2>Your next family meal?<br/>Let’s make it memorable.</h2></div><Link className="button light-button" href="/menu">Find your favourites<Icon name="arrow" size={18}/></Link></div></section>; }

function About() { return <><section className="section"><div className="container about-story"><div className="about-image"><Image src="/images/family-dining.webp" alt="Kebabish Grill family dining area" fill priority sizes="(max-width: 760px) 100vw, 50vw"/><span className="about-image-label"><Icon size={18}/>FAMILY FIRST. ALWAYS.</span></div><div><Eyebrow>WELCOME TO OUR TABLE</Eyebrow><h2>Good food brings<br/><span>people together.</span></h2><p>Kebabish Grill brings Pakistani flavours, BBQ and family dining together in Abdul Hakim. It’s a place for meals with your favourite people, a catch-up around the table and occasions worth remembering.</p><p>From tikka and rice to a meal for the whole family, explore the menu and let our team help you plan your visit.</p><div className="mission"><Icon name="heart"/><div><h3>A warm welcome, every time.</h3><p>A family meal or a bigger celebration—make it your kind of occasion.</p></div></div><Button href="/booking">Plan your visit</Button></div></div></section><WhyUs/><StoryBanner/></>; }

function Gallery() {
  const [category, setCategory] = useState('All');
  const [selected, setSelected] = useState<(typeof galleryPhotos)[number] | null>(null);
  const photos = galleryPhotos.filter(photo => category === 'All' || photo.category === category);
  return <section className="section"><div className="container"><div className="menu-toolbar"><div className="category-tabs" role="group" aria-label="Filter gallery">{['All', 'Restaurant', 'Food', 'Celebrations'].map(name => <button key={name} className={category === name ? 'selected' : ''} aria-pressed={category === name} onClick={() => setCategory(name)}>{name}</button>)}</div><p className="small">A glimpse of our food, spaces and celebrations.</p></div><div className="gallery-grid">{photos.map((photo,index)=><button type="button" className={`gallery-item gallery-item-${index % 6}`} key={photo.image} onClick={() => setSelected(photo)} aria-label={`Enlarge photo: ${photo.name}`}><Image src={photo.image} alt={photo.name} fill sizes="(max-width: 420px) 100vw, (max-width: 760px) 50vw, 66vw"/><div><small>{photo.category.toUpperCase()}</small><h3>{photo.name} ↗</h3></div></button>)}</div><Modal title={selected?.name || 'Gallery photo'} open={!!selected} onClose={() => setSelected(null)}>{selected && <div className="kg-lightbox-image"><Image src={selected.image} alt={selected.name} sizes="(max-width: 800px) 100vw, 800px" className="kg-contain" priority/></div>}</Modal></div></section>;
}

function EnquiryForm({ purpose = 'contact' }: { purpose?: 'contact' | 'booking' | 'feedback' }) {
  const [link, setLink] = useState('');
  const [today, setToday] = useState('');
  const [occasion, setOccasion] = useState('Family dining');
  useEffect(() => { const date = new Date(); setToday(`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`); if (new URLSearchParams(window.location.search).get('occasion') === 'hall') setOccasion('Marriage hall'); }, []);
  const heading = purpose === 'booking' ? 'Let’s plan your occasion.' : purpose === 'feedback' ? 'Share private feedback.' : 'Let’s talk good food.';
  return <form className="contact-form" onChange={() => setLink('')} onSubmit={event => {
    event.preventDefault(); const data = new FormData(event.currentTarget);
    const lines = [`Hello Kebabish Grill!`, purpose === 'booking' ? 'I would like to make a booking enquiry.' : purpose === 'feedback' ? 'I would like to share feedback about my visit.' : 'I have a question.', `Name: ${data.get('name')}`, `Phone: ${data.get('phone')}`];
    if (purpose === 'booking') lines.push(`Occasion: ${occasion}`, `Date: ${data.get('date')}`, `Time: ${data.get('time')}`, `Guests: ${data.get('guests')}`, 'Please confirm availability and arrangements.');
    lines.push(`Message: ${data.get('message') || 'None'}`); setLink(whatsapp(lines.join('\n')));
  }}><h2>{heading}</h2><p>{purpose === 'booking' ? 'Tell us a little about your plans. Our team will confirm availability and arrangements.' : purpose === 'feedback' ? 'Your message goes to the restaurant on WhatsApp; it is not published as a review.' : 'Send your question to our team on WhatsApp.'}</p><label>Your name<input name="name" autoComplete="name" maxLength={80} required placeholder="Full name"/></label><label>Phone number<input type="tel" name="phone" autoComplete="tel" pattern="[+0-9 ()-]{7,20}" title="Enter a valid phone number" required placeholder="03XX XXXXXXX"/></label>{purpose === 'booking' && <><label>Occasion<select value={occasion} onChange={event => setOccasion(event.target.value)}><option>Family dining</option><option>Marriage hall</option><option>Birthday or family gathering</option></select></label><div className="kg-form-row"><label>Preferred date<input name="date" type="date" min={today || undefined} required/></label><label>Preferred time<input name="time" type="time" required/></label></div><label>Number of guests<input name="guests" type="number" min="1" max="2000" required placeholder="How many people?"/></label></>}<label>{purpose === 'booking' ? 'Anything we should know? (optional)' : 'Your message'}<textarea name="message" required={purpose !== 'booking'} rows={4} maxLength={1500} placeholder={purpose === 'feedback' ? 'Tell us about your visit…' : 'How can we help?'}/></label><button className="button full-width" type="submit">Prepare WhatsApp message<Icon name="arrow"/></button><p className="small kg-form-note">Your details stay on this device until you choose to send the message in WhatsApp.{purpose === 'booking' ? ' A booking is confirmed only when our team replies.' : ''}</p>{link && <div className="success-note" role="status"><p>Your message is ready. Open WhatsApp to review and send it.</p><a className="button full-width" href={link} target="_blank" rel="noreferrer">Continue on WhatsApp<Icon name="chat"/></a></div>}</form>;
}

function Contact({ booking = false }: { booking?: boolean }) {
  return <>
    <section className="section">
      <div className="container contact-layout">
        <div className="contact-details">
          <Eyebrow>{booking ? 'A PLACE FOR YOUR PLANS' : 'WE’D LOVE TO HEAR FROM YOU'}</Eyebrow>
          <h2>
            {booking ? (
              <>Your people.<br/><span>Your occasion.</span></>
            ) : (
              <>Good conversations<br/><span>start here.</span></>
            )}
          </h2>
          <p className="kg-intro-copy">{booking ? 'A family dinner, birthday or wedding celebration—tell us what you have in mind, and we’ll help with the next steps.' : 'Ask about the menu, plan a family visit or speak to us about your next celebration.'}</p>
          <div><Icon name="pin"/><div><h3>Find us</h3><p>{restaurant.address}</p><a className="text-link" href={restaurant.maps} target="_blank" rel="noreferrer">Get directions<Icon name="arrow" size={16}/></a></div></div>
          <div><Icon name="phone"/><div><h3>Call our team</h3><a href={`tel:${restaurant.phone}`}>{restaurant.displayPhone}</a></div></div>
          <div><Icon name="clock"/><div><h3>Plan your visit</h3><p>Call to confirm opening hours and availability for your preferred time.</p></div></div>
          <div className="kg-contact-photo"><Image src={booking ? '/images/celebration-dining.webp' : '/images/restaurant-entrance.webp'} alt={booking ? 'Celebration dining setup at Kebabish Grill' : 'Entrance to Kebabish Grill'} fill sizes="(max-width: 760px) 100vw, 50vw"/></div>
        </div>
        <EnquiryForm purpose={booking ? 'booking' : 'contact'}/>
      </div>
    </section>
    {!booking && <Location/>}
  </>;
}

function Hall() { return <><section className="story-banner kg-hall-banner"><Image src="/images/celebration-stage.webp" alt="Kebabish Grill celebration stage with floral decoration" fill priority sizes="100vw"/><div className="story-shade"/><div className="container story-copy"><Eyebrow>WEDDINGS · RECEPTIONS · FAMILY OCCASIONS</Eyebrow><h2>Your occasion.<br/><span>A memorable setting.</span></h2><p>Bring your celebration to Kebabish Grill.<br/>Discuss your date, guest count and dining arrangements with our team.</p><Button href="/booking?occasion=hall">Enquire about your date</Button></div></section><section className="section"><div className="container about-story"><div><Eyebrow>LET’S MAKE A PLAN</Eyebrow><h2>Every celebration<br/><span>starts with a conversation.</span></h2><p>Tell us about the gathering you have in mind. We’ll help you check the hall’s availability and discuss the food, seating and arrangements for your occasion.</p><div className="kg-checklist">{['Share your preferred date and time', 'Tell us your guest count and occasion', 'Discuss menu options and arrangements', 'Confirm availability and pricing with the team'].map(text => <p key={text}><Icon name="check" size={18}/>{text}</p>)}</div><Button href="/booking?occasion=hall">Plan your celebration</Button></div><div className="about-image"><Image src="/images/celebration-dining.webp" alt="Tables arranged for an occasion at Kebabish Grill" fill sizes="(max-width: 760px) 100vw, 50vw"/></div></div></section></>; }

const pageDetails: Record<Exclude<RestaurantPage,'home'>, { label: string; eyebrow: string; title: string; accent: string; description: string }> = {
  menu: { label: 'Our Menu', eyebrow: 'FRESH FROM THE GRILL', title: 'Good food.', accent: 'Great choices.', description: 'BBQ, Pakistani favourites and something for the whole table. What are you craving?' },
  about: { label: 'About Us', eyebrow: 'THE PEOPLE. THE FOOD. THE FEELING.', title: 'A little fire.', accent: 'A lot of heart.', description: 'Family dining, familiar flavours and a warm welcome in Abdul Hakim.' },
  offers: { label: 'Offers', eyebrow: 'MORE REASONS TO GATHER', title: 'Good company.', accent: 'Great possibilities.', description: 'Discover options for family meals and celebrations. Ask our team for current offers.' },
  gallery: { label: 'Gallery', eyebrow: 'A LITTLE LOOK AROUND', title: 'Our place.', accent: 'Your next memory.', description: 'Real moments, familiar flavours and a place for the whole family.' },
  reviews: { label: 'Reviews', eyebrow: 'THE WORD AROUND THE TABLE', title: 'Good food.', accent: 'Honest feedback.', description: 'Read guest experiences on Google, or tell our team about your visit.' },
  hall: { label: 'Marriage Hall', eyebrow: 'MAKE IT AN OCCASION', title: 'Your special day.', accent: 'Our warm welcome.', description: 'A setting for wedding functions, receptions and the moments that bring everyone together.' },
  contact: { label: 'Contact', eyebrow: 'LET’S START A CONVERSATION', title: 'Come hungry.', accent: 'We’ll take it from here.', description: 'Find us, call us or send a message. Your next visit starts here.' },
  booking: { label: 'Book Now', eyebrow: 'SAVE A PLACE FOR YOUR PEOPLE', title: 'A table for you.', accent: 'An occasion to remember.', description: 'Prepare a table or marriage hall enquiry, then confirm the details with our team.' },
};
export function RestaurantWebsite({ section = 'home' }: { section?: RestaurantPage }) {
  return <main id="main">{section !== 'home' && <PageHero {...pageDetails[section]}/>}
    {section === 'home' && <><Hero/><Marquee/><MenuSection/><WhyUs/><Offers/><StoryBanner/><Reviews/><Location/></>}
    {section === 'menu' && <MenuSection full/>}
    {section === 'about' && <About/>}
    {section === 'offers' && <Offers/>}
    {section === 'gallery' && <Gallery/>}
    {section === 'reviews' && <Reviews full/>}
    {section === 'hall' && <Hall/>}
    {section === 'contact' && <Contact/>}
    {section === 'booking' && <Contact booking/>}
    <BottomCTA/>
  </main>;
}
