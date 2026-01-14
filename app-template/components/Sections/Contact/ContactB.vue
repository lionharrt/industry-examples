<template>
  <section class="py-32 bg-background px-12">
    <div class="max-w-4xl mx-auto grid grid-cols-2 gap-24">
      <div>
        <h2 class="text-6xl font-black uppercase leading-none mb-12">{{ title }}</h2>
        <div class="space-y-8">
          <div>
            <p class="text-xs font-black uppercase tracking-widest text-primary/40 mb-2">Email</p>
            <p class="text-2xl font-bold">{{ email }}</p>
          </div>
          <div>
            <p class="text-xs font-black uppercase tracking-widest text-primary/40 mb-2">Phone</p>
            <p class="text-2xl font-bold">{{ phone }}</p>
          </div>
        </div>
      </div>
      <form class="space-y-8">
        <input type="text" placeholder="NAME" class="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors" />
        <input type="email" placeholder="EMAIL" class="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors" />
        <textarea placeholder="MESSAGE" rows="4" class="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors"></textarea>
        <button class="px-12 py-4 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-accent transition-colors">Send</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string, email: string, phone: string }>()
</script>
