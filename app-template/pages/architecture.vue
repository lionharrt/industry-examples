<template>
  <div class="architecture-page bg-[#FAF9F6]">
    <component :is="heroComponent" v-bind="architectureData.hero" />
    <component :is="aboutComponent" v-bind="architectureData.about" />
    <component :is="servicesComponent" :services="architectureData.services" />
    <component :is="portfolioComponent" :items="architectureData.portfolio" />
    <component :is="testimonialsComponent" :testimonials="architectureData.testimonials" />
    <component :is="teamComponent" :team="architectureData.team" />
    <component :is="pricingComponent" :tiers="architectureData.pricing" />
    <component :is="contactComponent" v-bind="architectureData.contact" />
    <component :is="footerComponent" v-bind="architectureData.footer" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { architectureData } from '~/data/industries/architecture'
import { useVariantConfig } from '~/composables/useVariantConfig'
import { useIndustryTheme } from '~/composables/useIndustryTheme'

// Architecture Specific Variants
import HeroA from '~/components/Industries/Architecture/Hero/VariantA.vue'
import HeroB from '~/components/Industries/Architecture/Hero/VariantB.vue'
import HeroC from '~/components/Industries/Architecture/Hero/VariantC.vue'
import AboutA from '~/components/Industries/Architecture/About/VariantA.vue'
import AboutB from '~/components/Industries/Architecture/About/VariantB.vue'
import AboutC from '~/components/Industries/Architecture/About/VariantC.vue'
import ServicesA from '~/components/Industries/Architecture/Services/VariantA.vue'
import ServicesB from '~/components/Industries/Architecture/Services/VariantB.vue'
import ServicesC from '~/components/Industries/Architecture/Services/VariantC.vue'
import PortfolioA from '~/components/Industries/Architecture/Portfolio/VariantA.vue'
import PortfolioB from '~/components/Industries/Architecture/Portfolio/VariantB.vue'
import PortfolioC from '~/components/Industries/Architecture/Portfolio/VariantC.vue'
import TestimonialsA from '~/components/Industries/Architecture/Testimonials/VariantA.vue'
import TestimonialsB from '~/components/Industries/Architecture/Testimonials/VariantB.vue'
import TestimonialsC from '~/components/Industries/Architecture/Testimonials/VariantC.vue'
import TeamA from '~/components/Industries/Architecture/Team/VariantA.vue'
import TeamB from '~/components/Industries/Architecture/Team/VariantB.vue'
import TeamC from '~/components/Industries/Architecture/Team/VariantC.vue'
import PricingA from '~/components/Industries/Architecture/Pricing/VariantA.vue'
import PricingB from '~/components/Industries/Architecture/Pricing/VariantB.vue'
import PricingC from '~/components/Industries/Architecture/Pricing/VariantC.vue'
import ContactA from '~/components/Industries/Architecture/Contact/VariantA.vue'
import ContactB from '~/components/Industries/Architecture/Contact/VariantB.vue'
import ContactC from '~/components/Industries/Architecture/Contact/VariantC.vue'
import FooterA from '~/components/Industries/Architecture/Footer/VariantA.vue'
import FooterB from '~/components/Industries/Architecture/Footer/VariantB.vue'
import FooterC from '~/components/Industries/Architecture/Footer/VariantC.vue'

useIndustryTheme('architecture')
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
