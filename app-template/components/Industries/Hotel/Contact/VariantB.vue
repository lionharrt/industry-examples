<template>
  <section class="h-screen bg-primary text-background flex flex-col items-center justify-center text-center p-6 md:p-24 relative overflow-hidden">
    <!-- Animated soft circles -->
    <div class="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
      <div v-for="i in 6" :key="i" class="absolute border border-accent rounded-full animate-soft-pulse" :style="{ width: i * 25 + 'vw', height: i * 25 + 'vw', animationDelay: i * 0.5 + 's' }"></div>
    </div>
    
    <div class="relative z-10 space-y-16 max-w-5xl mx-auto">
      <h2 class="text-[15vw] font-serif italic leading-none tracking-tighter border-b border-background/20 pb-12 shadow-2xl uppercase">DIALOG</h2>
      <div class="flex flex-col gap-12 pt-12 items-center">
        <a :href="'mailto:' + email" class="text-4xl md:text-7xl font-serif italic hover:text-white transition-colors">{{ email }}</a>
        <div class="flex justify-center gap-24 pt-12">
          <div v-for="s in ['JOURNAL', 'ESCAPE', 'SOUL']" :key="s" class="text-[10px] font-black uppercase tracking-[1em] hover:text-accent cursor-pointer transition-all">
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
