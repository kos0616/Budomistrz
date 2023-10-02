<template>
  <header
    class="sticky top-0 z-20 border-b border-zinc-300 bg-zinc-100 pt-2 shadow-sm dark:border-zinc-600 dark:bg-zinc-800"
  >
    <div class="container mx-auto flex">
      <a :href="url" class="mr-auto block">
        <strong class="flex items-baseline gap-2">
          <img src="@/assets/image/brand.svg" alt="LOGO" height="25px" class="inline-block h-6" />
          <span class="text-lg">{{ BRAND }}</span>
        </strong>
      </a>
      <div class="md:hidden">
        <SwitchDarkMode></SwitchDarkMode>
      </div>
      <nav class="hidden content-center md:flex">
        <div class="home-nav-link">
          <SwitchDarkMode></SwitchDarkMode>
        </div>
        <a :href="`${url}#home`" class="home-nav-link">Home</a>
        <NuxtLink class="home-nav-link" to="projects">Projects</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { SwitchDarkMode } from '#components';
const config = useRuntimeConfig();

const url = config.public.BASE_URL;
const BRAND = config.public.BRAND_NAME;
</script>

<style lang="postcss" scoped>
.brand {
  @apply tracking-wide first-letter:text-xl first-letter:font-bold first-letter:text-primary-400;
}

.home-nav-link {
  @apply mx-1 p-1 transition-colors;

  &:hover {
    @apply text-primary-500 dark:text-white;
  }
  &.router-link-exact-active {
    @apply text-primary-200;
  }
}
</style>
