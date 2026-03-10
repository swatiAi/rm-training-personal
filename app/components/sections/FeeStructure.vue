<script setup>
import '@/assets/css/components/feestructure.css'
import BaseButton from '@/components/ui/BaseButton.vue'

const options = [
  {
    title: 'OPTION 1: Course Only',
    price: 'USD 1,500',
    img: '/img/fee-option-1.png',
    bullets: [
      'Full access to all three program parts',
      'Access to ASRM lecture library',
      'Course materials and resources',
      'Group Discounts: 10% off for 2 candidates | 15% off for 3+ candidates',
    ],
  },
  {
    title: 'OPTION 2: Course + ASRM Registration and Examination',
    price: 'USD 3,250',
    img: '/img/fee-option-2.png',
    bullets: [
      'Everything in Option 1',
      'Board examination registration (written & oral)',
      'ASRM membership',
      'Official study materials and exam resources',
    ],
  },
]

const additionalFees = [
  'Exam Centre Fee: USD 100 (for candidates taking written exam at American Spine Centre)',
  'Oral Examination Fee: USD 100 (applicable to all candidates)',
]
</script>

<template>
  <section class="feeSec">
    <div class="feeWrap">
      <header class="feeHead">
        <h2 class="feeTitle">
          <span class="feeTitle__fee">FEE</span>
          <span class="feeTitle__grad"> STRUCTURE</span>
        </h2>
        <p class="feeSub">Transparent, Value-Driven Pricing</p>
      </header>

      <div class="feeOptions">
        <article v-for="opt in options" :key="opt.title" class="feeOpt">
          <div class="feeOpt__img">
            <NuxtImg
              class="feeOpt__imgEl"
              :src="opt.img"
              :alt="opt.title"
              width="520"
              height="360"
              sizes="(max-width: 1024px) 100vw, 520px"
              format="webp"
              loading="lazy"
            />
          </div>

          <div class="feeOpt__body">
            <div class="feeOpt__title">{{ opt.title }}</div>
            <div class="feeOpt__price">{{ opt.price }}</div>

            <ul class="feeBullets">
              <li
                v-for="b in opt.bullets"
                :key="b"
                :class="[
                  'feeBullet',
                  b.includes('Group Discounts') && 'feeBullet--wrap'
                ]"
              >
                <span class="feeDot"></span>
                <span class="feeBullet__txt">{{ b }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>

      <div class="feeAdd">
        <div class="feeAdd__label">Additional Fees:</div>

        <div class="feeAdd__pills">
          <div v-for="fee in additionalFees" :key="fee" class="feePill">
            <span class="feeCheck" aria-hidden="true">
              <span class="feeCheck__inner" aria-hidden="true">
                <Icon
                  class="cpPill__iconSvg"
                  name="ic:round-check"
                  mode="svg"
                  aria-hidden="true"
                />
              </span>
            </span>

            <p class="feePill__text">{{ fee }}</p>
          </div>
        </div>

        <p class="feeNote">
          Pricing is identical for both virtual and in-person attendance options.
        </p>

        <div class="feeCta">
          <BaseButton
            as="a"
            href="#register"
            variant="primary"
            size="regular"
            :icon="true"
          >
            Register Now
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>