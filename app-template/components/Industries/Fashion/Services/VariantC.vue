<template>
  <section class="py-16 md:py-48 bg-black text-white overflow-hidden">
    <div ref="track" class="flex gap-16 md:gap-32 whitespace-nowrap px-6 md:px-24">
      <div v-for="service in [...services, ...services]" :key="service.title" class="flex items-center gap-8 md:gap-16 group cursor-default">
        <h3 class="text-5xl sm:text-7xl md:text-[15vw] font-black uppercase tracking-widest text-transparent border-t border-b md:border-t-2 md:border-b-2 border-white/10 group-hover:text-[#dc143c] group-hover:border-[#dc143c] transition-all duration-700 leading-none">
          {{ service.title }}
        </h3>
        <div class="w-16 h-16 md:w-32 md:h-32 rounded-2xl md:rounded-3xl border-2 md:border-4 border-white/5 rotate-45 group-hover:rotate-90 group-hover:bg-[#dc143c] group-hover:border-[#dc143c] transition-all duration-700"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

defineProps<{ services: any[] }>()
const track = ref(null)

onMounted(() => {
  gsap.to(track.value, {
    xPercent: -50,
    repeat: -1,
    duration: 40,
    ease: "none"
  })
})
</script>
