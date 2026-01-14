<template>
  <section class="py-24 bg-[#f8f9fa] relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="flex flex-col lg:flex-row gap-16 items-center">
        <!-- Overlapping Images -->
        <div class="w-full lg:w-1/2 relative h-[500px] about-images">
          <div class="absolute top-0 right-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-xl img-1 opacity-0 translate-y-10">
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef" alt="Clinic" class="w-full h-full object-cover">
          </div>
          <div class="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl border-8 border-white img-2 opacity-0 -translate-y-10">
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d" alt="Therapy" class="w-full h-full object-cover">
          </div>
        </div>

        <div class="w-full lg:w-1/2 space-y-8 about-text opacity-0 translate-y-10">
          <span class="text-accent font-bold uppercase tracking-widest text-sm">Our Philosophy</span>
          <h2 class="text-4xl md:text-6xl font-serif text-primary leading-tight">{{ title }}</h2>
          <p class="text-lg text-primary/60 leading-relaxed max-w-lg">
            {{ content }}
          </p>
          <div class="pt-6">
            <button class="flex items-center gap-4 group">
              <span class="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg viewBox="0 0 24 24" class="w-5 h-5 fill-none stroke-current" stroke-width="2">
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </span>
              <span class="font-bold uppercase tracking-widest text-sm">Learn More About Us</span>
            </button>
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

defineProps<{ title: string, content: string }>()

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.about-images',
      start: 'top 70%',
    }
  })
  
  tl.to('.img-1', { opacity: 1, y: 0, duration: 1 })
    .to('.img-2', { opacity: 1, y: 0, duration: 1 }, '-=0.5')
    .to('.about-text', { opacity: 1, y: 0, duration: 1 }, '-=0.8')
})
</script>
