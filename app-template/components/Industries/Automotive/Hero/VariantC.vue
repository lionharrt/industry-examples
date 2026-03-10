<template>
  <section class="relative min-h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden py-16 md:py-0">
    <div class="absolute inset-0 z-0">
      <video 
        :key="video"
        autoplay 
        muted 
        loop 
        playsinline
        class="w-full h-full object-cover opacity-60"
        :src="video || 'https://storage.googleapis.com/industry-examples.firebasestorage.app/automotive.mp4'"
      >
      </video>
      <div class="absolute inset-0 bg-[#0A0A0A]/40"></div>
    </div>
    
    <div class="relative z-10 text-center space-y-6 md:space-y-12 p-8 md:p-24 border-[10px] md:border-[20px] border-white/10 backdrop-blur-md bg-black/40 mx-4 max-w-5xl">
      <h2 class="text-4xl sm:text-6xl md:text-7xl font-black italic uppercase leading-tight tracking-tighter">{{ title }}</h2>
      <p class="text-sm md:text-xl font-bold uppercase tracking-[0.3em] md:tracking-[0.8em] opacity-60">{{ subtitle }}</p>
      <button class="group relative px-8 md:px-16 py-4 md:py-6 border-2 md:border-4 border-[#E60000] hover:bg-[#E60000] transition-all duration-500">
        <span class="text-base md:text-xl font-black uppercase italic tracking-widest">{{ cta }}</span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, subtitle: string, cta: string, video?: string }>()
</script>

