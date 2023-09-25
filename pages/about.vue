<template>
  <div class="container mx-auto">
    <article class="card">
      <h2 class="card-title">ABOUT US</h2>
      <div class="card-body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, autem ea mollitia quaerat
          ad ut explicabo est id maiores at nemo, tempora impedit molestiae iste doloremque dolorum,
          consequuntur dolores quae.
        </p>
      </div>
      <NuxtLink to="/">INDEX</NuxtLink>
    </article>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'My App',
  meta: [{ name: 'description', content: 'My amazing site.' }],
  bodyAttrs: {
    class: 'test'
  },
  script: [{ innerHTML: "console.log('Hello world')" }]
});
</script>
