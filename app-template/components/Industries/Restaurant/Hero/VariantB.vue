<template>
  <section
    class="h-screen flex items-center bg-[#1A1A1A] text-white overflow-hidden px-12 md:px-24"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-24 w-full items-center">
      <div class="space-y-8">
        <span
          ref="tagRef"
          class="inline-block text-[#D4AF37] text-xs font-bold uppercase tracking-[0.5em] opacity-0 -translate-x-10"
          >EST. 2026</span
        >
        <h1
          ref="titleRef"
          class="text-[8vw] font-serif leading-[0.9] text-white"
        >
          {{ title }}
        </h1>
        <p
          ref="descRef"
          class="text-lg text-white/60 max-w-md opacity-0 translate-y-10"
        >
          {{ subtitle }}
        </p>
        <div ref="btnRef" class="opacity-0 translate-y-10">
          <button
            class="px-8 py-4 border border-[#D4AF37] text-[#D4AF37] uppercase tracking-widest text-xs font-bold hover:bg-[#D4AF37] hover:text-black transition-all duration-500"
          >
            View the Menu
          </button>
        </div>
      </div>
      <div class="relative h-[80vh] overflow-hidden rounded-t-full">
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
      { opacity: 0, x: -100, duration: 1.2, ease: "power4.out" },
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
