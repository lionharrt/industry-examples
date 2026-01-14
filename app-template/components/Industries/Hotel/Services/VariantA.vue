<template>
  <section class="py-48 bg-white text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(service, idx) in services" 
          :key="idx" 
          class="service-card p-12 bg-background rounded-[3rem] hover:bg-background hover:text-white transition-all duration-1000 group cursor-pointer flex flex-col justify-between aspect-[3/4] shadow-sm"
        >
          <div class="space-y-12">
            <div class="w-16 h-16 rounded-full border border-primary/10 group-hover:border-white/20 flex items-center justify-center transition-colors">
              <component :is="service.icon" :size="32" class="opacity-20 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 class="text-4xl font-serif italic leading-none">{{ service.title }}</h3>
          </div>
          <div class="space-y-8">
            <p class="text-sm font-medium italic leading-relaxed opacity-40 group-hover:opacity-100 transition-opacity">
              {{ service.description }}
            </p>
            <div class="h-px w-full bg-primary/10 group-hover:bg-white/20 transition-colors"></div>
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
