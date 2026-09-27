import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
const body = DM_Sans({ subsets: ['latin'], variable: '--font-body' });
const display = Playfair_Display({ subsets: ['latin'], variable: '--font-display' });
export const metadata: Metadata = { title: 'Kebabish Grill | Abdul Hakim', description: 'Kebabish Grill Family Restaurant & Marriage Hall, Abdul Hakim.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${body.variable} ${display.variable}`}>{children}</body></html>; }
