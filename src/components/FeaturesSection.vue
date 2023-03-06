<template>
  <section class="mt-28" data-aos="fade-up">
    <UIContainer>
      <h2 class="text-center text-5xl">Why BTC Markets?</h2>
      <div
        class="mt-32 grid grid-cols-1 justify-items-center gap-y-16 md:grid-cols-2 lg:grid-cols-3"
      >
        <div class="flex flex-col items-center" data-aos="fade-up">
          <IconLock />
          <h3 class="mt-6 text-lg">Security</h3>
          <p class="mt-4 text-center">
            Multiple layers of account<br />
            security, 2FA, address<br />
            whitelisting, Biometrics.
          </p>
        </div>
        <div class="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
          <IconLightning />
          <h3 class="mt-6 text-lg">Speed</h3>
          <p class="mt-4 text-center">
            Fast trade executions with an<br />
            industry leading uptime of 99.99%.
          </p>
        </div>
        <div
          class="flex flex-col items-center md:col-span-2 lg:col-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <IconMessage />
          <h3 class="mt-6 text-lg">Support</h3>
          <p class="mt-4 text-center">
            100% Australian-based<br />
            customer support, OTC desk and<br />
            VIP Program.
          </p>
        </div>
      </div>
    </UIContainer>
  </section>
</template>

<script setup lang="ts">
import UIContainer from '@/components/ui/UIContainer.vue';
import IconLock from '@/components/icons/IconLock.vue';
import IconLightning from '@/components/icons/IconLightning.vue';
import IconMessage from '@/components/icons/IconMessage.vue';
</script>
