"use client";

import React from 'react';
import { translations } from '../translations';
import { ProfileData } from '../types';
import { MapPin, Mail, Phone, Zap, Layers, Code2, Sparkles } from 'lucide-react';

interface AboutProps {
  profileData: ProfileData | null;
}

const About: React.FC<AboutProps> = ({ profileData }) => {
  const t = translations.about;
  const { full_name, title, description, location, email, phone, avatar_url } = profileData || {};

  const stats = [
    { label: 'Years Experience', value: '3+', icon: <Zap className="w-5 h-5" /> },
    { label: 'Projects Built', value: '20+', icon: <Layers className="w-5 h-5" /> },
    { label: 'Technologies', value: '10+', icon: <Code2 className="w-5 h-5" /> },
    { label: 'Certifications', value: '5+', icon: <Sparkles className="w-5 h-5" /> },
  ];

  return (
    <section id="about" className="py-28 md:py-36 px-6 md:px-12 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Background blobs */}
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <div className="mb-20 text-center animate-fade-in">
          <p className="text-secondary font-mono text-sm tracking-widest uppercase mb-4">Discover</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto" />
        </div>

        {/* Two-column: Description + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6 text-foreground/75 font-sans text-lg leading-relaxed animate-slide-in-left">
            <h3 className="text-3xl font-bold text-foreground mb-4">{full_name}</h3>
            <h4 className="text-xl font-medium text-secondary mb-6">{title}</h4>
            <p className="whitespace-pre-line">{description}</p>
          </div>

          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative group w-full max-w-sm">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2 border border-foreground/10 bg-primary/20 backdrop-blur-sm">
                <img
                  src={avatar_url || "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80"}
                  alt={full_name || "Developer"}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent"></div>
              </div>
              {/* Floating aesthetic background elements */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full opacity-20 blur-2xl animate-float"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-secondary rounded-full opacity-20 blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Stats Bento Grid Bottom */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative p-6 rounded-2xl border border-foreground/5 bg-primary/30 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-[0_8px_30px_rgba(99,102,241,0.12)]"
            >
              {/* Glow accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center justify-center shrink-0 w-12 h-12 bg-secondary/10 text-secondary rounded-xl mb-4 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  {stat.icon}
                </div>
                <p className="text-xl md:text-2xl font-bold text-foreground mb-1 w-full truncate" title={stat.value}>
                  {stat.value}
                </p>
                <p className="text-sm text-foreground/50 font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;