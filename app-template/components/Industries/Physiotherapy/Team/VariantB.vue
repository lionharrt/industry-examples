<template>
  <section class="py-24 bg-[#f8f9fa] overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-3 gap-16 items-center">
        <div class="lg:col-span-1 space-y-8">
          <h2 class="text-5xl font-serif text-primary leading-tight">Expert Hands, Caring Hearts.</h2>
          <p class="text-primary/60 text-lg">Our multi-disciplinary team combines decades of experience with a passion for human movement.</p>
          <button class="bg-primary text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all">Meet Full Team</button>
        </div>
        
        <div class="lg:col-span-2 flex flex-col md:flex-row gap-12">
          <div v-for="(member, index) in team" :key="index" class="flex-1 group">
            <div class="relative mb-8">
              <div class="aspect-[3/4] rounded-[60px] overflow-hidden">
                <img :src="member.image" :alt="member.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
              </div>
              <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl group-hover:bg-accent/40 transition-all"></div>
            </div>
            <div class="text-center">
              <h3 class="text-2xl font-serif text-primary">{{ member.name }}</h3>
              <p class="text-primary/40 uppercase tracking-widest text-[10px] mt-2">{{ member.role }}</p>
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
