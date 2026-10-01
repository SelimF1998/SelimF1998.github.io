<script setup>
import { computed } from 'vue'
import Section from './Section.vue'
import Tags from './Tags.vue'
import { useI18n } from '../i18n'
import { skillGroups, spokenLanguages } from '../data/profile'

const { t } = useI18n()

const rows = computed(() => [
  ...skillGroups.map((g) => ({ label: t.value.skills.groups[g.id], items: g.items })),
  {
    label: t.value.skills.spokenTitle,
    items: spokenLanguages.map(
      (l) => `${t.value.skills.spoken[l.id]} ${[l.level, l.cert].filter(Boolean).join(' · ')}`,
    ),
  },
])
</script>

<template>
  <Section id="skills" :title="t.skills.title">
    <dl class="space-y-4 text-sm">
      <div v-for="row in rows" :key="row.label" class="sm:grid sm:grid-cols-[9rem_1fr] sm:gap-6">
        <dt class="mb-1.5 text-neutral-500 sm:mb-0 sm:pt-0.5 dark:text-neutral-400">{{ row.label }}</dt>
        <dd><Tags :items="row.items" /></dd>
      </div>
    </dl>
  </Section>
</template>
