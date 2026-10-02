<script setup>
// `stagger`: index offset for the staggered entrance (see .swap-* in style.css); null disables it.
defineProps({
  items: { type: Array, required: true },
  stagger: { type: Number, default: null },
})
</script>

<template>
  <ul class="flex flex-wrap gap-1.5">
    <li
      v-for="(item, i) in items"
      :key="item"
      class="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
      :class="stagger != null && 'stagger'"
      :style="stagger != null ? { '--i': stagger + i } : null"
    >
      {{ item }}
    </li>
    <slot />
  </ul>
</template>
