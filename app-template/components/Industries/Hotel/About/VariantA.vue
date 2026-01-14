<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
      <div class="relative group">
        <div class="aspect-[4/5] bg-white rounded-[5rem] overflow-hidden p-8 shadow-2xl">
          <ParallaxImage src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200" speed="0.1" />
        </div>
        <div class="absolute -bottom-12 -right-12 w-64 h-64 bg-accent p-12 flex flex-col justify-between group-hover:translate-y-[-10px] transition-transform duration-1000 rounded-3xl shadow-2xl">
          <p class="text-[10px] font-black uppercase tracking-widest text-white leading-relaxed italic">"The rhythm of the tides meets the comfort of home."</p>
          <div class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white">
            <Waves :size="24" />
          </div>
        </div>
      </div>
      <div class="space-y-12">
        <span class="text-xs font-black uppercase tracking-[1em] text-primary/40">Place_&_Soul</span>
        <AnimatedText class="text-7xl font-serif italic leading-[0.8] tracking-tighter">
          {{ title }}
        </AnimatedText>
        <p class="text-primary/60 text-2xl font-light leading-relaxed max-w-lg italic">
          {{ content }}
        </p>
        <div class="pt-12 flex items-center gap-12 border-t border-primary/10">
          <div v-for="i in 2" :key="i" class="space-y-2">
            <p class="text-xs font-black uppercase tracking-widest text-accent">{{ i === 1 ? 'Locally Sourced' : 'Hand-Woven' }}</p>
            <div class="h-1 w-24 bg-primary/10 rounded-full overflow-hidden">
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
defineProps<{
  title: string
  content: string
}>()
</script>
