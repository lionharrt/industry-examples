<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
      <div class="relative group">
        <div class="aspect-square bg-white border border-primary/10 rounded-3xl overflow-hidden p-12">
          <ParallaxImage src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200" speed="0.1" />
        </div>
        <div class="absolute -top-12 -right-12 w-64 h-64 bg-primary p-12 flex flex-col justify-between group-hover:rotate-3 transition-transform duration-1000 shadow-2xl">
          <p class="text-[10px] font-black uppercase tracking-widest text-white leading-relaxed">"Architecture is the learned game, correct and magnificent, of forms assembled in the light."</p>
          <div class="h-px w-12 bg-accent"></div>
        </div>
      </div>
      <div class="space-y-12">
        <span class="text-xs font-black uppercase tracking-[1em] text-accent">Material_Exploration</span>
        <AnimatedText class="text-7xl font-black uppercase leading-[0.8] tracking-tighter">
          {{ title }}
        </AnimatedText>
        <p class="text-primary/60 text-2xl font-light leading-relaxed max-w-lg italic">
          {{ content }}
        </p>
        <div class="pt-12 grid grid-cols-2 gap-12 border-t border-primary/10">
          <div v-for="i in 2" :key="i" class="space-y-2">
            <p class="text-xs font-black uppercase tracking-widest text-accent">{{ i === 1 ? 'Structural Integrity' : 'Sustainable Vision' }}</p>
            <div class="h-1 w-full bg-black/5 overflow-hidden">
              <div class="h-full bg-primary w-0 group-hover:w-full transition-all duration-1000"></div>
            </div>
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
