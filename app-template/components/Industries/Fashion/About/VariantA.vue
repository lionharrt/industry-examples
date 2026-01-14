<template>
  <section class="py-48 bg-black text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
      <div class="relative group">
        <div class="aspect-[3/4] overflow-hidden rounded-3xl border border-white/10 p-4 group-hover:p-0 transition-all duration-1000">
          <ParallaxImage src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200" speed="0.1" />
        </div>
        <div class="absolute -bottom-12 -left-12 w-48 h-48 bg-accent flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-1000 shadow-2xl">
          <p class="text-[10px] font-black uppercase tracking-widest text-center px-4 leading-relaxed">Redefining the human silhouette through code.</p>
        </div>
      </div>
      <div class="space-y-12">
        <span class="text-xs font-black uppercase tracking-[1em] text-primary/20">The_Manifesto</span>
        <AnimatedText class="text-7xl font-black uppercase leading-[0.8] tracking-tighter">
          {{ title }}
        </AnimatedText>
        <p class="text-primary/40 text-2xl font-light leading-relaxed max-w-lg italic">
          {{ content }}
        </p>
        <div class="pt-12 flex gap-8 border-t border-white/5">
          <div v-for="i in 3" :key="i" class="w-2 h-2 rounded-full" :class="i === 1 ? 'bg-accent' : 'bg-white/10'"></div>
        </div>
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
