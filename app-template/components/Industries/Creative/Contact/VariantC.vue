<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col items-center text-center space-y-24">
      <div class="w-48 h-48 bg-secondary rounded-full flex items-center justify-center group cursor-pointer hover:rotate-90 transition-transform duration-1000">
        <ArrowUpRight :size="100" class="text-background" />
      </div>
      <div class="space-y-12">
        <h2 class="text-[10vw] font-black uppercase leading-none tracking-tighter">{{ title }}</h2>
        <div class="flex flex-wrap justify-center gap-24 pt-12 border-t border-white/10">
          <div class="text-left">
            <p class="text-[10px] font-black uppercase tracking-[0.5em] text-primary/20 mb-4">Digital HQ</p>
            <p class="text-xl font-black uppercase">Metaverse / 01</p>
          </div>
          <div class="text-left">
            <p class="text-[10px] font-black uppercase tracking-[0.5em] text-primary/20 mb-4">Direct</p>
            <p class="text-xl font-black uppercase">{{ email }}</p>
          </div>
          <div class="text-left">
            <p class="text-[10px] font-black uppercase tracking-[0.5em] text-primary/20 mb-4">Voice</p>
            <p class="text-xl font-black uppercase">{{ phone }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
defineProps<{ title: string, email: string, phone: string }>()
</script>
