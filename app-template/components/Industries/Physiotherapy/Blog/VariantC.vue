<template>
  <section class="py-16 md:py-24 bg-primary text-white overflow-hidden px-6">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
        <div class="lg:col-span-1 space-y-6 self-center text-center lg:text-left">
          <h2 class="text-3xl md:text-4xl font-light leading-tight">{{ title }}</h2>
          <p class="text-sm md:text-base text-white/40 font-light max-w-sm mx-auto lg:mx-0">{{ subtitle }}</p>
          <div class="pt-4 flex justify-center lg:justify-start">
            <button class="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all group">
              <svg viewBox="0 0 24 24" class="w-4 h-4 md:w-5 md:h-5 fill-none stroke-current" stroke-width="2"><path d="M5 12h14m-7-7l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
        
        <div v-for="(post, index) in posts" :key="index" class="group blog-item opacity-0">
          <div class="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 md:mb-6 shadow-xl">
            <img :src="post.image" :alt="post.title" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 md:p-8">
              <span class="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-accent mb-2">{{ post.category }}</span>
              <h3 class="text-lg md:text-xl font-light leading-tight">{{ post.title }}</h3>
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

defineProps<{ title: string, subtitle: string, posts: Array<any> }>()

onMounted(() => {
  gsap.to('.blog-item', {
    scrollTrigger: {
      trigger: '.blog-item',
      start: 'top 85%',
    },
    opacity: 1,
    duration: 1.5,
    stagger: 0.3,
    ease: 'expo.out'
  })
})
</script>
