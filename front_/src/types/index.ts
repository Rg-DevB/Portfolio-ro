export interface ProfileData {
  id?: number;
  fullName: string;
  title: string;
  description?: string | null;
  location?: string | null;
  email?: string | null;
  phone?: string | null;
  cvUrl?: string | null;
  photo?: string | null;
  socialLinks?: any | null;
}

export interface Skill {
  id?: number;
  name: string;
  level: number;
  type?: string | null;
  icon?: string | null;
  order?: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Technology {
  id: number;
  name: string;
  icon?: string | null;
  type?: string | null;
}

export interface Project {
  id: number;
  name: string;
  title: string;
  slug: string;
  description: string;
  thumbnail?: string | null;
  demoUrl?: string | null;
  githubUrl?: string | null;
  featured: boolean;
  status: string;
  publishedAt?: Date | null;
  date?: Date | null;
  order?: number;
  categories?: Category[];
  technologies?: Technology[];
}

export interface Experience {
  id: number;
  name: string;
  company: string;
  role: string;
  description?: string | null;
  startDate: Date;
  endDate?: Date | null;
  current: boolean;
  location?: string | null;
}

export interface Education {
  id: number;
  school: string;
  degree: string;
  field?: string | null;
  startDate: Date;
  endDate?: Date | null;
  description?: string | null;
}

export interface Social {
  id: number;
  platform: string;
  url: string;
  icon?: string | null;
  order?: number;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  currency: string;
  duration: string;
  description: string;
  features: string[];
  popular: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role?: string;
  position?: string;
  company: string;
  content: string;
  avatar?: string;
  avatar_url?: string;
  rating?: number;
}

export interface TranslationStrings {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
  };
  hero: {
    greeting: string;
    tagline: string;
    contactBtn: string;
    downloadCV: string;
  };
  about: {
    title: string;
    email: string;
    phone: string;
    location: string;
  };
  skills: {
    title: string;
    frontend: string;
    backend: string;
    database: string;
    tools: string;
  };
  projects: {
    title: string;
    subtitle: string;
    all: string;
    webApps: string;
    mobile: string;
    apis: string;
    fullstack: string;
    featured: string;
    demo: string;
    code: string;
  };
  experience: {
    title: string;
    experience: string;
    education: string;
    formations: string;
    certifications: string;
    current: string;
    finished: string;
    achievements: string;
    highlights: string;
    date: string;
    duration: string;
    verify: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    popular: string;
    perProject: string;
    perMonth: string;
    requestQuote: string;
    customTitle: string;
    customText: string;
    discussProject: string;
  };
  contact: {
    title: string;
    subtitle: string;
    info: string;
    email: string;
    phone: string;
    location: string;
    availability: string;
    availabilityText: string;
    sendMessage: string;
    name: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    successMsg: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
  };
  footer: {
    navigation: string;
    social: string;
    madeWith: string;
    and: string;
  };
  chatbot: {
    title: string;
    subtitle: string;
    placeholder: string;
    send: string;
  };
}
