<template>
  <div class="bg-zinc-300/75 p-10 dark:bg-zinc-800/75">
    <article
      v-skeleton="loading"
      itemscope
      itemtype="https://schema.org/CreativeWork"
      class="container mx-auto"
    >
      <Breadcrumb v-model="breadcrumbs" class="mb-3" />
      <h1 v-skeleton-item itemprop="name" class="mb-4">
        {{ info?.title }}
      </h1>
      <p v-skeleton-item itemprop="description" class="mb-16 max-w-md">{{ info?.description }}</p>
      <p>Builder: <span itemprop="creator">Budomistrz</span></p>
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

const loading = ref(false);

const setSeo = () => {
  useJsonld({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'projects',
        item: 'https://kos0616.github.io/Budomistrz/projects'
      }
    ]
  });
};

const { data: info } = await useFetch<typeInfo>('/api/projects/info', {
  query: { id: project }
});

setSeo();

useSeoMeta({ title: info.value?.title });
</script>
