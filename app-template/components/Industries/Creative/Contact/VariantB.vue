<template>
  <section class="h-screen bg-accent flex items-center justify-center p-12 text-center relative overflow-hidden">
    <div class="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20">
      <div v-for="i in 20" :key="i" class="absolute border-4 border-background rotate-45" :style="{ width: i * 10 + 'vw', height: i * 10 + 'vw' }"></div>
    </div>
    
    <div class="relative z-10 space-y-12">
      <h2 class="text-[18vw] font-black uppercase leading-none tracking-tighter text-background hover:italic transition-all cursor-pointer">START</h2>
      <div class="flex flex-col gap-8">
        <a :href="'mailto:' + email" class="text-4xl md:text-6xl font-black uppercase tracking-tighter text-background hover:text-primary transition-colors">{{ email }}</a>
        <div class="flex justify-center gap-12 pt-12">
          <div v-for="s in ['IG', 'LI', 'BE', 'DR']" :key="s" class="w-16 h-16 rounded-full border-4 border-background flex items-center justify-center text-xs font-black hover:bg-background hover:text-accent transition-all cursor-pointer">
            {{ s }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
