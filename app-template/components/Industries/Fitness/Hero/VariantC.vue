<template>
  <section class="relative h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 z-0">
      <video 
        autoplay 
        muted 
        loop 
        playsinline
        class="w-full h-full object-cover opacity-60"
      >
        <source :src="video || 'https://storage.googleapis.com/industry-examples.firebasestorage.app/fitness.mp4'" type="video/mp4">
      </video>
    </div>
    
    <div class="absolute inset-0 flex flex-col items-center justify-center">
      <div class="whitespace-nowrap flex flex-col gap-4">
        <div v-for="i in 4" :key="i" class="text-[12vw] font-black italic leading-none tracking-tighter opacity-10 uppercase hover:opacity-100 transition-opacity duration-500 cursor-default">
          {{ title }}
        </div>
      </div>
    </div>

    <div class="relative z-10 text-center space-y-12 p-12 bg-[#CCFF00]/90 text-black backdrop-blur-sm shadow-2xl skew-x-[-10deg]">
      <div class="skew-x-[10deg]">
        <h2 class="text-5xl md:text-7xl font-black italic uppercase leading-none">{{ title }}</h2>
        <p class="mt-4 text-xl font-bold uppercase tracking-widest">{{ subtitle }}</p>
        <button class="mt-8 px-12 py-4 border-4 border-black font-black uppercase italic hover:bg-black hover:text-[#CCFF00] transition-all">
          {{ cta }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, subtitle: string, cta: string, video?: string }>()
</script>
