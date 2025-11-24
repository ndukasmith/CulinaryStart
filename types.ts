export enum UserRole {
  ENTREPRENEUR = 'ENTREPRENEUR',
  OWNER = 'OWNER'
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  avatar: string;
}

export interface Amenity {
  id: string;
  label: string;
  icon?: string;
}

export interface Kitchen {
  id: string;
  title: string;
  description: string;
  location: string; // e.g., Amsterdam, Rotterdam
  pricePerHour: number;
  imageUrl: string;
  ownerName: string;
  rating: number;
  reviewCount: number;
  amenities: string[];
  certifications: string[]; // HACCP, Organic
  type: string; // Commercial, Home, Ghost Kitchen
}

export interface Booking {
  id: string;
  kitchenId: string;
  kitchenTitle: string;
  date: string;
  status: 'Confirmed' | 'Pending' | 'Completed' | 'Cancelled';
  amount: number;
}

export interface Partner {
  name: string;
  logoUrl: string; // Placeholder
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  price: string;
  type: 'Workshop' | 'Networking' | 'Competition';
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}