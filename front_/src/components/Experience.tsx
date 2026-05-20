"use client";
import { translations } from '../translations';

import React from 'react';
import { Briefcase, GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Experience as ExperienceType, Education } from '../types';

interface ExperienceProps {
  experienceData: ExperienceType[];
  educationData: Education[];
}

const formatDescription = (text: string, externalAchievements?: string[]) => {
  if (!text) return { description: '', achievements: externalAchievements || [] };
  
  const lines = text.split('\n');
  const descriptionLines: string[] = [];
  const parsedAchievements: string[] = [];
  
  let inList = false;
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('-') || trimmed.startsWith('•')) {
      parsedAchievements.push(trimmed.substring(1).trim());
      inList = true;
    } else if (trimmed.toLowerCase().includes('réalisations') || trimmed.toLowerCase().includes('achievements')) {
      // Optional: ignore lines that are just "Réalisations clés :" if they precede a list
      inList = true;
    } else {
      if (!inList) {
        descriptionLines.push(trimmed);
      }
    }
  }

  const finalAchievements = externalAchievements && externalAchievements.length > 0 
    ? externalAchievements 
    : parsedAchievements;

  return {
    description: descriptionLines.join('\n'),
    achievements: finalAchievements
  };
};

const Experience: React.FC<ExperienceProps> = ({ experienceData = [], educationData = [] }) => {
  const t = translations.experience;
return (
    <section id="experience" className="py-20 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center animate-fade-in">
          <p className="text-secondary font-mono text-sm tracking-widest uppercase mb-4">Career</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto" />
          <p className="text-foreground/50 max-w-2xl mx-auto mt-6 font-sans text-sm md:text-base leading-relaxed">
            A brief history of my work experience, education, and certifications.
          </p>
        </div>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="flex w-full overflow-x-auto experience-tab-list mb-12 justify-center hide-scrollbar">
            <TabsTrigger value="experience" className="experience-tab-trigger whitespace-nowrap">
              <Briefcase className="mr-2 h-4 w-4" />
              {t.experience}
            </TabsTrigger>
            <TabsTrigger value="education" className="experience-tab-trigger whitespace-nowrap">
              <GraduationCap className="mr-2 h-4 w-4" />
              {t.education}
            </TabsTrigger>
            <TabsTrigger value="formations" className="experience-tab-trigger whitespace-nowrap">
              <BookOpen className="mr-2 h-4 w-4" />
              {t.formations}
            </TabsTrigger>
            <TabsTrigger value="certifications" className="experience-tab-trigger whitespace-nowrap">
              <Award className="mr-2 h-4 w-4" />
              {t.certifications}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience">
            <div className="space-y-6">
              {experienceData.map((exp, index) => {
                const { description, achievements } = formatDescription(exp.description, exp.achievements);
                
                return (
                  <Card key={exp.id || index} className="experience-card hover:shadow-2xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div>
                          <CardTitle className="text-2xl font-bold text-white mb-2">
                          {exp.role || exp.position}
                        </CardTitle>
                          <p className="text-lg text-blue-400 font-semibold mb-1">
                            {exp.company}
                          </p>
                          <p className="text-sm text-gray-400">{exp.location}</p>
                        </div>
                        <div className="flex flex-col items-start sm:items-end gap-3">
                          <Badge className={`${exp.current ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-gray-600 hover:bg-gray-700'} text-white border-0 px-3 py-1 font-medium`}>
                            {exp.current ? t.current : t.finished}
                          </Badge>
                          <div className="flex items-center text-sm text-gray-400 mt-1">
                            <Calendar className="mr-2 h-4 w-4" />
                            {new Date(exp.start_date).toLocaleDateString()} - {exp.current ? t.current : new Date(exp.end_date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 leading-relaxed mb-4 whitespace-pre-line">{description}</p>
                      {achievements && achievements.length > 0 && (
                        <div className="mt-4">
                          <h4 className="font-semibold text-white mb-2">Réalisations clés :</h4>
                          <ul className="list-disc list-inside text-gray-300 space-y-2">
                            {achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="education">
            <div className="space-y-6">
              {educationData.map((edu, index) => {
                const { description, achievements } = formatDescription(edu.description, edu.achievements);
                
                return (
                  <Card key={edu.id || index} className="experience-card hover:shadow-2xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div>
                          <CardTitle className="text-2xl font-bold text-white mb-2">
                            {edu.degree}
                          </CardTitle>
                          <p className="text-lg text-blue-400 font-semibold mb-1">
                          {edu.school || edu.institution}
                        </p>
                          <p className="text-sm text-gray-400">{edu.field}</p>
                        </div>
                        <div className="flex items-center text-sm text-gray-400 mt-1">
                          <Calendar className="mr-2 h-4 w-4" />
                          {new Date(edu.start_date).toLocaleDateString()} - {edu.end_date ? new Date(edu.end_date).toLocaleDateString() : t.current}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 leading-relaxed mb-4 whitespace-pre-line">{description}</p>
                      {achievements && achievements.length > 0 && (
                        <div className="mt-4">
                          <h4 className="font-semibold text-white mb-2">Réalisations clés :</h4>
                          <ul className="list-disc list-inside text-gray-300 space-y-2">
                            {achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="formations">
            <div className="text-center text-gray-500 py-10">Section en construction (implémentation via API à venir)</div>
          </TabsContent>

          <TabsContent value="certifications">
            <div className="text-center text-gray-500 py-10">Section en construction (implémentation via API à venir)</div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;