<template>
  <div class="physiotherapy-page bg-background">
    <component :is="heroComponent" v-bind="physiotherapyData.hero" />
    <component :is="aboutComponent" v-bind="physiotherapyData.about" />
    <component :is="servicesComponent" :services="physiotherapyData.services" />
    <component :is="bmiComponent" v-bind="physiotherapyData.bmi" />
    <component :is="portfolioComponent" :items="physiotherapyData.portfolio" />
    <component :is="testimonialsComponent" :testimonials="physiotherapyData.testimonials" />
    <component :is="blogComponent" v-bind="physiotherapyData.blog" />
    <component :is="teamComponent" :team="physiotherapyData.team" />
    <component :is="pricingComponent" :tiers="physiotherapyData.pricing" />
    <component :is="contactComponent" v-bind="physiotherapyData.contact" />
    <component :is="footerComponent" v-bind="physiotherapyData.footer" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { physiotherapyData } from '~/data/industries/physiotherapy'
import { useVariantConfig } from '~/composables/useVariantConfig'
import { useIndustryTheme } from '~/composables/useIndustryTheme'

// Physiotherapy Specific Variants
import HeroA from '~/components/Industries/Physiotherapy/Hero/VariantA.vue'
import HeroB from '~/components/Industries/Physiotherapy/Hero/VariantB.vue'
import HeroC from '~/components/Industries/Physiotherapy/Hero/VariantC.vue'
import AboutA from '~/components/Industries/Physiotherapy/About/VariantA.vue'
import AboutB from '~/components/Industries/Physiotherapy/About/VariantB.vue'
import AboutC from '~/components/Industries/Physiotherapy/About/VariantC.vue'
import ServicesA from '~/components/Industries/Physiotherapy/Services/VariantA.vue'
import ServicesB from '~/components/Industries/Physiotherapy/Services/VariantB.vue'
import ServicesC from '~/components/Industries/Physiotherapy/Services/VariantC.vue'
import PortfolioA from '~/components/Industries/Physiotherapy/Portfolio/VariantA.vue'
import PortfolioB from '~/components/Industries/Physiotherapy/Portfolio/VariantB.vue'
import PortfolioC from '~/components/Industries/Physiotherapy/Portfolio/VariantC.vue'
import TestimonialsA from '~/components/Industries/Physiotherapy/Testimonials/VariantA.vue'
import TestimonialsB from '~/components/Industries/Physiotherapy/Testimonials/VariantB.vue'
import TestimonialsC from '~/components/Industries/Physiotherapy/Testimonials/VariantC.vue'
import TeamA from '~/components/Industries/Physiotherapy/Team/VariantA.vue'
import TeamB from '~/components/Industries/Physiotherapy/Team/VariantB.vue'
import TeamC from '~/components/Industries/Physiotherapy/Team/VariantC.vue'
import PricingA from '~/components/Industries/Physiotherapy/Pricing/VariantA.vue'
import PricingB from '~/components/Industries/Physiotherapy/Pricing/VariantB.vue'
import PricingC from '~/components/Industries/Physiotherapy/Pricing/VariantC.vue'
import ContactA from '~/components/Industries/Physiotherapy/Contact/VariantA.vue'
import ContactB from '~/components/Industries/Physiotherapy/Contact/VariantB.vue'
import ContactC from '~/components/Industries/Physiotherapy/Contact/VariantC.vue'
import FooterA from '~/components/Industries/Physiotherapy/Footer/VariantA.vue'
import FooterB from '~/components/Industries/Physiotherapy/Footer/VariantB.vue'
import FooterC from '~/components/Industries/Physiotherapy/Footer/VariantC.vue'

// Physiotherapy Only Sections
import BlogA from '~/components/Industries/Physiotherapy/Blog/VariantA.vue'
import BlogB from '~/components/Industries/Physiotherapy/Blog/VariantB.vue'
import BlogC from '~/components/Industries/Physiotherapy/Blog/VariantC.vue'
import BMIA from '~/components/Industries/Physiotherapy/BMI/VariantA.vue'
import BMIB from '~/components/Industries/Physiotherapy/BMI/VariantB.vue'
import BMIC from '~/components/Industries/Physiotherapy/BMI/VariantC.vue'

useIndustryTheme('physiotherapy')
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

const bmiComponent = computed(() => {
  if (config.value.bmi === 'B') return BMIB
  if (config.value.bmi === 'C') return BMIC
  return BMIA
})
</script>
