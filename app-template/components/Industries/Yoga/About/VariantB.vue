<template>
  <section class="py-32 bg-[#f5f1e9] relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="flex flex-col lg:flex-row gap-24 items-center">
        <!-- Composition of Images -->
        <div class="w-full lg:w-1/2 relative h-[600px] about-stack">
          <div class="absolute top-0 left-0 w-3/4 h-3/4 rounded-full overflow-hidden shadow-xl img-top opacity-0">
            <img src="https://images.unsplash.com/photo-1545208393-2160281b8f55" alt="Yoga" class="w-full h-full object-cover">
          </div>
          <div class="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-[60px] overflow-hidden shadow-2xl border-12 border-white/50 img-bottom opacity-0">
            <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773" alt="Meditation" class="w-full h-full object-cover">
          </div>
        </div>

        <div class="w-full lg:w-1/2 space-y-10 about-text opacity-0">
          <div class="inline-block px-4 py-1 rounded-full border border-accent/20 text-accent text-[9px] font-black uppercase tracking-[0.3em]">The Philosophy</div>
          <h2 class="text-5xl md:text-7xl font-serif text-primary leading-tight">{{ title }}</h2>
          <p class="text-lg text-primary/60 leading-relaxed max-w-lg italic">
            "{{ content }}"
          </p>
          <div class="pt-6 flex gap-8">
            <button class="bg-primary text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-accent transition-all">Discover Our Roots</button>
            <button class="text-primary text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group">
              Meet Teachers <span class="group-hover:translate-x-2 transition-transform">→</span>
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
      trigger: '.about-stack',
      start: 'top 70%',
    }
  })
  
  tl.to('.img-top', { opacity: 1, scale: 1.1, duration: 1.5, ease: 'power2.out' })
    .to('.img-bottom', { opacity: 1, y: -20, duration: 1.2 }, '-=1')
    .to('.about-text', { opacity: 1, x: 20, duration: 1.2 }, '-=0.8')
})
</script>
