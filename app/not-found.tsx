import Link from 'next/link';

export default function NotFound() { return <main id="main" className="loading-state"><span className="eyebrow">404 · OFF THE MENU</span><h1>Let’s get you back to the good stuff.</h1><p>This page could not be found.</p><Link href="/" className="button">Back to home ↗</Link></main>; }
