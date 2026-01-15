<template>
  <section class="py-16 md:py-48 bg-white text-black px-6 md:px-24 overflow-hidden relative">
    <div class="absolute top-0 right-0 p-12 text-[15vw] font-black italic opacity-5 pointer-events-none select-none uppercase hidden md:block">KINETIC</div>
    
    <div ref="track" class="flex gap-6 md:gap-12 pb-8 relative z-10">
      <div v-for="(item, idx) in items" :key="idx" class="min-w-[85vw] sm:min-w-[70vw] md:min-w-[40vw] h-[50vh] md:h-[65vh] group relative overflow-hidden bg-black border-8 md:border-[16px] border-black shadow-[12px_12px_0_0_#CCFF00]">
        <div class="absolute inset-0">
          <img :src="item.image + '?auto=format&fit=crop&w=1600'" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          <div class="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all"></div>
        </div>
        <div class="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-12 text-center z-10">
          <div class="bg-accent text-black px-4 py-1 text-xs md:text-lg font-black italic uppercase mb-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            LAB_0{{ idx + 1 }}
          </div>
          <h3 class="text-3xl sm:text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white leading-none">
            {{ item.title }}
          </h3>
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
