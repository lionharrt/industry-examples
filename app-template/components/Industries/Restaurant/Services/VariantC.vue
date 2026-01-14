<template>
  <section class="bg-black text-white">
    <div v-for="(service, idx) in services" :key="idx" class="h-screen flex items-center px-6 md:px-24 sticky top-0 bg-[#1A1A1A] border-b border-white/5">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-32 items-center w-full">
        <div>
          <span class="text-[#A0522D] font-bold text-xs uppercase tracking-[1em] mb-12 block">Service 0{{ idx + 1 }}</span>
          <h3 class="text-[8vw] font-serif leading-none uppercase mb-12 italic text-[#D4AF37]">{{ service.title }}</h3>
          <p class="text-2xl font-light text-white/60 leading-loose max-w-xl">
            {{ service.description }}
          </p>
          <button class="mt-12 group flex items-center gap-4 text-xs font-black uppercase tracking-widest text-white hover:text-[#D4AF37] transition-colors">
            <span>Explore Experience</span>
            <div class="h-px w-8 bg-white group-hover:w-16 group-hover:bg-[#D4AF37] transition-all duration-500"></div>
          </button>
        </div>
        <div class="hidden md:block h-[70vh] rounded-[4rem] overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-700 shadow-2xl">
          <ParallaxImage :src="service.image || 'https://images.unsplash.com/photo-1559339352-11d035aa65de'" speed="0.1" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ services: any[] }>()
</script>
