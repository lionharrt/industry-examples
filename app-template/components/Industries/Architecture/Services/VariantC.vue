<template>
  <section class="py-48 bg-background overflow-hidden">
    <div class="px-12 md:px-24 mb-32 flex justify-between items-baseline">
      <h2 class="text-xs font-black uppercase tracking-[1em] text-accent">Discipline_01</h2>
      <div class="flex items-center gap-8">
        <h3 class="text-6xl font-black uppercase tracking-tighter text-primary">THE <span class="italic">SCOPE</span></h3>
      </div>
    </div>
    
    <div class="flex gap-12 overflow-x-auto hide-scrollbar px-12 md:px-24">
      <div 
        v-for="(service, idx) in services" 
        :key="idx" 
        class="min-w-[85vw] md:min-w-[35vw] aspect-[3/4] relative group bg-white border border-black/5 p-16 flex flex-col justify-between hover:shadow-2xl transition-all duration-700 rounded-3xl"
      >
        <div class="w-full h-px bg-black/5 mb-16 relative overflow-hidden">
          <div class="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-1000"></div>
        </div>
        <div class="space-y-12">
          <h3 class="text-5xl font-black uppercase tracking-tighter text-primary group-hover:italic transition-all">{{ service.title }}</h3>
          <p class="text-accent text-xl font-medium leading-relaxed max-w-xs">{{ service.description }}</p>
        </div>
        <div class="mt-auto flex justify-end">
          <span class="text-[8vw] font-black text-primary/5 group-hover:text-primary transition-colors">0{{ idx + 1 }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ services: any[] }>()
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
