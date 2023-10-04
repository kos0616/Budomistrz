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
      <nav class="hidden content-center md:flex">
        <NuxtLink class="home-nav-link" to="projects">Projects</NuxtLink>
        <div class="home-nav-link">
          <SwitchDarkMode></SwitchDarkMode>
        </div>
      </nav>

      <!-- md:hidden -->
      <button popovertarget="my-popover" title="Open menu" class="fill-current px-2">
        <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 448 512">
          <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
          />
        </svg>
      </button>
      <div
        popover
        id="my-popover"
        class="m-0 h-full bg-zinc-100 p-0 pt-12 text-lg text-current dark:bg-zinc-800"
      >
        <button
          popovertarget="my-popover"
          title="Close menu"
          class="absolute right-0 top-0 fill-current px-4 py-3 text-2xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            />
          </svg>
        </button>
        <nav class="flex flex-col gap-2">
          <NuxtLink class="home-nav-link mobile" to="/">Home</NuxtLink>
          <NuxtLink class="home-nav-link mobile" to="projects">Projects</NuxtLink>
          <div class="home-nav-link mobile">
            <SwitchDarkMode></SwitchDarkMode>
          </div>
        </nav>
      </div>
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

  &.mobile {
    @apply px-3;
  }

  &:hover {
    @apply text-primary-500 dark:text-white;
  }
  &.router-link-exact-active {
    @apply text-primary-200;
  }
}
</style>

<style lang="scss" scoped>
#my-popover {
  &:popover-open {
    inset: unset;
    min-width: 200px;
    @apply fixed bottom-0 right-0 top-0;
  }

  &::backdrop {
    backdrop-filter: blur(2px);
    background-color: #00000033;
  }

  &[popover] {
    animation: transIn 0.3s ease;
  }
}

@keyframes transIn {
  from {
    translate: 100%;
  }
  to {
    translate: 0%;
  }
}
</style>
