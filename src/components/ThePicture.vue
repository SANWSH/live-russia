<template>
  <picture>
    <source :srcset="source" type="image/webp">
    <img :src="altSource" alt="">
  </picture>
</template>

<script>
export default {
  props: ['source', 'altSource', 'alt'],
  setup (props) {

  }
}
</script>

<style>

</style>
