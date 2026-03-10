<template>
  <section ref="section" class="bg-white text-[#0A0A0A] overflow-hidden relative min-h-screen flex flex-col justify-center">
    <div class="absolute top-0 right-0 p-12 text-[15vw] font-black italic opacity-[0.03] pointer-events-none select-none uppercase italic leading-none text-black">VELOCITY</div>
    
    <div class="flex flex-col justify-center py-24">
      <div ref="track" class="flex gap-6 md:gap-12 px-6 md:px-24 w-fit">
        <div v-for="(item, idx) in items" :key="idx" class="min-w-[85vw] md:min-w-[45vw] h-[50vh] md:h-[70vh] group relative overflow-hidden bg-black border-4 md:border-8 border-black shadow-2xl">
          <div class="absolute inset-0 scale-110 group-hover:scale-100 transition-all duration-1000">
            <img :src="item.image + '?auto=format&fit=crop&w=1600'" class="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" />
          </div>
          <div class="absolute inset-0 flex flex-col items-start justify-end p-8 md:p-16 z-10">
            <h3 class="text-3xl sm:text-5xl md:text-6xl font-black italic uppercase tracking-tighter text-white drop-shadow-2xl translate-y-8 md:translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 leading-tight">
              {{ item.title }}
            </h3>
            <div class="mt-4 md:mt-8 px-4 md:px-8 py-1 md:py-2 bg-[#E60000] text-black font-black uppercase tracking-widest translate-y-8 md:translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100 text-[10px] md:text-base italic">
              PROJECT_APEX_0{{ idx + 1 }}
            </div>
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
      if (track.value && section.value && window.innerWidth >= 768) {
        const scrollWidth = track.value.scrollWidth
        const windowWidth = window.innerWidth
        const scrollDistance = scrollWidth - windowWidth + (windowWidth * 0.1)

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
            anticipatePin: 0
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
