<template>
  <header></header>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="fadeLong" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <footer></footer>
</template>

<script>
export default {

}
</script>

<style>
</style>
