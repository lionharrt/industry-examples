<template>
  <div class="legal-page bg-[#E1E1E1]">
    <component :is="heroComponent" v-bind="legalData.hero" />
    <component :is="aboutComponent" v-bind="legalData.about" />
    <component :is="servicesComponent" :services="legalData.services" />
    <component :is="portfolioComponent" :items="legalData.portfolio" />
    <component :is="testimonialsComponent" :testimonials="legalData.testimonials" />
    <component :is="teamComponent" :team="legalData.team" />
    <component :is="pricingComponent" :tiers="legalData.pricing" />
    <component :is="contactComponent" v-bind="legalData.contact" />
    <component :is="footerComponent" v-bind="legalData.footer" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { legalData } from '~/data/industries/legal'
import { useVariantConfig } from '~/composables/useVariantConfig'
import { useIndustryTheme } from '~/composables/useIndustryTheme'

// Legal Specific Variants
import HeroA from '~/components/Industries/Legal/Hero/VariantA.vue'
import HeroB from '~/components/Industries/Legal/Hero/VariantB.vue'
import HeroC from '~/components/Industries/Legal/Hero/VariantC.vue'
import AboutA from '~/components/Industries/Legal/About/VariantA.vue'
import AboutB from '~/components/Industries/Legal/About/VariantB.vue'
import AboutC from '~/components/Industries/Legal/About/VariantC.vue'
import ServicesA from '~/components/Industries/Legal/Services/VariantA.vue'
import ServicesB from '~/components/Industries/Legal/Services/VariantB.vue'
import ServicesC from '~/components/Industries/Legal/Services/VariantC.vue'
import PortfolioA from '~/components/Industries/Legal/Portfolio/VariantA.vue'
import PortfolioB from '~/components/Industries/Legal/Portfolio/VariantB.vue'
import PortfolioC from '~/components/Industries/Legal/Portfolio/VariantC.vue'
import TestimonialsA from '~/components/Industries/Legal/Testimonials/VariantA.vue'
import TestimonialsB from '~/components/Industries/Legal/Testimonials/VariantB.vue'
import TestimonialsC from '~/components/Industries/Legal/Testimonials/VariantC.vue'
import TeamA from '~/components/Industries/Legal/Team/VariantA.vue'
import TeamB from '~/components/Industries/Legal/Team/VariantB.vue'
import TeamC from '~/components/Industries/Legal/Team/VariantC.vue'
import PricingA from '~/components/Industries/Legal/Pricing/VariantA.vue'
import PricingB from '~/components/Industries/Legal/Pricing/VariantB.vue'
import PricingC from '~/components/Industries/Legal/Pricing/VariantC.vue'
import ContactA from '~/components/Industries/Legal/Contact/VariantA.vue'
import ContactB from '~/components/Industries/Legal/Contact/VariantB.vue'
import ContactC from '~/components/Industries/Legal/Contact/VariantC.vue'
import FooterA from '~/components/Industries/Legal/Footer/VariantA.vue'
import FooterB from '~/components/Industries/Legal/Footer/VariantB.vue'
import FooterC from '~/components/Industries/Legal/Footer/VariantC.vue'

useIndustryTheme('legal')
const { config } = useVariantConfig()

const heroComponent = computed(() => {
  if (config.value.hero === 'B') return HeroB
  if (config.value.hero === 'C') return HeroC
  return HeroA
})

const aboutComponent = computed(() => {
  if (config.value.about === 'B') return AboutB
  if (config.value.about === 'C') return AboutC
  return AboutA
})

const servicesComponent = computed(() => {
  if (config.value.services === 'B') return ServicesB
  if (config.value.services === 'C') return ServicesC
  return ServicesA
})

const portfolioComponent = computed(() => {
  if (config.value.portfolio === 'B') return PortfolioB
  if (config.value.portfolio === 'C') return PortfolioC
  return PortfolioA
})

const testimonialsComponent = computed(() => {
  if (config.value.testimonials === 'B') return TestimonialsB
  if (config.value.testimonials === 'C') return TestimonialsC
  return TestimonialsA
})

const teamComponent = computed(() => {
  if (config.value.team === 'B') return TeamB
  if (config.value.team === 'C') return TeamC
  return TeamA
})

const pricingComponent = computed(() => {
  if (config.value.pricing === 'B') return PricingB
  if (config.value.pricing === 'C') return PricingC
  return PricingA
})

const contactComponent = computed(() => {
  if (config.value.contact === 'B') return ContactB
  if (config.value.contact === 'C') return ContactC
  return ContactA
})

const footerComponent = computed(() => {
  if (config.value.footer === 'B') return FooterB
  if (config.value.footer === 'C') return FooterC
  return FooterA
})
</script>
