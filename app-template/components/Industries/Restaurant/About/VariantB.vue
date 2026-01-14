<template>
  <section class="py-48 bg-[#1A1A1A] text-white overflow-hidden">
    <div class="max-w-screen-2xl mx-auto px-6 md:px-24">
      <div class="flex flex-col items-center text-center mb-32 space-y-8">
        <span class="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.5em]">The Philosophy</span>
        <h2 class="text-8xl font-serif italic lowercase tracking-tighter text-[#D4AF37]">{{ title }}</h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        <div class="aspect-[3/4] overflow-hidden rounded-full">
          <ParallaxImage :src="image || 'https://images.unsplash.com/photo-1550966841-3ee3ad3ae447'" speed="0.05" />
        </div>
        <div class="flex flex-col justify-center px-12 text-center space-y-8">
          <div class="h-24 w-px bg-[#D4AF37] mx-auto"></div>
          <p class="text-2xl font-serif font-light leading-relaxed italic">
            "We believe in the slow transformation of simple elements."
          </p>
          <div class="h-24 w-px bg-[#D4AF37] mx-auto"></div>
        </div>
        <div class="aspect-[3/4] overflow-hidden rounded-full">
          <ParallaxImage :src="imageSecondary || 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b'" speed="-0.05" />
        </div>
      </div>

      <div class="max-w-3xl mx-auto text-center">
        <p class="text-white/40 text-sm uppercase tracking-[0.3em] leading-loose">
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
