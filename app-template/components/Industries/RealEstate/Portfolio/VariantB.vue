<template>
  <section ref="section" class="relative bg-background overflow-hidden border-y border-primary/5">
    <div class="min-h-screen flex flex-col justify-center py-24">
      <div class="px-6 md:px-24 mb-12 md:mb-24">
        <h2 class="text-3xl md:text-6xl font-bold text-primary uppercase tracking-tighter shadow-sm italic text-primary">GLOBAL <span class="text-accent">ACQUISITIONS</span></h2>
      </div>

      <div ref="slider" class="flex gap-8 md:gap-12 px-6 md:px-24 md:overflow-visible hide-scrollbar">
        <div 
          v-for="(item, idx) in items" 
          :key="idx" 
          class="min-w-[85vw] md:min-w-[40vw] aspect-[4/3] md:aspect-[16/9] relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-primary/10 bg-primary/5"
        >
          <ParallaxImage :src="item.image" :speed="0.1" />
          <div class="absolute inset-0 bg-background/20 group-hover:bg-background/40 transition-all duration-700"></div>
          <div class="absolute top-6 left-6 md:top-12 md:left-12">
            <div class="px-4 py-1 md:px-6 md:py-2 bg-primary/90 backdrop-blur-md rounded-full text-background text-[10px] font-black uppercase tracking-widest">Sold / 2025</div>
          </div>
          <div class="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 flex justify-between items-end">
            <h3 class="text-2xl md:text-4xl font-bold text-primary uppercase tracking-tighter italic">{{ item.title }}</h3>
            <button class="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent text-background flex items-center justify-center md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-xl">
              <ArrowUpRight :size="20" class="md:hidden" />
              <ArrowUpRight :size="24" class="hidden md:block" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { ref, onMounted, onUnmounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

defineProps<{ items: any[] }>()
const section = ref(null)
const slider = ref(null)
let ctx: gsap.Context

onMounted(() => {
  // Use a small timeout to ensure images/layout are ready
  setTimeout(() => {
    ctx = gsap.context(() => {
      if (window.innerWidth >= 768 && slider.value && section.value) {
        const scrollWidth = slider.value.scrollWidth
        const windowWidth = window.innerWidth

        const scrollDistance = scrollWidth - windowWidth + (windowWidth * 0.1)

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
    // Force a refresh after a bit to ensure everything is settled
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
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
