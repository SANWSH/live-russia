<template>
  <div class="rounded-lg border-COUNTER_BORDER bg-COUNTER border flex flex-col relative max-w-36 p-3">
    <div class="w-100 flex items-center justify-between">
      <span class="icon-people"></span>
      <p v-if="status"  class="text-gray-500 font-medium"><span class="text-BASE_BUTTON">{{online}}</span>/{{onlineMax}}</p>
      <p v-else class="uppercase text-gray-500"> Offline </p>
    </div>
    <div class="w-100 flex items-center justify-between">
      <small class="text-gray-500">Сервер: <span class="text-white">Москва</span></small>
      <div class="status" :style="[status? 'background: #00FF47' : 'background: #606060']"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    online: Number,
    onlineMax: Number,
    status: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
.status{
  height: 5px;
  width: 5px;
  border-radius: 100%;
  margin: 0 0 0 5px;
}
.icon-people{
  background: url('../assets/img/people.svg') no-repeat center;
  background-size: contain;
  width: 1.25rem;
  height: 1.3rem;
}
</style>
