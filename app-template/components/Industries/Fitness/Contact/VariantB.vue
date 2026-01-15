<template>
  <section class="min-h-screen bg-accent text-black flex flex-col items-center justify-center text-center p-6 md:p-24 py-16 relative overflow-hidden">
    <div class="absolute inset-0 z-0 hidden md:block">
      <div v-for="i in 20" :key="i" class="absolute h-px bg-black opacity-10" :style="{ width: '200%', top: (i * 5) + '%', left: '-50%', transform: 'rotate(-5deg)' }"></div>
    </div>
    
    <div class="relative z-10 space-y-8 md:space-y-16">
      <h2 class="text-[18vw] md:text-[15vw] font-black italic leading-none tracking-tighter uppercase border-b-4 md:border-b-8 border-black pb-4 md:pb-8 shadow-2xl">ENGAGE</h2>
      <div class="flex flex-col gap-6 md:gap-12 pt-6 md:pt-12">
        <a :href="'mailto:' + email" class="text-xl sm:text-3xl md:text-9xl font-black italic uppercase hover:scale-110 transition-transform duration-700 break-all">{{ email }}</a>
        <div class="flex justify-center gap-4 md:gap-24 pt-6 md:pt-12 flex-wrap">
          <div v-for="s in ['INSTA_LAB', 'FORCE_FEED', 'ELITE_TWEET']" :key="s" class="px-4 md:px-8 py-2 md:py-3 border-2 md:border-4 border-black font-black uppercase italic tracking-widest text-[10px] md:text-base hover:bg-black hover:text-accent cursor-pointer transition-all">
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
