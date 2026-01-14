<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24 border-y border-white/5">
    <div class="max-w-7xl mx-auto space-y-px bg-white/5 border border-white/5 overflow-hidden rounded-3xl">
      <div 
        v-for="(service, idx) in services" 
        :key="idx" 
        class="group flex flex-col md:flex-row items-center justify-between py-24 px-12 md:px-24 bg-background hover:bg-accent hover:text-background transition-all duration-1000 cursor-pointer border-b border-white/5 last:border-0"
      >
        <div class="flex items-center gap-12 md:w-1/2">
          <span class="text-xs font-black uppercase tracking-[1em] opacity-20 group-hover:opacity-100 transition-opacity">0{{ idx + 1 }}</span>
          <h3 class="text-5xl md:text-6xl font-bold uppercase tracking-tighter shadow-sm group-hover:translate-x-4 transition-transform">{{ service.title }}</h3>
        </div>
        <div class="mt-12 md:mt-0 md:w-1/3 space-y-8 text-center md:text-right">
          <p class="text-lg font-medium opacity-60 group-hover:opacity-100 transition-opacity">
            {{ service.description }}
          </p>
          <div class="flex justify-center md:justify-end">
            <div class="w-12 h-12 rounded-full border border-white group-hover:border-background flex items-center justify-center transition-all">
              <ArrowRight :size="20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
defineProps<{ services: any[] }>()
</script>
