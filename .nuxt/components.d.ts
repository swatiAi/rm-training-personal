
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const LayoutNavbar: typeof import("../app/components/layout/Navbar.vue")['default']
export const SectionsAboutProgram: typeof import("../app/components/sections/AboutProgram.vue")['default']
export const SectionsAdditionalCertificationTrack: typeof import("../app/components/sections/AdditionalCertificationTrack.vue")['default']
export const SectionsCertificationSection: typeof import("../app/components/sections/CertificationSection.vue")['default']
export const SectionsCurriculumSection: typeof import("../app/components/sections/CurriculumSection.vue")['default']
export const SectionsEnrollmentSection: typeof import("../app/components/sections/EnrollmentSection.vue")['default']
export const SectionsFacultySection: typeof import("../app/components/sections/FacultySection.vue")['default']
export const SectionsFeeStructure: typeof import("../app/components/sections/FeeStructure.vue")['default']
export const SectionsHeroSection: typeof import("../app/components/sections/HeroSection.vue")['default']
export const SectionsKeyHighlights: typeof import("../app/components/sections/KeyHighlights.vue")['default']
export const SectionsProgramStructure: typeof import("../app/components/sections/ProgramStructure.vue")['default']
export const SectionsWhoShouldAttend: typeof import("../app/components/sections/WhoShouldAttend.vue")['default']
export const UiBaseButton: typeof import("../app/components/ui/BaseButton.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const Icon: typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyLayoutNavbar: LazyComponent<typeof import("../app/components/layout/Navbar.vue")['default']>
export const LazySectionsAboutProgram: LazyComponent<typeof import("../app/components/sections/AboutProgram.vue")['default']>
export const LazySectionsAdditionalCertificationTrack: LazyComponent<typeof import("../app/components/sections/AdditionalCertificationTrack.vue")['default']>
export const LazySectionsCertificationSection: LazyComponent<typeof import("../app/components/sections/CertificationSection.vue")['default']>
export const LazySectionsCurriculumSection: LazyComponent<typeof import("../app/components/sections/CurriculumSection.vue")['default']>
export const LazySectionsEnrollmentSection: LazyComponent<typeof import("../app/components/sections/EnrollmentSection.vue")['default']>
export const LazySectionsFacultySection: LazyComponent<typeof import("../app/components/sections/FacultySection.vue")['default']>
export const LazySectionsFeeStructure: LazyComponent<typeof import("../app/components/sections/FeeStructure.vue")['default']>
export const LazySectionsHeroSection: LazyComponent<typeof import("../app/components/sections/HeroSection.vue")['default']>
export const LazySectionsKeyHighlights: LazyComponent<typeof import("../app/components/sections/KeyHighlights.vue")['default']>
export const LazySectionsProgramStructure: LazyComponent<typeof import("../app/components/sections/ProgramStructure.vue")['default']>
export const LazySectionsWhoShouldAttend: LazyComponent<typeof import("../app/components/sections/WhoShouldAttend.vue")['default']>
export const LazyUiBaseButton: LazyComponent<typeof import("../app/components/ui/BaseButton.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyIcon: LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
