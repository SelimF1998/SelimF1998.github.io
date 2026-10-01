import { ref, computed, watch } from 'vue'
import en from './en'
import de from './de'

export const messages = { en, de }
export const defaultLocale = 'en'

export const locales = [
  { code: 'en', short: 'EN', label: 'English' },
  { code: 'de', short: 'DE', label: 'Deutsch' },
]

const base = import.meta.env.BASE_URL // '/' unless deployed under a sub-path
const isBrowser = typeof window !== 'undefined'

// Each language lives at its own URL so search engines can index it: / and /de/
export function pathForLocale(code) {
  return code === defaultLocale ? base : `${base}${code}/`
}

export function localeFromPath(pathname) {
  const segment = pathname.slice(base.length).split('/')[0]
  return segment in messages ? segment : defaultLocale
}

const locale = ref(isBrowser ? localeFromPath(location.pathname) : defaultLocale)
const t = computed(() => messages[locale.value])

if (isBrowser) {
  watch(locale, (code) => {
    const { meta } = messages[code]
    document.documentElement.lang = code
    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
  })
  window.addEventListener('popstate', () => {
    locale.value = localeFromPath(location.pathname)
  })
}

function setLocale(code) {
  if (code === locale.value) return
  locale.value = code
  if (isBrowser) history.pushState(null, '', pathForLocale(code))
}

export function useI18n() {
  return { t, locale, setLocale }
}
