<template>
  <section class="py-16 md:py-48 bg-[#1A1A1A] text-white overflow-hidden px-6">
    <div class="max-w-screen-2xl mx-auto md:px-24">
      <div class="flex flex-col items-center text-center mb-12 md:mb-32 space-y-4 md:space-y-8">
        <span class="text-[#D4AF37] text-[10px] md:text-xs font-bold uppercase tracking-[0.5em]">The Philosophy</span>
        <h2 class="text-4xl sm:text-7xl md:text-8xl font-serif italic lowercase tracking-tighter text-[#D4AF37] leading-tight">{{ title }}</h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 mb-12 md:mb-32">
        <div class="aspect-[3/4] overflow-hidden rounded-full shadow-2xl max-w-[280px] sm:max-w-md mx-auto w-full">
          <ParallaxImage :src="image || 'https://images.unsplash.com/photo-1550966841-3ee3ad3ae447'" speed="0.05" />
        </div>
        <div class="flex flex-col justify-center px-4 md:px-12 text-center space-y-6 md:space-y-8 order-last md:order-none mt-8 md:mt-0">
          <div class="h-12 md:h-24 w-px bg-[#D4AF37] mx-auto opacity-30"></div>
          <p class="text-lg md:text-2xl font-serif font-light leading-relaxed italic">
            "We believe in the slow transformation of simple elements."
          </p>
          <div class="h-12 md:h-24 w-px bg-[#D4AF37] mx-auto opacity-30"></div>
        </div>
        <div class="aspect-[3/4] overflow-hidden rounded-full shadow-2xl max-w-[280px] sm:max-w-md mx-auto w-full">
          <ParallaxImage :src="imageSecondary || 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b'" speed="-0.05" />
        </div>
      </div>

      <div class="max-w-3xl mx-auto text-center px-4">
        <p class="text-white/40 text-[9px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] leading-loose">
          {{ content }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  content: string
  image?: string
  imageSecondary?: string
}>()
</script>
