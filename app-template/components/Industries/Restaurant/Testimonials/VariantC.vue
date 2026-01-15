<template>
  <section class="py-16 md:py-48 bg-[#1A1A1A] text-white px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-24">
      <div v-for="(t, idx) in testimonials" :key="idx" class="p-6 sm:p-10 md:p-16 border border-white/5 bg-white/[0.02] rounded-2xl md:rounded-[4rem] flex flex-col justify-between group hover:border-[#D4AF37]/30 transition-all duration-700">
        <blockquote class="text-xl sm:text-2xl md:text-3xl font-serif leading-relaxed italic mb-8 md:mb-16 group-hover:text-[#D4AF37] transition-colors">
          "{{ t.quote }}"
        </blockquote>
        <div class="flex items-center gap-4 md:gap-6">
          <div class="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden grayscale flex-shrink-0">
            <ParallaxImage :src="t.image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'" />
          </div>
          <div>
            <p class="text-xs md:text-sm font-black uppercase tracking-widest">{{ t.author }}</p>
            <p class="text-[9px] md:text-[10px] uppercase tracking-widest text-white/30">{{ t.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ testimonials: any[] }>()
</script>
