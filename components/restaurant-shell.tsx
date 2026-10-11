'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createContext, useContext, useEffect, useId, useRef, useState } from 'react';
import { Icon } from './restaurant-icons';
import { menuItems, restaurant, whatsapp } from '@/lib/restaurant-data';

type Line = { id: string; quantity: number };
type CartContext = { add: (id: string) => void; open: () => void };
const Cart = createContext<CartContext>({ add: () => {}, open: () => {} });
export const useCart = () => useContext(Cart);

export function Modal({ open, onClose, title, children, drawer = false }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode; drawer?: boolean }) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  useEffect(() => {
    const dialog = ref.current;
    if (!open || !dialog) return;
    const before = document.activeElement as HTMLElement | null;
    const previous = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => { dialog.close(); document.body.style.overflow = previous; before?.focus(); };
  }, [open]);
  return <dialog ref={ref} aria-labelledby={titleId} className={`kg-dialog ${drawer ? 'kg-drawer' : ''}`} onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) { const r = event.currentTarget.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) onClose(); } }}><div className="cart-heading"><h2 id={titleId}>{title}</h2><button type="button" className="icon-button" onClick={onClose} aria-label="Close dialog"><Icon name="close"/></button></div>{open && children}</dialog>;
}

export function Brand() { return <Link className="brand kg-brand" aria-label="Kebabish Grill home" href="/"><img className="kg-brand-logo" src="/images/kebabish-logo.svg" alt="Kebabish Grill — Restaurant & Marriage Hall" width={72} height={72} decoding="async"/><span>KEBABISH GRILL<small>RESTAURANT & MARRIAGE HALL</small></span></Link>; }
const links = [['Home', '/'], ['Our Menu', '/menu'], ['About Us', '/about'], ['Offers', '/offers'], ['Gallery', '/gallery'], ['Reviews', '/reviews'], ['Marriage Hall', '/marriage-hall'], ['Contact', '/contact']];

export function RestaurantShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobile, setMobile] = useState(false);
  const [lines, setLines] = useState<Line[]>([]);
  const [ready, setReady] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [mode, setMode] = useState('Pickup');
  const [orderLink, setOrderLink] = useState('');
  const [notice, setNotice] = useState('');
  useEffect(() => {
    try { const value: unknown = JSON.parse(localStorage.getItem('kebabish-order-v1') || '[]');
      if (Array.isArray(value)) { const ids = new Set<string>(); setLines(value.filter((line): line is Line => {
        if (!line || typeof line !== 'object' || typeof line.id !== 'string' || ids.has(line.id) || !menuItems.some(item => item.id === line.id) || !Number.isInteger(line.quantity) || line.quantity < 1 || line.quantity > 20) return false;
        ids.add(line.id); return true;
      })); }
    } catch { /* A cart can still work when browser storage is unavailable. */ }
    setReady(true);
  }, []);
  useEffect(() => { if (ready) { try { localStorage.setItem('kebabish-order-v1', JSON.stringify(lines)); } catch {} } setOrderLink(''); }, [lines, ready]);
  useEffect(() => { setMobile(false); }, [pathname]);
  useEffect(() => { if (notice) { const timer = setTimeout(() => setNotice(''), 2600); return () => clearTimeout(timer); } }, [notice]);
  const count = lines.reduce((total, line) => total + line.quantity, 0);
  function add(id: string) {
    const item = menuItems.find(item => item.id === id); if (!item) return;
    setLines(current => current.some(line => line.id === id) ? current.map(line => line.id === id ? { ...line, quantity: Math.min(20, line.quantity + 1) } : line) : [...current, { id, quantity: 1 }]);
    setNotice(`${item.name} added to your enquiry.`);
  }
  function change(id: string, amount: number) { setLines(current => current.map(line => line.id === id ? { ...line, quantity: Math.min(20, line.quantity + amount) } : line).filter(line => line.quantity > 0)); }
  function openCart() { setCheckout(false); setOrderLink(''); setCartOpen(true); }
  return <Cart.Provider value={{ add, open: openCart }}>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="announcement"><Icon size={13}/><span>FRESH FROM THE GRILL. MADE TO BRING YOU TOGETHER.</span><span className="announcement-location"><Icon name="pin" size={12}/>Abdul Hakim</span></div>
    <header className="header"><div className="nav-wrap"><Brand/><nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href} className={pathname === href ? 'active' : ''} aria-current={pathname === href ? 'page' : undefined}>{label}</Link>)}</nav><div className="nav-actions"><button type="button" className="cart-button" onClick={openCart} aria-label={`Open order enquiry, ${count} items`}><Icon name="bag"/><span className="cart-count">{count}</span></button><Link className="button nav-order" href="/booking">Book Now<Icon name="arrow" size={16}/></Link><button type="button" className="mobile-toggle icon-button" onClick={() => setMobile(!mobile)} aria-label={mobile ? 'Close navigation' : 'Open navigation'} aria-expanded={mobile} aria-controls="mobile-navigation"><Icon name={mobile ? 'close' : 'menu'}/></button></div></div>{mobile && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} onClick={() => setMobile(false)} href={href} aria-current={pathname === href ? 'page' : undefined}>{label}</Link>)}<Link href="/booking" onClick={() => setMobile(false)}>Book Now</Link></nav>}</header>
    {children}
    <footer><div className="footer-grid"><div><Brand/><p>Fresh from our grill.<br/>Shared with the people you love.</p><a href={whatsapp('Hello Kebabish Grill! I would like to ask about your restaurant.')} target="_blank" rel="noreferrer" className="text-link">Let’s talk on WhatsApp<Icon name="arrow" size={16}/></a></div><div><h4>Explore</h4>{[['Our Menu','/menu'],['About Us','/about'],['Offers','/offers'],['Gallery','/gallery'],['Reviews','/reviews']].map(([name,href])=><Link key={href} href={href}>{name}</Link>)}</div><div><h4>Make it an occasion</h4><Link href="/marriage-hall">Marriage hall</Link><Link href="/booking">Book a table</Link><Link href="/menu?category=BBQ">BBQ & tikka</Link><Link href="/menu?category=Rice">Rice & biryani</Link><Link href="/contact">Get in touch</Link></div><div><h4>Come hungry.</h4><p><Icon name="pin" size={16}/>{restaurant.address}</p><a href={`tel:${restaurant.phone}`}><Icon name="phone" size={16}/>{restaurant.displayPhone}</a><p>Call us for today’s opening hours.</p></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Kebabish Grill. All rights reserved.</span><span>Family dining · Abdul Hakim</span></div></footer>
    <a className="floating-whatsapp" href={whatsapp('Hi Kebabish Grill! I have a question.')} aria-label="Chat with Kebabish Grill on WhatsApp" target="_blank" rel="noreferrer"><Icon name="chat" size={25}/></a>
    <div className={`kg-toast ${notice ? 'kg-toast-visible' : ''}`} role="status">{notice}</div>
    <Modal open={cartOpen} onClose={() => setCartOpen(false)} title={checkout ? 'Your order enquiry' : `Your selection (${count})`} drawer>
      {lines.length === 0 ? <div className="empty-cart"><Icon name="bag" size={46}/><h3>Something good starts here.</h3><p>Add your favourites from the menu to prepare an enquiry.</p><Link className="button" href="/menu" onClick={() => setCartOpen(false)}>Explore the menu<Icon name="arrow"/></Link></div> : <>
        {!checkout ? <><div className="cart-lines">{lines.map(line => { const item = menuItems.find(item => item.id === line.id)!; return <div className="cart-line" key={line.id}><div><h4>{item.name}</h4><p>Portion & price to be confirmed</p><div className="quantity"><button type="button" onClick={() => change(line.id, -1)} aria-label={`Decrease ${item.name}`}>−</button><span>{line.quantity}</span><button type="button" disabled={line.quantity >= 20} onClick={() => change(line.id, 1)} aria-label={`Increase ${item.name}`}>+</button></div></div><button type="button" className="remove-button" onClick={() => setLines(current => current.filter(entry => entry.id !== line.id))} aria-label={`Remove ${item.name}`}><Icon name="close" size={18}/></button></div>; })}</div><div className="cart-summary"><p>Our team will confirm exact dishes, portions, prices and availability. No payment is taken here.</p><button className="button full-width" onClick={() => setCheckout(true)}>Continue enquiry<Icon name="arrow"/></button></div></> : <form className="checkout-form" onChange={() => setOrderLink('')} onSubmit={event => {
          event.preventDefault(); const data = new FormData(event.currentTarget);
          const message = `Hello Kebabish Grill! I would like to enquire about:\n${lines.map(line => `${line.quantity} × ${menuItems.find(item => item.id === line.id)!.name}`).join('\n')}\nName: ${data.get('name')}\nPhone: ${data.get('phone')}\nPreference: ${mode}\n${mode === 'Delivery' ? `Address: ${data.get('address')}\n` : ''}Notes: ${data.get('notes') || 'None'}\nPlease confirm dishes, portions, prices${mode === 'Delivery' ? ', delivery availability and charges' : ''} before placing my order.`;
          setOrderLink(whatsapp(message));
        }}><button type="button" className="text-link" onClick={() => setCheckout(false)}>← Back to your selection</button><label>Your name<input name="name" autoComplete="name" required maxLength={80}/></label><label>Phone number<input name="phone" type="tel" autoComplete="tel" required pattern="[+0-9 ()-]{7,20}" title="Enter a valid phone number"/></label><label>Order preference<select value={mode} onChange={event => setMode(event.target.value)}><option>Pickup</option><option>Delivery</option><option>Dine in</option></select></label>{mode === 'Delivery' && <label>Delivery address<textarea name="address" autoComplete="street-address" required maxLength={500}/></label>}<label>Notes (optional)<textarea name="notes" maxLength={1000}/></label><p className="small muted">Availability and the final amount are confirmed by our team on WhatsApp. This is an enquiry, not a confirmed order.</p><button type="submit" className="button full-width">Prepare WhatsApp enquiry<Icon name="arrow"/></button>{orderLink && <div className="success-note" role="status">Your enquiry is ready. Open WhatsApp and send it to the team.<a className="button full-width" href={orderLink} target="_blank" rel="noreferrer">Continue on WhatsApp<Icon name="chat"/></a></div>}</form>}
      </>}
    </Modal>
  </Cart.Provider>;
}
