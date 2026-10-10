export interface SkillItem {
  name: string
  icon: string
  level: string
  description: string
}

export interface SkillCategory {
  title: string
  description: string
  badge: string
  items: SkillItem[]
}

export const SITE = {
  name: 'Vazgen Mkheyan',
  role: 'Junior Developer',
  roles: ['Junior Developer', 'Frontend Developer', 'Web Craftsman'],
  greeting: "Hi, I'm Vazgen. I build things for the web.",
  tagline: 'I’m a junior developer passionate about building modern, responsive, and user-friendly digital experiences.',
  location: 'Armenia (Open to Remote)',
  email: 'mkheyanagency@gmail.com',
  github: 'https://github.com/MkheyanAgency',
  status: 'Available for junior developer roles & projects',
  footerLine: 'Crafting thoughtful digital interfaces with curiosity and care.',
}

export const ABOUT = {
  title: 'Early in my career, serious about the craft.',
  lead: 'I am a junior developer driven by curiosity, modern web standards, and an appreciation for clean, tactile digital experiences.',
  paragraphs: [
    "My journey into software development started with a desire to understand how ideas transform into living, responsive web products. Rather than relying on shortcuts or bloated templates, I focus on building solid foundations—writing clean semantic HTML, structured CSS layouts, and predictable JavaScript and TypeScript.",
    "I care deeply about the human side of software: how effortlessly a user can accomplish a task, whether colors and contrast provide comfortable reading, and how fast a page responds on a real phone with a slow connection. Every project is an opportunity to refine code quality and design sensitivity.",
    "Beyond frontend development with React, I am actively broadening my technical spectrum—studying backend patterns with PHP & Laravel, relational databases like PostgreSQL, and modern BaaS platforms like Supabase. I believe the most versatile frontend developers understand the entire journey of data from database query to render tree.",
  ],
  pillars: [
    {
      num: '01',
      title: 'Clean Code & Architecture',
      description: 'Building modular, maintainable TypeScript and React components with clear separation of concerns, single responsibilities, and zero unnecessary dependencies.',
    },
    {
      num: '02',
      title: 'Responsive & Accessible UI',
      description: 'Crafting interfaces that scale naturally from narrow mobile screens to large desktop monitors, adhering to WCAG accessibility guidelines and keyboard navigation.',
    },
    {
      num: '03',
      title: 'Continuous Growth Mindset',
      description: 'Eager to absorb mentorship, review pull requests thoroughly, learn new architectures quickly, and consistently deliver honest, high-standard work.',
    },
  ],
  workflow: [
    { label: 'Core Editor', val: 'VS Code with Strict ESLint & Prettier' },
    { label: 'Version Control', val: 'Git & GitHub with disciplined commits' },
    { label: 'Design Tooling', val: 'Figma for component prototypes & tokens' },
    { label: 'Terminal', val: 'Zsh / Bash terminal environment' },
    { label: 'Testing & QA', val: 'Manual responsive stress-testing & Lighthouse checks' },
  ],
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Engineering',
    description: 'Modern component-driven web interfaces built with performance, responsive fluidity, and type-safety in mind.',
    badge: 'Core Focus',
    items: [
      { name: 'React', icon: '/assets/img/skills-frontend-4.svg', level: 'Primary Library', description: 'Functional components, hooks, lifecycle management, and React Router navigation.' },
      { name: 'TypeScript', icon: '/assets/img/skills-frontend-8.svg', level: 'Working Proficiency', description: 'Strict type contracts, interfaces, and safe props handling across components.' },
      { name: 'JavaScript (ES6+)', icon: '/assets/img/skills-frontend-3.svg', level: 'Solid Foundation', description: 'Modern syntax, async/await, DOM APIs, event handling, and functional array methods.' },
      { name: 'HTML5 Semantic', icon: '/assets/img/skills-frontend-1.svg', level: 'Standard', description: 'Semantic structure, accessibility landmarks, clean markup hierarchy, and SEO.' },
      { name: 'CSS3 & Modern Layouts', icon: '/assets/img/skills-frontend-2.svg', level: 'Standard', description: 'CSS Grid, Flexbox, custom properties, responsive media queries, and animations.' },
      { name: 'Sass / SCSS', icon: '/assets/img/skills-frontend-5.svg', level: 'Tooling', description: 'Nested styles, mixins, variables, and organized modular style architectures.' },
      { name: 'Git & Version Control', icon: '/assets/img/skills-frontend-6.svg', level: 'Daily Workflow', description: 'Branch management, pull requests, resolving merge conflicts, and commit hygiene.' },
      { name: 'Next.js & Vite Ecosystem', icon: '/assets/img/skills-frontend-7.svg', level: 'Build & Dev', description: 'Modern build pipelines, HMR development, and bundling configurations.' },
    ],
  },
  {
    title: 'Backend & Data Foundations',
    description: 'Server logic, relational modeling, and API integrations connecting frontend applications to persistent data.',
    badge: 'Active Study',
    items: [
      { name: 'Laravel (PHP)', icon: '/assets/img/skills-backend-1.svg', level: 'Framework', description: 'Routing, Blade templates, controllers, Eloquent ORM, and MVC architecture.' },
      { name: 'PostgreSQL', icon: '/assets/img/skills-backend-2.svg', level: 'Relational DB', description: 'Table schemas, primary/foreign keys, joins, and basic query optimization.' },
      { name: 'RESTful APIs', icon: '/assets/img/skills-backend-3.svg', level: 'Integration', description: 'Designing predictable JSON endpoints, status codes, and frontend fetch clients.' },
      { name: 'Supabase', icon: '/assets/img/skills-backend-4.svg', level: 'Backend as a Service', description: 'Postgres database setup, authentication flows, and real-time subscription clients.' },
      { name: 'SQL & Database Design', icon: '/assets/img/skills-backend-5.svg', level: 'Data Modeling', description: 'Relational normalization, indexing basics, and database constraints.' },
    ],
  },
  {
    title: 'Design & Visual Prototyping',
    description: 'Interface design, design systems, vector assets, and visual polish bridging design ideas into code.',
    badge: 'UI / UX',
    items: [
      { name: 'Figma', icon: '/assets/img/skills-design-1.svg', level: 'Design Systems', description: 'UI wireframes, auto-layout components, color tokens, and interactive mockups.' },
      { name: 'Adobe XD', icon: '/assets/img/skills-design-2.svg', level: 'UI Prototyping', description: 'Interactive clickable wireframes, mobile flows, and user journey testing.' },
      { name: 'Adobe Premiere Pro', icon: '/assets/img/skills-design-3.svg', level: 'Media Editing', description: 'Video editing, motion cuts, and digital product demo showcases.' },
      { name: 'Adobe Photoshop', icon: '/assets/img/skills-design-4.svg', level: 'Asset Creation', description: 'Image optimization, raster manipulation, hero graphic prep, and asset exports.' },
      { name: 'Adobe Illustrator', icon: '/assets/img/skills-design-5.svg', level: 'Vector Graphics', description: 'Scalable SVG icons, logos, brand mark illustration, and typography artwork.' },
      { name: 'UI / UX Architecture', icon: '/assets/img/skills-design-6.svg', level: 'Human Experience', description: 'Visual hierarchy, typography scale, ergonomic touch targets, and contrast compliance.' },
    ],
  },
]

export const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'mkheyanagency@gmail.com',
    href: 'mailto:mkheyanagency@gmail.com',
    type: 'direct',
    note: 'Direct inquiries & opportunities',
  },
  {
    label: 'GitHub',
    value: 'github.com/MkheyanAgency',
    href: 'https://github.com/MkheyanAgency',
    type: 'social',
    note: 'Repositories & code samples',
  },
]
