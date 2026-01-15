<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="space-y-20 md:space-y-32">
        <div v-for="(item, index) in items" :key="index" 
             class="flex flex-col lg:flex-row gap-10 md:gap-16 items-center portfolio-row opacity-0"
             :class="{ 'lg:flex-row-reverse': index % 2 !== 0 }"
        >
          <div class="w-full lg:w-3/5 aspect-video overflow-hidden rounded-lg shadow-lg">
            <img :src="item.image" :alt="item.title" class="w-full h-full object-cover">
          </div>
          <div class="w-full lg:w-2/5 space-y-4 md:space-y-6 text-center lg:text-left">
            <span class="text-accent font-serif italic text-xl md:text-2xl">0{{ index + 1 }}</span>
            <h3 class="text-3xl md:text-4xl font-light text-primary leading-tight">{{ item.title }}</h3>
            <p class="text-sm md:text-base text-primary/50 leading-relaxed max-w-md mx-auto lg:mx-0 font-light">
              Experience the tranquility of our specialized recovery environments designed for optimal healing.
            </p>
            <div class="pt-2 md:pt-4">
              <button class="border-b border-primary/20 pb-2 text-[10px] md:text-sm font-bold uppercase tracking-widest hover:border-accent hover:text-accent transition-all">
                Full Details
              </button>
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
  gsap.utils.toArray('.portfolio-row').forEach((row: any) => {
    gsap.to(row, {
      scrollTrigger: {
        trigger: row,
        start: 'top 85%',
      },
      opacity: 1,
      y: -30,
      duration: 1.5,
      ease: 'expo.out'
    })
  })
})
</script>
