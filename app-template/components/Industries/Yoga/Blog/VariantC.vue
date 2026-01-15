<template>
  <section class="py-16 md:py-32 bg-primary text-white overflow-hidden relative px-6">
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-12">
        <div class="lg:col-span-1 self-center space-y-6 md:space-y-10 text-center lg:text-left">
          <h2 class="text-4xl md:text-5xl font-serif leading-tight italic tracking-tighter">{{ title }}</h2>
          <p class="text-sm md:text-base text-white/30 font-light leading-relaxed max-w-sm mx-auto lg:mx-0">{{ subtitle }}</p>
          <div class="pt-4 flex justify-center lg:justify-start">
            <div class="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/5 flex items-center justify-center animate-pulse">
              <div class="w-2 h-2 rounded-full bg-accent"></div>
            </div>
          </div>
        </div>
        
        <div v-for="(post, index) in posts" :key="index" class="group yoga-blog-tile opacity-0">
          <div class="relative aspect-[3/4] rounded-[40px] md:rounded-[60px] overflow-hidden mb-6 md:mb-10 group-hover:scale-[1.02] transition-transform duration-700 shadow-2xl">
            <img :src="post.image" :alt="post.title" class="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000">
            <div class="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent flex flex-col justify-end p-8 md:p-12 lg:translate-y-12 group-hover:translate-y-0 transition-transform duration-700">
              <span class="text-[8px] font-black uppercase tracking-[0.4em] text-accent mb-3 md:mb-4">{{ post.category }}</span>
              <h3 class="text-xl md:text-2xl font-serif leading-tight">{{ post.title }}</h3>
              <div class="mt-6 md:mt-8 overflow-hidden h-0 lg:group-hover:h-12 transition-all duration-700">
                <button class="text-[9px] font-black uppercase tracking-widest text-white/40 flex items-center gap-3">
                  Read More <span class="text-lg">→</span>
                </button>
              </div>
              <!-- Mobile Always Visible Link -->
              <div class="mt-4 lg:hidden">
                <button class="text-[9px] font-black uppercase tracking-widest text-accent flex items-center gap-2">
                  Read More <span>→</span>
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
