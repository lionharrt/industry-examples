<template>
  <section class="py-16 md:py-24 bg-[#f8f9fa] overflow-hidden px-6">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 lg:items-center">
        <div class="lg:col-span-1 space-y-6 md:space-y-8 text-center lg:text-left">
          <h2 class="text-4xl md:text-5xl font-serif text-primary leading-tight">Expert Hands, Caring Hearts.</h2>
          <p class="text-primary/60 text-base md:text-lg font-light">Our multi-disciplinary team combines decades of experience with a passion for human movement.</p>
          <button class="bg-primary text-white px-8 py-4 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all">Meet Full Team</button>
        </div>
        
        <div class="lg:col-span-2 flex flex-col sm:flex-row gap-8 md:gap-12">
          <div v-for="(member, index) in team" :key="index" class="flex-1 group">
            <div class="relative mb-6 md:mb-8">
              <div class="aspect-[3/4] rounded-3xl md:rounded-[60px] overflow-hidden">
                <img :src="member.image" :alt="member.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
              </div>
              <div class="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-24 md:w-32 h-24 md:h-32 bg-accent/20 rounded-full blur-2xl group-hover:bg-accent/40 transition-all"></div>
            </div>
            <div class="text-center">
              <h3 class="text-xl md:text-2xl font-serif text-primary">{{ member.name }}</h3>
              <p class="text-primary/40 uppercase tracking-widest text-[9px] md:text-[10px] mt-2">{{ member.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ team: Array<{ name: string, role: string, image: string }> }>()
</script>
