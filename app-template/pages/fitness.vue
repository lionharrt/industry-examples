<template>
  <div class="fitness-page bg-black">
    <component :is="heroComponent" v-bind="fitnessData.hero" />
    <component :is="aboutComponent" v-bind="fitnessData.about" />
    <component :is="servicesComponent" :services="fitnessData.services" />
    <component :is="portfolioComponent" :items="fitnessData.portfolio" />
    <component :is="testimonialsComponent" :testimonials="fitnessData.testimonials" />
    <component :is="teamComponent" :team="fitnessData.team" />
    <component :is="pricingComponent" :tiers="fitnessData.pricing" />
    <component :is="contactComponent" v-bind="fitnessData.contact" />
    <component :is="footerComponent" v-bind="fitnessData.footer" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { fitnessData } from '~/data/industries/fitness'
import { useVariantConfig } from '~/composables/useVariantConfig'
import { useIndustryTheme } from '~/composables/useIndustryTheme'

// Fitness Specific Variants
import HeroA from '~/components/Industries/Fitness/Hero/VariantA.vue'
import HeroB from '~/components/Industries/Fitness/Hero/VariantB.vue'
import HeroC from '~/components/Industries/Fitness/Hero/VariantC.vue'
import AboutA from '~/components/Industries/Fitness/About/VariantA.vue'
import AboutB from '~/components/Industries/Fitness/About/VariantB.vue'
import AboutC from '~/components/Industries/Fitness/About/VariantC.vue'
import ServicesA from '~/components/Industries/Fitness/Services/VariantA.vue'
import ServicesB from '~/components/Industries/Fitness/Services/VariantB.vue'
import ServicesC from '~/components/Industries/Fitness/Services/VariantC.vue'
import PortfolioA from '~/components/Industries/Fitness/Portfolio/VariantA.vue'
import PortfolioB from '~/components/Industries/Fitness/Portfolio/VariantB.vue'
import PortfolioC from '~/components/Industries/Fitness/Portfolio/VariantC.vue'
import TestimonialsA from '~/components/Industries/Fitness/Testimonials/VariantA.vue'
import TestimonialsB from '~/components/Industries/Fitness/Testimonials/VariantB.vue'
import TestimonialsC from '~/components/Industries/Fitness/Testimonials/VariantC.vue'
import TeamA from '~/components/Industries/Fitness/Team/VariantA.vue'
import TeamB from '~/components/Industries/Fitness/Team/VariantB.vue'
import TeamC from '~/components/Industries/Fitness/Team/VariantC.vue'
import PricingA from '~/components/Industries/Fitness/Pricing/VariantA.vue'
import PricingB from '~/components/Industries/Fitness/Pricing/VariantB.vue'
import PricingC from '~/components/Industries/Fitness/Pricing/VariantC.vue'
import ContactA from '~/components/Industries/Fitness/Contact/VariantA.vue'
import ContactB from '~/components/Industries/Fitness/Contact/VariantB.vue'
import ContactC from '~/components/Industries/Fitness/Contact/VariantC.vue'
import FooterA from '~/components/Industries/Fitness/Footer/VariantA.vue'
import FooterB from '~/components/Industries/Fitness/Footer/VariantB.vue'
import FooterC from '~/components/Industries/Fitness/Footer/VariantC.vue'

useIndustryTheme('fitness')
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
