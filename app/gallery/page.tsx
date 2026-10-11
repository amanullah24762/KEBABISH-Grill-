import type { Metadata } from 'next';
import { HomePage } from '@/components/home-page';

export const metadata: Metadata = { title: 'Gallery | Kebabish Grill', description: 'See photos of the dining spaces and celebration areas at Kebabish Grill, Abdul Hakim.' };
export default function GalleryPage() { return <HomePage section="gallery" />; }
