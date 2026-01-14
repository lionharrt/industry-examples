<template>
  <section class="py-32 bg-[#f5f1e9] overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-3 gap-24 items-center">
        <div class="lg:col-span-1 space-y-10">
          <h2 class="text-6xl font-serif text-primary leading-tight italic">Our <br/> Wisdom.</h2>
          <p class="text-primary/50 text-lg font-light leading-relaxed">Centuries of tradition meets modern mindfulness. Our teachers are here to guide your personal transformation.</p>
          <button class="bg-primary text-white px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-accent transition-all">Explore Classes</button>
        </div>
        
        <div class="lg:col-span-2 flex flex-col md:flex-row gap-12">
          <div v-for="(member, index) in team" :key="index" class="flex-1 group teacher-float opacity-0">
            <div class="relative mb-10">
              <div class="aspect-[3/4] rounded-full overflow-hidden shadow-2xl">
                <img :src="member.image" :alt="member.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]">
              </div>
              <div class="absolute -bottom-10 -right-4 w-24 h-24 rounded-full border border-accent/20 flex items-center justify-center p-2 group-hover:rotate-180 transition-transform duration-[2s]">
                <div class="w-full h-full rounded-full border border-dashed border-accent/40"></div>
              </div>
            </div>
            <div class="text-center">
              <h3 class="text-2xl font-serif text-primary">{{ member.name }}</h3>
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
      start: 'top 80%',
    },
    opacity: 1,
    y: -30,
    duration: 1.5,
    stagger: 0.4,
    ease: 'power2.out'
  })
})
</script>
