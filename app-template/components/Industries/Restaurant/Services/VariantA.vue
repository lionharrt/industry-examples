<template>
  <section
    class="py-48 bg-[#1A1A1A] text-white px-6 md:px-24 border-t border-white/5"
  >
    <div class="max-w-7xl mx-auto">
      <div
        class="flex flex-col md:flex-row justify-between items-end mb-32 border-b border-white/10 pb-12"
      >
        <h2 class="text-7xl font-serif">
          Selected <br /><span class="italic text-[#D4AF37]">Experiences</span>
        </h2>
        <p
          class="max-w-xs text-white/40 text-xs uppercase tracking-[0.2em] leading-loose"
        >
          Our services are designed to engage all five senses, creating memories
          that linger long after the final course.
        </p>
      </div>

      <div class="space-y-px">
        <div
          v-for="(service, idx) in services"
          :key="idx"
          class="service-item group py-16 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-white/[0.02] transition-colors cursor-pointer"
        >
          <div class="flex items-center gap-12">
            <span class="text-white/20 font-serif text-2xl"
              >0{{ idx + 1 }}</span
            >
            <h3
              class="text-4xl md:text-5xl font-serif group-hover:italic group-hover:translate-x-4 transition-all duration-500 uppercase tracking-tighter"
            >
              {{ service.title }}
            </h3>
          </div>
          <div class="mt-8 md:mt-0 max-w-sm">
            <p class="text-white/50 text-sm leading-relaxed mb-6">
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
