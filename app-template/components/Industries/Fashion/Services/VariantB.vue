<template>
  <section class="py-16 md:py-48 bg-white text-black px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      <div 
        v-for="(service, idx) in services" 
        :key="idx" 
        class="service-card aspect-square sm:aspect-[3/4] border-2 border-black p-8 md:p-12 flex flex-col justify-between group hover:bg-[#dc143c] hover:text-white hover:border-[#dc143c] transition-all duration-700 relative overflow-hidden"
      >
        <div class="relative z-10 space-y-4 md:space-y-8">
          <div class="w-8 md:w-12 h-px bg-black group-hover:bg-white transition-colors duration-700"></div>
          <h3 class="text-3xl md:text-4xl font-black uppercase leading-tight italic">{{ service.title }}</h3>
        </div>
        <div class="relative z-10 space-y-4 md:space-y-8 mt-12 md:mt-0">
          <p class="text-[10px] md:text-xs font-black uppercase tracking-widest opacity-40 group-hover:opacity-100">{{ service.description }}</p>
          <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black flex items-center justify-center group-hover:border-white transition-all">
            <ArrowUpRight :size="18" class="md:hidden" />
            <ArrowUpRight :size="20" class="hidden md:block" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
defineProps<{ services: any[] }>()
</script>
