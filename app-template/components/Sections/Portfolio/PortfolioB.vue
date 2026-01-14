<template>
  <section class="py-32 bg-background">
    <div class="flex gap-8 overflow-x-auto px-12 pb-12 hide-scrollbar">
      <div v-for="(item, idx) in items" :key="idx" class="min-w-[40vw] aspect-[16/9] rounded-3xl overflow-hidden relative group">
        <ParallaxImage :src="item.image + '?auto=format&fit=crop&w=1200'" :alt="item.title" />
        <div class="absolute bottom-8 left-8">
          <p class="text-white text-3xl font-black uppercase tracking-tighter">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
