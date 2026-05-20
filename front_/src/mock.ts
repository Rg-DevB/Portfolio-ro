// Mock data for portfolio

export const personalInfo = {
  name: "Alexandre Dubois",
  title: "Développeur Full-Stack Junior",
  tagline: "Passionné par la création d'applications web modernes et performantes",
  email: "alexandre.dubois@example.com",
  phone: "+33 6 12 34 56 78",
  location: "Paris, France",
  bio: "Développeur junior passionné avec une solide formation en développement web. Je maîtrise les technologies modernes comme React, Node.js, et Python. Mon objectif est de créer des applications intuitives et performantes qui résolvent des problèmes réels. Toujours à l'écoute des nouvelles tendances technologiques, je cherche constamment à améliorer mes compétences et à relever de nouveaux défis.",
  resumeUrl: "/assets/cv-alexandre-dubois.pdf",
  social: {
    github: "https://github.com/alexdubois",
    linkedin: "https://linkedin.com/in/alexandre-dubois",
    twitter: "https://twitter.com/alexdubois",
    portfolio: "https://alexandredubois.dev"
  }
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 85 },
      { name: "JavaScript/ES6+", level: 90 },
      { name: "TypeScript", level: 75 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Vue.js", level: 65 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 80 },
      { name: "Python", level: 85 },
      { name: "FastAPI", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "REST APIs", level: 85 }
    ]
  },
  {
    category: "Base de données",
    items: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 70 },
      { name: "MySQL", level: 75 },
      { name: "Redis", level: 60 }
    ]
  },
  {
    category: "Outils & DevOps",
    items: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "CI/CD", level: 65 },
      { name: "Linux", level: 75 },
      { name: "AWS", level: 60 }
    ]
  }
];

export const projects = [
  {
    id: 1,
    category: "Applications Web",
    title: "E-Commerce Platform",
    description: "Plateforme e-commerce complète avec panier, paiement Stripe et gestion d'inventaire. Interface admin pour gérer les produits et commandes.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    demoUrl: "https://demo-ecommerce.example.com",
    githubUrl: "https://github.com/alexdubois/ecommerce-platform",
    featured: true
  },
  {
    id: 2,
    category: "Applications Web",
    title: "Task Management App",
    description: "Application de gestion de tâches collaborative avec système de notifications en temps réel, attribution de tâches et tableaux Kanban.",
    technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    demoUrl: "https://demo-tasks.example.com",
    githubUrl: "https://github.com/alexdubois/task-manager",
    featured: true
  },
  {
    id: 3,
    category: "Développement Mobile",
    title: "Fitness Tracker",
    description: "Application mobile de suivi fitness avec enregistrement d'entraînements, statistiques détaillées et plans d'entraînement personnalisés.",
    technologies: ["React Native", "Expo", "Firebase", "Chart.js"],
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    demoUrl: "https://demo-fitness.example.com",
    githubUrl: "https://github.com/alexdubois/fitness-tracker",
    featured: false
  },
  {
    id: 4,
    category: "Développement Mobile",
    title: "Recipe Finder App",
    description: "Application de découverte de recettes avec recherche par ingrédients, favoris, liste de courses et mode pas-à-pas pour cuisiner.",
    technologies: ["React Native", "Redux", "Spoonacular API"],
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80",
    demoUrl: "https://demo-recipes.example.com",
    githubUrl: "https://github.com/alexdubois/recipe-finder",
    featured: false
  },
  {
    id: 5,
    category: "APIs Backend",
    title: "REST API for Blog",
    description: "API REST complète pour blog avec authentification JWT, CRUD posts, commentaires, catégories et système de tags.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "JWT"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    demoUrl: "https://api-blog.example.com/docs",
    githubUrl: "https://github.com/alexdubois/blog-api",
    featured: false
  },
  {
    id: 6,
    category: "APIs Backend",
    title: "Weather Data Aggregator",
    description: "Service d'agrégation de données météo depuis plusieurs sources avec cache Redis et endpoints optimisés.",
    technologies: ["Node.js", "Express", "Redis", "OpenWeather API"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    demoUrl: "https://api-weather.example.com",
    githubUrl: "https://github.com/alexdubois/weather-api",
    featured: false
  },
  {
    id: 7,
    category: "Full-Stack",
    title: "Social Media Dashboard",
    description: "Tableau de bord social media avec analytics, planification de posts, gestion multi-comptes et rapports détaillés.",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Tailwind"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    demoUrl: "https://demo-social.example.com",
    githubUrl: "https://github.com/alexdubois/social-dashboard",
    featured: true
  },
  {
    id: 8,
    category: "Full-Stack",
    title: "Learning Management System",
    description: "Plateforme d'apprentissage en ligne avec cours vidéo, quiz interactifs, suivi de progression et certificats.",
    technologies: ["React", "Python", "FastAPI", "MongoDB", "AWS S3"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    demoUrl: "https://demo-lms.example.com",
    githubUrl: "https://github.com/alexdubois/lms-platform",
    featured: false
  }
];

export const experiences = [
  {
    id: 1,
    company: "Tech Innovations SARL",
    position: "Développeur Full-Stack Junior",
    location: "Paris, France",
    startDate: "Janvier 2024",
    endDate: "Présent",
    current: true,
    description: "Développement d'applications web avec React et Node.js. Collaboration avec l'équipe pour la conception et l'implémentation de nouvelles fonctionnalités. Participation aux code reviews et amélioration continue.",
    achievements: [
      "Développé 3 modules majeurs pour l'application principale",
      "Réduit le temps de chargement de 40% grâce à l'optimisation",
      "Mentoré 2 stagiaires en développement web"
    ]
  },
  {
    id: 2,
    company: "Digital Solutions",
    position: "Stagiaire Développeur Web",
    location: "Lyon, France",
    startDate: "Juin 2023",
    endDate: "Décembre 2023",
    current: false,
    description: "Stage de 6 mois focalisé sur le développement frontend avec React. Création de composants réutilisables et intégration d'APIs REST.",
    achievements: [
      "Créé une bibliothèque de 20+ composants React réutilisables",
      "Implémenté l'interface utilisateur de 2 projets clients",
      "Participé aux daily standups et sprint planning"
    ]
  },
  {
    id: 3,
    company: "Freelance",
    position: "Développeur Web Freelance",
    location: "Remote",
    startDate: "Janvier 2023",
    endDate: "Mai 2023",
    current: false,
    description: "Projets freelance pour petites entreprises et startups. Développement de sites vitrine, landing pages et petites applications web.",
    achievements: [
      "Livré 5 projets avec satisfaction client de 100%",
      "Géré communication client et planning projet",
      "Développé des solutions sur mesure adaptées aux besoins"
    ]
  }
];

export const education = [
  {
    id: 1,
    institution: "Université Paris-Saclay",
    degree: "Licence Informatique",
    field: "Informatique et Applications",
    location: "Paris, France",
    startDate: "2021",
    endDate: "2023",
    description: "Formation complète en informatique couvrant les algorithmes, structures de données, programmation orientée objet et développement web.",
    achievements: [
      "Mention Bien",
      "Projet de fin d'études: Application de gestion universitaire"
    ]
  },
  {
    id: 2,
    institution: "IUT de Villetaneuse",
    degree: "DUT Informatique",
    field: "Informatique",
    location: "Villetaneuse, France",
    startDate: "2019",
    endDate: "2021",
    description: "Formation technique en développement logiciel et programmation.",
    achievements: [
      "Major de promotion",
      "Stage de 10 semaines en entreprise"
    ]
  }
];

export const formations = [
  {
    id: 1,
    title: "Formation React Avancé",
    provider: "OpenClassrooms",
    date: "2023",
    duration: "40 heures",
    description: "Formation approfondie sur React avec hooks, context API, optimisation des performances et tests."
  },
  {
    id: 2,
    title: "Node.js & Express Masterclass",
    provider: "Udemy",
    date: "2023",
    duration: "30 heures",
    description: "Développement d'APIs REST avec Node.js, Express, authentification et sécurité."
  },
  {
    id: 3,
    title: "Full-Stack Development Bootcamp",
    provider: "Le Wagon",
    date: "2022",
    duration: "9 semaines",
    description: "Bootcamp intensif couvrant HTML, CSS, JavaScript, React, Ruby on Rails et PostgreSQL."
  }
];

export const certifications = [
  {
    id: 1,
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Mars 2024",
    credentialId: "AWS-CCP-2024-12345",
    verifyUrl: "https://aws.amazon.com/verification/12345"
  },
  {
    id: 2,
    name: "MongoDB Developer Certification",
    issuer: "MongoDB University",
    date: "Janvier 2024",
    credentialId: "MONGO-DEV-2024-67890",
    verifyUrl: "https://university.mongodb.com/verification/67890"
  },
  {
    id: 3,
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "Décembre 2023",
    credentialId: "FCC-JS-2023-11223",
    verifyUrl: "https://freecodecamp.org/certification/11223"
  },
  {
    id: 4,
    name: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    date: "Octobre 2023",
    credentialId: "FCC-RWD-2023-44556",
    verifyUrl: "https://freecodecamp.org/certification/44556"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Marie Lefebvre",
    position: "CTO, Tech Innovations SARL",
    company: "Tech Innovations",
    content: "Alexandre est un développeur talentueux et motivé. Son code est propre, bien documenté et il apprend très rapidement. Un vrai atout pour notre équipe.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 2,
    name: "Thomas Martin",
    position: "Lead Developer, Digital Solutions",
    company: "Digital Solutions",
    content: "J'ai eu le plaisir de superviser Alexandre pendant son stage. Son professionnalisme et sa capacité à résoudre des problèmes complexes m'ont impressionné. Je le recommande vivement.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=12"
  },
  {
    id: 3,
    name: "Sophie Dubois",
    position: "Founder, StartupXYZ",
    company: "StartupXYZ",
    content: "Alexandre a développé notre site web avec professionnalisme. Il a su comprendre nos besoins et livrer un produit qui dépasse nos attentes. Communication excellente tout au long du projet.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=9"
  },
  {
    id: 4,
    name: "Lucas Bernard",
    position: "Product Manager",
    company: "Tech Corp",
    content: "Très bon développeur avec un excellent sens du détail. Alexandre est ponctuel, fiable et produit un travail de qualité. J'ai hâte de collaborer à nouveau avec lui.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=15"
  }
];

export const pricingPlans = [
  {
    id: 1,
    name: "Site Vitrine",
    price: "800-1500",
    currency: "€",
    duration: "projet",
    description: "Site web professionnel pour présenter votre activité",
    features: [
      "Design responsive moderne",
      "5-10 pages",
      "Formulaire de contact",
      "Optimisation SEO de base",
      "Intégration Google Analytics",
      "Livraison en 2-3 semaines"
    ],
    popular: false
  },
  {
    id: 2,
    name: "Application Web",
    price: "2500-5000",
    currency: "€",
    duration: "projet",
    description: "Application web sur mesure avec fonctionnalités avancées",
    features: [
      "Interface utilisateur personnalisée",
      "Backend avec API REST",
      "Base de données",
      "Authentification utilisateur",
      "Dashboard admin",
      "Tests et déploiement",
      "Livraison en 4-8 semaines"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Maintenance & Support",
    price: "500-1000",
    currency: "€",
    duration: "mois",
    description: "Support technique et maintenance continue",
    features: [
      "Mises à jour régulières",
      "Corrections de bugs",
      "Optimisation des performances",
      "Support technique prioritaire",
      "Sauvegardes régulières",
      "Rapports mensuels"
    ],
    popular: false
  }
];