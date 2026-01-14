<template>
  <section class="py-32 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-32">
        <div class="space-y-16 contact-yoga-info opacity-0">
          <div class="space-y-8">
            <h2 class="text-7xl font-serif text-primary tracking-tighter leading-none">{{ title }}</h2>
            <p class="text-xl text-primary/40 font-light max-w-md italic">Begin your practice with us. Reach out to schedule a private consultation or join a class.</p>
          </div>
          
          <div class="space-y-12">
            <div class="group">
              <div class="text-[9px] font-black uppercase tracking-[0.4em] text-accent mb-4">Email</div>
              <div class="text-3xl font-serif text-primary">{{ email }}</div>
            </div>
            <div class="group">
              <div class="text-[9px] font-black uppercase tracking-[0.4em] text-accent mb-4">Voice</div>
              <div class="text-3xl font-serif text-primary">{{ phone }}</div>
            </div>
          </div>
        </div>
        
        <div class="bg-[#f5f1e9] p-16 rounded-[100px] contact-yoga-form opacity-0">
          <form @submit.prevent class="space-y-8">
            <div class="space-y-2">
              <label class="text-[9px] font-black uppercase tracking-[0.4em] text-primary/30 ml-6">Your Name</label>
              <input type="text" class="w-full bg-white rounded-full px-10 py-5 border-none focus:ring-2 focus:ring-accent transition-all text-sm font-medium">
            </div>
            <div class="space-y-2">
              <label class="text-[9px] font-black uppercase tracking-[0.4em] text-primary/30 ml-6">Email Address</label>
              <input type="email" class="w-full bg-white rounded-full px-10 py-5 border-none focus:ring-2 focus:ring-accent transition-all text-sm font-medium">
            </div>
            <div class="space-y-2">
              <label class="text-[9px] font-black uppercase tracking-[0.4em] text-primary/30 ml-6">Message</label>
              <textarea rows="4" class="w-full bg-white rounded-[40px] px-10 py-8 border-none focus:ring-2 focus:ring-accent transition-all text-sm font-medium"></textarea>
            </div>
            <button class="w-full py-6 rounded-full bg-primary text-white font-bold uppercase tracking-widest text-[10px] hover:bg-accent transition-all duration-700 shadow-xl shadow-primary/10">Submit Inquiry</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

defineProps<{ title: string, email: string, phone: string }>()

onMounted(() => {
  gsap.to('.contact-yoga-info', {
    scrollTrigger: {
      trigger: '.contact-yoga-info',
      start: 'top 80%',
    },
    opacity: 1,
    x: 30,
    duration: 1.5,
    ease: 'power3.out'
  })
  
  gsap.to('.contact-yoga-form', {
    scrollTrigger: {
      trigger: '.contact-yoga-form',
      start: 'top 80%',
    },
    opacity: 1,
    scale: 1,
    duration: 1.5,
    ease: 'power3.out'
  })
})
</script>
