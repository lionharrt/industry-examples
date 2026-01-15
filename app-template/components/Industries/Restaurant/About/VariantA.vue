<template>
  <section class="py-16 md:py-48 bg-[#1A1A1A] text-white px-6 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32 items-center">
        <div class="relative h-[40vh] sm:h-[60vh] lg:h-[80vh] group shadow-2xl overflow-hidden">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200"
            alt="Chef at Work"
            :speed="0.1"
          />
          <div
            class="absolute -bottom-6 -right-6 md:-bottom-12 md:-right-12 w-40 md:w-64 aspect-square bg-[#A0522D] p-6 md:p-8 hidden sm:block opacity-0 translate-y-10 transition-all duration-1000 group-hover:opacity-100 group-hover:translate-y-0"
          >
            <p
              class="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] leading-loose"
            >
              "Fire is our primary ingredient. It transforms, refines, and
              reveals."
            </p>
          </div>
        </div>
        <div class="space-y-6 md:space-y-12 text-center lg:text-left">
          <span
            class="text-[#D4AF37] text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] block"
            >Our Story</span
          >
          <AnimatedText class="text-3xl sm:text-5xl md:text-6xl font-serif leading-tight">
            {{ title }}
          </AnimatedText>
          <p
            class="text-sm md:text-xl text-white/60 leading-relaxed font-light first-letter:text-3xl md:first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-[#D4AF37] max-w-2xl mx-auto lg:mx-0"
          >
            {{ content }}
          </p>
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
