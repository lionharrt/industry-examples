<template>
  <section class="py-16 md:py-48 bg-white text-[#0A0A0A] px-6 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12 relative z-10">
      <div
        v-for="(tier, idx) in tiers"
        :key="idx"
        class="group relative flex flex-col md:flex-row items-stretch justify-between bg-white border-8 md:border-[20px] border-[#0A0A0A] hover:bg-[#E60000] hover:border-black hover:text-black transition-all duration-700 shadow-2xl hover:translate-x-4"
      >
        <div
          class="p-8 md:p-16 space-y-6 md:space-y-8 flex-1 border-b-8 md:border-b-0 md:border-r-[12px] border-black text-center md:text-left"
        >
          <h3
            class="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] opacity-40 italic"
          >
            CHASSIS_CONFIG_0{{ idx + 1 }}
          </h3>
          <p
            class="text-4xl sm:text-6xl md:text-[6vw] font-black italic uppercase leading-none mb-4"
          >
            {{ tier.name }}
          </p>
          <div
            class="flex flex-wrap gap-4 pt-8 justify-center md:justify-start"
          >
            <span
              v-for="f in tier.features"
              :key="f"
              class="bg-black text-white px-3 py-1 text-xs md:text-xl font-black italic uppercase border-2 border-black group-hover:bg-white group-hover:text-black transition-colors"
              >{{ f }}</span
            >
          </div>
        </div>
        <div
          class="p-8 md:p-16 flex flex-col justify-center items-center md:items-end bg-black text-white group-hover:bg-[#E60000] group-hover:text-black transition-colors min-w-[30%] md:min-w-[400px]"
        >
          <p
            class="text-4xl sm:text-6xl md:text-[5vw] font-black italic uppercase leading-none tracking-tighter mb-8 md:mb-12 drop-shadow-2xl"
          >
            {{ tier.price }}
          </p>
          <button
            class="w-full md:w-auto px-12 md:px-16 py-6 md:py-8 bg-[#E60000] text-black group-hover:bg-white group-hover:text-black font-black uppercase italic tracking-widest text-lg md:text-xl transition-all shadow-2xl skew-x-[-15deg] border-4 border-black"
          >
            <span class="inline-block skew-x-[15deg]">START_BUILD</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ tiers: any[] }>();
</script>
