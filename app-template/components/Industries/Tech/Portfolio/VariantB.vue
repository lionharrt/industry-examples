<template>
  <section class="py-48 bg-background overflow-hidden">
    <div class="px-12 md:px-24 mb-24 flex justify-between items-center">
      <h2 class="text-5xl font-black uppercase text-primary tracking-tighter">GLOBAL <span class="text-accent">IMPACT</span></h2>
      <div class="h-px flex-1 mx-12 bg-white/10"></div>
      <p class="text-xs font-black uppercase tracking-widest text-primary/40">Real-time deployments</p>
    </div>

    <div ref="track" class="flex gap-12 px-12 md:px-24">
      <div 
        v-for="(item, idx) in items" 
        :key="idx" 
        class="min-w-[60vw] md:min-w-[35vw] aspect-square relative rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl"
      >
        <ParallaxImage :src="item.image + '?auto=format&fit=crop&w=1200'" speed="0.1" />
        <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
        <div class="absolute bottom-12 left-12 right-12 flex justify-between items-end">
          <h3 class="text-4xl font-black uppercase text-primary tracking-tighter">{{ item.title }}</h3>
          <div class="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <ExternalLink :size="20" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ExternalLink } from 'lucide-vue-next'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

defineProps<{ items: any[] }>()
const track = ref(null)

onMounted(() => {
  gsap.to(track.value, {
    x: () => -(track.value.scrollWidth - window.innerWidth + 200),
    ease: "none",
    scrollTrigger: {
      trigger: track.value,
      start: "top center",
      end: () => `+=${track.value.scrollWidth}`,
      scrub: 1,
      pin: true,
      invalidateOnRefresh: true
    }
  })
})
</script>
