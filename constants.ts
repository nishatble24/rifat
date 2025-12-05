
import { Layers, Zap, PenTool, Layout, Monitor, Smartphone, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';
import { NavItem, Service, Project, Testimonial, SocialLink } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/work' },
  { label: 'Pricing', href: '/pricing' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'UI/UX Design',
    description: 'We craft intuitive and visually stunning interfaces that drive user engagement and satisfaction.',
    icon: Layout,
  },
  {
    id: '2',
    title: 'Product Strategy',
    description: 'Data-driven roadmaps to turn your visionary ideas into market-ready digital products.',
    icon: Layers,
  },
  {
    id: '3',
    title: 'Design Systems',
    description: 'Scalable and consistent component libraries that unify your brand across all platforms.',
    icon: PenTool,
  },
  {
    id: '4',
    title: 'Web Development',
    description: 'High-performance frontend development using the latest React and Next.js technologies.',
    icon: Monitor,
  },
  {
    id: '5',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile experiences designed for touch and engagement.',
    icon: Smartphone,
  },
  {
    id: '6',
    title: 'Brand Identity',
    description: 'Forging memorable brand stories through logo design, typography, and visual assets.',
    icon: Zap,
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'FinTech Dashboard',
    category: 'SaaS Platform',
    image: 'https://ik.imagekit.io/flowrax/custom-image%20(3).webp',
    tags: ['Dashboard', 'Finance', 'Dark Mode'],
  },
  {
    id: '2',
    title: 'EcoTravel App',
    category: 'Mobile Application',
    image: 'https://ik.imagekit.io/flowrax/custom-image%20(1).webp',
    tags: ['Mobile', 'Travel', 'UX Research'],
  },
  {
    id: '3',
    title: 'NeoBank Landing',
    category: 'Web Design',
    image: 'https://ik.imagekit.io/flowrax/custom-image.webp',
    tags: ['Web', 'Marketing', 'Animation'],
  },
  {
    id: '4',
    title: 'Health AI Interface',
    category: 'Medical Tech',
    image: 'https://ik.imagekit.io/flowrax/custom-image%20(2).webp',
    tags: ['AI', 'Healthcare', 'Clean'],
  },
  {
    id: '5',
    title: 'Quantum Web Platform',
    category: 'Web Design',
    image: 'https://ik.imagekit.io/flowrax/service%20section%20row/webdesign%20dd.webp?updatedAt=1764837603212',
    tags: ['Web', 'Animation', '3D'],
  },
  {
    id: '6',
    title: 'Lifestyle App Design',
    category: 'Mobile Apps',
    image: 'https://ik.imagekit.io/flowrax/service%20section%20row/appdesign%20dd.webp?updatedAt=1764837602507',
    tags: ['Mobile', 'iOS', 'Interaction'],
  },
  {
    id: '7',
    title: 'Enterprise Design System',
    category: 'UI/UX',
    image: 'https://ik.imagekit.io/flowrax/service%20section%20row/uiuxdesign%20dd.webp?updatedAt=1764837602345',
    tags: ['Design System', 'Product', 'Scalable'],
  },
];

export const SOCIALS: SocialLink[] = [
  { platform: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61581407781074', icon: Facebook },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/flowrax/', icon: Linkedin },
  { platform: 'Instagram', url: 'https://www.instagram.com/flowrax.agency/', icon: Instagram },
  { platform: 'Twitter', url: '#', icon: Twitter },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CTO',
    company: 'TechFlow',
    content: "The team at Flowrax completely transformed our user experience. Retention is up 40% since the redesign.",
    avatar: 'https://picsum.photos/100/100?random=10'
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Founder',
    company: 'StartUp Inc.',
    content: "Incredible attention to detail. They didn't just design screens; they solved complex business problems.",
    avatar: 'https://picsum.photos/100/100?random=11'
  }
];
