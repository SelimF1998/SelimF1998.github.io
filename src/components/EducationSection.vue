<script setup>
import Section from './Section.vue'
import Logo from './Logo.vue'
import { useI18n } from '../i18n'
import { education } from '../data/profile'

const { t } = useI18n()
</script>

<template>
  <Section id="education" :title="t.education.title">
    <ul class="space-y-4">
      <li v-for="item in education" :key="item.id" class="flex items-center gap-4">
        <Logo :src="item.logo" :name="t.education.items[item.id].school" />
        <span class="min-w-0 flex-1">
          <span class="block font-medium">{{ t.education.items[item.id].degree }}</span>
          <span class="block text-sm text-neutral-500 dark:text-neutral-400">
            {{ t.education.items[item.id].school }}
            <span class="sm:hidden"> · {{ t.education.items[item.id].period }}</span>
          </span>
        </span>
        <span class="hidden shrink-0 text-sm text-neutral-500 tabular-nums sm:block dark:text-neutral-400">
          {{ t.education.items[item.id].period }}
        </span>
      </li>
    </ul>
  </Section>
</template>
