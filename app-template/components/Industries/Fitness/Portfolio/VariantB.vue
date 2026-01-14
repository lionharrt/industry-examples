<template>
  <section class="py-48 bg-white text-black px-12 md:px-24 overflow-hidden relative">
    <div class="absolute top-0 right-0 p-12 text-[15vw] font-black italic opacity-[0.03] pointer-events-none select-none uppercase">KINETIC</div>
    
    <div ref="track" class="flex gap-12 pb-12">
      <div v-for="(item, idx) in items" :key="idx" class="min-w-[80vw] md:min-w-[40vw] h-[70vh] group relative overflow-hidden bg-black skew-x-[-5deg]">
        <div class="absolute inset-0 skew-x-[5deg] scale-125">
          <img :src="item.image + '?auto=format&fit=crop&w=1600'" class="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" />
        </div>
        <div class="absolute inset-0 flex flex-col items-center justify-center p-12 text-center z-10 skew-x-[5deg]">
          <h3 class="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-accent drop-shadow-2xl translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
            {{ item.title }}
          </h3>
          <div class="mt-8 px-8 py-2 bg-black text-primary font-black uppercase tracking-widest translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
            LAB_0{{ idx + 1 }}
          </div>
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
