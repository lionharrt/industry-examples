<template>
  <section
    class="min-h-screen flex items-center bg-[#1A1A1A] text-white overflow-hidden px-6 sm:px-12 md:px-24 py-24 md:py-0"
  >
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 w-full items-center">
      <div class="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
        <span
          ref="tagRef"
          class="inline-block text-[#D4AF37] text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] opacity-0 lg:-translate-x-10"
          >EST. 2026</span
        >
        <h1
          ref="titleRef"
          class="text-5xl sm:text-6xl md:text-[8vw] font-serif leading-[0.9] text-white"
        >
          {{ title }}
        </h1>
        <p
          ref="descRef"
          class="text-base md:text-lg text-white/60 max-w-md mx-auto lg:mx-0 opacity-0 translate-y-10"
        >
          {{ subtitle }}
        </p>
        <div ref="btnRef" class="opacity-0 translate-y-10 pt-4">
          <button
            class="px-8 py-4 border border-[#D4AF37] text-[#D4AF37] uppercase tracking-widest text-[10px] md:text-xs font-bold hover:bg-[#D4AF37] hover:text-black transition-all duration-500"
          >
            View the Menu
          </button>
        </div>
      </div>
      <div class="relative h-[40vh] sm:h-[60vh] lg:h-[80vh] overflow-hidden rounded-t-full order-1 lg:order-2">
        <ParallaxImage
          :src="image || '1514362545857-3bc16c4c7d1b'"
          alt="Fine Dining"
          :speed="0.15"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";

defineProps<{
  title: string;
  subtitle: string;
  image?: string;
}>();

const titleRef = ref(null);
const tagRef = ref(null);
const descRef = ref(null);
const btnRef = ref(null);

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.3 });
  tl.to(tagRef.value, { opacity: 1, x: 0, duration: 1, ease: "power3.out" })
    .from(
      titleRef.value,
      { opacity: 0, y: 30, duration: 1.2, ease: "power4.out" },
      "-=0.7"
    )
    .to(
      descRef.value,
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.8"
    )
    .to(
      btnRef.value,
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.9"
    );
});
</script>
