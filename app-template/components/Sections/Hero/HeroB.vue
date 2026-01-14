<template>
  <section class="h-screen flex items-center bg-background px-12">
    <div class="grid grid-cols-2 gap-12 w-full">
      <div class="flex flex-col justify-center">
        <AnimatedText class="text-[6vw] font-black uppercase leading-none mb-6">
          {{ title }}
        </AnimatedText>
        <p class="text-accent uppercase tracking-widest text-lg">
          {{ subtitle }}
        </p>
      </div>
      <div class="h-[70vh]">
        <ParallaxImage src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200" alt="Restaurant Hero" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>
