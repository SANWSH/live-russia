<template>
    <div class="modal">
      <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style>
  .modal {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    @apply backdrop-blur-lg z-[10000] bg-BASE_BACKGROUND bg-opacity-80 flex flex-col
  }
</style>
