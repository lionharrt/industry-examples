<template>
  <section class="py-32 bg-background px-12">
    <div class="max-w-4xl mx-auto text-center">
      <AnimatedText class="text-4xl font-bold mb-12 uppercase tracking-widest text-accent">
        {{ title }}
      </AnimatedText>
      <p class="text-xl leading-relaxed text-primary/80">
        {{ content }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  content: string
}>()
</script>
