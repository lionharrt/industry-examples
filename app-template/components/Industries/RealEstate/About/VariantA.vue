<template>
  <section class="py-24 md:py-48 bg-background text-primary px-6 md:px-24 border-b border-white/5">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
      <div class="space-y-8 md:space-y-12">
        <div class="flex items-center gap-6">
          <div class="w-12 h-px bg-accent"></div>
          <span class="text-accent text-xs font-black uppercase tracking-widest">A Vision for Excellence</span>
        </div>
        <AnimatedText class="text-4xl md:text-7xl font-bold uppercase leading-[0.8] tracking-tighter shadow-sm text-primary">
          {{ title }}
        </AnimatedText>
        <p class="text-primary/60 text-lg md:text-2xl font-light leading-relaxed max-w-lg">
          {{ content }}
        </p>
        <div class="pt-8 md:pt-12 grid grid-cols-2 gap-8 md:gap-12 border-t border-white/10">
          <div v-for="i in 2" :key="i" class="space-y-2">
            <p class="text-3xl md:text-4xl font-black text-accent">0{{ i === 1 ? '1' : '5' }}</p>
            <p class="text-[10px] uppercase tracking-widest text-primary/40 font-bold">{{ i === 1 ? 'Market Leadership' : 'Global Offices' }}</p>
          </div>
        </div>
      </div>
      <div class="relative group rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-auto bg-primary/5">
        <ParallaxImage src="1600596542815-ffad4c1539a9" :speed="0.1" />
        <div class="absolute inset-0 bg-background/20 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
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
