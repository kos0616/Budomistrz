<template>
  <div
    class="bg-cover bg-center"
    style="
      background-image: url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80);
    "
  >
    <article class="container mx-auto py-10">
      <h2 class="mb-10">
        <span class="bg-zinc-200 px-2 py-1 dark:bg-stone-800"> The Advantages of Budomistrz </span>
      </h2>
      <div class="grid sm:grid-cols-3 sm:gap-4">
        <section
          v-for="(adv, i) in list"
          :key="`adv_${i}`"
          class="border-b border-zinc-200/75 bg-zinc-200/75 px-4 py-3 backdrop-blur-sm last-of-type:border-0 dark:border-zinc-900/75 dark:bg-stone-900/75 sm:border sm:py-6 sm:dark:border-zinc-700"
        >
          <h3>{{ adv.title }}</h3>
          <p>{{ adv.content }}</p>
        </section>
      </div>
    </article>
  </div>
</template>

<script lang="ts" setup>
const list = [
  {
    title: 'The Beauty of Comfort',
    content:
      'Budomistrz architecture blends the Nordic spirit, bringing forth architecture that soothes the soul.'
  },
  {
    title: 'Local Artisans',
    content: 'Local skilled craftsmen, upholding the tradition of craftsmanship.'
  },
  {
    title: 'Sustainable Materials',
    content: "Sustainable construction, preserving our Earth's habitat."
  },
  {
    title: 'Weather-Resilient Practicality',
    content: 'Confronting diverse climate challenges, solid and durable.'
  },
  { title: 'Quality Assurance', content: 'Uncompromising quality, always delivered as promised.' },
  {
    title: 'Award-Winning Design',
    content: 'Recognized repeatedly by the design community, showcasing unmatched craftsmanship'
  }
];
</script>
