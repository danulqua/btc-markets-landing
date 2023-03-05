<template>
  <div class="flex items-center">
    <div class="flex items-center space-x-1">
      <IconStarFilled v-if="rating >= 1" />
      <IconStarFilledHalf v-else-if="rating >= 0.5" />
      <IconStarOutlined v-else />

      <IconStarFilled v-if="rating >= 2" />
      <IconStarFilledHalf v-else-if="rating >= 1.5" />
      <IconStarOutlined v-else />

      <IconStarFilled v-if="rating >= 3" />
      <IconStarFilledHalf v-else-if="rating >= 2.5" />
      <IconStarOutlined v-else />

      <IconStarFilled v-if="rating >= 4" />
      <IconStarFilledHalf v-else-if="rating >= 3.5" />
      <IconStarOutlined v-else />

      <IconStarFilled v-if="rating >= 5" />
      <IconStarFilledHalf v-else-if="rating >= 4.5" />
      <IconStarOutlined v-else />
    </div>
    <span class="ml-3 text-sm text-dark-1">{{ rating.toFixed(1) }}</span>
  </div>
</template>

<script setup lang="ts">
import IconStarOutlined from '@/components/icons/IconStarOutlined.vue';
import IconStarFilledHalf from '@/components/icons/IconStarFilledHalf.vue';
import IconStarFilled from '@/components/icons/IconStarFilled.vue';

defineProps({
  rating: {
    type: Number,
    required: true,
  },
});
</script>
