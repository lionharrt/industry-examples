<template>
  <section class="py-48 bg-black text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col gap-px bg-white/10 border border-white/10 overflow-hidden">
        <div 
          v-for="(service, idx) in services" 
          :key="idx" 
          class="service-row group py-24 bg-black px-12 flex flex-col md:flex-row items-center justify-between hover:bg-white hover:text-black transition-all duration-700 cursor-pointer"
        >
          <div class="flex items-center gap-12">
            <span class="text-[4vw] font-black opacity-10 group-hover:opacity-40 italic">0{{ idx + 1 }}</span>
            <h3 class="text-6xl font-black uppercase tracking-tighter">{{ service.title }}</h3>
          </div>
          <p class="max-w-xs text-primary/40 group-hover:text-black font-bold text-xs uppercase tracking-widest text-center md:text-right mt-8 md:mt-0 transition-colors">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ services: any[] }>()
</script>
