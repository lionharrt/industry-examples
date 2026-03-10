<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-end">
      <div class="lg:col-span-8 space-y-12 md:space-y-24 text-center md:text-left">
        <h2 class="text-6xl sm:text-8xl md:text-[12vw] font-black leading-none uppercase tracking-widest text-accent opacity-20 hover:opacity-100 transition-opacity duration-700 italic">
          VOID
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <p class="text-2xl md:text-3xl font-black leading-none uppercase tracking-tighter">
            {{ title }}
          </p>
          <p class="text-primary/40 leading-relaxed font-medium">
            {{ content }}
          </p>
        </div>
      </div>
      <div class="lg:col-span-4 aspect-[2/3] rounded-3xl overflow-hidden shadow-2xl relative group max-w-sm mx-auto lg:max-w-none">
        <ParallaxImage src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800" speed="0.05" />
        <div class="absolute inset-0 border-[15px] md:border-[30px] border-background group-hover:border-0 transition-all duration-1000"></div>
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
