<template>
  <Transition name="smooth">
    <div class="z-preloader fixed backdrop-blur-md bg-blue-950 w-full h-full top-0" v-if="isVisible">
      <div class="flex relative w-full h-full">
        <div class="flex flex-col items-center m-auto gap-2">
          <img
          src="../assets/img/LR_logo2.svg"
          alt="Live-Russia Logo"
          class="bottom-0 w-20">
          <i class="leading-5 font-bold text-2xl">LIVE RUSSIA</i>
          <div class="flex flex-row m-auto gap-2">
            <div id="load-element" class="bottom-0"></div>
            <div id="load-element" class="bottom-0"></div>
            <div id="load-element" class="bottom-0"></div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
export default {
  setup () {
    const isVisible = ref(true)
    const router = useRouter()
    router.beforeEach((to, from, next) => {
      isVisible.value = true
      next()
    })

    router.afterEach((to, from) => {
      if (router.isReady()) {
        setTimeout(() => {
          isVisible.value = false
        }, 300)
      }
    })
    return {
      isVisible
    }
  }
}
</script>

<style>

</style>
