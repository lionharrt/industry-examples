<template>
  <section class="py-16 md:py-24 bg-[#f0fff0] px-6">
    <div class="max-w-4xl mx-auto text-center space-y-12 md:space-y-16">
      <div class="space-y-4 md:space-y-6">
        <h2 class="text-3xl md:text-5xl font-light text-primary leading-tight">{{ title }}</h2>
        <p class="text-base md:text-lg text-primary/40 max-w-xl mx-auto italic font-light">“Recovery is a journey, not a destination. Let us guide you back to your best self.”</p>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
        <div class="p-8 md:p-12 bg-white rounded-[30px] md:rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 group">
          <div class="text-accent mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-500 text-3xl md:text-4xl font-serif">@</div>
          <h3 class="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-primary/30 mb-2">Electronic Mail</h3>
          <p class="text-lg md:text-2xl font-serif text-primary break-all md:break-normal">{{ email }}</p>
        </div>
        <div class="p-8 md:p-12 bg-white rounded-[30px] md:rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 group">
          <div class="text-accent mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-500 text-3xl md:text-4xl font-serif">#</div>
          <h3 class="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-primary/30 mb-2">Voice Line</h3>
          <p class="text-lg md:text-2xl font-serif text-primary">{{ phone }}</p>
        </div>
      </div>
      
      <div class="pt-4 md:pt-8">
        <button class="relative px-10 md:px-12 py-4 md:py-5 group overflow-hidden rounded-full">
          <div class="absolute inset-0 bg-primary group-hover:bg-accent transition-colors duration-500"></div>
          <span class="relative z-10 text-white font-bold uppercase tracking-widest text-[10px] md:text-xs">Request An Appointment</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
