<template>
  <section class="py-48 bg-primary text-white px-12 md:px-24">
    <div class="max-w-7xl mx-auto space-y-px rounded-[4rem] overflow-hidden shadow-2xl border border-white/5">
      <div 
        v-for="(service, idx) in services" 
        :key="idx" 
        class="group relative py-32 px-12 md:px-24 bg-primary hover:bg-white hover:text-primary transition-all duration-1000 cursor-pointer border-b border-white/5 last:border-0"
      >
        <div class="relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div class="flex items-center gap-12">
            <span class="text-[4vw] font-serif italic opacity-10 group-hover:opacity-100 transition-opacity">0{{ idx + 1 }}</span>
            <h3 class="text-6xl md:text-8xl font-serif italic leading-none">{{ service.title }}</h3>
          </div>
          <div class="mt-12 md:mt-0 max-w-sm text-center md:text-right space-y-8">
            <p class="text-xl font-light italic opacity-40 group-hover:opacity-100 transition-opacity">{{ service.description }}</p>
            <div class="flex justify-center md:justify-end">
              <button class="px-8 py-3 rounded-full border border-current text-[10px] font-black uppercase tracking-widest hover:bg-accent hover:border-accent hover:text-white transition-all">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ services: any[] }>()
</script>
