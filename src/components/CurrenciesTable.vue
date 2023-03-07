<template>
  <div data-aos="zoom-in-up" data-aos-offset="-500" data-aos-duration="1000" data-aos-delay="1800">
    <UIContainer>
      <div class="shadow-neutral rounded shadow-[0_0_30px_rgb(229,229,229)]">
        <div class="flex h-16 items-center justify-center space-x-8 border-b border-gray-100">
          <button class="text-sm text-dark-1">Most Popular</button>
          <button class="text-sm text-grey-1">Top Movers</button>
        </div>
        <div>
          <div class="hidden grid-cols-5 border-b border-gray-100 px-8 lg:grid">
            <div
              v-for="header in tableHeaders"
              :key="header"
              class="py-4 text-sm text-[13px] text-dark-1"
              :class="{ 'col-span-2': header === tableHeaders.at(-1) }"
            >
              {{ header }}
            </div>
          </div>

          <template v-for="data in tableData" :key="data.asset">
            <div
              class="grid grid-flow-row grid-cols-2 border-b border-gray-100 px-8 py-4 lg:grid-cols-5"
            >
              <div class="flex h-12 items-center lg:hidden">{{ tableHeaders.at(0) }}</div>
              <div class="flex items-center space-x-2">
                <component :is="data.icon" />
                <span>{{ data.asset }}</span>
              </div>

              <div class="flex h-12 items-center lg:hidden">{{ tableHeaders.at(1) }}</div>
              <div class="flex items-center space-x-2">
                <span>{{ data.lastPrice }}</span>
                <span class="-translate-y-1 text-grey-2">AUD</span>
              </div>

              <div class="flex h-12 items-center lg:hidden">{{ tableHeaders.at(2) }}</div>
              <div class="flex items-center space-x-2">
                <span :class="data.change.charAt(0) === '-' ? 'text-red' : 'text-green'">{{
                  data.change
                }}</span>
                <IconArrowTopRight />
              </div>

              <div class="flex h-12 items-center lg:hidden">{{ tableHeaders.at(3) }}</div>
              <div class="flex items-center">
                {{ data.marketCap }}
              </div>
              <UIButton
                text="Buy"
                type="primary"
                size="small"
                class="col-span-2 ml-auto lg:col-auto"
              />
            </div>
          </template>
        </div>
        <div class="flex h-16 items-center justify-center">
          <a href="#" class="group flex items-center space-x-3">
            <div class="flex -space-x-2">
              <IconBitcoin class="transition-transform group-hover:-translate-x-4" />
              <IconEthereum class="transition-transform group-hover:-translate-x-3" />
              <IconTether class="transition-transform group-hover:-translate-x-2" />
              <IconXrp class="transition-transform group-hover:-translate-x-1" />
            </div>
            <span class="text-sm">View all markets</span>
            <IconArrowRight class="transition-transform group-hover:translate-x-2" />
          </a>
        </div>
      </div>
    </UIContainer>
  </div>
</template>

<script setup lang="ts">
import UIContainer from '@/components/ui/UIContainer.vue';
import UIButton from '@/components/ui/UIButton.vue';
import IconXrp from '@/components/icons/currencies/IconXrp.vue';
import IconBitcoin from '@/components/icons/currencies/IconBitcoin.vue';
import IconEthereum from '@/components/icons/currencies/IconEthereum.vue';
import IconTether from '@/components/icons/currencies/IconTether.vue';
import IconEnjin from '@/components/icons/currencies/IconEnjin.vue';
import IconArrowTopRight from '@/components/icons/IconArrowTopRight.vue';
import IconArrowRight from '@/components/icons/IconArrowRight.vue';

const tableHeaders = ['Asset', 'Last Price', '24hr Change', 'Market Cap'];
const tableData = [
  {
    asset: 'XRP',
    icon: IconXrp,
    lastPrice: '$0.5617',
    change: '1.57%',
    marketCap: '$28B',
  },
  {
    asset: 'Bitcoin',
    icon: IconBitcoin,
    lastPrice: '$0.5617',
    change: '-0.08%',
    marketCap: '$28B',
  },
  {
    asset: 'Ethereum',
    icon: IconEthereum,
    lastPrice: '$0.5617',
    change: '-1.08%',
    marketCap: '$28B',
  },
  {
    asset: 'Tether',
    icon: IconTether,
    lastPrice: '$0.5617',
    change: '1.57%',
    marketCap: '$28B',
  },
  {
    asset: 'Enjin Coin',
    icon: IconEnjin,
    lastPrice: '$0.5617',
    change: '1.57%',
    marketCap: '$28B',
  },
];
</script>
