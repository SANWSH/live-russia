<template>
  <div :class="`donate relative max-lg:pt-24 ${!maxMD ? 'page-gradient' : ''}`" >
    <div class="relative w-full h-view max-md:h-full max-w-screen-2xl 4xl:max-w-[1952px] mx-auto">
      <div v-if="!maxMD" class="
      absolute -left-[17rem] top-10 h-full aspect-video
      4xl:-left-[9rem] 4xl:-top-10">
        <div class="absolute layer-0 z-0"
        :style="`transform: translateX(${ -x / 2 }rem) scale(${min2K})` ">
          <picture>
            <source srcset="@/assets/img/optimize/bg_glow_2.webp" type="image/webp"/>
            <img src="@/assets/img/non-optimize/bg_glow_2.png" alt="">
          </picture>
        </div>
        <div class="absolute bottom-0 layer-1 z-10  "
        :style="`transform: translate(${-6 + -x / 2 }rem, ${ -y }rem) scale(${min2K})`">
          <picture>
            <source srcset="@/assets/img/optimize/warehouse.webp" type="image/webp"/>
            <img src="@/assets/img/non-optimize/warehouse.png" alt="">
          </picture>
        </div>
        <div class="absolute bottom-0 -mb-14 layer-2 z-10  "
        :style="`transform: translate(${x / 4 }rem, ${ y / 2 }rem) scale(${min2K})`">
          <picture>
            <source srcset="@/assets/img/optimize/gelentwagen.webp" type="image/webp"/>
            <img src="@/assets/img/non-optimize/gelentwagen.png" alt="">
          </picture>
        </div>
        <div class="absolute bottom-0 -mb-14 layer-3 z-20  "
        :style="`transform: translateX(${(-x / 2) }rem) scale(${min2K})` ">
          <picture>
            <source srcset="@/assets/img/optimize/glow.webp" type="image/webp"/>
            <img src="@/assets/img/non-optimize/glow.png" alt="">
          </picture>
        </div>
        <div class="absolute flicker bottom-36 layer-4 z-30  "
        :style="`transform: translateX(${ -x / 2 }rem) scale(${min2K})` ">
          <picture>
            <source srcset="@/assets/img/optimize/warehouse_light.webp" type="image/webp"/>
            <img src="@/assets/img/non-optimize/warehouse_light.png" alt="">
          </picture>
        </div>
        <div class="absolute bottom-2 layer-5 z-40  "
        :style="`transform: translate(${ x }rem, ${ y / 2 }rem) scale(${min2K})`">
          <picture>
            <source srcset="@/assets/img/optimize/gangster.webp" type="image/webp"/>
            <img src="@/assets/img/non-optimize/gangster.png" alt="">
          </picture>
        </div>
      </div>
      <div :class="`relative h-full w-full z-100 flex ${!maxMD ? 'flex-row' : 'flex-col gap-7'}`">
        <input-form class="form__wrapper backdrop-blur-md"/>
        <Social v-if="maxMD" class="social pos-center"/>
      </div>
    </div>
  </div>
</template>
<script>
import InputForm from '@/components/Forms/InputForm.vue'
import Social from '@/components/Social.vue'
import { breakpointsTailwind, useBreakpoints, useMouse, useWindowSize } from '@vueuse/core'
import { computed } from 'vue'
export default {
  components: {
    InputForm,
    Social
  },
  setup () {
    const breakpoints = useBreakpoints(breakpointsTailwind)

    const { x, y } = useMouse()
    const { width } = useWindowSize()
    const screenWidth = window.innerWidth
    const limitedWidth = computed(() => width.value > 1536 ? 1536 : width.value)
    const X = computed(() => x.value / window.innerWidth)
    const Y = computed(() => y.value / window.innerWidth)
    const maxMD = breakpoints.smallerOrEqual('md')
    const min2K = computed(() => width.value > 1920 ? 1.2708 : 1)

    function change () {
      /*       const percentage = (width / x * 100)
      return percentage * (100 / percentage) */
    }

    return {
      change,
      maxMD,
      width: limitedWidth,
      screenWidth,
      min2K,
      x: X,
      y: Y
    }
  }
}
</script>
<style>
.flicker{
  animation: flicker 3s infinite
}
</style>
<style scoped>
 .form__wrapper {
  @apply max-md:m-[1.25rem_auto_0_auto] m-[auto_0_auto_auto]
}

 .social {
  @apply max-md:m-[0_auto_0_auto]
 }
 .layer-0[data-v-1c51616e] {
  @apply -top-10 left-48
 }
 .layer-2[data-v-1c51616e] {
  @apply left-[32rem] 4xl:left-[36rem]
 }
 .layer-3[data-v-1c51616e] {
  @apply -left-[10rem] 4xl:-left-[6rem]
 }
 .layer-4[data-v-1c51616e] {
  @apply left-[44.5rem] 4xl:left-[42.5rem]
 }
 .layer-5[data-v-1c51616e] {
  @apply left-[17rem]
 }
</style>
<style lang="css" scoped>
  html{
    font-size: calc-between-;
  }
</style>
