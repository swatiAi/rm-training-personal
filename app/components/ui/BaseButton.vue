<script setup>
import '@/assets/css/components/button.css'
import { computed, resolveComponent } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'primary' }, // primary | secondary | outline | error | warning
  size: { type: String, default: 'regular' },
  shape: { type: String, default: 'rounded' },
  icon: { type: Boolean, default: false },

  as: { type: [String, Object], default: 'button' },
  to: { type: [String, Object], default: null },
  href: { type: String, default: null },
  type: { type: String, default: 'button' },
})

const Tag = computed(() => {
  if (props.as === 'nuxt-link') return resolveComponent('NuxtLink')
  return props.as
})

const bindProps = computed(() => {
  if (props.as === 'nuxt-link') return { to: props.to }
  if (props.as === 'a') return { href: props.href }
  return { type: props.type }
})

const chevClass = computed(() => {
  return props.variant === 'outline'
    ? 'button__chev button__chev--gradient'
    : 'button__chev button__chev--solid'
})
</script>

<template>
  <component
    :is="Tag"
    v-bind="bindProps"
    :class="[
      'button',
      `button-${variant}`,
      `button-${size}`,
      `button-${shape}`,
      icon ? 'button--icon' : '',
    ]"
  >
    <span class="button__label"><slot /></span>

    <Icon
      v-if="icon"
      name="material-symbols:chevron-right-rounded"
      mode="svg"
      class="button__chev"
      aria-hidden="true"
    />
  </component>
</template>