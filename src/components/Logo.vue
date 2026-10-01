<script setup>
// Company / project logo. Without `src` it renders a plain placeholder of the same size.
defineProps({
  src: { type: String, default: null },
  name: { type: String, required: true },
})
</script>

<template>
  <img
    v-if="src"
    :src="src"
    :alt="name"
    width="40"
    height="40"
    loading="lazy"
    class="size-10 shrink-0 rounded-md object-cover outline -outline-offset-1 outline-black/10 dark:outline-white/10"
  />
  <span
    v-else
    aria-hidden="true"
    class="grid size-10 shrink-0 place-items-center rounded-md bg-neutral-100 text-sm font-medium text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400"
  >
    {{ name.charAt(0) }}
  </span>
</template>
