<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto space-y-12 md:space-y-24">
      <div class="flex flex-col md:flex-row justify-between items-center md:items-baseline gap-8 md:gap-12 border-b border-accent/30 pb-8 md:pb-12 text-center md:text-left">
        <h2 class="text-4xl sm:text-6xl md:text-7xl font-serif italic tracking-tighter text-accent">Legal Expertise</h2>
        <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] text-primary opacity-40 italic">CORE_PRACTICES</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
        <div v-for="(service, idx) in services" :key="idx" class="p-8 md:p-16 border border-primary/10 bg-secondary/5 hover:bg-primary hover:text-background transition-all duration-1000 group cursor-pointer flex flex-col min-h-[400px] md:h-[50vh] justify-between relative overflow-hidden shadow-sm">
          <div class="space-y-6 md:space-y-8 relative z-10">
            <component :is="getIcon(service.icon)" :size="32" class="md:hidden text-accent" stroke-width="1" />
            <component :is="getIcon(service.icon)" :size="48" stroke-width="1" class="hidden md:block text-accent" />
            <h3 class="text-3xl md:text-4xl font-serif italic tracking-tighter group-hover:translate-x-4 transition-transform text-primary group-hover:text-background">{{ service.name }}</h3>
          </div>
          
          <div class="relative z-10 pt-8 md:pt-0">
            <p class="text-base md:text-lg font-light italic text-primary opacity-60 group-hover:text-background transition-all mb-8 md:mb-12">{{ service.description }}</p>
            <button class="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-primary group-hover:text-accent transition-colors">
              <span>PRACTICE_DETAILS</span>
              <div class="w-12 h-px bg-current"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Briefcase, Shield, Scale } from 'lucide-vue-next'
defineProps<{ services: any[] }>()
const getIcon = (name: string) => {
  if (name === 'Briefcase') return Briefcase
  if (name === 'Shield') return Shield
  return Scale
}
</script>
