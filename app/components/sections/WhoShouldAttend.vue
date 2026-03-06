<script setup>
import '@/assets/css/components/whoshouldattend.css'

const attendees = [
  { label: 'Orthopedic Specialists', icon: '/img/wsa/orthopedic.png' },
  { label: 'Dermatologists', icon: '/img/wsa/dermatologists.png' },
  { label: 'Neurologists', icon: '/img/wsa/neurologists.png' },
  { label: 'Family Medicine Specialists', icon: '/img/wsa/family-medicine.png' },
  { label: 'General Practitioners (GPs)', icon: '/img/wsa/gp.png' },
  { label: 'Plastic Surgeons', icon: '/img/wsa/plastic-surgeons.png' },
  { label: 'Neurosurgeons', icon: '/img/wsa/neurosurgeons.png' },
  { label: 'Pathologists', icon: '/img/wsa/pathologists.png' },
  { label: 'Medical Laboratory PhDs', icon: '/img/wsa/medical-lab.png' },
]
</script>

<template>
  <section class="wsaSec">
    <div class="wsaSec__wrap">
      <h2 class="wsaSec__title">
        Who Should <span>Attend</span>
      </h2>

      <p class="wsaSec__sub">
        This course is ideal for physicians seeking to integrate regenerative medicine<br />
        into their practice
      </p>

      <div class="wsaSec__grid">
        <div v-for="(a, i) in attendees" :key="i" class="wsaSecCard">
          <div class="wsaSecCard__icon" aria-hidden="true">
            <NuxtImg
              v-if="a.icon"
              class="wsaSecCard__img"
              :src="a.icon"
              :alt="a.label"
              width="26"
              height="26"
              sizes="26px"
            />
            <span v-else class="wsaSecDot" aria-hidden="true"></span>
          </div>

          <div class="wsaSecCard__text">
            {{ a.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>