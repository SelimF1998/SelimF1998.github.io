import { createApp as createClientApp, createSSRApp } from 'vue'
import App from './App.vue'

// Prerendered pages are hydrated; the dev server (empty #app) does a normal mount.
export function createApp({ hydrate = false } = {}) {
  return (hydrate ? createSSRApp : createClientApp)(App)
}
