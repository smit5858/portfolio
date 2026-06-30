import type { Project, SkillCategory } from '@/types'

export const PROJECTS: Project[] = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description:
      'A production-ready developer portfolio built with React, TypeScript, Vite, and Tailwind CSS. Focuses on performance, accessibility, and modern design.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://smitdevrukhkar.dev',
    githubUrl: 'https://github.com/smit5858/portfolio',
    featured: true,
  },
  {
    id: 'ecommerce-dashboard',
    title: 'E-Commerce Dashboard',
    description:
      'A full-featured admin dashboard for managing products, orders, and analytics. Built with real-time data visualisations and role-based access control.',
    tags: ['React', 'TypeScript', 'Recharts', 'REST API'],
    githubUrl: 'https://github.com/smit5858/ecommerce-dashboard',
    featured: true,
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    description:
      'A beautiful weather application with 7-day forecasts, interactive maps, and geolocation support. Uses the OpenWeatherMap API.',
    tags: ['React', 'TypeScript', 'OpenWeatherMap API', 'Leaflet'],
    githubUrl: 'https://github.com/smit5858/weather-app',
    featured: false,
  },
  {
    id: 'task-manager',
    title: 'Task Manager',
    description:
      'A Kanban-style task manager with drag-and-drop, priority tagging, deadline tracking, and local persistence.',
    tags: ['React', 'TypeScript', 'dnd-kit', 'Zustand'],
    githubUrl: 'https://github.com/smit5858/task-manager',
    featured: false,
  },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { id: 'react', name: 'React', level: 'expert' },
      { id: 'typescript', name: 'TypeScript', level: 'expert' },
      { id: 'javascript', name: 'JavaScript', level: 'expert' },
      { id: 'html', name: 'HTML5', level: 'expert' },
      { id: 'css', name: 'CSS3', level: 'expert' },
      { id: 'tailwind', name: 'Tailwind CSS', level: 'advanced' },
      { id: 'nextjs', name: 'Next.js', level: 'advanced' },
      { id: 'vite', name: 'Vite', level: 'advanced' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Workflow',
    skills: [
      { id: 'git', name: 'Git & GitHub', level: 'expert' },
      { id: 'vscode', name: 'VS Code', level: 'expert' },
      { id: 'npm', name: 'npm / pnpm', level: 'advanced' },
      { id: 'figma', name: 'Figma', level: 'intermediate' },
      { id: 'jest', name: 'Jest', level: 'intermediate' },
      { id: 'testing-library', name: 'Testing Library', level: 'intermediate' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    skills: [
      { id: 'nodejs', name: 'Node.js', level: 'intermediate' },
      { id: 'express', name: 'Express', level: 'intermediate' },
      { id: 'rest', name: 'REST APIs', level: 'advanced' },
      { id: 'graphql', name: 'GraphQL', level: 'intermediate' },
    ],
  },
]
