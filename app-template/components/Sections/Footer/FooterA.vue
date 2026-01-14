<template>
  <footer class="py-12 bg-black text-white/40 px-12 text-center border-t border-white/10">
    <p class="text-[10px] uppercase tracking-[0.5em]">{{ copyright }}</p>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
