<template>
  <Transition>
    <the-preloader/>
  </Transition>
  <component :is="layoutComponent">
    <router-view/>
  </component>
</template>

<script>
import { provide, ref, computed, watch } from 'vue';
import ThePreloader from './components/ThePreloader.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { breakpointsTailwind, useBreakpoints, useMouse } from '@vueuse/core';
import { useRouter } from 'vue-router';

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
    const router = useRouter()
    // modal
    const isOpenModalHeader = ref(false)
    const isOpenModalPayments = ref(false)
    provide('modalOpenHeader', isOpenModalHeader)
    provide('modalOpenPayments', isOpenModalPayments)

    watch(() => [isOpenModalHeader, isOpenModalPayments], ([newIsOpenModalHeader, newIsOpenModalPayments]) => {
      const isOpen = newIsOpenModalHeader || newIsOpenModalPayments
      if (!isOpen) {
        document.body.classList.remove('blocked')
      }
    },
    {
      immediate: true
    })

    router.beforeEach((to, from, next) => {
      if (document.body.classList.contains('blocked')) {
        isOpenModalHeader.value = false
        isOpenModalPayments.value = false
      }
      next()
    })
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
    const payments = [
      {
        isInternational: false,
        to: 'card',
        icon: require('@/assets/img/icons/pay/payments_debit.svg')
      },
      {
        isInternational: false,
        to: 'tinkoff',
        icon: require('@/assets/img/icons/pay/payments_tinkoff.svg')
      },
      {
        isInternational: true,
        to: 'card',
        icon: require('@/assets/img/icons/pay/payments_debit.svg')
      },
      {
        isInternational: false,
        to: 'sbp',
        icon: require('@/assets/img/icons/pay/payments_sbp.svg')
      },
      {
        isInternational: true,
        to: 'sbp',
        icon: require('@/assets/img/icons/pay/payments_sbp.svg')
      },
      {
        isInternational: false,
        to: 'yandex',
        icon: require('@/assets/img/icons/pay/payments_yandex.svg')
      },
      {
        isInternational: true,
        to: 'wm',
        icon: require('@/assets/img/icons/pay/payments_wmz.svg')
      },
      {
        isInternational: true,
        to: 'tether',
        icon: require('@/assets/img/icons/pay/payments_usdt.svg')
      },
      {
        isInternational: false,
        to: 'pokupko',
        icon: require('@/assets/img/icons/pay/payments_pokupko.svg')
      }
    ]

    provide('paymentsOptions', payments)

    // parallax
    const { x, y } = useMouse()
    const X = computed(() => x.value / window.innerWidth)
    const Y = computed(() => y.value / window.innerWidth)

    provide('parallaxX', X)
    provide('parallaxY', Y)
  }
})
</script>

<style lang="css">
#app {
  @apply font-roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
}
  a.router-link-exact-active {
  opacity: 1;
  user-select: none;
}
.page-gradient::after{
  content: "";
  @apply absolute bg-gradient-to-t from-BASE_BACKGROUND bottom-0 w-full z-[1000] left-0
}
.page-gradient::after,.page-gradient-bottom::after{
  @apply select-none pointer-events-none
}
.donate{
  @apply max-md:pt-24
}
.home{
  @apply max-md:pt-0
}
.page-gradient::after{
  content: "";
  @apply absolute bg-[linear-gradient(to_top,#00092E_0%,#00092E00_100%)] -bottom-0 w-full h-[20.375rem] z-[1000] left-0
}
</style>
