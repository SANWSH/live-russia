<template>
  <component :is="tagName" class="absolute w-full" v-bind="bindAttribute">
    <picture>
      <source :srcset="require(`@/assets/img/optimize/${imgSourceName}.webp`)" type="image/webp"/>
      <img :src="require(`@/assets/img/non-optimize/${imgSourceName}.${imgOriginalExt}`)" :alt="imgSourceName" class="size-full" :style="`width:${iWidth};height:${iHeight}`">
    </picture>
    <slot></slot>
  </component>
</template>

<script setup>
import { defineProps, computed, $attrs } from 'vue'
const props = defineProps({
  tagName: 'a' || 'div',
  imgSourceName: String,
  imgOriginalExt: String,
  link: String,
  iWidth: Number,
  iHeight: Number
})
const bindAttribute = computed(() => {
  return props.tagName === 'a' ? { href: props.link } : { ...$attrs }
})
</script>
