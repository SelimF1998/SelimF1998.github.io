import { ref, watch } from 'vue'

// index.html sets the initial class before first paint; we just read it back.
// Components style light/dark with `dark:` classes rather than this ref, so the
// prerendered HTML always matches on hydration.
const isDark = ref(typeof document !== 'undefined' && document.documentElement.classList.contains('dark'))

watch(isDark, (dark) => {
  document.documentElement.classList.toggle('dark', dark)
  try {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  } catch {}
})

export function useTheme() {
  return { isDark, toggle: () => (isDark.value = !isDark.value) }
}
