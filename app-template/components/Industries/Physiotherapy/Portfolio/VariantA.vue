<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="(item, index) in items" :key="index" 
             class="relative aspect-[4/5] overflow-hidden group portfolio-item opacity-0 translate-y-10"
             :class="{ 'md:col-span-2 md:aspect-auto': index === 0 }"
        >
          <img :src="item.image" :alt="item.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
          <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
            <div class="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 class="text-2xl font-serif">{{ item.title }}</h3>
              <p class="text-white/60 text-sm uppercase tracking-widest mt-2">View Facility</p>
            </div>
          </div>
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

defineProps<{ items: Array<{ title: string, image: string }> }>()

onMounted(() => {
  gsap.to('.portfolio-item', {
    scrollTrigger: {
      trigger: '.portfolio-item',
      start: 'top 85%',
    },
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
  })
})
</script>
