<template>
  <Header/>
  <main>
      <router-view v-slot="{ Component }">
        <transition name="fadeLong" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  <Footer/>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
</style>
