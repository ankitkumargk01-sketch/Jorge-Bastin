import { Service, Doctor, Testimonial } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'General Dentistry',
    description: 'Routine care including dental checkups, fillings, cleaning, polishing, and preventive treatments to maintain a healthy smile.',
    icon: 'tooth',
    imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Restorative Treatments',
    description: 'Expert solutions for damaged teeth including root canal treatments, crowns, bridges, and dentures to restore full function.',
    icon: 'activity',
    imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Cosmetic Dentistry',
    description: 'Enhance your appearance with teeth whitening, smile improvements, and aesthetic corrections tailored to you.',
    icon: 'sparkle',
    imageUrl: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'Diagnostics',
    description: 'Precise dental examinations and radiographic evaluations to ensure accurate diagnosis and effective treatment plans.',
    icon: 'scan',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
  },
];

export const DOCTORS: Doctor[] = [
  {
    id: 'd1',
    name: 'Dr. Rowena',
    role: 'Lead Dentist',
    bio: 'Dr. Rowena is dedicated to delivering ethical, high-quality dental care. She believes in clear communication, accurate diagnosis, and gentle treatments that make patients feel comfortable and informed at every step.',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600',
    credentials: [
      'Bachelor of Dental Surgery (BDS) - Goa Dental College',
      'Advanced Certificate in Aesthetic Dentistry',
      'Fellowship in Modern Endodontics',
      'Member of Indian Dental Association (IDA)'
    ]
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    text: 'Dr. Rowena is incredibly gentle and professional. I used to be afraid of the dentist, but her team made me feel completely at ease. Highly recommended!',
    rating: 5,
    date: 'Oct 2023',
  },
  {
    id: '2',
    name: 'Michael Chen',
    text: 'The clinic is modern and spotless. I went in for a root canal and was surprised by how painless the procedure was. Great service!',
    rating: 5,
    date: 'Sep 2023',
  },
  {
    id: '3',
    name: 'Emily Rodrigues',
    text: 'Fantastic experience for my kids. Dr. Rowena has a way with children that makes dental visits fun instead of scary.',
    rating: 5,
    date: 'Aug 2023',
  },
];

export const WHY_CHOOSE_US = [
  'Experienced dental care',
  'Clean & hygienic clinic',
  'Modern dental techniques',
  'Friendly and supportive team',
  'Personalized treatment plans',
  'Comfortable environment',
];