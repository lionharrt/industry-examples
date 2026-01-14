<template>
  <section class="h-screen bg-accent text-black flex flex-col items-center justify-center text-center p-6 md:p-24 relative overflow-hidden">
    <div class="absolute inset-0 z-0">
      <div v-for="i in 20" :key="i" class="absolute h-px bg-black opacity-10" :style="{ width: '200%', top: (i * 5) + '%', left: '-50%', transform: 'rotate(-5deg)' }"></div>
    </div>
    
    <div class="relative z-10 space-y-16">
      <h2 class="text-[15vw] font-black italic leading-none tracking-tighter uppercase border-b-8 border-black pb-8 shadow-2xl">ENGAGE</h2>
      <div class="flex flex-col gap-12 pt-12">
        <a :href="'mailto:' + email" class="text-5xl md:text-9xl font-black italic uppercase hover:scale-110 transition-transform duration-700">{{ email }}</a>
        <div class="flex justify-center gap-12 md:gap-24 pt-12 flex-wrap">
          <div v-for="s in ['INSTA_LAB', 'FORCE_FEED', 'ELITE_TWEET']" :key="s" class="px-8 py-3 border-4 border-black font-black uppercase italic tracking-widest hover:bg-black hover:text-accent cursor-pointer transition-all">
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
