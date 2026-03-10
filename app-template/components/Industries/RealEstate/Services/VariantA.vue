<template>
  <section class="py-24 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(service, idx) in services" 
          :key="idx" 
          class="service-card p-8 md:p-12 bg-white/5 border border-white/10 rounded-3xl hover:bg-white hover:text-[#000080] transition-all duration-700 group cursor-pointer shadow-sm hover:shadow-2xl"
        >
          <div class="w-16 h-16 rounded-full border border-white/20 group-hover:border-[#f7e7ce] flex items-center justify-center mb-8 md:mb-12 transition-colors duration-500">
            <component :is="service.icon" :size="32" class="text-white group-hover:text-[#f7e7ce] transition-colors" />
          </div>
          <h3 class="text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-6">{{ service.title }}</h3>
          <p class="text-white/60 group-hover:text-[#000080]/60 leading-relaxed font-medium transition-colors text-sm md:text-base">{{ service.description }}</p>
          <div class="mt-8 md:mt-12 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-[#f7e7ce] transition-colors">
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
