<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12 md:space-y-24">
      <div class="w-32 h-32 md:w-48 md:h-48 bg-secondary rounded-full flex items-center justify-center group cursor-pointer hover:rotate-90 transition-transform duration-1000">
        <ArrowUpRight :size="60" class="text-background md:hidden" />
        <ArrowUpRight :size="100" class="text-background hidden md:block" />
      </div>
      <div class="space-y-8 md:space-y-12 w-full">
        <h2 class="text-5xl sm:text-7xl md:text-[10vw] font-black uppercase leading-none tracking-tighter leading-none">{{ title }}</h2>
        <div class="flex flex-col sm:flex-row flex-wrap justify-center gap-8 md:gap-24 pt-8 md:pt-12 border-t border-white/10">
          <div class="text-center sm:text-left">
            <p class="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-primary/20 mb-2 md:mb-4">Digital HQ</p>
            <p class="text-lg md:text-xl font-black uppercase leading-none">Metaverse / 01</p>
          </div>
          <div class="text-center sm:text-left">
            <p class="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-primary/20 mb-2 md:mb-4">Direct</p>
            <p class="text-lg md:text-xl font-black uppercase break-all leading-none px-4 sm:px-0">{{ email }}</p>
          </div>
          <div class="text-center sm:text-left">
            <p class="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-primary/20 mb-2 md:mb-4">Voice</p>
            <p class="text-lg md:text-xl font-black uppercase leading-none">{{ phone }}</p>
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
