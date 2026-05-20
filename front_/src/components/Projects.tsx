"use client";
import { translations } from '../translations';

import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Project } from '../types';

interface ProjectsProps {
  projectsData: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projectsData = [] }) => {
  const t = translations.projects;
const getCategoryName = (category: any) => {
    // Check if category is an object (from pivot/relation) or string
    const categoryName = typeof category === 'object' ? category.name : category;

    // Map backend categories to translations
    if (categoryName === 'Web' || categoryName === 'Applications Web') return t.webApps;
    if (categoryName === 'Mobile' || categoryName === 'Développement Mobile') return t.mobile;
    if (categoryName === 'API' || categoryName === 'APIs Backend') return t.apis;
    if (categoryName === 'FullStack' || categoryName === 'Full-Stack') return t.fullstack;
    return categoryName || 'Other';
  };

  // Extract unique categories from projects (handling many-to-many relationship)
  const allCategories = projectsData.flatMap(p => {
    return Array.isArray(p.categories) ? p.categories.map(c => getCategoryName(c)) : [getCategoryName(p.category)];
  }).filter(Boolean); // Filter out null/undefined

  const categories = [t.all, ...Array.from(new Set(allCategories))];
  const [selectedCategory, setSelectedCategory] = useState(t.all);

  const filteredProjects =
    selectedCategory === t.all
      ? projectsData
      : projectsData.filter((p) => {
        const pCats = Array.isArray(p.categories)
          ? p.categories.map(c => getCategoryName(c))
          : [getCategoryName(p.category)];
        return pCats.includes(selectedCategory);
      });

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center animate-fade-in relative z-10">
          <p className="text-secondary font-mono text-sm tracking-widest uppercase mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Projects <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Background</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto" />
          <p className="text-foreground/50 max-w-2xl mx-auto mt-6 font-sans text-sm md:text-base leading-relaxed">
            {t.subtitle || 'Discover my work organized by category'}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Filter className="h-6 w-6 text-secondary self-center" />
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={`${selectedCategory === category
                ? 'bg-secondary text-white hover:bg-secondary/90 shadow-md shadow-secondary/20'
                : 'border-secondary/50 text-secondary hover:bg-secondary/10 hover:text-secondary'
                } rounded-full transition-all duration-300`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const getImageUrl = (proj: any) => {
              const imgPath = proj.image_url || proj.thumbnail_url || proj.thumbnail || proj.image;
              if (!imgPath) return "https://via.placeholder.com/400x300";
              if (imgPath.startsWith('http') || imgPath.startsWith('data:')) return imgPath;
              
              const baseUrl = (process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api/v1").replace(/\/api\/v1\/?$/, '');
              if (imgPath.startsWith('storage/')) return `${baseUrl}/${imgPath}`;
              if (imgPath.startsWith('/')) return `${baseUrl}${imgPath}`;
              return `${baseUrl}/storage/${imgPath}`;
            };

            return (
            <Card
              key={project.id}
              className="card-3d group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-secondary dark:hover:border-secondary animate-slide-in-left bg-primary/20 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={getImageUrl(project)}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {project.featured && (
                  <Badge className="absolute top-4 right-4 bg-blue-900 dark:bg-blue-600 text-white">
                    {t.featured}
                  </Badge>
                )}
              </div>

              <CardHeader>
                <div className="mb-2 flex flex-wrap gap-1">
                  {Array.isArray(project.categories) ? project.categories.map((cat, i) => (
                    <Badge key={cat.id || i} variant="outline" className="text-blue-900 dark:text-blue-400 border-blue-900 dark:border-blue-400">
                      {getCategoryName(cat)}
                    </Badge>
                  )) : (
                    <Badge variant="outline" className="text-blue-900 dark:text-blue-400 border-blue-900 dark:border-blue-400">
                      {getCategoryName(project.category)}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400 line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {Array.isArray(project.technologies) ? project.technologies.map((tech, i) => (
                    <Badge
                      key={typeof tech === 'object' ? tech.id || i : tech}
                      variant="secondary"
                      className="bg-slate-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300"
                    >
                      {typeof tech === 'object' ? tech.name : tech}
                    </Badge>
                  )) : typeof project.technologies === 'string' && project.technologies.split(',').map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-slate-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300"
                    >
                      {tech.trim()}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.demo_url && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-secondary/50 text-secondary hover:bg-secondary hover:text-white transition-colors duration-300 rounded-full"
                      onClick={() => window.open(project.demo_url, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t.demo}
                    </Button>
                  )}
                  {project.github_url && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-secondary/50 text-secondary hover:bg-secondary hover:text-white transition-colors duration-300 rounded-full"
                      onClick={() => window.open(project.github_url, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      {t.code}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;