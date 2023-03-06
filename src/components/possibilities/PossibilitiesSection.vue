<template>
  <section class="mt-44">
    <UIContainer>
      <div class="grid grid-cols-1 content-between gap-x-4 lg:grid-cols-2">
        <div :class="{ 'order-1': reverse }">
          <div>
            <h2 class="uppercase" :data-aos="reverse ? 'fade-left' : 'fade-right'">{{ title }}</h2>
            <h3
              class="mt-4 text-4xl leading-[50px]"
              :data-aos="reverse ? 'fade-left' : 'fade-right'"
              data-aos-delay="100"
            >
              {{ subtitle }}
            </h3>
          </div>
          <div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div
              v-for="(possibility, idx) in possibilities"
              :key="possibility.title"
              class="flex flex-col xl:w-64"
              data-aos="fade-up"
              :data-aos-delay="100 * idx"
            >
              <component :is="possibility.icon" />
              <h4 class="mt-2">{{ possibility.title }}</h4>
              <p class="mt-4">{{ possibility.description }}</p>
            </div>
          </div>
        </div>
        <img
          :src="image"
          :alt="`${title} possibilities section image`"
          class="hidden lg:block"
          :class="reverse ? 'mr-auto' : 'ml-auto'"
          :data-aos="reverse ? 'fade-right' : 'fade-left'"
          data-aos-delay="200"
        />
      </div>
    </UIContainer>
  </section>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Possibility } from '@/components/possibilities/types';
import UIContainer from '@/components/ui/UIContainer.vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  possibilities: {
    type: Array as PropType<Possibility[]>,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  reverse: {
    type: Boolean,
    default: false,
  },
});
</script>
