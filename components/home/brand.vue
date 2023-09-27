<template>
  <div class="container relative mx-auto dark:bg-stone-800">
    <img
      src="https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1128&q=80"
      alt="building"
      class="object-cover portrait:aspect-square"
    />
    <div
      class="right-10 max-w-xl bg-slate-100/75 p-10 backdrop-blur-sm dark:bg-stone-900/75 sm:absolute portrait:bottom-10 landscape:top-1/2"
    >
      <article itemscope itemtype="https://schema.org/Brand" class="sticky top-0">
        <h1 itemprop="slogan">Budomistrz: The Art of Nordic Architecture</h1>
        <p class="description mb-5" itemprop="description">
          Eco-Friendly Design, Sustainable Construction, Making Dreams Come True
        </p>
        <p class="mb-8" itemprop="disambiguatingDescription">
          Budomistrz, rooted in Nordic spirit, blends eco-friendly, design, and sustainability,
          crafting unique architecture for you.
        </p>
        <div class="text-end">
          <NuxtLink
            to="projects"
            title="VIEW PROJECTS"
            class="group bg-primary-400 p-2 px-4 text-white"
            itemprop="url"
          >
            VIEW PROJECTS
            <svg
              class="mx-3 inline fill-current transition-transform group-hover:translate-x-2"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
              />
            </svg>
          </NuxtLink>
        </div>
      </article>
    </div>
  </div>
</template>
