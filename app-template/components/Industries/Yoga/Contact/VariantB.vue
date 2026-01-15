<template>
  <section class="py-16 md:py-32 bg-[#f5f1e9] px-6">
    <div class="max-w-4xl mx-auto text-center space-y-16 md:space-y-24">
      <div class="space-y-6 md:space-y-8">
        <h2 class="text-4xl md:text-6xl font-light text-primary italic leading-tight">{{ title }}</h2>
        <p class="text-lg md:text-xl text-primary/30 max-w-xl mx-auto font-light leading-relaxed px-4 md:px-0">“The soul always knows what to do to heal itself. The challenge is to silence the mind.”</p>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
        <div class="p-12 md:p-16 bg-white rounded-[60px] md:rounded-full shadow-sm hover:shadow-2xl transition-all duration-700 group">
          <div class="text-accent mb-6 md:mb-8 transform group-hover:scale-110 transition-transform duration-700 text-4xl md:text-5xl font-serif font-light opacity-20 group-hover:opacity-100">@</div>
          <h3 class="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-primary/20 mb-3 md:mb-4">Digital</h3>
          <p class="text-xl md:text-2xl font-serif text-primary break-all md:break-normal">{{ email }}</p>
        </div>
        <div class="p-12 md:p-16 bg-white rounded-[60px] md:rounded-full shadow-sm hover:shadow-2xl transition-all duration-700 group">
          <div class="text-accent mb-6 md:mb-8 transform group-hover:scale-110 transition-transform duration-700 text-4xl md:text-5xl font-serif font-light opacity-20 group-hover:opacity-100">#</div>
          <h3 class="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-primary/20 mb-3 md:mb-4">Voice</h3>
          <p class="text-xl md:text-2xl font-serif text-primary">{{ phone }}</p>
        </div>
      </div>
      
      <div class="pt-8 md:pt-12">
        <button class="relative px-10 md:px-16 py-5 md:py-6 group overflow-hidden rounded-full border border-primary/10 w-full sm:w-auto">
          <div class="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
          <span class="relative z-10 text-primary group-hover:text-white font-bold uppercase tracking-widest text-[9px] md:text-[10px] transition-colors">Apply for Membership</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
