<template>
  <section class="py-16 md:py-48 bg-black text-white px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
      <div class="relative group max-w-md mx-auto lg:max-w-none w-full">
        <div class="aspect-[3/4] overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 relative group">
          <ParallaxImage src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200" speed="0.1" />
        </div>
        <div class="absolute -bottom-6 -left-6 md:-bottom-12 md:-left-12 w-32 h-32 md:w-48 md:h-48 bg-[#dc143c] flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-1000 shadow-2xl">
          <p class="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-center px-2 md:px-4 leading-relaxed text-white">Redefining the human silhouette through code.</p>
        </div>
      </div>
      <div class="space-y-8 md:space-y-12 text-center lg:text-left mt-12 lg:mt-0">
        <span class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] text-white/20">The_Manifesto</span>
        <AnimatedText class="text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-[0.8] tracking-tighter">
          {{ title }}
        </AnimatedText>
        <p class="text-white/40 text-lg md:text-2xl font-light leading-relaxed max-w-lg italic mx-auto lg:mx-0">
          {{ content }}
        </p>
        <div class="pt-8 md:pt-12 flex gap-6 md:gap-8 border-t border-white/5 justify-center lg:justify-start">
          <div v-for="i in 3" :key="i" class="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full" :class="i === 1 ? 'bg-[#dc143c]' : 'bg-white/10'"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  content: string
}>()
</script>
