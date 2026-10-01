// Used at build time only (see scripts/prerender.js).
import { renderToString } from 'vue/server-renderer'
import { createApp } from './app'
import { useI18n } from './i18n'

export { locales, pathForLocale } from './i18n'
export { renderHead } from './seo'
export { siteUrl } from './data/profile'

export async function render(code) {
  useI18n().locale.value = code
  return renderToString(createApp({ hydrate: true }))
}
