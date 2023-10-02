<template>
  <swiper
    :slides-per-view="perView"
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
</template>

<script lang="ts" setup>
const perView = ref(4);
const initPerView = () => {
  if (window.screen.width < 1400) perView.value = 3;
};

onMounted(() => {
  initPerView();
});

// const width = process.client ? window.screen.width : 1980;

const links = [
  {
    to: '/projects/1',
    href: (await import('@/assets/image/aaron-huber-s95oB2n9jng-unsplash.jpg')).default,
    title: 'Project 1'
  },
  {
    to: '/projects/2',
    href: (await import('@/assets/image/andrea-davis-7Wg_9Dq17_U-unsplash.jpg')).default,
    title: 'Project 2'
  },
  {
    to: '/projects/3',
    href: (await import('@/assets/image/andrea-davis-DKiuGitdNyY-unsplash.jpg')).default,
    title: 'Project 3'
  },
  {
    to: '/projects/4',
    href: (await import('@/assets/image/bernard-hermant-CLKGGwIBTaY-unsplash.jpg')).default,
    title: 'Project 4'
  },
  {
    to: '/projects/5',
    href: (await import('@/assets/image/toa-heftiba-FV3GConVSss-unsplash.jpg')).default,
    title: 'Project 5'
  },
  {
    to: '/projects/6',
    href: (await import('@/assets/image/wiktor-karkocha-WA2uSCbTXkI-unsplash (1).jpg')).default,
    title: 'Project 6'
  }
];
</script>
