import { messages, locales, defaultLocale, pathForLocale } from './i18n'
import { profile, skillGroups } from './data/profile'

const ogLocales = { en: 'en_US', de: 'de_DE' }

const escape = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// <head> tags for one language version of the page.
export function renderHead(code, siteUrl) {
  const t = messages[code]
  const origin = siteUrl.replace(/\/$/, '')
  const url = (c) => origin + pathForLocale(c)
  const image = profile.photo && origin + profile.photo

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    alternateName: profile.alternateNames,
    givenName: 'Salim',
    familyName: 'Ferroukhi',
    jobTitle: t.profile.role,
    description: t.meta.description,
    url: url(code),
    ...(image && { image }),
    email: `mailto:${profile.email}`,
    telephone: profile.phone.replace(/\s/g, ''),
    address: { '@type': 'PostalAddress', addressLocality: 'Chemnitz', addressCountry: 'DE' },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Chemnitz University of Technology' },
      { '@type': 'CollegeOrUniversity', name: 'National Engineering School of Carthage (ENICAR)' },
    ],
    knowsAbout: skillGroups.slice(0, 3).flatMap((g) => g.items),
    knowsLanguage: ['en', 'fr', 'de'],
    sameAs: [profile.github, profile.linkedin],
  }

  const tags = [
    `<title>${escape(t.meta.title)}</title>`,
    `<meta name="description" content="${escape(t.meta.description)}" />`,
    `<meta name="author" content="${escape(profile.name)}" />`,
    `<link rel="canonical" href="${url(code)}" />`,
    ...locales.map((l) => `<link rel="alternate" hreflang="${l.code}" href="${url(l.code)}" />`),
    `<link rel="alternate" hreflang="x-default" href="${url(defaultLocale)}" />`,
    `<meta property="og:type" content="profile" />`,
    `<meta property="og:site_name" content="${escape(profile.name)}" />`,
    `<meta property="og:title" content="${escape(t.meta.title)}" />`,
    `<meta property="og:description" content="${escape(t.meta.description)}" />`,
    `<meta property="og:url" content="${url(code)}" />`,
    `<meta property="og:locale" content="${ogLocales[code]}" />`,
    ...locales
      .filter((l) => l.code !== code)
      .map((l) => `<meta property="og:locale:alternate" content="${ogLocales[l.code]}" />`),
    ...(image ? [`<meta property="og:image" content="${image}" />`] : []),
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${escape(t.meta.title)}" />`,
    `<meta name="twitter:description" content="${escape(t.meta.description)}" />`,
    `<script type="application/ld+json">${JSON.stringify(person).replace(/</g, '\\u003c')}</script>`,
  ]
  return tags.join('\n    ')
}
