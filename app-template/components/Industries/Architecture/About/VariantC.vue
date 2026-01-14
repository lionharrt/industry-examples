<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-end">
      <div class="lg:col-span-8 space-y-24">
        <h2 class="text-[12vw] font-black leading-none uppercase tracking-widest text-accent opacity-20 hover:opacity-100 transition-opacity duration-700 italic">
          VOID
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <p class="text-3xl font-black leading-none uppercase tracking-tighter">
            {{ title }}
          </p>
          <p class="text-primary/40 leading-relaxed font-medium">
            {{ content }}
          </p>
        </div>
      </div>
      <div class="lg:col-span-4 aspect-[2/3] rounded-3xl overflow-hidden shadow-2xl relative group">
        <ParallaxImage src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800" speed="0.05" />
        <div class="absolute inset-0 border-[30px] border-background group-hover:border-0 transition-all duration-1000"></div>
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
