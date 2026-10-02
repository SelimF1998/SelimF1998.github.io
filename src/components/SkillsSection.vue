<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import Section from './Section.vue'
import Tags from './Tags.vue'
import Icon from './Icon.vue'
import { useI18n } from '../i18n'
import { skillGroups, featuredSkills, spokenLanguages } from '../data/profile'

const { t } = useI18n()

const open = ref(false)

const groups = computed(() => [
  ...skillGroups.map((g) => ({ id: g.id, title: t.value.skills.groups[g.id], items: g.items })),
  {
    id: 'spoken',
    title: t.value.skills.spokenTitle,
    items: spokenLanguages.map((l) => `${t.value.skills.spoken[l.id]} · ${t.value.skills.levels[l.level] ?? l.level}`),
  },
])

const hiddenCount = skillGroups.flatMap((g) => g.items).length - featuredSkills.length

// Enter duration covers the last staggered element (35ms apart, 360ms each).
const STEP = 35
const durations = {
  compact: { enter: 360 + featuredSkills.length * STEP, leave: 160 },
  full: { enter: 360 + skillGroups.length * STEP, leave: 160 },
}

// Animate the container height between the two views. Null until mounted, so the
// prerendered HTML keeps its natural height.
const inner = ref(null)
const height = ref(null)
let observer
onMounted(() => {
  observer = new ResizeObserver(() => (height.value = inner.value.offsetHeight))
  observer.observe(inner.value)
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <!-- While collapsed, a click anywhere in the section expands it (keyboard users have the buttons) -->
  <Section
    id="skills"
    :title="t.skills.title"
    class="group/skills"
    :class="!open && 'cursor-pointer'"
    @click="open = true"
  >
    <template #action>
      <button
        type="button"
        class="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        :class="!open && 'group-hover/skills:text-neutral-900 dark:group-hover/skills:text-neutral-100'"
        :aria-expanded="open"
        aria-controls="skills-full"
        @click.stop="open = !open"
      >
        {{ open ? t.skills.showLess : t.skills.showAll }}
        <Icon name="chevron-down" class="size-4 transition-transform duration-300" :class="open && 'rotate-180'" />
      </button>
    </template>

    <!-- -m-2/p-2 leaves room so the blur isn't clipped by overflow-hidden -->
    <div
      class="-m-2 overflow-hidden p-2 transition-[height] duration-[400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] motion-reduce:transition-none"
      :style="height != null ? { height: `${height + 16}px` } : null"
    >
      <div ref="inner" class="relative">
        <Transition name="swap" :duration="durations.compact">
          <Tags v-show="!open" :items="featuredSkills" :stagger="0">
            <li class="stagger" :style="{ '--i': featuredSkills.length }">
              <button
                type="button"
                class="rounded-full px-2.5 py-0.5 text-xs text-neutral-500 ring-1 ring-neutral-200 ring-inset group-hover/skills:bg-neutral-100 group-hover/skills:text-neutral-900 dark:text-neutral-400 dark:ring-neutral-800 dark:group-hover/skills:bg-neutral-800 dark:group-hover/skills:text-neutral-100"
              >
                {{ t.skills.more(hiddenCount) }}
              </button>
            </li>
          </Tags>
        </Transition>

        <Transition name="swap" :duration="durations.full">
          <dl v-show="open" id="skills-full" class="space-y-4">
            <div
              v-for="(group, i) in groups"
              :key="group.id"
              class="stagger sm:grid sm:grid-cols-[9rem_1fr] sm:gap-6"
              :style="{ '--i': i }"
            >
              <dt class="mb-1.5 text-sm text-neutral-500 sm:mb-0 sm:pt-0.5 dark:text-neutral-400">{{ group.title }}</dt>
              <dd><Tags :items="group.items" /></dd>
            </div>
          </dl>
        </Transition>
      </div>
    </div>
  </Section>
</template>
