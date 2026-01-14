<template>
  <section class="py-48 bg-primary text-white px-12 md:px-24">
    <div class="max-w-7xl mx-auto space-y-px">
      <div 
        v-for="(service, idx) in services" 
        :key="idx" 
        class="group relative py-24 border-b border-white/10 flex flex-col md:flex-row items-center justify-between hover:px-12 transition-all duration-1000 cursor-pointer overflow-hidden"
      >
        <!-- Dynamic geometric background slide -->
        <div class="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-expo"></div>
        
        <div class="relative z-10 flex items-center gap-12 group-hover:text-primary transition-colors duration-700">
          <span class="text-[5vw] font-black opacity-10 group-hover:opacity-40 italic">0{{ idx + 1 }}</span>
          <h3 class="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">{{ service.title }}</h3>
        </div>
        
        <div class="relative z-10 mt-12 md:mt-0 max-w-sm group-hover:text-primary transition-colors duration-700">
          <p class="text-lg font-medium opacity-40 group-hover:opacity-100 transition-opacity">{{ service.description }}</p>
          <div class="mt-8 h-px w-12 bg-white group-hover:bg-black group-hover:w-full transition-all duration-700"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ services: any[] }>()
</script>

<style scoped>
.ease-expo { transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
</style>
