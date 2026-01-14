<template>
  <section class="py-48 bg-black text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">
      <div v-for="(tier, idx) in tiers" :key="idx" class="flex-1 p-16 border-2 border-white/10 flex flex-col justify-between group hover:border-accent transition-all duration-1000 relative">
        <div class="absolute top-0 right-0 p-8 text-[10vw] font-black opacity-[0.03] group-hover:opacity-10 transition-opacity">F</div>
        
        <div class="space-y-16">
          <h3 class="text-4xl font-black uppercase tracking-widest text-accent italic group-hover:translate-x-4 transition-transform duration-700">{{ tier.name }}</h3>
          <div class="space-y-8">
            <div v-for="f in tier.features" :key="f" class="flex items-center gap-6 group-hover:translate-x-2 transition-transform duration-700">
              <div class="w-2 h-2 bg-white/20 group-hover:bg-accent transition-colors"></div>
              <span class="text-xs font-black uppercase tracking-widest text-primary/40 group-hover:text-primary transition-colors">{{ f }}</span>
            </div>
          </div>
        </div>
        
        <div class="mt-24">
          <p class="text-7xl font-black mb-12 tracking-tighter">{{ tier.price }}</p>
          <button class="w-full py-6 bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-accent hover:text-primary transition-all">Initialize_Order</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
