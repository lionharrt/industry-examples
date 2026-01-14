<template>
  <section class="py-40 bg-primary text-white relative overflow-hidden">
    <!-- Ethereal Background -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50"></div>
      <div class="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent opacity-30"></div>
    </div>

    <div class="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-16">
      <div class="flex flex-col items-center gap-8">
        <div class="w-[1px] h-24 bg-gradient-to-b from-transparent via-accent to-transparent about-line opacity-0"></div>
        <h2 class="text-4xl md:text-6xl font-serif italic font-light about-h2 opacity-0">
          {{ title }}
        </h2>
      </div>
      
      <p class="text-2xl md:text-3xl text-white/40 font-light leading-relaxed about-p opacity-0">
        {{ content }}
      </p>

      <div class="flex flex-wrap justify-center gap-16 pt-12 about-stats opacity-0">
        <div v-for="stat in stats" :key="stat.label" class="text-center group">
          <div class="text-6xl font-light mb-4 text-accent transition-transform duration-500 group-hover:scale-110">{{ stat.value }}</div>
          <div class="text-[9px] font-black uppercase tracking-[0.4em] text-white/20">{{ stat.label }}</div>
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

defineProps<{ title: string, content: string, stats: Array<{ label: string, value: string }> }>()

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.about-h2',
      start: 'top 80%',
    }
  })
  
  tl.to('.about-line', { opacity: 1, scaleY: 1.5, duration: 1.5 })
    .to('.about-h2', { opacity: 1, y: -30, duration: 1.2 }, '-=1')
    .to('.about-p', { opacity: 1, y: -20, duration: 1.2 }, '-=0.8')
    .to('.about-stats', { opacity: 1, duration: 1 }, '-=0.5')
})
</script>
