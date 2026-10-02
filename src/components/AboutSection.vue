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
  </Section>
</template>
