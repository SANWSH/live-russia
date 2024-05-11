<template>
  <div class="how-to-start page-gradient-bottom relative">
    <teleport v-if="!maxMD" to="#background">
      <div class="background aspect-video absolute"></div>
    </teleport>
    <div class="how-to-start__content container flex mx-auto h-full relative">
      <div v-if="!maxMD" class="image__wrapper absolute h-full flex w-full">
        <hero-element
        imgSourceName="engineer"
        imgOriginalExt="png"
        tagName="div"
        class="absolute bottom-0 -mb-20 aspect-ratio[382/961] max-w-[calc(382rem/16)] self-center image__element engineer z-50"
        :style="`transform: translateY(${Y * 0.75}rem) translateX(${X * 0.5}rem);`"
        >
        </hero-element>
        <hero-element
        imgSourceName="woman"
        imgOriginalExt="png"
        tagName="div"
        class="absolute bottom-0 -mb-2 aspect-ratio[366/789] max-w-[calc(366rem/16)] image__element woman"
        :style="`transform: translateY(${Y * 0.75}rem) translateX(${X * 0.5}rem);`"
        >
        </hero-element>
      </div>
      <div v-else class="relative h-full flex w-full aspect-[360/670] overflow-hidden">
        <hero-element
        imgSourceName="busya_n_kolya"
        imgOriginalExt="png"
        tagName="div"
        class="absolute w-full -mb-[21.5rem] pl-4 px-2 self-center image__element engineer z-50"
        :style="`transform: translateY(${Y * 0.75}rem) translateX(${X * 0.5}rem);`"
        >
        </hero-element>
        <hero-element
        imgSourceName="mobile_screen_02"
        imgOriginalExt="png"
        tagName="div"
        class="absolute bottom-0 -mb-[5rem] w-full h-auto object-cover"
        :style="`transform: translateY(${Y * 0.75}rem) translateX(${X * 0.5}rem);`"
        >
        </hero-element>
      </div>
      <div class="instruction flex flex-col">
        <div class="instruction__top self-center">
          <h2 class="instruction__title font-bold text-2xl max-md:text-base uppercase text-BASE_BUTTON">Начать игру - просто</h2>
          <div class="card-container">
            <the-card v-for="(item, i) in items" :icons="item.icon" :number="`0${i+1}`" :topText="item.topText" :bottomText="item.bottomText" :key="item[i]"/>
          </div>
        </div>
        <div class="instruction__bottom">
            <div class="instruction__buttons flex flex-row">
            <a href="//" class="download-link flex google-play border border-[#FFFFFF] border-opacity-10 backdrop-blur-lg"></a>
              <button-accent title="Скачать лаунчер" class="text-xl"/>
              <a href="//" class="download-link rustore flex border border-[#FFFFFF] border-opacity-10 backdrop-blur-lg"></a>
            </div>
            <p class="w-full">Ждем тебя на заводе</p>
        </div>
      </div>
      <div v-if="maxMD" class="instruction__bottom absolute z-[1010]">
        <div class="instruction__buttons flex flex-row">
        <a href="//" class="download-link flex google-play border border-[#FFFFFF] border-opacity-10 backdrop-blur-lg"></a>
          <button-accent title="Скачать лаунчер" class="text-xl"/>
          <a href="//" class="download-link rustore flex border border-[#FFFFFF] border-opacity-10 backdrop-blur-lg"></a>
        </div>
        <p class="w-full">Ждем тебя на заводе</p>
      </div>
    </div>
  </div>
</template>
<script>
import TheCard from '@/components/HowToStart/TheCard.vue'
import { ref } from 'vue'
import ButtonAccent from '../components/ButtonAccent.vue'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import HeroElement from '../components/Main/HeroElement.vue'

export default {
  components: {
    TheCard,
    ButtonAccent,
    HeroElement
  },
  setup () {
    const breakpoints = useBreakpoints(breakpointsTailwind)

    const maxMD = breakpoints.smallerOrEqual('md')

    const items = ref([
      {
        icon: 'download',
        topText: 'Скачай',
        bottomText: 'лаунчер'
      },
      {
        icon: 'check-in',
        topText: 'Установи',
        bottomText: 'лаунчер'
      },
      {
        icon: 'play',
        topText: 'Запусти',
        bottomText: 'и играй!'
      }
    ])
    return {
      items,
      maxMD
    }
  }
}
</script>
<style>
.how-to-start{
  @apply h-view max-md:h-full
}
.how-to-start__content{
  @apply flex flex-row max-md:flex-col
}
.instruction{
  @apply
  justify-normal self-center gap-y-11 my-auto ml-auto max-md:z-0 z-100 xl:z-0
  max-xl:mx-auto
  max-md:h-full max-md:justify-between max-md:absolute
}
.instruction__top{
  @apply flex flex-col max-md:justify-center gap-y-5 max-md:-z-10 max-md:absolute max-md:top-40
}
.instruction__bottom{
  @apply max-md:bottom-16 max-md:absolute max-md:self-center gap-3 flex flex-col
}
.picture-wrapper{
  @apply scale-105
}
.card-container{
  @apply flex gap-x-5 self-center max-md:gap-[2px]
}
.download-link{
  @apply w-[6.75rem] h-16 rounded-lg bg-[#242D45] bg-opacity-55 hover:bg-[#3E538A] transition-colors hover:bg-opacity-55
}
.download-link.google-play::after{
  content: "";
  position: absolute;
  background-image: url("@/assets/img/buttons/GooglePlay_logo.svg");
  background-position: center;
  background-repeat:no-repeat;
  width: 100%;
  height: 100%;
}
.download-link.rustore::after{
  content: "";
  position: absolute;
  background-image: url("@/assets/img/buttons/RuStore_logo.svg");
  background-position: center;
  background-repeat:no-repeat;
  width: 100%;
  height: 100%;
}
.instruction__buttons{
  @apply gap-x-5 gap-y-0 items-center mx-auto flex-wrap relative justify-center
  max-md:w-[238px] max-md:gap-x-3 max-md:gap-y-1
}
.instruction__buttons>*:nth-child(2) {
  @apply max-md:-order-1 order-none w-max
}
.image__wrapper{
  @apply items-start
  max-xl:items-center
  max-xl:flex-col
  max-md:self-center
}
.image__element.engineer{
  @apply translate-x-[31rem]
  max-2xl:translate-x-[15rem]
  max-xl:translate-x-[37%] max-xl:z-10
  max-md:translate-x-0 max-md:z-10

}
.image__element.woman{
  @apply translate-x-[16rem]
  max-2xl:translate-x-0
  max-xl:-translate-x-[30%]
}
.how-to-start__content.container{
  @apply max-md:!max-w-full
}

</style>
