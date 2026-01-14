<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24 border-y border-black/5">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5 border border-black/5 rounded-[3rem] overflow-hidden shadow-2xl">
        <div 
          v-for="(service, idx) in services" 
          :key="idx" 
          class="service-card p-16 bg-background hover:bg-primary hover:text-white transition-all duration-700 group cursor-pointer flex flex-col justify-between aspect-square"
        >
          <div class="space-y-12">
            <span class="text-xs font-black uppercase tracking-[0.5em] text-accent">0{{ idx + 1 }}</span>
            <h3 class="text-4xl font-black uppercase tracking-tighter leading-none">{{ service.title }}</h3>
          </div>
          <div class="space-y-8">
            <p class="text-sm font-medium leading-relaxed opacity-40 group-hover:opacity-100 transition-opacity">
              {{ service.description }}
            </p>
            <div class="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:scale-110 transition-transform">
              <component :is="service.icon" :size="20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as LucideIcons from 'lucide-vue-next'
defineProps<{ services: any[] }>()
</script>
