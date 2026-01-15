<template>
  <section class="min-h-screen bg-black text-accent flex flex-col items-center justify-center text-center p-6 md:p-24 py-16 md:py-24 relative overflow-hidden">
    <!-- Concentric circles animation -->
    <div class="absolute inset-0 z-0 flex items-center justify-center opacity-10">
      <div v-for="i in 5" :key="i" class="absolute border border-accent rounded-full" :style="{ width: i * 20 + 'vw', height: i * 20 + 'vw' }"></div>
    </div>
    
    <div class="relative z-10 space-y-6 md:space-y-12">
      <h2 class="text-[15vw] sm:text-[12vw] font-serif italic uppercase leading-none tracking-tighter">{{ title }}</h2>
      <p class="text-sm sm:text-lg md:text-2xl font-light text-primary/40 italic max-w-md mx-auto">A journey of a thousand courses begins with a single reservation.</p>
      <div class="flex flex-col gap-6 md:gap-12 md:flex-row justify-center items-center pt-6 md:pt-12">
        <a :href="'mailto:' + email" class="text-primary text-base sm:text-xl md:text-2xl font-serif hover:text-accent transition-colors border-b border-white/10 pb-2 md:pb-4 break-all">{{ email }}</a>
        <a :href="'tel:' + phone" class="text-primary text-base sm:text-xl md:text-2xl font-serif hover:text-accent transition-colors border-b border-white/10 pb-2 md:pb-4">{{ phone }}</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
