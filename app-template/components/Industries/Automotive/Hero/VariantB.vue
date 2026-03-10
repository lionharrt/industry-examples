<template>
  <section class="relative min-h-screen w-full bg-[#B4B4B4] text-[#0A0A0A] flex items-center overflow-hidden px-6 md:px-24 py-16 md:py-0">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-center">
      <div class="lg:col-span-6 space-y-6 md:space-y-12 relative z-10 text-center lg:text-left">
        <div class="w-24 md:w-32 h-1 md:h-2 bg-[#E60000] mx-auto lg:mx-0"></div>
        <h1 class="text-5xl sm:text-7xl md:text-8xl font-black italic leading-tight tracking-tighter uppercase">
          {{ title?.split(' ')[0] }}<br/>
          <span class="text-[#E60000] drop-shadow-[2px_2px_0_#0A0A0A] md:drop-shadow-[4px_4px_0_#0A0A0A] leading-none">{{ title?.split(' ').slice(1).join(' ') }}</span>
        </h1>
        <p class="text-sm sm:text-lg md:text-2xl font-bold uppercase tracking-widest max-w-xl opacity-60 italic mx-auto lg:mx-0">
          {{ subtitle }}
        </p>
        <button class="group flex items-center gap-4 md:gap-8 text-base md:text-xl font-black uppercase italic tracking-widest bg-[#0A0A0A] text-white px-8 md:px-12 py-3 md:py-4 rounded-full hover:bg-[#E60000] transition-colors duration-500 mx-auto lg:mx-0">
          <span>{{ cta }}</span>
          <ArrowRight :size="20" class="md:hidden group-hover:translate-x-2 transition-transform" />
          <ArrowRight :size="24" class="hidden md:block group-hover:translate-x-4 transition-transform" />
        </button>
      </div>
      
      <div class="lg:col-span-6 relative h-full hidden lg:block">
        <div class="aspect-square bg-[#0A0A0A] rotate-45 scale-125 overflow-hidden shadow-2xl">
          <div class="rotate-[-45deg] scale-150 h-full w-full hero-image-container">
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200" class="w-full h-full object-cover grayscale hero-image" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import gsap from 'gsap'

defineProps<{ title: string, subtitle: string, cta: string }>()

onMounted(() => {
  gsap.to('.hero-image', {
    scale: 1.2,
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  })
  
  gsap.to('.hero-image-container', {
    x: 10,
    y: 10,
    duration: 15,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  })
})
</script>
