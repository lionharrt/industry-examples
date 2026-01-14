<template>
  <footer class="py-24 bg-background px-12 border-t border-white/10">
    <div class="max-w-6xl mx-auto flex justify-between items-end">
      <div>
        <h2 class="text-4xl font-black uppercase mb-8">EMBER & OAK</h2>
        <p class="text-xs font-bold uppercase tracking-widest text-primary/40">{{ copyright }}</p>
      </div>
      <div class="flex gap-12 text-xs font-black uppercase tracking-widest">
        <div class="space-y-4">
          <p class="text-primary/20">Sitemap</p>
          <p>Home</p>
          <p>Menu</p>
          <p>Contact</p>
        </div>
        <div class="space-y-4">
          <p class="text-primary/20">Social</p>
          <p>IG</p>
          <p>TW</p>
          <p>LI</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ copyright: string }>()
</script>
