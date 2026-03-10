<template>
  <section ref="section" class="relative bg-background overflow-hidden">
    <div class="h-screen flex flex-col justify-center py-6 md:py-12">
      <div class="px-6 md:px-24 mb-8 md:mb-12 flex justify-between items-baseline flex-col md:flex-row gap-4">
        <h2 class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] text-accent">Discipline_01</h2>
        <div class="flex items-center gap-4 md:gap-8">
          <h3 class="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-primary leading-none">THE <span class="italic text-accent">SCOPE</span></h3>
        </div>
      </div>
      
      <div ref="slider" class="flex gap-6 md:gap-12 md:overflow-visible hide-scrollbar px-6 md:px-24">
        <div 
          v-for="(service, idx) in services" 
          :key="idx" 
          class="min-w-[85vw] md:min-w-[30vw] aspect-[16/10] md:aspect-[16/9] relative group bg-white border border-black/5 p-6 md:p-10 flex flex-col justify-between hover:shadow-2xl transition-all duration-700 rounded-3xl"
        >
          <div class="w-full h-px bg-black/5 mb-4 md:mb-8 relative overflow-hidden">
            <div class="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-1000"></div>
          </div>
          <div class="space-y-4 md:space-y-6">
            <h3 class="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tighter text-primary group-hover:italic transition-all">{{ service.title }}</h3>
            <p class="text-accent text-xs md:text-sm font-medium leading-relaxed max-w-xs uppercase">{{ service.description }}</p>
          </div>
          <div class="mt-auto flex justify-end">
            <span class="text-4xl md:text-[5vw] font-black text-primary/5 group-hover:text-primary transition-colors">0{{ idx + 1 }}</span>
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

defineProps<{ services: any[] }>()

const section = ref(null)
const slider = ref(null)
let ctx: gsap.Context

onMounted(() => {
  setTimeout(() => {
    ctx = gsap.context(() => {
      if (window.innerWidth >= 768 && slider.value && section.value) {
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
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
