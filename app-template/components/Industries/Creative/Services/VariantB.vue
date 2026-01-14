<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div 
        v-for="(service, idx) in services" 
        :key="idx" 
        class="service-card aspect-square border border-white/10 p-12 flex flex-col justify-between group hover:bg-secondary hover:text-background transition-all duration-700 relative overflow-hidden"
      >
        <div class="text-[8vw] font-black opacity-5 absolute -right-4 -top-8 group-hover:opacity-20 transition-opacity">S</div>
        <h3 class="text-4xl font-black uppercase leading-tight group-hover:scale-110 transition-transform origin-left">{{ service.title }}</h3>
        <p class="text-xs font-black uppercase tracking-widest opacity-40 group-hover:opacity-100">{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ services: any[] }>()
</script>
