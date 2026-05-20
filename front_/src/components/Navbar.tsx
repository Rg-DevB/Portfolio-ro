"use client";

import { useState, useEffect, useMemo } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { usePortfolio } from '../context/PortfolioContext';
import { translations as t } from '../translations';

const NAV_LINKS = [
  { label: t.nav.home, href: '#home' },
  { label: t.nav.about, href: '#about' },
  { label: t.nav.skills, href: '#skills' },
  { label: t.nav.projects, href: '#projects' },
  { label: t.nav.experience, href: '#experience' },
  { label: t.nav.contact, href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const [mounted, setMounted] = useState(false);
  const { profile } = usePortfolio();

  const initials = useMemo(() => {
    if (!profile?.full_name) return "RB";
    return profile.full_name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }, [profile?.full_name]);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(l => l.href.replace('#', ''));
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-background/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.15)] border-b border-foreground/5'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="text-2xl font-bold tracking-tighter hover:text-secondary transition-colors shrink-0"
        >
          {initials}<span className="text-secondary">.</span>
        </a>

        {/* Center Nav Links — hidden on very small screens, shown on md+ */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? 'text-secondary bg-secondary/10'
                    : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-secondary rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          {/* Mobile: scrollable nav */}
          <div className="flex md:hidden items-center gap-1 overflow-x-auto max-w-[55vw] mr-2" style={{ scrollbarWidth: 'none' }}>
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-all ${
                    isActive
                      ? 'text-secondary bg-secondary/10'
                      : 'text-foreground/60 hover:text-foreground'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="p-2.5 rounded-full bg-foreground/5 border border-foreground/10 text-foreground/80 hover:text-secondary hover:border-secondary/30 hover:bg-secondary/10 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}

          {/* CTA */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="hidden sm:flex items-center px-5 py-2.5 bg-secondary text-white text-sm font-semibold rounded-full shadow-lg shadow-secondary/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}