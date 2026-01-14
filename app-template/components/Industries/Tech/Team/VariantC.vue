<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto flex gap-8 overflow-x-auto hide-scrollbar pb-12">
      <div v-for="(member, idx) in team" :key="idx" class="min-w-[300px] group bg-white/[0.02] border border-white/10 rounded-[3rem] p-8 hover:bg-accent transition-all duration-700">
        <div class="aspect-square rounded-2xl overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 scale-90 group-hover:scale-100 shadow-2xl">
          <img :src="member.image" class="w-full h-full object-cover" />
        </div>
        <div class="text-center">
          <h3 class="text-2xl font-black uppercase tracking-tighter group-hover:text-primary transition-colors">{{ member.name }}</h3>
          <p class="text-secondary text-[10px] font-black uppercase tracking-widest mt-2 group-hover:text-primary transition-colors">{{ member.role }}</p>
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
