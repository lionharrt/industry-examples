<template>
  <section class="py-32 bg-white relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <div class="relative">
        <!-- Background Giant Quote -->
        <div class="absolute -top-20 -left-10 text-[30vw] font-serif text-primary/5 select-none leading-none">“</div>
        
        <div class="relative z-10 max-w-4xl mx-auto">
          <div v-for="(t, index) in testimonials" :key="index" 
               v-show="currentIndex === index"
               class="space-y-12 testimonial-slide-yoga"
          >
            <p class="text-4xl md:text-6xl font-serif text-primary leading-tight">
              {{ t.quote }}
            </p>
            <div class="flex items-center gap-8">
              <div class="w-20 h-[1px] bg-accent"></div>
              <div>
                <div class="text-xl font-serif text-primary">{{ t.author }}</div>
                <div class="text-accent font-bold uppercase tracking-widest text-[10px] mt-1">{{ t.role }}</div>
              </div>
            </div>
          </div>
          
          <div class="flex gap-12 mt-20">
            <button @click="prev" class="group flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-primary/30 hover:text-primary transition-colors">
              <span class="w-10 h-10 rounded-full border border-primary/5 flex items-center justify-center group-hover:border-primary transition-all">←</span>
              Previous
            </button>
            <button @click="next" class="group flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-primary/30 hover:text-primary transition-colors">
              Next
              <span class="w-10 h-10 rounded-full border border-primary/5 flex items-center justify-center group-hover:border-primary transition-all">→</span>
            </button>
          </div>
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
