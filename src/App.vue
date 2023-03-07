<template>
  <main>
    <TheHeader />
    <TheHero />
    <CurrenciesTable />
    <FeaturesSection />
    <PossibilitiesSection
      title="Trade"
      subtitle="Buy, sell and trade crypto with confidence"
      :image="tradeImg"
      :possibilities="possibilitiesTrade"
    />
    <PossibilitiesSection
      title="Wallet"
      subtitle="Simple and secure wallet services"
      :image="walletImg"
      :possibilities="possibilitiesWallet"
      reverse
    />
    <VipProgram />
    <FirstSteps />
    <DownloadsSection />
    <LatestNews />
    <CallToAction />
    <TheFooter />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import AOS from 'aos';

import TheHeader from '@/components/TheHeader.vue';
import TheHero from '@/components/TheHero.vue';
import CurrenciesTable from '@/components/CurrenciesTable.vue';
import FeaturesSection from '@/components/FeaturesSection.vue';
import PossibilitiesSection from '@/components/possibilities/PossibilitiesSection.vue';
import VipProgram from '@/components/VipProgram.vue';
import FirstSteps from '@/components/FirstSteps.vue';
import DownloadsSection from '@/components/DownloadsSection.vue';
import LatestNews from '@/components/latest-news/LatestNews.vue';
import CallToAction from '@/components/CallToAction.vue';
import TheFooter from '@/components/the-footer/TheFooter.vue';

import tradeImg from '@/assets/images/trade.png';
import walletImg from '@/assets/images/wallet.png';

import { possibilitiesTrade, possibilitiesWallet } from '@/data/possibilities';

onMounted(() => {
  AOS.init({
    easing: 'ease-in-out',
    offset: 100,
  });
});
</script>
