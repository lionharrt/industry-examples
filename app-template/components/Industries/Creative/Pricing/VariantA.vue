<template>
  <section class="py-16 md:py-32 bg-background text-primary px-6 md:px-24">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      <div v-for="(tier, idx) in tiers" :key="idx" 
        class="p-8 md:p-12 bg-white text-black border-4 md:border-8 border-black shadow-[8px_8px_0_0_#FF5F1F] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden"
      >
        <!-- Decorative Background Number -->
        <div class="absolute -right-4 -top-4 text-[15vw] md:text-[10vw] font-black opacity-5 group-hover:opacity-10 transition-opacity leading-none select-none">
          0{{ idx + 1 }}
        </div>

        <div class="space-y-6 md:space-y-10 relative z-10">
          <h3 class="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none italic">{{ tier.name }}</h3>
          <ul class="space-y-3 md:space-y-4 pt-6 border-t-2 border-black/10">
            <li v-for="f in tier.features" :key="f" class="flex items-center gap-3">
              <div class="w-2 h-2 bg-[#B0BF1A] rounded-full"></div>
              <span class="text-[10px] md:text-xs font-bold uppercase tracking-widest">{{ f }}</span>
            </li>
          </ul>
        </div>

        <div class="mt-12 md:mt-24 relative z-10">
          <p class="text-6xl md:text-7xl font-black mb-6 md:mb-8 tracking-tighter leading-none">{{ tier.price }}</p>
          <button class="w-full py-4 md:py-5 bg-black text-white font-black uppercase tracking-widest text-xs md:text-sm hover:bg-[#FF5F1F] transition-colors border-2 md:border-4 border-black">
            START_PROJECT
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>()
</script>
