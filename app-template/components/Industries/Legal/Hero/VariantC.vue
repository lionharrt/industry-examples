<template>
  <section class="relative h-screen w-full bg-background text-primary flex flex-col items-center justify-center overflow-hidden">
    <div class="absolute inset-0 z-0">
      <video 
        autoplay 
        muted 
        loop 
        playsinline
        class="w-full h-full object-cover opacity-10 grayscale"
      >
        <source :src="video || 'https://storage.googleapis.com/industry-examples.firebasestorage.app/legal.mp4'" type="video/mp4">
      </video>
      <div class="absolute inset-0 bg-background/60"></div>
    </div>
    
    <div class="relative z-10 text-center space-y-12 md:space-y-16 px-6">
      <div class="flex flex-col items-center gap-6 md:gap-8">
        <div class="w-16 h-16 md:w-24 md:h-24 border-2 border-accent rotate-45 flex items-center justify-center">
          <span class="rotate-[-45deg] text-xl md:text-2xl font-serif italic text-primary">V</span>
        </div>
        <h1 class="text-7xl sm:text-9xl md:text-[12vw] font-serif italic leading-none tracking-tighter text-primary uppercase">
          Advocacy
        </h1>
      </div>
      
      <div class="max-w-2xl mx-auto space-y-8 md:space-y-12">
        <h2 class="text-xl sm:text-2xl md:text-3xl font-light italic leading-relaxed text-primary/80">{{ subtitle }}</h2>
        <button class="bg-primary text-background px-8 md:px-16 py-4 md:py-6 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] hover:bg-accent hover:text-primary transition-all shadow-2xl">
          {{ cta }}
        </button>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-12 flex flex-col items-center gap-4 opacity-40">
      <span class="text-[10px] font-black uppercase tracking-widest text-primary">DISCOVER</span>
      <div class="w-px h-16 bg-primary"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, subtitle: string, cta: string, video?: string }>()
</script>
