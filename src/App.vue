<template>
  <Transition>
    <the-preloader/>
  </Transition>
  <component :is="layoutComponent">
    <router-view/>
  </component>
</template>

<script>
import { provide, ref, computed } from 'vue';
import ThePreloader from './components/ThePreloader.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { breakpointsTailwind, useBreakpoints, useMouse } from '@vueuse/core';

export default ({
  computed: {
    layoutComponent () {
      return (this.$route.meta.layout || 'main') + '-layout'
    }
  },
  components: {
    ThePreloader, MainLayout
  },
  setup () {
    // breakpoints
    const breakpoints = useBreakpoints(breakpointsTailwind)
    const scrSmall = breakpoints.smallerOrEqual('sm')
    const scrMedium = breakpoints.smallerOrEqual('md')
    const scrLarge = breakpoints.smallerOrEqual('lg')
    const scrExtraLarge = breakpoints.smallerOrEqual('xl')
    const scr2XL = breakpoints.smallerOrEqual('2xl')

    provide('scrSmall', scrSmall)
    provide('scrMedium', scrMedium)
    provide('scrLarge', scrLarge)
    provide('scrExtraLarge', scrExtraLarge)
    provide('scr2XL', scr2XL)

    // payments options
    // ~ This is a static array used as a placeholder. It should be replaced with a function that fetches payment options from the server.
    const payments = [
      {
        to: '/payments',
        icon: '@/assets/img/icons/payments_sbp.svg'
      },
      {
        to: '/payments',
        icon: '@/assets/img/icons/payments_sbp.svg'
      },
      {
        to: '/payments',
        icon: '@/assets/img/icons/payments_sbp.svg'
      },
      {
        to: '/payments',
        icon: '@/assets/img/icons/payments_sbp.svg'
      },
      {
        to: '/payments',
        icon: '@/assets/img/icons/payments_sbp.svg'
      },
      {
        to: '/payments',
        icon: '@/assets/img/icons/payments_sbp.svg'
      }
    ]

    provide('paymentsOptions', payments)

    // parallax
    const { x, y } = useMouse()
    const X = computed(() => x.value / window.innerWidth)
    const Y = computed(() => y.value / window.innerWidth)

    provide('parallaxX', X)
    provide('parallaxY', Y)

    const fontSize = ref('16px')

    return {
      fontSize
    };
  }
})
</script>

<style lang="css">
#app {
  font-family: "Roboto Flex", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
}
  a.router-link-exact-active {
  opacity: 1;
  user-select: none;
  cursor: default;
}
.page-gradient::after{
  content: "";
  @apply absolute bg-[linear-gradient(to_top,#00092E_0%,#00092E_54%,#00092E00_100%)] -bottom-[7.5rem] w-full aspect-[360/377] max-h-[377px] z-[1000] left-0
}
.page-gradient-bottom::after{
  content: "";
  @apply absolute bg-gradient-to-t from-BASE_BACKGROUND bottom-0 w-full aspect-[360/377] max-h-[23.5rem] z-[1000] left-0
}
.page-gradient::after,.page-gradient-bottom::after{
  @apply select-none pointer-events-none
}
.donate{
  @apply max-md:pt-24
}
.home{
  @apply max-lg:pt-24 max-md:pt-0
}
.home.page-gradient::after{
  @apply max-lg:max-h-[calc(291rem/16)] bg-[linear-gradient(to_top,#00092E_0%,#00092E_46%,#00092E00_100%)]
}
</style>
