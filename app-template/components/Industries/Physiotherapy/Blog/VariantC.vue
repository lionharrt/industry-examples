<template>
  <section class="py-24 bg-primary text-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-4 gap-8">
        <div class="lg:col-span-1 space-y-6 self-center">
          <h2 class="text-4xl font-light leading-tight">{{ title }}</h2>
          <p class="text-white/40 font-light">{{ subtitle }}</p>
          <div class="pt-4">
            <button class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all group">
              <svg viewBox="0 0 24 24" class="w-5 h-5 fill-none stroke-current" stroke-width="2"><path d="M5 12h14m-7-7l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
        
        <div v-for="(post, index) in posts" :key="index" class="group blog-item opacity-0">
          <div class="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
            <img :src="post.image" :alt="post.title" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
              <span class="text-[9px] font-black uppercase tracking-[0.3em] text-accent mb-2">{{ post.category }}</span>
              <h3 class="text-xl font-light leading-tight">{{ post.title }}</h3>
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
