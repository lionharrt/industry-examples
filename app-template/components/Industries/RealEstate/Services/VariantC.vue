<template>
  <section ref="section" class="relative bg-background text-primary overflow-hidden">
    <div ref="pinContainer" class="min-h-screen flex flex-col justify-center py-24 md:py-32">
      <div class="px-6 md:px-24 mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-baseline md:items-end gap-6">
        <h2 class="text-4xl md:text-6xl font-bold uppercase tracking-tighter shadow-sm">OUR <span class="text-accent">SERVICES</span></h2>
        <p class="text-[10px] font-black uppercase tracking-[0.5em] text-primary/40">Consultancy in the art of lifestyle</p>
      </div>
      
      <div ref="slider" class="flex gap-8 md:gap-12 md:overflow-visible hide-scrollbar px-6 md:px-24">
        <div 
          v-for="(service, idx) in services" 
          :key="idx" 
          class="min-w-[85vw] md:min-w-[40vw] relative group bg-primary/5 border border-primary/10 rounded-[3rem] md:rounded-[4rem] p-8 md:p-16 flex flex-col justify-between hover:border-accent transition-all duration-700 shadow-xl"
        >
          <div class="flex justify-between items-start">
            <div class="text-[12vw] md:text-[8vw] font-black text-primary/5 group-hover:text-accent/20 transition-colors">0{{ idx + 1 }}</div>
            <div class="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-primary/10 flex items-center justify-center group-hover:bg-accent group-hover:text-background group-hover:border-accent transition-all">
              <component :is="LucideIcons[service.icon]" :size="32" class="md:hidden" v-if="LucideIcons[service.icon]" />
              <component :is="LucideIcons[service.icon]" :size="40" class="hidden md:block" v-if="LucideIcons[service.icon]" />
            </div>
          </div>
          <div class="space-y-8 md:space-y-12">
            <h3 class="text-3xl md:text-5xl font-bold uppercase tracking-tighter">{{ service.title }}</h3>
            <p class="text-primary/60 text-base md:text-xl font-medium leading-relaxed max-w-sm">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as LucideIcons from 'lucide-vue-next'
import { ref, onMounted, onUnmounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

defineProps<{ services: any[] }>()

const section = ref(null)
const pinContainer = ref(null)
const slider = ref(null)
let ctx: gsap.Context

onMounted(() => {
  setTimeout(() => {
    ctx = gsap.context(() => {
      if (window.innerWidth >= 768 && slider.value && section.value) {
        const scrollWidth = slider.value.scrollWidth
        const windowWidth = window.innerWidth
        
        // Calculate total scroll distance based on content width
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
