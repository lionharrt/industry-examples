<template>
  <section class="py-16 md:py-32 bg-[#f5f1e9] px-6">
    <div class="max-w-7xl mx-auto">
      <div class="mb-12 md:mb-24 flex items-center gap-6 md:gap-12">
        <h2 class="text-4xl md:text-[8vw] font-serif text-primary opacity-10 uppercase italic select-none leading-none">Insights</h2>
        <div class="flex-1 h-[1px] bg-primary/5"></div>
      </div>

      <div class="space-y-6 md:space-y-4">
        <div v-for="(post, index) in posts" :key="index" 
             class="group bg-white p-8 md:p-16 rounded-[40px] md:rounded-[100px] flex flex-col lg:flex-row gap-8 md:gap-16 items-center hover:bg-primary hover:text-white transition-all duration-700 yoga-blog-row opacity-0"
        >
          <div class="w-24 h-24 md:w-32 md:h-32 lg:w-1/4 aspect-square overflow-hidden rounded-full border-4 md:border-8 border-[#f5f1e9] group-hover:border-white/10 transition-all flex-shrink-0">
            <img :src="post.image" :alt="post.title" class="w-full h-full object-cover">
          </div>
          <div class="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
            <div class="flex items-center justify-center lg:justify-start gap-4 md:gap-6 text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-accent group-hover:text-white/40 transition-colors">
              <span>{{ post.category }}</span>
              <span class="w-6 md:w-8 h-[1px] bg-accent/20"></span>
              <span>{{ post.date }}</span>
            </div>
            <h3 class="text-2xl md:text-4xl font-serif leading-tight">{{ post.title }}</h3>
            <p class="text-sm md:text-base text-primary/40 group-hover:text-white/60 transition-colors italic max-w-2xl mx-auto lg:mx-0">{{ post.excerpt }}</p>
          </div>
          <div class="hidden lg:block flex-shrink-0">
            <div class="w-16 h-16 md:w-20 md:h-20 rounded-full border border-primary/5 group-hover:border-white/20 flex items-center justify-center transition-all group-hover:rotate-45">
              <svg viewBox="0 0 24 24" class="w-6 h-6 md:w-8 md:h-8 fill-none stroke-current" stroke-width="1">
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
  gsap.to('.yoga-blog-row', {
    scrollTrigger: {
      trigger: '.yoga-blog-row',
      start: 'top 85%',
    },
    opacity: 1,
    y: -20,
    duration: 1.5,
    stagger: 0.4,
    ease: 'expo.out'
  })
})
</script>
