<template>
  <section class="py-48 bg-white text-background px-12 md:px-24 border-b border-gray-100">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
      <div class="space-y-12">
        <div class="flex items-center gap-6">
          <div class="w-12 h-px bg-accent"></div>
          <span class="text-secondary text-xs font-black uppercase tracking-widest">A Vision for Excellence</span>
        </div>
        <AnimatedText class="text-7xl font-bold uppercase leading-[0.8] tracking-tighter shadow-sm">
          {{ title }}
        </AnimatedText>
        <p class="text-secondary text-2xl font-light leading-relaxed max-w-lg">
          {{ content }}
        </p>
        <div class="pt-12 grid grid-cols-2 gap-12 border-t border-gray-100">
          <div v-for="i in 2" :key="i" class="space-y-2">
            <p class="text-4xl font-black text-background">0{{ i === 1 ? '1' : '5' }}</p>
            <p class="text-[10px] uppercase tracking-widest text-secondary font-bold">{{ i === 1 ? 'Market Leadership' : 'Global Offices' }}</p>
          </div>
        </div>
      </div>
      <div class="relative group rounded-3xl overflow-hidden shadow-2xl">
        <ParallaxImage src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200" speed="0.1" />
        <div class="absolute inset-0 bg-background/10 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
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
