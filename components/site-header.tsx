'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Menu', '/menu'],
  ['Gallery', '/gallery'],
  ['Marriage Hall', '/marriage-hall'],
  ['Contact', '/contact'],
] as const;

export function Brand() {
  return <Link href="/" aria-label="Kebabish Grill home" className="leading-none"><span className="block text-[15px] font-bold tracking-[.24em] text-white">KEBABISH</span><span className="mt-1 block text-[8px] tracking-[.23em] text-saffron">GRILL · FAMILY RESTAURANT</span></Link>;
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="absolute inset-x-0 top-0 z-30 border-b border-white/15 bg-coal/90 backdrop-blur-sm">
    <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-6 lg:px-14">
      <Brand />
      <button type="button" className="grid h-10 w-10 place-content-center gap-1.5 md:hidden" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}><span className="h-px w-6 bg-white"/><span className="h-px w-6 bg-white"/></button>
      <nav id="primary-navigation" aria-label="Main navigation" onKeyDown={event => { if (event.key === 'Escape') setOpen(false); }} className={`${open ? 'flex' : 'hidden'} absolute left-0 top-[78px] w-full flex-col gap-5 border-b border-white/10 bg-coal px-6 py-7 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}>
        {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={pathname === href ? 'page' : undefined} className={`text-[11px] transition hover:text-saffron ${pathname === href ? 'text-saffron' : 'text-cream'}`}>{label}</Link>)}
        <Link href="/booking" onClick={() => setOpen(false)} aria-current={pathname === '/booking' ? 'page' : undefined} className="border border-saffron px-5 py-3 text-center text-[10px] font-bold uppercase tracking-[.16em] text-saffron transition hover:bg-saffron hover:text-coal">Book Now</Link>
      </nav>
    </div>
  </header>;
}
