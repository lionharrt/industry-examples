<template>
  <footer class="py-12 bg-black text-primary px-12 md:px-24 flex justify-between items-center border-t border-white/5">
    <div class="flex items-center gap-8">
      <div class="px-4 py-2 bg-secondary rounded-lg text-black font-black text-[10px] tracking-widest uppercase shadow-[0_0_30px_rgba(0,128,128,0.3)]">NXS_CORE</div>
      <p class="text-[10px] font-black uppercase tracking-widest text-primary/20">{{ copyright }}</p>
    </div>
    <div class="flex gap-12">
      <div v-for="social in ['GH', 'TW', 'LI']" :key="social" class="text-[10px] font-black text-accent hover:text-primary transition-colors cursor-pointer">
        _{{ social }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
