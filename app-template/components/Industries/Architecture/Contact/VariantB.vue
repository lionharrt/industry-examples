<template>
  <section class="h-screen bg-background text-primary flex flex-col items-center justify-center text-center p-6 md:p-24 relative overflow-hidden">
    <!-- Geometric frame -->
    <div class="absolute inset-6 md:inset-12 border-4 md:border-[20px] border-primary opacity-5 pointer-events-none"></div>
    
    <div class="relative z-10 space-y-8 md:space-y-16 max-w-7xl mx-auto w-full">
      <h2 class="text-6xl sm:text-8xl md:text-[15vw] font-black uppercase leading-[0.85] tracking-tighter text-primary italic">DIALOG</h2>
      <div class="flex flex-col gap-8 md:gap-12 pt-8 md:pt-12 items-center">
        <a :href="'mailto:' + email" class="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter hover:text-accent transition-colors border-b-4 md:border-b-8 border-black/5 pb-6 md:pb-12 break-all italic leading-tight">{{ email }}</a>
        <div class="flex justify-center gap-8 md:gap-24 pt-8 md:pt-12">
          <div v-for="s in ['INSTA', 'ARCH', 'LINKED']" :key="s" class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] hover:italic cursor-pointer transition-all">
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
