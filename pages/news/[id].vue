<template>
  <div class="p-10">
    <div class="container mx-auto">
      <Breadcrumb v-model="breadcrumbs" class="mb-3" />
      <div v-if="error">
        <h1 class="mb-4">We got something wrong.</h1>
        <p class="mb-5">{{ error }}</p>

        <NuxtLink to="/" title="Back home" class="border border-current px-2 py-1 text-primary-400">
          Back to Home
        </NuxtLink>
      </div>
      <article
        v-else
        v-skeleton="pending"
        itemscope
        itemtype="https://schema.org/Article"
        class="bg-zinc-300/75 p-5 dark:bg-zinc-800/75"
      >
        <h1 v-skeleton-item itemprop="headline" class="mb-4">
          {{ info?.title }}
        </h1>

        <div
          itemtype="https://schema.org/Person"
          itemprop="author"
          itemscope
          class="flex items-center gap-2 py-2"
        >
          <img
            src="https://api.lorem.space/image/face?w=100"
            itemprop="image"
            :alt="`photo of ${author?.name}`"
            width="50"
            height="50"
            class="aspect-square rounded-full object-cover"
          />
          <div>
            Author:
            <a itemprop="url" :href="`https://jsonplaceholder.typicode.com/users/${info?.userId}`">
              <span itemprop="name">{{ author?.name }}</span>
            </a>
            <a
              itemprop="email"
              :href="`mailto:${author?.email}`"
              class="mx-2 inline-block fill-current align-middle"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                />
              </svg>
            </a>
          </div>
        </div>

        <figure v-show="photos.length" class="mb-10">
          <img
            itemprop="image"
            height="450"
            width="450"
            :src="photos[0].download_url"
            class="aspect-video object-cover"
            alt="image of news"
          />
        </figure>

        <p v-skeleton-item itemprop="articleBody" class="mb-16">{{ info?.body }}</p>

        <ol class="flex flex-wrap gap-2">
          <li v-for="(img, i) in photos" :key="`img_${i}`">
            <a :href="img.download_url" target="_blank">
              <img
                itemprop="image"
                loading="lazy"
                width="200"
                height="200"
                :src="img.download_url"
                :alt="`photo by ${img.author}`"
              />
            </a>
          </li>
        </ol>
      </article>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Breadcrumb } from '#components';

const breadcrumbs = ref([
  { name: 'Home', value: '/' },
  { name: 'News', value: '/news' }
]);

const setSeo = () => {
  useJsonld([
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'news',
          item: 'https://kos0616.github.io/Budomistrz/news'
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: info.value.title,
      articleBody: info.value.body,
      image: (photos.value || []).map((o) => o.download_url),
      author: {
        '@type': 'Person',
        name: author.value?.name,
        url: `https://jsonplaceholder.typicode.com/users/${info.value?.userId}`,
        email: `mailto:${author.value?.email}`,
        image: 'http://placebeard.it/50/notag'
      }
    }
  ]);
};

const id = useRoute().params.id;

const {
  data: info,
  pending,
  error
} = await useFetch<article>(`https://jsonplaceholder.typicode.com/posts/${id}`, {
  pick: ['userId', 'body', 'id', 'title'],
  default: () => ({}) as article
});
const { data: author } = await useFetch<author>(
  `https://jsonplaceholder.typicode.com/users/${info.value?.userId}`,
  { pick: ['name', 'email'] }
);

const { data: photos } = await useFetch<photo[]>(`https://picsum.photos/v2/list?limit=5`, {
  default: () => []
});

setSeo();

useSeoMeta({
  title: info.value.title,
  ogTitle: info.value.title,
  description: info.value.body,
  ogDescription: info.value.body,
  ogImage: photos.value[0].download_url || undefined
});
</script>
