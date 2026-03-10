<template>
  <section class="min-h-screen bg-primary text-background flex flex-col items-center justify-center text-center p-6 md:p-24 relative overflow-hidden py-24 lg:py-0">
    <!-- Animated soft circles -->
    <div class="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
      <div v-for="i in 6" :key="i" class="absolute border border-accent rounded-full animate-soft-pulse" :style="{ width: (i * 25) + 'vw', height: (i * 25) + 'vw', animationDelay: i * 0.5 + 's' }"></div>
    </div>
    
    <div class="relative z-10 space-y-12 md:space-y-16 max-w-5xl mx-auto w-full">
      <h2 class="text-7xl sm:text-9xl md:text-[15vw] font-serif italic leading-none tracking-tighter border-b border-background/20 pb-8 md:pb-12 uppercase">DIALOG</h2>
      <div class="flex flex-col gap-8 md:gap-12 pt-8 md:pt-12 items-center">
        <a :href="'mailto:' + email" class="text-2xl sm:text-4xl md:text-7xl font-serif italic hover:text-white transition-colors break-words px-4 leading-none">{{ email }}</a>
        <div class="flex flex-wrap justify-center gap-8 md:gap-24 pt-8 md:pt-12">
          <div v-for="s in ['JOURNAL', 'ESCAPE', 'SOUL']" :key="s" class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] hover:text-accent cursor-pointer transition-all leading-none">
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

<style scoped>
@keyframes soft-pulse {
  0%, 100% { opacity: 0.1; transform: scale(1); }
  50% { opacity: 0.3; transform: scale(1.05); }
}
.animate-soft-pulse {
  animation: soft-pulse 10s infinite ease-in-out;
}
</style>
