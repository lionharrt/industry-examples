<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
      <div class="space-y-12">
        <div class="flex items-center gap-6">
          <div class="w-12 h-px bg-secondary"></div>
          <span class="text-secondary text-xs font-black uppercase tracking-widest">About Us</span>
        </div>
        <AnimatedText class="text-[6vw] font-black leading-none uppercase">
          {{ title }}
        </AnimatedText>
        <p class="text-2xl text-primary/60 font-light leading-relaxed">
          {{ content }}
        </p>
      </div>
      <div class="relative group">
        <div class="absolute -inset-4 border border-accent opacity-20 group-hover:opacity-100 transition-opacity duration-700"></div>
        <ParallaxImage src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200" speed="0.1" />
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
