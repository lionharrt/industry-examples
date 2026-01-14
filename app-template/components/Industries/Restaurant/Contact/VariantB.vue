<template>
  <section class="h-screen bg-black text-accent flex flex-col items-center justify-center text-center p-6 md:p-24 relative overflow-hidden">
    <!-- Concentric circles animation -->
    <div class="absolute inset-0 z-0 flex items-center justify-center opacity-10">
      <div v-for="i in 5" :key="i" class="absolute border border-accent rounded-full" :style="{ width: i * 20 + 'vw', height: i * 20 + 'vw' }"></div>
    </div>
    
    <div class="relative z-10 space-y-12">
      <h2 class="text-[12vw] font-serif italic uppercase leading-none tracking-tighter">{{ title }}</h2>
      <p class="text-xl md:text-2xl font-light text-primary/40 italic">A journey of a thousand courses begins with a single reservation.</p>
      <div class="flex flex-col md:flex-row gap-12 justify-center items-center pt-12">
        <a :href="'mailto:' + email" class="text-primary text-2xl font-serif hover:text-accent transition-colors border-b border-white/10 pb-4">{{ email }}</a>
        <a :href="'tel:' + phone" class="text-primary text-2xl font-serif hover:text-accent transition-colors border-b border-white/10 pb-4">{{ phone }}</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
