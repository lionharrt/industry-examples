<template>
  <section class="py-24 bg-white">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <div class="space-y-6 mb-16">
        <h2 class="text-5xl font-serif text-primary">{{ title }}</h2>
        <p class="text-lg text-primary/50">{{ subtitle }}</p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 text-left bg-[#f8f9fa] p-12 rounded-[50px] shadow-sm">
        <div class="space-y-10">
          <div class="space-y-8">
            <div class="space-y-4">
              <div class="flex justify-between text-[10px] font-bold uppercase tracking-widest text-primary/40 px-2">
                <span>Weight</span>
                <span>{{ weight }} kg</span>
              </div>
              <input v-model="weight" type="range" min="40" max="150" class="w-full accent-accent">
            </div>
            <div class="space-y-4">
              <div class="flex justify-between text-[10px] font-bold uppercase tracking-widest text-primary/40 px-2">
                <span>Height</span>
                <span>{{ height }} cm</span>
              </div>
              <input v-model="height" type="range" min="140" max="220" class="w-full accent-accent">
            </div>
          </div>
          
          <div class="bg-primary p-8 rounded-3xl text-white">
            <div class="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2">Resulting BMI</div>
            <div class="text-5xl font-serif text-accent">{{ bmi }}</div>
          </div>
        </div>

        <div class="flex flex-col justify-center space-y-6">
          <div v-for="cat in categories" :key="cat.label" 
               class="p-6 rounded-2xl transition-all duration-500 border"
               :class="category === cat.label ? 'bg-white border-accent shadow-lg scale-105' : 'bg-transparent border-transparent opacity-40'"
          >
            <div class="flex justify-between items-center">
              <span class="font-bold text-primary">{{ cat.label }}</span>
              <span class="text-xs text-primary/40">{{ cat.range }}</span>
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
