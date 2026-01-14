<template>
  <section class="py-48 bg-white text-[#0A0A0A] px-12 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
      <div class="w-full md:w-1/2 aspect-square relative rounded-full overflow-hidden shadow-2xl group border-[15px] border-[#B4B4B4]/20">
        <img src="https://images.unsplash.com/photo-1541443131876-44b03de101c5?auto=format&fit=crop&w=1200" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-125 group-hover:scale-100" />
      </div>
      
      <div class="w-full md:w-1/2 space-y-12">
        <h2 class="text-8xl font-black italic leading-none tracking-tighter uppercase">
          {{ title }}
        </h2>
        <div class="h-2 w-48 bg-[#E60000]"></div>
        <p class="text-2xl font-medium leading-relaxed opacity-60 italic">
          {{ content }}
        </p>
        <div class="flex flex-wrap gap-12 pt-8">
          <div v-for="stat in stats" :key="stat.label" class="space-y-2 group cursor-default">
            <p class="text-4xl font-black italic group-hover:text-[#E60000] transition-colors">{{ stat.value }}</p>
            <p class="text-[10px] font-black uppercase tracking-widest opacity-40 italic">
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
