<template>
  <section class="py-32 bg-[#f5f1e9]">
    <div class="max-w-4xl mx-auto px-6 text-center space-y-24">
      <div class="space-y-8">
        <h2 class="text-6xl font-light text-primary italic">{{ title }}</h2>
        <p class="text-xl text-primary/30 max-w-xl mx-auto font-light leading-relaxed">“The soul always knows what to do to heal itself. The challenge is to silence the mind.”</p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-12">
        <div class="p-16 bg-white rounded-full shadow-sm hover:shadow-2xl transition-all duration-700 group">
          <div class="text-accent mb-8 transform group-hover:scale-110 transition-transform duration-700 text-5xl font-serif font-light opacity-20 group-hover:opacity-100">@</div>
          <h3 class="text-[9px] font-black uppercase tracking-[0.4em] text-primary/20 mb-4">Digital</h3>
          <p class="text-2xl font-serif text-primary">{{ email }}</p>
        </div>
        <div class="p-16 bg-white rounded-full shadow-sm hover:shadow-2xl transition-all duration-700 group">
          <div class="text-accent mb-8 transform group-hover:scale-110 transition-transform duration-700 text-5xl font-serif font-light opacity-20 group-hover:opacity-100">#</div>
          <h3 class="text-[9px] font-black uppercase tracking-[0.4em] text-primary/20 mb-4">Voice</h3>
          <p class="text-2xl font-serif text-primary">{{ phone }}</p>
        </div>
      </div>
      
      <div class="pt-12">
        <button class="relative px-16 py-6 group overflow-hidden rounded-full border border-primary/10">
          <div class="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
          <span class="relative z-10 text-primary group-hover:text-white font-bold uppercase tracking-widest text-[10px] transition-colors">Apply for Membership</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
