<template>
  <div class="donate relative" >
    <teleport v-if="!maxMD" to="#background">
      <div class="background donate-page absolute"></div>
    </teleport>
    <div class="relative donate-content max-md:h-full max-w-full mx-auto">
      <div v-if="!maxMD" class="donate-background
      absolute">

        <div class="absolute layer-1 z-10 flex items-end aspect-[916/639]"
        :style="`transform: translate(${-x / 2 }rem, ${ -y }rem)`">
          <picture>
            <source srcset="@/assets/img/optimize/warehouse.webp" type="image/webp"/>
            <img src="@/assets/img/non-optimize/warehouse.png" alt="" class="size-full">
          </picture>
        </div>

        <div class="absolute layer-2 z-10 flex items-end aspect-[828/799]"
        :style="`transform: translate(${x / 4 }rem, ${ y / 2 }rem)`">
          <picture>
            <source srcset="@/assets/img/optimize/gelentwagen.webp" type="image/webp"/>
            <img src="@/assets/img/non-optimize/gelentwagen.png" alt="" class="size-full">
          </picture>
        </div>

        <div class="absolute layer-3 z-20 flex items-end "
        :style="`transform: translateX(${(-x / 2) }rem)` ">
          <picture>
            <source srcset="@/assets/img/optimize/glow.webp" type="image/webp"/>
            <img src="@/assets/img/non-optimize/glow.png" alt="" class="size-full">
          </picture>
        </div>

        <div class="absolute layer-4 flicker z-30 flex items-end aspect-[1137/799]"
        :style="`transform: translateX(${-x / 2 }rem)` ">
          <picture>
            <source srcset="@/assets/img/optimize/warehouse_light.webp" type="image/webp"/>
            <img src="@/assets/img/non-optimize/warehouse_light.png" alt="" class="size-full">
          </picture>
        </div>

        <div class="absolute layer-5 z-40 flex items-end"
        :style="`transform: translate(${ x }rem, ${ y / 2 }rem);`  ">
          <picture>
            <source srcset="@/assets/img/optimize/gangster.webp" type="image/webp"/>
            <img src="@/assets/img/non-optimize/gangster.png" alt="" class="size-full">
          </picture>
        </div>

    </div>
    <div :class="`relative h-full w-full z-[1150] flex ${!maxMD ? 'flex-row' : 'flex-col gap-7'}`">
      <input-form class="form-wrapper backdrop-blur-md" form-method="GET"/>
    </div>
    </div>
  </div>
</template>
<script>
import InputForm from '@/components/Forms/InputForm.vue'
import { breakpointsTailwind, useBreakpoints, useMouse, useWindowSize } from '@vueuse/core'
import { computed } from 'vue'
export default {
  components: {
    InputForm
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

    function change () {
      /*       const percentage = (width / x * 100)
      return percentage * (100 / percentage) */
    }

    return {
      change,
      maxMD,
      width: limitedWidth,
      screenWidth,
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
.layer-wrapper{
  @apply absolute
}
 .form-wrapper {
  @apply max-md:m-[1.25rem_auto_0_auto] m-[auto_0_auto_auto]
}
 .social {
  @apply max-md:m-[0_auto_0_auto]
 }
 .layer-0 {
  @apply left-[10%]
 }
 .layer-1{
  @apply left-0
 }
 .layer-2 {
  @apply left-[40.16%] max-xl:left-[43.33%]
 }
 .layer-3 {
  @apply left-0
 }
 .layer-4 {
  @apply left-[13rem]
 }
 .layer-5 {
  @apply left-[24.5%] max-xl:left-[33.33%]
 }
 .donate.page-gradient::after{
  @apply h-40 bg-gradient-to-t from-BASE_BACKGROUND w-[100vw] bottom-0
 }
 .donate{
  @apply h-full max-md:overflow-x-clip
 }
 .donate-background{
  @apply h-full w-full aspect-[1704/852] -left-68 max-xl:-left-44
 }
 .donate-content{
  @apply h-full w-full mx-auto
 }
 .layer-0,.layer-1,.layer-2,.layer-3,.layer-4,.layer-5{
  @apply h-full top-0
 }
</style>
<style lang="css" scoped>

</style>
