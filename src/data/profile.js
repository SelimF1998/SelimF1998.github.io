// Content that does not change between languages.
// Translated copy lives in src/i18n.

// Public URL the site is deployed to (used for canonical links, hreflang, sitemap, Open Graph).
// Can be overridden at build time: SITE_URL=https://example.com npm run build
export const siteUrl = 'https://selimf1998.github.io'

export const profile = {
  name: 'Salim Ferroukhi',
  initials: 'SF',
  // 320×320 crop of assets-src/pfp.png
  photo: '/pfp.jpg',
  email: 'selim.ferroukhi7@gmail.com',
  phone: '+49 152 55140771',
  github: 'https://github.com/SelimF1998',
  linkedin: 'https://www.linkedin.com/in/salim-ferroukhi/',
}

export const skillGroups = [
  { id: 'frontend', items: ['TypeScript', 'JavaScript', 'Angular', 'React', 'HTML & CSS', 'Tailwind CSS', 'Storybook'] },
  { id: 'backend', items: ['Java (Spring)', 'Node.js', 'C# (.NET)', 'GraphQL', 'REST APIs', 'PostgreSQL'] },
  { id: 'devops', items: ['Docker', 'Azure DevOps', 'CI/CD', 'Git', 'GitHub'] },
  { id: 'design', items: ['Figma', 'Jira', 'Trello', 'Miro', 'Slack'] },
]

export const spokenLanguages = [
  { id: 'en', level: 'B2', cert: 'IELTS 6.0' },
  { id: 'fr', level: 'C1', cert: 'TCF 517' },
  { id: 'de', level: 'A2' },
]

// logo: path to an image in /public; null shows a placeholder.
export const jobs = [
  {
    id: 'kian',
    company: 'KIAN Technology',
    logo: '/kian.jpg',
    stack: 'Angular / Java',
    start: '2024-06',
    end: '2025-09',
    tech: ['TypeScript', 'Angular', 'GraphQL', 'Java (Spring)', 'Azure DevOps', 'Git'],
  },
  {
    id: 'calx',
    company: 'CALX Consulting',
    logo: '/calx_consulting_logo.jpg',
    stack: 'React / Node.js',
    start: '2023-11',
    end: '2024-06',
    tech: ['TypeScript', 'React', 'Node.js', 'Storybook', 'Tailwind', 'Azure DevOps', 'Docker', 'Git'],
  },
  {
    id: 'datahorizon',
    company: 'DataHorizon France',
    logo: '/datahorizon_logo.jpg',
    stack: '.NET / Angular',
    start: '2023-03',
    end: '2023-10',
    tech: ['TypeScript', 'Angular', 'C#', '.NET', 'Azure DevOps', 'Git'],
  },
  {
    id: 'hippo',
    company: 'Hippo Labs, Inc',
    logo: '/hippo.svg',
    stack: 'Node.js / React',
    start: '2022-08',
    end: '2023-01',
    tech: ['Node.js', 'Express.js', 'JavaScript', 'React', 'PostgreSQL', 'Git'],
  },
]

// logo: square icon in /public; repo: GitHub URL (null hides the link).
export const projects = [
  {
    id: 'automiq',
    name: 'Automiq',
    logo: '/projects/automiq.svg',
    repo: null,
    tech: ['React', 'TypeScript', 'Three.js', 'Tailwind CSS', 'FastAPI', 'TimescaleDB', 'WebSockets'],
  },
  {
    id: 'nurburger',
    name: 'Nurburger',
    logo: '/projects/nurburger.svg',
    repo: null,
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'FastAPI', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'carti',
    name: 'Carti',
    logo: '/projects/carti.svg',
    repo: null,
    tech: ['React', 'TypeScript', 'SCSS', 'Zustand', 'dnd-kit', 'FastAPI', 'PostgreSQL', 'WebSockets'],
  },
]
