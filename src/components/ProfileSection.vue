<script setup>
import { computed } from 'vue'
import Icon from './Icon.vue'
import { useI18n } from '../i18n'
import { profile } from '../data/profile'

const { t } = useI18n()

const contacts = computed(() => [
  { key: 'location', icon: 'map-pin', value: t.value.profile.location },
  { key: 'email', icon: 'mail', value: profile.email, href: `mailto:${profile.email}` },
  { key: 'linkedin', icon: 'linkedin', value: 'LinkedIn', href: profile.linkedin, external: true },
  { key: 'github', icon: 'github', value: 'GitHub', href: profile.github, external: true },
  { key: 'phone', icon: 'phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
])
</script>

<template>
  <section aria-labelledby="profile-name" class="pt-8 pb-10 sm:pt-12">
    <div class="flex items-center gap-5">
      <img
        v-if="profile.photo"
        :src="profile.photo"
        :alt="profile.name"
        width="80"
        height="80"
        class="size-20 shrink-0 rounded-2xl object-cover"
      />
      <!-- Photo placeholder: set `photo` in src/data/profile.js -->
      <span
        v-else
        aria-hidden="true"
        class="grid size-20 shrink-0 place-items-center rounded-2xl bg-neutral-100 text-xl font-medium text-neutral-400 dark:bg-neutral-800 dark:text-neutral-500"
      >
        {{ profile.initials }}
      </span>

      <div class="min-w-0">
        <h1 id="profile-name" class="text-2xl font-semibold tracking-tight sm:text-3xl">{{ profile.name }}</h1>
        <p class="mt-1 text-neutral-500 dark:text-neutral-400">{{ t.profile.role }}</p>
      </div>
    </div>

    <address class="mt-6 not-italic">
      <ul class="flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <li v-for="c in contacts" :key="c.key">
          <component
            :is="c.href ? 'a' : 'span'"
            :href="c.href"
            :target="c.external ? '_blank' : undefined"
            :rel="c.external ? 'me noopener noreferrer' : undefined"
            class="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400"
            :class="c.href && 'underline-offset-4 hover:text-neutral-900 hover:underline dark:hover:text-neutral-100'"
          >
            <Icon :name="c.icon" class="size-4 text-neutral-400 dark:text-neutral-500" />
            <span class="sr-only">{{ t.profile.labels[c.key] }}:</span>
            {{ c.value }}
          </component>
        </li>
      </ul>
    </address>
  </section>
</template>
