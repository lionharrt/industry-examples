<template>
  <section class="py-32 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
        <div class="space-y-6">
          <span class="text-accent font-bold uppercase tracking-[0.4em] text-[9px]">Soul Insights</span>
          <h2 class="text-5xl md:text-6xl font-serif text-primary tracking-tight leading-none">{{ title }}</h2>
          <p class="text-primary/40 max-w-xl font-light leading-relaxed italic">{{ subtitle }}</p>
        </div>
        <button class="text-[10px] font-black uppercase tracking-widest border-b border-primary/10 pb-2 hover:text-accent hover:border-accent transition-all duration-500">Explore Entire Library</button>
      </div>

      <div class="grid md:grid-cols-3 gap-16">
        <div v-for="(post, index) in posts" :key="index" class="group yoga-blog-card opacity-0 translate-y-10">
          <div class="aspect-[4/5] overflow-hidden rounded-[60px] mb-10 relative">
            <img :src="post.image" :alt="post.title" class="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale group-hover:grayscale-0">
            <div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div class="space-y-6">
            <div class="flex items-center gap-6 text-[9px] font-black uppercase tracking-[0.3em] text-primary/30">
              <span class="text-accent">{{ post.category }}</span>
              <span class="w-1 h-1 rounded-full bg-primary/10"></span>
              <span>{{ post.date }}</span>
            </div>
            <h3 class="text-3xl font-serif text-primary group-hover:italic transition-all duration-500 leading-snug">{{ post.title }}</h3>
            <p class="text-primary/50 leading-relaxed font-light line-clamp-2 italic">{{ post.excerpt }}</p>
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
  gsap.to('.yoga-blog-card', {
    scrollTrigger: {
      trigger: '.yoga-blog-card',
      start: 'top 85%',
    },
    opacity: 1,
    y: 0,
    duration: 1.5,
    stagger: 0.3,
    ease: 'power3.out'
  })
})
</script>
