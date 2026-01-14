<template>
  <section class="py-32 bg-background px-12">
    <div class="flex gap-8 overflow-x-auto hide-scrollbar">
      <div v-for="(member, idx) in team" :key="idx" class="min-w-[300px] group">
        <div class="aspect-[3/4] overflow-hidden rounded-full mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
          <img :src="member.image" class="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500" />
        </div>
        <div class="text-center">
          <h3 class="text-xl font-bold uppercase">{{ member.name }}</h3>
          <p class="text-primary/40 text-xs uppercase tracking-widest">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
