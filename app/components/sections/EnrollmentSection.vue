<script setup>
import '@/assets/css/components/enrollmentsection.css'
import BaseButton from '@/components/ui/BaseButton.vue'

const paymentOptions = [
  'Direct Bank Transfer — American Spine Centre bank account details provided upon registration',
  'Cash Payment — At American Spine Centre reception',
  'Board Registration Payment — Via secure link from American Society of Regenerative Medicine',
]

const refundPolicy = [
  'Course fees 14-day refund window (American Spine Centre)',
  'Board registration fees Subject to ASRM refund policy',
]
</script>

<template>
  <section class="heSec" id="enroll">
    <div class="heSec__wrap">
      <!-- TOP ROW -->
      <div class="heTop">
        <!-- Left text -->
        <div class="heTop__left">
          <h2 class="heTitle">
            <span class="heTitle__black">HOW TO</span>
            <span class="heH3__gradient"> ENROLL</span>
          </h2>

          <p class="heKicker">Secure Your Spot — Limited to 40 Candidates per Cohort</p>
          <p class="heDesc">Enrollment is limited to:</p>
        </div>

        <!-- Right: two quota cards -->
        <div class="heTop__right">
          <div class="heQuotaGrid">
            <div class="heQuotaCard">
              <div class="heQuotaCard__imgWrap">
                <NuxtImg
                  src="/img/enroll-inperson.png"
                  alt="In-person"
                  class="heQuotaCard__img"
                  width="640"
                  height="240"
                  sizes="(max-width: 640px) 100vw, 320px"
                />
              </div>
              <div class="heQuotaCard__body">
                <div class="heQuotaCard__num">20</div>
                <div class="heQuotaCard__label">in-person attendees</div>
              </div>
            </div>

            <div class="heQuotaCard">
              <div class="heQuotaCard__imgWrap">
                <NuxtImg
                  src="/img/enroll-virtual.png"
                  alt="Virtual"
                  class="heQuotaCard__img"
                  width="640"
                  height="240"
                  sizes="(max-width: 640px) 100vw, 320px"
                />
              </div>
              <div class="heQuotaCard__body">
                <div class="heQuotaCard__num">20</div>
                <div class="heQuotaCard__label">virtual attendees</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- SECOND ROW -->
      <div class="heRow">
        <!-- Left big image -->
        <div class="heMedia heMedia--tall">
          <NuxtImg
            src="/img/payment-card.png"
            alt="Payment"
            class="heMedia__img"
            width="900"
            height="560"
            sizes="(max-width: 980px) 100vw, 520px"
          />
        </div>

        <!-- Right: Payment options -->
        <div class="heContent">
          <h3 class="heH3">
            <span class="heH3__black">Payment</span>
            <span class="heH3__gradient"> Options</span>
          </h3>

          <div class="heList">
            <div v-for="p in paymentOptions" :key="p" class="heListItem">
              <div class="heCheck" aria-hidden="true">
                <Icon class="cpPill__iconSvg" name="ic:round-check" mode="svg" aria-hidden="true" />
              </div>
              <p class="heListItem__text">{{ p }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- THIRD ROW -->
      <div class="heRow">
        <!-- Left: refund -->
        <div class="heContent">
          <h3 class="heH3">
            <span class="heH3__black">Refund</span>
            <span class="heH3__gradient"> Policy</span>
          </h3>

          <div class="heList">
            <div v-for="r in refundPolicy" :key="r" class="heListItem heListItem--compact">
              <div class="heCheck" aria-hidden="true">
                <Icon class="cpPill__iconSvg" name="ic:round-check" mode="svg" aria-hidden="true" />
              </div>
              <p class="heListItem__text">{{ r }}</p>
            </div>
          </div>

          <div class="heBtns">
            <BaseButton as="nuxt-link" :to="'#register'" variant="primary" :icon="true">
              Register Now
            </BaseButton>

            <BaseButton as="nuxt-link" :to="'#faculty'" variant="outline" :icon="true">
              Meet the Faculty
            </BaseButton>
          </div>
        </div>

        <!-- Right image -->
        <div class="heMedia">
          <NuxtImg
            src="/img/cash-money.png"
            alt="Cash"
            class="heMedia__img"
            width="900"
            height="560"
            sizes="(max-width: 980px) 100vw, 520px"
          />
        </div>
      </div>
    </div>
  </section>
</template>