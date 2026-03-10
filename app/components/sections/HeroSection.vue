<template>
  <section class="hero">
    <div class="wrap">
      <div class="heroGrid">
        <div class="left">
          <div class="certified">
            <span class="certified__text">Certified By</span>

            <div class="certified__icons">
              <NuxtImg
                class="certified__icon"
                src="/img/badge-1.png"
                alt="Badge 1"
                width="100"
                height="100"
                sizes="100px"
              />
              <NuxtImg
                class="certified__icon"
                src="/img/badge-2.png"
                alt="Badge 2"
                width="100"
                height="100"
                sizes="100px"
              />
              <NuxtImg
                class="certified__icon"
                src="/img/badge-3.png"
                alt="Badge 3"
                width="100"
                height="100"
                sizes="100px"
              />
            </div>
          </div>

          <h1 class="title">
            <span class="title__gradient">Become a Board-</span><br />
            <span class="title__gradient">Certified Diplomat</span>
          </h1>

          <p class="subtitle">in Regenerative Medicine</p>

          <p class="desc">
            Master regenerative medicine through a comprehensive 14-week program, delivered in partnership with the
            American Board of Regenerative Medicine (ABRM) - American Society of Regenerative Medicine (ASRM).
          </p>
        </div>

        <div class="right">
          <div class="art">
            <NuxtImg
              class="doctor"
              src="/img/hero-doctor.png"
              alt="Doctor"
              width="560"
              height="533"
              sizes="(max-width: 640px) 100vw, (max-width: 1023px) 560px, 560px"
              priority
            />

            <div class="pill">
              <div class="pill__icon">
                <Icon class="pill__iconSvg" name="ic:round-star" mode="svg" />
              </div>

              <div class="pill__text">
                ABRM CERTIFICATION COURSE
              </div>
            </div>

            <div class="card">
              <div class="avatars">
                <NuxtImg class="avatar" src="/img/avatar-1.png" alt="Avatar 1" width="32" height="32" sizes="32px" />
                <NuxtImg class="avatar" src="/img/avatar-2.png" alt="Avatar 2" width="32" height="32" sizes="32px" />
                <NuxtImg class="avatar" src="/img/avatar-3.png" alt="Avatar 3" width="32" height="32" sizes="32px" />
                <NuxtImg class="avatar" src="/img/avatar-4.png" alt="Avatar 4" width="32" height="32" sizes="32px" />
              </div>

              <p class="card__text">
                Become a Board-Certified Diplomat in<br />Regenerative Medicine
              </p>
            </div>
          </div>
        </div>

        <div class="ctaRow">
          <BaseButton variant="primary" size="large" shape="rounded" icon>
            Book an appointment
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import '@/assets/css/components/herosection.css'
import BaseButton from '@/components/ui/BaseButton.vue'
</script>