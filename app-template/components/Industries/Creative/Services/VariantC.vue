<template>
  <section class="py-48 bg-accent text-background overflow-hidden">
    <div ref="scrollTrack" class="flex gap-24 whitespace-nowrap px-12 md:px-24">
      <div v-for="service in [...services, ...services]" :key="service.title" class="flex items-center gap-12 group">
        <h3 class="text-[12vw] font-black uppercase tracking-tighter group-hover:text-primary transition-colors cursor-default">
          {{ service.title }}
        </h3>
        <div class="w-24 h-24 rounded-full border-[8px] border-background group-hover:scale-110 group-hover:bg-background transition-all duration-500"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

defineProps<{ services: any[] }>()
const scrollTrack = ref(null)

onMounted(() => {
  gsap.to(scrollTrack.value, {
    xPercent: -50,
    repeat: -1,
    duration: 30,
    ease: "none"
  })
})
</script>
