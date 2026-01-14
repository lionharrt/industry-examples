<template>
  <section class="py-24 bg-[#f0fff0]">
    <div class="max-w-4xl mx-auto px-6 text-center space-y-16">
      <div class="space-y-6">
        <h2 class="text-5xl font-light text-primary">{{ title }}</h2>
        <p class="text-lg text-primary/40 max-w-xl mx-auto italic">“Recovery is a journey, not a destination. Let us guide you back to your best self.”</p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-12">
        <div class="p-12 bg-white rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 group">
          <div class="text-accent mb-6 transform group-hover:scale-110 transition-transform duration-500 text-4xl font-serif">@</div>
          <h3 class="text-sm font-bold uppercase tracking-widest text-primary/30 mb-2">Electronic Mail</h3>
          <p class="text-2xl font-serif text-primary">{{ email }}</p>
        </div>
        <div class="p-12 bg-white rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 group">
          <div class="text-accent mb-6 transform group-hover:scale-110 transition-transform duration-500 text-4xl font-serif">#</div>
          <h3 class="text-sm font-bold uppercase tracking-widest text-primary/30 mb-2">Voice Line</h3>
          <p class="text-2xl font-serif text-primary">{{ phone }}</p>
        </div>
      </div>
      
      <div class="pt-8">
        <button class="relative px-12 py-5 group overflow-hidden rounded-full">
          <div class="absolute inset-0 bg-primary group-hover:bg-accent transition-colors duration-500"></div>
          <span class="relative z-10 text-white font-bold uppercase tracking-widest text-xs">Request An Appointment</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
