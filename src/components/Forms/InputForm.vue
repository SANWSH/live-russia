<template>
  <div class="form after:content-[--value]">
    <form :method="formMethod" @submit.prevent="onSubmit">
      <input-element ref="server"
      Type="dropdown"
      icon="dns_icon"
      Placeholder="Выберите сервер"
      :Items="servers"/>
      <small></small>
      <input-element ref="nickname"
      Type="text"
      icon="person_icon"
      Placeholder="Введите имя персонажа"
      Name="name"
      />
      <small></small>
      <input-element ref="donate"
      Type="text"
      icon="ruble_icon"
      Placeholder="Введите сумму пополнения"
      Name="amount"
      />
      <small></small>
      <input-element
      ref="email"
      Type="text"
      icon="mail_icon"
      Placeholder="Введите ваш e-mail"
      Name="email"
      />
      <small></small>
      <strong class="italic">1₽ = 1LC</strong>
      <button-accent
      tag="button"
      class="text-xl"
      title="Перейти к оплате"
      @click="openPayments"></button-accent>
      <Teleport v-if="isModalOpen" to="body">
        <Modal class="!z-[9999]">
          <div class="payments flex flex-col self-center">
            <div class="payments__inputs flex w-full">
              <div class="flex flex-col w-full">
                <small class="input__title">Игровой никнейм</small>
                <input-element ref="nickname"
                Type="text"
                icon="!icon"
                Label="Игровой никнейм"
                Placeholder="Имя"
                Name="name"
                class="!w-full"
                />
              </div>
              <div class="flex flex-col w-full">
                <small class="input__title">Сумма пополнения</small>
                <input-element ref="donate"
                Type="text"
                icon="!icon"
                Label="Сумма пополнения"
                Placeholder="Сумма"
                Name="amount"
                class="!w-full"
                />
              </div>
            </div>
            <div class="payments__buttons">
              <button class="buttons__item" v-for="item in payments" :key="item">
                <img :src="require('@/assets/img/icons/payments_sbp.svg')" alt="">
              </button>
            </div>
            <button-accent
            tag="button"
            @click="openPayments" title="Назад" class="mt-5"></button-accent>
          </div>
        </Modal>
      </Teleport>

    </form>
  </div>
</template>

<script>
import InputElement from '@/components/Forms/InputElement.vue'
import ButtonAccent from '../ButtonAccent.vue'
import { ref, inject } from 'vue'
import Modal from '../Modal.vue';

export default {
  components: {
    InputElement,
    ButtonAccent,
    Modal
  },
  props: {
    formMethod: {
      type: String,
      default: 'POST'
    }
  },
  setup () {
    const isModalOpen = ref(false)
    const openPayments = event => {
      !isModalOpen.value ? isModalOpen.value = true : isModalOpen.value = false
    }
    const payments = inject('paymentsOptions')
    const servers = [
      { title: 'Firemaw' },
      { title: 'Golemagg' },
      { title: 'Arugal' },
      { title: 'Whitemane' }
    ]

    // validation logic
    const server = ref(null)
    const nickname = ref(null)
    const donate = ref(null)
    const email = ref(null)

    return {
      servers,
      server,
      nickname,
      donate,
      email,
      isModalOpen,
      openPayments,
      payments
    }
  }
}
</script>
<style>
.form {
  @apply w-80 rounded-xl bg-gradient-to-t from-[#089EB625] to-[#00133725] p-[0.625rem] border border-cyan-300 border-opacity-10 box-content;
}
  .form.danger {
  @apply border-red-700
}
.input__title{
  @apply !text-xs text-nowrap mb-1 !text-white font-normal
}
.payments{
  @apply bg-BASE_BACKGROUND max-w-max my-auto p-3 rounded-lg border-white border-opacity-10 border
  max-md:h-full max-md:max-w-full max-md:self-auto max-md:pt-28
}
.payments__inputs>*:nth-child(1){
  flex-shrink: 1;
}
.payments__inputs>*:nth-child(2){
  flex-shrink: 2;
}
.payments__inputs {
  @apply gap-x-2 self-center
}
.payments__buttons{
  @apply grid grid-cols-2 gap-[0.625rem] mt-5
}
.buttons__item{
  @apply aspect-[164/80] w-full bg-[#022648] hover:brightness-125 basis-[49.1%] hover:scale-105 transition-all bg-opacity-50 border border-white border-opacity-10 rounded-lg justify-center items-center
}
.buttons__item>img{
  @apply m-auto
}
</style>
<style scoped>
form {
  @apply flex flex-col gap-[0.625rem]
}
small{
  @apply text-sm font-normal text-left text-red-700
}
</style>
