<template>
  <section class="py-48 bg-accent text-black px-12 md:px-24">
    <div ref="track" class="flex gap-24 whitespace-nowrap overflow-hidden py-24 border-y-8 border-black">
      <div v-for="(t, idx) in [...testimonials, ...testimonials]" :key="idx" class="flex flex-col gap-8 group">
        <p class="text-8xl font-black italic uppercase tracking-tighter group-hover:translate-x-12 transition-transform duration-700">
          "{{ t.quote }}"
        </p>
        <div class="flex items-center gap-8">
          <div class="h-2 w-24 bg-black group-hover:w-48 transition-all"></div>
          <span class="text-2xl font-black italic uppercase tracking-widest">{{ t.author }} // {{ t.role }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

defineProps<{ testimonials: any[] }>()
const track = ref(null)

onMounted(() => {
  gsap.to(track.value, {
    xPercent: -50,
    repeat: -1,
    duration: 30,
    ease: "none"
  })
})
</script>
