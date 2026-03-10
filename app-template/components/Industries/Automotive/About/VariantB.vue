<template>
  <section class="py-16 md:py-48 bg-white text-[#0A0A0A] px-6 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-center">
      <div class="w-full md:w-1/2 aspect-square relative rounded-full overflow-hidden shadow-2xl group border-8 md:border-[15px] border-[#B4B4B4]/20 max-w-sm md:max-w-none">
        <img src="https://images.unsplash.com/photo-1541443131876-44b03de101c5?auto=format&fit=crop&w=1200" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" />
      </div>
      
      <div class="w-full md:w-1/2 space-y-6 md:space-y-12 text-center md:text-left">
        <h2 class="text-4xl sm:text-6xl md:text-7xl font-black italic leading-none tracking-tighter uppercase">
          {{ title }}
        </h2>
        <div class="h-1 md:h-2 w-24 md:w-48 bg-[#E60000] mx-auto md:mx-0"></div>
        <p class="text-lg md:text-2xl font-medium leading-relaxed opacity-60 italic">
          {{ content }}
        </p>
        <div class="flex flex-wrap gap-6 md:gap-12 pt-4 md:pt-8 justify-center md:justify-start">
          <div v-for="stat in stats" :key="stat.label" class="space-y-1 md:space-y-2 group cursor-default">
            <p class="text-2xl md:text-4xl font-black italic group-hover:text-[#E60000] transition-colors">{{ stat.value }}</p>
            <p class="text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-40 italic">
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
