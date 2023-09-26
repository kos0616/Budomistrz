<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import structuredData from '@/assets/structuredData.json';
import { useHead } from '#imports';
useHead({ script: [{ type: 'application/ld+json', innerHTML: structuredData }] });
</script>
