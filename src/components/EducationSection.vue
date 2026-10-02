<script setup>
import Section from './Section.vue'
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>

<template>
  <Section id="education" :title="t.education.title">
    <ul class="space-y-3">
      <li
        v-for="item in t.education.items"
        :key="item.degree"
        class="flex flex-col text-sm sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
      >
        <span>
          <span class="font-medium">{{ item.degree }}</span>
          <span class="text-neutral-500 dark:text-neutral-400">, {{ item.school }}</span>
        </span>
        <span class="shrink-0 text-neutral-500 tabular-nums dark:text-neutral-400">{{ item.period }}</span>
      </li>
    </ul>
  </Section>
</template>
