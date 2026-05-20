"use client";

import React from 'react';
import { translations } from '../translations';
import { Skill } from '../types';
import { Monitor, Server, GitBranch, Cloud, Database, Layout, Code2, Boxes, Container, Globe, Terminal, Workflow } from 'lucide-react';

interface SkillsProps {
  skillsData: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skillsData = [] }) => {
  const t = translations.skills;

  const getCategoryName = (category: string) => {
    if (category === 'Frontend') return t.frontend || 'Frontend';
    if (category === 'Backend') return t.backend || 'Backend';
    if (category === 'Database' || category === 'Base de données') return t.database || 'Database';
    if (category === 'Tools' || category === 'Outils & DevOps') return t.tools || 'Tools';
    return category;
  };

  const getCategoryIcon = (category: string) => {
    const lowerCategory = category.toLowerCase();
    if (lowerCategory.includes('front')) return <Monitor className="w-5 h-5" />;
    if (lowerCategory.includes('back')) return <Server className="w-5 h-5" />;
    if (lowerCategory.includes('data')) return <Database className="w-5 h-5" />;
    if (lowerCategory.includes('tool') || lowerCategory.includes('devops') || lowerCategory.includes('outil')) return <GitBranch className="w-5 h-5" />;
    return <Code2 className="w-5 h-5" />;
  };

  const getSkillIcon = (skillName: string) => {
    const name = skillName.toLowerCase();
    if (name.includes('react') || name.includes('next')) return <Globe className="w-4 h-4" />;
    if (name.includes('node') || name.includes('linux')) return <Terminal className="w-4 h-4" />;
    if (name.includes('css') || name.includes('tailwind')) return <Layout className="w-4 h-4" />;
    if (name.includes('docker') || name.includes('container')) return <Container className="w-4 h-4" />;
    if (name.includes('aws') || name.includes('cloud')) return <Cloud className="w-4 h-4" />;
    if (name.includes('sql') || name.includes('mongo') || name.includes('db')) return <Database className="w-4 h-4" />;
    if (name.includes('git')) return <GitBranch className="w-4 h-4" />;
    if (name.includes('motion') || name.includes('gsap') || name.includes('flow')) return <Workflow className="w-4 h-4" />;
    return <Code2 className="w-4 h-4" />;
  };

  // Group skills by type
  const skillsByCategory = skillsData.reduce((acc: Record<string, { category: string; items: Skill[] }>, skill) => {
    const type = skill.type || 'Other';
    if (!acc[type]) {
      acc[type] = { category: type, items: [] };
    }
    acc[type].items.push(skill);
    return acc;
  }, {});

  const groupedSkills = Object.values(skillsByCategory);

  return (
    <section id="skills" className="py-28 md:py-36 px-6 md:px-12 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Background glow similar to Portfolio-B */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

        <div className="mb-20 text-center animate-fade-in">
          <p className="text-secondary font-mono text-sm tracking-widest uppercase mb-4">What I Use</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto" />
          <p className="text-foreground/50 max-w-2xl mx-auto mt-6 font-sans text-sm md:text-base leading-relaxed">
            {t.desc || 'Here are the technologies and tools I work with daily to build modern applications.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {groupedSkills.map((skillCategory, catIndex) => (
            <div 
              key={skillCategory.category} 
              className="animate-slide-in-right group relative p-8 rounded-3xl border border-foreground/5 bg-primary/20 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-secondary/20 hover:shadow-[0_20px_40px_rgba(99,102,241,0.08)]"
              style={{ animationDelay: `${catIndex * 0.15}s` } as React.CSSProperties}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Glow blob */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-all duration-700" />

              {/* Category header */}
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary border border-secondary/10">
                  {getCategoryIcon(skillCategory.category)}
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {getCategoryName(skillCategory.category)}
                </h3>
              </div>

              {/* Skill chips */}
              <div className="grid grid-cols-2 gap-3 relative z-10">
                {skillCategory.items.map((skill) => (
                  <div
                    key={skill.id || skill.name}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-primary/40 border border-foreground/5 hover:border-secondary/20 hover:bg-secondary/5 transition-all duration-300 group/skill cursor-default"
                  >
                    <span className="text-foreground/40 group-hover/skill:text-secondary transition-colors duration-300">
                      {getSkillIcon(skill.name)}
                    </span>
                    <span className="text-sm font-medium text-foreground/70 group-hover/skill:text-foreground transition-colors duration-300 truncate" title={skill.name}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;