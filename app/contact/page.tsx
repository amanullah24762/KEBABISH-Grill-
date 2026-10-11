import type { Metadata } from 'next';
import { HomePage } from '@/components/home-page';

export const metadata: Metadata = { title: 'Contact | Kebabish Grill', description: 'Contact Kebabish Grill and find directions to Ghosia Chowk, Tulamba Road, Abdul Hakim.' };
export default function ContactPage() { return <HomePage section="contact" />; }
