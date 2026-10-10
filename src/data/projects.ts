import agencyImg from '../assets/images/project_agency_web_1791615017289.jpg'
import printImg from '../assets/images/project_digital_print_1791615033434.jpg'
import myseatImg from '../assets/images/project_myseat_app_1791615050122.jpg'

export type Project = {
  slug: string
  name: string
  category: 'Web Application' | 'Agency & Portfolio' | 'E-Commerce' | 'Media & Community'
  tagline: string
  summary: string
  description?: string
  problem?: string
  solution?: string
  tech: string[]
  highlights: string[]
  url?: string
  repo?: string
  image?: string
  imageAlt?: string
  featured: boolean
  year: string
}

export const PROJECTS: Project[] = [
  {
    slug: 'mkheyan-agency',
    name: 'Mkheyan Agency',
    category: 'Agency & Portfolio',
    year: '2025',
    tagline: 'Modern agency web platform for digital services & brand identities.',
    summary: 'A clean, high-performance agency website presenting design, development, and branding capabilities with editorial layouts and responsive polish.',
    problem: 'Creative studios need a memorable digital presence that communicates technical competence and design sensibility without overwhelming prospective clients.',
    solution: 'Designed and built a fast, modular React application structured around clear service pillars, typography hierarchy, and accessible interactive sections.',
    tech: ['React', 'TypeScript', 'Vite', 'CSS Architecture', 'Figma'],
    highlights: [
      'Fluid responsive layout tested across desktop, tablet, and mobile',
      'Accessible interactive navigation and service discovery',
      'Modular component hierarchy engineered for easy content expansion',
      'Optimized asset loading and high-contrast color system',
    ],
    image: agencyImg,
    imageAlt: 'Mkheyan Agency website design displayed on modern desktop monitor',
    repo: 'https://github.com/MkheyanAgency',
    featured: true,
  },
  {
    slug: 'digital-print',
    name: 'Digital Print',
    category: 'E-Commerce',
    year: '2025',
    tagline: 'Custom print shop & personalized merchandise web showcase.',
    summary: 'An online storefront layout for custom printing services, papercraft, and branded stationery with catalog filtering and clean item specifications.',
    problem: 'Print shops often have confusing product configurations that make it difficult for customers to visualize custom specifications and options.',
    solution: 'Developed a structured product presentation system with clear material specifications, visual previews, and streamlined inquiry triggers.',
    tech: ['React', 'JavaScript', 'CSS3', 'UI Prototyping', 'Figma'],
    highlights: [
      'Interactive catalog organized into papercraft, merchandise, and stationery',
      'Clear specification tables with paper weights and finishing choices',
      'Optimized layout delivering sub-second page transitions',
      'Mobile-first inquiry drawer for rapid quote requests',
    ],
    image: printImg,
    imageAlt: 'Digital Print commerce interface shown on modern tablet',
    repo: 'https://github.com/MkheyanAgency',
    featured: true,
  },
  {
    slug: 'myseat',
    name: 'MySeat',
    category: 'Web Application',
    year: '2024',
    tagline: 'Interactive seat booking and ticket reservation web application.',
    summary: 'A responsive event ticketing and seat selection application featuring dynamic theater layouts, real-time ticket totals, and accessible seat picking.',
    problem: 'Seat booking interfaces are frequently clunky on mobile devices and inaccessible to keyboard or screen-reader users.',
    solution: 'Engineered an interactive SVG/CSS seat matrix with real-time state tracking (available, selected, reserved), pricing calculations, and keyboard focus control.',
    tech: ['React', 'TypeScript', 'State Management', 'CSS Grid', 'Accessibility'],
    highlights: [
      'Dynamic venue seating matrix with instant status feedback',
      'Real-time pricing calculator for standard, student, and premium tiers',
      'Keyboard accessible navigation throughout the seat grid',
      'Order confirmation summary modal with ticket reference code generator',
    ],
    image: myseatImg,
    imageAlt: 'MySeat interactive cinema seat selection UI',
    repo: 'https://github.com/MkheyanAgency',
    featured: true,
  },
  {
    slug: 'shift',
    name: 'Shift',
    category: 'Web Application',
    year: '2024',
    tagline: 'Minimalist workflow and schedule tracking web dashboard.',
    summary: 'A clean scheduling interface for managing work shifts, task assignments, and weekly team availability without spreadsheet clutter.',
    problem: 'Small teams struggle with cumbersome shift scheduling software that takes hours to set up and navigate.',
    solution: 'Created an intuitive calendar-based rota view that highlights open shifts, employee assignments, and coverage alerts in a clean single-pane dashboard.',
    tech: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'REST APIs'],
    highlights: [
      'Weekly rota timeline with drag-and-drop intuition',
      'Instant department filtering and conflict warnings',
      'Lightweight bundle with zero heavy external dashboard dependencies',
    ],
    repo: 'https://github.com/MkheyanAgency',
    featured: false,
  },
  {
    slug: 'home-ler',
    name: 'HOME LER',
    category: 'Agency & Portfolio',
    year: '2024',
    tagline: 'Contemporary real estate & architectural living showcase.',
    summary: 'A spatial living portfolio presenting residential spaces, architectural floorplans, and design aesthetics through high-contrast photography frames.',
    problem: 'High-end architecture requires a restrained, elegant digital presentation that gives priority to imagery and spatial geometry.',
    solution: 'Crafted a minimal editorial web experience utilizing generous whitespace, subtle frame transitions, and structured property data.',
    tech: ['React', 'CSS3', 'Figma', 'Responsive Design'],
    highlights: [
      'Editorial photo grid with full-bleed architectural framing',
      'Property specifications breakdown with floor plan modals',
      'Integrated consultation inquiry form with responsive inputs',
    ],
    repo: 'https://github.com/MkheyanAgency',
    featured: false,
  },
  {
    slug: 'blogger-awards',
    name: 'Blogger Awards',
    category: 'Media & Community',
    year: '2024',
    tagline: 'Annual creative blogger nomination & community voting portal.',
    summary: 'An engaging web platform for creator award ceremonies, featuring categorized nominee profiles, community voting mechanisms, and event milestones.',
    problem: 'Community award portals need high engagement, clear voting rules, and excitement while maintaining fairness and clear nominee visibility.',
    solution: 'Built a vibrant voting portal with category tabs, nominee spotlights, interactive voting tallies, and an animated event countdown.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'CSS Animations'],
    highlights: [
      'Category-based nominee showcase with profile cards',
      'Interactive voting tally feedback and vote confirmation toast',
      'Live countdown timer toward ceremony gala milestone',
    ],
    repo: 'https://github.com/MkheyanAgency',
    featured: false,
  },
]
