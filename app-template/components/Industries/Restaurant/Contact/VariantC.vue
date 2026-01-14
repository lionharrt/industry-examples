<template>
  <section class="py-48 bg-[#1A1A1A] text-white px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
      <div class="aspect-square rounded-full overflow-hidden border border-[#D4AF37]/20 p-8">
        <div class="w-full h-full rounded-full overflow-hidden grayscale contrast-125">
          <ParallaxImage :src="image || 'https://images.unsplash.com/photo-1559339352-11d035aa65de'" />
        </div>
      </div>
      <div class="space-y-16">
        <span class="text-[#A0522D] font-bold text-xs uppercase tracking-[1em]">The Connection</span>
        <h2 class="text-7xl font-serif italic text-white">{{ title }}</h2>
        <div class="grid grid-cols-2 gap-12 border-t border-white/10 pt-16">
          <div class="space-y-4">
            <p class="text-[10px] font-black uppercase tracking-widest text-white/30">Hours</p>
            <p class="text-sm font-bold uppercase tracking-widest">Tue — Sun<br/>18:00 — Late</p>
          </div>
          <div class="space-y-4">
            <p class="text-[10px] font-black uppercase tracking-widest text-white/30">Direct</p>
            <p class="text-sm font-bold uppercase tracking-widest">{{ email }}<br/>{{ phone }}</p>
          </div>
        </div>
        <button class="group flex items-center gap-6 text-xs font-black uppercase tracking-[0.5em] text-[#D4AF37]">
          <span>Book Your Experience</span>
          <ArrowRight :size="16" class="group-hover:translate-x-4 transition-transform duration-500" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
defineProps<{ title: string, email: string, phone: string, image?: string }>()
</script>
