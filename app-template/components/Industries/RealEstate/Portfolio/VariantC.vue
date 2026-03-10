<template>
  <section class="py-24 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto space-y-24 md:space-y-48 text-primary">
      <div 
        v-for="(item, idx) in items" 
        :key="idx" 
        class="group grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center"
      >
        <div class="md:col-span-7 aspect-[4/3] relative rounded-[2.5rem] md:rounded-[5rem] overflow-hidden shadow-2xl bg-background group border border-primary/5" :class="{ 'md:order-2': idx % 2 === 1 }">
          <div class="absolute inset-0 p-0 group-hover:p-4 md:group-hover:p-8 transition-all duration-700 ease-in-out">
            <div class="w-full h-full relative rounded-[2.5rem] md:rounded-[4.5rem] overflow-hidden">
              <ParallaxImage :src="item.image" :speed="0.05" class="scale-110 group-hover:scale-100 transition-transform duration-1000" />
            </div>
          </div>
        </div>
        <div class="md:col-span-5 space-y-8 md:space-y-12" :class="{ 'md:text-right': idx % 2 === 1 }">
          <div class="space-y-4">
            <span class="text-[10px] font-black uppercase tracking-[0.5em] text-accent bg-primary/5 px-4 py-1 rounded-full border border-primary/10">Exclusive</span>
            <h3 class="text-3xl md:text-6xl font-bold uppercase tracking-tighter shadow-sm leading-none text-primary">{{ item.title }}</h3>
          </div>
          <p class="text-primary/60 text-base md:text-xl font-medium leading-relaxed">
            Unparalleled luxury meets architectural brilliance. A once-in-a-generation opportunity to own a piece of the horizon.
          </p>
          <div class="flex flex-wrap gap-4 md:gap-8" :class="{ 'md:justify-end': idx % 2 === 1 }">
            <div v-for="tag in ['Gated', 'Smart Home', 'Views']" :key="tag" class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary/40">
              <div class="w-1.5 h-1.5 rounded-full bg-accent"></div>
              {{ tag }}
            </div>
          </div>
          <button class="w-full md:w-auto px-12 py-5 bg-accent text-background font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-primary hover:text-background hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">Inquire Details</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>
