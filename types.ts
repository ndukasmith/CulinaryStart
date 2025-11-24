export enum UserRole {
  ENTREPRENEUR = 'ENTREPRENEUR',
  OWNER = 'OWNER'
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  avatar: string;
  businessName?: string;
  kvkNumber?: string;
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
  occupancyRate?: number;
  status?: 'Active' | 'Inactive' | 'Maintenance';
}

export interface Booking {
  id: string;
  kitchenId: string;
  kitchenTitle: string;
  date: string; // ISO Date
  time: string;
  duration: number; // hours
  status: 'Confirmed' | 'Pending' | 'Completed' | 'Cancelled';
  amount: number;
  entrepreneurName?: string;
  entrepreneurBusiness?: string;
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

export interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
  type: 'booking' | 'system' | 'compliance' | 'payment';
}

export interface ComplianceStatus {
  haccpValidUntil: string;
  nvwaRegistered: boolean;
  hygieneCode: string;
}

export interface EarningsStats {
  month: string;
  amount: number;
}
