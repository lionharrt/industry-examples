<template>
  <section class="py-16 md:py-24 bg-white relative overflow-hidden px-6">
    <!-- Background Accents -->
    <div class="absolute top-0 right-0 w-full md:w-1/3 h-1/2 md:h-full bg-[#f8f9fa] -z-10"></div>
    
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col items-center text-center mb-12 md:mb-20">
        <span class="text-accent font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-3 md:mb-4">Patient Success</span>
        <h2 class="text-3xl md:text-5xl font-serif text-primary">Voices of Recovery</h2>
      </div>

      <div class="relative max-w-5xl mx-auto">
        <div v-for="(t, index) in testimonials" :key="index" 
             v-show="currentIndex === index"
             class="flex flex-col lg:flex-row items-center gap-10 md:gap-16 testimonial-slide"
        >
          <div class="w-48 h-40 md:w-64 md:h-64 rounded-2xl md:rounded-full overflow-hidden flex-shrink-0 border-4 md:border-8 border-[#f8f9fa] shadow-lg">
            <img :src="'https://images.unsplash.com/photo-' + (index === 0 ? '1500648767791-00dcc994a43e' : '1494790108377-be9c29b29330')" class="w-full h-full object-cover">
          </div>
          <div class="space-y-6 md:space-y-8 text-center lg:text-left">
            <p class="text-xl md:text-3xl font-light text-primary leading-relaxed italic">"{{ t.quote }}"</p>
            <div>
              <div class="text-lg md:text-xl font-serif text-primary">{{ t.author }}</div>
              <div class="text-accent font-bold uppercase tracking-widest text-[10px] mt-1">{{ t.role }}</div>
            </div>
          </div>
        </div>
        
        <div class="flex gap-4 mt-10 md:mt-12 justify-center lg:justify-start lg:ml-[320px]">
          <button @click="prev" class="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">←</button>
          <button @click="next" class="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">→</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ testimonials: Array<{ quote: string, author: string, role: string }> }>()
const currentIndex = ref(0)

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.testimonials.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + props.testimonials.length) % props.testimonials.length
}
</script>
