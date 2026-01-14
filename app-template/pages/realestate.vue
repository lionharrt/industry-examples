<template>
  <div class="realestate-page bg-white">
    <component :is="heroComponent" v-bind="realestateData.hero" />
    <component :is="aboutComponent" v-bind="realestateData.about" />
    <component :is="servicesComponent" :services="realestateData.services" />
    <component :is="portfolioComponent" :items="realestateData.portfolio" />
    <component :is="testimonialsComponent" :testimonials="realestateData.testimonials" />
    <component :is="teamComponent" :team="realestateData.team" />
    <component :is="pricingComponent" :tiers="realestateData.pricing" />
    <component :is="contactComponent" v-bind="realestateData.contact" />
    <component :is="footerComponent" v-bind="realestateData.footer" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { realestateData } from '~/data/industries/realestate'
import { useVariantConfig } from '~/composables/useVariantConfig'
import { useIndustryTheme } from '~/composables/useIndustryTheme'

// Real Estate Specific Variants
import HeroA from '~/components/Industries/RealEstate/Hero/VariantA.vue'
import HeroB from '~/components/Industries/RealEstate/Hero/VariantB.vue'
import HeroC from '~/components/Industries/RealEstate/Hero/VariantC.vue'
import AboutA from '~/components/Industries/RealEstate/About/VariantA.vue'
import AboutB from '~/components/Industries/RealEstate/About/VariantB.vue'
import AboutC from '~/components/Industries/RealEstate/About/VariantC.vue'
import ServicesA from '~/components/Industries/RealEstate/Services/VariantA.vue'
import ServicesB from '~/components/Industries/RealEstate/Services/VariantB.vue'
import ServicesC from '~/components/Industries/RealEstate/Services/VariantC.vue'
import PortfolioA from '~/components/Industries/RealEstate/Portfolio/VariantA.vue'
import PortfolioB from '~/components/Industries/RealEstate/Portfolio/VariantB.vue'
import PortfolioC from '~/components/Industries/RealEstate/Portfolio/VariantC.vue'
import TestimonialsA from '~/components/Industries/RealEstate/Testimonials/VariantA.vue'
import TestimonialsB from '~/components/Industries/RealEstate/Testimonials/VariantB.vue'
import TestimonialsC from '~/components/Industries/RealEstate/Testimonials/VariantC.vue'
import TeamA from '~/components/Industries/RealEstate/Team/VariantA.vue'
import TeamB from '~/components/Industries/RealEstate/Team/VariantB.vue'
import TeamC from '~/components/Industries/RealEstate/Team/VariantC.vue'
import PricingA from '~/components/Industries/RealEstate/Pricing/VariantA.vue'
import PricingB from '~/components/Industries/RealEstate/Pricing/VariantB.vue'
import PricingC from '~/components/Industries/RealEstate/Pricing/VariantC.vue'
import ContactA from '~/components/Industries/RealEstate/Contact/VariantA.vue'
import ContactB from '~/components/Industries/RealEstate/Contact/VariantB.vue'
import ContactC from '~/components/Industries/RealEstate/Contact/VariantC.vue'
import FooterA from '~/components/Industries/RealEstate/Footer/VariantA.vue'
import FooterB from '~/components/Industries/RealEstate/Footer/VariantB.vue'
import FooterC from '~/components/Industries/RealEstate/Footer/VariantC.vue'

useIndustryTheme('realestate')
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
