<template>
  <section class="py-16 md:py-48 bg-white text-black px-6 md:px-24 relative overflow-hidden">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-20 items-center relative z-10">
      <div class="w-full md:w-1/2 aspect-square relative overflow-hidden border-8 md:border-[16px] border-black shadow-[12px_12px_0_0_#CCFF00]">
        <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-accent/10 mix-blend-multiply"></div>
        <div class="absolute bottom-0 right-0 p-4 md:p-8 bg-black text-accent text-2xl md:text-5xl font-black italic uppercase leading-none">
          LAB_01
        </div>
      </div>
      
      <div class="w-full md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left">
        <h2 class="text-4xl sm:text-5xl md:text-[min(6vw,80px)] font-black italic leading-[1] tracking-tighter uppercase border-b-8 md:border-b-[12px] border-black pb-4 md:pb-6">
          {{ title }}
        </h2>
        <p class="text-base md:text-lg lg:text-xl font-black leading-tight italic opacity-100 uppercase">
          {{ content }}
        </p>
        <div class="grid grid-cols-2 gap-4 md:gap-8">
          <div v-for="stat in stats" :key="stat.label" class="space-y-1 md:space-y-2">
            <p class="text-3xl md:text-4xl lg:text-5xl font-black italic leading-none tracking-tighter">{{ stat.value }}</p>
            <p class="text-[10px] md:text-xs font-black uppercase tracking-widest text-accent bg-black px-2 py-1 inline-block">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, content: string, stats: any[] }>()
</script>
