<template>
  <div 
    v-show="isVisible"
    class="fixed bottom-8 right-8 z-[100] w-80 bg-black/95 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl shadow-2xl text-white"
  >
    <div class="flex items-center justify-between mb-8">
      <div class="flex flex-col">
        <h3 class="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-1">Variant Selector</h3>
        <div class="text-[9px] text-white/20 font-medium">Industry Showcase v2.0</div>
      </div>
      <button @click="isVisible = false" class="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all">
        <X :size="14" />
      </button>
    </div>

    <!-- Industry Switcher -->
    <div class="mb-10">
      <label class="block text-[10px] font-bold uppercase tracking-widest text-white/30 mb-4 ml-1">Current Industry</label>
      <select 
        v-model="currentIndustry"
        class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors appearance-none cursor-pointer"
      >
        <option v-for="ind in industries" :key="ind.path" :value="ind.path" class="bg-[#111] text-white">{{ ind.name }}</option>
      </select>
    </div>

    <!-- Navigation Variant -->
    <div class="mb-10 pb-8 border-b border-white/5">
      <div class="flex items-center justify-between mb-4 px-1">
        <label class="text-[10px] font-bold uppercase tracking-widest text-white/50">Navigation</label>
        <div class="flex gap-1.5">
          <button 
            v-for="v in ['A', 'B', 'C', 'D']" 
            :key="v"
            @click="setVariant('nav', v as any)"
            :class="[
              'w-8 h-8 rounded-lg text-[10px] font-black transition-all duration-300',
              config.nav === v 
                ? 'bg-white text-black shadow-lg shadow-white/10' 
                : 'bg-white/5 text-white/30 hover:bg-white/10 hover:text-white'
            ]"
          >
            {{ v }}
          </button>
        </div>
      </div>
    </div>

    <!-- Section Variants -->
    <div class="space-y-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
      <div v-for="section in sections" :key="section" class="flex items-center justify-between px-1">
        <label class="text-[10px] font-bold uppercase tracking-widest text-white/40">{{ section }}</label>
        <div class="flex gap-1.5">
          <button 
            v-for="v in ['A', 'B', 'C']" 
            :key="v"
            @click="setVariant(section.toLowerCase() as any, v as any)"
            :class="[
              'w-8 h-8 rounded-lg text-[10px] font-black transition-all duration-300',
              config[section.toLowerCase() as keyof VariantConfig] === v 
                ? 'bg-white text-black' 
                : 'bg-white/5 text-white/30 hover:bg-white/10 hover:text-white'
            ]"
          >
            {{ v }}
          </button>
        </div>
      </div>
    </div>

    <!-- Share Info -->
    <div class="mt-8 pt-6 border-t border-white/5">
      <div class="text-[9px] text-white/20 font-medium text-center italic tracking-wider">
        URL automatically updates with your selection
      </div>
    </div>
  </div>

  <!-- Toggle Trigger -->
  <button 
    v-if="!isVisible"
    @click="isVisible = true"
    class="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-2xl hover:rotate-90 duration-500"
  >
    <Settings :size="24" />
  </button>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { X, Settings } from 'lucide-vue-next'
import { useRouter, useRoute } from 'vue-router'
import { useVariantConfig, type VariantConfig } from '~/composables/useVariantConfig'

const isVisible = ref(false)
const { config, setVariant } = useVariantConfig()
const router = useRouter()
const route = useRoute()

const currentIndustry = computed({
  get: () => route.path,
  set: (val) => router.push({ path: val, query: route.query })
})

const industries = [
  { name: 'Yoga', path: '/yoga' },
  { name: 'Physiotherapy', path: '/physiotherapy' },
  { name: 'Restaurant', path: '/restaurant' },
  { name: 'Real Estate', path: '/realestate' },
  { name: 'Fashion', path: '/fashion' },
  { name: 'Architecture', path: '/architecture' },
  { name: 'Fitness', path: '/fitness' },
  { name: 'Legal', path: '/legal' },
  { name: 'Tech', path: '/tech' },
  { name: 'Hotel', path: '/hotel' },
  { name: 'Automotive', path: '/automotive' },
  { name: 'Creative', path: '/creative' },
]

const sections = computed(() => {
  const base = ['Hero', 'About', 'Services', 'Portfolio', 'Testimonials', 'Team', 'Pricing', 'Contact', 'Footer']
  if (route.path === '/physiotherapy') {
    return [...base, 'Blog', 'BMI']
  }
  if (route.path === '/yoga') {
    return [...base, 'Blog']
  }
  return base
})

const handleKeydown = (e: KeyboardEvent) => {
  if (e.shiftKey && (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'd') {
    isVisible.value = !isVisible.value
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.02);
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}
</style>
