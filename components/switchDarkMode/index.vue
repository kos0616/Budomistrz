<template>
  <label class="relative inline-flex cursor-pointer items-center">
    <input
      v-model="theme"
      type="checkbox"
      class="peer sr-only"
      :true-value="'light'"
      :false-value="'dark'"
    />
    <div
      class="peer-focus:ring-gary-300 dark:border-gray-600 dark:bg-gray-600 dark:peer-focus:ring-gray-200/25 peer me-2 h-6 w-11 rounded-full bg-gray-500 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4"
    ></div>
    <iconSun v-if="theme === 'light'" class="fill-gray-600" />
    <iconMoon v-else class="fill-gray-200"></iconMoon>
    <span class="dark:text-gray-300 ml-3 text-sm font-medium text-gray-900">
      {{ theme }}
    </span>
  </label>
</template>

<script lang="ts" setup>
import darkMode from '~/composables/darkMode';
import iconSun from './iconSun.vue';
import iconMoon from './iconMoon.vue';
const { init, theme } = darkMode();
onMounted(() => {
  init();
});
</script>
