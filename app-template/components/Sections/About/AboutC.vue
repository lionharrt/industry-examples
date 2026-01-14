<template>
  <section class="py-32 bg-primary text-background px-12">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col gap-12">
        <h2 class="text-[12vw] font-black leading-none opacity-10 uppercase pointer-events-none select-none">
          {{ title }}
        </h2>
        <p class="text-3xl max-w-2xl font-medium leading-relaxed">
          {{ content }}
        </p>
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
