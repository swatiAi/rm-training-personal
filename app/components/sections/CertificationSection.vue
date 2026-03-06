<script setup>
import '@/assets/css/components/certificationsection.css'

const pathwayRequirements = [
  { title: 'Written Examination', desc: 'Comprehensive MCQ-based assessment' },
  { title: 'Oral Examination', desc: 'Clinical case discussion and knowledge demonstration' },
  { title: 'Case Log Requirement (MDs only)', desc: '20 documented regenerative medicine cases' },
]

const eligibility = [
  { title: 'MDs, MBBS, MS', desc: 'All specialties welcome' },
  { title: 'PhDs', desc: 'Medical Laboratory or Pathology specializations' },
  { title: 'Pharmacists & Allied Health Professionals', desc: 'Eligible for RMCC certification' },
]

const certificationRequirements = [
  'Submit required credentials and documentation',
  'Complete endorsement forms signed by Dr. Hisham Al Hakim',
  'MDs only: Maintain a log of 20 regenerative medicine cases',
]
</script>

<template>
  <section class="cpSec" id="certification">
    <div class="cpSec__wrap">
      <!-- ===== TOP: CERTIFICATION PATHWAY ===== -->
      <div class="cpTop">
        <div class="cpBlock">
          <h2 class="cpTitle">
            <span class="cpTitle__black">CERTIFICATION</span>
            <span class="cpTitle__accent"> PATHWAY</span>
          </h2>

          <p class="cpKicker">
            Earn Your Diplomat of American Board of Regenerative Medicine (ABRM)
          </p>

          <p class="cpDesc">
            Upon successful completion of the course and examinations, you will earn the
            prestigious Diplomat of American Board of Regenerative Medicine (ABRM) — a
            globally recognized credential that validates your expertise.
          </p>

          <p class="cpLabel">Examination Requirements:</p>

          <div class="cpCards cpCards--hug">
            <div v-for="r in pathwayRequirements" :key="r.title" class="cpCard">
              <div class="cpCard__title">{{ r.title }}</div>
              <div class="cpCard__desc">{{ r.desc }}</div>
            </div>
          </div>
        </div>

        <div class="cpMedia">
          <NuxtImg
            class="cpMedia__img"
            src="/img/certification-pathway.png"
            alt="Certification Pathway"
            width="856"
            height="665"
            sizes="(max-width: 980px) 100vw, 680px"
            loading="lazy"
          />
        </div>
      </div>

      <!-- ===== MID: ADMISSION & ELIGIBILITY ===== -->
      <div class="cpMid">
        <div class="cpMedia">
          <NuxtImg
            class="cpMedia__img"
            src="/img/certification-eligibility.png"
            alt="Course eligibility"
            width="709"
            height="583"
            sizes="(max-width: 980px) 100vw, 680px"
            loading="lazy"
          />
        </div>

        <div class="cpBlock">
          <h2 class="cpTitle">
            <span class="cpTitle__black">ADMISSION &amp;</span>
            <span class="cpTitle__accent"> ELIGIBILITY</span>
          </h2>

          <p class="cpKicker">Course Enrollment Eligibility</p>

          <p class="cpDesc">Open enrollment for all qualified healthcare professionals:</p>

          <div class="cpCards cpCards--hug">
            <div v-for="e in eligibility" :key="e.title" class="cpCard">
              <div class="cpCard__title">{{ e.title }}</div>
              <div class="cpCard__desc">{{ e.desc }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== BOTTOM: BOARD CERTIFICATION REQUIREMENTS ===== -->
      <div class="cpBottom">
        <h3 class="cpBottom__title">
          <span class="cpTitle__black">BOARD</span>
          <span class="cpBottom__titleGrad"> CERTIFICATION REQUIREMENTS</span>
        </h3>

        <p class="cpBottom__sub">
          To proceed with ABRM Diplomat examination and certification:
        </p>

        <div class="cpPills">
          <div v-for="t in certificationRequirements" :key="t" class="cpPill">
            <span class="cpPill__icon" aria-hidden="true">
              <Icon class="cpPill__iconSvg" name="ic:round-check" mode="svg" />
            </span>
            <span class="cpPill__text">{{ t }}</span>
          </div>
        </div>

        <p class="cpBottom__note">
          Full documentation requirements will be provided upon registration.
        </p>
      </div>
    </div>
  </section>
</template>