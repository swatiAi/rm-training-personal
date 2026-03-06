<script setup>
import '@/assets/css/components/programstructure.css'

const part1Gets = [
  'Comprehensive coverage of all core regenerative medicine principles',
  'Real-time interaction with leading practitioners',
  'Case-based learning and clinical applications',
]

const part2Gets = [
  'Access to complete recorded lecture library',
  'Systematic weekly delivery of 1–2 modules',
  'Self-paced review and study flexibility',
  'Continuous learning alongside your clinical practice',
]

const part3Gets = [
  'Targeted exam preparation strategies',
  'High-yield content focused on board exam topics',
  'Sample MCQ practice with expert guidance',
  'Final review before certification examinations',
]
</script>

<template>
  <section class="psSec">
    <div class="psSec__wrap">
      <!-- Header -->
      <div class="psSec__head">
        <h2 class="psSec__title">PROGRAM <span>STRUCTURE</span></h2>
        <p class="psSec__sub">A Comprehensive, Three-Part Learning Journey</p>
        <p class="psSec__desc">
          The ABRM Course is strategically designed to maximize retention and clinical application<br />
          through three integrated components:
        </p>
      </div>

      <!-- Grid -->
      <div class="psSec__grid">
        <!-- PART 1 (text left) -->
        <div class="psSec__block">
          <div class="psSecPillRow">
            <span class="psSecPill psSecPill--blue">PART 1: Live Didactic Lectures</span>
            <span class="psSecPill psSecPill--cyan">Duration: 3 Days</span>
          </div>

          <div class="psSecPill psSecPill--dark">Format: Physical or Virtual Attendance</div>

          <p class="psSec__p">
            A three-day intensive program covering 19 modules based on the original ABRM Curriculum. Engage directly
            with expert faculty through live, interactive sessions designed to build your foundational knowledge in
            regenerative medicine.
          </p>

          <div class="psSecPill psSecPill--soft">What You’ll Get:</div>

          <ol class="psSecGetList">
            <li v-for="(t, i) in part1Gets" :key="i" class="psSecGetItem">
              <span class="psSecNumWrap">
                <span class="psSecNum">{{ i + 1 }}</span>
              </span>
              <span class="psSecTxt">{{ t }}</span>
            </li>
          </ol>
        </div>

        <!-- PART 1 image right -->
        <div class="psSecImageCard">
          <NuxtImg
            class="psSecImg"
            src="/img/program-1.png"
            alt="Lecture classroom"
            width="800"
            height="600"
            sizes="(max-width: 980px) 100vw, 520px"
          />
          <div class="psSecOverlay">
            <div class="psSecOvTitle">Attendance Options:</div>

            <div class="psSecOvPills">
              <div class="psSecOvPill">
                <span class="psSecCheck">
                  <Icon class="psSecCheck__icon" name="ic:round-check" mode="svg" />
                </span>
                <span>In-person at American Spine Centre, Dubai</span>
              </div>

              <div class="psSecOvPill">
                <span class="psSecCheck">
                  <Icon class="psSecCheck__icon" name="ic:round-check" mode="svg" />
                </span>
                <span>Live virtual participation</span>
              </div>
            </div>
          </div>
        </div>

        <!-- PART 2 image left -->
        <div class="psSecImageCard psSecImageCard--part2">
          <NuxtImg
            class="psSecImg"
            src="/img/program-2.png"
            alt="Medical classroom"
            width="800"
            height="600"
            sizes="(max-width: 980px) 100vw, 520px"
          />
          <div class="psSecOverlay psSecOverlay--small">
            <div class="psSecOvTitle">Key Benefit:</div>
            <div class="psSecOvNote">
              Spaced repetition methodology proven to enhance<br />
              long-term retention and clinical application.
            </div>
          </div>
        </div>

        <!-- PART 2 (text right) -->
        <div class="psSec__block psSec__block--part2">
          <div class="psSecPillRow">
            <span class="psSecPill psSecPill--blue">PART 2: Virtual Learning &amp; Knowledge Reinforcement</span>
            <span class="psSecPill psSecPill--cyan">Duration: 12 Weeks</span>
          </div>

          <div class="psSecPill psSecPill--dark">Format: Online (1–2 Lectures per Week)</div>

          <p class="psSec__p">
            Retransmission of recorded lectures delivered over 12 weeks for reinforced learning. This structured
            approach ensures optimal knowledge retention and allows you to review complex concepts at your convenience.
          </p>

          <div class="psSecPill psSecPill--soft">What You’ll Get:</div>

          <ol class="psSecGetList">
            <li v-for="(t, i) in part2Gets" :key="i" class="psSecGetItem">
              <span class="psSecNumWrap">
                <span class="psSecNum">{{ i + 1 }}</span>
              </span>
              <span class="psSecTxt">{{ t }}</span>
            </li>
          </ol>
        </div>

        <!-- PART 3 (text left) -->
        <div class="psSec__block">
          <div class="psSecPillRow">
            <span class="psSecPill psSecPill--blue">PART 3: Board Review Preparation</span>
            <span class="psSecPill psSecPill--cyan">Duration: 1 Day</span>
          </div>

          <div class="psSecPill psSecPill--dark">Format: Physical Attendance Required</div>

          <p class="psSec__p">
            A condensed board review package including 200 high-yield slides and sample MCQs to prepare you for both
            written and oral examinations.
          </p>

          <div class="psSecPill psSecPill--soft">What You’ll Get:</div>

          <ol class="psSecGetList">
            <li v-for="(t, i) in part3Gets" :key="i" class="psSecGetItem">
              <span class="psSecNumWrap">
                <span class="psSecNum">{{ i + 1 }}</span>
              </span>
              <span class="psSecTxt">{{ t }}</span>
            </li>
          </ol>
        </div>

        <!-- PART 3 image right -->
        <div class="psSecImageCard">
          <NuxtImg
            class="psSecImg"
            src="/img/program-3.png"
            alt="Taking notes"
            width="800"
            height="600"
            sizes="(max-width: 980px) 100vw, 520px"
          />
          <div class="psSecOverlay psSecOverlay--small">
            <div class="psSecOvTitle">Location:</div>
            <div class="psSecOvNote">American Spine Centre, Dubai</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
