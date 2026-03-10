<template>
  <section class="min-h-screen bg-[#FF5F1F] relative flex items-center justify-center p-12 overflow-hidden py-24 md:py-0">
    <!-- Background Video -->
    <div class="absolute inset-0 z-0">
      <video 
        autoplay 
        muted 
        loop 
        playsinline
        class="w-full h-full object-cover opacity-20 mix-blend-overlay"
      >
        <source :src="video || 'https://storage.googleapis.com/industry-examples.firebasestorage.app/creative.mp4'" type="video/mp4">
      </video>
    </div>
    <div class="text-center relative z-10 px-4">
      <h1 ref="titleRef" class="text-6xl sm:text-8xl md:text-[10vw] font-black uppercase text-[#111111] leading-tight tracking-tighter md:scale-y-110">
        {{ title }}
      </h1>
      <div class="mt-16 md:mt-24 inline-flex items-center gap-4 md:gap-6 group cursor-pointer">
        <div class="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 md:border-4 border-[#111111] flex items-center justify-center group-hover:bg-[#111111] transition-all duration-500">
          <Play :size="24" class="group-hover:text-[#FF5F1F] text-[#111111] ml-1 md:hidden" />
          <Play :size="40" class="group-hover:text-[#FF5F1F] text-[#111111] ml-2 hidden md:block" />
        </div>
        <span class="text-lg md:text-2xl font-black uppercase tracking-widest text-[#111111]">Watch Reel</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { Play } from 'lucide-vue-next'

defineProps<{
  title: string
  subtitle: string
  video?: string
}>()

const titleRef = ref(null)

onMounted(() => {
  gsap.from(titleRef.value, {
    scaleY: 1,
    opacity: 0,
    duration: 2,
    ease: 'elastic.out(1, 0.3)'
  })
})
</script>
