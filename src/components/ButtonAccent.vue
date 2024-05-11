<template>
  <component :is="tag" class="button relative" :to="link">
      <span class="italic-text block"> {{ title }} </span>
  </component>
</template>

<script>

export default {
  props: {
    title: String,
    link: {
      type: String,
      default: '/'
    },
    tag: {
      type: String,
      default: 'router-link'
    }
  },
  setup () {

  }
}
</script>

<style>
  .button {
    @apply p-5
    text-center
    font-extrabold
    bg-BASE_BUTTON
    text-black
    rounded-md
    uppercase
    hover:shadow-btn-sm
    hover:shadow-BASE_BUTTON
    transition-shadow
    text-nowrap
  }
</style>
