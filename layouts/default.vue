<template>
  <div class="flex min-h-[100dvh] flex-col">
    <BrandHeader></BrandHeader>

    <main class="grow">
      <slot></slot>
    </main>

    <div class="border-b border-zinc-600 bg-slate-200 pb-5 dark:bg-zinc-800">
      <FooterLinks></FooterLinks>
    </div>
    <footer class="bg-slate-200 py-10 text-center dark:bg-zinc-800">
      Copyright © 2023 {{ BRAND }}. All rights reserved.
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { BrandHeader, FooterLinks } from '#components';
const config = useRuntimeConfig();

const BRAND = config.public.BRAND_NAME;
</script>
