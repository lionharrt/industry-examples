<template>
  <section class="py-48 bg-background overflow-hidden">
    <div class="px-12 md:px-24 mb-32 flex justify-between items-end">
      <h2 class="text-6xl font-black uppercase text-primary tracking-tighter">OUR <span class="text-secondary">STACK</span></h2>
      <p class="text-[10px] font-black uppercase tracking-[0.5em] text-primary/20">The engine of the digital world</p>
    </div>
    
    <div class="flex gap-8 overflow-x-auto hide-scrollbar px-12 md:px-24">
      <div 
        v-for="(service, idx) in services" 
        :key="idx" 
        class="min-w-[80vw] md:min-w-[30vw] aspect-square relative group bg-white/[0.03] border border-white/10 rounded-[3rem] p-16 flex flex-col justify-between hover:bg-accent transition-all duration-700"
      >
        <div class="text-[10vw] font-black text-primary/5 group-hover:text-primary/10 transition-colors">0{{ idx + 1 }}</div>
        <div class="space-y-8">
          <h3 class="text-4xl font-black uppercase group-hover:text-primary transition-colors">{{ service.title }}</h3>
          <p class="text-primary/40 group-hover:text-primary/80 transition-colors leading-relaxed">{{ service.description }}</p>
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
