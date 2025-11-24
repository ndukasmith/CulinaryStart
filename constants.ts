import { Kitchen, Booking, Partner, UserRole, BlogPost, Event, FaqItem } from './types';

export const MOCK_USER = {
  id: 'u1',
  name: 'Sanne de Vries',
  role: UserRole.ENTREPRENEUR,
  avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80'
};

export const KITCHENS: Kitchen[] = [
  {
    id: 'k1',
    title: 'Professional Prep Kitchen in De Pijp',
    description: 'Fully equipped commercial kitchen perfect for catering prep and small scale production. Includes convection ovens and spacious stainless steel worktops.',
    location: 'Amsterdam',
    pricePerHour: 90,
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=1200&q=80',
    ownerName: 'Restaurant Het Zuiden',
    rating: 4.8,
    reviewCount: 24,
    amenities: ['Convection Oven', 'Walk-in Fridge', 'Loading Dock', 'Wifi'],
    certifications: ['HACCP Certified', 'NVWA Compliant'],
    type: 'Commercial'
  },
  {
    id: 'k2',
    title: 'Spacious Bakery Studio',
    description: 'Specialized bakery setup with industrial mixers and proofing cabinets. Ideal for pastry chefs and bread makers.',
    location: 'Rotterdam',
    pricePerHour: 75,
    imageUrl: 'https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?auto=format&fit=crop&w=1200&q=80',
    ownerName: 'Bakkerij Jansen',
    rating: 4.9,
    reviewCount: 41,
    amenities: ['Industrial Mixer', 'Proofing Cabinet', 'Oven Deck'],
    certifications: ['HACCP Certified', 'Organic Certified'],
    type: 'Commercial'
  },
  {
    id: 'k3',
    title: 'Cozy Workshop Kitchen',
    description: 'Open plan kitchen designed for teaching and workshops. Includes island setup and audio-visual equipment.',
    location: 'Utrecht',
    pricePerHour: 65,
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    ownerName: 'Kookstudio Utrecht',
    rating: 4.6,
    reviewCount: 18,
    amenities: ['Teaching Island', 'AV System', 'Dishwasher'],
    certifications: [],
    type: 'Studio'
  },
  {
    id: 'k4',
    title: 'Ghost Kitchen Unit 4',
    description: 'High-efficiency delivery-only kitchen unit. Optimized for Thuisbezorgd and UberEats operations.',
    location: 'The Hague',
    pricePerHour: 55,
    imageUrl: 'https://images.unsplash.com/photo-1588785392665-f6d4a541417d?auto=format&fit=crop&w=1200&q=80',
    ownerName: 'Dark Kitchens NL',
    rating: 4.2,
    reviewCount: 8,
    amenities: ['Fryer', 'Grill', 'Packing Station'],
    certifications: ['HACCP Certified'],
    type: 'Ghost Kitchen'
  }
];

export const UPCOMING_BOOKINGS: Booking[] = [
  {
    id: 'b1',
    kitchenId: 'k1',
    kitchenTitle: 'Professional Prep Kitchen in De Pijp',
    date: '2023-10-24',
    status: 'Confirmed',
    amount: 360
  },
  {
    id: 'b2',
    kitchenId: 'k3',
    kitchenTitle: 'Cozy Workshop Kitchen',
    date: '2023-11-02',
    status: 'Pending',
    amount: 130
  }
];

export const PARTNERS: Partner[] = [
  { name: 'Sligro', logoUrl: 'https://placehold.co/200x80?text=Sligro', description: 'Wholesale discounts for members.' },
  { name: 'Thuisbezorgd.nl', logoUrl: 'https://placehold.co/200x80?text=Thuisbezorgd', description: 'Priority onboarding for delivery.' },
  { name: 'Hotelschool The Hague', logoUrl: 'https://placehold.co/200x80?text=Hotelschool', description: 'Internship & staffing connections.' },
  { name: 'KHN', logoUrl: 'https://placehold.co/200x80?text=KHN', description: 'Royal Dutch Hotel and Catering Association resources.' },
  { name: 'KVK', logoUrl: 'https://placehold.co/200x80?text=KVK', description: 'Chamber of Commerce support.' },
];

export const DASHBOARD_STATS_OWNER = [
  { name: 'Mon', revenue: 400 },
  { name: 'Tue', revenue: 300 },
  { name: 'Wed', revenue: 200 },
  { name: 'Thu', revenue: 278 },
  { name: 'Fri', revenue: 589 },
  { name: 'Sat', revenue: 839 },
  { name: 'Sun', revenue: 680 },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Starting a Ghost Kitchen in Amsterdam',
    excerpt: 'How to navigate local regulations and optimize for delivery services like Thuisbezorgd.nl.',
    author: 'Jeroen Bakker',
    date: 'Oct 12, 2023',
    category: 'How-To Guides',
    imageUrl: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '2',
    title: 'The Rise of Plant-Based Catering in NL',
    excerpt: 'Consumer demand is shifting. Here is how traditional caterers are adapting to the 50% growth in vegan options.',
    author: 'Lisa de Groot',
    date: 'Sep 28, 2023',
    category: 'Industry Trends',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '3',
    title: 'Navigating Dutch Organic Certification',
    excerpt: 'A step-by-step guide to Skal Biocontrole and what it means for your shared kitchen rental.',
    author: 'Karel Visser',
    date: 'Sep 15, 2023',
    category: 'Compliance',
    imageUrl: 'https://images.unsplash.com/photo-1628191139360-4083564d03fd?auto=format&fit=crop&w=600&q=80'
  }
];

export const EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'HACCP for Small Food Businesses',
    date: 'Nov 15, 2023 • 14:00 CET',
    location: 'Amsterdam (In-person)',
    price: '€75',
    type: 'Workshop'
  },
  {
    id: 'e2',
    title: 'Plant-Based Product Development',
    date: 'Nov 20, 2023 • 10:00 CET',
    location: 'Online (Zoom)',
    price: '€50',
    type: 'Workshop'
  },
  {
    id: 'e3',
    title: 'Amsterdam Food Entrepreneur Mixer',
    date: 'Dec 01, 2023 • 18:00 CET',
    location: 'De Hallen, Amsterdam',
    price: 'Free',
    type: 'Networking'
  }
];

export const FAQS: FaqItem[] = [
  {
    category: 'Booking',
    question: 'How do I cancel a booking?',
    answer: 'You can cancel via your dashboard. Full refund if canceled 48+ hours in advance, 50% if 24-48 hours.'
  },
  {
    category: 'Compliance',
    question: 'What compliance certifications do your kitchens have?',
    answer: 'All listed kitchens are verified for basic HACCP compliance. Specific certifications like Organic or Halal are listed on individual kitchen pages.'
  },
  {
    category: 'Host Support',
    question: 'How do I get paid as a host?',
    answer: ' payouts are processed weekly via bank transfer for completed bookings, minus our 15% commission.'
  }
];