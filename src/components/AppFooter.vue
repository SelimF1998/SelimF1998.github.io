<script setup>
import { profile } from '../data/profile'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-neutral-200 py-8 text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
    © {{ year }} {{ profile.name }}
  </footer>
</template>
