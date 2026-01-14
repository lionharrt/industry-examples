<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
      <div v-for="(member, idx) in team" :key="idx" class="group cursor-pointer">
        <div class="aspect-square relative overflow-hidden rounded-full mb-8">
          <img :src="member.image" class="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-6 transition-all duration-700" />
          <div class="absolute inset-0 bg-secondary mix-blend-color group-hover:opacity-0 transition-opacity duration-700"></div>
        </div>
        <div class="text-center space-y-2">
          <h3 class="text-2xl font-black uppercase tracking-tighter">{{ member.name }}</h3>
          <p class="text-accent text-[10px] font-black uppercase tracking-widest">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>
