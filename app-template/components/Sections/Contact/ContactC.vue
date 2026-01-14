<template>
  <section class="h-screen bg-primary text-background flex items-center justify-center p-12">
    <div class="text-center">
      <h2 class="text-[15vw] font-black uppercase leading-none tracking-tighter hover:italic transition-all cursor-pointer">{{ title }}</h2>
      <div class="mt-12 flex justify-center gap-12 text-xl font-bold uppercase tracking-widest">
        <a href="#" class="hover:text-accent">Instagram</a>
        <a href="#" class="hover:text-accent">Twitter</a>
        <a href="#" class="hover:text-accent">LinkedIn</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()
</script>
