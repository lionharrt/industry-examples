<template>
  <section class="py-48 bg-secondary text-background px-12 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        <div v-for="(service, idx) in services" :key="idx" class="p-16 bg-white group relative h-[70vh] flex flex-col justify-between overflow-hidden shadow-2xl">
          <div class="absolute inset-0 bg-background translate-y-full group-hover:translate-y-0 transition-transform duration-1000"></div>
          
          <div class="relative z-10 space-y-12">
            <h3 class="text-xs font-black uppercase tracking-[0.5em] text-accent italic">STRATEGIC_PRACTICE</h3>
            <h4 class="text-5xl font-serif italic leading-[0.9] tracking-tighter group-hover:text-white transition-colors duration-700">{{ service.name }}</h4>
          </div>

          <div class="relative z-10 space-y-8 group-hover:text-white transition-colors duration-700">
            <p class="text-xl font-light italic leading-relaxed opacity-60 group-hover:opacity-100 italic">{{ service.description }}</p>
            <div class="flex items-center gap-6 pt-12 border-t border-background/10 group-hover:border-white/20">
              <component :is="getIcon(service.icon)" :size="32" stroke-width="1" class="text-accent" />
              <button class="text-xs font-black uppercase tracking-widest italic group-hover:text-accent">REQUEST_BRIEF</button>
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
