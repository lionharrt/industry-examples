<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">
      <div class="lg:col-span-8 space-y-12 md:space-y-24 text-center lg:text-left">
        <h2 class="text-6xl sm:text-8xl md:text-[10vw] font-black leading-none uppercase tracking-widest text-accent opacity-20 hover:opacity-100 transition-opacity duration-700">
          STUDIO
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <p class="text-xl md:text-2xl font-black leading-snug uppercase">
            {{ title }}
          </p>
          <p class="text-primary/40 text-base md:text-lg leading-relaxed font-medium">
            {{ content }}
          </p>
        </div>
      </div>
      <div class="lg:col-span-4 min-h-[40vh] md:h-[60vh] rounded-2xl md:rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-6 md:p-8 flex flex-col justify-between group text-center lg:text-left max-w-sm mx-auto lg:max-w-none w-full relative">
        <div class="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
        <div class="text-6xl md:text-[5vw] font-black text-secondary leading-none">01</div>
        <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-primary group-hover:text-accent transition-colors">THE STUDIO MISSION</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  content: string
}>()
</script>
