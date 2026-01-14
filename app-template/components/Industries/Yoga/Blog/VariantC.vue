<template>
  <section class="py-32 bg-primary text-white overflow-hidden relative">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="grid lg:grid-cols-4 gap-12">
        <div class="lg:col-span-1 self-center space-y-10">
          <h2 class="text-5xl font-serif leading-tight italic tracking-tighter">{{ title }}</h2>
          <p class="text-white/30 font-light leading-relaxed">{{ subtitle }}</p>
          <div class="pt-6">
            <div class="w-16 h-16 rounded-full border border-white/5 flex items-center justify-center animate-pulse">
              <div class="w-2 h-2 rounded-full bg-accent"></div>
            </div>
          </div>
        </div>
        
        <div v-for="(post, index) in posts" :key="index" class="group yoga-blog-tile opacity-0">
          <div class="relative aspect-[3/4] rounded-[60px] overflow-hidden mb-10 group-hover:scale-[1.02] transition-transform duration-700">
            <img :src="post.image" :alt="post.title" class="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000">
            <div class="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent flex flex-col justify-end p-12 translate-y-12 group-hover:translate-y-0 transition-transform duration-700">
              <span class="text-[8px] font-black uppercase tracking-[0.4em] text-accent mb-4">{{ post.category }}</span>
              <h3 class="text-2xl font-serif leading-snug">{{ post.title }}</h3>
              <div class="mt-8 overflow-hidden h-0 group-hover:h-12 transition-all duration-700">
                <button class="text-[9px] font-black uppercase tracking-widest text-white/40 flex items-center gap-3">
                  Read More <span class="text-lg">→</span>
                </button>
              </div>
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
  gsap.to('.yoga-blog-tile', {
    scrollTrigger: {
      trigger: '.yoga-blog-tile',
      start: 'top 85%',
    },
    opacity: 1,
    duration: 2,
    stagger: 0.4,
    ease: 'power4.out'
  })
})
</script>
