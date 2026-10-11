import type { Metadata } from 'next';
import { HomePage } from '@/components/home-page';

export const metadata: Metadata = { title: 'Guest Reviews | Kebabish Grill', description: 'Find guest reviews of Kebabish Grill on Google and share feedback about your visit with our team.' };
export default function ReviewsPage() { return <HomePage section="reviews"/>; }
