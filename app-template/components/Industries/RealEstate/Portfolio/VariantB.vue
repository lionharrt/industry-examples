<template>
  <section class="py-48 bg-background overflow-hidden">
    <div class="px-12 md:px-24 mb-24">
      <h2 class="text-6xl font-bold text-primary uppercase tracking-tighter shadow-sm italic">GLOBAL <span class="text-accent">ACQUISITIONS</span></h2>
    </div>

    <div ref="slider" class="flex gap-12 px-12 md:px-24">
      <div 
        v-for="(item, idx) in items" 
        :key="idx" 
        class="min-w-[80vw] md:min-w-[40vw] aspect-[16/9] relative rounded-[3rem] overflow-hidden group shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/5"
      >
        <ParallaxImage :src="item.image + '?auto=format&fit=crop&w=1200'" speed="0.1" />
        <div class="absolute inset-0 bg-black/20 group-hover:bg-background/40 transition-all duration-700"></div>
        <div class="absolute top-12 left-12">
          <div class="px-6 py-2 bg-white/90 backdrop-blur-md rounded-full text-background text-[10px] font-black uppercase tracking-widest">Sold / 2025</div>
        </div>
        <div class="absolute bottom-12 left-12 right-12 flex justify-between items-end">
          <h3 class="text-4xl font-bold text-primary uppercase tracking-tighter italic">{{ item.title }}</h3>
          <button class="w-16 h-16 rounded-full bg-accent text-background flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <ArrowUpRight :size="24" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
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
