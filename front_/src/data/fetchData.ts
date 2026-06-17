import { prisma } from '@/lib/prisma';

// Profile data fetching
export async function getProfile() {
  try {
    const profile = await prisma.profile.findFirst({
      orderBy: { createdAt: 'desc' }
    });
    
    // Transform to match expected interface
    if (profile) {
      return {
        id: profile.id,
        fullName: profile.fullName,
        title: profile.title,
        description: profile.description,
        location: profile.location,
        email: profile.email,
        phone: profile.phone,
        cvUrl: profile.cvUrl,
        photo: profile.photo,
        socialLinks: profile.socialLinks
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}

// Skills data fetching
export async function getSkills() {
  try {
    const skills = await prisma.skill.findMany({
      orderBy: [{ order: 'asc' }, { name: 'asc' }]
    });
    return skills.map(skill => ({
      id: skill.id,
      name: skill.name,
      level: skill.level,
      type: skill.type,
      icon: skill.icon,
      order: skill.order
    }));
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
}

// Projects data fetching with categories and technologies
export async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      include: {
        categories: true,
        technologies: true
      },
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }]
    });
    
    return projects.map(project => ({
      id: project.id,
      name: project.name,
      title: project.title,
      slug: project.slug,
      description: project.description,
      thumbnail: project.thumbnail,
      demoUrl: project.demoUrl,
      githubUrl: project.githubUrl,
      featured: project.featured,
      status: project.status,
      publishedAt: project.publishedAt,
      date: project.date,
      order: project.order,
      categories: project.categories,
      technologies: project.technologies
    }));
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

// Get featured projects only
export async function getFeaturedProjects() {
  try {
    const projects = await prisma.project.findMany({
      where: { featured: true },
      include: {
        categories: true,
        technologies: true
      },
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }]
    });
    
    return projects.map(project => ({
      id: project.id,
      name: project.name,
      title: project.title,
      slug: project.slug,
      description: project.description,
      thumbnail: project.thumbnail,
      demoUrl: project.demoUrl,
      githubUrl: project.githubUrl,
      featured: project.featured,
      status: project.status,
      publishedAt: project.publishedAt,
      date: project.date,
      order: project.order,
      categories: project.categories,
      technologies: project.technologies
    }));
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    return [];
  }
}

// Experiences data fetching
export async function getExperiences() {
  try {
    const experiences = await prisma.experience.findMany({
      orderBy: [{ startDate: 'desc' }, { current: 'desc' }]
    });
    
    return experiences.map(exp => ({
      id: exp.id,
      name: exp.name,
      company: exp.company,
      role: exp.role,
      description: exp.description,
      startDate: exp.startDate,
      endDate: exp.endDate,
      current: exp.current,
      location: exp.location
    }));
  } catch (error) {
    console.error('Error fetching experiences:', error);
    return [];
  }
}

// Education data fetching
export async function getEducation() {
  try {
    const education = await prisma.education.findMany({
      orderBy: [{ startDate: 'desc' }]
    });
    
    return education.map(edu => ({
      id: edu.id,
      school: edu.school,
      degree: edu.degree,
      field: edu.field,
      startDate: edu.startDate,
      endDate: edu.endDate,
      description: edu.description
    }));
  } catch (error) {
    console.error('Error fetching education:', error);
    return [];
  }
}

// Socials data fetching
export async function getSocials() {
  try {
    const socials = await prisma.social.findMany({
      orderBy: [{ order: 'asc' }, { platform: 'asc' }]
    });
    
    return socials.map(social => ({
      id: social.id,
      platform: social.platform,
      url: social.url,
      icon: social.icon,
      order: social.order
    }));
  } catch (error) {
    console.error('Error fetching socials:', error);
    return [];
  }
}

// Categories data fetching
export async function getCategories() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: [{ name: 'asc' }]
    });
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Technologies data fetching
export async function getTechnologies() {
  try {
    const technologies = await prisma.technology.findMany({
      orderBy: [{ name: 'asc' }]
    });
    return technologies;
  } catch (error) {
    console.error('Error fetching technologies:', error);
    return [];
  }
}

// Settings data fetching
export async function getSettings() {
  try {
    const settings = await prisma.setting.findMany();
    return settings.reduce((acc, setting) => {
      acc[setting.key] = setting.value;
      return acc;
    }, {} as Record<string, string | null>);
  } catch (error) {
    console.error('Error fetching settings:', error);
    return {};
  }
}

// Get all portfolio data at once (for static generation)
export async function getAllPortfolioData() {
  try {
    const [
      profile,
      skills,
      projects,
      experiences,
      education,
      socials,
      categories,
      technologies
    ] = await Promise.all([
      getProfile(),
      getSkills(),
      getProjects(),
      getExperiences(),
      getEducation(),
      getSocials(),
      getCategories(),
      getTechnologies()
    ]);

    return {
      profile,
      skills,
      projects,
      experiences,
      education,
      socials,
      categories,
      technologies,
      error: null
    };
  } catch (error) {
    console.error('Error fetching all portfolio data:', error);
    return {
      profile: null,
      skills: [],
      projects: [],
      experiences: [],
      education: [],
      socials: [],
      categories: [],
      technologies: [],
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}
