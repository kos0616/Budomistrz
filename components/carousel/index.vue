<template>
  <swiper
    :slides-per-view="3"
    :space-between="20"
    :auto-height="false"
    :loop="true"
    :lazy="true"
    :navigation="true"
    :autoplay="{ delay: 1000, disableOnInteraction: false }"
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff'
    }"
  >
    <swiper-slide v-for="(slide, i) in links" :key="`slide${i}`">
      <NuxtLink :to="slide.to" class="block">
        <img
          :src="slide.href"
          :alt="slide.title"
          width="500"
          height="500"
          class="aspect-square object-cover"
        />
      </NuxtLink>
    </swiper-slide>
  </swiper>
  <!-- <Swiper
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: true
    }"
  >
    <SwiperSlide v-for="(slide, i) in 5" :key="`slide${i}`">
      <div class="bg-slate-200 py-3 text-center">{{ slide }}</div>
      <NuxtLink :to="slide.to">
        <img :src="slide.href" :alt="slide.title" class="aspect-square object-cover" />
      </NuxtLink>
    </SwiperSlide>
  </Swiper> -->
</template>

<script lang="ts" setup>
const links = [
  {
    to: '/project/1',
    href: (await import('@/assets/image/aaron-huber-s95oB2n9jng-unsplash.jpg')).default,
    title: 'Project 1'
  },
  {
    to: '/project/2',
    href: (await import('@/assets/image/andrea-davis-7Wg_9Dq17_U-unsplash.jpg')).default,
    title: 'Project 2'
  },
  {
    to: '/project/3',
    href: (await import('@/assets/image/andrea-davis-DKiuGitdNyY-unsplash.jpg')).default,
    title: 'Project 3'
  },
  {
    to: '/project/4',
    href: (await import('@/assets/image/bernard-hermant-CLKGGwIBTaY-unsplash.jpg')).default,
    title: 'Project 4'
  },
  {
    to: '/project/5',
    href: (await import('@/assets/image/toa-heftiba-FV3GConVSss-unsplash.jpg')).default,
    title: 'Project 5'
  },
  {
    to: '/project/6',
    href: (await import('@/assets/image/wiktor-karkocha-WA2uSCbTXkI-unsplash (1).jpg')).default,
    title: 'Project 6'
  }
];
</script>
