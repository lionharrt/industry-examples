<template>
  <div class="fashion-page bg-black">
    <component :is="heroComponent" v-bind="fashionData.hero" />
    <component :is="aboutComponent" v-bind="fashionData.about" />
    <component :is="servicesComponent" :services="fashionData.services" />
    <component :is="portfolioComponent" :items="fashionData.portfolio" />
    <component :is="testimonialsComponent" :testimonials="fashionData.testimonials" />
    <component :is="teamComponent" :team="fashionData.team" />
    <component :is="pricingComponent" :tiers="fashionData.pricing" />
    <component :is="contactComponent" v-bind="fashionData.contact" />
    <component :is="footerComponent" v-bind="fashionData.footer" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { fashionData } from '~/data/industries/fashion'
import { useVariantConfig } from '~/composables/useVariantConfig'
import { useIndustryTheme } from '~/composables/useIndustryTheme'

// Fashion Specific Variants
import HeroA from '~/components/Industries/Fashion/Hero/VariantA.vue'
import HeroB from '~/components/Industries/Fashion/Hero/VariantB.vue'
import HeroC from '~/components/Industries/Fashion/Hero/VariantC.vue'
import AboutA from '~/components/Industries/Fashion/About/VariantA.vue'
import AboutB from '~/components/Industries/Fashion/About/VariantB.vue'
import AboutC from '~/components/Industries/Fashion/About/VariantC.vue'
import ServicesA from '~/components/Industries/Fashion/Services/VariantA.vue'
import ServicesB from '~/components/Industries/Fashion/Services/VariantB.vue'
import ServicesC from '~/components/Industries/Fashion/Services/VariantC.vue'
import PortfolioA from '~/components/Industries/Fashion/Portfolio/VariantA.vue'
import PortfolioB from '~/components/Industries/Fashion/Portfolio/VariantB.vue'
import PortfolioC from '~/components/Industries/Fashion/Portfolio/VariantC.vue'
import TestimonialsA from '~/components/Industries/Fashion/Testimonials/VariantA.vue'
import TestimonialsB from '~/components/Industries/Fashion/Testimonials/VariantB.vue'
import TestimonialsC from '~/components/Industries/Fashion/Testimonials/VariantC.vue'
import TeamA from '~/components/Industries/Fashion/Team/VariantA.vue'
import TeamB from '~/components/Industries/Fashion/Team/VariantB.vue'
import TeamC from '~/components/Industries/Fashion/Team/VariantC.vue'
import PricingA from '~/components/Industries/Fashion/Pricing/VariantA.vue'
import PricingB from '~/components/Industries/Fashion/Pricing/VariantB.vue'
import PricingC from '~/components/Industries/Fashion/Pricing/VariantC.vue'
import ContactA from '~/components/Industries/Fashion/Contact/VariantA.vue'
import ContactB from '~/components/Industries/Fashion/Contact/VariantB.vue'
import ContactC from '~/components/Industries/Fashion/Contact/VariantC.vue'
import FooterA from '~/components/Industries/Fashion/Footer/VariantA.vue'
import FooterB from '~/components/Industries/Fashion/Footer/VariantB.vue'
import FooterC from '~/components/Industries/Fashion/Footer/VariantC.vue'

useIndustryTheme('fashion')
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
