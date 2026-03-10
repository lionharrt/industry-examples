<template>
  <section class="h-screen bg-[#E60000] text-black flex flex-col items-center justify-center text-center p-6 md:p-24 relative overflow-hidden border-y-8 md:border-y-[16px] border-black">
    <!-- Kinetic Speed Lines -->
    <div class="absolute inset-0 z-0">
      <div v-for="i in 30" :key="i" class="absolute h-px bg-black opacity-20" :style="{ width: '300%', top: (i * 3) + '%', left: '-100%', transform: 'rotate(-2deg)' }"></div>
    </div>
    
    <div class="relative z-10 space-y-8 md:space-y-16 max-w-5xl">
      <h2 class="text-5xl sm:text-7xl md:text-[8vw] font-black italic leading-normal tracking-tighter uppercase border-b-8 md:border-[16px] border-black pb-4 md:pb-8 shadow-2xl italic">ALLOCATE</h2>
      <div class="flex flex-col gap-6 md:gap-12 pt-4 md:pt-8 items-center">
        <a :href="'mailto:' + email" class="text-xl sm:text-2xl md:text-[3vw] font-black italic uppercase hover:text-white transition-colors duration-300 break-all leading-[3] italic max-w-full px-4 block">{{ email }}</a>
        <div class="flex justify-center gap-4 md:gap-8 pt-4 md:pt-8 flex-wrap px-4">
          <div v-for="s in ['APEX_FEED', 'VELOCITY_X', 'ENGINE_LOG']" :key="s" class="px-4 md:px-8 py-2 md:py-3 border-2 md:border-4 border-black font-black uppercase italic tracking-[0.1em] md:tracking-[0.2em] text-xs md:text-lg hover:bg-black hover:text-[#E60000] cursor-pointer transition-all shadow-xl">
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
