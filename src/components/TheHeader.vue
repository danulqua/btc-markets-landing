<template>
  <UIContainer>
    <div class="flex h-20 items-center justify-between">
      <a href="/">
        <IconBrandLogoTitle />
      </a>

      <nav class="hidden items-center space-x-6 lg:flex">
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

      <button
        ref="mobileNavBtn"
        class="relative h-6 w-8 cursor-pointer bg-transparent lg:hidden"
        @click="open = !open"
      >
        <span
          class="absolute left-0 top-1/2 h-[1px] w-full -translate-y-[calc(50%+4px)] bg-dark-1 transition-transform"
          :class="open ? '-translate-y-0 rotate-45' : ''"
        ></span>
        <span
          class="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 bg-dark-1 transition-transform"
          :class="open ? 'scale-x-0' : ''"
        ></span>
        <span
          class="absolute left-0 top-1/2 h-[1px] w-full -translate-y-[calc(50%-4px)] bg-dark-1 transition-transform"
          :class="open ? '-translate-y-0 -rotate-45' : ''"
        ></span>
      </button>

      <Transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition ease-in duration-300"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <nav
          v-if="open"
          ref="mobileNav"
          class="fixed top-4 right-2 z-20 rounded bg-white p-4 shadow-lg lg:hidden"
        >
          <div class="flex justify-between">
            <ul class="flex w-[150px] flex-col items-start space-y-4">
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
              <li class="flex cursor-pointer items-center space-x-2">
                <span>Log in</span> <IconChevronDown />
              </li>
              <li class="flex cursor-pointer items-center space-x-2">
                <span>Sign up</span> <IconChevronDown />
              </li>
            </ul>

            <button
              class="relative h-6 w-8 cursor-pointer bg-transparent lg:hidden"
              @click="open = !open"
            >
              <span
                class="absolute left-0 top-1/2 h-[1px] w-full -translate-y-[calc(50%+4px)] bg-dark-1 transition-transform"
                :class="open ? 'translate-y-0 rotate-45' : ''"
              ></span>
              <span
                class="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 bg-dark-1 transition-transform"
                :class="open ? 'scale-x-0' : ''"
              ></span>
              <span
                class="absolute left-0 top-1/2 h-[1px] w-full -translate-y-[calc(50%-4px)] bg-dark-1 transition-transform"
                :class="open ? 'translate-y-0 -rotate-45' : ''"
              ></span>
            </button>
          </div>
        </nav>
      </Transition>
      <div
        class="fixed inset-0 z-10 bg-black transition-all duration-300 lg:hidden"
        :class="open ? 'opacity-50' : 'invisible opacity-0'"
      ></div>
    </div>
  </UIContainer>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import UIContainer from '@/components/ui/UIContainer.vue';
import UIButton from '@/components/ui/UIButton.vue';
import IconBrandLogoTitle from '@/components/icons/brand/IconBrandLogoTitle.vue';
import IconChevronDown from '@/components/icons/IconChevronDown.vue';
import { useBreakpoints } from '@/composables/useBreakpoints';

const open = ref(false);
const mobileNavBtn = ref<HTMLElement | null>(null);
const mobileNav = ref<HTMLElement | null>(null);

onMounted(() => {
  const handleClickOutside = (event: Event) => {
    if (!mobileNav.value || !mobileNavBtn.value) return;

    const includesMobileNav = event.composedPath().includes(mobileNav.value);
    const includesMobileNavBtn = event.composedPath().includes(mobileNavBtn.value);

    if (open.value && !includesMobileNav && !includesMobileNavBtn) {
      open.value = false;
    }
  };

  document.addEventListener('click', handleClickOutside);

  return () => {
    document.removeEventListener('click', handleClickOutside);
  };
});

const breakpoints = useBreakpoints();
watch([open, breakpoints], ([open, breakpoints]) => {
  if (open && !breakpoints.isLg) {
    return (document.body.style.overflow = 'hidden');
  }

  document.body.style.overflow = 'auto';
});
</script>
