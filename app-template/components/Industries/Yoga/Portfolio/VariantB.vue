<template>
  <section class="py-16 md:py-32 bg-[#f5f1e9] overflow-hidden">
    <div class="px-6 mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-6 md:gap-8 text-center md:text-left">
      <h2 class="text-5xl sm:text-6xl md:text-8xl font-serif text-primary tracking-tighter opacity-10 uppercase select-none leading-none">Atmosphere</h2>
      <div class="flex gap-4 md:gap-6 items-center">
        <span class="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-primary/30">Drag to Explore</span>
        <div class="w-16 md:w-24 h-[1px] bg-primary/10"></div>
      </div>
    </div>
    
    <div class="flex gap-8 md:gap-12 px-6 overflow-x-auto pb-12 md:pb-20 no-scrollbar portfolio-carousel">
      <div v-for="(item, index) in items" :key="index" 
           class="min-w-[280px] sm:min-w-[350px] md:min-w-[500px] h-[450px] sm:h-[550px] md:h-[650px] relative rounded-[60px] md:rounded-[80px] overflow-hidden group shadow-2xl"
      >
        <img :src="item.image" :alt="item.title" class="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110 grayscale group-hover:grayscale-0">
        <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-16">
          <h3 class="text-white text-2xl md:text-4xl font-serif mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-700 leading-tight">{{ item.title }}</h3>
          <p class="text-accent font-bold uppercase tracking-widest text-[8px] md:text-[9px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">Peaceful Retreat</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

defineProps<{ items: Array<{ title: string, image: string }> }>()

onMounted(() => {
  gsap.from('.portfolio-carousel > div', {
    x: 100,
    opacity: 0,
    duration: 2,
    stagger: 0.4,
    ease: 'expo.out'
  })
})
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
