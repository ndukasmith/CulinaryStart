import { Kitchen, Booking, Partner, UserRole, BlogPost, Event, FaqItem, Notification, ComplianceStatus, EarningsStats } from './types';

export const MOCK_USER = {
  id: 'u1',
  name: 'Sanne de Vries',
  role: UserRole.ENTREPRENEUR,
  avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
  businessName: 'Sanne\'s Vegan Treats',
  kvkNumber: '12345678'
};

export const MOCK_HOST_USER = {
  id: 'u2',
  name: 'Marco Jansen',
  role: UserRole.OWNER,
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
  businessName: 'Jansen Catering BV',
  kvkNumber: '87654321'
};

export const KITCHENS: Kitchen[] = [
  {
    id: 'k1',
    title: 'Professional Prep Kitchen in De Pijp',
    description: 'Fully equipped commercial kitchen perfect for catering prep and small scale production. Includes convection ovens, spacious stainless steel worktops, and a walk-in fridge.',
    location: 'Amsterdam',
    pricePerHour: 90,
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=1600&q=80',
    ownerName: 'Restaurant Het Zuiden',
    rating: 4.8,
    reviewCount: 24,
    amenities: ['Convection Oven', 'Walk-in Fridge', 'Loading Dock', 'Wifi'],
    certifications: ['HACCP Certified', 'NVWA Compliant'],
    type: 'Commercial',
    occupancyRate: 85,
    status: 'Active'
  },
  {
    id: 'k2',
    title: 'Spacious Bakery Studio',
    description: 'Specialized bakery setup with industrial mixers, dough sheeters, and proofing cabinets. Ideal for pastry chefs, bread makers, and chocolatiers.',
    location: 'Rotterdam',
    pricePerHour: 75,
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=80',
    ownerName: 'Bakkerij Jansen',
    rating: 4.9,
    reviewCount: 41,
    amenities: ['Industrial Mixer', 'Proofing Cabinet', 'Oven Deck'],
    certifications: ['HACCP Certified', 'Organic Certified'],
    type: 'Commercial',
    occupancyRate: 70,
    status: 'Active'
  },
  {
    id: 'k3',
    title: 'Cozy Workshop Kitchen',
    description: 'Open plan kitchen designed for teaching and workshops. Includes island setup, audio-visual equipment, and seating for 12 students.',
    location: 'Utrecht',
    pricePerHour: 65,
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=1600&q=80',
    ownerName: 'Kookstudio Utrecht',
    rating: 4.6,
    reviewCount: 18,
    amenities: ['Teaching Island', 'AV System', 'Dishwasher'],
    certifications: [],
    type: 'Studio',
    occupancyRate: 45,
    status: 'Active'
  },
  {
    id: 'k4',
    title: 'Ghost Kitchen Unit 4',
    description: 'High-efficiency delivery-only kitchen unit. Optimized for Thuisbezorgd and UberEats operations with dedicated packing stations.',
    location: 'The Hague',
    pricePerHour: 55,
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=1600&q=80',
    ownerName: 'Dark Kitchens NL',
    rating: 4.2,
    reviewCount: 8,
    amenities: ['Fryer', 'Grill', 'Packing Station'],
    certifications: ['HACCP Certified'],
    type: 'Ghost Kitchen',
    occupancyRate: 92,
    status: 'Maintenance'
  }
];

export const RECOMMENDED_KITCHENS: Kitchen[] = [
  {
    id: 'k5',
    title: 'Rotterdam Pastry Lab',
    description: 'Specialized pastry kitchen in Rotterdam center.',
    location: 'Rotterdam',
    pricePerHour: 80,
    imageUrl: 'https://images.unsplash.com/photo-1627485937980-221c88ac04f9?auto=format&fit=crop&w=1600&q=80',
    ownerName: 'Sweet Dreams',
    rating: 4.9,
    reviewCount: 12,
    amenities: ['Oven Deck', 'Marble Tops'],
    certifications: ['HACCP Certified'],
    type: 'Commercial',
    occupancyRate: 60,
    status: 'Active'
  },
   {
    id: 'k6',
    title: 'Amsterdam East Prep',
    description: 'Basic prep kitchen.',
    location: 'Amsterdam',
    pricePerHour: 60,
    imageUrl: 'https://images.unsplash.com/photo-1581552805908-16cb6f743c39?auto=format&fit=crop&w=1600&q=80',
    ownerName: 'East Side Foods',
    rating: 4.5,
    reviewCount: 8,
    amenities: ['Prep Tables', 'Fridge'],
    certifications: ['HACCP Certified'],
    type: 'Commercial',
    occupancyRate: 50,
    status: 'Active'
  }
];


export const UPCOMING_BOOKINGS: Booking[] = [
  {
    id: 'b1',
    kitchenId: 'k1',
    kitchenTitle: 'Professional Prep Kitchen in De Pijp',
    date: '2025-11-15',
    time: '08:00',
    duration: 4,
    status: 'Confirmed',
    amount: 360,
    entrepreneurName: 'Sanne de Vries',
    entrepreneurBusiness: 'Sanne\'s Vegan Treats'
  },
  {
    id: 'b2',
    kitchenId: 'k3',
    kitchenTitle: 'Cozy Workshop Kitchen',
    date: '2025-11-20',
    time: '14:00',
    duration: 3,
    status: 'Pending',
    amount: 195,
    entrepreneurName: 'Tom Bakker',
    entrepreneurBusiness: 'Tom\'s Bread'
  },
  {
    id: 'b3',
    kitchenId: 'k2',
    kitchenTitle: 'Spacious Bakery Studio',
    date: '2025-12-01',
    time: '06:00',
    duration: 6,
    status: 'Confirmed',
    amount: 450,
    entrepreneurName: 'Lisa Klein',
    entrepreneurBusiness: 'Patisserie Klein'
  }
];

export const PARTNERS: Partner[] = [
  { name: 'Sligro', logoUrl: 'https://placehold.co/200x80/e5e5e5/333333?text=Sligro', description: 'Wholesale discounts for members.' },
  { name: 'Thuisbezorgd.nl', logoUrl: 'https://placehold.co/200x80/ff8000/ffffff?text=Thuisbezorgd', description: 'Priority onboarding for delivery.' },
  { name: 'Hotelschool The Hague', logoUrl: 'https://placehold.co/200x80/003366/ffffff?text=Hotelschool', description: 'Internship & staffing connections.' },
  { name: 'KHN', logoUrl: 'https://placehold.co/200x80/00aeef/ffffff?text=KHN', description: 'Royal Dutch Hotel and Catering Association resources.' },
  { name: 'KVK', logoUrl: 'https://placehold.co/200x80/000000/ffffff?text=KVK', description: 'Chamber of Commerce support.' },
];

export const DASHBOARD_STATS_OWNER = [
  { name: 'May', revenue: 1400 },
  { name: 'Jun', revenue: 1600 },
  { name: 'Jul', revenue: 1200 },
  { name: 'Aug', revenue: 1800 },
  { name: 'Sep', revenue: 1750 },
  { name: 'Oct', revenue: 1800 },
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
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80'
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
    answer: 'Payouts are processed weekly via bank transfer for completed bookings, minus our 15% commission.'
  }
];

export const NOTIFICATIONS: Notification[] = [
  {
    id: 'n1',
    title: 'Booking Confirmed',
    message: 'Your booking for Professional Prep Kitchen is confirmed for Oct 24.',
    date: '2 hours ago',
    read: false,
    type: 'booking'
  },
  {
    id: 'n2',
    title: 'New Workshop Available',
    message: 'Register for "HACCP for Small Businesses" before it fills up!',
    date: '1 day ago',
    read: true,
    type: 'system'
  },
  {
    id: 'n3',
    title: 'Compliance Alert',
    message: 'Your HACCP certificate is expiring in 30 days. Please renew.',
    date: '3 days ago',
    read: false,
    type: 'compliance'
  }
];

export const COMPLIANCE_STATUS: ComplianceStatus = {
  haccpValidUntil: '2026-06-15',
  nvwaRegistered: true,
  hygieneCode: 'Catering Code - Certified'
};
