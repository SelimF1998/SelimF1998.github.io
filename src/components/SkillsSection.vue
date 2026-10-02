<script setup>
import { computed } from 'vue'
import Section from './Section.vue'
import Collapsible from './Collapsible.vue'
import Tags from './Tags.vue'
import { useI18n } from '../i18n'
import { skillGroups, spokenLanguages } from '../data/profile'

const { t } = useI18n()

const groups = computed(() => [
  ...skillGroups.map((g) => ({ id: g.id, title: t.value.skills.groups[g.id], items: g.items })),
  {
    id: 'spoken',
    title: t.value.skills.spokenTitle,
    items: spokenLanguages.map((l) => `${t.value.skills.spoken[l.id]} · ${t.value.skills.levels[l.level] ?? l.level}`),
  },
])
</script>

<template>
  <Section id="skills" :title="t.skills.title">
    <ul class="-mx-2">
      <li v-for="group in groups" :key="group.id">
        <Collapsible :title="group.title">
          <Tags :items="group.items" />
        </Collapsible>
      </li>
    </ul>
  </Section>
</template>
