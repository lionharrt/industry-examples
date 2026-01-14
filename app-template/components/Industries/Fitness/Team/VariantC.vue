<template>
  <section class="py-48 bg-accent text-black px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
      <div v-for="(member, idx) in team" :key="idx" class="group flex bg-white p-8 border-4 border-black shadow-[20px_20px_0_0_#000000] hover:shadow-none hover:translate-x-[10px] hover:translate-y-[10px] transition-all duration-300">
        <div class="w-1/3 aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
          <img :src="member.image + '?auto=format&fit=crop&w=800'" class="w-full h-full object-cover" />
        </div>
        <div class="w-2/3 pl-8 flex flex-col justify-center space-y-8">
          <div class="space-y-2">
            <h3 class="text-4xl font-black italic uppercase leading-none tracking-tighter">{{ member.name }}</h3>
            <p class="text-xs font-black uppercase tracking-widest opacity-40">{{ member.role }}</p>
          </div>
          <div class="flex gap-4">
            <div v-for="s in ['INSTA', 'PRO', 'TW']" :key="s" class="w-10 h-10 border-2 border-black flex items-center justify-center text-[8px] font-black hover:bg-black hover:text-primary transition-all cursor-pointer">
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
