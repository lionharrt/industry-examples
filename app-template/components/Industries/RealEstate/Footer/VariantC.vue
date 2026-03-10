<template>
  <footer class="py-8 md:py-12 bg-background text-primary px-6 md:px-24 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 border-t border-primary/10">
    <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8">
      <div class="px-6 md:px-8 py-2 md:py-3 border-2 border-primary text-primary font-black text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase rounded-full shadow-sm">MERIDIAN_PROPERTIES</div>
      <p class="text-[10px] font-black uppercase tracking-widest text-primary/40">{{ copyright }}</p>
    </div>
    <div class="flex gap-8 md:gap-12">
      <div v-for="social in ['INSTA', 'LINKED', 'X_CORP']" :key="social" class="text-[10px] font-black text-primary/60 hover:text-accent transition-colors cursor-pointer border-b border-transparent hover:border-accent pb-1">
        {{ social }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
