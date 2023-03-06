import type { FooterLinksGroup } from '@/components/the-footer/types';

import IconTwitter from '@/components/icons/social/IconTwitter.vue';
import IconFacebook from '@/components/icons/social/IconFacebook.vue';
import IconLinkedin from '@/components/icons/social/IconLinkedin.vue';
import IconTelegram from '@/components/icons/social/IconTelegram.vue';
import IconInstagram from '@/components/icons/social/IconInstagram.vue';
import appStoreImg from '@/assets/icons/app-store.png';
import googlePlayImg from '@/assets/icons/google-play.png';

export const footerLinks: FooterLinksGroup[] = [
  {
    title: 'About',
    links: [
      {
        title: 'About Us',
        href: '#',
      },
      {
        title: 'Mobile app',
        href: '#',
      },
      {
        title: 'Staking',
        href: '#',
      },
      {
        title: 'Self Managed Super Funds',
        href: '#',
      },
      {
        title: 'OTC Trading',
        href: '#',
      },
      {
        title: 'VIP Program',
        href: '#',
      },
      {
        title: 'Investor Study Report',
        href: '#',
      },
      {
        title: 'Contact Us',
        href: '#',
      },
      {
        title: 'Blog',
        href: '#',
      },
    ],
  },
  {
    title: 'Legal',
    links: [
      {
        title: 'Privacy Policy',
        href: '#',
      },
      {
        title: 'Terms of Service',
        href: '#',
      },
      {
        title: 'AML/CTF Policy',
        href: '#',
      },
      {
        title: 'Protect Yourself Online',
        href: '#',
      },
      {
        title: 'Information Requests',
        href: '#',
      },
    ],
  },
  {
    title: 'Help',
    links: [
      {
        title: 'Support',
        href: '#',
      },
      {
        title: 'Complaints',
        href: '#',
      },
      {
        title: 'FAQs',
        href: '#',
      },
      {
        title: 'Fees',
        href: '#',
      },
      {
        title: 'Bug Bounty',
        href: '#',
      },
      {
        title: 'API',
        href: '#',
      },
      {
        title: 'Tax Reporting',
        href: '#',
      },
    ],
  },
  {
    title: 'Follow',
    links: [
      {
        title: 'Twitter',
        icon: IconTwitter,
        href: '#',
      },
      {
        title: 'Facebook',
        icon: IconFacebook,
        href: '#',
      },
      {
        title: 'LinkedIn',
        icon: IconLinkedin,
        href: '#',
      },
      {
        title: 'Telegram',
        icon: IconTelegram,
        href: '#',
      },
      {
        title: 'Instagram',
        icon: IconInstagram,
        href: '#',
      },
    ],
  },
  {
    title: 'Get Started',
    links: [
      {
        title: 'Log in',
        href: '#',
      },
      {
        title: 'Sign up',
        href: '#',
      },
      {
        title: 'Download on the App Store',
        image: appStoreImg,
        href: '#',
      },
      {
        title: 'Get it on Google Play',
        image: googlePlayImg,
        href: '#',
      },
    ],
  },
];
