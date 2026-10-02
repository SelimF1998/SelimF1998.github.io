import { clarityId } from './data/profile'

// Microsoft Clarity analytics; only loaded in production builds (see main.js).
export function loadClarity() {
  if (!clarityId) return
  window.clarity ||= function () {
    ;(window.clarity.q ||= []).push(arguments)
  }
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.clarity.ms/tag/${clarityId}`
  document.head.appendChild(script)
}
