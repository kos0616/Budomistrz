<template>
  <ol class="flex gap-1">
    <li
      v-for="(crumb, i) in modelValue"
      :key="`crumb${i}`"
      class="after:px-2 after:content-['/'] last:after:content-none"
    >
      <NuxtLink :to="crumb.value" :title="crumb.name">
        {{ crumb.name }}
      </NuxtLink>
    </li>
  </ol>
</template>

<script lang="ts" setup>
// import { RouteLocationMatched } from '#vue-router';
import { PropType } from 'nuxt/dist/app/compat/capi';

defineProps({
  modelValue: {
    type: Array as PropType<{ name: string; value: string }[]>,
    default: () => []
  }
});

// const route = useRoute();

// const breadcrumbs = ref<RouteLocationMatched[]>([]);

// watch(
//   () => route.matched,
//   (newV, old) => {
//     breadcrumbs.value = newV.map((item) => {
//       return item;
//     });
//   },
//   { immediate: true }
// );
</script>
