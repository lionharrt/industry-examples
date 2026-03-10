<template>
  <section ref="section" class="bg-primary overflow-hidden">
    <div class="min-h-screen flex flex-col justify-center py-24">
      <div class="px-6 md:px-24 mb-12 md:mb-24 flex justify-between items-center">
        <h2 class="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tighter italic shadow-sm leading-none">SPATIAL <span class="text-accent">WORKS</span></h2>
        <div class="flex gap-2 md:gap-4">
          <div v-for="i in 3" :key="i" class="w-8 md:w-12 h-1 bg-white/10 rounded-full"></div>
        </div>
      </div>

      <div ref="slider" class="flex gap-6 md:gap-8 px-6 md:px-24">
        <div 
          v-for="(item, idx) in items" 
          :key="idx" 
          class="min-w-[85vw] md:min-w-[50vw] aspect-video relative rounded-2xl md:rounded-3xl overflow-hidden group shadow-[0_0_100px_rgba(0,0,0,0.5)]"
        >
          <ParallaxImage :src="item.image + '?auto=format&fit=crop&w=1600'" :speed="0.1" />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
          <div class="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 flex justify-between items-end">
            <div>
              <p class="text-accent text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] mb-2 md:mb-4 italic">Concept / Built</p>
              <h3 class="text-2xl sm:text-4xl md:text-[5vw] font-black uppercase text-white leading-none tracking-tighter">{{ item.title }}</h3>
            </div>
            <button class="w-12 h-12 md:w-20 md:h-20 rounded-full bg-white text-primary flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-expo">
              <Maximize :size="32" class="hidden md:block" />
              <Maximize :size="24" class="md:hidden" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Maximize } from 'lucide-vue-next'
import { ref, onMounted, onUnmounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

defineProps<{ items: any[] }>()
const section = ref(null)
const slider = ref(null)
let ctx: gsap.Context

onMounted(() => {
  setTimeout(() => {
    ctx = gsap.context(() => {
      if (slider.value && section.value && window.innerWidth >= 768) {
        const scrollWidth = slider.value.scrollWidth
        const windowWidth = window.innerWidth
        const scrollDistance = scrollWidth - windowWidth + (windowWidth * 0.2)

        gsap.to(slider.value, {
          x: () => -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: section.value,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1
          }
        })
      }
    })
    ScrollTrigger.refresh()
  }, 100)
})

onBeforeUnmount(() => {
  if (ctx) ctx.revert()
})

onUnmounted(() => {
  setTimeout(() => {
    ScrollTrigger.refresh()
  }, 50);
})
</script>

<style scoped>
.ease-expo { transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
</style>
