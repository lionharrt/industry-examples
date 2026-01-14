<template>
  <div class="hotel-page bg-[#C2B280]">
    <component :is="heroComponent" v-bind="hotelData.hero" />
    <component :is="aboutComponent" v-bind="hotelData.about" />
    <component :is="servicesComponent" :services="hotelData.services" />
    <component :is="portfolioComponent" :items="hotelData.portfolio" />
    <component :is="testimonialsComponent" :testimonials="hotelData.testimonials" />
    <component :is="teamComponent" :team="hotelData.team" />
    <component :is="pricingComponent" :tiers="hotelData.pricing" />
    <component :is="contactComponent" v-bind="hotelData.contact" />
    <component :is="footerComponent" v-bind="hotelData.footer" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { hotelData } from '~/data/industries/hotel'
import { useVariantConfig } from '~/composables/useVariantConfig'
import { useIndustryTheme } from '~/composables/useIndustryTheme'

// Boutique Hotel Specific Variants
import HeroA from '~/components/Industries/Hotel/Hero/VariantA.vue'
import HeroB from '~/components/Industries/Hotel/Hero/VariantB.vue'
import HeroC from '~/components/Industries/Hotel/Hero/VariantC.vue'
import AboutA from '~/components/Industries/Hotel/About/VariantA.vue'
import AboutB from '~/components/Industries/Hotel/About/VariantB.vue'
import AboutC from '~/components/Industries/Hotel/About/VariantC.vue'
import ServicesA from '~/components/Industries/Hotel/Services/VariantA.vue'
import ServicesB from '~/components/Industries/Hotel/Services/VariantB.vue'
import ServicesC from '~/components/Industries/Hotel/Services/VariantC.vue'
import PortfolioA from '~/components/Industries/Hotel/Portfolio/VariantA.vue'
import PortfolioB from '~/components/Industries/Hotel/Portfolio/VariantB.vue'
import PortfolioC from '~/components/Industries/Hotel/Portfolio/VariantC.vue'
import TestimonialsA from '~/components/Industries/Hotel/Testimonials/VariantA.vue'
import TestimonialsB from '~/components/Industries/Hotel/Testimonials/VariantB.vue'
import TestimonialsC from '~/components/Industries/Hotel/Testimonials/VariantC.vue'
import TeamA from '~/components/Industries/Hotel/Team/VariantA.vue'
import TeamB from '~/components/Industries/Hotel/Team/VariantB.vue'
import TeamC from '~/components/Industries/Hotel/Team/VariantC.vue'
import PricingA from '~/components/Industries/Hotel/Pricing/VariantA.vue'
import PricingB from '~/components/Industries/Hotel/Pricing/VariantB.vue'
import PricingC from '~/components/Industries/Hotel/Pricing/VariantC.vue'
import ContactA from '~/components/Industries/Hotel/Contact/VariantA.vue'
import ContactB from '~/components/Industries/Hotel/Contact/VariantB.vue'
import ContactC from '~/components/Industries/Hotel/Contact/VariantC.vue'
import FooterA from '~/components/Industries/Hotel/Footer/VariantA.vue'
import FooterB from '~/components/Industries/Hotel/Footer/VariantB.vue'
import FooterC from '~/components/Industries/Hotel/Footer/VariantC.vue'

useIndustryTheme('hotel')
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
