<template>
  <section class="py-24 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
      <div class="lg:col-span-7 space-y-12 md:space-y-16">
        <h2 class="text-[12vw] md:text-[8vw] font-bold uppercase leading-[0.8] tracking-tighter text-accent shadow-sm italic">SECURE <br/>THE VIEW</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-12 md:pt-16 border-t border-primary/10">
          <div v-for="info in contactInfo" :key="info.label" class="space-y-2 md:space-y-4 group cursor-pointer">
            <p class="text-[10px] font-black uppercase tracking-[0.5em] text-primary/40 group-hover:text-accent transition-colors">{{ info.label }}</p>
            <p class="text-xl md:text-2xl font-bold uppercase tracking-tighter break-words text-primary group-hover:text-accent transition-colors">{{ info.value }}</p>
          </div>
        </div>
      </div>
      <div class="lg:col-span-5 relative group">
        <div class="aspect-[3/4] rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-2xl border border-primary/10 bg-primary/5">
          <ParallaxImage src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" :speed="0.1" />
          <div class="absolute inset-0 bg-background/40 backdrop-blur-sm opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 md:p-12 text-center space-y-8 md:space-y-12">
            <p class="text-3xl md:text-4xl font-bold uppercase tracking-tighter italic shadow-sm leading-none text-primary">Your <br/><span class="text-accent">Masterpiece</span> <br/>Awaits</p>
            <button class="px-8 md:px-12 py-4 md:py-6 bg-accent text-background font-black uppercase tracking-widest text-[10px] md:text-xs rounded-full shadow-2xl hover:scale-105 transition-transform">Begin_Journey</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
const contactInfo = [
  { label: 'Private_Mail', value: 'nyc@meridian.estate' },
  { label: 'Secure_Line', value: '+1 212 555 LUXE' },
  { label: 'London_HQ', value: 'Mayfair, W1' },
  { label: 'Dubai_HQ', value: 'Downtown / 01' }
]
</script>
