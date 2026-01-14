<template>
  <div class="creative-page bg-[#111111]">
    <component :is="heroComponent" v-bind="creativeData.hero" />
    <component :is="aboutComponent" v-bind="creativeData.about" />
    <component :is="servicesComponent" :services="creativeData.services" />
    <component :is="portfolioComponent" :items="creativeData.portfolio" />
    <component :is="testimonialsComponent" :testimonials="creativeData.testimonials" />
    <component :is="teamComponent" :team="creativeData.team" />
    <component :is="pricingComponent" :tiers="creativeData.pricing" />
    <component :is="contactComponent" v-bind="creativeData.contact" />
    <component :is="footerComponent" v-bind="creativeData.footer" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { creativeData } from '~/data/industries/creative'
import { useVariantConfig } from '~/composables/useVariantConfig'
import { useIndustryTheme } from '~/composables/useIndustryTheme'

// Creative Specific Variants
import HeroA from '~/components/Industries/Creative/Hero/VariantA.vue'
import HeroB from '~/components/Industries/Creative/Hero/VariantB.vue'
import HeroC from '~/components/Industries/Creative/Hero/VariantC.vue'
import AboutA from '~/components/Industries/Creative/About/VariantA.vue'
import AboutB from '~/components/Industries/Creative/About/VariantB.vue'
import AboutC from '~/components/Industries/Creative/About/VariantC.vue'
import ServicesA from '~/components/Industries/Creative/Services/VariantA.vue'
import ServicesB from '~/components/Industries/Creative/Services/VariantB.vue'
import ServicesC from '~/components/Industries/Creative/Services/VariantC.vue'
import PortfolioA from '~/components/Industries/Creative/Portfolio/VariantA.vue'
import PortfolioB from '~/components/Industries/Creative/Portfolio/VariantB.vue'
import PortfolioC from '~/components/Industries/Creative/Portfolio/VariantC.vue'
import TestimonialsA from '~/components/Industries/Creative/Testimonials/VariantA.vue'
import TestimonialsB from '~/components/Industries/Creative/Testimonials/VariantB.vue'
import TestimonialsC from '~/components/Industries/Creative/Testimonials/VariantC.vue'
import TeamA from '~/components/Industries/Creative/Team/VariantA.vue'
import TeamB from '~/components/Industries/Creative/Team/VariantB.vue'
import TeamC from '~/components/Industries/Creative/Team/VariantC.vue'
import PricingA from '~/components/Industries/Creative/Pricing/VariantA.vue'
import PricingB from '~/components/Industries/Creative/Pricing/VariantB.vue'
import PricingC from '~/components/Industries/Creative/Pricing/VariantC.vue'
import ContactA from '~/components/Industries/Creative/Contact/VariantA.vue'
import ContactB from '~/components/Industries/Creative/Contact/VariantB.vue'
import ContactC from '~/components/Industries/Creative/Contact/VariantC.vue'
import FooterA from '~/components/Industries/Creative/Footer/VariantA.vue'
import FooterB from '~/components/Industries/Creative/Footer/VariantB.vue'
import FooterC from '~/components/Industries/Creative/Footer/VariantC.vue'

useIndustryTheme('creative')
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
