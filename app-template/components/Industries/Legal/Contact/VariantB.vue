<template>
  <section class="h-screen bg-background text-white flex flex-col items-center justify-center text-center p-6 md:p-24 relative overflow-hidden">
    <!-- Animated soft lines -->
    <div class="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
      <div v-for="i in 5" :key="i" class="absolute border-l border-accent h-full transition-all duration-[3000ms] animate-line-drift" :style="{ left: i * 20 + '%', animationDelay: i * 0.7 + 's' }"></div>
    </div>
    
    <div class="relative z-10 space-y-24 max-w-5xl mx-auto">
      <h2 class="text-[15vw] font-serif italic leading-none tracking-tighter uppercase text-accent italic border-b border-accent/30 pb-12">Consult</h2>
      <div class="flex flex-col gap-12 pt-12 items-center">
        <a :href="'mailto:' + email" class="text-4xl md:text-8xl font-serif italic hover:text-accent transition-all duration-700 italic">{{ email }}</a>
        <div class="flex justify-center gap-24 pt-12 flex-wrap text-accent opacity-40">
          <div v-for="s in ['LEX_GLOBAL', 'INSIGHTS', 'BRIEFING']" :key="s" class="text-[10px] font-black uppercase tracking-[1em] hover:text-white cursor-pointer transition-all italic">
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
