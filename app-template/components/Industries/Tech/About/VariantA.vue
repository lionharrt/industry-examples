<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
      <div class="relative">
        <div class="aspect-square bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl overflow-hidden p-12">
          <div class="w-full h-full border border-white/10 rounded-2xl bg-[#161B22]/50 backdrop-blur-xl relative">
            <!-- Simulated code lines -->
            <div class="p-8 space-y-4">
              <div v-for="i in 8" :key="i" class="h-2 rounded-full bg-white/5" :style="{ width: Math.random() * 80 + 20 + '%' }"></div>
            </div>
            <!-- Floating status badge -->
            <div class="absolute -top-6 -right-6 px-6 py-3 bg-secondary rounded-xl text-[10px] font-black uppercase tracking-widest shadow-2xl animate-bounce">99.9% Uptime</div>
          </div>
        </div>
      </div>
      <div class="space-y-12">
        <span class="text-accent text-xs font-black uppercase tracking-[0.5em] block">Background</span>
        <AnimatedText class="text-6xl font-black leading-tight uppercase tracking-tighter">
          {{ title }}
        </AnimatedText>
        <p class="text-primary/40 text-xl leading-relaxed font-medium">
          {{ content }}
        </p>
        <div class="flex gap-12 pt-8">
          <div v-for="i in 2" :key="i" class="space-y-2">
            <p class="text-3xl font-black text-secondary">0{{ i === 1 ? '1' : '5' }}ms</p>
            <p class="text-[10px] uppercase tracking-widest text-primary/20">{{ i === 1 ? 'Latency' : 'Deployment' }}</p>
          </div>
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
