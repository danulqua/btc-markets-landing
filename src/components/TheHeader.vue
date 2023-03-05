<template>
  <UIContainer>
    <div class="flex h-20 items-center justify-between">
      <a href="/">
        <IconBrandLogoTitle />
      </a>

      <nav class="flex items-center space-x-6">
        <ul class="flex space-x-6">
          <li class="flex cursor-pointer items-center space-x-2">
            <span>Products</span> <IconChevronDown />
          </li>
          <li class="flex cursor-pointer items-center space-x-2"><a href="#">Prices</a></li>
          <li class="flex cursor-pointer items-center space-x-2">
            <span>Buy</span> <IconChevronDown />
          </li>
          <li class="flex cursor-pointer items-center space-x-2"><a href="#">OTC</a></li>
          <li class="flex cursor-pointer items-center space-x-2">
            <span>Learn</span> <IconChevronDown />
          </li>
          <li class="flex cursor-pointer items-center space-x-2">
            <span>Help</span> <IconChevronDown />
          </li>
        </ul>
        <div class="flex items-center space-x-2">
          <UIButton link to="#" text="Log in" type="secondary" size="small" />
          <UIButton link to="#" text="Sign up" type="primary" size="small" />
        </div>
      </nav>
    </div>
  </UIContainer>
</template>

<script setup lang="ts">
import UIContainer from '@/components/ui/UIContainer.vue';
import UIButton from '@/components/ui/UIButton.vue';
import IconBrandLogoTitle from '@/components/icons/brand/IconBrandLogoTitle.vue';
import IconChevronDown from '@/components/icons/IconChevronDown.vue';
</script>
