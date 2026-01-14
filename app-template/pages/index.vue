<template>
  <div class="landing-page min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
    <h1 class="text-6xl font-bold mb-12 tracking-tighter">INDUSTRY EXAMPLES</h1>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl w-full">
      <NuxtLink v-for="industry in industries" :key="industry.path" :to="industry.path" 
        class="group relative aspect-video bg-neutral-900 border border-neutral-800 flex items-center justify-center overflow-hidden transition-all hover:border-white">
        <span class="z-10 text-sm font-bold uppercase tracking-widest group-hover:scale-110 transition-transform">{{ industry.name }}</span>
        <div class="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const industries = [
  { name: 'Restaurant', path: '/restaurant' },
  { name: 'Real Estate', path: '/realestate' },
  { name: 'Fashion', path: '/fashion' },
  { name: 'Architecture', path: '/architecture' },
  { name: 'Fitness', path: '/fitness' },
  { name: 'Legal', path: '/legal' },
  { name: 'Tech', path: '/tech' },
  { name: 'Hotel', path: '/hotel' },
  { name: 'Automotive', path: '/automotive' },
  { name: 'Creative', path: '/creative' },
  { name: 'Physiotherapy', path: '/physiotherapy' },
  { name: 'Yoga', path: '/yoga' },
]
</script>
