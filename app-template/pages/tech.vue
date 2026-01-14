<template>
  <div class="tech-page bg-[#0B0E14]">
    <component :is="heroComponent" v-bind="techData.hero" />
    <component :is="aboutComponent" v-bind="techData.about" />
    <component :is="servicesComponent" :services="techData.services" />
    <component :is="portfolioComponent" :items="techData.portfolio" />
    <component :is="testimonialsComponent" :testimonials="techData.testimonials" />
    <component :is="teamComponent" :team="techData.team" />
    <component :is="pricingComponent" :tiers="techData.pricing" />
    <component :is="contactComponent" v-bind="techData.contact" />
    <component :is="footerComponent" v-bind="techData.footer" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { techData } from '~/data/industries/tech'
import { useVariantConfig } from '~/composables/useVariantConfig'
import { useIndustryTheme } from '~/composables/useIndustryTheme'

// Tech Specific Variants
import HeroA from '~/components/Industries/Tech/Hero/VariantA.vue'
import HeroB from '~/components/Industries/Tech/Hero/VariantB.vue'
import HeroC from '~/components/Industries/Tech/Hero/VariantC.vue'
import AboutA from '~/components/Industries/Tech/About/VariantA.vue'
import AboutB from '~/components/Industries/Tech/About/VariantB.vue'
import AboutC from '~/components/Industries/Tech/About/VariantC.vue'
import ServicesA from '~/components/Industries/Tech/Services/VariantA.vue'
import ServicesB from '~/components/Industries/Tech/Services/VariantB.vue'
import ServicesC from '~/components/Industries/Tech/Services/VariantC.vue'
import PortfolioA from '~/components/Industries/Tech/Portfolio/VariantA.vue'
import PortfolioB from '~/components/Industries/Tech/Portfolio/VariantB.vue'
import PortfolioC from '~/components/Industries/Tech/Portfolio/VariantC.vue'
import TestimonialsA from '~/components/Industries/Tech/Testimonials/VariantA.vue'
import TestimonialsB from '~/components/Industries/Tech/Testimonials/VariantB.vue'
import TestimonialsC from '~/components/Industries/Tech/Testimonials/VariantC.vue'
import TeamA from '~/components/Industries/Tech/Team/VariantA.vue'
import TeamB from '~/components/Industries/Tech/Team/VariantB.vue'
import TeamC from '~/components/Industries/Tech/Team/VariantC.vue'
import PricingA from '~/components/Industries/Tech/Pricing/VariantA.vue'
import PricingB from '~/components/Industries/Tech/Pricing/VariantB.vue'
import PricingC from '~/components/Industries/Tech/Pricing/VariantC.vue'
import ContactA from '~/components/Industries/Tech/Contact/VariantA.vue'
import ContactB from '~/components/Industries/Tech/Contact/VariantB.vue'
import ContactC from '~/components/Industries/Tech/Contact/VariantC.vue'
import FooterA from '~/components/Industries/Tech/Footer/VariantA.vue'
import FooterB from '~/components/Industries/Tech/Footer/VariantB.vue'
import FooterC from '~/components/Industries/Tech/Footer/VariantC.vue'

useIndustryTheme('tech')
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
