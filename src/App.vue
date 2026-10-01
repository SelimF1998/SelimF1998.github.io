<script setup>
import AppHeader from './components/AppHeader.vue'
import ProfileSection from './components/ProfileSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="mx-auto max-w-2xl px-4 sm:px-6">
    <AppHeader />
    <main>
      <ProfileSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
    <AppFooter />
  </div>
</template>
