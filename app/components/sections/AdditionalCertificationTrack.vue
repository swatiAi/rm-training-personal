<script setup>
import '@/assets/css/components/additionalcertificationtrack.css'
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <section class="actSec">
    <div class="actSec__wrap">

      <div class="actSec__box">
        <h2 class="actSec__title">
          Additional <span>Certification Track</span>
        </h2>

        <div class="actSec__grid">

          <!-- IMAGE -->
          <div class="actSec__mediaFrame">
            <NuxtImg
              src="/img/additional-track.png"
              alt="Additional Certification"
              width="600"
              height="300"
              sizes="(max-width: 980px) 100vw, 560px"
            />
          </div>

          <!-- TEXT -->
          <div>
            <p class="actSec__text">
              Allied Health Professionals & Pharmacists are eligible
              for the RMCC (Regenerative Medicine Clinical
              Certification) — a specialized credential designed for
              non-physician healthcare providers.
            </p>

            <!-- BUTTON -->
            <BaseButton
              as="nuxt-link"
              to="#certification"
              variant="primary"
              size="regular"
              icon
            >
              Enroll Now
            </BaseButton>

          </div>

        </div>
      </div>

    </div>
  </section>
</template>