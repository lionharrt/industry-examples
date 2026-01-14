<template>
  <footer class="py-12 bg-black text-accent px-6 md:px-24 flex justify-between items-center border-t border-accent/10">
    <div class="flex items-center gap-8">
      <div class="w-12 h-12 border border-accent rounded-full flex items-center justify-center text-[10px] font-black">E&O</div>
      <p class="text-[10px] font-black uppercase tracking-[0.3em] hidden md:block">{{ copyright }}</p>
    </div>
    <div class="flex gap-12">
      <div v-for="social in ['IG', 'TW', 'LI']" :key="social" class="text-[10px] font-black hover:text-primary transition-colors cursor-pointer">
        {{ social }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
