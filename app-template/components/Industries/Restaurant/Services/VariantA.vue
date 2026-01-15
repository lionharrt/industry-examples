<template>
  <section
    class="py-24 md:py-48 bg-[#1A1A1A] text-white px-6 md:px-24 border-t border-white/5"
  >
    <div class="max-w-7xl mx-auto">
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-32 border-b border-white/10 pb-8 md:pb-12 gap-8"
      >
        <h2 class="text-5xl sm:text-6xl md:text-7xl font-serif leading-tight">
          Selected <br /><span class="italic text-[#D4AF37]">Experiences</span>
        </h2>
        <p
          class="max-w-xs text-white/40 text-[10px] md:text-xs uppercase tracking-[0.2em] leading-loose"
        >
          Our services are designed to engage all five senses, creating memories
          that linger long after the final course.
        </p>
      </div>

      <div class="space-y-px">
        <div
          v-for="(service, idx) in services"
          :key="idx"
          class="service-item group py-10 md:py-16 border-b border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between hover:bg-white/[0.02] transition-colors cursor-pointer gap-6 md:gap-12"
        >
          <div class="flex items-center gap-6 md:gap-12">
            <span class="text-white/20 font-serif text-xl md:text-2xl"
              >0{{ idx + 1 }}</span
            >
            <h3
              class="text-3xl sm:text-4xl md:text-5xl font-serif group-hover:italic lg:group-hover:translate-x-4 transition-all duration-500 uppercase tracking-tighter leading-none"
            >
              {{ service.title }}
            </h3>
          </div>
          <div class="lg:mt-0 max-w-sm w-full">
            <p class="text-white/50 text-sm md:text-base leading-relaxed mb-4 md:mb-6 font-light">
              {{ service.description }}
            </p>
            <div
              class="h-px w-0 bg-[#D4AF37] group-hover:w-full transition-all duration-700"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useGsapAnimations } from "~/composables/useGsapAnimations";

defineProps<{ services: any[] }>();
const { staggerReveal } = useGsapAnimations();

onMounted(() => {
  staggerReveal(".service-item", 0.15);
});
</script>
