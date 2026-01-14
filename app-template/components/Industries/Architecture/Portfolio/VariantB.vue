<template>
  <section class="py-48 bg-primary overflow-hidden">
    <div class="px-12 md:px-24 mb-24 flex justify-between items-center">
      <h2 class="text-6xl font-black uppercase text-white tracking-tighter italic shadow-sm">SPATIAL <span class="text-accent">WORKS</span></h2>
      <div class="flex gap-4">
        <div v-for="i in 3" :key="i" class="w-12 h-1 bg-white/10 rounded-full"></div>
      </div>
    </div>

    <div ref="slider" class="flex gap-8 px-12 md:px-24">
      <div 
        v-for="(item, idx) in items" 
        :key="idx" 
        class="min-w-[85vw] md:min-w-[50vw] aspect-video relative rounded-3xl overflow-hidden group shadow-[0_0_100px_rgba(0,0,0,0.5)]"
      >
        <ParallaxImage :src="item.image + '?auto=format&fit=crop&w=1600'" speed="0.1" />
        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
        <div class="absolute bottom-12 left-12 right-12 flex justify-between items-end">
          <div>
            <p class="text-accent text-[10px] font-black uppercase tracking-[0.5em] mb-4 italic">Concept / Built</p>
            <h3 class="text-[5vw] font-black uppercase text-white leading-none tracking-tighter">{{ item.title }}</h3>
          </div>
          <button class="w-20 h-20 rounded-full bg-white text-primary flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-expo">
            <Maximize :size="32" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Maximize } from 'lucide-vue-next'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

defineProps<{ items: any[] }>()
const slider = ref(null)

onMounted(() => {
  gsap.to(slider.value, {
    x: () => -(slider.value.scrollWidth - window.innerWidth + 200),
    ease: "none",
    scrollTrigger: {
      trigger: slider.value,
      start: "top center",
      end: () => `+=${slider.value.scrollWidth}`,
      scrub: 1,
      pin: true,
      invalidateOnRefresh: true
    }
  })
})
</script>

<style scoped>
.ease-expo { transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
</style>
