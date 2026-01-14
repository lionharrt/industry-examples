<template>
  <div class="restaurant-page bg-[#1A1A1A]">
    <component
      :is="heroComponent"
      :key="`hero-${config.hero}`"
      v-bind="restaurantData.hero"
    />
    <component
      :is="aboutComponent"
      :key="`about-${config.about}`"
      v-bind="restaurantData.about"
    />
    <component
      :is="servicesComponent"
      :key="`services-${config.services}`"
      :services="restaurantData.services"
    />
    <component
      :is="portfolioComponent"
      :key="`portfolio-${config.portfolio}`"
      :items="restaurantData.portfolio"
    />
    <component
      :is="testimonialsComponent"
      :key="`testimonials-${config.testimonials}`"
      :testimonials="restaurantData.testimonials"
    />
    <component
      :is="teamComponent"
      :key="`team-${config.team}`"
      :team="restaurantData.team"
    />
    <component
      :is="pricingComponent"
      :key="`pricing-${config.pricing}`"
      :tiers="restaurantData.pricing"
    />
    <component
      :is="contactComponent"
      :key="`contact-${config.contact}`"
      v-bind="restaurantData.contact"
    />
    <component
      :is="footerComponent"
      :key="`footer-${config.footer}`"
      v-bind="restaurantData.footer"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { restaurantData } from "~/data/industries/restaurant";
import { useVariantConfig } from "~/composables/useVariantConfig";
import { useIndustryTheme } from "~/composables/useIndustryTheme";

// Restaurant Specific Variants
import HeroA from "~/components/Industries/Restaurant/Hero/VariantA.vue";
import HeroB from "~/components/Industries/Restaurant/Hero/VariantB.vue";
import HeroC from "~/components/Industries/Restaurant/Hero/VariantC.vue";
import AboutA from "~/components/Industries/Restaurant/About/VariantA.vue";
import AboutB from "~/components/Industries/Restaurant/About/VariantB.vue";
import AboutC from "~/components/Industries/Restaurant/About/VariantC.vue";
import ServicesA from "~/components/Industries/Restaurant/Services/VariantA.vue";
import ServicesB from "~/components/Industries/Restaurant/Services/VariantB.vue";
import ServicesC from "~/components/Industries/Restaurant/Services/VariantC.vue";
import PortfolioA from "~/components/Industries/Restaurant/Portfolio/VariantA.vue";
import PortfolioB from "~/components/Industries/Restaurant/Portfolio/VariantB.vue";
import PortfolioC from "~/components/Industries/Restaurant/Portfolio/VariantC.vue";
import TestimonialsA from "~/components/Industries/Restaurant/Testimonials/VariantA.vue";
import TestimonialsB from "~/components/Industries/Restaurant/Testimonials/VariantB.vue";
import TestimonialsC from "~/components/Industries/Restaurant/Testimonials/VariantC.vue";
import TeamA from "~/components/Industries/Restaurant/Team/VariantA.vue";
import TeamB from "~/components/Industries/Restaurant/Team/VariantB.vue";
import TeamC from "~/components/Industries/Restaurant/Team/VariantC.vue";
import PricingA from "~/components/Industries/Restaurant/Pricing/VariantA.vue";
import PricingB from "~/components/Industries/Restaurant/Pricing/VariantB.vue";
import PricingC from "~/components/Industries/Restaurant/Pricing/VariantC.vue";
import ContactA from "~/components/Industries/Restaurant/Contact/VariantA.vue";
import ContactB from "~/components/Industries/Restaurant/Contact/VariantB.vue";
import ContactC from "~/components/Industries/Restaurant/Contact/VariantC.vue";
import FooterA from "~/components/Industries/Restaurant/Footer/VariantA.vue";
import FooterB from "~/components/Industries/Restaurant/Footer/VariantB.vue";
import FooterC from "~/components/Industries/Restaurant/Footer/VariantC.vue";

useIndustryTheme("restaurant");
const { config } = useVariantConfig();

const heroComponent = computed(() => {
  if (config.value.hero === "B") return HeroB;
  if (config.value.hero === "C") return HeroC;
  return HeroA;
});

const aboutComponent = computed(() => {
  if (config.value.about === "B") return AboutB;
  if (config.value.about === "C") return AboutC;
  return AboutA;
});

const servicesComponent = computed(() => {
  if (config.value.services === "B") return ServicesB;
  if (config.value.services === "C") return ServicesC;
  return ServicesA;
});

const portfolioComponent = computed(() => {
  if (config.value.portfolio === "B") return PortfolioB;
  if (config.value.portfolio === "C") return PortfolioC;
  return PortfolioA;
});

const testimonialsComponent = computed(() => {
  if (config.value.testimonials === "B") return TestimonialsB;
  if (config.value.testimonials === "C") return TestimonialsC;
  return TestimonialsA;
});

const teamComponent = computed(() => {
  if (config.value.team === "B") return TeamB;
  if (config.value.team === "C") return TeamC;
  return TeamA;
});

const pricingComponent = computed(() => {
  if (config.value.pricing === "B") return PricingB;
  if (config.value.pricing === "C") return PricingC;
  return PricingA;
});

const contactComponent = computed(() => {
  if (config.value.contact === "B") return ContactB;
  if (config.value.contact === "C") return ContactC;
  return ContactA;
});

const footerComponent = computed(() => {
  if (config.value.footer === "B") return FooterB;
  if (config.value.footer === "C") return FooterC;
  return FooterA;
});
</script>
