<template>
  <section class="mt-48 bg-gray-50 pt-32">
    <UIContainer>
      <h2 class="text-center">VIP Program</h2>
      <h3 class="mt-4 text-center text-4xl leading-[50px]">
        When you need more than just a crypto exchange
      </h3>
      <p class="mt-8 text-center text-[15px]">
        Access world-class APIs, a lower fee structure and a dedicated Account Manager.
      </p>

      <div class="mt-12 flex items-center justify-around">
        <div class="flex items-center space-x-2">
          <IconLightning class="h-6 w-6" />
          <span>API integrations</span>
        </div>
        <div class="flex items-center space-x-2">
          <IconCircles class="h-6 w-6" />
          <span>Lower fees</span>
        </div>
        <div class="flex items-center space-x-2">
          <IconUser class="h-6 w-6" />
          <span>Dedicated Account Manager</span>
        </div>
      </div>

      <UIButton text="Learn more" type="secondary" size="large" class="mx-auto mt-20" />

      <div>
        <img :src="vipImage" alt="VIP program image" class="mt-16 w-full" />
      </div>
    </UIContainer>
  </section>
</template>

<script setup lang="ts">
import UIContainer from '@/components/ui/UIContainer.vue';
import UIButton from '@/components/ui/UIButton.vue';
import IconLightning from '@/components/icons/IconLightning.vue';
import IconCircles from '@/components/icons/IconCircles.vue';
import IconUser from '@/components/icons/IconUser.vue';

import vipImage from '@/assets/images/vip-program.png';
</script>
