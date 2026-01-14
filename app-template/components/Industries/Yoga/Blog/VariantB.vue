<template>
  <section class="py-32 bg-[#f5f1e9]">
    <div class="max-w-7xl mx-auto px-6">
      <div class="mb-24 flex items-center gap-12">
        <h2 class="text-6xl md:text-[8vw] font-serif text-primary opacity-10 uppercase italic select-none">Insights</h2>
        <div class="flex-1 h-[1px] bg-primary/5"></div>
      </div>

      <div class="space-y-4">
        <div v-for="(post, index) in posts" :key="index" 
             class="group bg-white p-10 md:p-16 rounded-[100px] flex flex-col md:flex-row gap-16 items-center hover:bg-primary hover:text-white transition-all duration-700 yoga-blog-row opacity-0"
        >
          <div class="w-full md:w-1/4 aspect-square overflow-hidden rounded-full border-8 border-[#f5f1e9] group-hover:border-white/10 transition-all">
            <img :src="post.image" :alt="post.title" class="w-full h-full object-cover">
          </div>
          <div class="flex-1 space-y-6">
            <div class="flex items-center gap-6 text-[9px] font-black uppercase tracking-[0.4em] text-accent group-hover:text-white/40 transition-colors">
              <span>{{ post.category }}</span>
              <span class="w-8 h-[1px] bg-accent/20"></span>
              <span>{{ post.date }}</span>
            </div>
            <h3 class="text-4xl font-serif leading-tight">{{ post.title }}</h3>
            <p class="text-primary/40 group-hover:text-white/60 transition-colors italic max-w-2xl">{{ post.excerpt }}</p>
          </div>
          <div class="flex-shrink-0">
            <div class="w-20 h-20 rounded-full border border-primary/5 group-hover:border-white/20 flex items-center justify-center transition-all group-hover:rotate-45">
              <svg viewBox="0 0 24 24" class="w-8 h-8 fill-none stroke-current" stroke-width="1">
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
    y: -30,
    duration: 1.5,
    stagger: 0.4,
    ease: 'expo.out'
  })
})
</script>
