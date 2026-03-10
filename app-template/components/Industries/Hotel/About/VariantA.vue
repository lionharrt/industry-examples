<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
        <div class="aspect-[4/5] bg-white rounded-3xl md:rounded-[5rem] overflow-hidden p-4 md:p-8 relative group">
          <ParallaxImage src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4" speed="0.1" class="rounded-2xl md:rounded-[3rem]" />
          <div class="absolute -bottom-6 -right-6 md:-bottom-12 md:-right-12 w-48 h-48 md:w-64 md:h-64 bg-accent p-8 md:p-12 flex flex-col justify-between group-hover:translate-y-[-10px] transition-transform duration-1000 rounded-2xl md:rounded-3xl z-10">
            <p class="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white leading-relaxed italic">"The rhythm of the tides meets the comfort of home."</p>
            <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white">
              <Waves :size="20" class="md:hidden" />
              <Waves :size="24" class="hidden md:block" />
            </div>
          </div>
        </div>
        <div class="space-y-8 md:space-y-12 text-center lg:text-left mt-16 lg:mt-0">
        <span class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] text-primary/40">Place_&_Soul</span>
        <AnimatedText class="text-4xl sm:text-6xl md:text-7xl font-serif italic leading-[0.8] tracking-tighter leading-none">
          {{ title }}
        </AnimatedText>
        <p class="text-primary/60 text-lg md:text-2xl font-light leading-relaxed max-w-lg mx-auto lg:mx-0 italic">
          {{ content }}
        </p>
        <div class="pt-8 md:pt-12 flex items-center gap-8 md:gap-12 border-t border-primary/10 justify-center lg:justify-start">
          <div v-for="i in 2" :key="i" class="space-y-2">
            <p class="text-[10px] md:text-xs font-black uppercase tracking-widest text-accent">{{ i === 1 ? 'Locally Sourced' : 'Hand-Woven' }}</p>
            <div class="h-1 w-16 md:w-24 bg-primary/10 rounded-full overflow-hidden mx-auto lg:mx-0">
              <div class="h-full bg-primary w-0 group-hover:w-full transition-all duration-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Waves } from 'lucide-vue-next'
import AnimatedText from '~/components/AnimatedText.vue'
defineProps<{
  title: string
  content: string
}>()
</script>
