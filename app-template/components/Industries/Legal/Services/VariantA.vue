<template>
  <section class="py-48 bg-background text-white px-12 md:px-24">
    <div class="max-w-7xl mx-auto space-y-24">
      <div class="flex flex-col md:flex-row justify-between items-baseline gap-12 border-b border-accent/30 pb-12">
        <h2 class="text-7xl font-serif italic tracking-tighter text-accent">Legal Expertise</h2>
        <p class="text-xs font-black uppercase tracking-[1em] opacity-40 italic">CORE_PRACTICES</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div v-for="(service, idx) in services" :key="idx" class="p-16 border border-white/5 bg-white/5 hover:bg-white hover:text-background transition-all duration-1000 group cursor-pointer flex flex-col h-[50vh] justify-between relative overflow-hidden">
          <div class="absolute -top-12 -right-12 text-9xl font-serif italic opacity-5 group-hover:opacity-10 transition-opacity italic">0{{ idx + 1 }}</div>
          
          <div class="space-y-8 relative z-10">
            <component :is="getIcon(service.icon)" :size="48" stroke-width="1" class="text-accent" />
            <h3 class="text-4xl font-serif italic tracking-tighter group-hover:translate-x-4 transition-transform">{{ service.name }}</h3>
          </div>
          
          <div class="relative z-10">
            <p class="text-lg font-light italic opacity-60 mb-12">{{ service.description }}</p>
            <button class="flex items-center gap-4 text-xs font-black uppercase tracking-widest group-hover:text-accent transition-colors">
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
