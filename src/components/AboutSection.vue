<script setup>
import Section from './Section.vue'
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>

<template>
  <Section id="about" :title="t.about.title">
    <div class="space-y-4 leading-7 text-neutral-700 dark:text-neutral-300">
      <p v-for="(paragraph, i) in t.about.paragraphs" :key="i">{{ paragraph }}</p>
    </div>

    <h3 class="mt-8 text-sm font-semibold">{{ t.about.educationTitle }}</h3>
    <ul class="mt-3 space-y-3">
      <li
        v-for="item in t.about.education"
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
