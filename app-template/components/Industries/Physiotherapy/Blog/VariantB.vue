<template>
  <section class="py-16 md:py-24 bg-[#f8f9fa] px-6">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12 md:mb-20 space-y-4">
        <h2 class="text-3xl md:text-5xl font-serif text-primary leading-tight">{{ title }}</h2>
        <div class="w-16 md:w-24 h-1 bg-accent mx-auto"></div>
      </div>

      <div class="space-y-4 md:space-y-1">
        <div v-for="(post, index) in posts" :key="index" 
             class="group bg-white p-6 md:p-12 rounded-[30px] md:rounded-none flex flex-col md:flex-row gap-8 md:gap-12 items-center hover:bg-accent hover:text-white transition-all duration-500 blog-row opacity-0"
        >
          <div class="w-full md:w-1/3 aspect-[16/9] overflow-hidden rounded-2xl">
            <img :src="post.image" :alt="post.title" class="w-full h-full object-cover">
          </div>
          <div class="flex-1 space-y-3 md:space-y-4 text-center md:text-left">
            <span class="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-accent group-hover:text-white/60 transition-colors">{{ post.category }}</span>
            <h3 class="text-2xl md:text-3xl font-serif leading-tight">{{ post.title }}</h3>
            <p class="text-sm md:text-base text-primary/50 group-hover:text-white/70 transition-colors line-clamp-2 italic font-light">{{ post.excerpt }}</p>
          </div>
          <div class="hidden md:block flex-shrink-0">
            <div class="w-12 h-12 md:w-16 md:h-16 rounded-full border border-primary/10 group-hover:border-white/20 flex items-center justify-center transition-all">
              <svg viewBox="0 0 24 24" class="w-5 h-5 md:w-6 md:h-6 fill-none stroke-current" stroke-width="2">
                <path d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
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

defineProps<{ title: string, posts: Array<any> }>()

onMounted(() => {
  gsap.to('.blog-row', {
    scrollTrigger: {
      trigger: '.blog-row',
      start: 'top 85%',
    },
    opacity: 1,
    y: -20,
    duration: 1,
    stagger: 0.2,
    ease: 'power2.out'
  })
})
</script>
