"use client";
import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Social, ProfileData } from '../types';
import { translations } from '../translations';

interface FooterProps {
  socialsData: Social[];
  profileData: ProfileData | null;
}

const Footer: React.FC<FooterProps> = ({ socialsData = [], profileData }) => {
  const currentYear = new Date().getFullYear();
  const t = translations;
  
  const getSocialUrl = (platform: string) => {
    const social = socialsData.find(s => s.platform.toLowerCase() === platform.toLowerCase());
    return social ? social.url : '#';
  };

  const initials = profileData?.full_name 
    ? profileData.full_name.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase() 
    : 'JD';

  return (
    <footer className="relative bg-primary/5 border-t border-foreground/5 py-12 mt-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-foreground">
          <a href="#" className="text-3xl font-bold tracking-tighter mb-2">
            {initials}<span className="text-secondary">.</span>
          </a>
          <p className="text-foreground/60 text-sm">
            {t.footer?.slogan || "Building digital experiences"}
          </p>
        </div>

        <div className="flex items-center space-x-5">
          {[
            { Icon: Github, href: getSocialUrl('github'), label: 'GitHub' },
            { Icon: Linkedin, href: getSocialUrl('linkedin'), label: 'LinkedIn' },
            { Icon: Twitter, href: getSocialUrl('twitter'), label: 'Twitter' },
            { Icon: Mail, href: `mailto:${profileData?.email || 'hello@example.com'}`, label: 'Email' },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="p-3 rounded-full bg-primary/20 border border-foreground/5 text-foreground/80 hover:text-foreground hover:border-secondary/50 hover:bg-secondary/10 hover:shadow-[0_0_15px_var(--color-secondary)] transition-all duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-foreground/5 flex flex-col md:flex-row items-center justify-between text-sm text-foreground/50">
        <p>&copy; {currentYear} {profileData?.full_name || 'Portfolio'}. {t.footer?.rights || 'All rights reserved.'}</p>
        <p className="mt-2 md:mt-0 flex items-center space-x-1">
          <span>{t.footer?.builtWith || 'Built with'}</span>
          <span className="text-secondary font-medium">Next.js & Tailwind</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;