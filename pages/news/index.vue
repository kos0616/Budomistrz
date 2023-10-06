<template>
  <article class="container mx-auto">
    <Breadcrumb v-model="breadcrumbs" class="my-3" />
    <h1 class="mb-10 border-b pb-3">News</h1>
    <!-- <ClientOnly> -->
    <div class="mx-auto mb-10 flex max-w-xl flex-col gap-2 bg-zinc-300/75 p-5 dark:bg-zinc-800/75">
      <section
        v-for="(p, i) in list"
        :key="`news_${p.id}`"
        class="border-b border-zinc-300/25 py-3 last:border-0"
      >
        <h2>
          {{ p.title }}
        </h2>
        <p class="truncate">{{ p.body }}</p>
        <div class="text-right">
          <NuxtLink
            :to="`/news/${p.id}`"
            :title="p.title"
            class="text-primary-400 hover:text-primary-500 hover:underline"
          >
            MORE
          </NuxtLink>
        </div>
      </section>
    </div>
    <!-- </ClientOnly> -->
  </article>
</template>

<script lang="ts" setup>
import { Breadcrumb } from '#components';

const breadcrumbs = ref([
  { name: 'Home', value: '/' },
  { name: 'News', value: '/news' }
]);

type info = { body: string; id: number; title: string; userId: number };

const { data: list } = await useFetch<info[]>('https://jsonplaceholder.typicode.com/posts');
</script>
