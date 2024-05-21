<template>
  <header
  class="header flex backdrop-blur-md"
  :style="y > 20 && !!maxLG || !maxLG ? 'top:0' : 'top:1.5rem'">
    <router-link class="logo" to="/">
      <img class="logo-image my-auto" src="../../assets/img/LR_logo2.svg" alt="Logo" style="width:2.4375rem; height: 2.625rem" />
      <span class="logo-title leading-5 italic">LIVE RUSSIA</span>
    </router-link>
    <div v-if="!maxLG" class="ml-20 flex justify-between w-full items-center">
      <social/>
      <nav class="flex align-middle">
        <ul class="flex flex-row gap-24 items-center">
          <li
          v-for="(item, i) in items"
          :key="item[i]">
          <component :is="item.tag" v-bind="item.attrs"
           class="nav-link italic">
           {{item.title}}
          </component>
          </li>
        </ul>
      </nav>
      <button-accent
      link="/donate"
      title="Пополнить счет"
      styleType="accent-outline p-thin"
      />
    </div>
    <button v-else class="burger" @click="openModal"></button>
    <teleport to="body">
        <Modal :isOpenValue="modal" :is-click-outside="true">
          <div class="relative h-16 w-100% p-3 mt-5 flex items-center" >
            <router-link class="logo" to="/">
              <img class="logo-image my-auto" src="../../assets/img/LR_logo2.svg" alt="Logo" />
              <i class="logo-title leading-5">LIVE RUSSIA</i>
            </router-link>
            <button class="close" @click="openModal"></button>
          </div>
          <div class="nav flex flex-col gap-[1.875rem] h-[100%] relative items-center">
            <div class="nav-menu relative flex flex-col text-lg my-auto font-medium items-center -top-16 gap-8">
              <nav>
                <ul class="flex flex-col gap-8 items-center">
                  <li
                  v-for="(item, i) in items"
                  :key="item[i]">
                  <component :is="item.tag" v-bind="item.attrs"
                  class="nav-link italic">
                  {{item.title}}
                  </component>
                  </li>
                  <li>
                    <button-accent
                    link="/donate"
                    title="Пополнить счет"
                    styleType="default"
                    />
                  </li>
                </ul>
              </nav>
              <button-accent
                link="/how-to-start"
                title="Начать играть"
                class="flex w-fit lg:m-[0,0,4rem,0] m-auto text-sm"/>
              <social/>
            </div>
          </div>
        </Modal>
    </teleport>
  </header>
</template>
<script>
import Social from '../Social.vue'
import Modal from '../Modal.vue'
import ButtonAccent from '../ButtonAccent.vue'

import { inject, ref } from 'vue'
export default {
  components: { Social, Modal, ButtonAccent },
  setup () {
    const maxLG = inject('scrLarge')

    const items = [
      {
        title: 'главная',
        tag: 'router-link',
        attrs: { to: '/' }
      },
      {
        title: 'форум',
        tag: 'a',
        attrs: { href: '//forum.liverussia.online/index.php' }
      }
    ]
    const isMobile = ref(false)
    const modal = inject('modalOpenHeader')
    const openModal = () => {
      modal.value ? modal.value = false : modal.value = true
    }
    return {
      isMobile,
      items,
      modal,
      openModal,
      maxLG
    }
  }
}
</script>
<style scoped lang="css">
  .header-list {
    display: flex;
    justify-content: space-between;
  }
  .header{
      @apply relative z-upper mt-0 w-full
      border-CYAN border border-opacity-10 rounded-xl max-w-8xl mx-auto
      bg-gradient-to-r from-HEADER_GRADIENT_COLOR_1 to-HEADER_GRADIENT_COLOR_2 p-[0.625rem]
      max-lg:absolute max-lg:max-w-[96%] max-lg:self-center
  }
  .header-button{
    @apply bg-transparent px-4 p-[0.625rem] border border-opacity-20
    border-BASE_BUTTON rounded-md text-base/[1.125rem]
    text-BASE_BUTTON font-extrabold uppercase
    hover:bg-BASE_BUTTON hover:text-black transition-colors
  }
  .header-link {
    @apply font-black uppercase opacity-70 hover:opacity-100 text-white transition-opacity
  }
  .burger-menu {
    @apply absolute inset-0 flex flex-col h-full
  }
  .burger{
    @apply absolute w-[1.875rem] h-4 self-center right-5 active:opacity-60;
    background: url('@/assets/img/buttons/burger.svg') center no-repeat;
    background-size: contain;
  }

</style>
<style>
.close{
  @apply absolute w-[1.125rem] h-[1.125rem] self-center right-8 active:opacity-60;
  background: url('@/assets/img/buttons/close.svg');
}
</style>
