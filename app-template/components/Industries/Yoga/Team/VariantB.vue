<template>
  <section class="py-16 md:py-32 bg-[#f5f1e9] overflow-hidden px-6">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-24 lg:items-center">
        <div class="lg:col-span-1 space-y-6 md:space-y-10 text-center lg:text-left">
          <h2 class="text-4xl md:text-6xl font-serif text-primary leading-tight italic">Our <br class="hidden md:block"/> Wisdom.</h2>
          <p class="text-primary/50 text-base md:text-lg font-light leading-relaxed max-w-sm mx-auto lg:mx-0">Centuries of tradition meets modern mindfulness. Our teachers are here to guide your personal transformation.</p>
          <button class="bg-primary text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-accent transition-all">Explore Classes</button>
        </div>
        
        <div class="lg:col-span-2 flex flex-col sm:flex-row gap-12">
          <div v-for="(member, index) in team" :key="index" class="flex-1 group teacher-float opacity-0">
            <div class="relative mb-6 md:mb-10 max-w-xs mx-auto sm:max-w-none">
              <div class="aspect-[3/4] rounded-full overflow-hidden shadow-2xl">
                <img :src="member.image" :alt="member.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]">
              </div>
              <div class="absolute -bottom-6 md:-bottom-10 -right-4 w-20 md:w-24 h-20 md:h-24 rounded-full border border-accent/20 flex items-center justify-center p-2 group-hover:rotate-180 transition-transform duration-[2s]">
                <div class="w-full h-full rounded-full border border-dashed border-accent/40"></div>
              </div>
            </div>
            <div class="text-center">
              <h3 class="text-2xl md:text-2xl font-serif text-primary leading-tight">{{ member.name }}</h3>
              <p class="text-primary/30 uppercase tracking-[0.3em] text-[8px] mt-2">{{ member.role }}</p>
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
  gsap.to('.teacher-float', {
    scrollTrigger: {
      trigger: '.teacher-float',
      start: 'top 85%',
    },
    opacity: 1,
    y: -20,
    duration: 1.5,
    stagger: 0.4,
    ease: 'power2.out'
  })
})
</script>
