export default {
  meta: {
    title: 'Salim Ferroukhi | Software Engineer',
    description:
      'Software Engineer in Chemnitz. React, Vue, Angular, TypeScript, Java und .NET. Masterstudent AM Software Engineering an der TU Chemnitz.',
  },
  nav: {
    brand: 'Portfolio',
    language: 'Sprache',
    theme: 'Dunkelmodus umschalten',
  },
  profile: {
    role: 'Software Engineer',
    location: 'Chemnitz, Deutschland',
    labels: {
      location: 'Standort',
      email: 'E-Mail',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      phone: 'Telefon',
    },
  },
  about: {
    title: 'Über mich',
    paragraphs: [
      'Ich bin Softwareentwickler und vor allem in der Frontend-Entwicklung versiert.',
      'Beruflich habe ich vor allem Webanwendungen mit Angular und React entwickelt, unter anderem Dashboards für eine IoT-Plattform und eine Komponentenbibliothek auf Basis von Figma-Designs, dazu Backend-Arbeit mit Java und Node.js.',
      'Nach vier Jahren Berufserfahrung studiere ich derzeit im Master AM Software Engineering an der TU Chemnitz, entwickle nebenbei weiter Software und verbessere mein Deutsch. Darüber hinaus interessiere ich mich für KI, Data Science und Musiktechnologie.',
    ],
  },
  education: {
    title: 'Ausbildung',
    items: {
      tuc: {
        degree: 'M.Sc. AM Software Engineering',
        school: 'Technische Universität Chemnitz',
        period: '2025 – heute',
      },
      enicar: {
        degree: 'Ingenieurdiplom Softwaretechnik',
        school: 'National Engineering School of Carthage (ENICAR)',
        period: '2020 – 2023',
      },
    },
  },
  skills: {
    title: 'Kenntnisse',
    groups: {
      frontend: 'Frontend',
      backend: 'Backend & Daten',
      devops: 'DevOps',
      design: 'Design & Teamarbeit',
    },
    spokenTitle: 'Sprachen',
    spoken: { en: 'Englisch', fr: 'Französisch', de: 'Deutsch' },
    levels: { fluent: 'Fließend' },
    showAll: 'Alle anzeigen',
    showLess: 'Weniger anzeigen',
    more: (n) => `+${n} weitere`,
  },
  experience: {
    title: 'Berufserfahrung',
    present: 'heute',
    duration: (y, m) =>
      [y && `${y} Jahr${y > 1 ? 'e' : ''}`, m && `${m} Monat${m > 1 ? 'e' : ''}`].filter(Boolean).join(' '),
    jobs: {
      kian: {
        role: 'Fullstack-Entwickler',
        location: 'Tunis, Tunesien',
        bullets: [
          'Aufbau einer IoT-Plattform für Echtzeit-Monitoring, Datenvisualisierung und Geräteverwaltung in vernetzten Netzwerken.',
          'Entwicklung von Angular-Dashboards und UI-Komponenten für Telemetrie-Tracking, Live-Kamerastreams und Smart-Construction-Auswertungen.',
          'Verbesserung der Frontend-Performance und der Automatisierungs-Workflows durch GraphQL-Integration und die Konfiguration von Regelketten.',
        ],
      },
      calx: {
        role: 'Frontend-Entwickler',
        location: 'Tunis, Tunesien',
        bullets: [
          'Entwicklung wiederverwendbarer UI-Komponenten auf Basis von Figma-Designs mit React, Tailwind und Storybook.',
          'Verbesserung der Plattform-Performance durch Debugging, Git-Versionskontrolle und CI/CD.',
          'Umsetzung von Features in agilen Sprints mit funktionsübergreifenden Teams.',
          'Entwicklung von Backend-Services mit Node.js: REST-APIs und Authentifizierung.',
        ],
      },
      datahorizon: {
        role: 'Fullstack-Entwickler',
        location: 'Tunis, Tunesien',
        bullets: [
          'Entwicklung einer Webanwendung zur Verwaltung von Microsoft-365-Dienststatistiken auf Azure, inklusive Datenvisualisierung und Reporting.',
          'Entwicklung eines SharePoint-Alert-Systems zur Verbesserung der Datensicherheit mit Microsoft-APIs und Azure Functions.',
          'Erstellung dynamischer Angular-Diagramme zur Visualisierung der MFA-Nutzung und für bessere Einblicke in die Security Posture der Plattform.',
        ],
      },
      hippo: {
        role: 'Fullstack-Entwickler',
        location: 'Florida, USA (Remote)',
        bullets: [
          'Konzeption und Umsetzung eines Datenbank-Migrationsprozesses, der Datenintegrität und Skalierbarkeit verbessert hat.',
          'Entwicklung und Wartung performanter Fullstack-Features mit Fokus auf Reaktionsfähigkeit und Codequalität.',
          'Schreiben und Ausführen von Unit-, Integrations- und Performancetests für die Stabilität des gesamten Stacks.',
        ],
      },
    },
  },
  projects: {
    title: 'Projekte',
    source: 'Quellcode',
    items: {
      automiq: {
        summary: 'Echtzeit-Telemetrie und Digital-Twin-Plattform für Fahrzeugflotten.',
        description:
          'Ein Python-Simulator sendet CAN- / OBD-II-Daten (Geschwindigkeit, Batterie, Temperaturen, Reifendruck, Fehlercodes) an einen FastAPI-Server, der sie in TimescaleDB speichert und live über WebSockets verteilt. Das React-Dashboard zeigt Anzeigen, ein 3D-Modell jedes Fahrzeugs mit hervorgehobenen Fehlern, ein Diagnoseprotokoll und Fahrtkarten.',
      },
      nurburger: {
        summary: 'Produktanalyse und Feature Flags, eine kleine PostHog-Alternative.',
        description:
          'Event-Capture-API mit SDKs für JavaScript und Python, Feature Flags mit stabilen prozentualen Rollouts und ein Trend-Builder, der zu SQL kompiliert. Eigene SQL-Abfragen laufen abgeschottet: mit sqlglot validiert, schreibgeschützt und unter einer eingeschränkten Postgres-Rolle.',
      },
      carti: {
        summary: 'Kollaboratives Kanban-Board für kleine Teams.',
        description:
          'Boards, Kommentare, Nachrichten und Anwesenheit werden live über WebSockets aktualisiert. Mit Drag and Drop inklusive Rückgängig, Schnelleingabe in natürlicher Sprache, Freigabe-Workflow für Reviewer, Kalender- und Listenansicht sowie persönlichen Auswertungen.',
      },
    },
  },
}
