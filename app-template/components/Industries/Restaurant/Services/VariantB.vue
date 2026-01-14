<template>
  <section class="py-48 bg-[#1A1A1A] text-white px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div 
        v-for="(service, idx) in services" 
        :key="idx" 
        class="service-card relative aspect-[3/4] p-12 overflow-hidden flex flex-col justify-end border border-white/5 group hover:border-[#D4AF37]/50 transition-all duration-700"
      >
        <!-- Background Reveal Image -->
        <div class="absolute inset-0 z-0 scale-125 group-hover:scale-100 opacity-20 group-hover:opacity-40 transition-all duration-1000 grayscale group-hover:grayscale-0">
          <img :src="service.image || 'https://images.unsplash.com/photo-1550966841-3ee3ad3ae447'" class="w-full h-full object-cover" />
        </div>
        
        <div class="relative z-10 space-y-6">
          <div class="w-12 h-12 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mb-8 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
            <component :is="LucideIcons[service.icon as keyof typeof LucideIcons]" :size="20" />
          </div>
          <h3 class="text-3xl font-serif leading-tight group-hover:italic transition-all">{{ service.title }}</h3>
          <p class="text-sm text-white/50 leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
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
