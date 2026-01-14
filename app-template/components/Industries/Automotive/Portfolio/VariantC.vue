<template>
  <section class="py-48 bg-[#B4B4B4] text-[#0A0A0A] px-12 md:px-24">
    <div class="max-w-7xl mx-auto space-y-48">
      <div v-for="(item, idx) in items" :key="idx" class="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-8 h-[60vh] relative overflow-hidden bg-black border-[15px] border-[#0A0A0A] group-hover:border-[#E60000] transition-colors duration-1000 shadow-2xl" :class="{ 'lg:order-2': idx % 2 === 1 }">
          <ParallaxImage :src="item.image + '?auto=format&fit=crop&w=1600'" speed="0.1" />
          <div class="absolute inset-0 bg-[#0A0A0A]/40 group-hover:bg-transparent transition-colors duration-1000"></div>
          <div class="absolute top-12 left-12 text-6xl font-black italic text-primary/10 group-hover:text-primary/40 transition-colors italic uppercase italic">0{{ idx + 1 }}</div>
        </div>
        <div class="lg:col-span-4 space-y-12" :class="{ 'lg:text-right': idx % 2 === 1 }">
          <div class="space-y-4">
            <span class="text-xs font-black uppercase tracking-[1em] opacity-40 italic italic">SPEC_VERIFICATION_0{{ idx + 1 }}</span>
            <h3 class="text-7xl font-black italic uppercase leading-[0.8] tracking-tighter group-hover:translate-x-8 transition-transform duration-1000">{{ item.title }}</h3>
          </div>
          <p class="text-2xl font-black uppercase italic leading-none opacity-40 group-hover:opacity-100 transition-opacity italic italic">Engineering the absolute limits of aerodynamic efficiency and raw kinetic force.</p>
          <button class="bg-[#0A0A0A] text-primary px-16 py-6 font-black uppercase italic tracking-widest hover:bg-[#E60000] transition-all shadow-2xl skew-x-[-15deg]">
            <span class="inline-block skew-x-[15deg]">DOWNLOAD_DATA</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>
