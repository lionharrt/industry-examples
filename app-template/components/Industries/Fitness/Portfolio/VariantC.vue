<template>
  <section class="py-16 md:py-48 bg-accent text-black px-6 md:px-24 relative overflow-hidden">
    <div class="max-w-7xl mx-auto space-y-16 md:space-y-32">
      <div v-for="(item, idx) in items" :key="idx" class="group grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch border-8 md:border-[16px] border-black shadow-[12px_12px_0_0_#ffffff]">
        <div class="lg:col-span-8 h-[40vh] md:h-[60vh] relative overflow-hidden bg-black border-b-8 lg:border-b-0 lg:border-r-8 border-black" :class="{ 'lg:order-2 lg:border-r-0 lg:border-l-8': idx % 2 === 1 }">
          <img :src="item.image + '?auto=format&fit=crop&w=1600'" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          <div class="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>
        </div>
        <div class="lg:col-span-4 p-6 md:p-12 flex flex-col justify-center bg-white space-y-6 md:space-y-10" :class="{ 'lg:order-1': idx % 2 === 1 }">
          <div class="space-y-2 md:space-y-4">
            <span class="bg-black text-accent px-3 py-1 text-xs md:text-lg font-black italic uppercase tracking-tighter">ZONE_0{{ idx + 1 }}</span>
            <h3 class="text-3xl md:text-6xl font-black italic uppercase leading-[0.85] tracking-tighter group-hover:translate-x-2 transition-transform duration-500">{{ item.title }}</h3>
          </div>
          <p class="text-base md:text-xl font-black uppercase italic leading-tight border-l-4 border-black pl-4">
            HIGH-PERFORMANCE ENVIRONMENT DESIGNED FOR MAXIMUM NEUROLOGICAL RESPONSE.
          </p>
          <button class="bg-black text-accent w-full py-3 md:py-5 font-black uppercase italic text-sm md:text-xl hover:bg-accent hover:text-black transition-all border-2 md:border-4 border-black">
            ENTER_ZONE
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>
