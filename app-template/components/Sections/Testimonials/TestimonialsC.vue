<template>
  <section class="py-32 bg-primary text-background px-12">
    <div class="max-w-4xl mx-auto">
      <div v-for="(t, idx) in testimonials" :key="idx" class="flex gap-8 mb-16 last:mb-0">
        <div class="text-6xl font-black text-background/20">0{{ idx + 1 }}</div>
        <div>
          <p class="text-3xl font-bold mb-4 italic">"{{ t.quote }}"</p>
          <p class="uppercase tracking-widest text-xs font-black">{{ t.author }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ testimonials: any[] }>()
</script>
