<template>
  <section class="py-48 bg-white text-background px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-end">
      <div class="lg:col-span-8 space-y-24">
        <h2 class="text-[12vw] font-black leading-none uppercase tracking-widest text-accent opacity-20 hover:opacity-100 transition-opacity duration-700">
          LEGACY
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <p class="text-2xl font-black leading-snug uppercase tracking-tight">
            {{ title }}
          </p>
          <p class="text-secondary leading-relaxed font-medium">
            {{ content }}
          </p>
        </div>
      </div>
      <div class="lg:col-span-4 h-[60vh] rounded-full overflow-hidden border border-gray-100 shadow-2xl relative group">
        <ParallaxImage src="https://images.unsplash.com/photo-1600607687940-477a127195c4?auto=format&fit=crop&w=800" speed="0.05" />
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center p-12 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity">
          <p class="text-xs font-black uppercase tracking-[0.5em] mb-4">View Global Portfolio</p>
          <div class="w-12 h-12 rounded-full border-2 border-background flex items-center justify-center">
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
