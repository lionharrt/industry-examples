<template>
  <section class="py-16 md:py-24 bg-white px-6">
    <div class="max-w-4xl mx-auto text-center">
      <div class="space-y-4 md:space-y-6 mb-12 md:mb-16">
        <h2 class="text-3xl md:text-5xl font-serif text-primary leading-tight">{{ title }}</h2>
        <p class="text-base md:text-lg text-primary/50 font-light">{{ subtitle }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left bg-[#f8f9fa] p-8 md:p-12 rounded-[40px] md:rounded-[50px] shadow-sm">
        <div class="space-y-8 md:space-y-10">
          <div class="space-y-6 md:space-y-8">
            <div class="space-y-3 md:space-y-4">
              <div class="flex justify-between text-[10px] font-bold uppercase tracking-widest text-primary/40 px-2">
                <span>Weight</span>
                <span>{{ weight }} kg</span>
              </div>
              <input v-model="weight" type="range" min="40" max="150" class="w-full accent-accent">
            </div>
            <div class="space-y-3 md:space-y-4">
              <div class="flex justify-between text-[10px] font-bold uppercase tracking-widest text-primary/40 px-2">
                <span>Height</span>
                <span>{{ height }} cm</span>
              </div>
              <input v-model="height" type="range" min="140" max="220" class="w-full accent-accent">
            </div>
          </div>
          
          <div class="bg-primary p-6 md:p-8 rounded-3xl text-white">
            <div class="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2">Resulting BMI</div>
            <div class="text-4xl md:text-5xl font-serif text-accent">{{ bmi }}</div>
          </div>
        </div>

        <div class="flex flex-col justify-center space-y-4 md:space-y-6">
          <div v-for="cat in categories" :key="cat.label" 
               class="p-4 md:p-6 rounded-2xl transition-all duration-500 border"
               :class="category === cat.label ? 'bg-white border-accent shadow-lg scale-105' : 'bg-transparent border-transparent opacity-40'"
          >
            <div class="flex justify-between items-center">
              <span class="font-bold text-sm md:text-base text-primary">{{ cat.label }}</span>
              <span class="text-[10px] md:text-xs text-primary/40">{{ cat.range }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

defineProps<{ title: string, subtitle: string }>()

const weight = ref<number>(70)
const height = ref<number>(175)

const bmi = computed(() => {
  const hMeters = height.value / 100
  return (weight.value / (hMeters * hMeters)).toFixed(1)
})

const categories = [
  { label: 'Underweight', range: '< 18.5' },
  { label: 'Normal weight', range: '18.5 – 24.9' },
  { label: 'Overweight', range: '25 – 29.9' },
  { label: 'Obese', range: '≥ 30' }
]

const category = computed(() => {
  const val = parseFloat(bmi.value)
  if (val < 18.5) return 'Underweight'
  if (val < 25) return 'Normal weight'
  if (val < 30) return 'Overweight'
  return 'Obese'
})
</script>

<style scoped>
input[type=range] {
  height: 6px;
  -webkit-appearance: none;
  background: rgba(0,0,0,0.05);
  border-radius: 3px;
}
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background: white;
  border: 2px solid var(--accent-color);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
</style>
