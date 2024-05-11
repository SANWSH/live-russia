<template>
  <div :class="`card flex flex-col border border-[#FFFFFF] border-opacity-10`">
    <div :class="`card__icon ${icons} max-md:hidden`"></div>
    <div class="card__text-wrapper flex gap-x-2 max-md:gap-x-1">
      <div class="flex">
        <h3 class="font-bold italic-text text-6xl max-md:text-base text-BASE_BUTTON">{{number}}</h3>
      </div>
      <div class="flex flex-col">
        <strong class="font-bold text-2xl max-md:text-base uppercase text-left italic-text">{{topText}}</strong>
        <small class="text-left font-normal text-xl max-md:text-xs text-gray-500">{{bottomText}}</small>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  props: {
    icons: String,
    number: String,
    topText: String,
    bottomText: String
  },
  setup () {
    const maxMD = inject('scrMedium')

    return {
      maxMD
    }
  }
}
</script>

<style>
  .card{
    @apply w-[14.875rem] h-[8.875rem] max-md:w-[118px] max-md:h-[54px] bg-[#242D4571] rounded-xl max-md:rounded-md backdrop-blur-lg py-[1.125rem] px-7 max-md:py-2 max-md:px-1
  }
  .card__icon{
    @apply w-8 h-8 block mx-auto mb-2 max-md:hidden;
  }
  .card__icon.play{
    background: url('@/assets/img/icons/play_yellow.svg')
    no-repeat center / contain;
  }
  .card__icon.check-in{
    background: url('@/assets/img/icons/check_in_yellow.svg')
    no-repeat center / contain;
  }
  .card__icon.download{
    background: url('@/assets/img/icons/download_yellow.svg')
    no-repeat center / contain;
  }
</style>
