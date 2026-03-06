<script setup>
import '@/assets/css/components/navbar.css'
import { ref } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Who Should Attend', href: '#who-should-attend' },
  { label: 'Program Structure', href: '#program-structure' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Distinguished Faculty', href: '#faculty' },
  { label: 'Certification Pathway', href: '#certification' },
]

const open = ref(false)

function onNavClick() {
  open.value = false
}
</script>

<template>
  <header class="nb">
    <div class="nb__wrap">
      <div class="nb__inner">
        <!-- Left: Logo -->
        <NuxtLink to="/" class="nb__logo" aria-label="Go to home">
          <NuxtImg
            class="nb__logoImg"
            src="/img/logo.png"
            alt="American Spine Centre"
            width="76"
            height="76"
            sizes="76px md:76px 54px"
          />
        </NuxtLink>

        <!-- Center: Nav (desktop) -->
        <nav class="nb__nav" aria-label="Primary">
          <a
            v-for="item in nav"
            :key="item.href"
            class="nb__link"
            :href="item.href"
          >
            {{ item.label }}
          </a>
        </nav>

        <!-- Right -->
        <div class="nb__right">
          <BaseButton
            as="a"
            href="#enroll"
            variant="primary"
            size="sm"
            class="nb__cta"
          >
            Enroll Now
          </BaseButton>

          <button
            class="nb__burger"
            :class="{ 'nb__burger--open': open }"
            type="button"
            :aria-expanded="open ? 'true' : 'false'"
            aria-label="Open menu"
            @click="open = !open"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="open" class="nb__mobile">
      <div class="nb__wrap">
        <div class="nb__mobileInner">
          <a
            v-for="item in nav"
            :key="item.href"
            class="nb__mobileLink"
            :href="item.href"
            @click="onNavClick"
          >
            {{ item.label }}
          </a>

          <BaseButton
            as="a"
            href="#enroll"
            variant="primary"
            size="sm"
            class="nb__mobileCta"
            @click="onNavClick"
          >
            Enroll Now
          </BaseButton>
        </div>
      </div>
    </div>
  </header>
</template>