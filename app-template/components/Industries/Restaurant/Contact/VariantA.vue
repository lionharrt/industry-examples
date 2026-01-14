<template>
  <section class="py-48 bg-background text-primary px-6 md:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-48">
      <div class="space-y-16">
        <h2 class="text-8xl font-serif italic text-accent leading-none">{{ title }}</h2>
        <div class="space-y-12">
          <div class="group cursor-pointer">
            <p class="text-secondary text-[10px] font-black uppercase tracking-[0.5em] mb-4">Inquiries</p>
            <p class="text-4xl font-serif group-hover:italic transition-all">{{ email }}</p>
          </div>
          <div class="group cursor-pointer">
            <p class="text-secondary text-[10px] font-black uppercase tracking-[0.5em] mb-4">Location</p>
            <p class="text-4xl font-serif group-hover:italic transition-all">Manhattan, NY</p>
          </div>
        </div>
      </div>
      
      <form class="space-y-12 bg-white/[0.02] p-16 rounded-[4rem] border border-white/5">
        <div class="grid grid-cols-2 gap-12">
          <input type="text" placeholder="GUEST NAME" class="bg-transparent border-b border-white/10 py-6 text-xs uppercase tracking-[0.2em] focus:border-accent outline-none transition-colors" />
          <input type="text" placeholder="PARTY SIZE" class="bg-transparent border-b border-white/10 py-6 text-xs uppercase tracking-[0.2em] focus:border-accent outline-none transition-colors" />
        </div>
        <input type="email" placeholder="EMAIL ADDRESS" class="w-full bg-transparent border-b border-white/10 py-6 text-xs uppercase tracking-[0.2em] focus:border-accent outline-none transition-colors" />
        <textarea placeholder="SPECIAL REQUIREMENTS" rows="4" class="w-full bg-transparent border-b border-white/10 py-6 text-xs uppercase tracking-[0.2em] focus:border-accent outline-none transition-colors"></textarea>
        <button class="w-full py-8 bg-accent text-black font-black uppercase tracking-[0.4em] text-[10px] rounded-full hover:bg-white transition-all">Submit Request</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
