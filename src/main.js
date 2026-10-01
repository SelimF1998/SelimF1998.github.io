import '@fontsource-variable/inter'
import './style.css'
import { createApp } from './app'

const el = document.getElementById('app')
createApp({ hydrate: el.hasChildNodes() }).mount(el)
