<template>
  <div class="form">
    <form method="GET" @submit.prevent="onSubmit">
      <input-element ref="server"
      Type="dropdown"
      icon="dns_icon"
      Placeholder="Выберите сервер"
      :Items="servers"/>
      <input-element
      Type="text"
      icon="person_icon"
      Placeholder="Введите имя персонажа"
      Name="name"
      :val="nickname"
      @blurField="$event => (nickname = $event)"
      />
      <small v-if="nicknameError"> {{ nicknameError }} </small>
      <input-element
      Type="text"
      icon="ruble_icon"
      Placeholder="Введите сумму пополнения"
      :val="donate"
      @update:val="$event => (donate = $event)"
      Name="amount"
      />
      <small v-if="donateError"> {{ donateError }} </small>
      <input-element
      Type="text"
      icon="mail_icon"
      Placeholder="Введите ваш e-mail"
      @blurField="$event => (mail = $event)"
      Name="email"
      />
      <small v-if="emailError"> {{ emailError }} </small>
      <strong class="italic">1₽ = 1LC</strong>
      <vue-recaptcha
      class="mx-auto"
      v-show="true"
      sitekey="6LfM-OApAAAAACswmSUOaCWqolRJoCkDtbZet0c1"
      size="normal"
      theme="light"
      @verify="recaptchaVerified"
      @expire="recaptchaExpired"
      @fail="recaptchaFailed"
      @error="recaptchaError"
      hl="ru"
      ref="recaptcha"/>
      <small v-if="requestError"> {{ requestError }} </small>
      <button-accent
      tag="button"
      :class="['text-xl', {grayscale: isSubmitting}]"
      title="Перейти к оплате"
      type="submit"
      ></button-accent>
      <Teleport to="body">
        <Modal class="!z-[9999]" :isOpenValue="modal">
          <div class="payments flex flex-col self-center" ref="modalContent">
            <div class="payments__inputs flex w-full">
              <div class="flex flex-col w-full">
                <small class="input__title">Игровой никнейм</small>
                <input-element
                Type="text"
                Label="Игровой никнейм"
                Placeholder="Имя"
                Name="name"
                :val="nickname"
                @update:val="$event => (nickname = $event)"
                class="!w-full"
                />
              </div>
              <div class="flex flex-col w-full">
                <small class="input__title">Сумма пополнения</small>
                <input-element
                Type="text"
                Label="Сумма пополнения"
                Placeholder="Сумма"
                Name="amount"
                :val="donate"
                @update:val="$event => (donate = $event)"
                class="!w-full"
                />
              </div>
            </div>
            <div class="payments-wrapper flex">
              <div class="flex flex-col gap-5 p-5 max-md:gap-10 max-md:p-0">
                <h3 class="font-black italic uppercase text-nowrap max-md:hidden">Внутренние платежные системы</h3>
                <div class="payments__buttons">
                  <button class="buttons__item" v-for="payment in filterPayments(payments, false)" :name="payment.to" :key="payment">
                    <img :src="payment.icon" alt="">
                  </button>
                </div>
              </div>
              <div class="payments-divider opacity-20"></div>
              <div class="flex flex-col gap-5 p-5 max-md:gap-10 max-md:p-0">
                <h3 class="font-black italic uppercase text-nowrap max-md:text-wrap">Международные платежные системы</h3>
                <div class="payments__buttons">
                  <button class="buttons__item" v-for="payment in filterPayments(payments, true)" :name="payment.to" :key="payment">
                    <img :src="payment.icon" alt="">
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </Teleport>

    </form>
  </div>
</template>

<script setup>
import InputElement from '@/components/Forms/InputElement.vue'
import ButtonAccent from '../ButtonAccent.vue'
import VueRecaptcha from 'vue3-recaptcha2';
import { inject, ref } from 'vue'
import Modal from '../Modal.vue';
import { onClickOutside } from '@vueuse/core';
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import axios from 'axios';
import { useRouter } from 'vue-router';
// recaptcha
const recaptcha = ref(null)
const recaptchaResponse = ref(null)
function recaptchaVerified (response) {
  recaptchaResponse.value = response
}
function recaptchaExpired () {
  recaptcha.value.reset();
}
function recaptchaFailed () {

}
function recaptchaError (reason) {

}
// validation

// client-side
const requestError = ref(null)
const MIN_LENGTH = 3
const msg = {
  email: 'Электронная почта должна быть записана в следующем формате: example@gmail.com',
  string: 'Поле может содержать только строковое значение',
  required: 'Поле должно быть заполнено',
  min: `Поле должно содержать не менее ${MIN_LENGTH} символов`,
  number: 'Поле может содержать только числовые значения',
  integer: 'Поле может содержать только целочисленные значения',
  positive: 'Допустимы только положительные значения'
}

const { isSubmitting } = useForm()
const { value: mail, errorMessage: emailError } = useField(
  'email',
  yup.string(msg.string).trim().required(msg.required).email(msg.email)
)
const { value: nickname, errorMessage: nicknameError } = useField(
  'nickname',
  yup.string(msg.string).trim().required(msg.required).min(MIN_LENGTH, msg.min)
)
const { value: donate, errorMessage: donateError } = useField(
  'donate',
  yup.number(msg.number).required(msg.required).integer(msg.integer).positive(msg.positive).typeError('Поле должно содержать только числа').min(15, 'Минимальное значение - 15')
)
// server-side
const router = useRouter()
async function onSubmit () {
  const idServer = 0
  const valEmail = mail.value
  const valNickname = nickname.value
  const valDonate = donate.value
  console.log(valDonate, ' ', valEmail, ' ', valNickname);
  if (isSubmitting) {
    await axios.get('/api', {
      params: {
        request: 'checkPerson',
        name: nickname.value,
        'g-recaptcha-response': recaptchaResponse.value
      }
    })
      .then(response => {
        const status = response.data.status
        if (!status) {
          throw new Error(`Никнейм ${nickname.value} не сущестует`)
        } else {
          recaptcha.value.reset();
          openPayments()
        }
      })
      .catch(error => {
        requestError.value = error.code ? error.message = 'Ошибка соединения с сервером' : error
        console.error(error)
      })
  }
}
// modal logic

const modal = inject('modalOpenPayments')
const openPayments = () => {
  !modal.value ? modal.value = true : modal.value = false
  router.push({
    name: 'payments',
    query: {
      modal: 'payments'
    }
  })
}

const filterPayments = (array, value) => {
  return array.filter((item) => item.isInternational === value);
}
const payments = inject('paymentsOptions')
const servers = [
  { title: 'Москва', id: 0 }
]

const modalContent = ref(null)

onClickOutside(modalContent, openPayments)
</script>

<script>
export default {
  components: {
    InputElement,
    ButtonAccent,
    Modal,
    VueRecaptcha
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
  @apply max-md:bg-BASE_BACKGROUND w-[48.75rem] my-auto p-3 rounded-lg
  max-md:h-full max-md:w-full max-md:self-auto max-md:pt-28 gap-4 max-md:gap-0
}
.payments-wrapper{
  @apply bg-BASE_BACKGROUND rounded-xl justify-between flex relative max-md:justify-start
  max-md:mt-0 max-md:flex-col max-md:gap-10 max-md:overflow-y-auto max-md:overflow-x-hidden
}
.payments-divider{
  content: "";
  @apply flex w-[1px] h-full bg-white self-center justify-self-center max-md:hidden
}
.payments__inputs>*:nth-child(1){
  flex-shrink: 1;
}
.payments__inputs>*:nth-child(2){
  flex-shrink: 2;
}
.payments__inputs {
  @apply gap-x-2 self-center bg-BASE_BACKGROUND p-5 rounded-xl max-md:p-[1.25rem_0]
}
.payments__buttons{
  @apply grid grid-cols-2 gap-[0.625rem] grid-rows-3
}
.buttons__item{
  @apply aspect-[164/80] w-[10.25rem] h-20 bg-[#022648] hover:brightness-125 transition-all bg-opacity-50 border border-white border-opacity-10 rounded-lg justify-center items-center
  max-md:w-full max-md:h-auto
}
.buttons__item>img{
  @apply m-auto object-contain h-full p-3
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
