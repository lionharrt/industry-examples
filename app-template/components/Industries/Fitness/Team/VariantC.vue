<template>
  <section class="py-16 md:py-48 bg-black text-white px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
      <div v-for="(member, idx) in team" :key="idx" class="group flex flex-col bg-accent p-0 border-[12px] md:border-[24px] border-white shadow-[20px_20px_0_0_#CCFF00] hover:shadow-none hover:translate-x-4 hover:translate-y-4 transition-all duration-300">
        <div class="w-full aspect-video overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border-b-[12px] md:border-b-[24px] border-white">
          <img :src="member.image + '?auto=format&fit=crop&w=1200'" class="w-full h-full object-cover" />
        </div>
        <div class="p-8 md:p-16 flex flex-col justify-center space-y-8 bg-black text-white group-hover:bg-white group-hover:text-black transition-colors">
          <div class="space-y-4">
            <h3 class="text-4xl md:text-8xl font-black italic uppercase leading-[0.75] tracking-tighter">{{ member.name }}</h3>
            <p class="text-xl md:text-3xl font-black uppercase tracking-widest text-accent group-hover:text-black">{{ member.role }}</p>
          </div>
          <div class="flex gap-4 md:gap-8">
            <div v-for="s in ['INSTA', 'PRO', 'TW']" :key="s" class="px-6 py-2 border-4 border-current flex items-center justify-center text-xs md:text-xl font-black hover:bg-accent hover:text-black transition-all cursor-pointer italic">
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
