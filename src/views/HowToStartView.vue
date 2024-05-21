<template>
  <div class="how-to-start relative overflow-hidden">
    <teleport v-if="!maxMD" to="#background">
      <div class="background hts-page  absolute"></div>
    </teleport>
    <div class="how-to-start-content">
      <div v-if="!maxMD" class="image-wrapper relative h-full flex w-full">
        <hero-element
        imgSourceName="engineer"
        imgOriginalExt="png"
        tagName="div"
        class="absolute bottom-0 -mb-[5.5rem] aspect-ratio[382/1020] h-[calc(100vh-7.875rem)] -right-24 image-element engineer z-50"
        >
        </hero-element>
        <hero-element
        imgSourceName="woman"
        imgOriginalExt="png"
        tagName="div"
        class="absolute bottom-0 -mb-[5.5rem] aspect-ratio[366/1020] h-[calc(100vh-7.875rem)] right-[7.75rem] w-auto image-element woman"
        >
        </hero-element>
      </div>
      <div v-else class="relative h-full flex w-full justify-center mt-32 aspect-[429/646]">
        <div class="mobile-images-wrapper w-full h-auto  flex justify-center">
          <hero-element
          imgSourceName="busya_n_kolya"
          imgOriginalExt="png"
          tagName="div"
          class="absolute top-0 -mt-10 aspect-[429/646] z-50 max-[553px]:top-0 min-w-[430px] scale-110"
          >
          </hero-element>
          <hero-element
          imgSourceName="mobile_screen_02"
          imgOriginalExt="png"
          tagName="div"
          class="absolute left-0 top-0 aspect-[429/646] scale-110 "
          >
          </hero-element>
        </div>
      </div>
      <div class="instruction flex flex-col">
        <div class="instruction-top self-center">
          <h2 class="instruction-title font-bold text-2xl max-md:text-base uppercase text-BASE_BUTTON">Начать игру - просто</h2>
          <div class="card-container">
            <the-card v-for="(item, i) in items" :icons="item.icon" :number="`0${i+1}`" :topText="item.topText" :bottomText="item.bottomText" :key="item[i]"/>
          </div>
        </div>
        <div class="instruction-bottom">
            <div class="instruction-buttons flex flex-row z-[1110]">
            <a href="//" class="download-link flex google-play border border-[#FFFFFF] border-opacity-10 backdrop-blur-lg"></a>
              <button-accent tag="a" href="//files.liverussia.online/apk/release/app-ver_release-release.apk" title="Скачать лаунчер" class="text-xl"/>
              <a href="//" class="download-link rustore flex border border-[#FFFFFF] border-opacity-10 backdrop-blur-lg"></a>
            </div>
            <p class="w-full">Ждем тебя на заводе</p>
        </div>
      </div>
      <div v-if="maxMD" class="instruction-bottom absolute z-[1110]">
        <div class="instruction-buttons flex flex-row">
        <a href="//play.google.com/store/apps/details?id=com.liverussia.online&hl=en&gl=US" class="download-link flex google-play border border-[#FFFFFF] border-opacity-10 backdrop-blur-lg"></a>
          <button-accent title="Скачать лаунчер" class="text-xl"/>
          <a href="//www.rustore.ru/catalog/app/com.liverussia.cr" class="download-link rustore flex border border-[#FFFFFF] border-opacity-10 backdrop-blur-lg"></a>
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

    const maxMD = breakpoints.smaller('md')

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
  @apply h-full
}
.how-to-start-content{
  @apply flex flex-row max-md:flex-col h-full max-xl:w-full max-xl:items-center max-xl:mx-auto
}
.instruction{
  @apply
  justify-normal self-center gap-y-11 my-auto ml-auto max-md:z-0 z-100 xl:z-0
  max-xl:mx-auto
  max-md:h-full max-md:justify-between max-md:absolute
}
.instruction-top{
  @apply flex flex-col
  max-md:justify-center max-md:-z-10 max-md:absolute max-md:top-[10rem]
  gap-y-5
}
.instruction-bottom{
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
.download-link{
  @apply relative flex
}
.download-link.google-play::after{
  content: "";
  position: absolute;
  background-image: url("@/assets/img/buttons/GooglePlay_logo.svg");
  background-position: center;
  background-repeat:no-repeat;
  background-size: 80% 100%;
  width: 100%;
  height: 100%;
  align-self: center;
}
.download-link.rustore::after{
  content: "";
  position: absolute;
  background-image: url("@/assets/img/buttons/RuStore_logo.svg");
  background-position: center;
  background-repeat:no-repeat;
  background-size: 80% 100%;
  width: 100%;
  height: 100%;
}
.instruction-buttons{
  @apply gap-x-5 gap-y-0 items-center mx-auto flex-wrap relative justify-center
  max-md:w-[238px] max-md:gap-x-3 max-md:gap-y-1
}
.instruction-buttons>*:nth-child(2) {
  @apply max-md:-order-1 order-none w-max
}
.image-wrapper{
  @apply items-start
  max-xl:items-center
  max-xl:flex-col
  max-md:self-center
  flex relative max-xl:absolute max-xl:w-full mx-auto bottom-0 items-center
}
.image-element.engineer{
  @apply w-auto
  max-xl:right-auto max-xl:translate-x-20 max-xl:h-full

}
.image-element.woman{
  @apply w-auto
  max-xl:right-auto max-xl:-translate-x-36 max-xl:h-full
}
.how-to-start-content.container{
  @apply max-md:!max-w-full
}
.how-to-start.page-gradient::after{
  content: "";
  @apply h-36 -bottom-2 w-full absolute bg-gradient-to-t from-BASE_BACKGROUND
}

</style>
