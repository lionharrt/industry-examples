<template>
  <section class="py-32 bg-accent text-black px-12 text-center">
    <h2 class="text-[10vw] font-black uppercase leading-none mb-12">{{ title }}</h2>
    <div class="space-y-4">
      <p class="text-2xl font-bold">{{ email }}</p>
      <p class="text-2xl font-bold">{{ phone }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
