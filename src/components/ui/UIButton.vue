<template>
  <button
    class="rounded transition-colors duration-200 ease-in-out"
    :class="[
      type === 'primary' ? 'bg-primary-1 text-green-dark hover:bg-primary-2' : '',
      type === 'secondary'
        ? 'hover border border-dark-1 bg-transparent text-dark-1 hover:border-primary-2 hover:bg-primary-2 hover:text-green-dark'
        : '',
      size === 'small' ? 'h-8 px-4 text-xs' : '',
      size === 'large' ? 'h-9 px-10 text-base' : '',
    ]"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  type: {
    type: String as PropType<'primary' | 'secondary'>,
    default: 'primary',
  },
  size: {
    type: String as PropType<'small' | 'large'>,
    default: 'small',
  },
  text: {
    type: String,
    required: true,
  },
});
</script>
