<script setup>
import '@/assets/css/components/keyhighlights.css'
import BaseButton from '@/components/ui/BaseButton.vue'

const highlights = [
  {
    title: 'Limited Enrollment',
    desc: 'Only 40 candidates per cohort (20 physical + 20 virtual)',
    icon: '/img/kh/enrollment.png'
  },
  {
    title: 'Flexible Format',
    desc: 'Hybrid learning with virtual and in-person options',
    icon: '/img/kh/hybrid.png'
  },
  {
    title: 'Board Certification',
    desc: 'Earn globally recognized ABRM Diplomat credentials',
    icon: '/img/kh/board.png'
  },
  {
    title: 'Expert Faculty',
    desc: 'Learn from 10+ internationally recognized specialists',
    icon: '/img/kh/faculty.png'
  }
]
</script>

<template>
  <section class="khSec">
    <div class="khSec__wrap">

      <img src="/img/dots.png" class="khDots khDots--left" alt="" aria-hidden="true" />
      <img src="/img/dots.png" class="khDots khDots--right" alt="" aria-hidden="true" />

      <h2 class="khSec__title">
        Key <span class="text-gradient">Highlights</span>
      </h2>

      <div class="khSec__row">
        <div v-for="(h, i) in highlights" :key="i" class="khSecCard">
          <div class="khSecCard__icon">
            <img :src="h.icon" alt="" class="khSecIco" />
          </div>

          <div class="khSecCard__divider" aria-hidden="true"></div>

          <div class="khSecCard__text">
            <div class="khSecCard__title">{{ h.title }}</div>
            <div class="khSecCard__desc">{{ h.desc }}</div>
          </div>
        </div>
      </div>

      <div class="khSec__actions">
        <BaseButton
          as="nuxt-link"
          to="#enroll"
          variant="primary"
          size="large"
          shape="rounded"
          :icon="true"
        >
          Enroll Now
        </BaseButton>

        <BaseButton
          as="nuxt-link"
          to="#program-structure"
          variant="outline"
          size="large"
          shape="rounded"
          :icon="true"
        >
          View Course Structure
        </BaseButton>
      </div>
    </div>
  </section>
</template>