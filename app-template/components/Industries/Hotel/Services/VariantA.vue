<template>
  <section class="py-16 md:py-48 bg-white text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div 
          v-for="(service, idx) in services" 
          :key="idx" 
          class="service-card p-8 md:p-12 bg-background rounded-3xl md:rounded-[3rem] hover:bg-primary hover:text-white transition-all duration-1000 group cursor-pointer flex flex-col justify-between aspect-square sm:aspect-[3/4]"
        >
          <div class="space-y-8 md:space-y-12">
            <div class="w-12 h-12 md:w-16 md:h-16 rounded-full border border-primary/10 group-hover:border-white/20 flex items-center justify-center transition-colors">
              <component :is="service.icon" :size="24" class="md:hidden opacity-20 group-hover:opacity-100 transition-opacity" />
              <component :is="service.icon" :size="32" class="hidden md:block opacity-20 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 class="text-3xl md:text-4xl font-serif italic leading-none">{{ service.title }}</h3>
          </div>
          <div class="space-y-6 md:space-y-8">
            <p class="text-xs md:text-sm font-medium italic leading-relaxed opacity-40 group-hover:opacity-100 transition-opacity">
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
