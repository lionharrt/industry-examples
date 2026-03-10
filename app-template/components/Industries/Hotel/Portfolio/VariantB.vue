<template>
  <section ref="section" class="bg-white overflow-hidden">
    <div class="min-h-screen flex flex-col justify-center py-24">
      <div class="px-6 md:px-24 mb-16 md:mb-24">
        <h2 class="text-4xl sm:text-6xl md:text-6xl font-serif italic text-primary uppercase tracking-tighter leading-none">Artisanal <span class="text-accent">Spaces</span></h2>
      </div>

      <div ref="track" class="flex gap-6 md:gap-12 px-6 md:px-24 pb-8 md:pb-12">
        <div
          v-for="(item, idx) in items"
          :key="idx"
          class="min-w-[80vw] md:min-w-[45vw] aspect-square relative rounded-full overflow-hidden group border-4 md:border-8 border-background"
        >
          <ParallaxImage :src="item.image + '?auto=format&fit=crop&w=1200'" :speed="0.1" />
          <div class="absolute inset-0 bg-black/20 group-hover:bg-accent/20 transition-all duration-700"></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center text-center p-8 md:p-12 translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-expo">
            <h3 class="text-3xl md:text-5xl font-serif text-white italic mb-4 md:mb-8 leading-tight">{{ item.title }}</h3>
            <div class="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-primary flex items-center justify-center">
              <Eye :size="20" class="md:hidden" />
              <Eye :size="24" class="hidden md:block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Eye } from 'lucide-vue-next'
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
.ease-expo { transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
</style>
