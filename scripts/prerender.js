// Renders every language version to static HTML so search engines get real content,
// then writes sitemap.xml and robots.txt. Runs after the client + SSR builds.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')

const { render, renderHead, locales, pathForLocale, siteUrl: defaultSiteUrl } = await import(
  pathToFileURL(path.join(root, 'dist-ssr/entry-server.js')).href
)

const siteUrl = (process.env.SITE_URL || defaultSiteUrl).replace(/\/$/, '')
if (siteUrl.includes('your-domain.com')) {
  console.warn('\n⚠  siteUrl is still the placeholder — set it in src/data/profile.js or via SITE_URL=...\n')
}

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

for (const { code } of locales) {
  const appHtml = await render(code)
  const html = template
    .replace(/<html lang="[^"]*">/, `<html lang="${code}">`)
    .replace(/<!--head:start-->[\s\S]*?<!--head:end-->/, renderHead(code, siteUrl))
    .replace('<div id="app"></div>', `<div id="app">${appHtml}</div>`)

  const file = path.join(dist, pathForLocale(code), 'index.html')
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, html)
  console.log(`prerendered ${path.relative(root, file)}`)
}

const lastmod = new Date().toISOString().slice(0, 10)
const alternates = locales
  .map((l) => `    <xhtml:link rel="alternate" hreflang="${l.code}" href="${siteUrl}${pathForLocale(l.code)}"/>`)
  .join('\n')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${locales
  .map(
    (l) => `  <url>
    <loc>${siteUrl}${pathForLocale(l.code)}</loc>
    <lastmod>${lastmod}</lastmod>
${alternates}
  </url>`,
  )
  .join('\n')}
</urlset>
`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`)
console.log('wrote dist/sitemap.xml and dist/robots.txt')
