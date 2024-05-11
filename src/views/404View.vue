<template>
  <div class="not-found">
    <Teleport to="#app">
      <div class="background grayscale opacity-50 !h-full"></div>
    </Teleport>
    <div class="not-found__message w-[44rem] self-center items-center gap-3">
      <h1 class="not-found__text text-4xl font-bold">Страница {{ $route.params.pathMatch[0] }} не найдена</h1>
      <h1 class="text-2xl -skew-x-12 font-medium">Код ошибки: <span class="not-found__text--accent">404</span></h1>
      <button-accent title="Вернуться на главную" link="/" class="mt-6 block w-max"/>
    </div>
  </div>
</template>

<script>
import ButtonAccent from '../components/ButtonAccent.vue'
export default {
  components: {
    ButtonAccent
  }

}
</script>

<style>
  .not-found{
    @apply my-auto h-[100vh] relative flex flex-col
  }
  .not-found>*{
    @apply my-auto
  }
  .not-found__text--accent{
    @apply bg-gradient-to-r from-[#089EB6] to-cyan-200 bg-clip-text text-transparent font-extrabold text-4xl
  }
  .not-found__message{
    @apply flex flex-col
  }
</style>
