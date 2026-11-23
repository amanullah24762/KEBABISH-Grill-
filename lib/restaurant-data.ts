export const restaurant = {
  name: 'Kebabish Grill',
  phone: '+923337472104',
  displayPhone: '0333 7472104',
  address: 'Ghosia Chowk, Tulamba Road, Abdul Hakim',
  maps: 'https://www.google.com/maps/search/?api=1&query=Kebabish+Grill+Family+Restaurant+BBQ+Abdul+Hakim',
};

export const whatsapp = (message: string) => `https://wa.me/${restaurant.phone.replace('+', '')}?text=${encodeURIComponent(message)}`;
export type MenuItem = { id: string; name: string; category: string; description: string; image: string; badge?: string };
// Add verified prices here when the restaurant supplies its current menu.
export const menuItems: MenuItem[] = [
  { id: 'bbq', name: 'BBQ & Tikka', category: 'BBQ', description: 'Flame-grilled favourites with bold Pakistani flavour. Ask our team about today’s cuts and portions.', image: '/images/bbq-platter.webp', badge: 'FROM THE GRILL' },
  { id: 'family', name: 'Family Sharing Platter', category: 'Pakistani', description: 'Pakistani favourites to enjoy together. Ask our team about today’s dishes and sharing portions.', image: '/images/family-meal.webp', badge: 'MADE TO SHARE' },
  { id: 'rice', name: 'Rice Platter', category: 'Rice', description: 'A colourful rice platter finished with fresh garnish. Ask our team about today’s rice options and serving sizes.', image: '/images/rice-platter.webp' },
  { id: 'chinese', name: 'Chinese Favourites', category: 'Chinese', description: 'Ask about our Chinese-style rice and main dishes. Our team will confirm current options and portions.', image: '/images/chinese-platter.webp' },
];
export const galleryPhotos = [
  { name: 'Restaurant ambience', category: 'Restaurant', image: '/images/restaurant-interior.webp' },
  { name: 'Dining table inspiration', category: 'Restaurant', image: '/images/family-dining.webp' },
  { name: 'Grilled chicken inspiration', category: 'Food', image: '/images/bbq-platter.webp' },
  { name: 'Floral banquet inspiration', category: 'Celebrations', image: '/images/celebration-stage.webp' },
  { name: 'Dining interior inspiration', category: 'Restaurant', image: '/images/restaurant-entrance.webp' },
  { name: 'Celebration table setting', category: 'Celebrations', image: '/images/celebration-dining.webp' },
  { name: 'Rice platter with garnish', category: 'Food', image: '/images/rice-platter.webp' },
  { name: 'Rice dish inspiration', category: 'Food', image: '/images/chinese-platter.webp' },
];
