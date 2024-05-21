<template>
  <div class="flex justify-between w-44 h-max">
    <a
    class="hover:scale-110 transition-transform"
    :href="item.link"
    v-for="(item, i) in items"
    :key="item[i]">
      <img :src="item.src" :alt="item.alt"  class="size-[2.125rem]"/>
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
          link: '//t.me/lr_dev'
        },
        {
          src: require('../assets/img/anchors/vk.svg'),
          alt: 'VK',
          link: '//vk.com/liverussia.online'
        },
        {
          src: require('../assets/img/anchors/discord.svg'),
          alt: 'Discord',
          link: '//discord.com/invite/pkT6SEEXKS'
        }
      ]
    }
  }
}
</script>
