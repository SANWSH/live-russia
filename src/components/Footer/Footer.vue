<template>
  <footer class="relative z-[9998]">
    <div class="container mx-auto ">
      <div class="grid grid-cols-12 grid-rows-subgrid gap-y-5 max-lg:px-2 lg:gap-y-0 lg:grid-rows-2 relative my-0 max-md:my-12">
        <!-- logo-render -->
        <div class="flex flex-col items-start col-span-4 order-1 lg:order-none lg:col-span-2 lg:row-span-1 lg:h-fit">
          <div class="flex flex-row">
            <router-link class="logo w-9 h-auto relative" to="/">
              <img class="my-auto" src="../../assets/img/LR_logo2.svg" alt="Logo" />
              <i class="logo__title leading-5 text-sm">LIVE RUSSIA</i>
            </router-link>
          </div>
        </div>
        <!-- contacts render -->
        <div class="col-span-12 order-3 w-fit flex flex-col gap-y-3 md:col-span-3 lg:order-1 lg:col-span-2 lg:row-span-1 md:col-start-1 sm:col-start-auto">
          <h3 class="font-semibold text-left text-sm">Контакты</h3>
          <a href="mailto:LIVERUSSIA.ONLINE@MAIL.RU" class="font-normal text-gray-400 text-xs hover:text-gray-100 text-left flex">LIVERUSSIA.ONLINE@MAIL.RU</a>
        </div>
        <!-- menu render -->
        <div class="col-span-12 flex order-2 justify-between md:gap-[25%] md:col-span-6 lg:order-none lg:col-span-3 lg:row-span-2">
          <div v-for="menuItem in menu" :key="menuItem.name" class="text-left mr-3">
            <h3 class="font-semibold text-left mb-3 text-sm">{{ menuItem.name }}</h3>
            <ul>
              <li v-for="item in menuItem.list" :key="item.title"
              class="">
                <a :href="item.link" class="text-left text-gray-400 font-normal transition-colors hover:text-gray-100 text-xs">{{ item.title }}</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- payments render -->
        <div class="col-span-8 order-1 flex lg:block justify-end lg:order-none lg:col-span-3 lg:row-span-12">
          <div class="flex flex-row gap-3 justify-self-end">
            <router-link to="/donate" v-for="({ img, alt }, i) in items" :key="items[i]" class="payment-method group">
              <img :src="img" :alt="alt" class="group-hover:scale-110 transition group-hover:brightness-125 h-full">
            </router-link>
          </div>
        </div>
        <!-- social media render -->
        <div class="col-span-12 order-4 mx-auto lg:order-none lg:col-span-2 lg:row-span-2">
          <social class=" min-[640]:width-full"/>
        </div>
        <!-- button render -->
        <div class="col-span-12 relative order-5 lg:order-none lg:col-span-2 lg:row-span-2">
          <button-accent
          link="/how-to-start"
          title="Начать играть"
          class="flex w-fit lg:m-[0,0,4rem,0] m-auto text-sm"/>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from 'vue'
import Social from '../Social.vue'
import ButtonAccent from '../ButtonAccent.vue'

export default {
  components: { Social, ButtonAccent },
  setup () {
    const menu = ref([
      {
        name: 'Меню',
        list: [
          { title: 'Главная', link: '/' },
          { title: 'Форум', link: '//https://forum.liverussia.online/index.php' },
          { title: 'Начать играть', link: '/how-to-start' },
          { title: 'Пополнить счет', link: '/donate' }
        ]
      },
      {
        name: 'Важная информация',
        list: [
          { title: 'Договор оферты', link: '/' },
          { title: 'Политика конфиденциальности', link: '/privacy' }
        ]
      }
    ])
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
      items
    }
  }
}
</script>
