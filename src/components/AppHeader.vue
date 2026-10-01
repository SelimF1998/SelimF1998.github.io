<script setup>
import Icon from './Icon.vue'
import { useI18n, locales, pathForLocale } from '../i18n'
import { useTheme } from '../composables/useTheme'

const { t, locale, setLocale } = useI18n()
const { toggle } = useTheme()
</script>

<template>
  <header class="flex h-16 items-center justify-between">
    <p class="text-sm font-semibold">{{ t.nav.brand }}</p>

    <div class="flex items-center gap-4 text-sm">
      <!-- Real links so crawlers discover every language version -->
      <nav :aria-label="t.nav.language" class="flex items-center gap-1">
        <template v-for="(l, i) in locales" :key="l.code">
          <span v-if="i > 0" aria-hidden="true" class="text-neutral-300 dark:text-neutral-700">/</span>
          <a
            :href="pathForLocale(l.code)"
            :hreflang="l.code"
            :lang="l.code"
            :title="l.label"
            :aria-current="locale === l.code ? 'page' : undefined"
            class="px-1 py-0.5"
            :class="
              locale === l.code
                ? 'font-medium text-neutral-900 dark:text-neutral-100'
                : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
            "
            @click.prevent="setLocale(l.code)"
          >
            {{ l.short }}
          </a>
        </template>
      </nav>

      <button
        type="button"
        :aria-label="t.nav.theme"
        :title="t.nav.theme"
        class="grid size-8 place-items-center rounded-md text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
        @click="toggle"
      >
        <Icon name="moon" class="size-4 dark:hidden" />
        <Icon name="sun" class="hidden size-4 dark:block" />
      </button>
    </div>
  </header>
</template>
