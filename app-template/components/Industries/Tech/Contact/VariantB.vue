<template>
  <section class="h-screen bg-background text-primary flex flex-col items-center justify-center p-12 text-center relative overflow-hidden">
    <!-- Simulated data flow background -->
    <div class="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
      <div v-for="i in 10" :key="i" class="absolute border border-accent rounded-full animate-ping" :style="{ width: i * 15 + 'vw', height: i * 15 + 'vw', animationDuration: 5 + i + 's' }"></div>
    </div>
    
    <div class="relative z-10 space-y-16 max-w-4xl mx-auto">
      <h2 class="text-[12vw] font-black uppercase leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">{{ title }}</h2>
      <p class="text-2xl font-medium text-primary/40 uppercase tracking-widest">Connect to the backbone of the digital frontier.</p>
      <div class="flex flex-col md:flex-row gap-12 justify-center items-center pt-12">
        <a :href="'mailto:' + email" class="group px-12 py-6 border border-white/10 rounded-2xl hover:border-secondary transition-all relative overflow-hidden">
          <span class="relative z-10 text-xl font-black uppercase tracking-tighter">{{ email }}</span>
          <div class="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        </a>
        <a :href="'tel:' + phone" class="group px-12 py-6 border border-white/10 rounded-2xl hover:border-accent transition-all relative overflow-hidden">
          <span class="relative z-10 text-xl font-black uppercase tracking-tighter">{{ phone }}</span>
          <div class="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
