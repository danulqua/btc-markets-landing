<template>
  <section class="pt-32 pb-16 md:ml-14">
    <UIContainer>
      <h2 class="text-4xl leading-10" data-aos="fade-right">
        Create an account<br />
        and start trading<br />
        with us today!
      </h2>
      <UIButton
        text="Create an account"
        type="primary"
        size="large"
        class="mt-9"
        data-aos="fade-right"
      />
    </UIContainer>
  </section>
</template>

<script setup lang="ts">
import UIContainer from '@/components/ui/UIContainer.vue';
import UIButton from '@/components/ui/UIButton.vue';
</script>
