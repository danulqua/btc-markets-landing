<template>
  <section class="py-32">
    <UIContainer>
      <h2 class="text-center text-4xl" data-aos="fade-up">Find out the latest crypto news</h2>
      <div class="mt-16 flex flex-wrap items-center justify-center gap-8 xl:justify-between">
        <LatestNewsCard
          v-for="(newsItem, idx) in latestNews"
          :key="newsItem.id"
          :title="newsItem.title"
          :image="newsItem.image"
          :date="newsItem.date"
          :type="newsItem.type"
          data-aos="flip-left"
          data-aos-duration="1000"
          :data-aos-delay="200 * idx"
        />
      </div>
      <div class="mt-16 text-center text-[15px]" data-aos="fade-up">
        Check out more of our crypto news
      </div>
      <div class="mt-16 flex flex-wrap items-center justify-center gap-8">
        <a href="#" class="group flex items-center space-x-2" data-aos="fade-up">
          <IconTwitter />
          <span>Twitter</span>
        </a>
        <a
          href="#"
          class="group flex items-center space-x-2"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <IconFacebook />
          <span>Facebook</span>
        </a>
        <a
          href="#"
          class="group flex items-center space-x-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <IconLinkedin />
          <span>LinkedIn</span>
        </a>
        <a
          href="#"
          class="group flex items-center space-x-2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <IconTelegram />
          <span>Telegram</span>
        </a>
        <a
          href="#"
          class="group flex items-center space-x-2"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <IconInstagram />
          <span>Instagram</span>
        </a>
      </div>
    </UIContainer>
  </section>
</template>

<script setup lang="ts">
import UIContainer from '@/components/ui/UIContainer.vue';
import LatestNewsCard from '@/components/latest-news/LatestNewsCard.vue';
import IconTwitter from '@/components/icons/social/IconTwitter.vue';
import IconFacebook from '@/components/icons/social/IconFacebook.vue';
import IconLinkedin from '@/components/icons/social/IconLinkedin.vue';
import IconTelegram from '@/components/icons/social/IconTelegram.vue';
import IconInstagram from '@/components/icons/social/IconInstagram.vue';

import { latestNews } from '@/data/latestNews';
</script>
