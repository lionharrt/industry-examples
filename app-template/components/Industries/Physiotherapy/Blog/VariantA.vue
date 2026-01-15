<template>
  <section class="py-16 md:py-24 bg-white px-6">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8">
        <div class="space-y-3 md:space-y-4">
          <span class="text-accent font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">Knowledge Base</span>
          <h2 class="text-3xl md:text-5xl font-serif text-primary leading-tight">{{ title }}</h2>
          <p class="text-sm md:text-base text-primary/50 max-w-xl font-light">{{ subtitle }}</p>
        </div>
        <button class="text-[10px] md:text-sm font-bold uppercase tracking-widest border-b-2 border-accent pb-2 hover:text-accent transition-colors self-start md:self-end">View All Articles</button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        <div v-for="(post, index) in posts" :key="index" class="group blog-card opacity-0 translate-y-10">
          <div class="aspect-[16/10] overflow-hidden rounded-[30px] mb-6 md:mb-8">
            <img :src="post.image" :alt="post.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
          </div>
          <div class="space-y-3 md:space-y-4">
            <div class="flex items-center gap-3 md:gap-4 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-primary/40">
              <span class="text-accent">{{ post.category }}</span>
              <span>•</span>
              <span>{{ post.date }}</span>
            </div>
            <h3 class="text-xl md:text-2xl font-serif text-primary group-hover:text-accent transition-colors duration-300 leading-tight">{{ post.title }}</h3>
            <p class="text-sm md:text-base text-primary/60 leading-relaxed line-clamp-2 italic font-light">{{ post.excerpt }}</p>
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
  gsap.to('.blog-card', {
    scrollTrigger: {
      trigger: '.blog-card',
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
