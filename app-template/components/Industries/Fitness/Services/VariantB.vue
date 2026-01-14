<template>
  <section class="py-48 bg-white text-black px-12 md:px-24 overflow-hidden relative">
    <div class="max-w-7xl mx-auto space-y-32">
      <div v-for="(service, idx) in services" :key="idx" class="group flex flex-col md:flex-row items-center gap-24 relative">
        <div class="text-[15vw] font-black italic leading-none tracking-tighter opacity-5 absolute -left-12 -top-12 group-hover:opacity-100 group-hover:text-accent transition-all duration-1000">0{{ idx + 1 }}</div>
        
        <div class="w-full md:w-1/2 relative z-10 space-y-12">
          <div class="flex items-center gap-8">
            <div class="w-16 h-16 rounded-full bg-black text-accent flex items-center justify-center">
              <component :is="getIcon(service.icon)" :size="32" />
            </div>
            <h3 class="text-7xl font-black italic uppercase tracking-tighter">{{ service.name }}</h3>
          </div>
          <p class="text-2xl font-bold max-w-md leading-tight opacity-60">
            {{ service.description }}
          </p>
          <div class="h-2 w-0 bg-black group-hover:w-full transition-all duration-1000"></div>
        </div>

        <div class="w-full md:w-1/2 aspect-video bg-black rounded-[3rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl relative">
          <img :src="'https://images.unsplash.com/photo-' + (idx === 0 ? '1517836357463-d25dfeac3438' : idx === 1 ? '1534438327276-14e5300c3a48' : '1552674605-db6ffd4facb5') + '?auto=format&fit=crop&w=1200'" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
          <div class="absolute inset-0 bg-accent/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Zap, Dumbbell, RefreshCcw } from 'lucide-vue-next'
defineProps<{ services: any[] }>()
const getIcon = (name: string) => {
  if (name === 'Zap') return Zap
  if (name === 'Dumbbell') return Dumbbell
  return RefreshCcw
}
</script>
