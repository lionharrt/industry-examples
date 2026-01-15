<template>
  <section class="py-20 md:py-32 bg-[#f0fff0] relative px-6">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-serif text-primary mb-10 md:mb-12 leading-tight">{{ title }}</h2>
      
      <div class="space-y-12 md:space-y-16">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
          <div class="space-y-4 md:space-y-6">
            <div class="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/30">Weight</div>
            <div class="flex items-center justify-center gap-4">
              <button @click="weight--" class="w-8 h-8 md:w-10 md:h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-white transition-all">-</button>
              <div class="text-3xl md:text-4xl font-serif w-24">{{ weight }}<span class="text-xs ml-1 font-sans opacity-40">kg</span></div>
              <button @click="weight++" class="w-8 h-8 md:w-10 md:h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-white transition-all">+</button>
            </div>
          </div>
          <div class="space-y-4 md:space-y-6">
            <div class="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/30">Height</div>
            <div class="flex items-center justify-center gap-4">
              <button @click="height--" class="w-8 h-8 md:w-10 md:h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-white transition-all">-</button>
              <div class="text-3xl md:text-4xl font-serif w-24">{{ height }}<span class="text-xs ml-1 font-sans opacity-40">cm</span></div>
              <button @click="height++" class="w-8 h-8 md:w-10 md:h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-white transition-all">+</button>
            </div>
          </div>
        </div>

        <div class="p-8 md:p-12 bg-white rounded-[40px] md:rounded-[60px] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-4">
          <div class="text-center sm:text-left">
            <div class="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/30 mb-1 md:mb-2">Calculated Index</div>
            <div class="text-6xl md:text-7xl font-serif text-primary leading-none">{{ bmi }}</div>
          </div>
          <div class="text-center sm:text-right space-y-2">
            <div class="text-xl md:text-2xl font-serif text-accent uppercase italic leading-tight">{{ category }}</div>
            <p class="text-[9px] md:text-[10px] font-bold tracking-widest text-primary/30 max-w-[150px] mx-auto sm:ml-auto">Based on standard health guidelines.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

defineProps<{ title: string }>()

const weight = ref<number>(68)
const height = ref<number>(172)

const bmi = computed(() => {
  const hMeters = height.value / 100
  return (weight.value / (hMeters * hMeters)).toFixed(1)
})

const category = computed(() => {
  const val = parseFloat(bmi.value)
  if (val < 18.5) return 'Under'
  if (val < 25) return 'Optimal'
  if (val < 30) return 'Above'
  return 'High'
})
</script>
