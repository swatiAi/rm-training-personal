<script setup>
import '@/assets/css/components/curriculumsection.css'
import BaseButton from '@/components/ui/BaseButton.vue'

const modules = [
  { n: 1, t: 'History of Regenerative Medicine' },
  { n: 2, t: 'ABRM Nomenclature & Concepts' },
  { n: 3, t: 'Regenerative Biologics' },
  { n: 4, t: 'BRM Basic Science' },
  { n: 5, t: 'Musculoskeletal RM' },
  { n: 6, t: 'RM Gene Therapy' },
  { n: 7, t: 'RM Immunotherapy' },
  { n: 8, t: 'RM Hematology' },
  { n: 9, t: 'RM Cardiology' },
  { n: 10, t: 'RM Gastroenterology' },
  { n: 11, t: 'RM Endocrinology' },
  { n: 12, t: 'RM Neurology' },
  { n: 13, t: 'RM Regulatory Science' },
  { n: 14, t: 'RM Ophthalmology' },
  { n: 15, t: 'Tissue Engineering' },
  { n: 16, t: 'RM Pharmacology' },
  { n: 17, t: 'RM Urology & Gynecology' },
  { n: 18, t: 'RM Pulmonary Medicine' },
]

const module19 = { n: 19, t: 'Aesthetic & Plastic Reconstructive Regenerative Medicine' }
</script>

<template>
  <section class="curSec" id="curriculum">
    <div class="curSec__wrap">
      <!-- Banner -->
      <div class="curSecBanner">
        <NuxtImg
          class="curSecBanner__img"
          src="/img/curriculum-banner.png"
          alt="Curriculum"
          width="3500"
          height="1100"
          sizes="(max-width: 640px) 100vw, 1100px"
        />
        <div class="curSecBanner__overlay" aria-hidden="true" />

        <div class="curSecBanner__text">
          <h2 class="curSecBanner__title">CURRICULUM</h2>

          <p class="curSecBanner__sub">
            19 Core Modules Offering Comprehensive Coverage of Regenerative Medicine
          </p>

          <p class="curSecBanner__desc">
            Our curriculum is based on the official ABRM standards and covers the full spectrum of<br />
            regenerative medicine applications:
          </p>
        </div>
      </div>

      <!-- Modules -->
      <div class="curSecGrid">
        <div v-for="m in modules" :key="m.n" class="curSecItem">
          <div class="curSecItem__num">{{ m.n }}</div>
          <div class="curSecItem__text">{{ m.t }}</div>
        </div>
      </div>

      <!-- Module 19 -->
      <div class="curSecCenter">
        <div class="curSecItem curSecItem--wide">
          <div class="curSecItem__num">{{ module19.n }}</div>
          <div class="curSecItem__text">{{ module19.t }}</div>
        </div>
      </div>

      <p class="curSecNote">
        Additional specialty modules are incorporated based on emerging trends and<br class="curSecBr" />
        participant needs.
      </p>

      <div class="curSecActions">
        <BaseButton
          as="nuxt-link"
          :to="'#enroll'"
          variant="primary"
          size="regular"
          :icon="true"
          class="curSecBtnFix"
        >
          Enroll Now
        </BaseButton>

        <BaseButton
          as="nuxt-link"
          :to="'#faculty'"
          variant="outline"
          size="regular"
          :icon="true"
          class="curSecBtnFix"
        >
          Meet the Faculty
        </BaseButton>
      </div>
    </div>
  </section>
</template>