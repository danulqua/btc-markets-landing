<template>
  <div class="h-[350px] w-[360px] overflow-hidden rounded shadow-lg shadow-neutral-100">
    <div class="h-[150px] overflow-hidden">
      <img
        :src="image"
        :alt="`${title} news image`"
        class="h-full w-full object-cover object-center"
      />
    </div>
    <div class="flex h-[200px] flex-col items-start px-4 pt-4 pb-8">
      <div class="flex items-center space-x-4">
        <span class="bg-primary-1 px-2 py-1 text-xs">{{ type }}</span>
        <span class="text-xs uppercase">{{ date }}</span>
      </div>
      <h3 class="mt-4 inline w-full text-2xl leading-8">{{ title }}</h3>
      <a href="#" class="mt-auto inline-block">Read more</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  type: {
    type: String as PropType<'Newsletter' | 'Informational'>,
    required: true,
  },
});
</script>
