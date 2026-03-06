<script setup>
import '@/assets/css/components/facultysection.css'

const faculty = [
  {
    name: 'Dr. Hisham Hakim',
    role: 'Course Chairman \n MD. MPH, FAADEP, American Board of Psychiatry and Neurology',
    desc: 'American Spine Center and Wellness by Design Chairman',
    img: '/img/faculty/hisham-hakim.png',
  },
  {
    name: 'Prof. Dr. Mohammed AlJumaily',
    role: 'MD, Ph. D., FRCS',
    desc: 'ABRM, Consultant Neurosurgeon',
    img: '/img/faculty/mohammed-aljumaily.png',
  },
  {
    name: 'Dr. Fatima Jamali',
    role: 'Head of Neuroscience Research',
    desc: 'Cell Therapy Center, The University of Jordan',
    img: '/img/faculty/fatima-jamali.png',
  },
  {
    name: 'Prof. Dr. Hiba Badreldin Khalil Ahmed',
    role: 'Professor of Hematology and Stem Cell Technology- MLS Research Scientist, Abu Dhabi Stem Cells Center, UAE',
    desc: 'Founder of AINeLIM Stem Cell Center, Sudan\nDiplomat & Affiliate of American Board of Regenerative Medicine',
    img: '/img/faculty/hiba-badreldin.png',
  },
  {
    name: 'Dr. Massimo Peracci',
    role: '',
    desc: 'Musculoskeletal RM',
    img: '/img/faculty/massimo-peracci.png',
  },
  {
    name: 'Dr. Pezman Hafiz',
    role: 'Tissue Engineering, Pharmacology',
    desc: 'Internal Medicine in RM',
    img: '/img/faculty/pezman-hafiz.png',
  },
  {
    name: 'Dr. Feras Ballouk',
    role: 'Course Manager',
    desc: 'Exam Preparation Strategies',
    img: '/img/faculty/feras-ballouk.png',
  },
  {
    name: 'Dr. Sharmila Tulpule',
    role: 'Medical Advisory Consultant',
    desc: 'Orthopedic',
    img: '/img/faculty/sharmila-tulpule.png',
  },
  {
    name: 'Dr. Asawari Babat',
    role: '',
    desc: 'Regulatory Science Consultant',
    img: '/img/faculty/asawari-babat.png',
  },
  {
    name: 'Dr. Sahar Kazaz',
    role: '',
    desc: 'Reconstructive Surgery in RM',
    img: '/img/faculty/sahar-kazaz.png',
  },
]
</script>

<template>
  <section class="dfSec" id="faculty">
    <div class="dfSec__wrap">
      <div class="dfSecHead">
        <h2 class="dfSecHead__title">
          <span class="dfSecHead__titleBlack">DISTINGUISHED</span>
          <span class="text-gradient"> FACULTY</span>
        </h2>

        <p class="dfSecHead__kicker">Learn from Pioneers in Regenerative Medicine</p>

        <p class="dfSecHead__desc">
          Our faculty comprises internationally recognized experts with extensive clinical and<br />
          research experience:
        </p>
      </div>

      <div class="dfSecGrid">
        <article v-for="person in faculty" :key="person.name" class="dfCard">
          <div class="dfCard__media">
            <NuxtImg
              class="dfCard__img"
              :src="person.img"
              :alt="person.name"
              width="600"
              height="600"
              format="webp"
              sizes="(max-width: 480px) 100vw, (max-width: 980px) 33vw, 20vw"
              loading="lazy"
            />
          </div>

          <div class="dfCard__body">
            <h3 class="dfCard__name">{{ person.name }}</h3>

            <p class="dfCard__role">
              {{ person.role }}
            </p>

            <p v-if="person.desc" class="dfCard__desc">
              {{ person.desc }}
            </p>
          </div>
        </article>
      </div>

      <p class="dfSec__note">
        Faculty composition may vary by cohort to reflect the latest advances in the field.
      </p>
    </div>
  </section>
</template>