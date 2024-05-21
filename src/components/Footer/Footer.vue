<template>
  <footer class="relative">
    <div class="grid container mx-auto justify-between ">
      <!-- menu render -->
      <div class="menu w-max flex-shrink-[1]">
        <div v-for="menuItem in menu" :key="menuItem.name" class="text-left max-md:text-center">
          <ul>
            <li v-for="item in menuItem.list" :key="item.title"
            class="">
              <a :href="item.link" class="text-left text-gray-400 font-normal transition-colors hover:text-gray-100 text-xs">{{ item.title }}</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- logo-render -->
      <div class="grid-logo flex flex-col w-max flex-shrink-[2]">
        <div class="flex flex-row">
          <router-link class="logo h-auto relative" to="/">
            <img class="logo-image my-auto" src="../../assets/img/LR_logo2.svg" alt="Logo" style="width:2.4375rem; height: 2.625rem" />
            <span class="logo-title leading-5 italic">LIVE RUSSIA</span>
          </router-link>
        </div>
      </div>
      <!-- payments render -->
      <div class="payments-options flex w-max justify-center">
        <div class="flex flex-col gap-3 ">
          <div class="flex flex-row gap-3">
            <router-link to="/donate" v-for="({ img, alt }, i) in items" :key="items[i]" class="payment-method group">
            <img :src="img" :alt="alt" class="group-hover:scale-110 transition group-hover:brightness-125 h-[2.25rem]">
            </router-link>
          </div>
          <a href="mailto:LIVERUSSIA.ONLINE@MAIL.RU" class="font-normal self-center text-gray-400 text-xs hover:text-gray-100 text-left flex">LIVERUSSIA.ONLINE@MAIL.RU</a>
        </div>
      </div>
      <!-- info rendering -->
      <div class="info flex w-max">
        <div v-for="menuItem in info" :key="menuItem.name" class="text-right max-md:text-center">
          <ul>
            <li v-for="item in menuItem.list" :key="item.title">
              <component :is="item.tag" v-bind:[item.attribute]="item.link" class="text-gray-400 font-normal transition-colors hover:text-gray-100 text-xs">{{ item.title }}</component>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const menu = [
      {
        name: 'Меню',
        list: [
          { title: 'Главная', link: '/', tag: 'router-link', attribute: 'to' },
          { title: 'Форум', link: '//forum.liverussia.online/index.php', tag: 'a', attribute: 'href' },
          { title: 'Пополнить счет', link: '/donate', tag: 'router-link', attribute: 'to' }
        ]
      }]
    const info = [
      {
        name: 'Важная информация',
        list: [
          { title: 'Договор оферты', link: '//liverussia.online/public_offer.docx', tag: 'a', attribute: 'href' },
          { title: 'Политика конфиденциальности', link: '//liverussia.online/privacy', tag: 'a', attribute: 'href' }
        ]
      }
    ]

    const items = ref([
      {
        img: require('@/assets/img/mir.svg'), alt: 'mir-icon'
      },
      {
        img: require('@/assets/img/mastercard.svg'), alt: 'mastercard-icon'
      },
      {
        img: require('@/assets/img/sbp.svg'), alt: 'sbp-icon'
      }
    ])
    return {
      menu,
      info,
      items
    }
  }
}
</script>
<style scoped>
  footer{
    @apply bottom-0 z-[9998]
  }
  .grid>div{
  }
  div.grid{
    @apply grid-cols-6 max-md:gap-5 max-w-[80vh] mx-auto max-lg:max-w-[50rem]
  }
  .grid-logo{
    @apply col-span-1 col-start-2
    max-md:col-start-1 max-md:col-span-6 max-md:items-center max-md:justify-self-center max-md:row-start-2
  }
  .payments-options{
    @apply col-span-2 col-start-3 justify-self-center
    max-md:col-start-1 max-md:col-span-6 max-md:items-center max-md:justify-self-center max-md:row-start-3
  }
  .menu{
    @apply col-span-1 row-span-1 row-start-1
    max-md:col-start-1 max-md:col-span-6 max-md:items-center max-md:justify-self-center max-md:row-start-1
  }
  .info{
    @apply col-span-2 col-start-5 justify-self-end
    max-md:col-start-1 max-md:col-span-6 max-md:items-center max-md:justify-self-center max-md:row-start-4
  }
  .menu,.info,.contacts{
    @apply flex flex-col
  }
</style>
