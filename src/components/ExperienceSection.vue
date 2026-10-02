<script setup>
import { computed } from 'vue'
import Section from './Section.vue'
import Collapsible from './Collapsible.vue'
import Tags from './Tags.vue'
import { useI18n } from '../i18n'
import { jobs } from '../data/profile'

const { t, locale } = useI18n()

const parse = (ym) => ym.split('-').map(Number)

const items = computed(() => {
  const exp = t.value.experience
  const fmt = new Intl.DateTimeFormat(locale.value, { month: 'short', year: 'numeric', timeZone: 'UTC' })
  const label = (ym) => {
    const [y, m] = parse(ym)
    return fmt.format(new Date(Date.UTC(y, m - 1, 1)))
  }

  return jobs.map((job) => {
    const [sy, sm] = parse(job.start)
    const now = new Date()
    const [ey, em] = job.end ? parse(job.end) : [now.getFullYear(), now.getMonth() + 1]
    const months = (ey - sy) * 12 + (em - sm) + 1 // inclusive, like LinkedIn

    return {
      ...job,
      ...exp.jobs[job.id],
      period: `${label(job.start)} – ${job.end ? label(job.end) : exp.present}`,
      duration: exp.duration(Math.floor(months / 12), months % 12),
    }
  })
})
</script>

<template>
  <Section id="experience" :title="t.experience.title">
    <ul class="-mx-2">
      <li v-for="job in items" :key="job.id">
        <Collapsible
          :logo="job.logo"
          :name="job.company"
          :title="job.role"
          :subtitle="job.company"
          :aside="job.period"
        >
          <p class="text-sm text-neutral-500 dark:text-neutral-400">
            <span class="sm:hidden">{{ job.period }} · </span>{{ job.duration }} · {{ job.location }} ·
            {{ job.stack }}
          </p>
          <ul
            class="mt-3 list-disc space-y-1.5 pl-4 leading-relaxed text-neutral-700 marker:text-neutral-400 dark:text-neutral-300 dark:marker:text-neutral-600"
          >
            <li v-for="(bullet, j) in job.bullets" :key="j">{{ bullet }}</li>
          </ul>
          <Tags :items="job.tech" class="mt-4" />
        </Collapsible>
      </li>
    </ul>
  </Section>
</template>
