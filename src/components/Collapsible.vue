<script setup>
import Logo from './Logo.vue'
import Icon from './Icon.vue'

// Row with a logo, title and subtitle that expands to show the default slot.
// Native <details>: works without JS and the content stays in the HTML for search engines.
defineProps({
  logo: { type: String, default: null },
  name: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  aside: { type: String, default: '' },
})
</script>

<template>
  <details class="group">
    <summary
      class="flex cursor-pointer list-none items-center gap-4 rounded-md px-2 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-900"
    >
      <Logo :src="logo" :name="name" />
      <span class="min-w-0 flex-1">
        <span class="block font-medium">{{ title }}</span>
        <span v-if="subtitle" class="block text-sm text-neutral-500 dark:text-neutral-400">{{ subtitle }}</span>
      </span>
      <span v-if="aside" class="hidden shrink-0 text-sm text-neutral-500 tabular-nums sm:block dark:text-neutral-400">
        {{ aside }}
      </span>
      <Icon
        name="chevron-down"
        class="size-4 shrink-0 text-neutral-400 transition-transform duration-150 group-open:rotate-180"
      />
    </summary>

    <div class="pr-2 pb-5 pl-16">
      <slot />
    </div>
  </details>
</template>
