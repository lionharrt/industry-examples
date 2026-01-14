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
        <source :src="video || 'https://storage.googleapis.com/industry-examples.firebasestorage.app/automotive.mp4'" type="video/mp4">
      </video>
      <div class="absolute inset-0 bg-[#0A0A0A]/40"></div>
    </div>
    
    <div class="absolute inset-0 flex flex-col items-center justify-center">
      <div class="text-[20vw] font-black italic leading-none tracking-tighter opacity-10 uppercase whitespace-nowrap animate-drift">
        VELOCITY VELOCITY VELOCITY
      </div>
    </div>

    <div class="relative z-10 text-center space-y-12 p-16 md:p-32 border-[20px] border-white/10 backdrop-blur-md bg-black/40">
      <h2 class="text-6xl md:text-8xl font-black italic uppercase leading-none tracking-tighter">{{ title }}</h2>
      <p class="text-xl font-bold uppercase tracking-[1em] opacity-60">{{ subtitle }}</p>
      <button class="group relative px-16 py-6 border-4 border-[#E60000] hover:bg-[#E60000] transition-all duration-500">
        <span class="text-xl font-black uppercase italic tracking-widest">{{ cta }}</span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, subtitle: string, cta: string, video?: string }>()
</script>

<style scoped>
@keyframes drift {
  from { transform: translateX(20%); }
  to { transform: translateX(-20%); }
}
.animate-drift {
  animation: drift 20s infinite alternate ease-in-out;
}
</style>
