<template>
  <div>
    <article class="container mx-auto">
      <h2 class="mb-5">Global Acclaim: What Experts Say</h2>
      <div class="grid gap-4 md:grid-cols-4">
        <figure
          v-for="(user, i) in list"
          :key="`item${i}`"
          class="flex gap-2 rounded bg-zinc-300 p-4 dark:bg-zinc-700 md:flex-col"
        >
          <img
            :src="user.avatar"
            :alt="user.name"
            class="h-20 w-20 shrink-0 rounded-full object-cover md:mx-auto"
          />
          <figcaption class="flex grow flex-col sm:py-3">
            <blockquote class="mb-3 grow italic">
              {{ user.content }}
            </blockquote>
            <cite class="text-right">
              — {{ user.name }}
              <small class="block whitespace-nowrap">{{ user.job }}</small>
            </cite>
          </figcaption>
        </figure>
      </div>
    </article>
  </div>
</template>

<script lang="ts" setup>
const list = [
  {
    name: 'Dr. Emily White',
    job: 'Environmental Advocate',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    content:
      'Endorsing Budomistrz: Their eco-friendly approach reshapes our living spaces for a greener tomorrow.'
  },

  {
    name: 'Sarah Johnson',
    job: 'Grammy-Winning Singer',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80',
    content:
      'Budomistrz has harmonized music and artistry in their architectural creations, redefining our senses.'
  },

  {
    name: 'Alexander Petrov',
    job: 'Artist',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
    content:
      "Budomistrz's architectural works are an extension of art, overflowing with inspiration."
  },

  {
    name: 'Emma Williams',
    job: 'Government Official',
    avatar:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    content: "Budomistrz's sustainable construction is pivotal for our future."
  }
];
</script>
