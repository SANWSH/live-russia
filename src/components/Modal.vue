<template>
  <Transition name="smooth">
    <div v-if="isOpen" class="modal">
      <slot></slot>
    </div>
  </Transition>
</template>

<script setup>
/* eslint-disable */
import { ref, watch, defineEmits } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps({
  isOpenValue: Boolean,
  isClickOutside: Boolean
})
const emits = defineEmits({
  'update:isOpenValue': null
})
const isOpen = ref(props.isOpenValue)
 function setScrollState (bool) {
  bool ? document.body.classList.add('blocked') : document.body.classList.remove('blocked')
 }
 watch(() => props.isOpenValue, (newVal) => {
  isOpen.value = newVal
  setScrollState(newVal)
})
</script>

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    @apply backdrop-blur-lg z-[10000] bg-BASE_BACKGROUND bg-opacity-80 flex flex-col
  }
</style>
