<template>
  <section class="py-48 bg-[#1A1A1A] text-white px-6 md:px-24">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <div class="relative h-[80vh] group">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200"
            alt="Chef at Work"
            :speed="0.1"
          />
          <div
            class="absolute -bottom-12 -right-12 w-64 aspect-square bg-[#A0522D] p-8 hidden md:block opacity-0 translate-y-20 transition-all duration-1000 group-hover:opacity-100 group-hover:translate-y-0"
          >
            <p
              class="text-[10px] font-bold uppercase tracking-[0.3em] leading-loose"
            >
              "Fire is our primary ingredient. It transforms, refines, and
              reveals."
            </p>
          </div>
        </div>
        <div class="space-y-12">
          <span
            class="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.5em] block"
            >Our Story</span
          >
          <AnimatedText class="text-6xl font-serif leading-tight">
            {{ title }}
          </AnimatedText>
          <p
            class="text-white/60 text-xl leading-relaxed font-light first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-[#D4AF37]"
          >
            {{ content }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  content: string;
}>();
</script>
