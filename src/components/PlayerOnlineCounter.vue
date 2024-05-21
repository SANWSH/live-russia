<template>
  <div class="rounded-lg border-COUNTER_BORDER bg-COUNTER border flex flex-col relative w-32  p-[0.625rem]">
    <div class="w-100 flex items-center justify-between">
      <span class="icon-people"></span>
      <p v-if="isOnline" class="text-gray-500 font-medium"><span class="text-BASE_BUTTON">{{ online }}</span>/{{ onlineMax }}</p>
      <p v-else class="uppercase text-gray-500"> Offline </p>
    </div>
    <div class="w-100 flex items-center justify-between">
      <small class="text-gray-500">Сервер: <span class="text-white">{{ serverName }}</span></small>
      <div class="status" :style="[isOnline? 'background: #00FF47' : 'background: #606060']"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    online: Number,
    onlineMax: Number,
    serverName: String,
    status: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    isOnline () {
      return this.online > 0; // Проверяем, онлайн ли сервер
    }
  },
  mounted () {
    this.fetchServerData();
  },
  methods: {
    fetchServerData () {
      fetch('https://liverussia.online/')
        .then(response => response.json())
        .then(data => {
          const servers = data.servers;
          this.$emit('update:serverName', servers[0].name);
          this.$emit('update:online', servers[0].online);
          this.$emit('update:onlineMax', servers[0].maxonline);
        }).catch(error => {
          console.error('Error fetching server data:', error);
        });
    },
    calculateTotalOnline () {
      this.totalOnline = this.servers.reduce((total, server) => total + server.online, 0);
    }
  }
}
</script>

<style scoped>
.status {
  height: .375rem;
  width: .375rem;
  border-radius: 100%;
  margin: 0 0 0 .625rem;
}
.icon-people {
  background: url('../assets/img/people.svg') no-repeat center;
  background-size: contain;
  width: 1.25rem;
  height: 1.3rem;
}
</style>
