<template>
  <section class="py-48 bg-black text-primary overflow-hidden">
    <div ref="track" class="flex gap-32 whitespace-nowrap px-12 md:px-24">
      <div v-for="service in [...services, ...services]" :key="service.title" class="flex items-center gap-16 group cursor-default">
        <h3 class="text-[15vw] font-black uppercase tracking-widest text-transparent border-t-2 border-b-2 border-white/10 group-hover:text-accent group-hover:border-accent transition-all duration-700">
          {{ service.title }}
        </h3>
        <div class="w-32 h-32 rounded-3xl border-4 border-white/5 rotate-45 group-hover:rotate-90 group-hover:bg-accent group-hover:border-accent transition-all duration-700"></div>
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
