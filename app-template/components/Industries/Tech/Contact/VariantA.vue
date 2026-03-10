<template>
  <section class="py-48 bg-background text-primary px-12 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
      <div class="space-y-24">
        <h2 class="text-[10vw] font-black uppercase leading-[0.8] tracking-tighter text-accent">CONNECT <br/><span class="text-secondary">NODE</span></h2>
        <div class="space-y-12">
          <div class="group cursor-pointer">
            <p class="text-[10px] font-black uppercase tracking-[0.5em] text-primary/20 mb-4">Direct Link</p>
            <p class="text-xl md:text-2xl font-black uppercase tracking-tighter hover:text-secondary transition-colors">{{ email }}</p>
          </div>
          <div class="group cursor-pointer">
            <p class="text-[10px] font-black uppercase tracking-[0.5em] text-primary/20 mb-4">Secure Line</p>
            <p class="text-xl md:text-2xl font-black uppercase tracking-tighter hover:text-secondary transition-colors">{{ phone }}</p>
          </div>
        </div>
      </div>
      
      <form class="space-y-8 bg-[#161B22] p-16 rounded-[3rem] border border-white/10" @submit.prevent>
        <div class="grid grid-cols-2 gap-8">
          <div class="space-y-4">
            <label class="text-[10px] font-black uppercase tracking-widest text-accent">User_ID</label>
            <input type="text" placeholder="ROOT" class="w-full bg-black/30 border border-white/5 rounded-xl p-6 text-sm focus:border-secondary outline-none transition-colors" />
          </div>
          <div class="space-y-4">
            <label class="text-[10px] font-black uppercase tracking-widest text-accent">Service_Type</label>
            <input type="text" placeholder="INFRA" class="w-full bg-black/30 border border-white/5 rounded-xl p-6 text-sm focus:border-secondary outline-none transition-colors" />
          </div>
        </div>
        <div class="space-y-4">
          <label class="text-[10px] font-black uppercase tracking-widest text-accent">Command</label>
          <textarea rows="4" placeholder="INITIATE MESSAGE..." class="w-full bg-black/30 border border-white/5 rounded-xl p-6 text-sm focus:border-secondary outline-none transition-colors"></textarea>
        </div>
        <button class="w-full py-8 bg-secondary text-primary font-black uppercase tracking-[0.5em] text-xs rounded-xl shadow-[0_0_50px_rgba(0,128,128,0.2)] hover:bg-accent transition-all">EXECUTE</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
