<template>
  <footer class="py-16">
    <UIContainer>
      <a href="#">
        <IconBrandLogoTitle />
      </a>
      <div
        class="justify-items-between mt-16 inline-grid w-full grid-cols-[repeat(2,auto)] gap-y-14 text-xs sm:grid-cols-[repeat(3,auto)] lg:grid-cols-[repeat(5,auto)]"
      >
        <div v-for="linksGroup in footerLinks" :key="linksGroup.title">
          <h3 class="uppercase">{{ linksGroup.title }}</h3>
          <ul class="mt-9 flex flex-col items-start space-y-4">
            <li v-for="link in linksGroup.links" :key="link.title">
              <a :href="link.href" class="flex items-center space-x-2">
                <img v-if="link.image" :src="link.image" :alt="link.title" />

                <template v-else-if="link.icon">
                  <component :is="link.icon" />
                  <span>{{ link.title }}</span>
                </template>

                <span v-else>{{ link.title }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-20 space-y-2">
        <div class="text-center text-xs sm:text-left">ACN 164 093 887 | ABN 45 164 093 887</div>
        <div class="text-center text-xs sm:text-left">
          &copy;2023 BTC Markets Pty. All rights reserved.
        </div>
      </div>

      <div class="mt-16 text-center text-xs">
        BTC Markets Pty Ltd ACN 164 093 887 is an authorised representative (AR No. 1297122) of BTCM
        Payments Pty Ltd ACN 643 241 829 (AFSL No. 525840)
      </div>
    </UIContainer>
  </footer>
</template>

<script setup lang="ts">
import UIContainer from '@/components/ui/UIContainer.vue';
import IconBrandLogoTitle from '@/components/icons/brand/IconBrandLogoTitle.vue';

import { footerLinks } from '@/data/footerLinks';
</script>
