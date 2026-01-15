<template>
  <section class="py-24 md:py-48 bg-[#1A1A1A] text-white px-6 md:px-24">
    <div
      class="max-w-5xl mx-auto border-l border-white/10 pl-8 md:pl-24 py-8 md:py-12 relative overflow-hidden"
    >
      <!-- Large background watermark -->
      <div
        class="absolute -right-12 md:-right-24 top-0 text-[40vw] md:text-[30vw] font-serif font-black italic opacity-5 select-none pointer-events-none"
      >
        OAK
      </div>

      <span
        class="text-[#A0522D] text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] mb-8 md:mb-12 block"
        >Philosophy</span
      >
      <AnimatedText class="text-4xl sm:text-5xl md:text-[5vw] font-serif leading-[1.1] mb-12 md:mb-16 italic">
        {{ title }}
      </AnimatedText>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative z-10">
        <p class="text-base md:text-lg text-white/60 leading-relaxed font-light">
          {{ content }}
        </p>
        <div class="space-y-6 md:space-y-8">
          <div
            v-for="i in 3"
            :key="i"
            class="flex items-center gap-4 md:gap-6 border-b border-white/5 pb-4 md:pb-6"
          >
            <span class="text-[#D4AF37] font-serif italic text-xl md:text-2xl"
              >0{{ i }}</span
            >
            <span class="text-[10px] md:text-xs uppercase tracking-widest font-bold"
              >Element {{ i === 1 ? "Fire" : i === 2 ? "Oak" : "Earth" }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  content: string;
}>();
</script>
