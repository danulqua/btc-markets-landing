import type { Component } from 'vue';

export interface FooterLink {
  title: string;
  href: string;
  icon?: Component;
  image?: string;
}

export interface FooterLinksGroup {
  title: string;
  links: FooterLink[];
}
