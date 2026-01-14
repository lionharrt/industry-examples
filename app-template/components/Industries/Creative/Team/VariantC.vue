<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto flex gap-12 overflow-x-auto hide-scrollbar">
      <div v-for="(member, idx) in team" :key="idx" class="min-w-[300px] flex flex-col group items-center">
        <div class="w-full aspect-[3/4] rounded-3xl overflow-hidden relative mb-8">
          <img :src="member.image" class="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" />
          <div class="absolute inset-0 border-[20px] border-background group-hover:border-0 transition-all duration-700"></div>
        </div>
        <h3 class="text-3xl font-black uppercase tracking-tighter group-hover:text-accent transition-colors">{{ member.name }}</h3>
        <p class="text-xs font-black uppercase tracking-widest text-primary/20 mt-2">{{ member.role }}</p>
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
