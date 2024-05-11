<template>
  <div class="flex justify-between w-44">
    <a
    class="hover:scale-110 transition-transform"
    v-for="(item, i) in items"
    :key="item[i]">
      <img :src="item.src" :alt="item.alt" />
    </a>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          src: require('../assets/img/anchors/tg.svg'),
          alt: 'Telegram',
          link: 'https://t.me/'
        },
        {
          src: require('../assets/img/anchors/vk.svg'),
          alt: 'VK',
          link: 'https://vk.com/'
        },
        {
          src: require('../assets/img/anchors/discord.svg'),
          alt: 'Discord',
          link: 'https://discord.gg/'
        }
      ]
    }
  }
}
</script>
