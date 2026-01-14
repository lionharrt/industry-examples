<template>
  <section class="py-48 bg-white text-background px-12 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(service, idx) in services" 
          :key="idx" 
          class="service-card p-12 bg-gray-50 border border-gray-100 rounded-3xl hover:bg-background hover:text-primary transition-all duration-700 group cursor-pointer shadow-sm hover:shadow-2xl"
        >
          <div class="w-16 h-16 rounded-full border border-background group-hover:border-accent flex items-center justify-center mb-12 transition-colors duration-500">
            <component :is="service.icon" :size="32" class="text-background group-hover:text-accent transition-colors" />
          </div>
          <h3 class="text-3xl font-bold uppercase tracking-tighter mb-6">{{ service.title }}</h3>
          <p class="text-secondary group-hover:text-primary/60 leading-relaxed font-medium transition-colors">{{ service.description }}</p>
          <div class="mt-12 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-secondary group-hover:text-accent transition-colors">
            <span>Learn More</span>
            <div class="h-px flex-1 bg-current opacity-20"></div>
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
