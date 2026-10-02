<script setup>
import { ref } from 'vue'
import Logo from './Logo.vue'
import Icon from './Icon.vue'

// Row with an optional logo, a title and subtitle that expands to show the default slot.
// Native <details>: works without JS and the content stays in the HTML for search engines.
// The logo is shown when `name` is set (`logo` null renders the placeholder).
defineProps({
  logo: { type: String, default: null },
  name: { type: String, default: '' },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  aside: { type: String, default: '' },
})

// With JS, the toggle is animated like the skills section: the height eases open while the
// content's children rise in from below, unblurring one after another (see .swap-* in style.css).
const EASE = 'cubic-bezier(0.2, 0.8, 0.2, 1)'
const STEP = 35

const details = ref(null)
const wrapper = ref(null)
const body = ref(null)
const expanded = ref(false) // drives the chevron, flips as soon as the toggle starts
let running = []

function stop() {
  running.forEach((a) => a.cancel())
  running = []
}

function animate(el, keyframes, options) {
  const a = el.animate(keyframes, { easing: EASE, fill: 'both', ...options })
  running.push(a)
  return a
}

function toggle() {
  const el = details.value
  const from = wrapper.value.getBoundingClientRect().height
  stop()

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.open = expanded.value = !expanded.value
    return
  }

  if (!expanded.value) {
    expanded.value = true
    el.open = true
    const to = body.value.offsetHeight
    animate(wrapper.value, [{ height: `${from}px` }, { height: `${to}px` }], { duration: 400 })
    ;[...body.value.children].forEach((child, i) =>
      animate(
        child,
        [
          { opacity: 0, transform: 'translateY(8px)', filter: 'blur(6px)' },
          { opacity: 1, transform: 'none', filter: 'none' },
        ],
        { duration: 360, delay: i * STEP },
      ),
    )
    Promise.all(running.map((a) => a.finished)).then(stop, () => {})
  } else {
    expanded.value = false
    animate(
      body.value,
      [
        { opacity: 1, transform: 'none', filter: 'none' },
        { opacity: 0, transform: 'translateY(-4px)', filter: 'blur(4px)' },
      ],
      { duration: 160, easing: 'ease-in' },
    )
    animate(wrapper.value, [{ height: `${from}px` }, { height: '0px' }], { duration: 300 })
    Promise.all(running.map((a) => a.finished)).then(() => {
      el.open = false
      stop()
    }, () => {})
  }
}
</script>

<template>
  <!-- @toggle keeps the chevron in sync when the browser opens it itself (find in page) -->
  <details ref="details" class="group" @toggle="running.length || (expanded = details.open)">
    <summary
      class="flex cursor-pointer list-none items-center gap-4 rounded-md px-2 py-2.5 hover:bg-neutral-50 dark:hover:bg-neutral-900"
      @click.prevent="toggle"
    >
      <Logo v-if="name" :src="logo" :name="name" />
      <span class="min-w-0 flex-1">
        <span class="block font-medium">{{ title }}</span>
        <span v-if="subtitle" class="block text-sm text-neutral-500 dark:text-neutral-400">{{ subtitle }}</span>
      </span>
      <span v-if="aside" class="hidden shrink-0 text-sm text-neutral-500 tabular-nums sm:block dark:text-neutral-400">
        {{ aside }}
      </span>
      <Icon
        name="chevron-down"
        class="size-4 shrink-0 text-neutral-400 transition-transform duration-300"
        :class="expanded && 'rotate-180'"
      />
    </summary>

    <!-- overflow-hidden only clips while the height animates; it's 0 when closed anyway -->
    <div ref="wrapper" class="overflow-hidden">
      <div ref="body" class="pt-3 pr-2 pb-5" :class="name ? 'pl-16' : 'pl-2'">
        <slot />
      </div>
    </div>
  </details>
</template>
