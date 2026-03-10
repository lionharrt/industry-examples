<template>
  <section class="py-16 md:py-48 bg-black text-white px-6 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col gap-px bg-white/10 border border-white/10 overflow-hidden">
        <div 
          v-for="(service, idx) in services" 
          :key="idx" 
          class="service-row group py-12 md:py-24 bg-black px-6 md:px-12 flex flex-col md:flex-row items-center justify-between hover:bg-white hover:text-black transition-all duration-700 cursor-pointer text-center md:text-left"
        >
          <div class="flex flex-col md:flex-row items-center gap-4 md:gap-12">
            <span class="text-4xl md:text-[4vw] font-black opacity-10 group-hover:opacity-40 italic leading-none">0{{ idx + 1 }}</span>
            <h3 class="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">{{ service.title }}</h3>
          </div>
          <p class="max-w-xs text-white/40 group-hover:text-black font-bold text-[10px] md:text-xs uppercase tracking-widest text-center md:text-right mt-6 md:mt-0 transition-colors leading-relaxed">
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
