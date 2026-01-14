<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24 relative overflow-hidden">
    <!-- Large background watermark -->
    <div class="absolute -left-24 bottom-0 text-[40vw] font-black opacity-[0.02] select-none pointer-events-none">INFRA</div>
    
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-end">
      <div class="lg:col-span-7 space-y-16">
        <span class="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-secondary">Core Identity</span>
        <AnimatedText class="text-[7vw] font-black leading-none uppercase tracking-tighter text-accent">
          {{ title }}
        </AnimatedText>
        <p class="text-2xl text-primary/60 font-light leading-relaxed">
          {{ content }}
        </p>
      </div>
      <div class="lg:col-span-5 h-[50vh] bg-gradient-to-t from-accent/20 to-transparent border-x border-white/10 rounded-t-[100px] flex items-center justify-center p-12">
        <div class="text-center">
          <p class="text-[12vw] font-black leading-none text-primary/10">NXS</p>
          <p class="text-xs uppercase tracking-[1em] text-secondary font-black mt-8">Secure Layer</p>
        </div>
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
