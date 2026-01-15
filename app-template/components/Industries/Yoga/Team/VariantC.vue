<template>
  <section class="py-16 md:py-32 bg-white px-6">
    <div class="max-w-4xl mx-auto">
      <div class="divide-y divide-primary/5">
        <div v-for="(member, index) in team" :key="index" 
             class="group py-10 md:py-16 flex flex-col sm:flex-row items-center justify-between gap-8 md:gap-12 teacher-row opacity-0"
        >
          <div class="flex flex-col sm:flex-row items-center gap-6 md:gap-16 text-center sm:text-left">
            <div class="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 group-hover:scale-110 transition-all duration-700 shadow-lg">
              <img :src="member.image" :alt="member.name" class="w-full h-full object-cover">
            </div>
            <div>
              <h3 class="text-3xl md:text-4xl font-light text-primary group-hover:italic transition-all leading-tight">{{ member.name }}</h3>
              <p class="text-primary/30 uppercase tracking-[0.4em] text-[8px] md:text-[9px] mt-3 md:mt-4">{{ member.role }}</p>
            </div>
          </div>
          <div class="hidden sm:block">
            <div class="w-12 h-12 md:w-16 md:h-16 rounded-full border border-primary/5 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-500">
              <svg viewBox="0 0 24 24" class="w-5 h-5 md:w-6 md:h-6 fill-none stroke-current" stroke-width="1.5"><path d="M5 12h14m-7-7l7 7-7 7" /></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

defineProps<{ team: Array<{ name: string, role: string, image: string }> }>()

onMounted(() => {
  gsap.to('.teacher-row', {
    scrollTrigger: {
      trigger: '.teacher-row',
      start: 'top 85%',
    },
    opacity: 1,
    y: -20,
    duration: 1.5,
    stagger: 0.3,
    ease: 'power4.out'
  })
})
</script>
