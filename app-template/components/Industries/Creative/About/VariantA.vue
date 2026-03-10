<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32 items-center">
      <div class="space-y-6 md:space-y-12 text-center lg:text-left relative z-10">
        <div class="flex items-center gap-4 md:gap-6 justify-center lg:justify-start">
          <div class="w-8 md:w-12 h-px bg-secondary"></div>
          <span class="text-secondary text-[10px] md:text-xs font-black uppercase tracking-widest">Digital Artisans</span>
        </div>
        <AnimatedText class="text-4xl sm:text-6xl md:text-[7vw] font-black leading-tight uppercase tracking-tighter">
          {{ title }}
        </AnimatedText>
        <p class="text-lg md:text-2xl text-primary/80 font-medium leading-relaxed mx-auto lg:mx-0 max-w-2xl italic">
          {{ content }}
        </p>
        <div class="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12 pt-8">
          <div v-for="stat in [{l:'EXP',v:'12Y'},{l:'AWARDS',v:'24+'}]" :key="stat.l" class="space-y-1">
            <p class="text-3xl md:text-4xl font-black text-accent">{{ stat.v }}</p>
            <p class="text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-40">{{ stat.l }}</p>
          </div>
        </div>
      </div>
      <div class="relative group max-w-xl mx-auto lg:max-w-none">
        <div class="absolute -inset-4 md:-inset-8 border-2 border-accent opacity-0 group-hover:opacity-100 transition-all duration-1000 rotate-3 group-hover:rotate-0"></div>
        <div class="absolute -inset-4 md:-inset-8 border-2 border-secondary opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-100 -rotate-3 group-hover:rotate-0"></div>
        <ParallaxImage src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200" speed="0.1" class="relative z-10" />
        <div class="absolute -bottom-6 -right-6 md:-bottom-12 md:-right-12 w-24 h-24 md:w-48 md:h-48 bg-accent rounded-full flex items-center justify-center text-background font-black text-xs md:text-xl uppercase tracking-widest -rotate-12 animate-spin-slow">EST. 2014 • EST. 2014 •</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  content: string
}>()
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 12s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
