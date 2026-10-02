import '@fontsource-variable/inter'
import './style.css'
import { createApp } from './app'
import { loadClarity } from './clarity'

const el = document.getElementById('app')
createApp({ hydrate: el.hasChildNodes() }).mount(el)

if (import.meta.env.PROD) loadClarity()
