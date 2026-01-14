<template>
  <footer class="py-12 bg-white text-background px-12 md:px-24 flex justify-between items-center border-t border-gray-100">
    <div class="flex items-center gap-8">
      <div class="px-8 py-3 border-2 border-background text-background font-black text-[10px] tracking-[0.5em] uppercase rounded-full shadow-sm">MERIDIAN_PROPERTIES</div>
      <p class="text-[10px] font-black uppercase tracking-widest text-secondary">{{ copyright }}</p>
    </div>
    <div class="flex gap-12">
      <div v-for="social in ['INSTA', 'LINKED', 'X_CORP']" :key="social" class="text-[10px] font-black text-secondary hover:text-background transition-colors cursor-pointer border-b border-transparent hover:border-accent pb-1">
        {{ social }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
