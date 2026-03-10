<template>
  <section class="py-16 md:py-48 bg-[#B4B4B4] text-[#0A0A0A] px-6 md:px-24">
    <div class="max-w-7xl mx-auto space-y-32 md:space-y-64">
      <div v-for="(item, idx) in items" :key="idx" class="group grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-center relative z-10">
        <div class="lg:col-span-8 aspect-video md:h-[50vh] relative overflow-hidden bg-black border-8 md:border-[15px] border-[#0A0A0A] group-hover:border-[#E60000] transition-colors duration-1000 shadow-2xl" :class="{ 'lg:order-2': idx % 2 === 1 }">
          <ParallaxImage :src="item.image + '?auto=format&fit=crop&w=1600'" speed="0.1" />
          <div class="absolute inset-0 bg-[#0A0A0A]/40 group-hover:bg-transparent transition-colors duration-1000"></div>
          <div class="absolute top-4 left-4 md:top-12 md:left-12 text-4xl md:text-5xl font-black italic text-primary/10 group-hover:text-primary/40 transition-colors uppercase italic">0{{ idx + 1 }}</div>
        </div>
        <div class="lg:col-span-4 space-y-6 md:space-y-10 text-center md:text-left relative z-20" :class="{ 'lg:text-right': idx % 2 === 1 }">
          <div class="space-y-2 md:space-y-4">
            <span class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] opacity-40 italic">SPEC_VERIFICATION_0{{ idx + 1 }}</span>
            <h3 class="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase leading-tight tracking-tighter group-hover:translate-x-4 md:group-hover:translate-x-8 transition-transform duration-1000 break-words">{{ item.title }}</h3>
          </div>
          <p class="text-sm md:text-base font-black uppercase italic leading-tight opacity-40 group-hover:opacity-100 transition-opacity max-w-[280px] md:max-w-xs mx-auto md:mx-0" :class="{ 'md:ml-auto md:mr-0': idx % 2 === 1 }">Engineering the absolute limits of aerodynamic efficiency and raw kinetic force.</p>
          <button class="bg-[#0A0A0A] text-primary px-8 md:px-12 py-4 md:py-5 font-black uppercase italic tracking-widest hover:bg-[#E60000] transition-all shadow-2xl skew-x-[-15deg] mx-auto md:mx-0">
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
