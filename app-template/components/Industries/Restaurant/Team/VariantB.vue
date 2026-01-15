<template>
  <section class="py-16 md:py-48 bg-black text-white px-6 md:px-24 border-y border-white/5">
    <div class="max-w-7xl mx-auto">
      <div v-for="(member, idx) in team" :key="idx" class="group flex flex-col md:flex-row items-center gap-8 md:gap-24 py-12 md:py-24 border-b border-white/5 last:border-0">
        <div class="w-48 h-48 sm:w-64 sm:h-64 md:w-1/3 md:h-auto md:aspect-square rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 flex-shrink-0">
          <ParallaxImage :src="member.image" speed="0.1" />
        </div>
        <div class="w-full md:w-2/3 space-y-4 md:space-y-8 text-center md:text-left">
          <span class="text-[#A0522D] font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[1em]">The Craft{{ member.role.includes('Chef') ? 'smaster' : ' specialist' }}</span>
          <h3 class="text-4xl sm:text-5xl md:text-7xl font-serif italic text-[#D4AF37] leading-none">{{ member.name }}</h3>
          <p class="text-base md:text-2xl font-light text-white/40 leading-relaxed max-w-xl mx-auto md:mx-0 group-hover:text-white transition-colors duration-700">
            Dedicated to the pursuit of culinary perfection and the preservation of elemental cooking techniques.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>
