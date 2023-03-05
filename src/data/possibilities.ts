import type { Possibility } from '@/components/possibilities/types';
import IconArrowsUpDown from '@/components/icons/IconArrowsUpDown.vue';
import IconTradingChart from '@/components/icons/IconTradingChart.vue';
import IconDiagram from '@/components/icons/IconDiagram.vue';
import IconSmartphone from '@/components/icons/IconSmartphone.vue';
import IconSafe from '@/components/icons/IconSafe.vue';
import IconLocation from '@/components/icons/IconLocation.vue';
import IconWallet from '@/components/icons/IconWallet.vue';
import IconFunding from '@/components/icons/IconFunding.vue';

export const possibilitiesTrade: Possibility[] = [
  {
    icon: IconArrowsUpDown,
    title: 'Simple buy & sell options',
    description: 'Buy and sell cryptocurrency quickly and easily.',
  },
  {
    icon: IconTradingChart,
    title: 'Advanced trading',
    description:
      'Access advanced order types including limit, market, stop limit and dollar cost averaging.',
  },
  {
    icon: IconDiagram,
    title: 'Portfolio tracking',
    description: 'Track your total asset holdings, values and equity over time.',
  },
  {
    icon: IconSmartphone,
    title: 'Mobile app',
    description: 'Monitor markets, manage your portfolio, and trade crypto on the go.',
  },
];

export const possibilitiesWallet: Possibility[] = [
  {
    icon: IconSafe,
    title: 'Secure asset storage',
    description: 'We use multi-signature technology to securely store your assets.',
  },
  {
    icon: IconLocation,
    title: 'Assets held in Australia',
    description: '100% Australian-based custody of your assets.',
  },
  {
    icon: IconWallet,
    title: 'Multi-coin wallet',
    description: 'Store multiple assets simultaneously in one wallet.',
  },
  {
    icon: IconFunding,
    title: 'Fast funding',
    description: 'Credit your wallet with AUD in seconds using Osko PayID.',
  },
];
