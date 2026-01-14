<template>
  <section class="h-screen bg-[#E60000] text-black flex flex-col items-center justify-center text-center p-6 md:p-24 relative overflow-hidden">
    <!-- Kinetic Speed Lines -->
    <div class="absolute inset-0 z-0">
      <div v-for="i in 30" :key="i" class="absolute h-px bg-black opacity-20" :style="{ width: '300%', top: (i * 3) + '%', left: '-100%', transform: 'rotate(-2deg)' }"></div>
    </div>
    
    <div class="relative z-10 space-y-24">
      <h2 class="text-[20vw] font-black italic leading-none tracking-tighter uppercase border-b-[20px] border-black pb-8 shadow-2xl italic">ALLOCATE</h2>
      <div class="flex flex-col gap-16 pt-12 items-center">
        <a :href="'mailto:' + email" class="text-5xl md:text-[10vw] font-black italic uppercase hover:scale-110 transition-transform duration-[2000ms] italic">{{ email }}</a>
        <div class="flex justify-center gap-12 md:gap-32 pt-12 flex-wrap">
          <div v-for="s in ['APEX_FEED', 'VELOCITY_X', 'ENGINE_LOG']" :key="s" class="px-12 py-4 border-8 border-black font-black uppercase italic tracking-[0.5em] text-xl hover:bg-black hover:text-[#E60000] cursor-pointer transition-all shadow-2xl">
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
