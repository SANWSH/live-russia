<template>
  <Transition name="fade">
    <div class="z-upper fixed backdrop-blur-md bg-blue-950 w-full h-full top-0" v-if="isVisible">
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
import { ref, onMounted } from 'vue'
export default {
  setup () {
    const isVisible = ref(true)
    onMounted(() => {
      window.addEventListener('load', () => {
        setTimeout(() => {
          isVisible.value = false
        }, 500)
      })
    })
    return {
      isVisible
    }
  }
}
</script>

<style>

</style>
