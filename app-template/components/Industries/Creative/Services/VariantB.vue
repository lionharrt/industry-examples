<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
      <div 
        v-for="(service, idx) in services" 
        :key="idx" 
        class="service-card aspect-square border-2 border-white/5 p-8 md:p-16 flex flex-col justify-between group hover:bg-accent transition-all duration-700 relative overflow-hidden rounded-3xl md:rounded-[4rem]"
      >
        <div class="absolute -right-4 -top-8 text-8xl md:text-[12vw] font-black opacity-5 group-hover:opacity-20 group-hover:rotate-12 transition-all duration-700 leading-none select-none pointer-events-none">
          {{ service.title.charAt(0) }}
        </div>
        
        <div class="relative z-10">
          <div class="w-12 h-12 md:w-20 md:h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-background group-hover:scale-110 transition-all duration-500">
            <component :is="LucideIcons[service.icon]" :size="32" class="text-secondary group-hover:text-accent" />
          </div>
          <h3 class="text-3xl md:text-5xl font-black uppercase leading-none group-hover:text-background transition-colors">{{ service.title }}</h3>
        </div>

        <div class="relative z-10 space-y-4">
          <p class="text-[10px] md:text-sm font-black uppercase tracking-widest opacity-40 group-hover:text-background group-hover:opacity-100 transition-all leading-relaxed">{{ service.description }}</p>
          <div class="flex items-center gap-2 md:gap-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <div class="w-8 md:w-12 h-px bg-background"></div>
            <span class="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-background">VIEW_DETAILS</span>
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
