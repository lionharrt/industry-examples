<template>
  <section class="py-16 md:py-32 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-primary/10 border border-primary/10">
        <div v-for="(service, idx) in services" :key="idx" class="p-8 md:p-12 bg-secondary group relative min-h-[400px] flex flex-col justify-between overflow-hidden">
          <div class="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-1000"></div>
          
          <div class="relative z-10 space-y-6 md:space-y-8">
            <h3 class="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-accent italic">STRATEGIC_PRACTICE</h3>
            <h4 class="text-3xl md:text-4xl font-serif italic leading-[0.9] tracking-tighter text-primary group-hover:text-background transition-colors duration-700">{{ service.name }}</h4>
          </div>

          <div class="relative z-10 space-y-4 md:space-y-6 text-primary group-hover:text-background transition-colors duration-700 pt-8">
            <p class="text-base md:text-lg font-light italic leading-relaxed opacity-60 group-hover:opacity-100 italic">{{ service.description }}</p>
            <div class="flex items-center gap-4 pt-6 md:pt-8 border-t border-primary/10 group-hover:border-background/20">
              <component :is="getIcon(service.icon)" :size="24" class="md:hidden text-accent" stroke-width="1" />
              <component :is="getIcon(service.icon)" :size="32" class="hidden md:block text-accent" stroke-width="1" />
              <button class="text-[10px] md:text-xs font-black uppercase tracking-widest italic text-primary group-hover:text-accent transition-colors">REQUEST_BRIEF</button>
            </div>
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
