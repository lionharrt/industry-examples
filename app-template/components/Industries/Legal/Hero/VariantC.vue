<template>
  <section class="relative h-screen w-full bg-white text-black flex flex-col items-center justify-center overflow-hidden">
    <div class="absolute inset-0 z-0">
      <video 
        autoplay 
        muted 
        loop 
        playsinline
        class="w-full h-full object-cover opacity-20 grayscale"
      >
        <source :src="video || 'https://storage.googleapis.com/industry-examples.firebasestorage.app/legal.mp4'" type="video/mp4">
      </video>
      <div class="absolute inset-0 bg-[#FAF9F6]/60"></div>
    </div>
    
    <div class="relative z-10 text-center space-y-16">
      <div class="flex flex-col items-center gap-8">
        <div class="w-24 h-24 border-2 border-[#C5A059] rotate-45 flex items-center justify-center">
          <span class="rotate-[-45deg] text-2xl font-serif italic text-[#001F3F]">V</span>
        </div>
        <h1 class="text-[12vw] font-serif italic leading-none tracking-tighter text-[#001F3F] uppercase">
          Advocacy
        </h1>
      </div>
      
      <div class="max-w-2xl mx-auto space-y-8">
        <h2 class="text-3xl font-light italic leading-relaxed">{{ subtitle }}</h2>
        <button class="bg-[#001F3F] text-[#C5A059] px-16 py-6 text-xs font-black uppercase tracking-[0.5em] hover:bg-black transition-all shadow-2xl">
          {{ cta }}
        </button>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-12 flex flex-col items-center gap-4 opacity-40">
      <span class="text-[10px] font-black uppercase tracking-widest">DISCOVER</span>
      <div class="w-px h-16 bg-[#001F3F]"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, subtitle: string, cta: string, video?: string }>()
</script>
