<script setup>
import '@/assets/css/components/aboutprogram.css'
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <section class="apSec">
    <div class="apSec__grid">
      <!-- LEFT IMAGE -->
      <div class="apSec__media">
        <NuxtImg
          class="apSec__singleImg"
          src="/img/about-collage.png"
          alt="About Program Doctors"
          width="542"
          sizes="(max-width: 1024px) 100vw, 542px"
        />
      </div>

      <!-- RIGHT CONTENT -->
      <div class="apSec__content">
        <h2 class="apSec__title">
          ABOUT THE <span>PROGRAM</span>
        </h2>

        <p class="apSec__text">
          The American Spine Centre proudly offers the ABRM Certification Course, a rigorous, evidence-based
          educational program designed to equip physicians and healthcare professionals with advanced expertise in
          regenerative medicine. As an official ABRM and ASRM affiliate in Dubai, we deliver the same world-class
          curriculum trusted by regenerative medicine practitioners globally.
        </p>

        <p class="apSec__text">
          Whether you’re an orthopedic specialist, neurologist, dermatologist, scientist, clinical pathologist, general practitioner or medical laboratory Ph.D, this
          certification will transform your clinical practice and position you at the forefront of this
          revolutionary field.
        </p>

        <!-- Buttons -->
        <div class="apSec__actions">
          <BaseButton 
          as="nuxt-link" 
          to="#start" 
          variant="primary" 
          size="sm" 
          icon>
            Start Your RM Journey Today
          </BaseButton>

          <BaseButton 
          as="nuxt-link"
          to="#program-structure"
          variant="outline"
          size="sm"
          icon>
            View Course Structure
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>