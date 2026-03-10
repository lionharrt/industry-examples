<template>
  <section ref="section" class="relative bg-white text-black overflow-hidden border-y-[16px] md:border-y-[32px] border-black">
    <div class="absolute top-0 right-0 p-12 text-[min(15vw,200px)] font-black italic opacity-5 pointer-events-none select-none uppercase hidden md:block">KINETIC</div>
    
    <div class="h-screen flex flex-col justify-center py-12 md:py-24">
      <div ref="track" class="flex gap-6 md:gap-12 px-6 md:px-24 md:overflow-visible hide-scrollbar pb-8 relative z-10">
        <div v-for="(item, idx) in items" :key="idx" class="min-w-[85vw] sm:min-w-[70vw] md:min-w-[45vw] h-[50vh] md:h-[60vh] group relative overflow-hidden bg-black border-8 md:border-[16px] border-black shadow-[16px_16px_0_0_#CCFF00] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-500">
          <div class="absolute inset-0">
            <img :src="item.image + '?auto=format&fit=crop&w=1600'" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            <div class="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all"></div>
          </div>
          <div class="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-12 text-center z-10">
            <div class="bg-accent text-black px-4 py-1 text-xs md:text-lg font-black italic uppercase mb-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              LAB_0{{ idx + 1 }}
            </div>
            <h3 class="text-3xl sm:text-5xl md:text-[min(6vw,100px)] font-black italic uppercase tracking-tighter text-white leading-none">
              {{ item.title }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

defineProps<{ items: any[] }>()
const section = ref(null)
const track = ref(null)
let ctx: gsap.Context

onMounted(() => {
  setTimeout(() => {
    ctx = gsap.context(() => {
      if (window.innerWidth >= 768 && track.value && section.value) {
        const scrollWidth = track.value.scrollWidth
        const windowWidth = window.innerWidth
        const scrollDistance = scrollWidth - windowWidth + (windowWidth * 0.2)

        gsap.to(track.value, {
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
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
