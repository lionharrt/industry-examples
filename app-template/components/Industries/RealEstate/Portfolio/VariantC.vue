<template>
  <section class="py-48 bg-white text-background px-12 md:px-24">
    <div class="max-w-7xl mx-auto space-y-48">
      <div 
        v-for="(item, idx) in items" 
        :key="idx" 
        class="group grid grid-cols-1 md:grid-cols-12 gap-24 items-center"
      >
        <div class="md:col-span-7 aspect-[4/3] relative rounded-[4rem] overflow-hidden shadow-2xl" :class="{ 'md:order-2': idx % 2 === 1 }">
          <ParallaxImage :src="item.image + '?auto=format&fit=crop&w=1600'" speed="0.05" />
          <div class="absolute inset-0 border-[40px] border-white group-hover:border-0 transition-all duration-1000"></div>
        </div>
        <div class="md:col-span-5 space-y-12" :class="{ 'md:text-right': idx % 2 === 1 }">
          <div class="space-y-4">
            <span class="text-xs font-black uppercase tracking-[0.5em] text-accent bg-background px-4 py-1 rounded-full">Excluisve</span>
            <h3 class="text-6xl font-bold uppercase tracking-tighter shadow-sm leading-none">{{ item.title }}</h3>
          </div>
          <p class="text-secondary text-xl font-medium leading-relaxed">
            Unparalleled luxury meets architectural brilliance. A once-in-a-generation opportunity to own a piece of the horizon.
          </p>
          <div class="flex flex-wrap gap-8" :class="{ 'md:justify-end': idx % 2 === 1 }">
            <div v-for="tag in ['Gated', 'Smart Home', 'Views']" :key="tag" class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-secondary">
              <div class="w-1.5 h-1.5 rounded-full bg-accent"></div>
              {{ tag }}
            </div>
          </div>
          <button class="px-12 py-5 bg-background text-primary font-black uppercase tracking-widest text-[10px] rounded-full hover:shadow-[0_20px_50px_rgba(0,0,128,0.3)] hover:-translate-y-1 transition-all duration-500">Inquire Details</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>
