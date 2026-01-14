<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
      <div class="lg:col-span-8 space-y-24">
        <h2 class="text-[12vw] font-black leading-none uppercase tracking-widest text-accent opacity-20 hover:opacity-100 transition-opacity duration-700">
          STUDIO
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <p class="text-2xl font-black leading-snug uppercase">
            {{ title }}
          </p>
          <p class="text-primary/40 leading-relaxed font-medium">
            {{ content }}
          </p>
        </div>
      </div>
      <div class="lg:col-span-4 h-[60vh] rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-8 flex flex-col justify-between group">
        <div class="text-[5vw] font-black text-primary opacity-10 group-hover:opacity-100 transition-opacity">?</div>
        <p class="text-xs font-black uppercase tracking-[0.4em] text-primary/40 group-hover:text-accent">Why work with us?</p>
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
