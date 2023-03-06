<template>
  <UIContainer>
    <section
      class="flex h-[650px] items-center bg-[bottom_right_52px] bg-no-repeat lg:bg-[url(@/assets/images/hero.png)]"
      data-aos="zoom-in"
    >
      <div class="lg:w-[600px] xl:w-[660px]">
        <h1
          class="text-6xl leading-[70px] lg:text-7xl lg:leading-[90px]"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          Buy, sell and trade crypto today
        </h1>
        <p
          class="mt-9 max-w-[440px] text-xl leading-8 text-dark-2"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          Trade with confidence and build your future with Australia’s fastest crypto exchange.
        </p>
        <div class="mt-8 flex space-x-4">
          <UIButton
            link
            to="#"
            text="Get started"
            type="primary"
            :size="breakpoints.isXs ? 'small' : 'large'"
            data-aos="fade-up"
            data-aos-delay="700"
          />
          <UIButton
            link
            to="#"
            text="View exchange"
            type="secondary"
            :size="breakpoints.isXs ? 'small' : 'large'"
            class="md:text-center lg:text-center xl:text-center"
            data-aos="fade-up"
            data-aos-delay="900"
          />
        </div>
        <div class="mt-4 flex items-center space-x-2" data-aos="fade-up" data-aos-delay="1100">
          <img src="@/assets/icons/google.png" alt="Google logo" />
          <UIRating :rating="4.6" />
        </div>
      </div>
    </section>
  </UIContainer>
</template>

<script setup lang="ts">
import UIContainer from '@/components/ui/UIContainer.vue';
import UIButton from '@/components/ui/UIButton.vue';
import UIRating from '@/components/ui/UIRating.vue';
import { useBreakpoints } from '@/composables/useBreakpoints';

const breakpoints = useBreakpoints();
</script>
