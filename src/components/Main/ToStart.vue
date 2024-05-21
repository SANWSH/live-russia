<template>
<div class="call-to-action flex w-full z-100">
  <div class="flex flex-col w-72 items-center mx-auto gap-y-4">
    <button-a title="Начать играть" link="/how-to-start" class="text-xl w-max" @mouseover="$emit('buttonHover', true)" @mouseleave="$emit('buttonHover', false)"/>
    <small class="text-center text-base">
      Мобильная онлайн игра о России

      в которой ты станешь кем захочешь
    </small>
    <player-online-counter/>
    <slot></slot>
  </div>
</div>
</template>

<script>
import ButtonAccent from '@/components/ButtonAccent.vue'
import PlayerOnlineCounter from '@/components/PlayerOnlineCounter.vue'

export default {
  emits: ['buttonHover'],
  data () {
    return {
      online: 0,
      onlineMax: 0,
      serverName: 'Moscow'
    }
  },
  methods: {
    updateServerName (newServerName) {
      this.serverName = newServerName;
    },
    updateOnline (newOnline) {
      this.online = newOnline;
    },
    updateOnlineMax (newOnlineMax) {
      this.onlineMax = newOnlineMax;
    }
  },
  components: {
    ButtonA: ButtonAccent,
    PlayerOnlineCounter
  }
}
</script>
<style>
  .bg-custom-gradient{
    background-image: linear-gradient(to top (--tw-gradient-stops));
  }
</style>
<style scoped>
</style>
