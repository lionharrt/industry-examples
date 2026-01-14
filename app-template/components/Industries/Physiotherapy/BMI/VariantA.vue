<template>
  <section class="py-24 bg-primary text-white overflow-hidden relative">
    <!-- Decorative background elements -->
    <div class="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/4"></div>
    
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="grid lg:grid-cols-2 gap-20 items-center">
        <div class="space-y-8 bmi-content opacity-0 -translate-x-10">
          <span class="text-accent font-bold uppercase tracking-[0.3em] text-xs">Health Tools</span>
          <h2 class="text-5xl font-serif leading-tight">{{ title }}</h2>
          <p class="text-xl text-white/60 leading-relaxed">{{ subtitle }}</p>
          
          <div class="p-8 bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/10 space-y-8">
            <div class="grid grid-cols-2 gap-8">
              <div class="space-y-3">
                <label class="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Weight (kg)</label>
                <input v-model="weight" type="number" class="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-all">
              </div>
              <div class="space-y-3">
                <label class="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Height (cm)</label>
                <input v-model="height" type="number" class="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-all">
              </div>
            </div>
            
            <div v-if="bmi" class="pt-8 border-t border-white/10 flex items-center justify-between">
              <div>
                <div class="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2">Your BMI Score</div>
                <div class="text-6xl font-serif text-accent">{{ bmi }}</div>
              </div>
              <div class="text-right">
                <div class="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2">Category</div>
                <div class="text-xl font-medium" :class="categoryColor">{{ category }}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="relative bmi-visual opacity-0 translate-x-10">
          <div class="aspect-square bg-accent/20 rounded-full blur-3xl absolute inset-0"></div>
          <div class="relative bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-[60px] text-center space-y-8">
            <div class="w-48 h-48 rounded-full border-8 border-accent/20 mx-auto flex items-center justify-center relative">
              <div class="text-4xl font-serif text-accent">{{ bmi || '--' }}</div>
              <svg class="absolute inset-0 w-full h-full -rotate-90">
                <circle cx="50%" cy="50%" r="48%" fill="none" stroke="currentColor" stroke-width="8" class="text-accent" :stroke-dasharray="dashArray" :stroke-dashoffset="dashOffset" stroke-linecap="round" />
              </svg>
            </div>
            <p class="text-white/40 text-sm italic">BMI is a screening tool, not a diagnostic of the body fatness or health of an individual.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

defineProps<{ title: string, subtitle: string }>()

const weight = ref<number>(75)
const height = ref<number>(180)

const bmi = computed(() => {
  if (!weight.value || !height.value) return null
  const hMeters = height.value / 100
  return (weight.value / (hMeters * hMeters)).toFixed(1)
})

const category = computed(() => {
  const val = parseFloat(bmi.value || '0')
  if (val < 18.5) return 'Underweight'
  if (val < 25) return 'Normal weight'
  if (val < 30) return 'Overweight'
  return 'Obese'
})

const categoryColor = computed(() => {
  const val = parseFloat(bmi.value || '0')
  if (val < 18.5) return 'text-blue-400'
  if (val < 25) return 'text-accent'
  if (val < 30) return 'text-yellow-400'
  return 'text-red-400'
})

const dashArray = 301.59 // 2 * PI * r
const dashOffset = computed(() => {
  const val = parseFloat(bmi.value || '0')
  const percentage = Math.min(Math.max(val / 40, 0), 1)
  return dashArray * (1 - percentage)
})

onMounted(() => {
  gsap.to('.bmi-content', {
    scrollTrigger: {
      trigger: '.bmi-content',
      start: 'top 80%',
    },
    opacity: 1,
    x: 0,
    duration: 1.2,
    ease: 'power3.out'
  })
  
  gsap.to('.bmi-visual', {
    scrollTrigger: {
      trigger: '.bmi-visual',
      start: 'top 80%',
    },
    opacity: 1,
    x: 0,
    duration: 1.2,
    ease: 'power3.out'
  })
})
</script>
