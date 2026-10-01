<script setup>
defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
})
</script>

<template>
  <section :id="id" :aria-labelledby="`${id}-title`" class="border-t border-neutral-200 py-10 dark:border-neutral-800">
    <h2 :id="`${id}-title`" class="text-sm font-semibold">{{ title }}</h2>
    <div class="mt-5">
      <slot />
    </div>
  </section>
</template>
