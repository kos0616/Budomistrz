<template>
  <div class="bg-zinc-300/75 p-10 dark:bg-zinc-800/75">
    <Breadcrumb v-model="breadcrumbs" class="mb-3" />
    <article
      v-skeleton="loading"
      itemtype="https://schema.org/CreativeWork"
      class="container mx-auto"
    >
      <h1 v-skeleton-item itemprop="name" class="mb-4">
        {{ info?.title }}
      </h1>
      <p v-skeleton-item itemprop="description" class="mb-16 max-w-md">{{ info?.description }}</p>
      <p itemprop="creator">Builder: Budomistrz</p>
      <figure class="grid grid-cols-2 gap-2">
        <div v-skeleton-item v-for="(img, i) in info?.imgs" :key="`img${i}`" class="aspect-square">
          <img :src="img" itemprop="image" class="h-full w-full object-cover" />
        </div>
      </figure>
    </article>
  </div>
</template>

<script lang="ts" setup>
import { Breadcrumb } from '#components';
const route = useRoute();
const { project } = route.params;
import { typeInfo } from '~/server/api/projects/info';

const breadcrumbs = ref([
  { name: 'Home', value: '/' },
  { name: 'Projects', value: '/projects' }
]);
const info = ref<typeInfo>({ description: ' ' } as any);

const loading = ref(true);

useJsonld({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'projects',
      item: '/projects'
    }
  ]
});

const getArticle = async () => {
  const { data } = await useFetch(`https://jsonplaceholder.typicode.com/posts/${project}`);
  const res = data.value as any;
  info.value.description = res?.body;
  loading.value = false;
};

const getInfo = async () => {
  const res = await $fetch('/api/projects/info', {
    query: { id: project }
  });
  if (res) {
    info.value = res;
  }
};

await getInfo();
await getArticle();
</script>
