<template>
  <section class="py-24 md:py-32 bg-background text-primary flex flex-col items-center justify-center text-center p-6 md:p-24 relative overflow-hidden">
    <!-- Animated soft lines -->
    <div class="absolute inset-0 z-0 flex items-center justify-center opacity-5 pointer-events-none">
      <div v-for="i in 5" :key="i" class="absolute border-l border-accent h-full transition-all duration-[3000ms] animate-line-drift" :style="{ left: i * 20 + '%', animationDelay: i * 0.7 + 's' }"></div>
    </div>
    
    <div class="relative z-10 space-y-12 md:space-y-16 max-w-4xl mx-auto">
      <h2 class="text-5xl sm:text-7xl md:text-8xl font-serif italic leading-none tracking-tighter uppercase text-accent italic border-b border-accent/20 pb-8 md:pb-12">Consult</h2>
      <div class="flex flex-col gap-6 md:gap-8 pt-8 md:pt-12 items-center text-primary">
        <a :href="'mailto:' + email" class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic hover:text-accent transition-all duration-700 italic break-words px-4 max-w-full leading-tight">{{ email }}</a>
        <div class="flex justify-center gap-6 md:gap-12 pt-6 md:pt-10 flex-wrap text-accent/30">
          <div v-for="s in ['LEX_GLOBAL', 'INSIGHTS', 'BRIEFING']" :key="s" class="text-[10px] font-black uppercase tracking-[0.4em] hover:text-primary cursor-pointer transition-all italic leading-none">
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
@keyframes line-drift {
  0%, 100% { transform: translateY(-10%); opacity: 0.1; }
  50% { transform: translateY(10%); opacity: 0.3; }
}
.animate-line-drift {
  animation: line-drift 15s infinite ease-in-out;
}
</style>
