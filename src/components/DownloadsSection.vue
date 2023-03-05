<template>
  <section class="border-b border-gray-300 pt-48 pb-24">
    <UIContainer>
      <h2 class="text-4xl">Trade on the go</h2>
      <p class="mt-6 w-[500px]">
        Place simple and advanced trades on the go with the BTC Markets app. You can also manage
        your portfolio, monitor prices, and track market movements, anywhere, anytime.
      </p>
      <div class="mt-8 flex space-x-9">
        <div class="flex flex-col space-y-5">
          <a href="#">
            <img :src="appStoreImg" alt="Download from App Store image" />
          </a>
          <UIRating :rating="4.3" />
        </div>
        <div class="flex flex-col space-y-5">
          <a href="#">
            <img :src="googlePlayImg" alt="Download from Google Play image" />
          </a>
          <UIRating :rating="3.9" />
        </div>
      </div>
      <a href="#" class="mt-9 inline-block transition-colors hover:text-primary-1">Learn more</a>
    </UIContainer>
  </section>
</template>

<script setup lang="ts">
import UIContainer from '@/components/ui/UIContainer.vue';
import UIRating from '@/components/ui/UIRating.vue';
import appStoreImg from '@/assets/icons/app-store.png';
import googlePlayImg from '@/assets/icons/google-play.png';
</script>
