<template>
  <div class="automotive-page bg-[#0A0A0A]">
    <component :is="heroComponent" v-bind="automotiveData.hero" />
    <component :is="aboutComponent" v-bind="automotiveData.about" />
    <component :is="servicesComponent" :services="automotiveData.services" />
    <component :is="portfolioComponent" :items="automotiveData.portfolio" />
    <component :is="testimonialsComponent" :testimonials="automotiveData.testimonials" />
    <component :is="teamComponent" :team="automotiveData.team" />
    <component :is="pricingComponent" :tiers="automotiveData.pricing" />
    <component :is="contactComponent" v-bind="automotiveData.contact" />
    <component :is="footerComponent" v-bind="automotiveData.footer" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { automotiveData } from '~/data/industries/automotive'
import { useVariantConfig } from '~/composables/useVariantConfig'
import { useIndustryTheme } from '~/composables/useIndustryTheme'

// Automotive Specific Variants
import HeroA from '~/components/Industries/Automotive/Hero/VariantA.vue'
import HeroB from '~/components/Industries/Automotive/Hero/VariantB.vue'
import HeroC from '~/components/Industries/Automotive/Hero/VariantC.vue'
import AboutA from '~/components/Industries/Automotive/About/VariantA.vue'
import AboutB from '~/components/Industries/Automotive/About/VariantB.vue'
import AboutC from '~/components/Industries/Automotive/About/VariantC.vue'
import ServicesA from '~/components/Industries/Automotive/Services/VariantA.vue'
import ServicesB from '~/components/Industries/Automotive/Services/VariantB.vue'
import ServicesC from '~/components/Industries/Automotive/Services/VariantC.vue'
import PortfolioA from '~/components/Industries/Automotive/Portfolio/VariantA.vue'
import PortfolioB from '~/components/Industries/Automotive/Portfolio/VariantB.vue'
import PortfolioC from '~/components/Industries/Automotive/Portfolio/VariantC.vue'
import TestimonialsA from '~/components/Industries/Automotive/Testimonials/VariantA.vue'
import TestimonialsB from '~/components/Industries/Automotive/Testimonials/VariantB.vue'
import TestimonialsC from '~/components/Industries/Automotive/Testimonials/VariantC.vue'
import TeamA from '~/components/Industries/Automotive/Team/VariantA.vue'
import TeamB from '~/components/Industries/Automotive/Team/VariantB.vue'
import TeamC from '~/components/Industries/Automotive/Team/VariantC.vue'
import PricingA from '~/components/Industries/Automotive/Pricing/VariantA.vue'
import PricingB from '~/components/Industries/Automotive/Pricing/VariantB.vue'
import PricingC from '~/components/Industries/Automotive/Pricing/VariantC.vue'
import ContactA from '~/components/Industries/Automotive/Contact/VariantA.vue'
import ContactB from '~/components/Industries/Automotive/Contact/VariantB.vue'
import ContactC from '~/components/Industries/Automotive/Contact/VariantC.vue'
import FooterA from '~/components/Industries/Automotive/Footer/VariantA.vue'
import FooterB from '~/components/Industries/Automotive/Footer/VariantB.vue'
import FooterC from '~/components/Industries/Automotive/Footer/VariantC.vue'

useIndustryTheme('automotive')
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
