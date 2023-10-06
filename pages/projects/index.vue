<template>
  <div>
    <div class="container mx-auto">
      <Breadcrumb v-model="breadcrumbs" class="my-3" />
      <div class="max-w-lg bg-zinc-300/75 p-10 dark:bg-zinc-800/75">
        <h1>PROJECTS</h1>
        <p class="description">Building Dreams, Creating the Future</p>
        <p>
          Explore Budomistrz's meticulously planned and uniquely designed projects. With a focus on
          Nordic-inspired simplicity, industrial aesthetics, and natural elements, we've created
          numerous stunning residential and cultural buildings for our clients. On this page, you'll
          discover our proud portfolio showcasing our commitment to innovation, sustainability, and
          design. Feel free to browse our collection of works and learn how we bring distinctive
          architectural concepts and values to life in our constructions.
        </p>
      </div>
    </div>
    <hr class="mb-10" />
    <div class="container mx-auto">
      <article
        v-for="(p, i) in list"
        :key="`project${i}`"
        class="mb-5 flex flex-col items-center gap-5 bg-zinc-300/75 py-5 pl-10 dark:bg-zinc-800/75 md:flex-row md:py-0 portrait:pr-5"
      >
        <div class="max-w-md shrink-0 md:py-16">
          <h2 class="mb-4">
            {{ p.title }}
          </h2>
          <p class="mb-4">{{ p.description }}</p>
          <NuxtLink :to="`/projects/${p.id}`" class="bg-primary-400 px-3 py-2 text-white">
            VIEW
          </NuxtLink>
        </div>

        <swiper
          :slides-per-view="2"
          :space-between="5"
          :auto-height="false"
          :loop="true"
          :lazy="true"
          :navigation="true"
          :autoplay="{ delay: 1000, disableOnInteraction: false }"
          :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff'
          }"
          class="w-full"
        >
          <swiper-slide v-for="(slide, i) in p.imgs" :key="`slide${i}`">
            <img :src="slide" width="500" height="500" class="aspect-square object-cover" />
          </swiper-slide>
        </swiper>
      </article>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Breadcrumb } from '#components';

const breadcrumbs = ref([
  { name: 'Home', value: '/' },
  { name: 'Projects', value: '/projects' }
]);

const { data } = await useFetch('/api/projects/lists');
const list = data.value?.list;

useSeoMeta({ title: 'PROJECTS' });
</script>
