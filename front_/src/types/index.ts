export interface ProfileData {
  id?: number;
  full_name: string;
  title: string;
  description: string;
  location: string;
  email: string;
  phone: string;
  cv_url?: string;
  avatar_url?: string;
  bio?: string;
}

export interface Skill {
  id?: number;
  name: string;
  level: number;
  type: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: (string | { id?: number; name: string })[] | string;
  image?: string;
  thumbnail?: string;
  demo_url?: string;
  github_url?: string;
  featured?: boolean | number;
  category?: string | { id?: number; name: string };
  categories?: { id?: number; name: string }[];
}

export interface Experience {
  id: number;
  company: string;
  position?: string;
  role?: string;
  location: string;
  start_date: string;
  end_date: string;
  current: boolean;
  description: string;
  achievements?: string[];
}

export interface Education {
  id: number;
  institution?: string;
  school?: string;
  degree: string;
  field: string;
  location?: string;
  start_date: string;
  end_date: string;
  description: string;
  achievements?: string[];
}

export interface Social {
  id: number;
  platform: string;
  url: string;
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
