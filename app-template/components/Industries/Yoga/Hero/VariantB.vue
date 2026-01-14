<template>
  <section class="relative h-screen w-full bg-white flex items-center overflow-hidden">
    <div class="flex flex-col lg:flex-row w-full h-full">
      <!-- Image Side with Masking -->
      <div class="w-full lg:w-1/2 h-[50vh] lg:h-full relative overflow-hidden order-2 lg:order-1">
        <img 
          src="https://images.unsplash.com/photo-1545208393-2160281b8f55" 
          alt="Yoga Practice" 
          class="w-full h-full object-cover hero-image scale-125"
        >
        <div class="absolute inset-0 bg-accent/5 mix-blend-multiply"></div>
        <!-- Decorative SVG Shape -->
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="absolute inset-0 w-full h-full text-white fill-current opacity-10">
          <path d="M0 0 Q50 50 100 0 V100 H0 Z" />
        </svg>
      </div>

      <!-- Content Side -->
      <div class="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 z-10 order-1 lg:order-2">
        <div class="max-w-xl space-y-12">
          <div class="space-y-6">
            <div class="flex items-center gap-4 hero-line opacity-0">
              <div class="w-12 h-[1px] bg-accent"></div>
              <span class="text-accent font-bold tracking-[0.3em] uppercase text-[10px]">Guided Practice</span>
            </div>
            <h1 class="text-5xl md:text-7xl font-serif text-primary leading-[1.1] hero-title opacity-0">
              {{ title.split(' ')[0] }} <br/>
              <span class="italic font-light ml-8">{{ title.split(' ').slice(1).join(' ') }}</span>
            </h1>
          </div>
          <p class="text-lg text-primary/60 leading-relaxed hero-subtitle opacity-0">
            {{ subtitle }}
          </p>
          <div class="hero-cta opacity-0">
            <button class="group relative px-10 py-4 overflow-hidden">
              <span class="relative z-10 text-primary font-bold uppercase tracking-widest text-xs transition-colors group-hover:text-white">{{ cta }}</span>
              <div class="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-expo"></div>
              <div class="absolute inset-0 border border-primary/20"></div>
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

defineProps<{ title: string, subtitle: string, cta: string }>()

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.5 })
  tl.to('.hero-line', { opacity: 1, x: 20, duration: 1.2 })
    .to('.hero-title', { opacity: 1, y: -20, duration: 1.5, ease: 'power4.out' }, '-=0.8')
    .to('.hero-subtitle', { opacity: 1, duration: 1.2 }, '-=1')
    .to('.hero-cta', { opacity: 1, duration: 1 }, '-=0.8')
    .to('.hero-image', { scale: 1, duration: 2.5, ease: 'power2.out' }, 0)
})
</script>

<style scoped>
.ease-expo {
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}
</style>
