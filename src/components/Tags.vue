<script setup>
defineProps({ items: { type: Array, required: true } })
</script>

<template>
  <ul class="flex flex-wrap gap-1.5">
    <li
      v-for="item in items"
      :key="item"
      class="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
    >
      {{ item }}
    </li>
  </ul>
</template>
