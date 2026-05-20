"use client";
import { translations } from '../translations';

import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Folder, Download, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { ProfileData, Social } from '../types';

interface HeroProps {
  profileData: ProfileData | null;
  socialsData: Social[];
}

const Hero: React.FC<HeroProps> = ({ profileData, socialsData = [] }) => {
  const t = translations.hero;
const [displayText, setDisplayText] = useState('');

  const fullText = profileData?.title || '';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [fullText]);

  const { full_name, description, cv_url } = profileData || {};

  const getSocialUrl = (platform: string) => {
    const social = socialsData.find(s => s.platform.toLowerCase() === platform.toLowerCase());
    return social ? social.url : '#';
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-background overflow-hidden"
    >
      {/* Floating 3D geometric shapes */}
      <div className="floating-shape floating-shape-1" style={{ top: '10%', right: '10%' }}></div>
      <div className="floating-shape floating-shape-2" style={{ bottom: '20%', left: '5%' }}></div>
      <div className="floating-shape floating-shape-3" style={{ top: '60%', right: '15%' }}></div>

      {/* Animated particles */}
      <div className="particle" style={{ left: '10%', animationDelay: '0s' }}></div>
      <div className="particle" style={{ left: '20%', animationDelay: '2s' }}></div>
      <div className="particle" style={{ left: '30%', animationDelay: '4s' }}></div>
      <div className="particle" style={{ left: '40%', animationDelay: '1s' }}></div>
      <div className="particle" style={{ left: '50%', animationDelay: '3s' }}></div>
      <div className="particle" style={{ left: '60%', animationDelay: '5s' }}></div>
      <div className="particle" style={{ left: '70%', animationDelay: '2.5s' }}></div>
      <div className="particle" style={{ left: '80%', animationDelay: '4.5s' }}></div>
      <div className="particle" style={{ left: '90%', animationDelay: '1.5s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-500 text-sm font-medium backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all hover:bg-emerald-500/20 hover:border-emerald-500/30">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Available for opportunities
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            {t.greeting}{' '}
            <span className="text-blue-900 dark:text-blue-400">
              {full_name}
            </span>
          </h1>

          <div className="h-16 sm:h-20 mb-6">
            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 font-medium">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            {} Passionate about creating modern and high-performance web applications
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] transition-all duration-300 px-8 py-6 text-lg min-w-[220px] rounded-full"
              onClick={() => scrollToSection('#projects')}
            >
              <Folder className="mr-2 h-5 w-5" />
              View projects
            </Button>
            {cv_url && (
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-white dark:border-secondary dark:text-secondary dark:hover:bg-secondary dark:hover:text-white transition-all duration-300 px-8 py-6 text-lg min-w-[220px] rounded-full"
                onClick={() => window.open(cv_url, '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                {t.downloadCV}
              </Button>
            )}
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href={getSocialUrl('github')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-900 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
            >
              <Github className="h-8 w-8 animate-pulse-glow" />
            </a>
            <a
              href={getSocialUrl('linkedin')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-900 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
            >
              <Linkedin className="h-8 w-8 animate-pulse-glow" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-blue-900 dark:hover:text-blue-400 transition-colors animate-bounce"
      >
        <ChevronDown className="h-10 w-10" />
      </button>
    </section>
  );
};

export default Hero;