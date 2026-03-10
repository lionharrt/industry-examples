<template>
  <section class="py-24 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-end">
      <div class="lg:col-span-8 space-y-12 md:space-y-24 relative">
        <h2 class="text-[14vw] md:text-[12vw] font-black leading-none uppercase tracking-[0.1em] md:tracking-widest text-primary opacity-5 hover:opacity-10 transition-opacity duration-700 select-none pointer-events-none">
          LEGACY
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
          <p class="text-xl md:text-2xl font-black leading-snug uppercase tracking-tight text-primary">
            {{ title }}
          </p>
          <p class="text-primary/60 text-sm md:text-base leading-relaxed font-medium">
            {{ content }}
          </p>
        </div>
      </div>
      <div class="lg:col-span-4 h-[40vh] md:h-[60vh] rounded-full overflow-hidden border border-white/10 shadow-2xl relative group bg-primary/5">
        <ParallaxImage src="1512917774080-9991f1c4c750" :speed="0.05" />
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-12 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
          <p class="text-[10px] font-black uppercase tracking-[0.5em] mb-4 text-primary">View Global Portfolio</p>
          <div class="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary">
            <ChevronRight :size="24" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
defineProps<{
  title: string
  content: string
}>()
</script>
