<template>
  <section class="py-48 bg-white text-background px-12 md:px-24">
    <div class="max-w-7xl mx-auto space-y-24">
      <div class="text-center space-y-8">
        <h2 class="text-8xl font-serif italic leading-none tracking-tighter uppercase italic">The Counsel</h2>
        <div class="h-px w-32 bg-accent mx-auto"></div>
      </div>

      <div class="flex gap-12 overflow-x-auto hide-scrollbar pb-12">
        <div v-for="(member, idx) in team" :key="idx" class="min-w-[400px] group bg-[#FAF9F6] p-16 flex flex-col justify-between hover:shadow-[0_50px_100px_rgba(0,0,0,0.1)] transition-all duration-1000 relative overflow-hidden border border-background/5">
          <div class="absolute -top-12 -right-12 text-[15vw] font-serif italic opacity-[0.02] group-hover:text-accent transition-colors italic">V</div>
          <div class="aspect-square relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl border-8 border-white mb-12">
            <img :src="member.image + '?auto=format&fit=crop&w=800'" class="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
          </div>
          <div class="space-y-4">
            <h3 class="text-4xl font-serif italic tracking-tighter uppercase italic">{{ member.name }}</h3>
            <p class="text-[10px] font-black uppercase tracking-[0.5em] text-accent italic">{{ member.role }}</p>
          </div>
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
