<template>
  <section class="py-48 bg-white text-background px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
      <div class="lg:col-span-7 space-y-16">
        <h2 class="text-[10vw] font-bold uppercase leading-[0.8] tracking-tighter text-accent shadow-sm italic">SECURE <br/>THE VIEW</h2>
        <div class="grid grid-cols-2 gap-12 pt-16 border-t border-gray-100">
          <div v-for="info in contactInfo" :key="info.label" class="space-y-4 group cursor-pointer">
            <p class="text-[10px] font-black uppercase tracking-[0.5em] text-secondary group-hover:text-accent transition-colors">{{ info.label }}</p>
            <p class="text-2xl font-bold uppercase tracking-tighter">{{ info.value }}</p>
          </div>
        </div>
      </div>
      <div class="lg:col-span-5 relative group">
        <div class="aspect-[3/4] rounded-[5rem] overflow-hidden shadow-2xl border border-gray-100">
          <ParallaxImage src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200" speed="0.1" />
          <div class="absolute inset-0 bg-white/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-12 text-center space-y-12">
            <p class="text-4xl font-bold uppercase tracking-tighter italic shadow-sm leading-none text-background">Your <br/><span class="text-accent">Masterpiece</span> <br/>Awaits</p>
            <button class="px-12 py-6 bg-background text-primary font-black uppercase tracking-widest text-xs rounded-full shadow-2xl hover:scale-105 transition-transform">Begin_Journey</button>
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
