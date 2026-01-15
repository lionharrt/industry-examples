<template>
  <section class="py-24 md:py-48 bg-[#1A1A1A] text-white px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
      <div 
        v-for="(service, idx) in services" 
        :key="idx" 
        class="service-card relative aspect-[3/4] p-8 md:p-12 overflow-hidden flex flex-col justify-end border border-white/5 group hover:border-[#D4AF37]/50 transition-all duration-700 shadow-2xl"
      >
        <!-- Background Reveal Image -->
        <div class="absolute inset-0 z-0 scale-125 group-hover:scale-100 opacity-20 group-hover:opacity-40 transition-all duration-1000 grayscale group-hover:grayscale-0">
          <img :src="service.image || 'https://images.unsplash.com/photo-1550966841-3ee3ad3ae447'" class="w-full h-full object-cover" />
        </div>
        
        <div class="relative z-10 space-y-4 md:space-y-6">
          <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mb-4 md:mb-8 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
            <component :is="LucideIcons[service.icon as keyof typeof LucideIcons]" :size="18" class="md:hidden" />
            <component :is="LucideIcons[service.icon as keyof typeof LucideIcons]" :size="20" class="hidden md:block" />
          </div>
          <h3 class="text-2xl md:text-3xl font-serif leading-tight group-hover:italic transition-all">{{ service.title }}</h3>
          <p class="text-sm text-white/50 leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 italic font-light">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as LucideIcons from 'lucide-vue-next'

defineProps<{ services: any[] }>()
</script>
