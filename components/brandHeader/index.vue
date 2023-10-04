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

      <div class="absolute right-0 top-0 z-50 md:static">
        <button @click="open = !open" class="relative h-8 w-8 focus:outline-none md:hidden">
          <span class="sr-only">Open main menu</span>
          <div
            class="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform"
          >
            <span
              aria-hidden="true"
              class="absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out"
              :class="{ 'rotate-45': open, ' -translate-y-1.5': !open }"
            ></span>
            <span
              aria-hidden="true"
              class="absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out"
              :class="{ 'opacity-0': open }"
            ></span>
            <span
              aria-hidden="true"
              class="absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out"
              :class="{ '-rotate-45': open, ' translate-y-1.5': !open }"
            ></span>
          </div>
        </button>
      </div>

      <nav
        :class="open ? 'translate-x-0' : 'translate-x-full'"
        class="fixed bottom-0 right-0 top-0 flex w-full max-w-[150px] flex-col content-center gap-3 bg-zinc-200/95 pt-10 backdrop-blur-sm transition-all dark:bg-zinc-900/95 md:static md:w-auto md:translate-x-0 md:flex-row md:bg-transparent dark:md:bg-transparent md:pt-0"
      >
        <NuxtLink @click="open = false" class="home-nav-link px-3 md:hidden" to="/">
          Home
        </NuxtLink>
        <NuxtLink @click="open = false" class="home-nav-link px-3" to="projects">
          Projects
        </NuxtLink>
        <div class="home-nav-link px-3">
          <SwitchDarkMode></SwitchDarkMode>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { SwitchDarkMode } from '#components';
const config = useRuntimeConfig();

const url = config.public.BASE_URL;
const BRAND = config.public.BRAND_NAME;

const open = ref(false);
const hideWrap = ref(true);
const REF_DRAWER_WRAP = ref<HTMLDivElement | null>(null);
const initDrawerEnd = () => {
  hideWrap.value = true;
  console.log('end');
};
const initDrawerStart = () => {
  hideWrap.value = false;
  console.log('start');
};
onMounted(() => {
  REF_DRAWER_WRAP.value?.addEventListener('animationend', initDrawerEnd);
  // REF_DRAWER_WRAP.value?.addEventListener('transitionstart', initDrawerStart);
});

onUnmounted(() => {
  // REF_DRAWER_WRAP.value?.removeEventListener('transitionend', initDrawerEnd);
  // REF_DRAWER_WRAP.value?.removeEventListener('transitionstart', initDrawerStart);
});
</script>

<style lang="postcss" scoped>
.brand {
  @apply tracking-wide first-letter:text-xl first-letter:font-bold first-letter:text-primary-400;
}

.home-nav-link {
  @apply transition-colors md:mx-1 md:p-1;

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

.animation.active {
  animation-duration: 2s;
  animation-name: slidein;
  animation-iteration-count: 2;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
</style>
