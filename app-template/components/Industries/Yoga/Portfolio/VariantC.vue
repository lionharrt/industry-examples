<template>
  <section class="py-32 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-32">
        <div v-for="(item, index) in items" :key="index" 
             class="flex flex-col gap-12 portfolio-item-alt opacity-0"
             :class="{ 'mt-40': index % 2 !== 0 }"
        >
          <div class="aspect-[3/4] overflow-hidden rounded-full shadow-2xl relative">
            <img :src="item.image" :alt="item.title" class="w-full h-full object-cover">
            <!-- Subtle floating pose name -->
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span class="text-[12vw] font-serif text-white/5 uppercase italic">{{ item.title.split(' ')[0] }}</span>
            </div>
          </div>
          <div class="space-y-6 text-center md:text-left px-8">
            <h3 class="text-4xl font-serif text-primary">{{ item.title }}</h3>
            <p class="text-primary/40 font-light leading-relaxed">A sanctuary for intentional movement and deep internal peace. Join our community of mindful practice.</p>
            <div class="pt-4">
              <div class="w-12 h-[1px] bg-accent mx-auto md:mx-0"></div>
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
  gsap.utils.toArray('.portfolio-item-alt').forEach((item: any) => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
      },
      opacity: 1,
      y: -50,
      duration: 2,
      ease: 'expo.out'
    })
  })
})
</script>
