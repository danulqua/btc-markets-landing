<template>
  <section class="mt-28">
    <UIContainer>
      <h2 class="text-center text-5xl">Why BTC Markets?</h2>
      <div
        class="mt-32 grid grid-cols-1 justify-items-center gap-y-16 md:grid-cols-2 lg:grid-cols-3"
      >
        <div class="flex w-64 flex-col items-center">
          <IconLock />
          <h3 class="mt-6 text-lg">Security</h3>
          <p class="mt-4 text-center">
            Multiple layers of account security, 2FA, address whitelisting, Biometrics.
          </p>
        </div>
        <div class="flex w-64 flex-col items-center">
          <IconLightning />
          <h3 class="mt-6 text-lg">Speed</h3>
          <p class="mt-4 text-center">
            Fast trade executions with an industry leading uptime of 99.99%.
          </p>
        </div>
        <div class="flex w-64 flex-col items-center md:col-span-2 lg:col-auto">
          <IconMessage />
          <h3 class="mt-6 text-lg">Support</h3>
          <p class="mt-4 text-center">
            100% Australian-based customer support, OTC desk and VIP Program.
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
