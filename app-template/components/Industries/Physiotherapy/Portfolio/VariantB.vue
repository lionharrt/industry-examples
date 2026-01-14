<template>
  <section class="py-24 bg-[#f8f9fa] overflow-hidden">
    <div class="px-6 mb-12 flex justify-between items-end max-w-7xl mx-auto">
      <h2 class="text-5xl font-serif text-primary">Our Spaces</h2>
      <div class="flex gap-4">
        <div class="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">←</div>
        <div class="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">→</div>
      </div>
    </div>
    
    <div class="flex gap-8 px-6 overflow-x-auto pb-12 no-scrollbar portfolio-scroll">
      <div v-for="(item, index) in items" :key="index" 
           class="min-w-[400px] h-[500px] relative rounded-3xl overflow-hidden group"
      >
        <img :src="item.image" :alt="item.title" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105">
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-10">
          <h3 class="text-white text-3xl font-serif">{{ item.title }}</h3>
          <p class="text-accent font-bold uppercase tracking-widest text-xs mt-4">Clinical Excellence</p>
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
  gsap.from('.portfolio-scroll > div', {
    x: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: 'power3.out'
  })
})
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
