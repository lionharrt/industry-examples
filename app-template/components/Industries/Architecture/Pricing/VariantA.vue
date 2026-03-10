<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/5 rounded-2xl md:rounded-[4rem] overflow-hidden shadow-2xl">
      <div v-for="(tier, idx) in tiers" :key="idx" class="p-8 md:p-24 bg-white hover:bg-background transition-all duration-1000 flex flex-col justify-between border border-black/5 group text-center md:text-left">
        <div class="space-y-8 md:space-y-16">
          <h3 class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] text-accent">Phase_0{{ idx + 1 }}</h3>
          <p class="text-5xl sm:text-7xl md:text-[8vw] font-black tracking-tighter leading-none italic group-hover:translate-x-4 transition-transform">{{ tier.price }}</p>
          <div class="space-y-8 md:space-y-12 pt-8 md:pt-16 border-t border-black/5">
            <p class="text-2xl md:text-3xl font-black uppercase tracking-tighter">{{ tier.name }}</p>
            <ul class="space-y-4 md:space-y-6">
              <li v-for="f in tier.features" :key="f" class="flex items-center gap-4 md:gap-6 text-xs md:text-sm font-black uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                <div class="w-4 h-px bg-primary hidden md:block"></div>
                {{ f }}
              </li>
            </ul>
          </div>
        </div>
        <button class="mt-12 md:mt-24 w-full py-6 md:py-8 border-2 border-black text-primary font-black uppercase tracking-widest text-[10px] hover:bg-black hover:text-white transition-all italic">Request_Brief</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
