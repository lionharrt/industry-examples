<template>
  <section class="py-16 md:py-48 bg-black text-white px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-start">
      <div class="lg:col-span-4 space-y-6 md:space-y-12 lg:sticky lg:top-24 text-center lg:text-left">
        <h2 class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] text-[#dc143c]">Core_Values</h2>
        <AnimatedText class="text-4xl sm:text-6xl md:text-5xl font-black uppercase tracking-tighter leading-none">
          {{ title }}
        </AnimatedText>
      </div>
      <div class="lg:col-span-8 space-y-16 md:space-y-32">
        <p class="text-4xl sm:text-6xl md:text-[5vw] font-black uppercase leading-none tracking-tighter text-white/20 hover:text-white transition-colors duration-700 text-center lg:text-left">
          {{ content }}
        </p>
        <div class="grid grid-cols-2 gap-4 md:gap-12">
          <div v-for="i in 4" :key="i" class="aspect-[4/5] bg-white/5 rounded-xl md:rounded-2xl overflow-hidden relative group">
            <ParallaxImage :src="'https://images.unsplash.com/photo-' + (i === 1 ? '1515886657613-9f3515b0c78f' : i === 2 ? '1539109136881-3be0616acf4b' : i === 3 ? '1483985988355-763728e1935b' : '1503376780353-7e6692767b70') + '?auto=format&fit=crop&w=800'" :speed="0.05 * i" />
            <div class="absolute inset-0 bg-[#dc143c]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
