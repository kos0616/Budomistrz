<template>
  <div class="container mx-auto py-20">
    <div class="md:flex">
      <article class="max-w-lg shrink-0 bg-zinc-200 px-14 py-20 dark:bg-stone-800 xl:max-w-2xl">
        <h2 class="mb-3">Building with Purpose: Making a Difference Together</h2>
        <header class="description mb-10">
          Our buildings are more than just the fusion of roofs and walls. They are a commitment, a
          mission, and a contribution to human society.
        </header>
        <p class="mb-5 lg:mb-10">
          Our commitment is that for every home we build, we also construct a public building where
          it's needed, improving the quality of life for local residents. To us, clients are not
          just transactional partners; they are collaborators in realizing this mission. We believe
          that by creating better living environments, we can bring about positive change in human
          society, and that's at the core of our building with purpose and mission.
        </p>
        <div class="grid grid-cols-3 gap-4">
          <img
            v-for="(img, i) in imgs"
            :key="`img${i}`"
            :src="img.src"
            :alt="img.alt"
            width="200"
            height="200"
            class="inline-block object-cover"
          />
        </div>
      </article>
      <div class="hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1616512659455-111d3367649f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="school building"
          class="h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const imgs = [
  {
    src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
    alt: 'children studying'
  },
  {
    src: 'https://images.unsplash.com/photo-1588072432733-2b6a4873b187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
    alt: 'children studying'
  },
  {
    src: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80Ｆ',
    alt: 'houses'
  }
];
</script>
