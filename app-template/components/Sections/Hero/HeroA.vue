<template>
  <section class="h-screen flex items-center justify-center bg-background">
    <div class="text-center">
      <AnimatedText class="text-[10vw] font-black uppercase tracking-tighter leading-[0.8]">
        {{ title }}
      </AnimatedText>
      <p class="mt-8 text-accent uppercase tracking-[0.5em] text-sm font-bold">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>
