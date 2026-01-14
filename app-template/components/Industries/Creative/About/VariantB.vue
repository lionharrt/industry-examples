<template>
  <section class="py-48 bg-secondary text-background px-12 md:px-24 relative overflow-hidden">
    <div class="absolute -right-12 -top-12 text-[40vw] font-black opacity-5 pointer-events-none">
      01
    </div>
    
    <div class="max-w-4xl mx-auto space-y-16 relative z-10">
      <h2 class="text-[8vw] font-black leading-none uppercase tracking-tighter">{{ title }}</h2>
      <p class="text-4xl font-bold leading-tight italic">
        "{{ content }}"
      </p>
      <div class="flex gap-12 pt-12">
        <div v-for="i in 3" :key="i" class="space-y-4">
          <span class="text-xs font-black uppercase tracking-widest opacity-40">Value 0{{ i }}</span>
          <p class="text-xl font-black uppercase">{{ i === 1 ? 'RADICAL' : i === 2 ? 'BOLD' : 'PURE' }}</p>
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
