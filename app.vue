<template>
  <AddToHome />
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import initNetworkStatus from '~/composables/initNetworkStatus';
initNetworkStatus();
</script>
