export default {
  meta: {
    title: 'Salim Ferroukhi | Software Engineer',
    description:
      'Software engineer in Chemnitz, Germany, focused on the frontend. Angular, React, TypeScript, Java and .NET. M.Sc. student in Automotive Software Engineering at TU Chemnitz.',
  },
  nav: {
    brand: 'Portfolio',
    language: 'Language',
    theme: 'Toggle dark mode',
  },
  profile: {
    role: 'Software Engineer',
    location: 'Chemnitz, Germany',
    labels: {
      location: 'Location',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      phone: 'Phone',
    },
  },
  about: {
    title: 'About',
    paragraphs: [
      'I’m a software engineer who mostly works on the frontend.',
      'For about three years I built web apps in Angular and React, including dashboards for an IoT platform and a component library built from Figma designs, with backend work in Java and Node.js along the way.',
      'I’m now doing a Master’s in Automotive Software Engineering at TU Chemnitz. Outside of coursework I’m interested in AI, data science, automotive software and music technology.',
    ],
  },
  education: {
    title: 'Education',
    items: [
      {
        degree: 'M.Sc. Automotive Software Engineering',
        school: 'Chemnitz University of Technology',
        period: '2025 – present',
      },
      {
        degree: 'Software Engineering Degree',
        school: 'National Engineering School of Carthage (ENICAR)',
        period: '2020 – 2023',
      },
    ],
  },
  skills: {
    title: 'Skills',
    groups: {
      frontend: 'Frontend',
      backend: 'Backend & data',
      devops: 'DevOps',
      design: 'Design & teamwork',
    },
    spokenTitle: 'Languages',
    spoken: { en: 'English', fr: 'French', de: 'German' },
  },
  experience: {
    title: 'Experience',
    present: 'present',
    duration: (y, m) =>
      [y && `${y} year${y > 1 ? 's' : ''}`, m && `${m} month${m > 1 ? 's' : ''}`].filter(Boolean).join(' '),
    jobs: {
      kian: {
        role: 'Fullstack Developer',
        location: 'Tunis, Tunisia',
        bullets: [
          'Built an IoT platform for real-time monitoring, data visualization and device management across connected networks.',
          'Developed Angular dashboards and UI components for telemetry tracking, live camera streams and smart construction insights.',
          'Improved front-end performance and automation workflows through GraphQL integration and rule chain configuration.',
        ],
      },
      calx: {
        role: 'Frontend Developer',
        location: 'Tunis, Tunisia',
        bullets: [
          'Built reusable UI components from Figma designs using React, Tailwind and Storybook.',
          'Improved platform performance through debugging, Git version control and CI/CD.',
          'Delivered features in Agile sprints with cross-functional teams.',
          'Developed backend services with Node.js: REST APIs and authentication.',
        ],
      },
      datahorizon: {
        role: 'Fullstack Developer',
        location: 'Tunis, Tunisia',
        bullets: [
          'Built a web application for managing Microsoft 365 service statistics on Azure, including data visualization and reporting.',
          'Developed a SharePoint alerts system to improve data security, integrating Microsoft APIs and Azure Functions.',
          'Created dynamic Angular charts to visualize MFA usage and improve the platform’s security posture insights.',
        ],
      },
      hippo: {
        role: 'Fullstack Developer',
        location: 'Florida, USA (Remote)',
        bullets: [
          'Designed and implemented a database migration process, improving data integrity and system scalability.',
          'Developed and maintained performant fullstack features, ensuring high responsiveness and code quality.',
          'Wrote and ran unit, integration and performance tests to keep the whole stack stable.',
        ],
      },
    },
  },
  projects: {
    title: 'Projects',
    source: 'Source',
    items: {
      automiq: {
        summary: 'Real-time telemetry and digital twin platform for vehicle fleets.',
        description:
          'A Python simulator streams CAN / OBD-II data (speed, battery, temperatures, tire pressure, fault codes) to a FastAPI server, which stores it in TimescaleDB and pushes it live over WebSockets. The React dashboard shows gauges, a 3D model of each vehicle that highlights faults, a diagnostics log and trip maps.',
      },
      nurburger: {
        summary: 'Product analytics and feature flags, a small PostHog alternative.',
        description:
          'Event capture API with JavaScript and Python SDKs, feature flags with stable percentage rollouts, and a trends builder that compiles to SQL. Custom SQL queries run sandboxed: validated with sqlglot, read-only, under a restricted Postgres role.',
      },
      carti: {
        summary: 'Collaborative Kanban board for small teams.',
        description:
          'Boards, comments, messages and presence update live over WebSockets. Includes drag and drop with undo, natural-language quick add, an approval flow for reviewers, calendar and list views, and personal analytics.',
      },
    },
  },
}
