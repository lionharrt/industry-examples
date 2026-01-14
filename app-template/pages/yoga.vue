<template>
  <div class="yoga-page bg-background">
    <component :is="heroComponent" v-bind="yogaData.hero" />
    <component :is="aboutComponent" v-bind="yogaData.about" />
    <component :is="servicesComponent" :services="yogaData.services" />
    <component :is="portfolioComponent" :items="yogaData.portfolio" />
    <component :is="testimonialsComponent" :testimonials="yogaData.testimonials" />
    <component :is="blogComponent" v-bind="yogaData.blog" />
    <component :is="teamComponent" :team="yogaData.team" />
    <component :is="pricingComponent" :tiers="yogaData.pricing" />
    <component :is="contactComponent" v-bind="yogaData.contact" />
    <component :is="footerComponent" v-bind="yogaData.footer" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { yogaData } from '~/data/industries/yoga'
import { useVariantConfig } from '~/composables/useVariantConfig'
import { useIndustryTheme } from '~/composables/useIndustryTheme'

// Yoga Specific Variants
import HeroA from '~/components/Industries/Yoga/Hero/VariantA.vue'
import HeroB from '~/components/Industries/Yoga/Hero/VariantB.vue'
import HeroC from '~/components/Industries/Yoga/Hero/VariantC.vue'
import AboutA from '~/components/Industries/Yoga/About/VariantA.vue'
import AboutB from '~/components/Industries/Yoga/About/VariantB.vue'
import AboutC from '~/components/Industries/Yoga/About/VariantC.vue'
import ServicesA from '~/components/Industries/Yoga/Services/VariantA.vue'
import ServicesB from '~/components/Industries/Yoga/Services/VariantB.vue'
import ServicesC from '~/components/Industries/Yoga/Services/VariantC.vue'
import PortfolioA from '~/components/Industries/Yoga/Portfolio/VariantA.vue'
import PortfolioB from '~/components/Industries/Yoga/Portfolio/VariantB.vue'
import PortfolioC from '~/components/Industries/Yoga/Portfolio/VariantC.vue'
import TestimonialsA from '~/components/Industries/Yoga/Testimonials/VariantA.vue'
import TestimonialsB from '~/components/Industries/Yoga/Testimonials/VariantB.vue'
import TestimonialsC from '~/components/Industries/Yoga/Testimonials/VariantC.vue'
import TeamA from '~/components/Industries/Yoga/Team/VariantA.vue'
import TeamB from '~/components/Industries/Yoga/Team/VariantB.vue'
import TeamC from '~/components/Industries/Yoga/Team/VariantC.vue'
import PricingA from '~/components/Industries/Yoga/Pricing/VariantA.vue'
import PricingB from '~/components/Industries/Yoga/Pricing/VariantB.vue'
import PricingC from '~/components/Industries/Yoga/Pricing/VariantC.vue'
import ContactA from '~/components/Industries/Yoga/Contact/VariantA.vue'
import ContactB from '~/components/Industries/Yoga/Contact/VariantB.vue'
import ContactC from '~/components/Industries/Yoga/Contact/VariantC.vue'
import FooterA from '~/components/Industries/Yoga/Footer/VariantA.vue'
import FooterB from '~/components/Industries/Yoga/Footer/VariantB.vue'
import FooterC from '~/components/Industries/Yoga/Footer/VariantC.vue'
import BlogA from '~/components/Industries/Yoga/Blog/VariantA.vue'
import BlogB from '~/components/Industries/Yoga/Blog/VariantB.vue'
import BlogC from '~/components/Industries/Yoga/Blog/VariantC.vue'

useIndustryTheme('yoga')
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

const blogComponent = computed(() => {
  if (config.value.blog === 'B') return BlogB
  if (config.value.blog === 'C') return BlogC
  return BlogA
})
</script>
