<template>
  <section class="h-screen relative flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 z-0">
      <video 
        autoplay 
        muted 
        loop 
        playsinline
        class="w-full h-full object-cover opacity-40 scale-110"
      >
        <source src="https://player.vimeo.com/external/494252666.sd.mp4?s=727e38484196c8105c3171804f3f1e9c20a8c2c7&profile_id=164&oauth2_token_id=57447761" type="video/mp4">
      </video>
    </div>
    <div class="relative z-10 text-center">
      <AnimatedText class="text-[8vw] font-black uppercase text-white drop-shadow-2xl">
        {{ title }}
      </AnimatedText>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>
