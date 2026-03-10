<template>
  <section class="py-16 md:py-48 bg-secondary overflow-hidden">
    <div ref="scrollTrack" class="flex flex-col gap-4 md:gap-8">
      <div v-for="row in 2" :key="row" class="flex gap-4 md:gap-8 whitespace-nowrap" :class="row === 1 ? 'marquee-left' : 'marquee-right'">
        <div v-for="item in [...items, ...items, ...items]" :key="item.title" class="w-[70vw] sm:w-[45vw] md:w-[30vw] aspect-[4/3] relative rounded-xl md:rounded-2xl overflow-hidden group">
          <img :src="item.image + '?auto=format&fit=crop&w=800'" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          <div class="absolute bottom-4 left-4 right-4 text-background font-black uppercase text-[10px] md:text-sm tracking-widest opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-sm p-2 rounded">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

defineProps<{ items: any[] }>()

onMounted(() => {
  gsap.to('.marquee-left', {
    xPercent: -30,
    repeat: -1,
    duration: 30,
    ease: "none"
  })
  gsap.to('.marquee-right', {
    xPercent: 30,
    repeat: -1,
    duration: 30,
    ease: "none"
  })
})
</script>

<style scoped>
.marquee-right { transform: translateX(-50%); }
</style>
