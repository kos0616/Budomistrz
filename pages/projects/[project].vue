<template>
  <div class="bg-zinc-300/75 p-10 dark:bg-zinc-800/75">
    <Breadcrumb v-model="breadcrumbs" class="mb-3" />
    <article v-skeleton="loading" class="container mx-auto">
      <h1 v-skeleton-item class="mb-4">
        {{ info?.title }}
      </h1>
      <p v-skeleton-item class="mb-16 max-w-md">{{ info?.description }}</p>
      <figure class="grid grid-cols-2 gap-2">
        <div v-skeleton-item v-for="(img, i) in info?.imgs" :key="`img${i}`" class="aspect-square">
          <img :src="img" class="h-full w-full object-cover" />
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

const breadcrumbs = [
  { name: 'Home', value: '/' },
  { name: 'Projects', value: '/projects' }
];
const info = ref<typeInfo>({ description: ' ' } as any);

const loading = ref(true);

const getArticle = async () => {
  await nextTick();
  const { data } = await useFetch(`https://jsonplaceholder.typicode.com/posts/${project}`);

  const res = data.value as any;
  info.value.description = res?.body;
};

const getInfo = async () => {
  const { data: res } = await useFetch('/api/projects/info', {
    query: { id: project }
  });
  if (res && res.value !== null && res.value) {
    info.value = res.value;
  }
};

onMounted(async () => {
  await getInfo();
  await getArticle();
});
</script>
