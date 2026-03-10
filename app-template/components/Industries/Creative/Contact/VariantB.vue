<template>
  <section class="min-h-screen bg-accent flex items-center justify-center p-6 md:p-12 text-center relative overflow-hidden border-y-8 md:border-y-[16px] border-background py-24 md:py-0">
    <div class="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20">
      <div v-for="i in 20" :key="i" class="absolute border-2 md:border-4 border-background rotate-45" :style="{ width: i * 15 + 'vw', height: i * 15 + 'vw' }"></div>
    </div>
    
    <div class="relative z-10 space-y-8 md:space-y-12 w-full max-w-5xl">
      <h2 class="text-6xl sm:text-9xl md:text-[12vw] font-black uppercase tracking-tighter text-background hover:italic transition-all cursor-pointer leading-tight md:leading-none">START</h2>
      <div class="flex flex-col gap-6 md:gap-8 items-center">
        <a :href="'mailto:' + email" class="text-xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter text-background hover:text-white transition-colors break-all px-4 leading-tight md:leading-none">{{ email }}</a>
        <div class="flex justify-center gap-6 md:gap-12 pt-8 md:pt-12 flex-wrap">
          <div v-for="s in ['IG', 'LI', 'BE', 'DR']" :key="s" class="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 md:border-4 border-background flex items-center justify-center text-[10px] md:text-xs font-black hover:bg-background hover:text-accent transition-all cursor-pointer text-background">
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
