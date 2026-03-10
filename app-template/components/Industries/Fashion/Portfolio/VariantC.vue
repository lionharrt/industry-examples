<template>
  <section class="py-16 md:py-48 bg-black text-white px-6 md:px-24">
    <div class="max-w-7xl mx-auto space-y-24 md:space-y-48">
      <div 
        v-for="(item, idx) in items" 
        :key="idx" 
        class="group grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 items-center"
      >
        <div class="lg:col-span-7 aspect-square sm:aspect-video relative overflow-hidden" :class="{ 'lg:order-2': idx % 2 === 1 }">
          <ParallaxImage :src="item.image + '?auto=format&fit=crop&w=1600'" speed="0.05" />
          <!-- Editorial text overlay -->
          <div class="absolute top-4 left-4 md:top-12 md:left-12 text-6xl md:text-[10vw] font-black uppercase leading-none opacity-5 group-hover:opacity-20 transition-opacity italic select-none">EDIT</div>
        </div>
        <div class="lg:col-span-5 space-y-8 md:space-y-12 text-center lg:text-left" :class="{ 'lg:text-right': idx % 2 === 1, 'lg:pr-12': idx % 2 === 0, 'lg:pl-12': idx % 2 === 1 }">
          <h3 class="text-4xl sm:text-6xl md:text-[4.5vw] font-black uppercase tracking-tighter text-[#dc143c] group-hover:text-white transition-colors duration-700 leading-none">{{ item.title }}</h3>
          <p class="text-white/40 text-sm md:text-sm font-bold uppercase tracking-widest leading-relaxed md:leading-loose mx-auto lg:mx-0 max-w-sm">
            A celebration of structure and fluidity. Exploring the boundaries of contemporary tailoring.
          </p>
          <button class="px-8 md:px-12 py-3 md:py-4 border-2 border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest group-hover:border-[#dc143c] transition-all mx-auto lg:mx-0">Details</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>
