<template>
  <section class="py-48 bg-white text-[#0A0A0A] px-12 md:px-24 overflow-hidden relative">
    <div class="max-w-7xl mx-auto space-y-32">
      <div v-for="(service, idx) in services" :key="idx" class="group grid grid-cols-1 lg:grid-cols-12 gap-24 items-center relative">
        <div class="lg:col-span-3 text-[15vw] font-black italic leading-none tracking-tighter opacity-10 group-hover:opacity-100 group-hover:text-[#E60000] transition-all duration-1000 italic">0{{ idx + 1 }}</div>
        
        <div class="lg:col-span-5 relative z-10 space-y-12">
          <div class="flex items-center gap-8">
            <div class="w-16 h-16 bg-[#0A0A0A] text-primary flex items-center justify-center rounded-full">
              <component :is="getIcon(service.icon)" :size="32" />
            </div>
            <h3 class="text-6xl font-black italic uppercase tracking-tighter">{{ service.name }}</h3>
          </div>
          <p class="text-2xl font-bold max-w-md leading-tight opacity-60 italic">
            {{ service.description }}
          </p>
          <div class="h-2 w-0 bg-[#E60000] group-hover:w-full transition-all duration-1000"></div>
        </div>

        <div class="lg:col-span-4 aspect-square bg-[#0A0A0A] rounded-[4rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl relative">
          <img :src="'https://images.unsplash.com/photo-' + (idx === 0 ? '1544636331-e26879cd4d9b' : idx === 1 ? '1503376780353-7e6692767b70' : '1555353540-64580b51c258') + '?auto=format&fit=crop&w=1200'" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
          <div class="absolute inset-0 bg-[#E60000]/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Settings, Wind, Zap } from 'lucide-vue-next'
defineProps<{ services: any[] }>()
const getIcon = (name: string) => {
  if (name === 'Settings') return Settings
  if (name === 'Wind') return Wind
  return Zap
}
</script>
