<template>
  <section class="py-48 bg-black text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto space-y-48">
      <div 
        v-for="(item, idx) in items" 
        :key="idx" 
        class="group grid grid-cols-1 lg:grid-cols-12 gap-24 items-center"
      >
        <div class="lg:col-span-8 aspect-video relative overflow-hidden" :class="{ 'lg:order-2': idx % 2 === 1 }">
          <ParallaxImage :src="item.image + '?auto=format&fit=crop&w=1600'" speed="0.05" />
          <!-- Editorial text overlay -->
          <div class="absolute top-12 left-12 text-[10vw] font-black uppercase leading-none opacity-5 group-hover:opacity-20 transition-opacity italic">EDIT</div>
        </div>
        <div class="lg:col-span-4 space-y-12" :class="{ 'lg:text-right': idx % 2 === 1 }">
          <h3 class="text-[5vw] font-black uppercase leading-[0.8] tracking-tighter text-accent group-hover:text-primary transition-colors duration-700">{{ item.title }}</h3>
          <p class="text-primary/40 text-sm font-bold uppercase tracking-widest leading-loose">
            A celebration of structure and fluidity. Exploring the boundaries of contemporary tailoring.
          </p>
          <button class="px-12 py-4 border-2 border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest group-hover:border-accent transition-all">Details</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>
