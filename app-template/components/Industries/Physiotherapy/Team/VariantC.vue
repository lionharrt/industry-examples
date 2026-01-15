<template>
  <section class="py-16 md:py-24 bg-white px-6">
    <div class="max-w-4xl mx-auto">
      <div class="divide-y divide-primary/5">
        <div v-for="(member, index) in team" :key="index" 
             class="group py-10 md:py-12 flex items-center justify-between gap-6 md:gap-12 team-row opacity-0"
        >
          <div class="flex items-center gap-6 md:gap-12">
            <div class="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500">
              <img :src="member.image" :alt="member.name" class="w-full h-full object-cover">
            </div>
            <div>
              <h3 class="text-2xl md:text-3xl font-light text-primary group-hover:italic transition-all leading-tight">{{ member.name }}</h3>
              <p class="text-primary/40 uppercase tracking-[0.2em] text-[9px] md:text-[10px] mt-2">{{ member.role }}</p>
            </div>
          </div>
          <div class="hidden sm:block">
            <button class="w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <svg viewBox="0 0 24 24" class="w-5 md:w-6 h-5 md:h-6 fill-none stroke-current" stroke-width="2"><path d="M5 12h14m-7-7l7 7-7 7" /></svg>
            </button>
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
  gsap.to('.team-row', {
    scrollTrigger: {
      trigger: '.team-row',
      start: 'top 85%',
    },
    opacity: 1,
    y: -20,
    duration: 1,
    stagger: 0.2,
    ease: 'power2.out'
  })
})
</script>
