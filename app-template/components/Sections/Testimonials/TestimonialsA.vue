<template>
  <section class="py-32 bg-background px-12 border-t border-white/5">
    <div class="max-w-4xl mx-auto">
      <div v-for="(t, idx) in testimonials" :key="idx" class="mb-24 last:mb-0">
        <blockquote class="text-4xl font-serif italic mb-8 leading-tight">"{{ t.quote }}"</blockquote>
        <div class="flex items-center gap-4">
          <div class="h-px w-12 bg-accent"></div>
          <p class="uppercase tracking-widest text-sm font-bold">{{ t.author }} — {{ t.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ testimonials: any[] }>()
</script>
