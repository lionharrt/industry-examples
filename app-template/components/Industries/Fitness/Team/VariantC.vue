<template>
  <section class="py-12 md:py-24 bg-black text-white px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      <div v-for="(member, idx) in team" :key="idx" class="group flex flex-col bg-accent p-0 border-[8px] md:border-[16px] border-white shadow-[10px_10px_0_0_#CCFF00] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300">
        <div class="w-full aspect-video overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border-b-[8px] md:border-b-[16px] border-white">
          <img :src="member.image + '?auto=format&fit=crop&w=1200'" class="w-full h-full object-cover" />
        </div>
        <div class="p-6 md:p-10 lg:p-12 flex flex-col justify-center space-y-6 bg-black text-white group-hover:bg-white group-hover:text-black transition-colors">
          <div class="space-y-2">
            <h3 class="text-4xl md:text-[min(6vw,80px)] font-black italic uppercase leading-none tracking-tighter">{{ member.name }}</h3>
            <p class="text-lg md:text-2xl font-black uppercase tracking-widest text-accent group-hover:text-black italic">{{ member.role }}</p>
          </div>
          <div class="flex gap-4 md:gap-6 pt-4">
            <div v-for="s in ['INSTA', 'PRO', 'TW']" :key="s" class="px-4 py-1.5 border-2 md:border-4 border-current flex items-center justify-center text-xs md:text-lg font-black hover:bg-accent hover:text-black transition-all cursor-pointer italic">
              {{ s }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: any[] }>()
</script>
