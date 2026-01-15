<template>
  <section class="relative min-h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden py-16 md:py-0">
    <div class="absolute inset-0 z-0">
      <video 
        autoplay 
        muted 
        loop 
        playsinline
        class="w-full h-full object-cover opacity-30"
      >
        <source :src="video || 'https://storage.googleapis.com/industry-examples.firebasestorage.app/fitness.mp4'" type="video/mp4">
      </video>
    </div>
    
    <div class="absolute inset-0 flex flex-col items-center justify-center hidden md:flex pointer-events-none">
      <div class="whitespace-nowrap flex flex-col gap-0">
        <div v-for="i in 8" :key="i" class="text-[12vw] font-black italic leading-[0.8] tracking-tighter opacity-5 uppercase outline-text text-transparent">
          {{ title }}
        </div>
      </div>
    </div>

    <div class="relative z-10 text-center space-y-6 md:space-y-10 p-8 sm:p-12 md:p-20 bg-accent text-black shadow-[12px_12px_0_0_#ffffff] mx-4 border-4 md:border-8 border-black max-w-4xl">
      <div class="space-y-4 md:space-y-8">
        <h2 class="text-4xl sm:text-5xl md:text-8xl font-black italic uppercase leading-none tracking-tighter">{{ title }}</h2>
        <div class="h-1 md:h-2 bg-black w-16 md:w-32 mx-auto"></div>
        <p class="text-sm md:text-xl font-black uppercase tracking-widest max-w-xl mx-auto">{{ subtitle }}</p>
        <button class="px-8 md:px-16 py-3 md:py-5 bg-black text-accent font-black uppercase italic text-sm md:text-lg hover:bg-white hover:text-black transition-all border-2 md:border-4 border-black">
          {{ cta }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.outline-text {
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.2);
}
.outline-text:hover {
  -webkit-text-stroke: 2px #CCFF00;
}
</style>

<script setup lang="ts">
defineProps<{ title: string, subtitle: string, cta: string, video?: string }>()
</script>
