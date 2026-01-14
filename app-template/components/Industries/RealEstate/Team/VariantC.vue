<template>
  <section class="py-48 bg-white text-background px-12 md:px-24">
    <div class="max-w-7xl mx-auto flex gap-12 overflow-x-auto hide-scrollbar pb-12">
      <div v-for="(member, idx) in team" :key="idx" class="min-w-[350px] md:min-w-[450px] group bg-gray-50 rounded-[4rem] p-12 hover:bg-background hover:text-primary transition-all duration-1000 relative overflow-hidden shadow-xl">
        <div class="text-[15vw] font-black absolute -right-8 -top-12 opacity-[0.02] group-hover:text-primary group-hover:opacity-[0.02] transition-all">M</div>
        <div class="relative h-[50vh] overflow-hidden rounded-[3rem] mb-12 shadow-2xl">
          <img :src="member.image + '?auto=format&fit=crop&w=800'" class="w-full h-full object-cover scale-125 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
        </div>
        <div class="text-center space-y-4">
          <h3 class="text-4xl font-bold uppercase tracking-tighter">{{ member.name }}</h3>
          <p class="text-xs font-black uppercase tracking-[0.5em] opacity-40 group-hover:text-accent group-hover:opacity-100 transition-all">{{ member.role }}</p>
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
