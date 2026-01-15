<template>
  <section class="py-16 md:py-32 bg-[#f5f1e9]">
    <div class="max-w-7xl mx-auto px-6">
      <div class="mb-12 md:mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-0">
        <div class="space-y-3 md:space-y-4 text-center md:text-left w-full md:w-auto">
          <span class="text-accent font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">Curated Classes</span>
          <h2 class="text-3xl md:text-5xl font-serif text-primary leading-tight">Nurture Your Practice</h2>
        </div>
        <div class="hidden md:flex w-24 h-24 md:w-32 md:h-32 rounded-full border border-primary/5 items-center justify-center animate-spin-slow">
          <div class="w-2 h-2 rounded-full bg-accent"></div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        <div 
          v-for="(service, index) in services" 
          :key="service.name"
          class="bg-white p-8 md:p-12 rounded-[40px] md:rounded-[60px] shadow-sm hover:shadow-2xl transition-all duration-700 group service-card opacity-0 translate-y-10"
        >
          <div class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#f5f1e9] flex items-center justify-center text-accent mb-6 md:mb-10 group-hover:scale-110 transition-transform duration-500">
            <svg viewBox="0 0 24 24" class="w-8 h-8 md:w-10 md:h-10 fill-none stroke-current" stroke-width="1">
              <path v-if="service.icon === 'Wind'" d="M9.59 4.59A5 5 0 1 1 11 8H2m10.59 11.41A5 5 0 1 0 14 16H2m15.73-8.27A5 5 0 1 1 18 12H2" />
              <path v-else-if="service.icon === 'Moon'" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              <path v-else d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41m12.72-12.72l-1.41 1.41M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
            </svg>
          </div>
          <h3 class="text-2xl md:text-3xl font-serif text-primary mb-4 md:mb-6">{{ service.name }}</h3>
          <p class="text-sm md:text-base text-primary/50 leading-relaxed font-light mb-8 md:mb-10 line-clamp-3">
            {{ service.description }}
          </p>
          <button class="flex items-center gap-3 md:gap-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-primary/30 group-hover:text-accent transition-colors">
            Learn More
            <span class="w-7 h-7 md:w-8 md:h-8 rounded-full border border-primary/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">→</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

defineProps<{ services: Array<{ name: string, description: string, icon: string }> }>()

onMounted(() => {
  gsap.to('.service-card', {
    scrollTrigger: {
      trigger: '.service-card',
      start: 'top 85%',
    },
    opacity: 1,
    y: 0,
    duration: 1.2,
    stagger: 0.3,
    ease: 'power3.out'
  })
})
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 15s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
