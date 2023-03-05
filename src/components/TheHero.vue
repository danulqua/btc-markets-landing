<template>
  <UIContainer>
    <section
      class="flex h-[650px] items-center bg-[bottom_right_52px] bg-no-repeat lg:bg-[url(@/assets/images/hero.png)]"
    >
      <div class="lg:w-[600px] xl:w-[660px]">
        <h1 class="text-7xl leading-[90px]">Buy, sell and trade crypto today</h1>
        <p class="mt-9 w-[440px] text-xl leading-8 text-dark-2">
          Trade with confidence and build your future with Australia’s fastest crypto exchange.
        </p>
        <div class="mt-8 flex space-x-4">
          <UIButton link to="#" text="Get started" type="primary" size="large" />
          <UIButton link to="#" text="View exchange" type="secondary" size="large" />
        </div>
        <div class="mt-4 flex items-center space-x-2">
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
</script>
