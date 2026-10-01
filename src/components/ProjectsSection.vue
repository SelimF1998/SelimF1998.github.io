<script setup>
import Section from './Section.vue'
import Collapsible from './Collapsible.vue'
import Tags from './Tags.vue'
import { useI18n } from '../i18n'
import { projects } from '../data/profile'

const { t } = useI18n()
</script>

<template>
  <Section id="projects" :title="t.projects.title">
    <ul class="-mx-2">
      <li v-for="project in projects" :key="project.id">
        <Collapsible
          :logo="project.logo"
          :name="project.name"
          :title="project.name"
          :subtitle="t.projects.items[project.id].summary"
        >
          <p class="leading-relaxed text-neutral-700 dark:text-neutral-300">
            {{ t.projects.items[project.id].description }}
          </p>
          <Tags :items="project.tech" class="mt-4" />
          <a
            v-if="project.repo"
            :href="project.repo"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-4 inline-block text-sm text-neutral-600 underline underline-offset-4 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            {{ t.projects.source }}
          </a>
        </Collapsible>
      </li>
    </ul>
  </Section>
</template>
