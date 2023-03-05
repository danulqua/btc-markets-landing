<template>
  <section class="py-28">
    <UIContainer>
      <h2 class="mx-auto w-96 text-center text-4xl leading-[50px]">
        Start trading in 3 easy steps
      </h2>
      <div
        class="mt-32 grid grid-cols-1 justify-items-center gap-y-16 md:grid-cols-2 lg:grid-cols-3"
      >
        <div class="flex flex-col items-center">
          <div class="flex h-20 w-20 items-center justify-center rounded bg-cream">
            <IconUserVerified class="h-10 w-10" />
          </div>
          <h3 class="mt-6 text-lg">1. Create</h3>
          <p class="mt-4 text-center">
            Sign up and verify your<br />
            free account.
          </p>
        </div>
        <div class="flex flex-col items-center">
          <div class="flex h-20 w-20 items-center justify-center rounded bg-cream">
            <IconWallet class="h-10 w-10" />
          </div>
          <h3 class="mt-6 text-lg">2. Deposit</h3>
          <p class="mt-4 text-center">
            Add AUD or crypto to your wallet<br />
            using our secure methods.
          </p>
        </div>
        <div class="flex flex-col items-center md:col-span-2 lg:col-auto">
          <div class="flex h-20 w-20 items-center justify-center rounded bg-cream">
            <IconTradingBars class="h-10 w-10" />
          </div>
          <h3 class="mt-6 text-lg">3. Trade</h3>
          <p class="mt-4 text-center">
            You’re all set. Buy, sell and<br />
            trade crypto immediately.
          </p>
        </div>
      </div>
      <UIButton text="Get started" type="primary" size="large" class="mx-auto mt-11" />
      <div class="mt-8 flex items-center justify-center space-x-2">
        <img src="@/assets/icons/google.png" alt="Google logo" />
        <UIRating :rating="4.6" />
      </div>
    </UIContainer>
  </section>
</template>

<script setup lang="ts">
import UIContainer from '@/components/ui/UIContainer.vue';
import IconUserVerified from '@/components/icons/IconUserVerified.vue';
import IconWallet from '@/components/icons/IconWallet.vue';
import IconTradingBars from '@/components/icons/IconTradingBars.vue';
import UIButton from '@/components/ui/UIButton.vue';
import UIRating from '@/components/ui/UIRating.vue';
</script>
