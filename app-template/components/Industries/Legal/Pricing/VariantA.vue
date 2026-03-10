<template>
  <section class="py-16 md:py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-primary/20 md:border border-primary/20 shadow-2xl bg-secondary overflow-hidden rounded-[2rem]">
      <div v-for="(tier, idx) in tiers" :key="idx" class="p-8 md:p-12 lg:p-16 bg-background hover:bg-primary group transition-all duration-1000 flex flex-col justify-between min-h-[500px] md:min-h-[60vh]">
        <div class="space-y-6 md:space-y-8">
          <h3 class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] text-accent italic leading-none">RETAINER_MODALITY_0{{ idx + 1 }}</h3>
          <p class="text-5xl sm:text-6xl md:text-7xl font-serif italic tracking-tighter leading-none text-primary group-hover:text-background transition-colors italic">{{ tier.price }}</p>
          <div class="space-y-6 md:space-y-8 pt-6 md:pt-8 border-t border-primary/20 group-hover:border-background/30 group-hover:text-background transition-all">
            <p class="text-2xl md:text-3xl font-serif italic">{{ tier.name }}</p>
            <ul class="space-y-3 md:space-y-4">
              <li v-for="f in tier.features" :key="f" class="flex items-center gap-4 text-xs md:text-sm font-medium text-primary/70 group-hover:text-background transition-colors italic">
                <div class="w-1 h-1 bg-accent rounded-full group-hover:scale-150 transition-transform"></div>
                {{ f }}
              </li>
            </ul>
          </div>
        </div>
        <button class="mt-8 md:mt-12 w-full py-4 md:py-6 border-2 border-primary text-primary font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] group-hover:border-accent group-hover:text-accent transition-all">INITIAL_CONSULT</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
