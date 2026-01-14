<template>
  <section class="h-screen bg-background text-primary flex flex-col items-center justify-center text-center p-6 md:p-24 relative overflow-hidden">
    <!-- Geometric frame -->
    <div class="absolute inset-12 border-[20px] border-primary opacity-5 pointer-events-none"></div>
    
    <div class="relative z-10 space-y-16 max-w-5xl mx-auto">
      <h2 class="text-[18vw] font-black uppercase leading-[0.7] tracking-tighter text-primary mix-blend-multiply italic">DIALOG</h2>
      <div class="flex flex-col gap-12 pt-12">
        <a :href="'mailto:' + email" class="text-4xl md:text-7xl font-black uppercase tracking-tighter hover:text-accent transition-colors border-b-8 border-black/5 pb-12">{{ email }}</a>
        <div class="flex justify-center gap-24 pt-12">
          <div v-for="s in ['INSTA', 'ARCH', 'LINKED']" :key="s" class="text-xs font-black uppercase tracking-[1em] hover:italic cursor-pointer transition-all">
            {{ s }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
