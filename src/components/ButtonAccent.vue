<template>
  <component :is="tag" :class="`button relative italic ${styleType}`" :to="link">
    {{ title }}
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
    styleType: {
      type: String,
      default: 'accent p-default'
    },
    tag: {
      type: String,
      default: 'router-link'
    }
  }
}
</script>

<style scoped>
  .button {
    @apply
    text-center
    rounded-md
    uppercase
    text-nowrap
    font-black
    cursor-pointer
  }
  .button.accent{
    @apply
    bg-BASE_BUTTON
    text-black
    hover:shadow-btn-sm
    hover:shadow-BASE_BUTTON
    transition-shadow
  }
  .button.accent-outline{
    @apply
    bg-transparent
    text-BASE_BUTTON
    hover:bg-BASE_BUTTON
    hover:text-black
    transition-all
    border border-BASE_BUTTON border-opacity-20
  }
  .accent-outline.router-link-active{
    @apply
    bg-BASE_BUTTON
    text-black
    cursor-default
  }
  .p-default{
    @apply p-5
  }
  .p-thin{
    @apply py-[0.625rem] px-4
  }
  .button.default{
    @apply
    text-white
    text-opacity-70
    hover:text-opacity-100
    transition-opacity
  }
  .button.default.router-link-active{
    @apply
    text-white
    text-opacity-100
    cursor-default
  }
</style>
