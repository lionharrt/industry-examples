<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col gap-px bg-white/5 border border-white/5 overflow-hidden">
        <div 
          v-for="(service, idx) in services" 
          :key="idx" 
          class="service-row group py-12 md:py-32 bg-background px-6 md:px-12 flex flex-col md:flex-row items-center justify-between hover:bg-secondary hover:text-background transition-all duration-700 cursor-pointer text-center md:text-left relative overflow-hidden"
        >
          <div class="absolute inset-0 bg-accent translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out opacity-10"></div>
          <div class="flex flex-col md:flex-row items-center gap-4 md:gap-16 relative z-10">
            <span class="text-4xl md:text-[6vw] font-black opacity-10 group-hover:opacity-100 transition-all duration-500 leading-none group-hover:italic group-hover:scale-110">0{{ idx + 1 }}</span>
            <div class="space-y-2">
              <h3 class="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none group-hover:translate-x-4 transition-transform duration-700">{{ service.title }}</h3>
              <p class="text-[10px] md:text-xs font-black tracking-[0.4em] opacity-40 group-hover:text-background group-hover:opacity-100 transition-all">CORE_CAPABILITY</p>
            </div>
          </div>
          <div class="max-w-xs relative z-10 mt-8 md:mt-0">
            <p class="text-primary/40 group-hover:text-background font-bold text-xs md:text-sm uppercase tracking-widest text-center md:text-right transition-colors leading-relaxed mb-6">
              {{ service.description }}
            </p>
            <div class="h-1 w-full bg-white/10 group-hover:bg-background transition-colors rounded-full overflow-hidden">
              <div class="h-full bg-accent w-0 group-hover:w-full transition-all duration-1000 delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ services: any[] }>()
</script>
