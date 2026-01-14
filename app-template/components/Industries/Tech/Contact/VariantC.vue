<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24 border-t border-white/5">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
      <div class="space-y-16">
        <div class="inline-flex items-center gap-4 px-4 py-2 bg-white/5 rounded-full border border-white/10">
          <div class="w-2 h-2 bg-secondary rounded-full"></div>
          <span class="text-[8px] font-black uppercase tracking-widest text-primary/40">Secure Tunnel Established</span>
        </div>
        <h2 class="text-8xl font-black uppercase leading-none tracking-tighter">{{ title }}</h2>
        <div class="grid grid-cols-2 gap-12 pt-16 border-t border-white/5">
          <div v-for="info in contactInfo" :key="info.label" class="space-y-4">
            <p class="text-[10px] font-black uppercase tracking-widest text-accent">{{ info.label }}</p>
            <p class="text-lg font-black uppercase">{{ info.value }}</p>
          </div>
        </div>
      </div>
      <div class="relative group">
        <div class="aspect-square bg-gradient-to-br from-accent to-secondary rounded-[4rem] p-1 group-hover:scale-105 transition-transform duration-1000 shadow-[0_0_100px_rgba(106,13,173,0.3)]">
          <div class="w-full h-full bg-background rounded-[3.8rem] flex flex-col items-center justify-center p-12 text-center space-y-8">
            <p class="text-xs font-black uppercase tracking-[0.5em] text-primary/20">Ready to scale?</p>
            <p class="text-4xl font-black uppercase leading-tight tracking-tighter italic">Join the <br/><span class="text-secondary">Network</span></p>
            <button class="px-12 py-6 bg-white text-black font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-accent hover:text-primary transition-all">Initialize_Session</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
const contactInfo = [
  { label: 'Latency_Zone', value: 'Global_CDN' },
  { label: 'Secure_Mail', value: 'support@nexus.io' },
  { label: 'Uptime_Stats', value: '99.999%' },
  { label: 'Core_Link', value: '+1 800 NEXUS' }
]
</script>
