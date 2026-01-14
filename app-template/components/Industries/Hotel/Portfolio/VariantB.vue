<template>
  <section class="py-48 bg-white overflow-hidden">
    <div class="px-12 md:px-24 mb-24">
      <h2 class="text-6xl font-serif italic text-primary uppercase tracking-tighter">Artisanal <span class="text-accent">Spaces</span></h2>
    </div>

    <div ref="track" class="flex gap-12 px-12 md:px-24 pb-12">
      <div 
        v-for="(item, idx) in items" 
        :key="idx" 
        class="min-w-[80vw] md:min-w-[45vw] aspect-square relative rounded-full overflow-hidden group shadow-2xl border-8 border-background"
      >
        <ParallaxImage :src="item.image + '?auto=format&fit=crop&w=1200'" speed="0.1" />
        <div class="absolute inset-0 bg-black/20 group-hover:bg-accent/20 transition-all duration-700"></div>
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center p-12 translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-expo">
          <h3 class="text-5xl font-serif text-white italic mb-8">{{ item.title }}</h3>
          <div class="w-16 h-16 rounded-full bg-white text-primary flex items-center justify-center">
            <Eye :size="24" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Eye } from 'lucide-vue-next'
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

<style scoped>
.ease-expo { transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
</style>
