import type { Metadata } from 'next';
import { HomePage } from '@/components/home-page';

export const metadata: Metadata = { title: 'About Us | Kebabish Grill', description: 'Discover family dining and Pakistani flavours at Kebabish Grill in Abdul Hakim.' };
export default function AboutPage() { return <HomePage section="about" />; }
