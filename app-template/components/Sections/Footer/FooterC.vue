<template>
  <footer class="py-48 bg-background px-12">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-[20vw] font-black leading-none opacity-5 uppercase mb-24 pointer-events-none select-none">OAK</h2>
      <div class="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.5em] text-primary/20">
        <p>REFINED DINING</p>
        <p>{{ copyright }}</p>
        <p>MADE WITH PASSION</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
