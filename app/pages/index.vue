<template>
  <div>
    <section class="heroHighlightsWrap">
      <section id="home" class="scrollTarget">
        <HeroSection />
      </section>

      <section id="KeyHighlights" class="scrollTarget">
        <KeyHighlights />
      </section>
    </section>

    <section id="about" class="scrollTarget">
      <AboutProgram />
    </section>

    <section id="who-should-attend" class="scrollTarget">
      <WhoShouldAttend />
    </section>

    <AdditionalCertificationTrack />

    <section id="program-structure" class="scrollTarget">
      <ProgramStructure />
    </section>

    <section id="curriculum" class="scrollTarget">
      <CurriculumSection />
    </section>

    <section id="faculty" class="scrollTarget">
      <FacultySection />
    </section>

    <section id="certification" class="scrollTarget">
      <CertificationSection />
    </section>

  
    <EnrollmentSection />
    <FeeStructure />
  </div>
</template>

<script setup>
import '@/assets/css/home.css'

import HeroSection from '@/components/sections/HeroSection.vue'
import KeyHighlights from '@/components/sections/KeyHighlights.vue'
import AboutProgram from '@/components/sections/AboutProgram.vue'
import AdditionalCertificationTrack from '@/components/sections/AdditionalCertificationTrack.vue'
import WhoShouldAttend from '@/components/sections/WhoShouldAttend.vue'
import ProgramStructure from '@/components/sections/ProgramStructure.vue'
import CurriculumSection from '@/components/sections/CurriculumSection.vue'
import FacultySection from '@/components/sections/FacultySection.vue'
import CertificationSection from '@/components/sections/CertificationSection.vue'
import EnrollmentSection from '@/components/sections/EnrollmentSection.vue'
import FeeStructure from '@/components/sections/FeeStructure.vue'
</script>
