<template>
  <section class="py-48 bg-black text-primary px-12 md:px-24">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
      <div v-for="(tier, idx) in tiers" :key="idx" class="p-16 border-4 border-accent bg-white/5 hover:bg-accent hover:text-black transition-all duration-700 group flex flex-col justify-between h-[80vh] relative overflow-hidden">
        <div class="absolute -top-12 -right-12 text-[15vw] font-black italic opacity-5 group-hover:opacity-10 transition-opacity">0{{ idx + 1 }}</div>
        
        <div class="space-y-12 relative z-10">
          <h3 class="text-xs font-black uppercase tracking-[1em] text-accent group-hover:text-black italic">PROTOCOL_LEVEL</h3>
          <p class="text-7xl font-black italic leading-none uppercase tracking-tighter">{{ tier.name }}</p>
          <ul class="space-y-6 pt-12 border-t border-white/10 group-hover:border-black/20">
            <li v-for="f in tier.features" :key="f" class="flex items-center gap-6 text-xl font-bold italic opacity-40 group-hover:opacity-100 transition-opacity uppercase">
              <div class="w-4 h-4 bg-accent group-hover:bg-black group-hover:scale-125 transition-all"></div>
              {{ f }}
            </li>
          </ul>
        </div>

        <div class="relative z-10 mt-auto">
          <p class="text-8xl font-black italic uppercase leading-none tracking-tighter mb-8 group-hover:translate-x-4 transition-transform duration-700">{{ tier.price }}</p>
          <button class="w-full py-8 bg-accent text-black font-black uppercase italic tracking-widest text-xl group-hover:bg-black group-hover:text-accent transition-all">
            ACTIVATE_PROTOCOL
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
