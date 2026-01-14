<template>
  <section class="py-48 bg-black overflow-hidden">
    <div class="px-6 md:px-24 mb-24">
      <h2 class="text-6xl font-serif text-white uppercase tracking-tighter">Season's <span class="italic text-[#D4AF37]">Best</span></h2>
    </div>

    <div ref="scrollContainer" class="flex gap-12 px-6 md:px-24">
      <div 
        v-for="(item, idx) in items" 
        :key="idx" 
        class="min-w-[70vw] md:min-w-[40vw] aspect-[16/9] relative rounded-3xl overflow-hidden group shadow-2xl"
      >
        <ParallaxImage :src="item.image" speed="0.1" />
        <div class="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-12 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-expo">
          <h3 class="text-4xl md:text-5xl font-serif text-white italic mb-6">{{ item.title }}</h3>
          <div class="h-px w-24 bg-[#D4AF37]"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

defineProps<{ items: any[] }>()
const scrollContainer = ref(null)

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  
  gsap.to(scrollContainer.value, {
    x: () => -(scrollContainer.value.scrollWidth - window.innerWidth + 200),
    ease: "none",
    scrollTrigger: {
      trigger: scrollContainer.value,
      start: "top center",
      end: () => `+=${scrollContainer.value.scrollWidth}`,
      scrub: 1,
      pin: true,
      invalidateOnRefresh: true,
    }
  })
})
</script>

<style scoped>
.ease-expo { transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
</style>
